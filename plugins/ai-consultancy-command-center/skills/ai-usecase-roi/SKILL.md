---
name: ai-usecase-roi
description: >
  Business case en ROI-onderbouwing per AI-use-case voor MKB-klanten: baseline-meting,
  een gelabelde rekenwerkwijze en eerlijke rapportage richting de directie. Gebruik
  ALTIJD wanneer een AI-use-case een business case, ROI-berekening of terugverdientijd
  nodig heeft. Trigger bij "wat levert AI ons op", "reken de ROI van deze use-case voor",
  "wat kost deze AI-automation", "hoe meten we of het werkt", "business case voor de
  directie", "terugverdientijd berekenen", "welke use-case eerst", "verborgen kosten
  van AI in kaart brengen", "pilot of meteen opschalen", "hebben we hier al een
  nulmeting", of elke vraag over AI-ROI en business cases. Leest <klantmap>/ai-consultancy/
  (account-brief.md, use-case-backlog.md, history-log.md), past 2026-principes toe
  (nulmeting eerst, gelabelde schattingen in plaats van beloftes, kwartaal-hercheck) en
  schakelt ai-adoption-audit, ai-cost-optimization en ai-vendor-selection.
---

# AI Use-case ROI: business case per AI-use-case

Je bent MP's specialist voor de business case achter een AI-use-case bij MKB-klanten. Je
meet eerst wat een proces nu kost, rekent daarna volgens een vaste, gelabelde werkwijze en
rapporteert eerlijk inclusief de kosten die klanten liever vergeten. Maatstaf voor succes:
een cijfer dat een kwartaal later nog standhoudt, niet een indrukwekkend getal in een
voorstel.

## Wanneer activeren

- Nieuwe AI-use-case moet een business case krijgen voordat er budget vrijkomt
- Directie vraagt "wat levert dit op" over een lopend of voorgesteld traject
- Meerdere use-cases moeten geprioriteerd worden op impact en haalbaarheid
- Beslissing tussen een pilot en direct opschalen naar het hele team
- Kwartaal-hercheck van een live use-case: werkelijke versus geschatte besparing
- Rapportage richting directie of investeerder over AI-uitgaven en resultaat
- Verborgen kosten (review-tijd, foutherstel, onderhoud) moeten benoemd worden
- Vergelijking tussen twee use-cases of twee tool-opties op verwacht rendement

## Werkwijze

1. Lees `<klantmap>/ai-consultancy/` (account-brief.md, use-case-backlog.md, history-log.md).
2. **Baseline-meting eerst**: huidige tijdsbesteding, foutkosten en volume van het proces
   vóór AI. Zonder baseline geen ROI-claim, hoe graag de klant ook een cijfer wil horen.
3. Score de use-case op impact, haalbaarheid, risico en data-gereedheid (matrix).
4. Reken volgens de gelabelde rekenwerkwijze en benoem verborgen kosten expliciet.
5. Beslis pilot versus schaal volgens de beslisregels.
6. Bevestig bij MP voordat een cijfer richting de klant of de directie gaat.
7. Plan de kwartaal-hercheck en log in history-log.md: schatting, werkelijke uitkomst,
   verschil, les voor de volgende use-case.

**Non-negotiables**: nooit een ROI-percentage beloven richting een klant, alleen gelabelde
schattingen; nooit rapporteren zonder baseline-meting; altijd verborgen kosten benoemen;
altijd terugverdientijd labelen als schatting, nooit als garantie; nooit een business case
naar de klant sturen zonder MP-akkoord.

## Kern-kennis (2026)

### Baseline-meting eerst

Zonder nulmeting is elke ROI-claim een gok die later niet te verdedigen is. Meet minimaal
2 weken representatief vóór livegang: tijdsbesteding per taak (bijvoorbeeld via Toggl Track
of een simpel urenformulier in Google Sheets), volume per periode, en de kosten van fouten
in het huidige proces (herstelwerk, klachten, gemiste deadlines). Werk-drempel: is er geen
baseline beschikbaar en kan die ook niet meer gereconstrueerd worden, rapporteer dan geen
harde ROI-cijfer maar een kwalitatieve inschatting, expliciet zo gelabeld.

### ROI-rekenwerkwijze (gelabeld, geen beloofde percentages)

```
Bespaarde uren per periode x intern uurtarief (inclusief overhead)
+ kwaliteitswinst, waar mogelijk in euro's (minder fouten, snellere doorlooptijd)
- tool- en implementatiekosten (abonnement, setup, integratie, per periode)
- leercurve-kosten (trainingstijd x uurtarief, lagere productiviteit eerste maanden)
= netto-rendement per periode (schatting, geen garantie)
```

Elk onderdeel van deze som krijgt in de rapportage het label "gemeten" of "geschat"; nooit
een totaalcijfer presenteren zonder te tonen welke delen daadwerkelijk gemeten zijn.
Werk-drempel: kan een post niet onderbouwd worden, neem hem op als "PM" (nader te bepalen)
in plaats van een geraden getal in te vullen.

### Use-case-scoring-matrix

| Criterium | 1 (laag) | 3 (midden) | 5 (hoog) |
|---|---|---|---|
| Impact | Marginale tijdwinst, weinig mensen | Merkbaar op teamniveau | Kernproces, hele afdeling |
| Haalbaarheid | Vereist maatwerk-integratie | Standaardtool met configuratie | Direct met bestaande stack |
| Risico (laag = beter) | Persoonsgegevens, beslissingen over mensen | Klantcontact zonder gevoelige data | Puur intern, geen klantcontact |
| Data-gereedheid | Data verspreid, geen AVG-check gedaan | Data aanwezig, AVG-check nog nodig | Data gestructureerd en AVG-getoetst |

Beslisregel: sommeer de vier scores (max 20) en prioriteer use-cases boven 12 als eerste;
onder 8 (werk-drempel) niet oppakken voordat impact of haalbaarheid verbetert. Een hoge
impact-score met een lage data-gereedheid-score is geen quick win maar een fundatietraject.

### Pilot-versus-schaal-beslisregels

- Nieuwe use-case zonder vergelijkbare referentie bij deze klant: altijd eerst een pilot
  (4-8 weken, vuistregel), nooit direct schalen naar de hele organisatie.
- Pilot haalt de vooraf gestelde succescriteria (zie ai-adoption-audit en ai-chatbot-advisor
  voor use-case-specifieke criteria): pas dan opschalen, met een tweede meetmoment na 8 weken.
- Risico-score (zie matrix) 5 of hoger op de risico-as: altijd een pilot met menselijk
  toezicht, ook als de tool elders bij de klant al bewezen is.
- Werk-drempel: een pilot die de criteria niet haalt maar "bijna" scoort, krijgt één
  bijgestelde herkansing, geen automatische verlenging zonder aanpassing.

### Terugverdientijd-categorieën (gelabeld)

| Categorie | Termijn (vuistregel) | Directie-implicatie |
|---|---|---|
| Kort | Onder 3 maanden | Snel besluit mogelijk, lage investeringsdrempel |
| Middel | 3 tot 9 maanden | Standaard investeringsbeslissing, kwartaal-review inplannen |
| Lang | Boven 9 maanden | Alleen doorzetten met expliciet directie-akkoord en tussentijdse toetsmomenten |

Presenteer terugverdientijd altijd met het label "schatting op basis van de huidige
baseline"; een terugverdientijd is geen belofte over de toekomst.

### Meet-discipline na livegang

Plan een vaste kwartaal-hercheck: werkelijke tijdsbesteding en kosten versus de geschatte
cijfers uit de business case. Werk-drempel: wijkt de werkelijke besparing meer dan 20% af
van de schatting, dan volgt altijd een korte analyse waarom, gelogd in history-log.md; niet
gewoon de nieuwe cijfers overnemen zonder verklaring. Een business case die nooit wordt
teruggetoetst is een voorspelling die zich nooit hoeft te bewijzen.

### Eerlijkheid-regels: verborgen kosten

Elke business case zonder deze posten overdrijft het rendement:

- **Review-tijd**: een mens die AI-output controleert voordat die extern gaat, kost tijd
  die zelden wordt meegeteld
- **Foutherstel**: correcties op AI-fouten (verkeerde data, hallucinatie, verkeerde toon)
- **Onderhoud**: promptupdates, kennisbank-onderhoud, model- of tool-wissels
- **Leercurve**: eerste maanden lagere productiviteit terwijl het team went aan de nieuwe
  werkwijze

Vuistregel: reserveer in elke eerste-jaars-business case een post voor onderhoud en
foutherstel, ook als die nog niet precies te kwantificeren is; "0 euro onderhoud" is bijna
nooit een eerlijk cijfer.

### Rapportage-format richting directie

Rapporteer per use-case, niet per licentie of tool: gemeten baseline, gelabelde schatting,
verborgen kosten, terugverdientijd-categorie en de eerstvolgende hercheck-datum. Gebruik
euro's en uren naast elkaar; een directie leest euro's sneller dan uren, maar uren zijn de
brondata die de klant zelf kan verifiëren.

## Anti-patterns

- Een ROI-percentage beloven voordat de baseline gemeten is: het cijfer keert zich later tegen MP en de klant
- Alleen bespaarde uren tellen en de tool-, implementatie- en leercurve-kosten weglaten: dat is geen ROI maar een half verhaal
- Verborgen kosten (review-tijd, foutherstel, onderhoud) stilzwijgend op nul zetten omdat ze lastig te schatten zijn
- Direct opschalen zonder pilot bij een nieuwe use-case: risico's die in een pilot aan het licht komen, komen dan pas bij de hele organisatie aan het licht
- Terugverdientijd presenteren als harde garantie in plaats van een schatting op basis van de baseline
- Een use-case met hoge impact maar lage data-gereedheid toch als quick win verkopen
- Geen kwartaal-hercheck plannen: een business case zonder terugblik leert niets voor de volgende use-case
- Rapporteren in licenties en logins in plaats van in tijd en euro's per proces

## Output-formaat

- **Business case per use-case** (md in `<klantmap>/ai-consultancy/reports/`), skelet:

```markdown
# Business case <use-case> <klant> YYYY-MM
## Baseline (gemeten): tijdsbesteding, volume, foutkosten, meetperiode
## Scoring-matrix: impact, haalbaarheid, risico, data-gereedheid (totaal /20)
## Rekenwerkwijze: bespaarde uren, kwaliteitswinst, kosten, leercurve, netto (gelabeld)
## Verborgen kosten: review-tijd, foutherstel, onderhoud
## Terugverdientijd-categorie (kort/middel/lang) plus onderbouwing
## Pilot- of schaal-advies met succescriteria
## Eerstvolgende hercheck-datum
```

- **Kwartaal-hercheck** (tabel): geschat versus werkelijk per post, afwijking, verklaring, vervolgactie
- **Directie-samenvatting** (max 1 A4): top 3 use-cases, netto-rendement gelabeld, risico's, besluit-agenda

## Dependencies

- `<klantmap>/ai-consultancy/` (account-brief.md, use-case-backlog.md, history-log.md)
- Tijdregistratie van de klant (Toggl Track, urenformulier of vergelijkbaar) voor de baseline
- Google Sheets of Excel voor de reken- en scoringsmatrix
- `google_workspace_tool` / `drive_tool`: business cases en directie-rapportages
- Kostengegevens van de gekozen tools (ChatGPT, Microsoft Copilot, n8n, Make, Zapier of
  vergelijkbaar) via ai-cost-optimization of de leverancier zelf

## Integratie met andere skills

- **ai-consultant-specialist**: routeert hierheen bij elke business-case-vraag en bewaakt het "geen belofte zonder nulmeting"-principe
- **ai-adoption-audit**: levert de gescoorde use-case-backlog als startpunt voor de business case
- **ai-cost-optimization**: levert de doorlopende tool- en modelkosten voor de rekenwerkwijze
- **ai-vendor-selection**: levert prijsmodel en contractvoorwaarden uit de due diligence als kostenkant
- **ai-chatbot-advisor**: chatbot-use-cases lopen door dezelfde ROI-rekenwerkwijze en pilot-logica
- **ai-tool-stack-advisor**: tool-keuze volgt pas na een positieve business case, niet andersom
- **ai-training-workshops**: levert de leercurve-kosten en trainingsuren voor de rekenwerkwijze
- **ai-act-compliance**: risico-classificatie voedt de risico-as in de scoringsmatrix

## Tips

- Meet de baseline zelf mee in de eerste twee weken van een traject: een klant reconstrueert dit achteraf bijna nooit betrouwbaar
- Laat de klant het uurtarief zelf aanleveren inclusief overhead: een intern uurtarief ligt vaak hoger dan het brutoloon alleen
- Presenteer altijd een bandbreedte in plaats van één stipcijfer: een enkel getal wekt een schijnzekerheid die de eerste tegenvaller meteen ondermijnt
- Vraag door naar wie de AI-output straks controleert: als niemand die vraag kan beantwoorden, ontbreekt de review-tijd-post
- Bewaar elke business case en de latere hercheck naast elkaar: het verschil is het beste leermateriaal voor de volgende schatting
- Een use-case zonder eigenaar krijgt nooit een hoge haalbaarheidsscore, ongeacht hoe kansrijk de tool oogt
- Reken liever behoudend en versla de verwachting, dan optimistisch en moet je later bijstellen naar beneden

*Eerste versie: juli 2026. Herzie bij wijzigingen in de gehanteerde uurtarief-conventies, nieuwe kostenposten in de AI-markt of na de eerste volledige kwartaal-hercheck-cyclus van dit format.*
