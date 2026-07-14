# Installatie — eenmalig per computer

Je hebt deze folder nu in OneDrive. Om Cowork de skills te laten zien, moet je op elke computer één keer een **Windows directory junction** aanmaken van `C:\Users\<jij>\.claude\skills\<skill>` naar de juiste folder in OneDrive.

Dit zorgt dat:
- Jij je skills **bewerkt op één plek** (hier in OneDrive)
- Cowork ze leest alsof ze in `.claude/skills/` staan
- OneDrive sync-verandering = meteen actief (geen sync-script na updates)

## Eénmalige setup per computer

### Stap 1: Zorg dat OneDrive de folder lokaal houdt

1. Open Verkenner
2. Ga naar `C:\Users\<jij>\OneDrive\MP - Persoonlijk\`
3. Rechtermuisknop op `_MARKETING COMMAND CENTERS`
4. Kies **"Deze bestanden altijd behouden op dit apparaat"**

Waarom: zonder dit staat OneDrive op "files on demand" en worden bestanden pas gedownload bij eerste toegang. Dat kan skill-triggering vertragen of breken.

### Stap 2: Draai het junction-script

1. Open PowerShell (geen admin-rechten nodig — junctions mogen user-level)
2. Navigeer naar deze folder:
   ```powershell
   cd "C:\Users\$env:USERNAME\OneDrive\MP - Persoonlijk\_MARKETING COMMAND CENTERS"
   ```
3. Sta scripts toe voor deze sessie:
   ```powershell
   Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
   ```
4. Draai:
   ```powershell
   .\setup-junctions.ps1
   ```
5. Bevestig prompts. Script is idempotent — overschrijft bestaande junctions veilig.

### Stap 3: Herstart Cowork

Sluit en open Cowork. Skills worden nu geladen vanaf OneDrive via de junctions.

## Verificatie

Open Cowork, selecteer een willekeurige klantmap (bv. `HALLMARK/`), en typ:

> *"Check of er een Google Ads dossier is voor deze klant, anders onboard"*

Als Claude antwoordt met *"Ik gebruik de google-ads-setup skill..."* werkt alles.

## Wat doet het script precies?

```
Voor elke skill in skills-source/:
    maakt een Windows directory junction in C:\Users\<jij>\.claude\skills\<skill-naam>
    → wijst naar C:\Users\<jij>\OneDrive\MP - Persoonlijk\_MARKETING COMMAND CENTERS\skills-source\<skill-naam>
```

Een **junction** is geen kopie; het is een Windows-native verwijzing. Wijzig je een bestand in OneDrive, dan ziet Cowork het direct via de junction.

## Als een skill niet triggert

1. Check of `C:\Users\<jij>\.claude\skills\` de junctions bevat (staan ze er als gewone folders met een pijltje?)
2. Als ze er niet staan: draai het script nogmaals
3. Herstart Cowork
4. Als OneDrive de skill-content als "online only" markeert: zet de folder op "altijd behouden"

## Als je de hele setup wilt verwijderen

Draai `remove-junctions.ps1` (optioneel, wordt mee-uitgeleverd) of handmatig:
```powershell
# Voor elke google-ads-* junction:
Remove-Item "C:\Users\$env:USERNAME\.claude\skills\google-ads-specialist"
# etc.
```

Junctions kun je verwijderen zonder de OneDrive-bron aan te raken.

## Bestaande skills (competitor-intelligence, content-onpage-seo, etc.)

Die blijven zoals ze zijn — direct in `.claude/skills/`. Het script koppelt automatisch elke folder uit `skills-source/` (huidig: alle `google-ads-*` en alle `meta-ads-*`, in de toekomst `klaviyo-*`).

Wil je ook andere bestaande skills in OneDrive hebben? Verplaats ze handmatig naar `skills-source/` en draai het script opnieuw — het pakt nieuwe folders vanzelf op (geen script-wijziging nodig).
