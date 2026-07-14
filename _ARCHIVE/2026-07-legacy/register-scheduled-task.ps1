# Registreer Windows Scheduled Task voor auto-sync van skill-junctions.
# EENMALIG uitvoeren per computer (geen admin-rechten nodig).
# Na registratie draait auto-sync-junctions.ps1 automatisch bij logon + elk kwartier.

$ErrorActionPreference = "Stop"

$taskName   = "MP-Skills-AutoSync"
$scriptPath = Join-Path $PSScriptRoot "auto-sync-junctions.ps1"

if (!(Test-Path $scriptPath)) {
    Write-Host "FOUT: auto-sync-junctions.ps1 niet gevonden naast dit script." -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "=== MP Skills Auto-Sync - Scheduled Task Setup ===" -ForegroundColor Cyan
Write-Host ""
Write-Host "Dit registreert een Windows taak die:" -ForegroundColor White
Write-Host "  - Bij elke login van $env:USERNAME draait" -ForegroundColor Gray
Write-Host "  - Daarna elke 15 minuten draait zolang je ingelogd bent" -ForegroundColor Gray
Write-Host "  - Automatisch nieuwe skills in skills-source/ oppikt" -ForegroundColor Gray
Write-Host "  - Bestaande junctions repareert als ze gebroken zijn" -ForegroundColor Gray
Write-Host "  - Stil op de achtergrond werkt (geen venster)" -ForegroundColor Gray
Write-Host ""
Write-Host "Script:  $scriptPath" -ForegroundColor Gray
Write-Host ""

# Verwijder bestaande task als hij er al is (voor idempotente herinstallatie)
$existing = Get-ScheduledTask -TaskName $taskName -ErrorAction SilentlyContinue
if ($existing) {
    Write-Host "-> Bestaande '$taskName' taak gevonden, wordt vervangen..." -ForegroundColor Yellow
    Unregister-ScheduledTask -TaskName $taskName -Confirm:$false
}

$action = New-ScheduledTaskAction `
    -Execute "powershell.exe" `
    -Argument "-NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -File `"$scriptPath`""

# Trigger 1: bij elke logon
$triggerLogon = New-ScheduledTaskTrigger -AtLogOn -User $env:USERNAME

# Trigger 2: elke 15 minuten, voor altijd
$triggerInterval = New-ScheduledTaskTrigger -Once -At (Get-Date).AddMinutes(1)
$triggerInterval.Repetition = (New-ScheduledTaskTrigger `
    -Once -At (Get-Date) `
    -RepetitionInterval (New-TimeSpan -Minutes 15)).Repetition

$principal = New-ScheduledTaskPrincipal `
    -UserId $env:USERNAME `
    -LogonType Interactive `
    -RunLevel Limited

$settings = New-ScheduledTaskSettingsSet `
    -AllowStartIfOnBatteries `
    -DontStopIfGoingOnBatteries `
    -StartWhenAvailable `
    -ExecutionTimeLimit (New-TimeSpan -Minutes 5) `
    -MultipleInstances IgnoreNew

Register-ScheduledTask `
    -TaskName $taskName `
    -Description "Koppelt skills uit _MARKETING COMMAND CENTERS/skills-source/ automatisch aan .claude/skills/" `
    -Action $action `
    -Trigger @($triggerLogon, $triggerInterval) `
    -Principal $principal `
    -Settings $settings | Out-Null

Write-Host "[OK] Taak '$taskName' geregistreerd." -ForegroundColor Green
Write-Host ""

# Meteen 1x draaien om nu al gesynct te zijn
Write-Host "-> Eerste sync nu uitvoeren..." -ForegroundColor Cyan
Start-ScheduledTask -TaskName $taskName
Start-Sleep -Seconds 3

$logPath = Join-Path $PSScriptRoot "auto-sync.log"
if (Test-Path $logPath) {
    Write-Host ""
    Write-Host "Laatste log-regels:" -ForegroundColor White
    Get-Content $logPath -Tail 10 | ForEach-Object { Write-Host "  $_" -ForegroundColor Gray }
}

Write-Host ""
Write-Host "=== Klaar ===" -ForegroundColor Cyan
Write-Host "Vanaf nu: gooi een nieuwe skill in skills-source/ -> binnen 15 min" -ForegroundColor White
Write-Host "beschikbaar in Cowork. Geen handmatige stappen meer." -ForegroundColor White
Write-Host ""
Write-Host "Controleren of het werkt:  taskschd.msc  -> zoek '$taskName'" -ForegroundColor Gray
Write-Host "Log bekijken:              Get-Content '$logPath' -Tail 20" -ForegroundColor Gray
Write-Host "Verwijderen indien nodig:  Unregister-ScheduledTask -TaskName '$taskName'" -ForegroundColor Gray
Write-Host ""
