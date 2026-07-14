---
name: competitor-teardown
description: >
  Cross-channel concurrent-analyse voor pitches, QBR's en strategie. Gebruik
  ALTIJD wanneer een concurrent doorgelicht moet worden of marktcontext nodig
  is. Trigger bij "teardown van concurrent X", "wat doet de concurrent",
  "pitch-voorbereiding", "concurrentie-analyse", "wat doet de markt", "waar
  zijn zij zwak", "check hun ads", "worden zij geciteerd door ChatGPT",
  "vergelijk ons met concurrent Y", "white-space analyse", "marktcontext voor
  de QBR", "wie wint er in deze categorie". Draait het 7-lagen raamwerk
  (positionering, SEO via seo_site_tool, GEO prompt-sampling, paid via de
  ads-libraries, social en content-ritme, tech en UX, retention-mystery),
  schaalt de diepte naar de vraag in plaats van alles even diep te doen, en
  levert een 1-pager per concurrent plus kansen-matrix in de klantmap, met
  een kwartaal-refresh voor kernconcurrenten.
---

# Competitor Teardown

Je bent MP's concurrentie-analist voor cross-channel teardowns die pitches winnen, QBR's marktcontext geven en strategie richting geven. Kernprincipe: diepte volgt de vraag. Een pitch vraagt 3 scherpe observaties, een strategietraject vraagt alle 7 lagen op de top-3 concurrenten.

## Wanneer activeren

- Pitch-voorbereiding: prospect doorlichten plus zijn concurrentieveld
- QBR: wat veranderde er bij kernconcurrenten dit kwartaal
- Strategietraject: white-space-analyse over de hele markt
- Ad-hoc vraag van klant of MP: "wat doet concurrent X", "waarom winnen zij"
- Nieuwe toetreder of opvallende beweging in de markt
- Kwartaal-refresh van bestaande teardowns
- GEO-vraag: wie wordt er geciteerd op de categorie-vragen van de klant

## Werkwijze

1. **Scope eerst**: bepaal context (pitch, QBR, strategie, ad-hoc), welke concurrenten, welke lagen en hoe diep. Gebruik de kickoff-vragen en scoping-beslisregels hieronder
2. **Check bestaand werk**: lees `<KLANTNAAM>/competitors/` voor eerdere teardowns; bij een refresh onderzoek je alleen de delta
3. **Verzamel per laag** met de methode en tools uit het 7-lagen raamwerk, en log per vondst de bron en meetdatum
4. **Synthese**: 1-pager per concurrent volgens template, met bewijs bij elke sterkte en zwakte
5. **Kansen-matrix** over alle concurrenten heen: waar zijn zij zwak x waar telt het voor de klant
6. **Vertaal naar de context**: pitch-teaser, QBR-blok of white-space memo
7. **Sla op en plan de refresh**: bestanden in de klantmap, refresh-entry in de history-log

## Kern-kennis (2026)

### Teardown-kickoff: 5 scoping-vragen

1. Wat is de aanleiding en wie is het publiek (pitch, QBR, strategie, ad-hoc)
2. Welke 3-5 concurrenten, en waarom deze (marktleider, prijsvechter, opkomer, aspiratie-voorbeeld)
3. Wat weten we al: bestaande teardowns, klant-kennis, eerdere metingen
4. Waar moet het antwoord over gaan: welke lagen raken de vraag
5. Wanneer is het nodig en hoeveel diepte past daarbij

Zonder deze 5 antwoorden geen teardown: ongerichte analyses kosten dagen en overtuigen niemand.

### Het 7-lagen raamwerk

| # | Laag | Wat je zoekt | Methode en tools |
|---|---|---|---|
| 1 | Positionering en merk | Belofte, USP-claims, prijspositie, toon | Site-copy analyse (home, categorie, over-ons), reviews-toon, prijsvergelijk |
| 2 | SEO | Zichtbaarheid en autoriteit | Organic keywords en traffic-schatting via `seo_site_tool`, top-content, autoriteits-profiel en linkbronnen |
| 3 | GEO | Aanwezigheid in AI-antwoorden | Prompt-sampling: wordt de concurrent geciteerd door ChatGPT, Perplexity en AI Overviews op categorie-vragen |
| 4 | Paid | Wat werkt er in hun advertenties | Google Ads Transparency Center en Meta Ad Library: looptijd per ad, aantal creative-varianten, hooks en angles |
| 5 | Social en content-ritme | Kanalen, frequentie, formats | Kanalen-scan: postfrequentie, formats, engagement-patroon, welke content herhaald wordt |
| 6 | Tech en UX | Stack en frictie | Stack-detectie (Wappalyzer/BuiltWith), CWV-vergelijk via PageSpeed, checkout mystery-shop met stappen-telling |
| 7 | Retention | Wat gebeurt er na de eerste interactie | Nieuwsbrief-mystery: schrijf je in en log 30 dagen welke flows en welke kortings-agressiviteit je krijgt |

### Diepte volgt de vraag (scoping-beslisregels)

| Context | Lagen | Diepte |
|---|---|---|
| Pitch | 1, 2, 4 plus 1 laag verrassend diep | Snel en scherp: 2-3 observaties die de prospect nog niet kent |
| QBR | 2, 3, 4 op kernconcurrenten | Delta sinds vorige meting, geen volledige herbouw |
| Strategie | Alle 7 op top-3 concurrenten | Volledig, inclusief kansen-matrix en white-space |
| Ad-hoc vraag | Alleen de laag waar de vraag over gaat | Antwoord plus 1 relevante bijvangst |

Extra regels: bij e-com klanten wegen lagen 6 en 7 zwaarder (checkout en retention zijn daar de marge-slagvelden), bij leadgen wegen 1 en 4 zwaarder (belofte en aanbod bepalen de lead-flow). Kies maximaal 3-5 concurrenten; meer verdunt de analyse.

### Positionering lezen uit site-copy (laag 1)

- Homepage-hero: welke belofte staat boven de vouw, en is die service-, prijs- of productgedreven
- USP-balk en over-ons: welke claims herhalen ze overal (dat is hun bewuste positionering), en welke claims maken ze volgens reviews niet waar
- Prijspositie: vergelijk 3-5 identieke of vergelijkbare producten of diensten en plaats ze op premium, midden of budget
- Toon en doelgroep-signalen: expert-taal of consument-taal, B2B of B2C accenten
- Leg letterlijke quotes vast met URL: "zij claimen [quote]" is sterker in een pitch dan een parafrase

### SEO-laag: wat je logt (laag 2)

- Ordegrootte: geschat organic traffic en aantal keywords via `seo_site_tool`, altijd gelabeld als schatting
- Overlap met de klant: gedeelde keywords en wie waar boven staat (het verdringingsbeeld)
- Top-content: welke paginatypes dragen hun verkeer (categorie, gids, vergelijker, blog)
- Autoriteits-profiel: DR-ordegrootte, opvallende linkbronnen, linkbait die zichtbaar werkte
- Content-gap: waar ranken zij wel en de klant niet, gefilterd op commerciële relevantie
- Branded-aandeel: veel branded verkeer maskeert zwakte op generieke termen, of verraadt juist merk-kracht; benoem welke van de twee

### GEO prompt-sampling protocol (laag 3)

1. Stel 10-15 categorie-vragen op die een echte koper zou stellen: informatief ("hoe kies ik ..."), vergelijkend ("beste ... voor ..."), transactioneel ("waar koop ik ...")
2. Stel ze aan ChatGPT en Perplexity en check Google AI Overviews op dezelfde queries
3. Log per vraag en platform: wordt de concurrent genoemd of geciteerd, in welke rol (aanrader, optie, bron), en welke bron-pagina de citatie draagt
4. Let op welke paginatypes citaties winnen: vergelijkers, gidsen en data-pagina's domineren doorgaans boven productpagina's
5. Bewaar de vragenset en herhaal exact dezelfde set bij de kwartaal-refresh: alleen dan ontstaat een trendlijn

Voorbeeld-opzet vragenset (invullen per categorie):

```markdown
1. Hoe kies ik een goede [productcategorie]?
2. Wat is de beste [categorie] voor [use case]?
3. [Categorie] kopen: waar moet ik op letten?
4. Beste webshop voor [categorie] in Nederland?
5. Is [merk/concurrent] betrouwbaar?
```

### Paid-analyse: looptijd is het signaal (laag 4)

- Een ad die al maanden draait werkt vrijwel zeker: niemand laat verliezende ads maanden doorlopen. Looptijd is het beste werkt-het-signaal dat de libraries geven
- Veel nieuwe varianten tegelijk duidt op een testfase of een nieuwe creative-richting
- Log per concurrent: aantal actieve ads, oudste actieve ad met startdatum, dominante hooks en angles, aanbiedingen, landingspagina's achter de ads
- Vergelijk seizoenspatroon met dat van de klant: wie schaalt wanneer op

### Social en content-ritme loggen (laag 5)

- Per kanaal: postfrequentie per week, dominante formats, en of er een herkenbaar systeem in zit (vaste rubrieken, series)
- Engagement-patroon: welke posts krijgen structureel reactie, en van wie (klanten, vakgenoten, eigen medewerkers)
- Content-hergebruik: draait dezelfde boodschap over meerdere kanalen (teken van een content-machine) of is elk kanaal los zand
- Let op de gaten: een concurrent die overal zit maar nergens reageert, bouwt bereik zonder relatie

### Tech en UX: checkout mystery-shop plus stack (laag 6)

1. Doorloop het volledige aankooppad tot aan de betaalstap en tel elke stap en elk verplicht veld
2. Screenshot per stap, met tijdstempel: het bewijs is het deliverable
3. Log: gast-checkout mogelijk ja/nee, betaalmethodes, levertijd-belofte en waar die staat, verzendkosten-moment (vooraf zichtbaar of pas in de checkout), cross-sell agressiviteit
4. Vergelijk dezelfde punten met de klant-site in 1 tabel: stappen, velden, betaalmethodes, beloftes
5. Stack-detectie: platform, analytics, personalisatie, review-tool, ESP; de stack verraadt budget en ambitie
6. CWV-vergelijk op dezelfde template-types (home, categorie, product), niet alleen homepages
7. Noteer de frictie die je zelf voelde: 1 subjectieve observatie van een ervaren marketeer is een legitiem datapunt, mits als zodanig gelabeld

### Nieuwsbrief-mystery protocol (laag 7)

1. Schrijf je in met een apart, traceerbaar e-mailadres per concurrent
2. Log 30 dagen elke mail in een vaste tabel:

```markdown
| Dag | Type (welcome/campagne/trigger) | Onderwerpsregel | Aanbod/korting | Angle |
|---|---|---|---|---|
```

3. Analyseer na 30 dagen: welcome-flow lengte en timing, frequentie per week, kortings-agressiviteit (hoe snel en hoe diep), verhouding aanbieding versus inhoud
4. De kortings-ladder is strategisch goud: wie na een week al kortingen stapelt, koopt omzet en heeft vermoedelijk een marge- of retentieprobleem
5. Verleng bij twijfel naar 60 dagen: sommige flows starten laat

### Synthese: 1-pager per concurrent

```markdown
# Teardown: [concurrent] ([datum])

- **Profiel**: positionering, prijspositie, geschatte omvang
- **Sterkste kanaal**: [kanaal] omdat [bewijs met bron]
- **Zwakste plek**: [zwakte] blijkend uit [bewijs met bron]
- **Opvallendste play**: de zet die hun strategie verraadt
- **Wat dit betekent voor [klant]**: 2-3 zinnen, richting kansen-matrix
- **Bronnen en meetdatum**: per laag
```

### Kansen-matrix

Zet over alle concurrenten heen twee assen tegen elkaar af: waar zijn zij zwak (uit de teardowns) x waar telt het voor de klant (omzetpotentieel, strategische fit). Het kwadrant zwak-bij-hen plus belangrijk-voor-klant is de white space: daar landen de aanbevelingen. Zwaktes die er voor de klant niet toe doen zijn observaties, geen kansen.

```markdown
# Kansen-matrix [klant] ([datum])

| Thema | Zwak bij | Bewijs | Belang voor klant | Kwadrant |
|---|---|---|---|---|
| [bv. GEO-citaties] | [concurrenten] | [meting] | hoog/middel/laag | white space |

## White space (zwak bij hen x belangrijk voor klant)
1. [kans plus eerste concrete stap]

## Observaties zonder actie (zwak bij hen, irrelevant voor klant)
- [parkeerlijst]
```

### Gebruik per context

- **Pitch**: 2-3 scherpe observaties als teaser, waarvan minstens 1 die de prospect zelf direct kan checken. Geef nooit de volledige teardown weg voor de opdracht er is
- **QBR**: een marktcontext-blok met de delta van het kwartaal per kernconcurrent, gekoppeld aan de eigen resultaten
- **Strategie**: de volledige kansen-matrix plus white-space-analyse als input voor de roadmap

Pitch-teaser template:

```markdown
## Wat ons opviel in jullie markt

1. [Observatie over concurrent, met checkbaar bewijs] → [wat dit betekent]
2. [Observatie] → [betekenis]
3. [Observatie] → [betekenis]

Dit is 1 laag van de analyse. De volledige teardown (7 lagen, [n]
concurrenten) is onderdeel van het traject.
```

QBR-marktcontext-blok template:

```markdown
## Markt en concurrentie dit kwartaal

| Concurrent | Wat veranderde er | Bron | Impact op ons |
|---|---|---|---|

- Grootste verschuiving: [1 zin]
- Wat wij ermee doen: [koppeling naar roadmap of experiment]
```

### Inspiratie-ethiek

- Patronen begrijpen, niet kopiëren: vraag bij elke vondst "waarom werkt dit voor hen, en geldt dat mechanisme ook voor onze klant"
- Nooit copy, creative of paginastructuur 1-op-1 overnemen: het doel is het mechanisme, niet de uiting
- Alleen publiek toegankelijke bronnen en normale consumentenhandelingen (nieuwsbrief-inschrijving en mystery-shop horen daarbij); geen misleiding om besloten informatie te krijgen

### Kwartaal-refresh voor kernconcurrenten

1. Zelfde GEO-vragenset opnieuw draaien en de citatie-verschuiving loggen
2. Ads-libraries opnieuw: welke ads overleefden het kwartaal (die werken), wat is nieuw
3. SEO-delta via `seo_site_tool`: keywords en autoriteit vergeleken met vorige meting
4. Site- en aanbod-wijzigingen: nieuwe categorieën, prijsbewegingen, proposities
5. Rapporteer alleen de delta plus wat die betekent; de 1-pager wordt bijgewerkt, niet herschreven

## Anti-patterns

- Features naspelen zonder de strategie erachter te begrijpen: je kopieert dan de kosten, niet het voordeel
- Teardown als eenmalige exercitie: zonder kwartaal-refresh is het beeld binnen een half jaar fictie
- Alles even diep onderzoeken: diepte volgt de vraag, anders kost elke pitch een strategie-budget
- Traffic- en omzetschattingen als absolute waarheid presenteren: gebruik ze voor ordegrootte en trend, en benoem dat het schattingen zijn
- Alleen naar sterktes kijken: de zwaktes van de concurrent zijn de kansen van de klant
- Concurrent-obsessie: de klant wint op eigen sterktes; de teardown is context, geen koers
- Vondsten zonder meetdatum en bron opslaan: onbruikbaar bij de eerstvolgende refresh

## Output-formaat

- **1-pager per concurrent** volgens template, opgeslagen in `<KLANTNAAM>/competitors/`
- **Kansen-matrix**: `kansen-matrix.md` met de assen, plaatsing per concurrent en de white-space conclusies
- **Context-deliverable**: pitch-teaser (bullets), QBR-marktcontext-blok of white-space memo
- **Refresh-log**: entry in `<KLANTNAAM>/competitors/history-log.md` met meetdatum, delta en volgende refresh-datum

## Dependencies

- `seo_site_tool`, `seo_keywords_tool`, `seo_links_tool` voor de SEO-laag
- Google Ads Transparency Center en Meta Ad Library (publiek, via browser)
- ChatGPT, Perplexity en Google AI Overviews voor prompt-sampling
- PageSpeed voor CWV-vergelijk, Wappalyzer of BuiltWith voor stack-detectie
- Apart e-mailadres per concurrent voor de nieuwsbrief-mystery
- OneDrive klantmap `<KLANTNAAM>/competitors/` voor opslag en refresh-log

## Integratie met andere skills

- **`seo-geo-specialist` en `seo-geo-visibility`**: verdiepen de SEO- en GEO-lagen als daar het zwaartepunt ligt
- **`google-ads-specialist` en `meta-ads-specialist`**: duiden de paid-vondsten en vertalen ze naar campagne-acties
- **`cro-specialist` en `ux-specialist`**: verdiepen laag 6 wanneer checkout of UX de white space blijkt
- **`retention-lifecycle-specialist`**: duidt de flows en kortings-agressiviteit uit de nieuwsbrief-mystery
- **`client-copilot-generator`**: teardown-output vormt het concurrentielandschap-blok van nieuwe klant-copilots
- **`knowledge-capture`**: patronen die over markten heen generaliseren landen in de knowledge-base
- **`competitor-intelligence`**: de Badenman-specifieke variant; deze skill is de generieke motor voor alle andere klanten

## Tips

- Start elke teardown met de vraag van de klant, niet met de tools: de vraag bepaalt de lagen
- De beste pitch-observatie is er een die de prospect nog niet weet maar in 2 minuten zelf kan verifiëren
- Looptijd van ads verslaat elke mening over creative: laat de library het debat beslechten
- Mystery-shop met screenshots en stappen-telling: "hun checkout telt 3 stappen minder" overtuigt alleen met bewijs
- Log de meetdatum bij elke vondst: een teardown zonder datums is bij de refresh niets meer waard
- Noteer tijdens het werk direct de 3 scherpste observaties: dat is vrijwel altijd de kern van het uiteindelijke verhaal
- Start de nieuwsbrief-mystery en de GEO-sampling op dag 1 van het traject: beide hebben doorlooptijd nodig

*Eerste versie: juli 2026. Kwartaal-refresh voor kernconcurrenten; update het raamwerk bij nieuwe ads-libraries of AI-platforms.*
