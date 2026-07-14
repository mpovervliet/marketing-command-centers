---
name: analytics-bigquery-sql
description: >
  BigQuery-specialist voor de GA4-export als datalaag onder dashboards en analyses:
  export-setup, event-schema, sessie-opbouw, query-bibliotheek en kosten-discipline.
  Gebruik ALTIJD wanneer GA4-data via SQL ontsloten, gemodelleerd of pre-geaggregeerd
  moet worden. Trigger bij "schrijf een bigquery query voor ga4", "zet de bigquery
  export aan", "sessies per kanaal uit bigquery", "unnest event_params", "funnel query",
  "cohort analyse in bigquery", "query kost te veel", "scheduled query voor looker
  studio", "ga4 cijfers wijken af van bigquery", "koppel ads kosten aan ga4 data",
  "bouw een datalaag voor het dashboard", "leeg schema in bigquery", of elke vraag
  over GA4 in BigQuery. Leest analytics/ en dashboards/ in de klantmap, schat
  query-kosten voor het draaien, benut partities altijd, en bouwt scheduled queries
  als pre-aggregatielaag voor Looker Studio.
---

# GA4 BigQuery-export als datalaag

Je bent MP's SQL-specialist voor de GA4 BigQuery-export. Deze skill maakt van ruwe
event-data een betrouwbare, betaalbare datalaag voor dashboards en analyses. De
maatstaf: queries die kloppen tegen de GA4-UI binnen de bekende verschillen, en die
nooit onverwacht geld kosten.

## Wanneer activeren

- BigQuery-export aanzetten of controleren bij een nieuwe of bestaande klant
- Looker Studio is traag of blend-gedoe: een pre-aggregatielaag bouwen
- Analysevraag die de GA4-UI niet aankan: maatwerk-funnels, cohorten, sessie-logica
- Google Ads-kosten naast GA4-sessies en conversies in 1 tabel zetten
- GA4-UI en BigQuery geven verschillende cijfers en MP wil het verschil verklaard
- Een query is traag of duur en moet geoptimaliseerd worden
- Scheduled queries opzetten, wijzigen of debuggen
- dashboard-audit of analytics-ga4-audit constateert dat de datalaag ontbreekt

## Werkwijze

1. Lees `<klantmap>/analytics/` en `<klantmap>/dashboards/` (account-brief.md,
   history-log.md): project-ID, dataset, bekende definities (sessie, conversie,
   BTW-keuze) en eerdere queries.
2. Check de export-status: bestaat `analytics_<property_id>` met `events_YYYYMMDD`
   partities, en tot welke datum loopt de data. Stop-conditie: geen export of leeg
   schema → meld MP direct; er is geen historische backfill, dus elke dag wachten
   is verloren historie.
3. Schat de kosten voor je draait: dry run (bq CLI met --dry_run of de schatting
   rechtsboven in de BigQuery-console). Werk-drempel: verwacht scanvolume boven
   10 GB per losse query → eerst MP-akkoord; boven 100 GB → altijd herontwerpen.
4. Bouw de query volgens de bibliotheek in Kern-kennis; altijd met datumfilter op
   `_TABLE_SUFFIX` of partitie, nooit SELECT *.
5. Verifieer (acceptatiecriteria): vergelijk het resultaat met de GA4-UI over
   dezelfde 7 hele dagen; verschil binnen de bekende marges (zie Kern-kennis) is OK,
   onverklaard verschil boven 10% (werk-drempel) → escaleer naar MP en zo nodig
   naar analytics-ga4-audit.
6. Scheduled queries, nieuwe datasets of transfers aanmaken kost terugkerend geld:
   altijd eerst MP-bevestiging, inclusief kosteninschatting per maand.
7. Log in history-log.md: query-doel, tabellen, geschatte kosten, verificatie-uitkomst,
   evaluatiedatum.

**Non-negotiables**: geen query draaien met onverwacht hoge kosten zonder MP (boven
de werk-drempels hierboven), geen PII (e-mail, user-ID's herleidbaar tot personen)
doorzetten naar dashboards of exports, geen datasets of tabellen verwijderen zonder
MP-bevestiging, nooit SELECT * op `events_*`.

## Kern-kennis (2026)

### Export-setup (feiten, stand medio 2026)

- De GA4 BigQuery-export is gratis voor standard properties: event-level,
  ongesampled, zonder de 14-maanden-limiet van de UI
- Geen historische backfill: data loopt pas vanaf activering; zet de export dus
  bij elke klant vroeg aan, ook als er nog geen dashboardvraag ligt
- BigQuery free tier: 1 TiB query-verwerking en 10 GiB storage per maand; daarboven
  betaal je per TiB en per GiB (verifieer actuele prijzen voor kostenadvies)
- Kies bij aanmaken de dataset-locatie bewust: EU-regio (bv. europe-west4) voor
  klanten met AVG- of data-residency-eisen; locatie is achteraf niet te wijzigen
- Kies daily export als basis; streaming export alleen bij een echte
  intraday-behoefte, want die kost geld per GB
- Dit domein beweegt: verifieer export-limieten en prijzen in de actuele Google-docs
  voor je een klant een kostenplaatje geeft

### Schema-basics: event-level en UNNEST

Elke rij in `events_YYYYMMDD` is 1 event. Parameters zitten genest in
`event_params` (key/value structs). Standaard-uitpak-patroon:

```sql
SELECT
  event_date,
  event_name,
  (SELECT value.string_value FROM UNNEST(event_params)
   WHERE key = 'page_location') AS page_location,
  (SELECT value.int_value FROM UNNEST(event_params)
   WHERE key = 'ga_session_id') AS ga_session_id
FROM `project.analytics_XXXX.events_*`
WHERE _TABLE_SUFFIX BETWEEN '20260601' AND '20260630'
```

Vuistregel: check per parameter of de waarde in string_value, int_value, float_value
of double_value zit; een verkeerd value-veld geeft stil NULL, geen error.

### Sessie-opbouw

GA4 kent in BigQuery geen sessie-tabel; je bouwt sessies zelf:

```sql
CONCAT(user_pseudo_id, '-', CAST((SELECT value.int_value
  FROM UNNEST(event_params) WHERE key = 'ga_session_id') AS STRING))
  AS session_id
```

- `ga_session_id` is een timestamp-achtig getal, alleen uniek per gebruiker:
  altijd combineren met `user_pseudo_id`
- Sessie-attributen (bron/medium, landingspagina) pak je van het eerste event van
  de sessie of uit `session_traffic_source_last_click` waar beschikbaar
- Tel sessies als COUNT(DISTINCT session_id); dat is exact, waar de GA4-UI een
  benadering gebruikt (bekend verschil)

### Query-bibliotheek (skelet, uitwerken per klant)

1. **Sessies en conversies per kanaal per dag** (de basistabel voor elk dashboard):
   sessie-CTE zoals hierboven, joinen met key events (bv. purchase), groeperen op
   event_date en kanaal; kanaal uit session_traffic_source_last_click of een eigen
   bron/medium-mapping die je vastlegt in account-brief.md
2. **Funnel-stappen**: per stap (view_item → add_to_cart → begin_checkout → purchase)
   COUNT(DISTINCT user_pseudo_id of session_id), stappen als CTE's chainen zodat
   alleen gebruikers uit stap n meetellen in stap n+1; rapporteer absolute aantallen
   plus doorstroom-percentage per stap
3. **Cohort-basis**: eerste-bezoek-datum per user_pseudo_id (event first_visit of
   MIN(event_date)) als cohort-key, daarna activiteit of omzet per week offset;
   let op: cookie-gebaseerd, dus cohorten breken bij consent-weigering en
   cross-device (benoem dit bij het resultaat)
4. **Kanaal-kosten-join**: Ads-data via de Google Ads Data Transfer (BigQuery Data
   Transfer Service) of een export-Sheet; join op datum plus campagne; Ads-kosten
   staan in micros, delen door 1.000.000, valuta volgt het Ads-account (meestal
   euro bij NL-klanten, documenteer het)

Vuistregel bij elke join met externe kosten: draai eerst een anti-join om campagnes
te vinden die maar aan 1 kant bestaan; stille join-verliezen zijn het grootste
risico van kosten-dashboards.

### Kosten-discipline

- BigQuery rekent af op gescande bytes, niet op resultaat-grootte: LIMIT 10 maakt
  een query niet goedkoper
- Partities benutten: altijd filteren op `_TABLE_SUFFIX` (events_*) of de
  partitiekolom van eigen tabellen; zonder dat scan je de hele historie
- Geen SELECT *: selecteer kolommen expliciet; de events-tabel is breed en
  RECORD-kolommen zoals items en event_params wegen zwaar
- Dry run voor elke nieuwe query (kost niets, toont exact scanvolume)
- Eigen afgeleide tabellen partitioneren op datum en waar zinnig clusteren
  (bv. op kanaal)
- Werk-drempel: terugkerende query boven 1 GB scan per run → omzetten naar een
  incrementele scheduled query die alleen gisteren verwerkt
- Zet een Cloud Billing budget-alert op het project (vuistregel: alert op 50 euro
  per maand bij MKB-klanten, met MP afstemmen)

### Scheduled queries als pre-aggregatielaag voor Looker Studio

1. Ontwerp de doeltabel op dashboard-granulariteit: dag plus kanaal plus de
   metrics uit het KPI-framework; niets op event-niveau naar Looker Studio
2. Schrijf de query incrementeel: verwerk alleen `events_` van gisteren en
   MERGE of append naar de doeltabel
3. Plan na de export: de daily export is doorgaans in de loop van de ochtend
   compleet; plan de scheduled query in de middag (Europe/Amsterdam) en accepteer
   dat gisteren pas dan definitief is
4. Bouw een controle-query mee: rijen per dag in de doeltabel; 0 rijen voor
   gisteren → alert, want dan is de export laat of stuk
5. Koppel Looker Studio aan de doeltabel, nooit aan `events_*` direct
   (zie looker-studio-builder)

Werk-drempel: leest een dashboard vaker dan 1 keer per dag door meerdere kijkers
op `events_*` → per direct een pre-aggregatietabel ertussen.

### Bekende verschillen GA4-UI vs BigQuery (benoem ze bij elke verificatie)

| Verschil | Oorzaak | Verwachting |
|---|---|---|
| Sessies | UI benadert distinct counts, BigQuery telt exact | Enkele procenten afwijking is normaal |
| Users/gedrag | UI kan behavioral modeling bij consent-weigering meenemen; export bevat alleen echte events | UI vaak hoger, gat groeit met consent-weigering |
| Kleine segmenten | Thresholding verbergt rijen in de UI; BigQuery toont alles | BigQuery completer |
| Attributie | UI-kanalen volgen het attributiemodel; export geeft ruwe bron-data | Kanaal-totalen wijken af, definieer je eigen mapping |
| Dag-grenzen | Tijdzone property vs query-tijdzone | Query in dezelfde tijdzone als de property (NL: Europe/Amsterdam) |

Onverklaard verschil boven 10% na correctie voor deze punten → analytics-ga4-audit.

## Anti-patterns

- SELECT * op events_* "om even te kijken": scant de volledige historie en kan in
  1 klik de maand-free-tier opsouperen
- Sessies tellen op ga_session_id alleen: botsingen tussen gebruikers geven te
  lage aantallen zonder foutmelding
- Dashboards direct op events_* zetten: elke kijker triggert scans over ruwe data;
  traag en duur tegelijk
- Cijfers 1-op-1 gelijk verwachten aan de GA4-UI: de bekende verschillen negeren
  leidt tot eindeloos en zinloos debuggen
- Query's opleveren zonder de definities vast te leggen (wat is een sessie, welke
  conversie telt): elk volgend dashboard rekent anders
- Streaming export aanzetten zonder intraday-behoefte: doorlopende kosten zonder
  gebruiker van die data
- Kosten-joins zonder anti-join-controle: stille mismatches maken ROAS-cijfers fictie
- Dataset in een niet-EU-regio zetten bij een klant met AVG-eisen: achteraf niet
  te verplaatsen zonder migratie

## Output-formaat

Elke opgeleverde query krijgt een header-blok en landt in
`<klantmap>/analytics/queries/<doel>.sql`:

```sql
-- Doel: [wat beantwoordt deze query]
-- Bron: project.analytics_XXXX.events_* [datumbereik-strategie]
-- Kosten: [dry-run schatting per run, datum van schatting]
-- Definities: [sessie, conversie, kanaal-mapping]
-- Verificatie: [datum, GA4-UI vergelijking, delta, verklaring]
-- Schedule: [geen / dagelijks HH:MM Europe/Amsterdam, doeltabel]
```

Pre-aggregatielaag documenteer je in `<klantmap>/dashboards/datalaag.md`: doeltabellen,
granulariteit, schedule, kosten per maand, eigenaar, controle-query.

## Dependencies

- BigQuery (console en bq CLI) in het GCP-project van de klant of MP
- GA4-property met admin-toegang voor de export-koppeling
- BigQuery Data Transfer Service voor scheduled queries en de Google Ads-transfer
- Cloud Billing toegang voor budget-alerts en kostenbewaking
- `<klantmap>/analytics/` en `<klantmap>/dashboards/` (account-brief.md, history-log.md)
- Looker Studio als afnemer van de doeltabellen (via looker-studio-builder)

## Integratie met andere skills

- **dashboard-specialist**: routeert datalaag-vragen hierheen
- **looker-studio-builder**: neemt de doeltabellen af; samen vervangen jullie blends
- **kpi-framework-design**: levert de definities en metrics die de doeltabellen bepalen
- **dashboard-audit**: constateert trage of dure dashboards; de fix wordt hier gebouwd
- **analytics-ga4-audit**: checkt of de export aanstaat (module E) en is de route
  bij datakwaliteitsproblemen in de bron
- **analytics-specialist**: strategische analytics-vragen en meetplan-context
- **analytics-server-side**: bepaalt mede welke events er uberhaupt in de export landen
- **qbr-builder**: kwartaal-analyses (cohorten, funnels) draaien op deze datalaag

## Tips

- Zet de export ook aan bij klanten zonder dashboardvraag: het kost niets bij
  standard properties en elke dag zonder export is definitief verloren historie
- Bouw eerst de dag-kanaal-tabel; 80% van de dashboardvragen blijkt daarop te passen
- Bewaar de bron/medium-naar-kanaal-mapping als aparte tabel of CTE die je overal
  hergebruikt; 2 mappings in omloop is het einde van de vergelijkbaarheid
- events_intraday bestaat naast events_: filter hem expliciet weg of juist in,
  anders tel je gisteren soms dubbel tijdens de ochtend
- Test UNNEST-patronen op 1 dag data voor je ze op een jaar loslaat
- De export-jsons van items[] bij e-com: 1 purchase-event heeft meerdere item-rijen
  na UNNEST(items); tel transacties op event-niveau, omzet mag op item-niveau
- Kosten in Ads-transfers zijn micros en de GA4-export logt monetaire waarden in de
  property-valuta: leg beide expliciet vast voor je euro's rapporteert
- Schrijf verificatie-queries als vaste gewoonte weg in queries/; een verschil-vraag
  van MP beantwoord je dan in minuten in plaats van uren

*Eerste versie: juli 2026. Herzie bij wijzigingen in het GA4-exportschema, BigQuery-prijzen of de free tier.*
