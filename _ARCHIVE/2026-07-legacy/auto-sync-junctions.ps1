# Auto-Sync Junctions - Marketing Command Centers
# Draait stil, zonder prompts. Bedoeld voor Windows Scheduled Task.
# Idempotent: voegt alleen ontbrekende junctions toe, raakt bestaande echte folders (built-in skills) niet aan.

$ErrorActionPreference = "SilentlyContinue"

$scriptDir    = $PSScriptRoot
$skillsSource = Join-Path $scriptDir "skills-source"
$skillsDest   = Join-Path $env:USERPROFILE ".claude\skills"
$logFile      = Join-Path $scriptDir "auto-sync.log"

function Log($level, $msg) {
    $ts = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    Add-Content -Path $logFile -Value "$ts  [$level]  $msg"
}

# Trim log als hij > 500 regels wordt
if ((Test-Path $logFile) -and ((Get-Content $logFile).Count -gt 500)) {
    $keep = Get-Content $logFile -Tail 200
    Set-Content -Path $logFile -Value $keep
}

if (!(Test-Path $skillsSource)) {
    Log "ERROR" "skills-source niet gevonden op $skillsSource (OneDrive niet gesynct?)"
    exit 1
}

if (!(Test-Path $skillsDest)) {
    New-Item -ItemType Directory -Force -Path $skillsDest | Out-Null
    Log "INFO" "Aangemaakt: $skillsDest"
}

$skills  = Get-ChildItem -Path $skillsSource -Directory
$added   = 0
$updated = 0
$kept    = 0
$skipped = 0

foreach ($skill in $skills) {
    $target = Join-Path $skillsDest $skill.Name

    if (Test-Path $target) {
        $existing = Get-Item $target -Force
        if ($existing.Attributes -band [System.IO.FileAttributes]::ReparsePoint) {
            # Is al een junction - verifieer dat hij nog naar juiste bron wijst
            $currentTarget = (Get-Item $target).Target
            if ($currentTarget -and $currentTarget -ne $skill.FullName) {
                Remove-Item $target -Force -Recurse
                New-Item -ItemType Junction -Path $target -Target $skill.FullName | Out-Null
                Log "UPDATE" "$($skill.Name) - junction hersteld naar nieuwe bron"
                $updated++
            } else {
                $kept++
            }
            continue
        }
        # Echte folder met zelfde naam (bv. Cowork built-in) - niet aanraken
        Log "SKIP" "$($skill.Name) bestaat als echte folder (built-in), overgeslagen"
        $skipped++
        continue
    }

    try {
        New-Item -ItemType Junction -Path $target -Target $skill.FullName | Out-Null
        Log "ADD" "$($skill.Name)"
        $added++
    } catch {
        Log "FAIL" "$($skill.Name) - $($_.Exception.Message)"
    }
}

# Alleen loggen als er iets gebeurd is, of 1x per dag een heartbeat
$todayLogged = Get-Content $logFile -ErrorAction SilentlyContinue |
               Select-String -Pattern "^$(Get-Date -Format 'yyyy-MM-dd').*HEARTBEAT"

if ($added -gt 0 -or $updated -gt 0) {
    Log "SYNC" "Resultaat: +$added nieuw, $updated gerepareerd, $kept onveranderd, $skipped built-ins"
} elseif (!$todayLogged) {
    Log "HEARTBEAT" "OK - $kept junctions actief, $skipped built-ins, geen wijzigingen"
}

exit 0
