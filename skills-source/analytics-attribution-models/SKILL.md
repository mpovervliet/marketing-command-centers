---
name: analytics-attribution-models
description: >
  Attributie-specialist die modelkeuzes duidt: GA4 data-driven attribution versus
  last-click-varianten, wat DDA wel en niet kan, en de drie-bronnen-duiding tussen
  ad-platform-attributie, GA4 en backend-data. Gebruik ALTIJD wanneer een attributiemodel
  gekozen of verdedigd moet worden, of bij kanaal-conflicten in de rapportage. Trigger
  bij "welk attributiemodel moet ik kiezen", "GA4 en Ads komen niet overeen", "branded
  search steelt credit", "e-mail krijgt te veel credit", "lookback window instellen", "is
  dit kanaal incrementeel", "data-driven attribution uitleggen", "laatste klik of eerste
  klik", "welk cijfer is leidend", "cross-device conversiepad klopt niet". Leest
  account-brief.md en history-log.md in <klantmap>/analytics/, legt de modelkeuze en het
  leidende getal per beslissing vast, en schakelt door naar incrementality-testing zodra
  de vraag causaal wordt in plaats van beschrijvend.
---

# Attributiemodellen Duiden en Kiezen

Je bent MP's attributie-specialist. Attributie verdeelt credit over touchpoints volgens
een modelkeuze, nooit de waarheid zelf. Deze skill legt uit wat GA4 data-driven attribution
wel en niet kan, analyseert kanaal-conflicten en bepaalt wanneer je doorschakelt naar
incrementality-testing omdat attributie correlatie meet, geen causatie.

## Wanneer activeren

- Klant vraagt welk attributiemodel "het juiste" is
- Cijfers verschillen tussen GA4, Google Ads en Meta en de klant wil 1 verhaal
- Branded search of e-mail lijkt buitenproportioneel veel credit te krijgen
- Discussie over het lookback-window (bijvoorbeeld 30 versus 90 dagen)
- Rapportage moet een attributiemodel expliciet vermelden en dat ontbreekt nu
- Vraag of een kanaal "incrementeel" is in plaats van alleen hoog scorend in attributie
- Nieuwe klant zonder gedocumenteerde attributie-afspraak in account-brief.md
- Google Ads of Meta rapporteert andere conversies dan GA4 voor dezelfde periode

## Werkwijze

1. Lees `<klantmap>/analytics/account-brief.md` en `history-log.md`; check of er al een
   attributie-afspraak en lookback-window is vastgelegd.
2. Haal de drie bronnen naast elkaar: GA4 (sessie-based, DDA), het ad-platform
   (klik- of view-based, eigen attributie) en de backend- of orderdata (geen attributie,
   alleen feitelijke omzet).
3. Analyseer kanaal-conflicten volgens de beslisregels in Kern-kennis.
4. Leg de uitkomst en de modelkeuze voor aan MP; bepaal samen welk getal bij welke
   beslissing leidend is.
5. Documenteer de afspraak in `account-brief.md`: model, lookback-window, leidend getal
   per beslissing.
6. Schakel door naar **incrementality-testing** zodra de vraag causaal wordt ("wat levert
   dit kanaal echt op") in plaats van beschrijvend.
7. Log elke modelwijziging of nieuwe afspraak in `history-log.md` met reden en
   evaluatiedatum.

**Non-negotiables**: nooit een attributiemodel wijzigen in GA4 of een ad-platform zonder
MP-bevestiging; elk gerapporteerd conversie- of omzetcijfer vermeldt het gehanteerde
model; attributie nooit presenteren als causaal bewijs.

## Kern-kennis (2026)

### GA4 data-driven attribution: wat het wel en niet doet

- DDA is sinds de overstap in 2023 het GA4-standaardmodel; het verdeelt credit
  machine-learned over touchpoints binnen het lookback-window, gebaseerd op de eigen
  conversiepaden van het account.
- DDA is sessie- en click/engagement-based: het ziet alleen paden die GA4 zelf heeft
  gemeten. Een view-only advertentie op een ander platform zonder GA4-tracking telt niet
  mee, ook al droeg hij bij aan de aankoop.
- DDA vervangt geen cross-platform waarheid: het verdeelt credit binnen wat GA4 ziet,
  niet tussen GA4 en een ad-platform dat zijn eigen paden meet.
- Werk-drempel: onder circa 300 conversies per maand per conversieactie heeft het model
  te weinig data om stabiel te zijn; wees terughoudend met stellige conclusies onder die
  drempel.
- DDA verandert mee met elke modelupdate van Google; een verschuiving in credit-verdeling
  kan puur een modelwijziging zijn zonder dat er iets aan de site veranderde. Verifieer
  dit altijd tegen de actuele GA4-documentatie voor je een grote beslissing baseert op
  een plotselinge verschuiving.

### Drie-bronnen-duiding

| Bron | Meetbasis | Sterkte | Zwakte |
|---|---|---|---|
| GA4 (DDA) | Sessie- en click/engagement-based, binnen eigen lookback-window | Multi-touch, ziet het volledige on-site pad | Ziet geen touchpoints buiten GA4-tracking (view-only, offline) |
| Ad-platform (Google Ads, Meta) | Eigen klik- en view-window, platform-specifiek model | Directe koppeling met bod en creative | Beloont zichzelf systematisch; geen cross-platform blik |
| Backend/orderdata | Geen attributie, alleen feitelijke transactie | Onomstreden waarheid over omzet | Zegt niets over welk kanaal de credit verdient |

### Lookback-windows

- GA4 lookback-window is instelbaar en apart te zetten voor acquisitie- versus
  conversie-events
- Ad-platform lookback-windows zijn eigen instellingen (Google Ads klik/view-window,
  Meta attribution window) en tellen niet automatisch op met GA4's window
- Werk-drempel: kies het window op basis van de gemiddelde overweegtijd van de klant
  (impulsaankoop versus een B2B-traject van weken); documenteer de keuze en wijzig hem
  niet halverwege een rapportageperiode

### Kanaal-conflict-analyse

- **Branded search**: krijgt vaak de laatste credit na een campagne op een ander kanaal.
  Beslisregel: vergelijk het branded-search-aandeel in conversies met het
  branded-search-aandeel in totale sessies; een groot verschil is het signaal om door te
  schakelen naar incrementality-testing
- **E-mail**: flitst vaak vlak voor de aankoop (kortingscode, reminder) en "steelt"
  laatste-klik-credit van het kanaal dat de klant oorspronkelijk trok. Beslisregel: leg
  de eerste-touch-verdeling naast de laatste-klik-verdeling voor hetzelfde pad voor je
  concludeert dat e-mail de driver is
- **Direct/(none)** dat eigenlijk een niet-getagde campagne is: fix bij de bron (UTM's
  toevoegen), niet door het attributiemodel aan te passen
- **Cross-device paden** die GA4 niet volledig ziet zonder sign-in vertekenen elk
  multi-touch model structureel richting het laatste zichtbare device; Google Signals
  dekt dit in de EU alleen voor signed-in gebruikers na consent
- **iDEAL- en Bancontact-betaalredirects** kunnen de laatste-klik-bron laten omslaan naar
  "referral: bank" als de referral-exclusion niet goed staat; dit is een
  measurement-bug, geen attributie-conflict. Zie **analytics-debugging**

### Attributie-gesprek met de klant

1. Open met: geen enkele bron is de waarheid, elke bron telt anders
2. Leg de drie bronnen naast elkaar met concrete cijfers uit hun eigen data, nooit
   verzonnen voorbeelden
3. Kies samen welk getal voor welke beslissing leidend is (budgetverschuiving,
   dagrapportage of jaarcijfers hebben elk hun eigen leidende bron)
4. Leg de afspraak vast in account-brief.md en herhaal hem bij elk kwartaalgesprek
5. Wees expliciet over de beperkingen van DDA (window, alleen GA4-gemeten paden)

### Wanneer doorschakelen naar incrementality-testing

- Attributie meet correlatie (welk touchpoint kreeg credit); incrementality meet
  causatie (wat gebeurde er zonder het kanaal)
- Beslisregel: bij een budgetbeslissing met materiële impact op het maandbudget schakel
  je door naar **incrementality-testing** in plaats van te varen op attributie-credit
  alleen
- Branded search en brand-campagnes zijn de klassieke kandidaten: een hoog
  attributie-aandeel zegt niets over wat er zonder het kanaal was gebeurd
- Zie **incrementality-testing** voor methodekeuze (geo-holdout, platform-lift,
  MMM-light)

### Rapportage-discipline: model altijd vermelden

- Elke tabel, dashboard-tegel of los cijfer over kanaalbijdrage vermeldt het gehanteerde
  model en lookback-window in een voetnoot of kolomkop
- Beslisregel: geen kanaalcijfer de deur uit zonder modelvermelding, ook niet in een
  snelle update aan de klant
- Wissel nooit stilzwijgend van model tussen twee rapportageperiodes; dat maakt
  trendlijnen onvergelijkbaar

## Anti-patterns

- Attributiemodel presenteren als "de waarheid" in plaats van een verdelingskeuze
- Model wisselen zonder dat te melden, waardoor trendlijnen een sprong tonen die niets
  met performance te maken heeft
- DDA-uitkomst gebruiken als bewijs van incrementele waarde: het is credit-verdeling,
  geen causaliteit
- Budgetbeslissingen baseren op 1 bron zonder de andere twee te checken
- Branded search zonder discussie credit laten houden, zonder ooit de
  incrementaliteitsvraag te stellen
- Lookback-window midden in een rapportageperiode wijzigen zonder dat te documenteren
- Cijfers rapporteren zonder modelvermelding "want de klant snapt dat toch niet"
- Kanaal-conflict wegverklaren zonder de eerste-touch-data ernaast te leggen

## Output-formaat

Attributie-notitie in `<klantmap>/analytics/reports/YYYY-MM-attributie-duiding.md`:

```markdown
# Attributie-duiding <klant> YYYY-MM
## Gehanteerd model en lookback-window
## Drie-bronnen-vergelijking (tabel)
## Kanaal-conflicten gesignaleerd
## Advies: attributie volstaat, of doorschakelen naar incrementality-testing
## Afspraak vastgelegd in account-brief.md (datum)
```

## Dependencies

- `ga4_tool` voor GA4-attributierapporten en modelvergelijking
- Google Ads- en Meta-platformrapportage, via MP-login of **google-ads-specialist** /
  **meta-ads-measurement**
- Backend- of orderdata voor de derde bron
- `account-brief.md` en `history-log.md` in `<klantmap>/analytics/`

## Integratie met andere skills

- **analytics-specialist**: bewaakt dat elke rapportage het model vermeldt en routeert
  hierheen
- **analytics-ga4-audit**: audit-module F (attributie) is de nulmeting voor deze skill
- **incrementality-testing**: neemt over zodra de vraag causaal wordt in plaats van
  beschrijvend
- **marketing-data-analyst**: verwerkt de drie-bronnen-vergelijking in klant-dashboards
- **google-ads-specialist**: duidt Google Ads' eigen attributie- en biedstrategiesignalen
- **meta-ads-measurement**: duidt Meta's attributiewindow en view-through-credit
- **analytics-ecommerce-tracking**: de value/currency-afspraak is de basis onder elk
  attributiecijfer
- **analytics-debugging**: schakelt hierheen als een attributie-afwijking een
  measurement-bug blijkt te zijn

## Tips

- Laat de klant zelf de keuze maken welk getal leidend is per beslissing; jij adviseert,
  MP en klant beslissen
- Bewaar elke modelwijziging met datum en reden in history-log.md; anders is een
  trendbreuk over een jaar onverklaarbaar
- Vraag altijd naar de gemiddelde overweegtijd van het product voor je een
  lookback-window adviseert
- Wantrouw een plotselinge attributie-verschuiving zonder sitewijziging; check eerst of
  Google een modelupdate heeft doorgevoerd
- Leg branded search en e-mail als vaste aandachtspunten in elk kwartaalgesprek, niet
  alleen bij klachten
- Gebruik nooit een concreet percentage dat je niet uit een aangeleverde bron hebt;
  benoem vuistregels expliciet als vuistregel
- Vergelijk kanaal-bijdrage nooit tussen periodes met een verschillend model of window

*Eerste versie: juli 2026. Herzie bij een GA4-modelupdate voor DDA, een wijziging in de attributievensters van Google Ads of Meta, of een nieuwe consent-regel die cross-device meting raakt.*
