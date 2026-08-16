---
name: skill-github-sync
description: >
  MP's bewaker van de skill-naar-GitHub pipeline: zorgt dat elke nieuwe of
  gewijzigde skill uit een sessie altijd terechtkomt in skills-source/ op
  github.com/mpovervliet/marketing-command-centers, nooit lokaal of
  sessie-only blijft hangen. Gebruik ALTIJD als laatste stap bij het maken,
  herschrijven of aanvullen van een skill, ongeacht welke skill dat werk
  deed. Trigger bij "maak een nieuwe skill", "update deze skill", "sla deze
  skill op", "push dit naar mijn command center", "voeg dit toe aan mijn
  skill-bibliotheek", "zet dit in GitHub", "deze skill moet in de
  marketplace komen", "ik heb een skill geschreven voor dit probleem", "hoe
  komt dit in mijn command centers", "is dit al gepusht", "installeer dit
  niet lokaal", of elke vraag over het opslaan of publiceren van een skill.
  Schrijft via de GitHub contents-API naar skills-source/ en plugin-map.json
  en laat de auto-build-workflow de rest doen.
---

# skill-github-sync

Je bent MP's bewaker van de skill-naar-GitHub pipeline: de skill die garandeert dat skill-werk uit een sessie nooit lokaal blijft hangen, maar altijd terechtkomt in skills-source/ op github.com/mpovervliet/marketing-command-centers, het command center dat Cowork automatisch synchroniseert. Deze skill is zelf onderdeel van ai-automation-command-center en behandelt het beheer van de hele skill-bibliotheek, niet de inhoud van een individuele klant-skill.

## Wanneer activeren

- Een sessie heeft een nieuwe skill geschreven (via skill-creator, skill-distillation, of ad hoc) en die staat nog alleen als los bestand of in een sessie-map
- Een bestaande skill in skills-source/ is inhoudelijk gewijzigd: nieuwe kennis, nieuwe sectie, herschreven playbook, bijgewerkte 2026-feiten
- MP zegt "dit moet in mijn command center", "sla dit skill-werk op", "publiceer dit", of vergelijkbaar
- Een sessie werkt in de WERK-map en heeft een .plugin-bundel of los SKILL.md gebouwd dat niet overeenkomt met wat op GitHub staat
- Er is een nieuwe plugin nodig, zoals een nieuw command center of een nieuwe klant-copilot, die nog geen entry heeft in plugin-map.json
- MP vraagt na te gaan of een eerdere skill-wijziging al gepusht is, of waarom een sessie een oude versie van een skill gebruikt
- Een sessie ontdekt tijdens ander werk dat een geinstalleerde plugin een ouder versienummer toont dan wat lokaal of in een eerdere sessie is gebouwd

## Werkwijze

1. Bepaal scope: gaat het om een gloednieuwe skill, een inhoudelijke wijziging van een bestaande skill, of een nieuwe plugin-bundel voor een nieuw command center of nieuwe klant-copilot.
2. Lees SKILL-WRITING-STANDARDS.md en skill-template.md uit de repo via github_tool get_file voordat je de SKILL.md schrijft of herschrijft, zodat frontmatter, sectiestructuur en toon kloppen met de rest van de bibliotheek.
3. Schrijf of update skills-source/<skill-naam>/SKILL.md rechtstreeks via github_tool, actie rest, methode PUT, pad /repos/mpovervliet/marketing-command-centers/contents/skills-source/<skill>/SKILL.md, met base64-content in de body. Bij een update van een bestaand bestand: haal eerst de huidige sha op met get_file en geef die mee in de PUT-body, anders weigert GitHub de write.
4. Bij een nieuwe skill: voeg hem toe aan de juiste plugin-array in plugin-map.json. Bij een nieuwe plugin: maak een volledige plugin-entry aan met name, version, description, keywords en skills. Werk bij een uitbreiding van een bestaande plugin ook de description en keywords bij als de scope van de plugin verandert.
5. Commit en push beide bestanden naar main met een aparte, herkenbare commit per skill. Er is geen lokale git-clone nodig: de contents-API werkt vanuit elke sessie, ongeacht welke klantmap op dat moment is aangesloten.
6. Bouw plugins/ of .claude-plugin/marketplace.json nooit zelf handmatig en push die ook niet zelf. De GitHub Action build-plugins.yml in .github/workflows/ draait automatisch op elke push die skills-source/**, plugin-map.json of build-plugins.py raakt, valideert met build-plugins.py en commit de geregenereerde plugins/-map en marketplace.json terug naar main.
7. Controleer na de push de Actions-uitkomst via github_tool actie workflows, of via de Actions-tab op GitHub. Een groene run bevestigt dat de bron klopt; een rode run betekent dat de marketplace nog de oude versie toont totdat het probleem gefixt is.
8. Bevestig aan MP met de commit-URL, de Actions-run-URL en welke plugin(s) de wijziging raakt. Noem dat de marketplace-sync in Cowork automatisch bijwerkt via Directory -> Plugins, of handmatig via /plugin marketplace update mp-marketing-command-centers.
9. Log substantiele toevoegingen, zoals een nieuw command center of een nieuwe klant-copilot, kort in NEXT-SESSION.md en zo nodig in SKILLS-ROADMAP-2026-07.md, zodat een volgende sessie de context direct heeft.

## Kern-kennis (2026)

### De pipeline in een oogopslag

| Stap | Wie/wat | Waar |
|---|---|---|
| 1. Schrijven | Sessie (Sonnet of Opus) | skills-source/<skill>/SKILL.md |
| 2. Mappen | Sessie | plugin-map.json |
| 3. Committen en pushen | Sessie via github_tool contents-API | main branch, geen lokale git nodig |
| 4. Valideren en bouwen | GitHub Action build-plugins.yml | draait build-plugins.py in CI |
| 5. Terugschrijven | GitHub Action | plugins/<plugin>/, .claude-plugin/marketplace.json |
| 6. Distributie | Cowork marketplace-sync | automatisch, "Sync automatically" staat aan |

### Command-skelet: schrijven via de GitHub contents-API

1. Bestaat het bestand al? `github_tool(action=get_file, owner=mpovervliet, repo=marketing-command-centers, path=skills-source/<skill>/SKILL.md)`. Bestaat het niet: 404, ga direct naar stap 3 zonder sha.
2. Bestaat het wel: neem de sha uit de response over.
3. Schrijf: `github_tool(action=rest, method=PUT, path=/repos/mpovervliet/marketing-command-centers/contents/skills-source/<skill>/SKILL.md, body={"message": "...", "content": "<base64>", "branch": "main", "sha": "<alleen bij update>"})`.
4. Herhaal dezelfde procedure voor plugin-map.json als die wijzigt.
5. Check de build: `github_tool(action=workflows, owner=mpovervliet, repo=marketing-command-centers)` en lees de laatste run-status.

### Waarom de contents-API en geen lokale git

- Sessies werken vaak vanuit de WERK-map op OneDrive, niet vanuit een geclonede repo. Een lokale git-clone zou per sessie opnieuw opgezet en gecheckt moeten worden en is een extra faalpunt zonder toegevoegde waarde.
- github_tool heeft schrijfrechten op main en werkt zonder lokale checkout: get_file voor de huidige sha, rest PUT met base64-content voor de write, workflows voor de CI-status.
- Bij een update van een bestaand bestand is de huidige sha verplicht in de PUT-body. Ontbreekt die, dan geeft GitHub een 409 of 422 conflict dat eruitziet als een permissieprobleem maar dat niet is.

### Wat de sessie wel en niet zelf doet

- Wel: skills-source/<skill>/SKILL.md schrijven of bijwerken, plugin-map.json bijwerken, committen, pushen, de build-status controleren.
- Niet: zelf build-plugins.py draaien en de output handmatig naar plugins/ pushen. Dat dupliceert bouwlogica die al in CI zit en raakt makkelijk uit sync, zoals eerder gebeurde toen een lokale 0.5.0-bundel met negen skills nooit gepusht werd terwijl main op 0.1.0 met zeven skills bleef staan.
- Niet: een los .plugin-bestand als eindresultaat beschouwen. Een .plugin-zip is alleen een lokale fallback-installatiemethode via Cowork -> Customize -> Personal plugins, geen vervanging van de GitHub-bron.

### Kwaliteitspoort voor je pusht

- Skill voldoet aan SKILL-WRITING-STANDARDS.md: folded-scalar description van 700 tot 950 tekens, 8 tot 15 triggerzinnen, 200 tot 290 regels, de acht kernsecties in de vaste volgorde, geen em-dash of en-dash, geen emoji.
- name: in de frontmatter is byte-identiek aan de foldernaam in skills-source/.
- Elke skill of tool die de SKILL.md noemt, bestaat ook echt: controleer tegen skills-source/ en de actuele tool-lijst.
- plugin-map.json blijft geldig JSON. Een syntaxfout hier laat de hele build-workflow falen voor alle plugins tegelijk, niet alleen voor de gewijzigde.

### Faalscenario's en hoe je ze herkent

- Build-Action faalt, zichtbaar als rode status op github.com/mpovervliet/marketing-command-centers/actions: meestal een validatiefout uit build-plugins.py, zoals een ontbrekende skill-folder of een description die te lang is of het verkeerde format heeft. Lees de Action-log via de html_url uit de workflow-run, fix skills-source/, push opnieuw.
- "Unknown skill" in Cowork na een sync: vaak een plugin.json-truncation-probleem, of de marketplace-sync in Cowork stond nog niet op automatisch ingesteld.
- get_file geeft 404 bij wat een update had moeten zijn: de skill bestaat nog niet op GitHub. Gebruik dan de create-vorm van de PUT, dus zonder sha, in plaats van de update-vorm.
- PUT geeft 409 of 422: de sha in de body klopt niet meer omdat een andere sessie of proces intussen al pushte. Haal de sha opnieuw op met get_file en probeer de PUT nogmaals.
- Actions-tab toont helemaal geen runs na een push: controleer of het gewijzigde pad daadwerkelijk binnen de paths-filter van build-plugins.yml valt, dat zijn skills-source/**, plugin-map.json en build-plugins.py zelf.

### Beslisboom: welke actie hoort bij welke situatie

- Skill bestaat nog nergens, ook niet lokaal
  - En de inhoud is nog niet geschreven: eerst skill-distillation of skill-creator inschakelen, daarna pas skill-github-sync voor de publicatie
  - En de inhoud staat al klaar in de sessie: direct door naar Werkwijze stap 2 en verder
- Skill bestaat al in skills-source/ en wordt uitgebreid
  - Alleen kleine correcties, zoals een verouderd 2026-feit: update de SKILL.md, geen version-bump in plugin-map.json nodig
  - Nieuwe kennis of een nieuwe sectie: update de SKILL.md, overweeg een version-bump van de plugin als de scope merkbaar groeit
- Skill hoort bij een geheel nieuwe plugin, zoals een nieuw command center of een nieuwe klant-copilot
  - Maak eerst de plugin-entry in plugin-map.json aan met een lege of eerste skills-array
  - Voeg daarna elke skill apart toe met zijn eigen commit, zodat een build-fout op een van de skills de andere niet blokkeert
- Onduidelijk of iets al gepusht is: get_file op skills-source/<naam>/SKILL.md is het snelste antwoord, sneller dan door de commit-historie bladeren

### Checklist voor de allereerste sync van een nieuw command center

1. plugin-map.json bevat een nieuwe, geldige plugin-entry met name, version 0.1.0, description, keywords en een skills-array
2. Elke skill in die array heeft een bijbehorende map in skills-source/ met een SKILL.md die de kwaliteitspoort haalt
3. De push naar plugin-map.json en de eerste skill(s) is gebeurd via de contents-API, niet via een lokaal bestand dat ergens blijft liggen
4. De build-Action is gecontroleerd op een groene run voor deze wijziging
5. De marketplace-entry in Cowork toont de nieuwe plugin na de eerstvolgende sync
6. NEXT-SESSION.md noemt het nieuwe command center kort, zodat een volgende sessie niet opnieuw hoeft te ontdekken dat het bestaat

### Voorbeeldscenario: van sessie-ontdekking tot bevestigde push

Een sessie werkt in de WERK-map en stuit op een lokaal gebouwde .plugin-bundel met een hoger versienummer dan wat op GitHub staat, met een of meer skills die nog niet in skills-source/ voorkomen. De juiste volgorde is dan: eerst per ontbrekende of gewijzigde skill de SKILL.md-inhoud reconstrueren of overnemen uit de lokale bundel, die inhoud toetsen aan SKILL-WRITING-STANDARDS.md, en pas dan pushen. Nooit de lokale .plugin-zip als geheel naar GitHub kopieren: de map-structuur van een gebouwde plugin (met .claude-plugin/plugin.json en een platte skills-map) wijkt af van de bron-structuur in skills-source/, en een blinde kopie zou de volgende build-Action laten falen op de validatie-stap.

### Meerdere sessies die tegelijk pushen

MP werkt soms vanaf desktop en laptop tegelijk, of start een tweede sessie terwijl de eerste nog aan het pushen is. De contents-API is hier veilig door het sha-mechanisme: de tweede push op hetzelfde bestand krijgt een 409 of 422 als de eerste sessie intussen al wegschreef. Los dat niet op door de sha te forceren of te negeren, want dat overschrijft de wijziging van de andere sessie stilzwijgend. Haal in plaats daarvan het bestand opnieuw op, controleer of de eigen wijziging nog nodig is bovenop wat de andere sessie al deed, en push pas daarna opnieuw.

### Commit-boodschappen per situatie

| Situatie | Commit-boodschap template |
|---|---|
| Nieuwe skill | feat: <skill> toegevoegd aan <plugin> |
| Inhoudelijke update | update: <skill> - <korte samenvatting van wat wijzigde> |
| Nieuw command center | feat: <plugin> command center (N skills) |
| Correctie na build-fout | fix: <skill> - <wat de validator blokkeerde> |
| Version-bump zonder inhoudswijziging | chore: <plugin> versie <oud> naar <nieuw> |

### Relatie met de standing instructions

MP's Cowork custom instructions bevatten een regel die skill-werk verplicht naar GitHub laat gaan als laatste stap van elke sessie. Deze skill is de uitvoering van die regel: waar de standing instructions het gedrag afdwingen op sessie-niveau, ongeacht welke skill actief is, geeft skill-github-sync de concrete stappen, API-aanroepen en valkuilen om dat gedrag correct uit te voeren. Verander je de pipeline zelf, zoals een andere build-tool of een ander marketplace-mechanisme, werk dan zowel deze skill als de standing instructions bij, anders lopen ze uit elkaar.

## Anti-patterns

- Een skill in de WERK-map bouwen en daar laten liggen voor later, want dat later komt vrijwel nooit; push meteen na afronding van de skill.
- Zelf een .plugin-zip bouwen en die als klaar beschouwen zonder de bron in skills-source/ te pushen, want de zip is een kopie en geen bron van waarheid.
- plugins/ of marketplace.json handmatig aanpassen binnen een sessie, want dat overschrijft wat de Action bij de volgende push toch weer regenereert en veroorzaakt onnodige verwarring.
- Een sha vergeten mee te geven bij een update van een bestaand bestand, wat resulteert in een falende PUT die eruitziet als een permissieprobleem maar dat niet is.
- Meerdere ongerelateerde skills in een enkele commit samenvoegen zonder duidelijke boodschap, want dat maakt de git-historie onbruikbaar voor toekomstige "wanneer is dit gewijzigd"-vragen.
- Aannemen dat de marketplace direct zichtbaar is in Cowork na een push, want de sync-cyclus en een eventuele sessie-herstart kunnen enige tijd vergen.
- Een nieuwe plugin toevoegen zonder de description en keywords in plugin-map.json bij te werken, want de marketplace-listing blijft dan onvindbaar op de juiste triggerwoorden.
- De Actions-uitkomst niet controleren na een push en aannemen dat alles goed ging, terwijl een rode build betekent dat de marketplace nog de oude, ongewijzigde versie toont.
- Skills schrijven die de acht kernsecties uit SKILL-WRITING-STANDARDS.md overslaan om tijd te besparen, want die skills halen de kwaliteitspoort niet en moeten later alsnog herschreven worden.
- Een sha-conflict oplossen door de wijziging van een andere sessie te overschrijven in plaats van de twee wijzigingen samen te voegen, want dat verliest werk dat elders al vastgelegd was.

### Herstelpad na een mislukte build

1. Open de mislukte run via de html_url uit de workflow-run of via de Actions-tab op GitHub en lees de foutmelding van build-plugins.py letterlijk over.
2. Herleid de fout naar een van de bekende categorieen: ontbrekende skill-folder, ontbrekend of fout geformatteerd SKILL.md, description buiten de lengtegrens, of ongeldige JSON in plugin-map.json.
3. Fix het bronbestand in skills-source/ of plugin-map.json via dezelfde get_file plus rest PUT procedure, met de nieuwe sha.
4. Push de fix als aparte commit met het "fix:"-prefix uit de commit-boodschappen-tabel.
5. Controleer opnieuw via github_tool actie workflows dat de nieuwe run groen is voordat je de sync aan MP bevestigt.

## Output-formaat

Bevestiging aan MP na elke sync, als kort blok:

```
Skill gesynchroniseerd: <skill-naam>
Plugin: <plugin-naam> (v<versie>)
Commit: <commit-url>
Build-Action: <actions-run-url> (status: success/failed)
Marketplace: sync automatisch, of handmatig via /plugin marketplace update mp-marketing-command-centers
```

## Dependencies

- github_tool (MCP Gateway) met schrijfrechten op mpovervliet/marketing-command-centers
- skills-source/, plugin-map.json, build-plugins.py, SKILL-WRITING-STANDARDS.md en skill-template.md in de repo-root
- .github/workflows/build-plugins.yml voor het automatisch bouwen en terugcommitten van plugins/ en marketplace.json
- Cowork marketplace "marketing-command-centers", gekoppeld aan deze repo met "Sync automatically" aan
- NEXT-SESSION.md en SKILLS-ROADMAP-2026-07.md voor het vastleggen van grotere wijzigingen
- WORKFLOW.md voor de bredere afspraken over hoe MP en sessies samen aan dit repo werken

## Integratie met andere skills

- skill-distillation: bouwt de inhoud van een nieuwe skill uit een herhaalde workflow; skill-github-sync is de verplichte laatste stap die het resultaat publiceert.
- skill-library-audit: beoordeelt de hele bibliotheek elk kwartaal en gebruikt dezelfde push-mechaniek voor correcties die daaruit volgen.
- skill-creator: genereert een SKILL.md-skelet indien geinstalleerd; skill-github-sync neemt het daarna over voor plaatsing in skills-source/ en de plugin-mapping.
- knowledge-capture: legt losse inzichten vast die nog geen skill zijn; zodra iets skill-waardig wordt, schakelt dat door naar skill-distillation en vervolgens naar skill-github-sync.
- skill-library-audit en skill-github-sync delen dezelfde repo-toegang; een audit die correcties aanbeveelt, levert die correcties via deze skill af in plaats van via een los kanaal.

## Tips

- Push per skill een aparte commit met een duidelijke boodschap, zoals "feat: <skill> toegevoegd" of "update: <skill> - <wat wijzigde>", zodat SKILLS-ROADMAP-2026-07.md en NEXT-SESSION.md makkelijk bij te houden blijven.
- Check na een push altijd de Actions-uitkomst via github_tool in plaats van aan te nemen dat de build slaagde; een rode build betekent dat de marketplace nog de oude versie toont.
- Bij twijfel of een skill al op GitHub staat: get_file op skills-source/<naam>/SKILL.md is sneller dan door commits bladeren.
- Werk je met een grote plugin-bundel van negen of meer skills, zoals design-os-command-center: push skills apart in plaats van in een megacommit, zodat een build-fout op een enkele skill niet de hele batch blokkeert.
- De .plugin-zip-fallback via Cowork -> Customize -> Personal plugins is alleen bedoeld voor noodgevallen of offline testen; de git-marketplace blijft de bron van waarheid.
- Vergeet de version-bump in plugin-map.json niet bij een inhoudelijke wijziging van een bestaande plugin, anders toont de marketplace-entry een verouderd versienummer terwijl de inhoud al nieuw is.
- Wordt plugin-map.json ongeldige JSON, bijvoorbeeld door een missende komma, dan faalt de build voor alle plugins tegelijk; valideer lokaal met json.load() als je met de hand in het bestand werkt.
- Gebruik workflow_dispatch als je zeker wilt weten dat de Action zelf werkt, los van een inhoudelijke wijziging: die trigger draait build-plugins.py zonder dat er iets in skills-source/ hoeft te veranderen.
- Bewaar geen wachtwoorden, tokens of klant-persoonsgegevens in een SKILL.md; dit repo is de bron voor meerdere geinstalleerde plugins en dus breder zichtbaar dan een enkele klantmap.
- Behandel deze skill zelf ook als onderdeel van skills-source/: een verbetering aan skill-github-sync gaat via exact dezelfde pipeline die hij beschrijft.

*Eerste versie: augustus 2026. Herzie wanneer de build-plugins.py-logica wijzigt, de GitHub Action van vorm verandert, of de Cowork marketplace-sync anders gaat werken.*
