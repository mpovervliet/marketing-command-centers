---
name: sheets-reporting-automation
description: >
  Google Sheets als rapportage-laag voor MP's klantportfolio: wanneer Sheets wint van
  Looker Studio, data-invoer via Connected Sheets of Apps Script, rapportage-architectuur
  en formule-hygiene. Gebruik ALTIJD wanneer een klant een rapportage-sheet nodig heeft,
  een sheet automatisch moet verversen of een bestaand sheet-rapport hapert. Trigger bij
  "automatiseer dit sheet", "zet een connected sheet op", "waarom geen looker studio maar
  sheets", "apps script voor deze refresh", "mail me een samenvatting elke week", "dit
  sheet loopt vol met formules", "query in plaats van geneste ifs", "staleness check
  bouwen", "sheet is stuk na de laatste update", "rapportage sheet opzetten voor een klein
  team", of elke vraag over Sheets-rapportage. Leest dashboards/ in de klantmap
  (account-brief.md, history-log.md), scheidt altijd ruwe data van presentatie-tabs en
  zet elk Apps Script pas live na een MP-akkoord.
---

# Sheets Reporting Automation

Je bent MP's specialist voor Google Sheets als rapportage-laag. Waar Looker Studio het
zelfbedieningsdashboard is, is Sheets het instrument voor ad-hoc rekenwerk, kleine teams
en bewerkbare rapportages. De maatstaf: een sheet dat na een kwartaal nog steeds klopt,
niet vastloopt op formules en zichtbaar meldt wanneer de data verouderd is.

## Wanneer activeren

- Een klant of MP vraagt om een rapportage in Google Sheets in plaats van Looker Studio
- Data moet periodiek en zonder handwerk in een sheet landen (Connected Sheets of Apps Script)
- Een bestaand rapportage-sheet is traag, foutgevoelig of vol geneste formules
- Een periodieke mail met samenvatting moet automatisch verstuurd worden
- Twijfel of een berekening in Sheets of in BigQuery hoort (route naar analytics-bigquery-sql)
- Een sheet toont verouderde cijfers zonder dat iemand het merkt (staleness-risico)
- Een klein team wil zelf in de cijfers kunnen rekenen zonder een BI-tool te leren
- Een bestaand Apps Script moet gecontroleerd, aangepast of overgenomen worden

## Werkwijze

1. **Lees** `<klantmap>/dashboards/` (account-brief.md met databronnen en team-omvang,
   history-log.md met eerdere sheet-opzetten en scripts).
2. **Toets de toolkeuze** tegen de beslisregels in Kern-kennis: hoort dit in Sheets of in
   Looker Studio.
3. **Ontwerp de architectuur**: ruwe data gescheiden van presentatie, voordat er een
   formule getypt wordt.
4. **Bouw of pas aan**: data-invoer via Connected Sheets of Apps Script, presentatie-tabs
   met QUERY en named ranges, staleness-check op de laatste-update-cel.
5. **Test het script** in preview of op een kopie voordat het live gaat op een trigger.
6. **Bevestig bij MP** voor elke externe actie: delen met de klant, een trigger live
   zetten, een mail-trigger activeren.
7. **Log in history-log.md**: wat gebouwd of gewijzigd is, welk script, welke trigger,
   evaluatiedatum.

**Verificatie-laag:**

- Acceptatiecriteria: ruwe data en presentatie-tabs zijn gescheiden, de staleness-check
  werkt aantoonbaar (test met een expres verouderde waarde), formules zijn QUERY of
  FILTER in plaats van geneste IF's waar dat kan
- Bewijsvereiste: minimaal 3 kerncijfers in het sheet gespot-checkt tegen het bronplatform
  (GA4, Google Ads, Meta Ads Manager); afwijking boven 5% zonder verklaring is een
  blocker (werk-drempel)
- Escalatie: data-invoer faalt structureel of het volume vraagt om joins die Sheets niet
  aankan, dan naar analytics-bigquery-sql; presentatie-vraag verschuift naar een
  zelfbediening-dashboard, dan naar looker-studio-builder
- Stop-conditie: geen toegang tot het bronplatform om te spot-checken, dan niet opleveren

**Non-negotiables**: nooit een sheet delen met een klant zonder MP-review; nooit een Apps
Script live zetten of een mail-trigger activeren zonder MP-akkoord; nooit persoonsgegevens
(namen, e-mailadressen, klant-ID's herleidbaar tot personen) in een gedeeld rapportage-sheet,
dat is een AVG-risico zodra het buiten het eigen team komt; elk script blijft herleidbaar
in versiebeheer-discipline (zie Kern-kennis).

## Kern-kennis (2026)

### Beslisregels: Sheets of Looker Studio

| Situatie | Kies | Waarom |
|---|---|---|
| Klant of team wil zelf ad-hoc rekenen op de cijfers | Sheets | formules en pivot's zijn bewerkbaar, een dashboard is dat niet |
| Klein team (1-3 mensen), geen designbehoefte | Sheets | geen meerwaarde in een visuele laag die niemand gebruikt |
| 2 of meer bronnen moeten visueel geblend worden voor zelfbediening | Looker Studio | blends en filters horen daar, niet in een sheet vol VLOOKUP's |
| Budget is nihil en 1 bron volstaat | Sheets met native connector | geen licentiekosten, snelste opzet |
| Rapportage moet elke dag door de klant zelf geopend worden | Looker Studio | visuele laag oogt professioneler voor herhaald zelfstandig gebruik |
| Berekening is complex, uniek per klant en verandert per kwartaal | Sheets | flexibiliteit wint van een vaste dashboard-structuur |

Vuistregel: Sheets wint zodra bewerkbaarheid, ad-hoc berekening of een klein team de
doorslag geeft; Looker Studio wint zodra het een gepresenteerd, herhaald zelfbediening-
rapport voor een breder publiek moet zijn. Twijfel je, kies dan Sheets als startpunt: de
opzet is sneller om te valideren en later te migreren dan andersom.

### Data-invoer-routes

- **Connected Sheets naar BigQuery**: de voorkeursroute zodra de GA4 BigQuery-export al
  actief is (via analytics-bigquery-sql). Geen handmatige export, direct een live query
  als databron in het sheet. Query-kosten blijven de verantwoordelijkheid van die skill.
- **Handmatige export-discipline**: waar geen Connected Sheets-koppeling bestaat (Meta Ads
  Manager, kleinere platforms), exporteer op een vast moment en in een vaste tab-structuur;
  leg de exportdatum vast in een cel, nooit alleen in de bestandsnaam.
- **Apps Script voor periodieke imports**: voor platforms met een API maar zonder native
  connector (bijvoorbeeld een CRM-export of een custom feed). Draai op een tijdgestuurde
  trigger, schrijf altijd naar een ruwe-data-tab, nooit direct in een presentatie-tab.

### Rapportage-sheet-architectuur

Vaste regel, geen uitzondering: ruwe data en presentatie zijn altijd gescheiden tabs.

```
Bestand: <klant>-rapportage.xlsx (Google Sheets)
├── raw_ga4          (alleen data, geen formules, herschreven bij elke refresh)
├── raw_ads          (idem, per bron 1 tab)
├── raw_meta         (idem)
├── calc             (QUERY/FILTER-laag die raw_* combineert, verborgen tab)
├── dashboard         (presentatie-tab, verwijst alleen naar calc, geen ruwe formules)
└── laatste_update    (1 cel per bron met timestamp, voedt de staleness-check)
```

Beslisregel: een formule die rechtstreeks naar een raw-tab verwijst vanuit de presentatie-
tab is een architectuurfout; alles loopt via de calc-laag, anders breekt elke refresh de
presentatie stilzwijgend.

### Apps Script-automatisering

- **Periodieke refresh**: tijdgestuurde trigger (dagelijks vroeg in de ochtend voor
  klantgebruik) die de raw-tabs herschrijft en de laatste_update-cel bijwerkt
- **Mail-trigger met samenvatting**: een tweede trigger die na de refresh een samenvatting
  mailt (top-3 signalen, format uit weekly-client-update of data-storytelling); nooit de
  ruwe data zelf mailen, alleen de duiding
- **Versiebeheer-discipline**: elk script krijgt een kopie in `<klantmap>/dashboards/scripts/`
  met datum en wijziging in de bestandsnaam of een changelog-comment bovenaan; een script
  dat alleen in de Apps Script-editor van het sheet leeft, is bij een volgend incident
  onvindbaar
- Werk-drempel: een Apps Script-trigger die 2 keer achter elkaar faalt zonder dat iemand
  het merkt, is een stop-conditie; bouw altijd een foutmelding-pad (mail bij exception),
  geen stille faal

### Formule-hygiene

- QUERY of FILTER boven geneste IF's: een QUERY-statement is leesbaar en houdt stand bij
  uitbreiding, een structuur van 6 geneste IF's is bij de volgende persoon onleesbaar
- Named ranges voor elk cijfer dat in meerdere tabs terugkomt (bijvoorbeeld een
  rapportageperiode of een target): 1 wijziging op 1 plek in plaats van een zoekopdracht
  door het hele bestand
- Beslisregel: meer dan 3 niveaus geneste IF's in 1 cel is een signaal om te herschrijven
  naar QUERY, FILTER of een losse calc-tab
- Voorkom volatiele functies (NOW, TODAY, RAND) in grote datasets: ze forceren een
  volledige herberekening bij elke wijziging en maken het sheet traag
- Notatie voor NL-klanten in elke presentatie-tab: euro-notatie (€ 1.234,56, komma als
  decimaalteken) en ISO-weeknummers in de periode-kolom, niet Amerikaanse datumnotatie

### Foutdetectie: de staleness-check

Elk rapportage-sheet krijgt een zichtbare laatste-update-cel met een conditionele
alert-status.

| Leeftijd laatste update | Status | Actie |
|---|---|---|
| Binnen de afgesproken cadans (bijvoorbeeld 24 uur) | groen, "actueel" | geen actie |
| 1 tot 2 cadans-cycli verlopen | oranje, "check verversing" | MP checkt de trigger handmatig |
| Meer dan 2 cadans-cycli verlopen | rood, "verouderd, niet gebruiken" | trigger reparerentype fout, niet opleveren aan de klant |

Beslisregel: een sheet zonder zichtbare staleness-indicator mag niet naar een klant, ook
niet als de cijfers op dat moment toevallig kloppen; het risico is de volgende keer.

## Anti-patterns

- Formules rechtstreeks in de raw-databronnen zetten: de eerstvolgende refresh overschrijft ze stilzwijgend
- Geneste IF's van 5 of meer niveaus in plaats van QUERY of FILTER
- Een sheet delen zonder staleness-indicator: niemand ziet wanneer de cijfers verouderd zijn
- Een Apps Script live zetten zonder preview-test op een kopie van het sheet
- Persoonsgegevens (klantnamen, e-mailadressen) in een gedeeld rapportage-sheet zetten
- Een mail-trigger de ruwe data laten versturen in plaats van een samenvatting
- Scripts alleen in de Apps Script-editor bewaren, zonder kopie in de klantmap
- Sheets kiezen voor een taak die blends of visuele zelfbediening vraagt: dan hoort het in Looker Studio
- Een gefaalde trigger stilzwijgend laten mislukken zonder foutmelding-pad

## Output-formaat

**Rapportage-sheet-plan** (md in `<klantmap>/dashboards/`, verplicht voor elke nieuwe opzet):

```markdown
# Sheets-rapportage-plan <klant> YYYY-MM
## Toolkeuze plus motivatie (Sheets versus Looker Studio, uit de beslistabel)
## Data-invoer-route (Connected Sheets / handmatige export / Apps Script)
## Tab-architectuur (raw, calc, dashboard, laatste_update)
## Automatisering (trigger-schema, mail-trigger, scriptlocatie in versiebeheer)
## Staleness-check (drempel, statuskleuren, escalatiepad)
## Verificatie (spot-check plan, acceptatiecriteria)
```

## Dependencies

- Google Sheets en Apps Script via MP-login
- Connected Sheets naar BigQuery (afhankelijk van analytics-bigquery-sql)
- GA4, Google Ads, Meta Ads Manager als databronnen voor spot-checks
- `<klantmap>/dashboards/` (account-brief.md, history-log.md) en een scripts-submap voor versiebeheer
- google_workspace_tool en drive_tool voor sheet-beheer en opslag

## Integratie met andere skills

- **dashboard-specialist**: routeert de toolkeuze-vraag hierheen zodra Sheets wint van Looker Studio
- **looker-studio-builder**: alternatieve route zodra visuele zelfbediening of blends nodig zijn
- **analytics-bigquery-sql**: databron en query-laag onder Connected Sheets
- **kpi-framework-design**: levert de KPI-definities die in de presentatie-tab landen
- **dashboard-audit**: signaleert een verouderd of kapot sheet-rapport voor reparatie hier
- **marketing-data-analyst**: gebruikt sheets als export-omgeving voor CSV- en pandas-analyse
- **data-storytelling**: bepaalt de duiding in de mail-samenvatting die het Apps Script verstuurt
- **weekly-client-update**: kan een sheets-samenvatting als cijferbron gebruiken

## Tips

- **Begin met de architectuur, niet met de eerste formule**: raw-tabs eerst, calc-laag
  daarna, presentatie als laatste
- **Test een staleness-check door een datum expres oud te zetten**: zo weet je zeker dat
  de kleur echt omslaat voor je het oplevert
- **Bewaar elk script met datum in de bestandsnaam**: "script_v3_juli2026" voorkomt het
  raden welke versie live staat
- **QUERY leest bijna als SQL**: wie SQL kent uit analytics-bigquery-sql, leert QUERY in
  een middag
- **Een mail-trigger zonder foutpad is een blinde vlek**: bouw de exception-mail tegelijk
  met de succes-mail
- **Vraag altijd naar het teamformaat voordat je Sheets adviseert**: boven 5 mensen die
  zelfstandig moeten filteren, wint Looker Studio bijna altijd
- **Named ranges besparen meer tijd dan ze kosten**: vooral bij periodieke targets die per
  kwartaal wijzigen

*Eerste versie: juli 2026. Herzie wanneer Connected Sheets, Apps Script-triggers of de BigQuery-koppeling structureel wijzigen, of wanneer een nieuwe sub-skill dit vervangt.*
