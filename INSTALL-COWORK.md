# Installatie in Cowork — MP Marketing Command Centers

Dit is het definitieve installatie-recept om de Marketing Command Centers als plugins in Cowork te activeren. Eenmaal geïnstalleerd werken ze vanuit **elke klantmap**.

## Architectuur in één oogopslag

Je hebt nu één lokale **plugin marketplace** in OneDrive met daarin **6 plugins**:

```
_MARKETING COMMAND CENTERS/plugins/
├── .claude-plugin/
│   └── marketplace.json              ← registry van alle 6 plugins
├── google-ads-command-center/        ← 7 skills + knowledge-base
├── meta-ads-command-center/          ← 7 skills + knowledge-base
├── seo-geo-command-center/           ← 8 skills + knowledge-base
├── badenman-copilot/                 ← 6 skills (klant)
├── springbok-tools/                  ← 2 skills (docx + pptx)
└── mp-personal-freelance/            ← 4 skills (CV / brieven / vacatures / scenario)
```

Totaal: **34 skills** verdeeld over 6 plugins.

## Stap 1 — Marketplace toevoegen

Open in Cowork een willekeurige sessie (klantmap maakt niet uit — de plugin-registry is globaal). Voer uit:

```
/plugin marketplace add "C:\Users\mpove\OneDrive\MP - Persoonlijk\_MARKETING COMMAND CENTERS\plugins"
```

Cowork leest dan `.claude-plugin/marketplace.json` en registreert de marketplace onder de naam `mp-marketing-command-centers`.

## Stap 2 — Plugins installeren

Installeer alle 6 plugins in één keer:

```
/plugin install google-ads-command-center@mp-marketing-command-centers
/plugin install meta-ads-command-center@mp-marketing-command-centers
/plugin install seo-geo-command-center@mp-marketing-command-centers
/plugin install badenman-copilot@mp-marketing-command-centers
/plugin install springbok-tools@mp-marketing-command-centers
/plugin install mp-personal-freelance@mp-marketing-command-centers
```

Je kunt desgewenst alleen de plugins installeren die je nu nodig hebt (bv. enkel `springbok-tools` voor klanten waar de huisstijl niet relevant is voor rapportage, of enkel `badenman-copilot` voor Badenman-sessies). Achteraf bijplaatsen kan altijd met hetzelfde commando.

## Stap 3 — Activeren

```
/reload-plugins
```

Vanaf dit punt zijn de skills beschikbaar in élke Cowork-sessie, ongeacht de klantmap die je mount.

## Verificatie

Na reload zou je de skills moeten zien verschijnen in de lijst met `<available_skills>` aan het begin van elk nieuw gesprek. De namen krijgen een plugin-prefix, bijvoorbeeld:

- `google-ads-command-center:google-ads-specialist`
- `meta-ads-command-center:meta-ads-audit`
- `seo-geo-command-center:seo-offpage-authority`
- `badenman-copilot:growth-lead-badenman`
- `springbok-tools:springbok-slideshow`
- `mp-personal-freelance:cv-tailorer`

## Updates & uitbreiding — waarom dit nu "voor altijd" werkt

**Nieuwe skill toevoegen aan een bestaande command center:**
1. Voeg de skill toe in `plugins/<plugin-naam>/skills/<nieuwe-skill>/SKILL.md` (in OneDrive).
2. Draai `/reload-plugins` in Cowork.

De plugin leest direct uit je OneDrive — er is geen junction, geen sync-script, geen gedoe. OneDrive synct de wijziging, Cowork pikt ze bij de volgende reload op.

**Nieuwe command center toevoegen:**
1. Maak `plugins/<nieuwe-command-center>/` met `.claude-plugin/plugin.json` en `skills/`.
2. Voeg een entry toe in `plugins/.claude-plugin/marketplace.json`.
3. `/plugin install <nieuwe-naam>@mp-marketing-command-centers` en `/reload-plugins`.

**Skill-content aanpassen:**
Gewoon het SKILL.md-bestand in OneDrive bewerken. `/reload-plugins` en klaar.

## Wat te doen met de oude junction-scripts

De volgende bestanden zijn **obsolete voor Cowork** en kunnen blijven staan voor eventueel gebruik met Claude Code CLI:

- `setup-junctions.ps1`
- `auto-sync-junctions.ps1`
- `register-scheduled-task.ps1`
- `auto-sync.log`

Als je ook de Scheduled Task wilt verwijderen (niet meer nodig voor Cowork):

```powershell
Unregister-ScheduledTask -TaskName "MP-Skills-AutoSync" -Confirm:$false
```

## Rollback / troubleshooting

Als iets niet goed gaat:

```
/plugin uninstall <plugin-naam>@mp-marketing-command-centers
/plugin marketplace remove mp-marketing-command-centers
```

De originele `skills-source/` map blijft intact als backup — niets is verplaatst, alles is gekopieerd. Je kunt dus altijd terug naar de oude opzet.
