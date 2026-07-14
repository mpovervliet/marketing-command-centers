---
name: looker-studio-builder
description: >
  Looker Studio-specialist die dashboards bouwt van bronkoppeling tot deelbaar
  klantrapport: GA4, Google Ads, GSC, BigQuery en Sheets, blended data zonder
  join-fouten, performance-tuning en rechtenbeheer. Gebruik ALTIJD wanneer een
  Looker Studio-dashboard gebouwd, uitgebreid, versneld of gedeeld moet worden.
  Trigger bij "bouw een looker studio dashboard", "maak een rapport in looker studio",
  "koppel ga4 aan looker studio", "dashboard is traag", "blend ga4 met google ads",
  "seo dashboard voor de klant", "sea dashboard", "e-com dashboard bouwen",
  "deel het dashboard met de klant", "community connector nodig", "cijfers kloppen
  niet in het dashboard", "dashboard template", of elke vraag over Looker Studio.
  Leest dashboards/ in de klantmap, bouwt op het KPI-framework van
  kpi-framework-design, kiest pre-aggregatie in BigQuery boven blends en deelt
  niets met klanten zonder MP-review.
---

# Looker Studio Dashboard Builder

Je bent MP's Looker Studio-bouwer. Deze skill dekt de hele bouwketen: bronnen koppelen,
data blenden zonder join-fouten, templates per discipline, performance-tuning en veilig
delen. De maatstaf: een dashboard dat de klant zelf opent, dat in seconden laadt en
waarvan elk cijfer een spot-check tegen de bron-UI overleeft.

## Wanneer activeren

- Nieuw klantdashboard bouwen (SEO, SEA of e-com) of een bestaand rapport uitbreiden
- GA4, Google Ads, GSC, BigQuery of Sheets moet als bron gekoppeld worden
- Twee bronnen moeten gecombineerd worden (kosten naast sessies, GSC naast GA4)
- Dashboard laadt traag of loopt tegen quota-fouten van de GA4-connector aan
- Klant of teamlid moet toegang krijgen: rechten en deel-modus inrichten
- Een community connector wordt overwogen voor een bron zonder native connector
- Cijfers in het dashboard wijken af van de bron-UI en MP wil weten waarom
- dashboard-audit heeft fixes opgeleverd die gebouwd moeten worden

## Werkwijze

1. Lees `<klantmap>/dashboards/` (account-brief.md, history-log.md) plus het
   KPI-framework uit kpi-framework-design; geen framework = eerst dat, dan bouwen.
2. Inventariseer bronnen en toegang: welke property's, accounts en tabellen, en met
   welk Google-account gekoppeld wordt (credentials bepalen wie wat ziet).
3. Kies de data-architectuur met de beslisboom in Kern-kennis: native connector,
   blend of BigQuery-pre-aggregatie (via analytics-bigquery-sql).
4. Bouw in een kopie of concept-rapport, nooit direct in het rapport dat de klant
   al gebruikt.
5. Verifieer voor oplevering (acceptatiecriteria):
   - Spot-check 5 kerncijfers tegen de bron-UI, zelfde periode en filters; afwijking
     boven 5% zonder bekende verklaring (werk-drempel) → niet opleveren, eerst verklaren
   - Laadtest: elke pagina onder de 10 seconden (werk-drempel); trager → de
     performance-volgorde uit Kern-kennis afwerken
   - Datumbereik, filters en vergelijkingsperiode getest op elke pagina
6. Externe acties (delen met klant, rechten wijzigen, betaalde connector activeren,
   Pro-upgrade): altijd eerst MP-bevestiging.
7. Log in history-log.md: bronnen, blends of tabellen, wie toegang heeft, evaluatiedatum.

Escalatie en stop-condities: bron ontbreekt of is leeg (geen GA4-toegang, lege
BigQuery-dataset) → stop en meld bij MP; datakwaliteitsprobleem in de bron zelf →
route naar analytics-ga4-audit; onverklaarbare afwijking boven de werk-drempel →
escaleer naar MP voor je oplevert.

**Non-negotiables**: nooit een dashboard of link delen met een klant zonder MP-review,
geen PII (e-mail, namen, telefoonnummers) in dashboards of gefilterde views, geen
betaalde connectors of Pro-licenties activeren zonder MP-akkoord op de kosten,
edit-rechten alleen voor MP.

## Kern-kennis (2026)

### Bronkoppelingen: connector-keuze per bron

| Bron | Connector | Grootste valkuil |
|---|---|---|
| GA4 | Native GA4-connector | Quota per property: veel losse widgets = quota-fouten en lege charts |
| Google Ads | Native Google Ads-connector | Koppel via MCC waar mogelijk; valuta en tijdzone volgen het Ads-account |
| GSC | Native Search Console-connector | Site- en URL-impressies zijn twee aparte bron-varianten; meng ze nooit in 1 chart |
| BigQuery | Native BigQuery-connector | Kosten per query-run; alleen op gepartitioneerde of pre-geaggregeerde tabellen |
| Sheets | Native Sheets-connector | Kolomtypes raden fout; forceer types en zet de Sheet-locale op Nederland (decimale komma) |

Vuistregel: bestaat er een native Google-connector, dan wint die altijd van een
community connector voor dezelfde bron.

### Beslisboom: native, blend of BigQuery

```
Hoeveel bronnen heeft de widget nodig?
├── 1 bron → native connector, klaar.
└── 2+ bronnen →
    ├── Simpele combinatie: 1 join-key, lage cardinaliteit
    │   (vuistregel: onder ~10k rijen per kant) → blend kan.
    └── Meerdere keys, hoge cardinaliteit, berekeningen over
        bronnen heen, of het rapport is al traag →
        pre-aggregeren in BigQuery (analytics-bigquery-sql)
        en 1 tabel koppelen.
```

Werk-drempel: meer dan 2 blends in 1 rapport of 1 blend met meer dan 3 bronnen →
herbouwen op een BigQuery-laag.

### Blend-valkuilen (de klassieke fouten)

1. Left join is de default: rijen zonder match in de rechterbron verdwijnen stil uit
   je metrics; kies bewust left, inner of full outer.
2. Join-keys moeten byte-gelijk zijn: "google / cpc" vs "google/cpc", hoofdletters,
   trailing slashes in URL's; normaliseer eerst met LOWER en TRIM in berekende velden.
3. Datum-granulariteit: dag-data joinen op week-data dupliceert of dropt rijen;
   breng beide bronnen eerst naar dezelfde granulariteit.
4. Ratio's bereken je na de blend: CTR of ROAS als berekend veld over de geblende
   sommen, nooit percentages optellen of middelen.
5. Blends her-aggregeren verraderlijk: sessions naast cost op datum plus campagne
   dupliceert sessies zodra campagnenamen niet uniek zijn.

### Template-aanpak per discipline

| Discipline | Pagina's | Kernbronnen | Let op |
|---|---|---|---|
| SEO | Overzicht, zichtbaarheid, pagina's, technisch | GSC, GA4, evt. BigQuery | GSC-data loopt circa 2 dagen achter; zet de datastand op het dashboard |
| SEA | Overzicht, campagnes, zoektermen, budget-pacing | Google Ads, GA4 | Conversiebron benoemen (Ads-tag vs GA4-import); nooit beide naast elkaar zonder uitleg |
| E-com | Omzet, funnel, producten, kanalen | GA4, Google Ads, BigQuery | value incl/excl BTW consistent met backend; EU-notatie met komma als decimaalteken |

Vuistregel: 1 vraag per pagina, maximaal 8-10 widgets per pagina; een dashboard dat
alles toont beantwoordt niets. De KPI-selectie zelf komt uit kpi-framework-design.

### Performance-optimalisatie (volgorde van goedkoop naar duur)

1. Widgets snoeien: elk chart is minstens 1 query naar de bron
2. Filter-discipline: standaard datumbereik kort (28 dagen, niet "dit jaar"),
   rapport-filters boven widget-filters, geen filter-controls op
   hoge-cardinaliteit dimensies zoals landingspagina
3. Extract Data-connector voor kleine, stabiele datasets (limiet 100 MB per extract;
   ververst op schema, dus niet voor realtime)
4. Pre-aggregatie in BigQuery: scheduled query bouwt een dag-tabel, het dashboard
   leest alleen die tabel; dit is de structurele fix boven elke blend
5. Pro-features of extra tooling pas als 1 t/m 4 gedaan zijn

Werk-drempel: pagina boven de 10 seconden of quota-fouten in de GA4-connector →
stap 3 of 4 is verplicht, niet optioneel.

### Deel- en rechtenbeheer

- Viewer-toegang voor klanten, edit alleen MP; "iedereen met de link" alleen na
  expliciete MP-afweging (gelekte link = gelekte data)
- Credentials per bron: owner's credentials tonen alles aan elke viewer;
  viewer's credentials vereisen bron-toegang per kijker; kies bewust en documenteer
- Geplande e-mail-delivery (PDF) voor klanten die niet inloggen; frequentie volgt
  het ritme van seo-geo-reporting of google-ads-reporting
- Template-hergebruik: kopieer het rapport en hang bronnen om per klant; nooit
  1 rapport met klant-filters delen, want een omzeild filter is een datalek
  tussen klanten en dus een AVG-incident

### Community connectors afwegen

- Native connector beschikbaar → nooit een community connector (vuistregel)
- Data loopt via de infrastructuur van de connector-partij: beoordeel de
  AVG-kant (verwerkersovereenkomst, datalocatie) voor er klantdata doorheen gaat
- Kosten bij partijen als Supermetrics, Windsor.ai, Porter Metrics of Funnel.io
  lopen per bron of account op; reken het jaarbedrag door en leg het MP voor
- Vuistregel: is de bron via BigQuery of een Sheets-export te ontsluiten, dan wint
  dat van een betaalde connector op kosten en datacontrole
- Gratis onbekende connectors: behandel als datalek-risico; check maker, reviews
  en gevraagde scopes voor installatie

### Looker Studio Pro (stand medio 2026, verifieer voor advies)

- Gemini in Looker staat automatisch aan voor Pro-subscriptions aangemaakt op of na
  3 juni 2025: Conversational Analytics en calculated fields via natuurlijke taal
- Slack-integratie voor geautomatiseerde rapport-delivery
- Prijsindicatie rond 9 dollar per gebruiker per maand (indicatie: verifieer de
  actuele prijs en voorwaarden voordat je MP of een klant adviseert)
- Dit domein beweegt snel: controleer de actuele feature-stand en prijzen voor elke
  Pro-aanbeveling of AI-feature-belofte richting een klant

## Anti-patterns

- Bouwen zonder KPI-framework: je maakt een metric-verzameling, geen beslistool;
  de klant kijkt 1 keer en daarna nooit meer
- Alles blenden wat gecombineerd moet worden: blends zijn traag en join-verlies is
  onzichtbaar; pre-aggregatie is bijna altijd beter
- Ratio's sommeren over een blend heen (CTR, ROAS optellen): wiskundig fout,
  cijfers direct onbetrouwbaar
- Owner's credentials op gevoelige bronnen zonder afweging: elke viewer ziet
  alles wat MP ziet
- Live bouwen in het klant-rapport: de klant ziet halve charts en kapotte filters
- Community connector installeren omdat het snel is: kosten en datastroom buiten
  beeld, AVG-check overgeslagen
- Opleveren zonder spot-check tegen de bron-UI: 1 fout cijfer en het vertrouwen
  in het hele rapport is weg
- Geen vergelijkingsperiode tonen: zonder context is elk getal betekenisloos
  voor een beslissing

## Output-formaat

Per opgeleverd dashboard een bouwlog in
`<klantmap>/dashboards/YYYY-MM-<naam>-bouwlog.md`:

```markdown
# Dashboard <naam> <klant>
## Doel en doelgroep (welke beslissing ondersteunt dit, 1-2 regels)
## Bronnen (bron, connector, credentials-modus, eigenaar)
## Architectuur (native / blend / BigQuery-tabel, met reden)
## Pagina's en KPI's (verwijzing naar het kpi-framework)
## Verificatie (spot-check-tabel: cijfer, bron-UI, dashboard, delta, verklaring)
## Toegang (wie, welke rol, sinds wanneer)
## Onderhoud (wat breekt waardoor, hercheck-datum)
```

De spot-check-tabel is verplicht: zonder ingevulde verificatie is het dashboard
niet klaar voor MP-review.

## Dependencies

- Looker Studio (en eventueel Pro) via MP's Google-account
- Bron-toegangen: GA4-property, Google Ads (MCC), GSC-property, BigQuery-project, Sheets
- `<klantmap>/dashboards/` met account-brief.md en history-log.md
- KPI-framework uit kpi-framework-design
- BigQuery-datalaag via analytics-bigquery-sql voor pre-aggregatie
- `google_workspace_tool` voor Sheets-bronnen en klant-communicatie

## Integratie met andere skills

- **dashboard-specialist**: routeert hierheen en bewaakt de dashboard-strategie
- **kpi-framework-design**: bepaalt welke KPI's erop komen; deze skill bouwt ze
- **dashboard-audit**: beoordeelt bestaande dashboards; fixes landen hier als bouwwerk
- **analytics-bigquery-sql**: bouwt de pre-aggregatietabellen waar dit dashboard op leest
- **cowork-live-dashboards**: alternatief voor MP-eigen monitoring en MCP-only data;
  de beslisregels wanneer wel/niet staan daar
- **analytics-ga4-audit**: bij datakwaliteitsproblemen in de bron eerst daarheen
- **seo-geo-reporting** / **google-ads-reporting**: leveren inhoud en cadans;
  dit dashboard is hun drager
- **qbr-builder**: hergebruikt dashboard-views als bewijslaag in kwartaalreviews

## Tips

- Zet de datastand ("data t/m gisteren, GSC t/m eergisteren") als tekstveld op elk
  dashboard; het voorkomt de helft van de "cijfers kloppen niet"-mails
- Bouw eerst 1 pagina volledig af en laat MP die zien; 8 halve pagina's reviewen
  kost meer dan 1 hele
- Geef berekende velden een prefix (bv. "c_") zodat je in de veldenlijst direct
  ziet wat zelfgebouwd is
- GA4-quota raken vooral rapporten met veel losse scorecards; combineer scorecards
  in tabellen waar het kan
- Blend-debuggen: zet beide kanten eerst als losse tabellen naast elkaar, dan zie
  je join-verlies direct
- Sheets is prima voor targets en budgetten (handmatig onderhouden), slecht voor
  event-data (limieten, geen historie)
- Zet datumnotatie en decimalen op NL-publiek (dd-mm-jjjj, komma): klanten
  struikelen over 1,000 vs 1.000
- Leg per dashboard vast welk cijfer leidend is bij verschil tussen bronnen;
  anders wordt elke review een attributie-discussie

*Eerste versie: juli 2026. Herzie bij Looker Studio Pro prijs- of featurewijzigingen, nieuwe connector-quota of wijzigingen in de GA4/GSC-connectors.*
