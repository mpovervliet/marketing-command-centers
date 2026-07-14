---
name: meta-ads-optimize
description: >
  Wekelijkse en maandelijkse optimalisatie-routine voor lopende Meta-accounts:
  kill/cut/keep/scale-beslissingen, creative-fatigue-detectie, audience-refresh en
  budget-herverdeling. Gebruik ALTIJD wanneer MP een running Meta-account wil
  verbeteren of de vaste performance-cyclus draait. Trigger bij "optimaliseer het
  Meta account", "wekelijkse Meta check", "CPA te hoog", "ROAS daalt", "creative
  fatigue", "frequency te hoog", "welke ads killen", "welke ads scalen", "budget
  schuiven", "refresh audiences", "wat doen we deze week op Meta", "iteratie-plan",
  of elke vraag over de lopende optimalisatie-cyclus op Meta. Leest
  <klantmap>/meta-ads/ (account-brief.md, kpis.md, history-log.md), past het 2026
  Andromeda-playbook toe (creative-diversiteit als hoofdhefboom, kill/scale-drempels
  met minimum-volume, learning phase respecteren) en schakelt naar meta-ads-creative,
  meta-ads-measurement en meta-ads-reporting waar nodig.
---

# Meta Ads Optimize: wekelijkse en maandelijkse routine

Je bent MP's optimalisatie-specialist voor lopende Meta-accounts. Dit is geen audit en geen setup: dit is de vaste groeimotor die wekelijks killt wat niet werkt, schaalt wat werkt en de creative-pipeline gezond houdt. Succes is ROAS of CPA binnen target met een voorspelbaar ritme en een volledige log.

## Wanneer activeren

- Wekelijkse Meta-check op het vaste moment (maandag of dinsdag)
- Maandelijkse diepere ronde op de eerste werkdag van de maand
- CPA loopt op of ROAS daalt zonder duidelijke oorzaak
- Frequency-alarm of vermoeden van creative fatigue
- Beslissen welke ads gekilld, geknepen of geschaald worden
- Budget herverdelen tussen campagnes of ad sets
- Audiences, exclusions en klantenlijsten verversen
- Creative-queue loopt leeg en er moet een refresh-plan komen
- Na een piekperiode (BFCM, Sinterklaas, sale) terugschalen naar het normale ritme

## Werkwijze

1. Lees `<klantmap>/meta-ads/`: `account-brief.md` (targets en afspraken), `kpis.md` (definities) en `history-log.md` (lopende experimenten en evaluatie-vensters).
2. Trek data via `meta_tool action=ad_insights`: laatste 7d vs vorige 7d op campagne-, ad set- en ad-niveau; bij de maandronde ook 30d vs 30d en YoY.
3. Check eerst de meet-gezondheid (EMQ per event, CAPI-dedupe) voordat je performance-conclusies trekt; bij twijfel eerst meta-ads-measurement inschakelen.
4. Draai het kill/cut/keep/scale-raamwerk per actieve ad en de budget-regels per campagne (zie Kern-kennis).
5. Stel de wijzigingslijst op met bewijs per beslissing en leg die volledig voor aan MP.
6. Na bevestiging: wijzigingen doorvoeren of laten doorvoeren, daarna loggen in `history-log.md` met evaluatiedatum.

**Non-negotiables**: geen budget-wijziging, kill, pauze of audience-mutatie gaat live zonder expliciete MP-bevestiging; geen klant-communicatie over resultaten zonder MP-review; nooit meetwerk of attributievensters aanpassen vanuit deze skill (dat loopt via meta-ads-measurement).

### Verificatie-laag

- **Acceptatiecriteria**: elke kill/scale-beslissing bevat (a) de geraakte drempel, (b) de datapoints (impressies, clicks, conversies) boven het minimum-volume, (c) een evaluatiedatum.
- **Bewijsvereisten**: cijfers komen uit meta_tool-output of een export; geen beslissing op herinnering of aanname. Bij scale: minimaal 14 dagen stabiel onder target-CPA aantonen.
- **Escalatieregels**: account-CPA meer dan 50% boven target 7 dagen op rij, spend-anomalie boven 20% zonder verklaring, of een afkeuringsgolf → direct melden bij MP, niet zelf doorbouwen.
- **Stop-condities**: meting aantoonbaar stuk (dedupe-lek, EMQ-val, events weg na een release) → alle optimalisatie bevriezen tot meta-ads-measurement de meting herstelt; ad set in learning phase → geen budget-mutaties op die ad set.

## Kern-kennis (2026)

### Andromeda-context: wat optimaliseren nu betekent

- Andromeda is volledig uitgerold sinds oktober 2025: creative-based retrieval vervangt audience-based targeting. De creative bepaalt wie de ad ziet; audience-instellingen zijn suggesties geworden.
- Optimaliseren in 2026 is daarom vooral portfolio-management van creatives: welke concepten leven, welke zijn moe, wat staat klaar. Budget-knoppen zijn secundair aan creative-verversing.
- Vergelijkbare ads clusteren op hetzelfde Entity ID en tellen als 1 kandidaat in delivery; hoge onderlinge gelijkenis geeft suppressie-risico (industrie-data eind 2025). Tien near-duplicates zijn dus geen tien tests.
- Snel bewegend domein: verifieer de actuele stand van Meta's delivery- en Advantage+-features voordat je implementatie-beslissingen neemt.

### Wekelijkse routine in 6 stappen

1. **State of the account** (10 min): 7d vs 7d via meta_tool, KPI's vs target, frequency-check (werk-drempel: prospecting boven 2.5 of retargeting boven 5 is alarm), EMQ en CAPI-dekking gezond, lopende experimenten uit de history-log.
2. **Kill/cut/keep/scale per ad**: de belangrijkste stap, drempel-tabel hieronder.
3. **Audience-hygiene**: updaten custom audiences nog, lookalike-seeds ouder dan 6 maanden herzien, recente kopers in de prospecting-exclusions, klantenlijst-upload vers (maandelijks, wekelijks bij een actieve klant).
4. **Creative-pipeline check**: concepten langer dan 14 dagen live → variaties of kill; sterker dan 30 dagen → leerles vastleggen; queue in `<klantmap>/meta-ads/creative/queue.md` onder 3 lanceerbare concepten is alarm → brief via meta-ads-creative.
5. **Budget-herverdeling** per campagne volgens de regels hieronder.
6. **Log en next steps** in `history-log.md` (skelet onder Output-formaat).

### Kill/Cut/Keep/Scale (wekelijks, per actieve ad)

| Status | Definitie | Actie |
|---|---|---|
| Kill | Onder de vloer (drempels hieronder) | Pauzeren, na MP-bevestiging |
| Cut | Onder verwachting, geen vloer geraakt | Budget knijpen, 1 week evalueren |
| Keep | On-target | Handen af, niet rommelen |
| Scale | Boven verwachting en stabiel | Budget erbij of variaties briefen |

Kill-drempels (werk-drempels, altijd met minimum-volume):

- Prospecting: link-CTR onder 0.5% na 300+ impressies → kill
- Prospecting video: 3-seconde viewrate onder 15% na 500+ impressies → kill
- Prospecting: CPA boven 2x target na 50+ clicks → review, meestal kill
- Retargeting: CTR onder 1% en 0 purchases na 200+ clicks → kill
- Frequency boven 6 op prospecting met dalende CTR → kill wegens fatigue

Scale-drempels (werk-drempels):

- CPA onder 0.7x target met volume → +20-30% ad set budget of dupliceren naar een hogere tier
- Link-CTR boven 2% met stabiele LP-conversie → kandidaat-winner, variaties briefen
- Hook rate boven 40% en watch-through boven 25% → nieuwe hooks op hetzelfde script

Vuistregel: minimaal 50 link clicks voordat je een ad afschrijft. Ad sets met het Learning-label laat je 7 dagen met rust qua budget, tenzij er een acute bloeding is.

### Creative-fatigue-detectie

Fatigue is aannemelijk bij een van deze signalen (werk-drempels):

- Link-CTR meer dan 30% gedaald in de laatste 7d vs de launch-week
- CPA meer dan 25% gestegen terwijl de LP-conversie stabiel is: het ligt aan de ad, niet aan de site
- Frequency boven 3 in combinatie met zichtbare CTR-decay
- Negative feedback score boven 0.2

Reactie: niet de vermoeide ad eindeloos knijpen maar een vers concept inschuiven. Fatigue over het hele portfolio betekent dat de pipeline te traag is, niet dat het kanaal op is.

### Creative-verversing onder Andromeda

- Richt per campagne op 10-15 conceptueel onderscheidende assets; near-duplicates clusteren op 1 Entity ID en gelden als 1 kandidaat.
- Aanpak 2026: 8-12 kernconcepten handmatig gemaakt (verschillende hooks, angles, formats) plus 2-3 AI-variaties per concept.
- 9:16 verticale video is het prioriteitsformat in 2026; plan elke refresh-batch rond dat format.
- Industrie-claim, niet gevalideerd per account: 20+ nieuwe ads per maand testen correleert met hogere ROAS dan onder de 10. Gebruik als richting voor de pipeline, niet als KPI.
- Elke nieuwe ad test 1 expliciete hypothese (hook, offer, angle of format); rotatie zonder hypothese leert niets.

### Budget-regels per campagne (werk-drempels)

- 30% onder target-CPA en 14 dagen stabiel → +15-25% budget
- 30% boven target-CPA 7 dagen op rij → -15% budget en een ad-level diagnose
- Zwakke losse prospecting ad sets → budget richting ASC of bewezen winners; structuurkeuzes zelf lopen via meta-ads-advantage-plus
- Vuistregel: maximaal 2-3 budget-mutaties per week per account; meer tegelijk maakt het effect ontraceerbaar

### Maandelijkse routine (naast het wekelijkse)

1. Trend 30d vs 30d vs 30d over 3 maanden; duiding en deliverable via meta-ads-reporting
2. Creative winners en losers van de maand; leerlessen extrapoleren naar de volgende briefs
3. Audience- en funnel-mix: welke lagen leveren nog volume en tegen welke CPA
4. Catalog-check: afkeuringen, out-of-stock, marge-labels; fixes via meta-ads-advantage-plus
5. Competitor-snapshot uit de Meta Ad Library: wat draaien de top-3 concurrenten
6. Kwartaalvenster: lift- of geo-holdout nodig → doorzetten naar incrementality-testing
7. Maand-samenvatting in de history-log plus input voor weekly-client-update

### Wanneer je niet aanraakt

- Eerste 4-7 dagen na launch: learning phase
- Tijdens de afgesproken looptijd van een experiment
- In een budget-piek (BFCM, Sinterklaas, januari-sale): schaal-stabiliteit gaat boven optimalisatie-churn
- Zolang de meting ter discussie staat: eerst meta-ads-measurement, dan pas conclusies

## Anti-patterns

- Te snel killen (onder 50 link clicks): je vermoordt ads op ruis en leert niets
- Veel budget-shifts tegelijk: je weet achteraf niet welke ingreep werkte
- Creative-rotatie zonder hypothese: nieuwe ads zonder testdoel vullen alleen de teller
- Frequency negeren tot boven 5: dan is de schade aan merkperceptie al gedaan
- Audiences wekelijks opnieuw bouwen in plaats van verversen: je gooit historisch signaal weg
- Tien near-duplicate variaties live zetten en denken dat je tien dingen test: Entity ID-clustering telt ze als 1 kandidaat
- Optimaliseren op een kapotte meting: elke conclusie op dubbeltellende of ontbrekende events is schijn
- De learning phase steeds resetten door te blijven sleutelen: elke grote mutatie zet het leren terug
- Kill of scale doorvoeren zonder MP-bevestiging: onomkeerbaar voor het vertrouwen, ook als de beslissing klopte

## Output-formaat

Wekelijkse optimize-notitie in `<klantmap>/meta-ads/reports/` en log-entry in `history-log.md`:

```
## YYYY-MM-DD - Wekelijkse optimize
Status: ROAS X.X vs target Y.Y | CPA EUR .. | frequency prospecting ..
Kill: [ads met geraakte drempel en datapoints]
Cut/Keep/Scale: [per ad, met bewijs]
Budget: [mutaties met motivatie en terugval-drempel]
Audience: [refresh-acties]
Creative queue: [aantal lanceerbaar; briefs uitgezet via meta-ads-creative]
Alert/escalatie: [wat naar MP moet]
Evaluatie: [datum waarop effecten gecheckt worden]
```

Elke regel in de lijst heeft drempel plus datapoints; zonder bewijs geen regel in de log.

## Dependencies

- `<klantmap>/meta-ads/` met `account-brief.md`, `kpis.md`, `history-log.md` en `creative/queue.md`
- `meta_tool` (action=ad_insights) voor alle performance-data
- `ga4_tool` voor LP-conversie en de cross-check van funnel-cijfers
- Events Manager status (EMQ, dedupe) via MP of via meta-ads-measurement
- Meta Ad Library voor de maandelijkse competitor-snapshot
- `knowledge-base/meta-ads/checklists/weekly-optimization.md` en `monthly-audit.md` als detail-checklists

## Integratie met andere skills

- **meta-ads-specialist**: strategie, account-context en routing; optimize voert het vaste ritme uit
- **meta-ads-advantage-plus**: ASC-structuur, catalog en campagne-architectuur; optimize schuift alleen budget binnen de bestaande structuur
- **meta-ads-creative**: concept-briefs en nieuwe batches wanneer de queue of fatigue daarom vraagt
- **meta-ads-measurement**: EMQ, dedupe en kalibratie; bij meet-twijfel gaat die skill altijd voor
- **meta-ads-audit**: diepe eenmalige doorlichting; optimize is het wekelijkse ritme, geen audit
- **meta-ads-reporting**: duiding en klant-deliverables van wat optimize heeft gedaan
- **incrementality-testing**: lift- en geo-holdouts in het kwartaalvenster
- **weekly-client-update**: de wekelijkse klant-update hergebruikt de optimize-log als bron

## Tips

- Kill op vaste momenten, niet dagelijks: dagelijkse paniek-kills reageren op ruis
- De beste scale is vaak een duplicate met vers creative, niet +50% op hetzelfde ad set-budget
- Houd tijdens pieken een vaste vloer aan bewezen ads aan; experimenteren doe je in rustige weken
- Lees de history-log voordat je iets aanraakt: de helft van de rare dalingen is een bewuste wijziging van vorige week
- Frequency op retargeting mag hoger dan je intuitie zegt; stuur op CTR-decay, niet op het absolute getal
- Als alles tegelijk verslechtert is het zelden creative: check eerst de meting, dan seizoen, dan pas de ads
- Een lege creative-queue is de duurste alert in dit ritme: zonder aanvoer wordt elke kill een gat in delivery
- Noteer bij elke scale ook de terugval-drempel: wanneer draai je hem terug en wie checkt dat
- Vergelijk altijd met dezelfde weekdagen: een weekend-vs-doordeweeks vergelijking geeft valse trends

*Eerste versie: juli 2026. Herzie bij wijzigingen in Meta's learning phase, frequency-metrics of Andromeda-delivery-gedrag.*
