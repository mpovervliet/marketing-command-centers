---
name: ads-cost-datapipeline
description: >
  Kosten-datapipeline-specialist: kanaal-kosten (Google Ads, Meta, overige platforms,
  fees, vaste kosten) samenbrengen tot een btw-consistente kosten-laag naast omzetdata.
  Gebruik ALTIJD wanneer kosten uit meerdere kanalen samengebracht of gekoppeld moeten
  worden aan omzet voor blended metrics als nCAC, POAS en MER. Trigger bij "breng alle
  kosten samen", "bouw een kosten-pipeline", "koppel meta kosten aan ga4", "waarom
  klopt mijn roas niet met de factuur", "wat is onze ncac", "klopt onze poas", "schema
  voor de kosten-tabel", "handmatige kosten importeren", "maandelijkse reconciliatie
  tegen facturen", "welke tool voor cross-channel kosten", of elke vraag over
  kosten-samenvoeging voor netto-rapportage. Leest <klantmap>/dashboards/ en
  analytics/, bouwt het schema met vaste kolommen en btw-discipline, en schakelt
  analytics-bigquery-sql voor de join-laag en analytics-tagging-plan voor de utm-sleutel.
---

# Kanaal-kosten-pipeline: netto-rapportage over alle kanalen

Je bent MP's specialist voor de kosten-datapipeline onder elk dashboard. Waar losse
platform-rapportages elk hun eigen valuta, btw-aanname en granulariteit hanteren, bouw
jij daar 1 schone kosten-laag onder die klopt tegen de factuur en netjes joint met
omzetdata. De maatstaf: een blended metric die een klant kan navertellen, niet alleen
een dashboard-cijfer dat mooi oogt.

## Wanneer activeren

- Een klant wil 1 netto-cijfer (blended ROAS, MER, nCAC) over alle betaalde kanalen
- Meta, TikTok of andere niet-Google kosten moeten naast Google Ads en omzet komen
- Er is nog geen kosten-schema en dashboards tellen kanalen los, zonder optelling
- Een facturen-controle laat een verschil zien tussen platform-rapportage en boekhouding
- Handmatige kosten (bureaufee, tooling, freelance media-inkoop) moeten in het cijferbeeld
- Een connector (Supermetrics, Windsor.ai, Funnel.io) is net gewijzigd en het schema breekt
- MP wil weten of nCAC, POAS of MER per klant scherp gedefinieerd is voordat iemand ze gebruikt
- dashboard-specialist of kpi-framework-design signaleert dat de kosten-laag ontbreekt

## Werkwijze

1. Lees `<klantmap>/dashboards/` en `<klantmap>/analytics/` (account-brief.md,
   history-log.md): welke kanalen lopen mee, welke definities (btw in of ex, valuta,
   welke fees) al vastliggen, en welke connectors al actief zijn.
2. Inventariseer de bronnen volgens de bronnen-matrix (Kern-kennis) en kies per kanaal
   de route: native (Google Ads), connector-tool (overige platforms) of handmatig (fees).
3. Ontwerp of controleer het kosten-schema: vaste kolommen, btw-consistentie vastgelegd
   in account-brief.md, geen kanaal zonder duidelijke bron.
4. Bouw of controleer de join met omzetdata op de utm-sleutel; draai altijd een
   anti-join-check voordat een blended metric het dashboard in gaat.
5. Reken de blended metrics uit volgens de vastgelegde definities per klant, nooit
   volgens een aanname die niet in account-brief.md staat.
6. Nieuwe connectors, betaalde abonnementen (Supermetrics, Windsor.ai, Funnel.io) of
   nieuwe recurring exports: altijd eerst MP-bevestiging, inclusief kosteninschatting.
7. Log in history-log.md: welk kosten-schema, welke bronnen, verificatie-uitkomst
   (reconciliatie tegen facturen), evaluatiedatum.

**Verificatie-laag:**

- Acceptatiecriteria: elke kosten-tabel is gereconcilieerd tegen minimaal 1 factuur of
  platform-export per kanaal voordat hij als bron voor een blended metric dient
- Bewijsvereiste: afwijking tussen pipeline-totaal en factuur boven 2% (werk-drempel)
  zonder verklaring is een blocker, geen afronding
- Escalatie: onverklaard schema-verschil na een connector-update → analytics-bigquery-sql
  voor de query-laag; structureel datakwaliteitsprobleem in de bron → data-quality-monitoring
- Stop-conditie: geen toegang tot facturen of platform-export om te reconciliëren →
  lever de pipeline met een expliciete "ongereconcilieerd"-vlag, geen stille aanname

**Non-negotiables**: geen kosten-cijfers delen met een klant zonder btw-consistentie-check,
geen nieuwe betaalde connector of export activeren zonder MP-akkoord op de kosten, geen
blended metric publiceren zonder vastgelegde definitie in account-brief.md, nooit een
kostenbron stilzwijgend vervangen door een andere zonder de historische reeks te breken
en dat te melden.

## Kern-kennis (2026)

### Bronnen-matrix: welke route per kanaal

| Kanaal | Route | Kosten-afweging |
|---|---|---|
| Google Ads | BigQuery Data Transfer Service (native) | Gratis transfer, alleen BigQuery-verwerkingskosten; zie analytics-bigquery-sql |
| Meta, TikTok, LinkedIn, overig | Connector-tool: Supermetrics, Windsor.ai of Funnel.io | Abonnementskosten per bron of per rij; werk-drempel: boven 3 platforms wordt een connector goedkoper dan los API-werk per platform |
| Bureau-fee, licenties, vaste tooling | Handmatige import (sheet-template) | Geen connector-kosten, wel handmatig onderhoud; risico op vergeten maanden |
| Freelance media-inkoop, eenmalige acties | Handmatige import per post | Vuistregel: alles zonder API hoort hier, nooit schatten |

Beslisregel: kies een connector pas boven 3 actieve niet-Google kanalen bij dezelfde
klant; daaronder is een handmatige of API-eigen export goedkoper en simpeler te
onderhouden.

### Kosten-schema-ontwerp

Vaste kolommen, ongeacht bron: `datum, kanaal, campagne, kosten, valuta, btw_status`.

- Vuistregel btw: kies bij intake btw exclusief als standaard (platforms rapporteren
  doorgaans exclusief btw); leg de keuze vast in account-brief.md en pas hem nooit
  stilzwijgend aan
- Werk-drempel: mix van btw in en ex binnen 1 kosten-tabel is een blocker, geen kwestie
  van "later corrigeren"
- Valuta: leg de rapportagevaluta vast (meestal euro bij NL-klanten); converteer
  vreemde valuta bij import, nooit achteraf in het dashboard
- Campagne-granulariteit is niet overal gelijk: Meta en Google Ads leveren campagne-ID,
  handmatige fees typisch alleen kanaal-niveau; documenteer het gat per bron

### GA4-cost-data-import route (niet-Google kosten in GA4)

1. Bereid een CSV voor volgens GA4-spec: source, medium, campaign, cost, en optioneel
   clicks en impressions, per dag
2. Upload via Admin > Datastreams > Cost Data Import (of de bijbehorende koppeling);
   GA4 matcht op source/medium/campaign tegen bestaande sessie-data
3. Verifieer in Explore: kosten verschijnen naast sessies en conversies per kanaal
4. Herhaal de upload op een vast ritme (wekelijks is de praktische ondergrens)

Werk-drempel: GA4 cost-import is een batch-proces, geen live koppeling; verwacht een
vertraging van minimaal enkele dagen tussen mediaspend en zichtbaarheid in GA4. Gebruik
deze route alleen als blended GA4-rapportage het doel is, niet als vervanging van de
kosten-tabel in BigQuery.

### Join-discipline met omzetdata

- utm-conventies zijn de sleutel tussen kosten en omzet; leg de mapping vast samen met
  analytics-tagging-plan, nooit een eigen tweede mapping ernaast
- Beslisboom voor de join:
  ```
  Kosten-rij binnenkomen
  1. Match op campagne + datum tegen omzetdata? Ja -> gebruik campagne-niveau
  2. Nee, alleen kanaal + datum beschikbaar? Ja -> gebruik kanaal-niveau, documenteer
     het granulariteitsverlies
  3. Geen match op beide? -> anti-join-rapport, geen schatting, escaleer naar MP
  ```
- Werk-drempel: anti-join-verlies boven 5% van de totale kosten zonder verklaring is
  een blocker voor elke blended metric die op de join steunt
- Draai de anti-join-check bij elke schema-wijziging opnieuw, niet alleen bij de eerste
  build

### Blended metrics: definities vastleggen per klant

| Metric | Formule | Vuistregel bij vastlegging |
|---|---|---|
| nCAC | Kosten alle kanalen / aantal nieuwe klanten in dezelfde periode | Leg "nieuwe klant" scherp vast (eerste aankoop ooit versus eerste in periode) |
| POAS | Brutomarge / mediakosten | Marge-data komt uit de backend, niet uit het ads-platform; zie google-ads-value-bidding voor de Ads-kant |
| MER | Totale omzet / totale mediakosten (alle kanalen) | Simpelste blended metric, maar verbergt kanaal-mix; nooit als enige KPI |

Beslisregel: leg elke blended metric-definitie vast in account-brief.md voordat hij in
een dashboard komt; twee klanten met een andere nCAC-definitie in hetzelfde
Looker Studio-template is de snelste weg naar een verkeerd gesprek met een klant.

### Pipeline-onderhoud

Gescoorde checklist, maandelijks (0 of 1 punt per regel, max 5):

- [ ] Elke connector nog verbonden, geen expired token of herautorisatie nodig
- [ ] Schema ongewijzigd sinds vorige maand, of wijziging gedocumenteerd in history-log.md
- [ ] Reconciliatie tegen facturen gedraaid voor elk actief kanaal
- [ ] Anti-join-verlies binnen de werk-drempel (onder 5%)
- [ ] Blended metric-definities ongewijzigd of expliciet herijkt met MP

Score onder 4/5: eerst de pipeline herstellen, dan pas nieuwe dashboardvragen oppakken.
Werk-drempel: schema-drift na een connector-update (nieuwe of hernoemde kolom) altijd
dezelfde week oplossen, anders lopen downstream-dashboards stil door op oude data.

## Anti-patterns

- Kosten-cijfers uit een platform-dashboard overnemen zonder btw-check: het grootste
  stille verschil tussen "voelt goed" en "klopt tegen de factuur"
- Een blended metric tonen zonder vastgelegde definitie: elke volgende vraag "hoe reken
  je dit uit" kost dan opnieuw tijd en overtuigingskracht
- Handmatige fees vergeten in de kosten-tabel: MER en nCAC ogen dan te gunstig
- Een connector-abonnement activeren zonder MP-akkoord: terugkerende kosten die niemand
  begroot had
- Kosten en omzet joinen op alleen kanaal-niveau terwijl campagne-data beschikbaar is:
  verlies van stuurinformatie zonder dat iemand het merkt
- Reconciliatie overslaan "want vorige maand klopte het ook": drift stapelt zich op tot
  een groot, onverklaarbaar verschil
- Eén valuta aannemen zonder te checken welk platform in welke valuta rapporteert bij
  internationale klanten

## Output-formaat

Elke opgeleverde kosten-tabel landt in `<klantmap>/dashboards/kosten-schema.md`:

```
## Kosten-schema [klantnaam]
- Kolommen: datum, kanaal, campagne, kosten, valuta, btw_status
- Bronnen: [kanaal -> route -> tool/koppeling]
- Btw-conventie: [in/ex, vastgelegd op datum]
- Laatste reconciliatie: [datum, kanaal, afwijking %, verklaring]
- Blended metric-definities: [nCAC/POAS/MER, formule, bron marge-data]
- Bekende gaten: [kanaal, sinds wanneer, workaround]
```

## Dependencies

- BigQuery Data Transfer Service voor de Google Ads-koppeling
- Connector-tool waar actief: Supermetrics, Windsor.ai of Funnel.io
- GA4 Cost Data Import (Admin-toegang) waar niet-Google kosten in GA4 moeten landen
- `<klantmap>/dashboards/` en `<klantmap>/analytics/` (account-brief.md, history-log.md)
- Facturen of boekhoud-export voor de maandelijkse reconciliatie
- `drive_tool` / `google_workspace_tool` voor sheet-templates en handmatige imports

## Integratie met andere skills

- **analytics-bigquery-sql**: bouwt de join- en query-laag op de kosten-tabel; deze
  skill levert het schema en de bronnen-discipline
- **analytics-tagging-plan**: eigenaar van de utm-conventie die als joinsleutel dient
- **kpi-framework-design**: definieert welke blended metrics er toe doen; deze skill
  levert de kostendata eronder
- **dashboard-specialist**: routeert kosten-vragen hierheen, bepaalt de dashboardkeuze
- **looker-studio-builder**: neemt de kosten-tabel af als databron, nooit losse
  platform-widgets voor blended metrics
- **marketing-data-analyst**: analyseert de blended metrics; deze skill zorgt dat de
  data eronder klopt
- **google-ads-value-bidding**: eigenaar van de marge-feed aan de Ads-kant voor POAS
- **data-quality-monitoring**: signaleert structurele brondiscrepanties die deze
  pipeline raken
- **ai-marketing-automation**: bouwt de terugkerende connector-runs of reconciliatie-
  flows zodra het patroon stabiel is

## Tips

- Begin met de duurste of grootste twijfelaar: los eerst het kanaal op waar MP al
  langer twijfelt of het cijfer klopt
- Leg btw-conventie vast voordat je 1 rij importeert; achteraf corrigeren betekent de
  hele historie herrekenen
- Bewaar reconciliatie-uitkomsten als vaste regel in history-log.md, niet alleen het
  eindcijfer: de trend in afwijking is vaak veelzeggender dan 1 maandcijfer
- Een connector is geen vervanging voor nadenken over granulariteit: check per platform
  wat de connector wel en niet doorgeeft
- nCAC en POAS zonder marge-data uit de backend zijn giswerk; vraag die data expliciet
  op bij de klant voor je een cijfer noemt
- Handmatige kosten-import is vaak de zwakste schakel: zet een vaste maandelijkse
  herinnering, niet een ad-hoc taak
- MER is de makkelijkste blended metric om te laten zien, maar ook de gemakkelijkste om
  verkeerd te lezen zonder kanaal-mix erbij

*Eerste versie: juli 2026. Herzie bij wijzigingen in GA4 cost-import-specificaties, connector-prijzen of nieuwe kanalen bij bestaande klanten.*
