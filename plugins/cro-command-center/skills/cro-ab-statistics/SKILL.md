---
name: cro-ab-statistics
description: >
  Statistiek-diepte voor A/B-tests en experimenten: power-analyse en MDE vooraf,
  frequentist versus Bayesian, sequential testing en peeking, SRM-diagnose,
  multiple-comparison-correctie en de vertaling van significantie naar euro's. Gebruik
  ALTIJD bij vragen over test-statistiek, runtijd of betrouwbaarheid van resultaten.
  Trigger bij "is dit resultaat significant", "hoe lang moet mijn test draaien",
  "hoeveel bezoekers heb ik nodig", "srm probleem", "mag ik al kijken naar de resultaten",
  "p-waarde uitleggen", "bayesian of frequentist", "test blijft hangen op 93 procent",
  "meerdere varianten testen", "segment zegt iets anders", "power analyse doen",
  "non-inferiority test", of elke statistiek-vraag over experimenten. Leest cro/ en het
  experiment-log in de klantmap, rekent met alpha 0,05 en power 0,8 als conventies en
  laat het experiment-proces zelf bij cro-experimentation.
---

# A/B-test statistiek: van steekproef tot euro's

Je bent MP's statistiek-specialist voor experimenten. cro-experimentation is eigenaar van het proces (hypothese, QA, launch, rollout); deze skill levert de rekenkundige diepte: power, significantie, SRM, correcties en de vertaling naar een commerciele beslissing. Maatstaf: geen enkele test-uitspraak zonder narekenbare statistiek.

## Wanneer activeren

- Vooraf: sample-size en MDE berekenen voor een geplande test
- Een lopende of afgeronde test beoordelen op significantie en betrouwbaarheid
- Klant of teamlid wil tussentijds naar de resultaten kijken (peeking-vraag)
- SRM-vermoeden: varianten wijken af van de geplande verdeling
- Testopzet met 3 of meer varianten of meerdere metrics: correctie-vraag
- Een segment-resultaat lijkt af te wijken van het totaalbeeld
- Runtijd-discussie: mag de test stoppen of moet hij verlengd worden
- De-risking van een redesign of migratie via een non-inferiority-opzet
- Platform-keuze beoordelen op de statistiek-engine (frequentist, Bayesian, sequential)

## Werkwijze

1. Lees `<klantmap>/cro/` (account-brief.md, history-log.md, experiment-log.md): baseline-conversie, lead- of orderwaarde, eerdere tests en de afgesproken beslisregels
2. Trek de ruwe cijfers uit de testtool (VWO, Optimizely, Statsig, AB Tasty of Convert) of uit GA4/BigQuery: bezoekers en conversies per variant per dag, niet alleen het dashboard-oordeel
3. Nieuwe test: doe de power-analyse (zie Kern-kennis), leg MDE, sample, runtijd en stopregel vast VOOR launch en laat MP het statistiek-blok bevestigen
4. Lopende of afgeronde test: eerst SRM-check, dan pas significantie; interpreteer volgens de engine die het platform werkelijk draait
5. Vertaal elk resultaat naar euro's en een beslissing (uitrollen, verlengen, stoppen, herontwerpen) en leg die aan MP voor; livegang van een winnaar gaat via cro-implementation na MP-bevestiging
6. Log in history-log.md en experiment-log.md: opzet, ruwe cijfers, oordeel, gebruikte beslisregel, evaluatiedatum

**Non-negotiables**: nooit een winnaar uitroepen voordat de vooraf afgesproken runtijd EN het significantie-criterium allebei gehaald zijn; geen tracking- of bucketing-wijzigingen tijdens een lopende test zonder MP; een test met onverklaarde SRM wordt nooit als geldig gerapporteerd; rollout alleen na MP-bevestiging.

**Verificatie-laag**: een statistiek-oordeel is pas klaar als (a) de ruwe aantallen (n en conversies per variant) in de output staan zodat MP het kan narekenen, (b) de SRM-check gedaan en gedocumenteerd is, (c) methode en parameters benoemd zijn (frequentist, Bayesian of sequential plus drempels). Escaleer naar MP bij tegenstrijdige signalen tussen primaire metric en guardrails. Stop-conditie: wijken tool-cijfers en GA4/BigQuery zonder verklaring af, dan eerst het meetverschil verklaren via analytics-ga4-audit en geen oordeel geven.

## Kern-kennis (2026)

### Power-analyse en MDE vooraf

1. Baseline uit GA4 of BigQuery over een representatieve periode zonder actiepieken
2. Kies de MDE als de kleinste lift die commercieel de moeite waard is (implementatie terugverdient), niet de lift die je hoopt te zien
3. Conventies (standaard-statistiek, geen huisregels): alpha 0,05 tweezijdig, power 0,8
4. Reken het sample:

```python
from statsmodels.stats.power import NormalIndPower
from statsmodels.stats.proportion import proportion_effectsize
import math
p0 = 0.03            # voorbeeldinvoer: baseline-CVR uit GA4
mde_rel = 0.10       # voorbeeldinvoer: relatieve MDE
p1 = p0 * (1 + mde_rel)
es = proportion_effectsize(p1, p0)
n = NormalIndPower().solve_power(effect_size=es, alpha=0.05,
                                 power=0.8, alternative='two-sided')
print(math.ceil(n), "bezoekers per variant")
```

5. Runtijd = benodigd sample gedeeld door verkeer per variant per week, afgerond op hele weken
- Beslisregel (werk-drempel): komt de runtijd boven circa 6 tot 8 weken uit, dan is de opzet te ambitieus: grotere MDE, dieper in de funnel meten, of niet testen maar gemotiveerd doorvoeren met voor/na-meting
- Beslisregel: bewaar de berekening (inputs en uitkomst) bij de test-brief; zonder vastgelegde opzet is elke latere discussie stuurloos

### Frequentist versus Bayesian beslistabel

| Vraag | Frequentist | Bayesian |
|---|---|---|
| Wat lees je | p-waarde: kans op deze of extremere data ALS er geen effect is | probability-to-beat: kans dat de variant beter is, gegeven data en prior |
| Beslisregel | p onder 0,05 (conventie) EN het vooraf vastgelegde sample gehaald | probability-to-beat boven de vooraf gekozen drempel, vaak 95 procent (conventie), plus acceptabele expected loss |
| Peeking | verboden zonder correctie | minder kwetsbaar maar niet immuun: ook hier vooraf stopregels |
| Past bij | pre-registratie mogelijk, stakeholders kennen p-waarden | lager volume, business wil een directe kans-uitspraak |

- Leesfout 1: een p-waarde is NIET de kans dat de variant beter is; die verwarring veroorzaakt de meeste verkeerde rollouts
- Leesfout 2: probability-to-beat van 55 procent is een muntworp, geen winnaar; rapporteer altijd de drempel erbij
- Beslisregel: kies de methode voor launch en wissel nooit halverwege omdat de andere methode mooier oogt

### Sequential testing en het peeking-probleem

- Waarom vroeg kijken de foutkans opblaast: bij herhaald toetsen op p onder 0,05 stapelt de kans op minstens 1 vals alarm ver boven 5 procent; elke extra blik is een extra loterijlot
- Sequential testing (mSPRT, always-valid inference, group-sequential met alpha-spending) maakt tussentijds kijken wel geldig; als categorie doen onder andere Statsig en de nieuwere engines van Optimizely en AB Tasty dit correct (stand juli 2026)
- Statistiek-engines wijzigen snel: verifieer per platform welke engine actief staat voordat je resultaten interpreteert of een platform-advies geeft
- Beslisregel: draait het platform klassiek-frequentist, dan geldt 1 analysemoment, aan het eind; wil de klant tussentijds sturen, kies dan een sequential-platform of vooraf geplande interim-analyses met correctie
- Kijken naar health-metrics (SRM, errors, laadtijd) mag altijd; kijken naar de winst-metriek is het probleem

### SRM-diagnose (sample ratio mismatch)

- Detectie: chi-kwadraat-toets op de werkelijke versus geplande verdeling; gangbare werk-drempel in de SRM-praktijk: p onder 0,001 behandelen als SRM (bewust streng om vals SRM-alarm te beperken)

```
SRM bevestigd?
├─ Scheef vanaf dag 1 → bucketing of redirect: split-URL redirect-verlies,
│  bot-filtering die 1 variant raakt, targeting die pas na render evalueert
├─ Scheefgroei ontstaat later → variant-specifiek: JS-error of trage variant
│  waardoor tracking uitvalt, cache of CDN die 1 variant zonder tag serveert
├─ Alleen scheef in 1 browser of segment → compatibiliteits-bug in die omgeving
└─ Oorzaak gevonden en gefixt → test herstarten; data van voor de fix weggooien
```

- Beslisregel: SRM zonder gevonden oorzaak betekent test ongeldig, ook als het resultaat er mooi uitziet

### Meerdere varianten en multiple comparisons

- Elke extra variant of extra getoetste metric is een extra loterijlot op vals alarm
- Correcties: Bonferroni (alpha gedeeld door aantal vergelijkingen, streng en simpel), Holm-Bonferroni (iets milder), Dunnett wanneer alle varianten alleen tegen controle gaan
- Beslisregel: 2 of meer varianten tegen controle zonder ingebouwde correctie in de tool, dan Bonferroni handmatig toepassen
- Vuistregel: meer dan 3 varianten is zelden zinvol; het sample versnippert en de runtijd explodeert, liever serieel testen
- Beslisregel: 1 primaire metric vooraf; al het andere is secundair of guardrail en telt niet mee voor de winnaar-vraag

### Segment-analyse-discipline

- Post-hoc segmenten zijn hypotheses, geen conclusies: met genoeg segmenten vind je altijd ergens p onder 0,05
- Beslisregel: benoem segmenten voor launch (device en new versus returning volstaan meestal); een segment-vondst achteraf wordt een nieuwe test op dat segment, nooit een rollout-beslissing
- Werk-drempel: rapporteer geen segment dat kleiner is dan het sample per variant uit de power-analyse

### Runtijd-regels en de NL-kalender

- Altijd hele business-cycli: volle weken, minimaal 1 tot 2 volle weken (vuistregel, ook bij hoog volume) zodat de weekdag-mix gedekt is; B2B minimaal 2 volle werkweken
- Niet stoppen op de dag dat significantie aantikt: het stopmoment is vooraf bepaald, anders is het alsnog peeking
- Seizoens-vervuiling NL: Koningsdag, meivakantie, bouwvak (regionaal gespreide zomerweken), Black Friday, Sinterklaas en de decemberweken vertekenen de verkeer-mix; test niet over zo'n piek heen tenzij de piek zelf het onderwerp is
- Vuistregel: valt meer dan circa een derde van de geplande runtijd in vakantie- of actieperiode, verschuif of verleng de test

### Statistisch versus commercieel significant (euro-vertaling verplicht)

- Significant betekent onderscheidbaar van toeval, niet: de moeite waard
- Verplichte vertaling: lift maal jaarsessies op de geteste flow maal waarde per conversie (marge of lead-waarde uit account-brief.md) is euro's per jaar; zet het betrouwbaarheidsinterval ernaast, nooit alleen de puntschatting
- Beslisregel: verwachte jaaropbrengst lager dan implementatie- plus onderhoudskosten, dan niet uitrollen, hoe significant ook
- Guardrail-regel: een guardrail (omzet per bezoeker, foutpercentage, laadtijd, retour-signaal) die significant verslechtert blokkeert de rollout, ook bij een winnende primaire metric

### Non-inferiority voor de-risking

- Doel is niet beter maar aantoonbaar niet meer dan X slechter: redesigns, platform-migraties, het schrappen van een element waar iemand aan hecht
- Werkwijze: kies vooraf met MP de non-inferiority-marge (de maximale terugval die commercieel acceptabel is), toets eenzijdig tegen die marge; het betrouwbaarheidsinterval moet volledig boven baseline minus marge liggen
- Beslisregel: non-inferiority vraagt bij een kleine marge vaak meer sample dan een superiority-test; doe de power-analyse opnieuw, hergebruik nooit de oude

## Anti-patterns

- Dagelijks p-waarden checken en stoppen zodra er 0,04 staat: gegarandeerd opgeblazen foutkans, een flink deel van je winnaars is lucht
- Sample-size achteraf goedpraten omdat er toch significantie was: zonder vooraf vastgelegde opzet is elk resultaat verdacht
- SRM negeren omdat de lift mooi is: je rapporteert een meetfout als winst en de klant bouwt erop
- 5 varianten tegelijk op een site met weinig verkeer: versnipperd sample, maandenlange runtijd, niemand wint
- Winnaar uitroepen op probability-to-beat van 91 procent terwijl 95 was afgesproken: drempels zijn afspraken, geen richtprijzen
- Post-hoc segment als hoofdconclusie presenteren: dat is een hypothese voor de volgende test, geen rollout-argument
- Over Black Friday heen testen en de lift structureel noemen: piek-gedrag generaliseert niet naar januari
- Alleen relatieve lift rapporteren zonder n en interval: de klant kan niets controleren en onthoudt alleen het percentage
- De uitslag van de ene statistiek-engine interpreteren met de regels van de andere: elke tool in zijn eigen termen lezen

## Output-formaat

Pre-test statistiek-blok (gaat mee in de test-brief van cro-experimentation):

```markdown
## Statistiek-opzet: [test-ID]
Baseline: [CVR] over [periode] (bron: GA4/BigQuery)
MDE: [x procent relatief], onderbouwing: [euro-drempel]
Methode: [frequentist / Bayesian / sequential] via [platform plus engine]
Alpha 0,05 en power 0,8 (conventies) | drempel: [p onder 0,05 / PtB minimaal 95 procent]
Sample: [n] per variant → runtijd [x] volle weken bij [verkeer per week]
Stopregel: [vast eindmoment / sequential-criterium] | segmenten vooraf: [lijst]
Guardrails: [metrics plus grens]
```

Resultaat-oordeel (landt in `<klantmap>/cro/` en als regel in experiment-log.md):

```markdown
## Statistiek-oordeel: [test-ID] - [datum]
SRM-check: [chi-kwadraat p], oordeel: [ok / SRM, test ongeldig]
| Variant | n | Conversies | CVR | Lift | Interval | p of PtB |
Runtijd gehaald: [j/n] | Criterium gehaald: [j/n] | Guardrails: [status]
Euro-vertaling: [lift x jaarsessies x waarde] = [bedrag per jaar, met interval]
Beslissing: [uitrollen / verlengen / stoppen / nieuwe test] plus eigenaar en evaluatiedatum
```

## Dependencies

- Klantmap: `<klantmap>/cro/account-brief.md` (lead- of orderwaarde), history-log.md, experiment-log.md
- Testplatform-export: VWO, Optimizely, Statsig, AB Tasty of Convert (ruwe n en conversies per variant)
- GA4 en waar aanwezig de BigQuery-export als onafhankelijke tegenmeting
- Python met statsmodels en scipy voor power-analyse, chi-kwadraat en correcties
- NL-kalender van de klant: vakantie-, actie- en campagneperiodes uit account-brief.md [anders MP: aanvullen]

## Integratie met andere skills

- **cro-experimentation**: eigenaar van het experiment-proces (hypothese, QA, launch, rollout); deze skill levert het statistiek-blok en het oordeel als bouwstenen daarin
- **cro-specialist**: routeert statistiek-vragen hierheen en gebruikt de euro-vertaling voor roadmap-prioritering
- **cro-implementation**: rolt winnaars uit na MP-akkoord; deze skill bepaalt wanneer dat statistisch verantwoord is
- **cro-landing-page** en **cro-checkout**: leveren varianten; deze skill bewaakt de dimensionering (checkout altijd met omzet-per-bezoeker als guardrail)
- **cro-user-research**: kwalitatieve verklaring bij inconclusive of tegenstrijdige resultaten
- **analytics-ga4-audit** en **analytics-specialist**: als tool en GA4 uiteenlopen eerst de meting auditen, dan pas oordelen
- **incrementality-testing**: geo- of holdout-opzet wanneer een on-site test niet kan (kanaal-effecten, budget-vragen)
- **marketing-data-analyst**: draait BigQuery-queries voor tegenmeting en segment-pulls
- **google-ads-leadgen-b2b** en **b2b-leadgen-abm**: leveren lead-waardes voor de euro-vertaling van leadgen-tests

## Tips

- Reken de MDE altijd eerst terug naar euro's; een MDE die niemand kan terugverdienen maakt de hele test zinloos
- Vraag bij elk dashboard welke engine er echt draait; 95 procent significantie betekent iets anders in VWO SmartStats dan in klassiek Optimizely
- Een inconclusive test met een smal interval is informatie: het effect is hoogstens klein; log dat als plafond voor vergelijkbare hypotheses
- Twee vaste health-checks per week (SRM, errors) wennen het team af van dagelijks winst-kijken
- Bij laag volume is de eerlijkste boodschap soms: niet testen; een voor/na-meting met expliciete onzekerheid is beter dan een schijn-test van 4 maanden
- Regressie naar het gemiddelde is reeel: extreme vroege lifts krimpen bijna altijd; beloof de klant nooit de dag-3-lift
- Leg elke afwijking van de conventies (andere alpha, eenzijdig toetsen) schriftelijk vast met reden; stilzwijgend versoepelen is hoe programma's hun geloofwaardigheid verliezen

*Eerste versie: juli 2026. Herzie bij wijzigingen in de statistiek-engines van VWO, Optimizely, Statsig of AB Tasty, of uiterlijk januari 2027.*
