# Setup Junctions - Marketing Command Centers
# Creeert Windows directory junctions van ~/.claude/skills/<skill> naar OneDrive skills-source
# Eenmalig per computer uitvoeren.

$ErrorActionPreference = "Stop"

Write-Host ""
Write-Host "=== Marketing Command Centers - Junction Setup ===" -ForegroundColor Cyan
Write-Host ""

$scriptDir    = $PSScriptRoot
$skillsSource = Join-Path $scriptDir "skills-source"
$skillsDest   = Join-Path $env:USERPROFILE ".claude\skills"

if (!(Test-Path $skillsSource)) {
    Write-Host "FOUT: skills-source folder niet gevonden: $skillsSource" -ForegroundColor Red
    Write-Host "     Zorg dat dit script draait vanuit _MARKETING COMMAND CENTERS" -ForegroundColor Red
    exit 1
}

if (!(Test-Path $skillsDest)) {
    Write-Host "-> Folder ~/.claude/skills/ bestaat nog niet, aanmaken..." -ForegroundColor Gray
    New-Item -ItemType Directory -Force -Path $skillsDest | Out-Null
}

Write-Host "Bron (OneDrive):        $skillsSource" -ForegroundColor Gray
Write-Host "Doel (Cowork skills):   $skillsDest" -ForegroundColor Gray
Write-Host ""

$skills = Get-ChildItem -Path $skillsSource -Directory
if ($skills.Count -eq 0) {
    Write-Host "FOUT: Geen skill-folders gevonden in skills-source/" -ForegroundColor Red
    exit 1
}

Write-Host "De volgende $($skills.Count) skills worden gekoppeld:" -ForegroundColor White
foreach ($s in $skills) { Write-Host "  - $($s.Name)" }
Write-Host ""

$confirm = Read-Host "Doorgaan? (ja/nee)"
if ($confirm -ne "ja" -and $confirm -ne "yes" -and $confirm -ne "y") {
    Write-Host "Afgebroken." -ForegroundColor Yellow
    exit 0
}
Write-Host ""

$success = 0
$failed  = 0

foreach ($skill in $skills) {
    $target = Join-Path $skillsDest $skill.Name

    if (Test-Path $target) {
        $existing = Get-Item $target -Force
        if ($existing.Attributes -band [System.IO.FileAttributes]::ReparsePoint) {
            Remove-Item $target -Force -Recurse
        } elseif ($existing.PSIsContainer) {
            Write-Host "  WAARSCHUWING: $($skill.Name) bestaat al als gewone folder." -ForegroundColor Yellow
            $overwrite = Read-Host "  Overschrijven? (ja/nee)"
            if ($overwrite -eq "ja" -or $overwrite -eq "yes" -or $overwrite -eq "y") {
                Remove-Item $target -Force -Recurse
            } else {
                Write-Host "  Overgeslagen" -ForegroundColor Gray
                $failed++
                continue
            }
        }
    }

    try {
        New-Item -ItemType Junction -Path $target -Target $skill.FullName | Out-Null
        Write-Host "  [OK] $($skill.Name)  -> OneDrive" -ForegroundColor Green
        $success++
    } catch {
        Write-Host "  [FAIL] $($skill.Name) - $($_.Exception.Message)" -ForegroundColor Red
        $failed++
    }
}

Write-Host ""
Write-Host "=== Resultaat ===" -ForegroundColor Cyan
Write-Host "  [OK] Gekoppeld: $success" -ForegroundColor Green
if ($failed -gt 0) {
    Write-Host "  [!!] Fouten:   $failed" -ForegroundColor Red
}
Write-Host ""
Write-Host "TIP: zet deze folder op 'Deze bestanden altijd behouden op dit apparaat'" -ForegroundColor White
Write-Host "     (Rechtermuisknop op _MARKETING COMMAND CENTERS in OneDrive)" -ForegroundColor White
Write-Host ""
Write-Host "Volgende stap: herstart Cowork." -ForegroundColor Cyan
Write-Host ""
