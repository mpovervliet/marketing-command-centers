# deploy.ps1
# Publiceert het prototype in 1 commando: toevoegen, vastleggen met tijdstempel, pushen.
# De statische hosting bouwt daarna automatisch, in de orde van een minuut.
#
# Gebruik:  .\deploy.ps1            of:  .\deploy.ps1 "Korte omschrijving"
#
# Draai dit lokaal. Een cloud-sessie kan doorgaans geen bulk-content pushen;
# de sessie levert de bestanden, jij draait dit script.

param(
    [string]$Message = ""
)

$ErrorActionPreference = "Stop"
Set-Location -Path $PSScriptRoot

if (-not (Test-Path ".git")) {
    Write-Host "Geen git-repo in deze map. Eerst eenmalig opzetten, zie README.md." -ForegroundColor Yellow
    exit 1
}

# Waarschuwing bij bestanden die niet in een publicatie horen (QA blok B3).
$verdacht = Get-ChildItem -Recurse -File |
    Where-Object { $_.FullName -notmatch "\\\.git\\" } |
    Where-Object { $_.Name -match "(z_old|_tmp|-tmp|_archief|_preview|-kies)" }
if ($verdacht) {
    Write-Host "LET OP: werk- of archiefbestanden gevonden in de publicatie:" -ForegroundColor Yellow
    $verdacht | ForEach-Object { Write-Host "  - $($_.FullName.Substring($PSScriptRoot.Length + 1))" }
    $antwoord = Read-Host "Toch doorgaan? (j/n)"
    if ($antwoord -ne "j") { exit 1 }
}

git add -A

$status = git status --porcelain
if (-not $status) {
    Write-Host "Niets gewijzigd, niets te publiceren." -ForegroundColor Green
    exit 0
}

$stamp = Get-Date -Format "yyyy-MM-dd HH:mm"
if ([string]::IsNullOrWhiteSpace($Message)) {
    $commit = "Update: $stamp"
} else {
    $commit = "$Message ($stamp)"
}

git commit -m $commit
git push origin main

$hash = (git rev-parse --short HEAD).Trim()
Write-Host ""
Write-Host "Gepubliceerd. Commit: $hash" -ForegroundColor Green
Write-Host "Noteer deze hash bij de QA-scorekaart in ../Prototype-Register.md."
Write-Host "Doe daarna de statuscheck op de vijf vaste URL's uit ../Prototype-QA-Checklist.md."
