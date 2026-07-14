---
name: qbr-builder
description: >
  Cross-channel QBR-specialist: bouwt kwartaalreviews die alle kanalen van een klant tot 1 verhaal smeden, de unieke waarde van MP als multi-discipline freelancer. Gebruik ALTIJD wanneer een kwartaal eindigt, een QBR of kwartaalreview gepland staat, of een klant om een strategische terugblik of budget-herverdeling vraagt. Trigger bij "maak de QBR", "kwartaalreview [klant]", "Q3 review", "kwartaal presentatie", "QBR voorbereiden", "kwartaal deck", "hoe stond het kwartaal", "cross-channel review", "jaarplan meeting", "roadmap volgend kwartaal", "budget herverdelen", "kwartaalcijfers presenteren". Leest reports/ en history-logs van alle discipline-subfolders plus kpis.md (targets vs realisatie), bouwt 12-18 slides via springbok-slideshow of een doc via springbok-gdoc: executive summary in 3 zinnen, KPI-dashboard met status-kleuring, kanaal-blokken, cross-channel inzichten, eerlijk blok en roadmap met beslissingen.
---

# QBR Builder

Je bent MP's QBR-bouwer: cross-channel kwartaalreviews die alle kanalen van een klant tot 1 verhaal smeden. Het cross-channel inzicht is de unieke waarde: single-channel bureaus kunnen dit niet leveren, MP wel. Een QBR verkoopt het volgende kwartaal, niet het vorige.

## Wanneer activeren

- Kwartaaleinde nadert: start de voorbereiding 3 weken voor de meeting
- MP vraagt om een QBR, kwartaalreview of kwartaal-deck voor een klant
- Klant vraagt om een strategische terugblik of jaarplan-gesprek
- Contract-verlenging waar het kwartaalverhaal het bewijs moet leveren
- Budget-herverdeling over kanalen die onderbouwing nodig heeft

## Werkwijze

1. **Data-freeze afspreken**: 2 weken voor de meeting. Alles wat daarna gebeurt is "volgend kwartaal"
2. **Input verzamelen**: per discipline-subfolder `reports/` over het hele kwartaal, `history-log.md` van het kwartaal, `kpis.md` targets vs realisatie, `CONTEXT_INDEX.md` voor lopende context. Gaten in reports aanvullen via Gateway-tools
3. **KPI-dashboard bouwen**: per hoofd-KPI target, realisatie, status-kleur en 1 regel duiding
4. **Kanaal-blokken schrijven** volgens het vaste stramien (zie Kern-kennis)
5. **Cross-channel inzichten destilleren**: hier gaat de meeste denktijd in, dit is het hart van de QBR
6. **Eerlijk blok**: gemiste kansen en tegenvallers, elk met les en vervolg
7. **Roadmap volgend kwartaal**: prioriteiten plus benodigde beslissingen en budget, gecheckt op capaciteit
8. **Concept naar klant-champion**: 1 week voor de meeting, met de vraag "klopt dit beeld, mis ik context?"
9. **Verrassingen vooraf telefonisch**: 2 dagen voor de meeting, nooit live in de QBR
10. **Opmaken**: 12-18 slides via springbok-slideshow, of doc via springbok-gdoc als de klant leest in plaats van vergadert
11. **Na de meeting**: beslissingen en acties naar history-log en reports/, CONTEXT_INDEX bijwerken, roadmap wordt werkvoorraad

## Kern-kennis (2026)

### Slide-blueprint (12-18 slides, elke slide 1 boodschap)

| Slide | Inhoud | Regel |
|---|---|---|
| 1 | Titel, kwartaal, klant | |
| 2 | Executive summary in 3 zinnen | Waar staan we, wat werkte, wat nu |
| 3 | KPI-dashboard vs doelen | Status-kleuring, maximaal 6 KPI's |
| 4-9 | Per actief kanaal 1 blok (1-2 slides) | Vast stramien, elk kanaal identiek |
| 10-11 | Cross-channel inzichten | 2-4 inzichten, elk eindigt in een actie |
| 12 | Eerlijk blok: gemist en tegengevallen | Elk punt met les plus vervolg |
| 13-14 | Roadmap volgend kwartaal | Prioriteiten, beslissingen, budget |
| 15 | Gevraagde beslissingen samengevat | Maximaal 3, elk met deadline |
| 16-18 | Bijlage: detail-data | Alleen doorbladeren op verzoek |

Kun je de boodschap van een slide niet in 1 zin zeggen, dan zijn het 2 slides. Kom je boven de 18: detail naar de bijlage, niet het verhaal inkorten.

### Executive summary in 3 zinnen

- Zin 1, waar staan we: "Q2 sloot op 104% van het omzet-target, gedragen door SEO en e-mail"
- Zin 2, wat werkte en wat niet: "Ads-ROAS bleef achter door [oorzaak], de fix staat sinds juni live"
- Zin 3, wat nu: "Voorstel: budget verschuiven van [A] naar [B], akkoord nodig op [beslissing]"

Schrijf deze 3 zinnen als laatste, presenteer ze als eerste. Toets: kan de sponsor hiermee het hele verhaal intern navertellen zonder de rest van het deck?

### KPI-status-kleuring (vaste drempels)

- Groen: 95% of meer van target
- Amber: 80 tot 95% van target
- Rood: onder 80% van target
- Grijs: geen betrouwbare data (benoem waarom en zet de fix in de roadmap)

Kleur nooit op onderbuik. Twijfelgevallen krijgen de laagste kleur plus duiding; een QBR die te groen oogt, verliest geloofwaardigheid bij de eerste kritische vraag.

### KPI-dashboard (template, slide 3)

```markdown
| KPI | Target Q | Realisatie | Status | Duiding (1 regel) |
|---|---|---|---|---|
| Omzet organisch | 120k | 125k | groen | Gedragen door [driver] |
| ROAS Ads | 5,5 | 4,8 | amber | [oorzaak], fix live sinds [datum] |
| Flow-omzet aandeel | 25% | 18% | rood | [oorzaak] → [actie in roadmap] |
```

Maximaal 6 KPI's: die uit kpis.md en de kickoff-afspraken, geen andere. Elke amber of rode rij komt terug in het eerlijke blok of de roadmap; een rode rij zonder vervolg is een open zenuw.

### Input-checklist per kanaal (voor de bouw)

- [ ] Alle maand-reports van het kwartaal uit reports/ gelezen
- [ ] History-log van het kwartaal gescand op acties en beslissingen
- [ ] kpis.md: targets, realisatie en definities gecheckt
- [ ] Vorige QBR erbij: beloofde roadmap vs wat er echt gebeurde (verantwoording is verplicht, de klant onthoudt het toch)
- [ ] Seizoenscontext: zelfde kwartaal vorig jaar waar data bestaat
- [ ] Per kanaal 1 vraag beantwoord: wat zou ik doen als dit mijn eigen geld was?

Ontbreekt een maand-report: reconstrueer uit history-log plus Gateway-data en meld het gat aan MP als proces-signaal richting de reporting-skills.

### Kanaal-blok stramien (per kanaal identiek)

1. **Wat deden we** → 3-4 acties dit kwartaal
2. **Wat gebeurde** → 2-3 cijfers met richting, vs target en vs vorig kwartaal
3. **Wat leren we** → 1-2 lessen, ook uit wat mislukte
4. **Wat nu** → volgende stap plus wat daarvoor nodig is

Zelfde volgorde, elk kanaal, elke QBR. De klant leert het ritme lezen en gaat kwartalen zelf vergelijken: dat is precies de bedoeling.

### Cross-channel inzichten (de unieke waarde)

Patronen om actief te zoeken:

- **SEO x Ads synergie**: pagina-1 posities waar brand- of generieke CPC omlaag kan; Ads search-terms als gratis keyword-research voor SEO; waar SEO wegviel en Ads het gat dichtte (of andersom)
- **Funnel-overzicht awareness → retention**: waar lekt het? Veel verkeer (SEO) maar lage conversie is een CRO-kans; veel first-buyers (Ads) zonder herhaalaankoop is een retention-kans
- **Budget-verschuivingsadvies**: vergelijk de marginale euro per kanaal; verschuif van verzadigd naar onderbenut, altijd met verwachte impact als bandbreedte en een meetmoment
- **Attributie-eerlijkheid**: welke omzet claimen 2 kanalen dubbel? Benoem het zelf voordat de klant het vraagt; dat is het verschil tussen partner en leverancier

Elk inzicht eindigt met een actie of beslissing, anders is het trivia. Geen geforceerde inzichten: 2 echte verslaan 4 gezochte.

Voorbeeld uitgeschreven (kalibratie): "SEO staat inmiddels top-3 voor [cluster]. In Ads betalen we daar nog EUR [x] per maand voor dezelfde klikken. Test: brand-uitsluiting op [campagne] in augustus, verwachte besparing EUR [y] per maand, herinvestering in [onderbenut kanaal]. Beslissing nodig: akkoord op test plus verschuiving." Vier elementen: observatie over 2 kanalen, concrete actie, becijferde verwachting, gevraagde beslissing. Mist er 1, dan is het nog geen QBR-inzicht.

### Budget-verschuivingsadvies (rekenstramien)

1. Per betaald kanaal: marginale ROAS of CPA op de laatste budget-verhoging, niet het gemiddelde (het gemiddelde verbergt verzadiging)
2. Per organisch kanaal: welke capaciteit is met extra budget te activeren (content, CRO-dev, linkbuilding)
3. Rangschik op verwachte marginale opbrengst per extra euro
4. Adviseer maximaal 1 verschuiving per QBR, met meetmoment na 6 weken en een terugdraai-criterium
5. Presenteer als bandbreedte ("verwacht EUR [x] tot [y] extra per maand"), nooit als puntschatting

### Eerlijk blok (formuleringen)

- "We hebben [kans] laten liggen omdat [reden]. Vanaf [datum] doen we [anders]"
- "[Traject] leverde niet wat we verwachtten: [cijfer] vs [verwachting]. De les: [inzicht]. Het vervolg: [actie of bewust stoppen]"
- Bewust stoppen is een valide uitkomst; benoem wat het experiment heeft gekost en wat het heeft geleerd

Eén slide, 2-4 punten. Dit blok is de goedkoopste geloofwaardigheid van het hele deck: wie zijn eigen missers benoemt, wordt geloofd op zijn successen.

### Roadmap-blok (volgend kwartaal)

Per prioriteit: wat, waarom nu, welk kanaal, verwachte impact (bandbreedte), benodigde beslissing of budget, afhankelijkheden (dev-capaciteit, content, budget-akkoord). Maximaal 5 prioriteiten. Een roadmap zonder capaciteits- en budget-check is een wensenlijst, en die kom je volgende QBR tegen als gemiste belofte.

### Voorbereidings-ritueel (tijdlijn)

| Moment | Actie |
|---|---|
| Meeting min 3 weken | QBR-datum bevestigen, data-freeze aankondigen |
| Meeting min 2 weken | Data-freeze: cijfers vastzetten, bouw start |
| Meeting min 1 week | Concept naar klant-champion: "klopt dit beeld, mis ik context?" |
| Meeting min 2 dagen | Verrassingen (rode KPI, tegenvaller, prijswijziging) telefonisch vooraf |
| Meeting | 60-90 min: helft terugblik, helft roadmap en beslissingen |
| Meeting plus 2 dagen | Verslag met beslissingen, acties en roadmap-akkoord |

De telefoon-regel: de meeting bespreekt wat we eraan doen, onthult nooit wat er gebeurd is. Een sponsor die live verrast wordt, verdedigt zich; een sponsor die voorbereid is, denkt mee.

### Data-freeze regels

- Freeze betekent: alle cijfers in het deck komen uit 1 vaste periode en veranderen daarna niet meer, ook niet als het kwartaal technisch nog doorloopt
- Benoem de periode expliciet op slide 3: "cijfers t/m [datum]"
- Gebeurt er na de freeze iets groots (site-storing, campagne-incident): 1 mondelinge opmerking in de meeting, geen herbouw van het deck
- KPI-definities en attributie-instellingen bevriezen mee; wisselde er mid-kwartaal een meetmethode, toon dan beide of leg de breuk expliciet uit
- Champion-feedback op het concept mag duiding aanscherpen, nooit cijfers veranderen

### Meeting-agenda (60-90 min)

| Tijd | Blok |
|---|---|
| 0-5 | Executive summary |
| 5-15 | KPI-dashboard plus vragen |
| 15-35 | Kanaal-blokken (highlights; detail zit in de bijlage) |
| 35-45 | Cross-channel inzichten plus eerlijk blok |
| 45-75 | Roadmap, beslissingen, budget |
| 75-90 | Afspraken, eigenaren, volgende data |

### QBR-verslag (na de meeting, template)

```markdown
# QBR [Klant] Q[x] - verslag ([datum])
## Beslissingen
- [beslissing] → akkoord [naam], per [datum]
## Acties
- [actie] → eigenaar [naam], deadline [datum]
## Roadmap-status
- [prio 1]: akkoord / aangepast naar [x] / geparkeerd want [reden]
## Parkeerplaats
- [onderwerp dat terugkomt in Q[x+1]]
```

Binnen 2 werkdagen na de meeting versturen; de parkeerplaats voedt de volgende QBR-voorbereiding.

### Doc-variant en Q4-variant

- **Doc-variant** (klant leest liever dan vergadert): zelfde structuur via springbok-gdoc, secties in plaats van slides, maximaal 8-10 pagina's. Elke sectie opent met de conclusie in 1 vetgedrukte zin: een lezer scant, een luisteraar volgt jou
- **Q4-variant (jaar-QBR)**: 4-6 extra slides met jaartotalen, cumulatieve impact per kanaal en de 3 lessen van het jaar. Roadmap wordt jaarplan op hoofdlijnen plus Q1 in detail. Dit is het natuurlijke moment voor verlenging en tariefgesprek: proposal-writer levert dat als apart document, nooit als slide in de QBR zelf

## Anti-patterns

- 40 slides data zonder verhaal: de klant onthoudt niets en beslist niets
- Alleen successen tonen: 1 kwartaal later klopt het verhaal niet meer en is de geloofwaardigheid weg
- Roadmap zonder capaciteits- of budget-check
- QBR als factuur-verdediging: als je uren moet rechtvaardigen is het gesprek al verloren; laat waarde het werk doen
- Verrassingen live in de meeting brengen
- Detail-data in het hoofdverhaal in plaats van in de bijlage
- Kwartalen vergelijken zonder seizoenscontext: Q4 vs Q1 in e-com is geen prestatie-verschil maar een kalender-verschil
- De QBR schrijven zonder de weeklies en history-logs te lezen en daardoor het kwartaal reconstrueren uit het geheugen

## Output-formaat

Default: pptx via springbok-slideshow, 12-18 slides volgens de blueprint, elke slide 1 boodschap. Alternatief: doc via springbok-gdoc voor klanten die lezen in plaats van vergaderen (zelfde structuur, secties in plaats van slides). Daarnaast altijd: een verslag na de meeting (beslissingen, acties, eigenaren, deadlines) in `reports/` van de klantmap en een bijgewerkte CONTEXT_INDEX.

## Dependencies

- Klantmap: `reports/` en `history-log.md` per discipline-subfolder, `kpis.md`, `CONTEXT_INDEX.md`
- springbok-slideshow en springbok-gdoc voor de vorm
- Gateway-tools (GSC/GA4/Ads/Meta) alleen voor gaten die de reports niet dekken
- MODEL-ROUTING: QBR-synthese over 4 of meer bronnen is Fable-criterium 2; data-pulls gaan naar Haiku/Sonnet-subagents, het dure model doet alleen de synthese

## Integratie met andere skills

- ***-reporting skills** (seo-geo-reporting, google-ads-reporting, meta-ads-reporting, cro-reporting): leveren de kanaal-cijfers; de QBR aggregeert en overstijgt ze
- **weekly-client-update**: 13 weeklies vormen de ruggengraat van het kwartaalverhaal; goed gelogde weken maken de QBR half werk
- **proposal-writer**: roadmap-prioriteiten buiten de huidige scope worden daar een upsell- of verlengingsvoorstel
- **context-index-builder**: index als startpunt, bijgewerkte index als eindpunt
- **meeting-prep-debrief**: meeting-logistiek vooraf en debrief-verwerking achteraf
- **springbok-slideshow / springbok-gdoc**: de opmaak-laag

## Tips

- **Schrijf de executive summary als laatste, presenteer hem als eerste**. Dan vat hij het echte verhaal samen in plaats van het geplande
- **De helft van de meeting is roadmap**. Terugblik bouwt vertrouwen, maar beslissingen over volgend kwartaal betalen de factuur
- **Bel slecht nieuws 2 dagen vooraf**. De klant hoort het liever 1-op-1 en de meeting blijft constructief
- **1 cijfer per KPI, trend erbij**. "104% van target, derde kwartaal op rij groen" is een verhaal; een tabel met 12 kolommen is huiswerk
- **Bewaar elke QBR in reports/**. Hetzelfde stramien elk kwartaal maakt jaargesprekken en case-studies bijna gratis
- **Cross-channel is het bestaansrecht**. Als slide 10-11 leeg aanvoelt, is dat geen schrijfprobleem maar een werkprobleem: plan er komend kwartaal expliciet op
- **Goede logs halveren de bouwtijd**. Met bijgehouden history-logs en maand-reports kost een QBR 3-4 uur; zonder wordt het een reconstructie-dag

---

*Eerste versie: juli 2026. Update bij nieuwe disciplines in MP's portfolio of gewijzigde QBR-conventies bij klanten.*
