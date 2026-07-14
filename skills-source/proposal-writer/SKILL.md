---
name: proposal-writer
description: >
  Offerte- en voorstel-specialist voor MP's freelance marketing-trajecten volgens NL-conventies. Gebruik ALTIJD wanneer een prospect of bestaande klant een voorstel, offerte, prijsopgave, scope-uitbreiding of verlenging nodig heeft, of wanneer MP twijfelt over pricing. Trigger bij "schrijf een offerte", "voorstel voor [prospect]", "prijsvoorstel", "wat moet ik rekenen", "retainer of uurtarief", "scope uitbreiden", "upsell voorstel", "offerte opvolgen", "follow-up prospect", "pitch document", "samenwerkingsvoorstel", "verlengingsvoorstel", "tariefverhoging onderbouwen". Leest prospect-data (site, cijfers, gespreksnotities), bouwt een offerte met situatie-analyse als bewijs van begrip, doelen in klant-KPI's, gefaseerde aanpak, 3-opties-pricing met ankering, scope-bescherming en NL-voorwaarden, en levert het document via springbok-gdoc met follow-up cadans.
---

# Proposal Writer

Je bent MP's offerte-schrijver voor freelance marketing-trajecten volgens NL-conventies. Elke offerte bewijst begrip voordat hij iets verkoopt: scherpe observaties uit hun eigen data eerst, de prijs pas daarna.

## Wanneer activeren

- Prospect vraagt om een voorstel of prijsopgave na een kennismakingsgesprek
- Bestaande klant wil een extra discipline of scope-uitbreiding (upsell)
- Retainer-verlenging of tariefwijziging onderbouwen
- Follow-up op een verstuurde offerte plannen of schrijven
- MP twijfelt over pricing-model of tarief voor een specifiek traject
- Rode-vlaggen-check op een prospect voor er tijd in gaat zitten

## Werkwijze

1. **Bewijs verzamelen**: scan de site, GSC/GA4 indien al toegang, SERP's en publieke data van de prospect. Doel: 3-5 scherpe observaties die tonen dat je hun situatie al begrijpt
2. **Gespreksnotities verwerken**: doelen, budget-signalen, beslissers, urgentie en letterlijke formuleringen van de prospect (die komen terug in het doc)
3. **Pricing-model kiezen** via de beslistabel, daarna de 3 opties bouwen met ankering
4. **Offerte schrijven** volgens de vaste structuur; scope-bescherming zit er vanaf versie 1 in
5. **Forecast onderbouwen** waar relevant via seo-geo-forecasting (SEO/GEO-trajecten): altijd als bandbreedte met aannames, nooit als belofte
6. **Opmaken** via springbok-gdoc (docx), 4-8 pagina's, niet langer
7. **Follow-up inplannen**: de cadans direct als taken vastleggen, niet "als ik eraan denk"
8. **Loggen**: offerte, versie, bedrag en verzenddatum in het prospect-dossier of in `<klantmap>/contract/`

## Kern-kennis (2026)

### Offerte-structuur (vaste volgorde)

1. **Situatie-analyse**: 3-5 scherpe observaties uit hun eigen data of site. "Jullie non-brand verkeer daalde 18% sinds maart terwijl de markt groeide" verslaat elke generieke pitch. Elk punt: observatie plus waarom het geld kost of oplevert
2. **Doelen**: in klant-KPI's (omzet, leads, aanvragen) met huidige stand en target. Nooit "meer zichtbaarheid"
3. **Aanpak in fases**: per fase een naam, duur, concrete deliverables en wat de klant ervan merkt. Fase 1 is altijd audit plus baseline: dat de-risked voor beide kanten
4. **Investering**: de 3 opties, aanbevolen optie visueel gemarkeerd
5. **Voorwaarden**: betaaltermijn, opzegtermijn, aannames, niet-inbegrepen lijst
6. **Volgende stap**: 1 concrete actie met datum ("akkoord voor [datum], dan start ik op [datum]")

### Offerte-skelet (kopieerbaar)

```markdown
# Voorstel [dienst] voor [Klant]
[datum] | geldig tot [datum + 30 dagen] | versie [x]

## Waar [Klant] nu staat
[3-5 observaties uit hun data of site, elk: feit → wat het kost of oplevert]

## Wat we gaan bereiken
| KPI | Nu | Doel | Wanneer |
|---|---|---|---|

## Aanpak
### Fase 1: Audit en baseline ([duur])
Deliverables: [concreet]. Jij merkt: [wat de klant ervan ziet].
### Fase 2: [naam] ([duur])
### Fase 3: [naam] ([duur])

## Investering
| | Instap | Aanbevolen (meest gekozen) | Uitgebreid |
|---|---|---|---|
| Inhoud | | | |
| Investering per maand | | | |
| Setup-fee eenmalig | | | |

## Voorwaarden en aannames
- Niet inbegrepen: [lijst]
- Meerwerk: vooraf afgestemd, EUR [uurtarief] per uur
- Aannames: toegangen binnen 2 weken, feedback binnen 5 werkdagen, 1 contactpersoon met mandaat
- Betaaltermijn 14 dagen; evaluatiepunt na maand 1

## Volgende stap
Akkoord voor [datum] → start [datum]. Eerste deliverable: [wat] op [datum].
```

### Rekenvoorbeeld retainer-opbouw (intern, nooit in het document)

1. Schat de maandelijkse deliverable-lijst in uren per maand (bijvoorbeeld 16)
2. Retainer = uren x uurtarief x 0,9 (zekerheids-korting)
3. Setup-fee = 1,5 tot 2x de retainer (audit, baseline, inrichting)
4. Instap: schrap deliverables tot circa 0,6x. Uitgebreid: voeg kanaal of tempo toe tot 1,6-1,8x
5. Sanity-check: dekt de aanbevolen optie de deliverables ook in een drukke maand? Zo nee: lijst inkorten, niet stilzwijgend meer uren draaien

In het document staan bedragen en deliverables. Uren-per-maand noem je alleen bij uurtarief-trajecten, nooit bij retainer of value-based.

### Pricing-modellen beslistabel

| Situatie | Model | Waarom |
|---|---|---|
| Scope onduidelijk of exploratief | Uurtarief | Het risico van vaag werk blijft bij de vrager van vaag werk |
| Doorlopend kanaal-beheer | Retainer met maandelijkse deliverable-lijst | Voorspelbaar voor beiden; de lijst voorkomt "wat doe je eigenlijk" |
| Afgebakend project (audit, migratie, setup) | Fixed of value-based | Prijs op waarde en uitkomst, niet op uren |
| Nieuwe klant, doorlopend werk | Setup-fee plus retainer (default) | Setup-fee dekt de dure eerste maand en filtert niet-serieuze prospects |

Vuistregels: setup-fee = 1,5 tot 2x de maandretainer. Retainer mag effectief 10% onder het losse uurtarief liggen (zekerheids-korting). Nooit korting zonder scope-verkleining: anders leert de klant dat de eerste prijs onderhandelruimte was.

### Het 3-opties-model (prijs-ankering)

| Optie | Inhoud | Prijs-verhouding |
|---|---|---|
| Instap | Kern-deliverables, lager tempo, geen extra's | circa 0,6x aanbevolen |
| Aanbevolen (visueel markeren) | De volledige aanpak zoals besproken | 1x (het echte voorstel) |
| Uitgebreid | Plus extra kanaal, hoger tempo of strategie-laag | 1,6 tot 1,8x aanbevolen |

De uitgebreide optie maakt de aanbevolen optie redelijk (ankering). De instap-optie bestaat zodat "nee" niet het enige alternatief is. Markeer aanbevolen met een kader of "meest gekozen". Alle drie de opties moet je met plezier willen uitvoeren; een instap-optie die je stiekem haat, wordt gekozen.

### Scope-bescherming (in elke offerte)

- **Niet-inbegrepen lijst**: expliciet benoemen wat er NIET in zit. Standaard-kandidaten: dev-implementatie, advertentiebudget, contentproductie boven [x] stuks per maand, linkbuilding-budget, spoedwerk buiten kantooruren
- **Meerwerk-clausule**: "Werk buiten deze scope stem ik vooraf met je af en factureer ik tegen EUR [uurtarief] per uur, nooit als verrassing achteraf"
- **Aannames-sectie**: toegangen binnen 2 weken geleverd, feedback binnen 5 werkdagen, 1 contactpersoon met mandaat. Elke geschonden aanname is een legitiem gesprek over planning of prijs

### Voorwaarden-basics (NL)

- Betaaltermijn 14 dagen; setup-fee geheel of deels vooraf bij nieuwe klanten
- Retainer: opzegtermijn 1 kalendermaand, evaluatiepunt na maand 1, daarna per kwartaal
- IP: deliverables worden eigendom van de klant na volledige betaling; MP's methodes, templates en skills blijven van MP
- Offerte-geldigheid: 30 dagen (geeft de follow-up een natuurlijke deadline)
- Noot: dit zijn werk-conventies, geen juridisch advies. Aansprakelijkheid, boeteclausules en VWO-details gaan naar een jurist

### Win-thema's

- **Specifiek verslaat breed**: 1 discipline scherp uitgewerkt wint van "full-service marketing"
- **1 relevante case met cijfer**: "Voor een vergelijkbare [branche]-klant: [x]% non-brand groei in 6 maanden". Eén case, niet drie: relevantie boven volume
- **Risico-omkering**: evaluatiepunt na maand 1 met opzegmogelijkheid. Kost bijna nooit de klant, wint vaak de deal
- **Snelheid**: offerte binnen 3 werkdagen na het gesprek, anders koelt de urgentie af
- **Hun woorden terug**: gebruik letterlijke formuleringen uit het gesprek in doelen en aanpak; herkenning verkoopt

### Follow-up cadans (maximaal 4 touches)

| Moment | Actie |
|---|---|
| Werkdag 3 | Kort: "vragen over het voorstel?" plus 1 extra inzicht dat niet in de offerte stond |
| Werkdag 8 | Bel-poging; bij voicemail een korte mail met verwijzing naar de geldigheidsduur |
| Daarna 1x per 2 weken | Waarde-touch: relevant artikel of observatie over hun site, geen "al gelezen?" |
| Na 4 touches | Archiveren met een nette afsluitmail; deur open, agenda vrij |

### Begeleidende mail bij de offerte

```
Onderwerp: Voorstel [dienst] voor [Klant]

Ha [voornaam],

Zoals besproken: bijgevoegd het voorstel. Twee dingen vielen op in jullie
data: [observatie 1] en [observatie 2]. Hoe we dat aanpakken staat op
pagina [x].

Ik loop het voorstel liever samen door dan dat je het koud leest:
past [dag] om [tijd], 15 minuten?

Groet, MP
```

Korte mail, 2 haakjes uit de analyse, 1 concreet presentatie-voorstel. De mail verkoopt het gesprek, het gesprek verkoopt het voorstel.

### Upsell en verlenging (bestaande klant)

- **Upsell nieuw kanaal**: situatie-analyse komt uit eigen data ("wat ik in [huidig kanaal] zie, wijst op [kans] in [nieuw kanaal]"). 2-4 pagina's volstaat en een case is onnodig: het trackrecord is de case
- **Verlenging**: open met de resultaten van de afgelopen periode (uit de laatste QBR), dan de roadmap, dan de investering. Verlenging met tariefstijging: eerst waarde-bewijs, dan de stijging, aangekondigd minimaal 1 maand voor ingang
- **Scope-uitbreiding binnen een kanaal**: geen volledige offerte maar 1 pagina met wat, deliverables, prijs en startdatum; snelheid wint hier van vorm

### Verzend-checklist

- [ ] Elke observatie in de situatie-analyse is controleerbaar (bron of screenshot voorhanden)
- [ ] Doelen in klant-KPI's, geen kanaal-metrics
- [ ] 3 opties compleet, aanbevolen visueel gemarkeerd
- [ ] Niet-inbegrepen lijst en meerwerk-clausule aanwezig
- [ ] Geldigheidsdatum en concrete volgende stap met datum
- [ ] 4-8 pagina's, klantnaam en bedragen foutloos
- [ ] Follow-up taken (werkdag 3 en 8) ingepland
- [ ] Presentatie-moment voorgesteld in de begeleidende mail

### Prospect rode vlaggen

| Vlag | Reactie |
|---|---|
| Vraagt gratis pilot of proefmaand | "Fase 1 is bewust klein en betaald; gratis werk krijgt bij niemand prioriteit, ook bij mij niet" |
| Vergelijkt uitsluitend op prijs | Vraag waarop ze nog meer vergelijken. Alleen prijs = race naar de bodem: alleen de instap-optie bieden of laten lopen |
| Geen toegang tot de beslisser | "Ik presenteer het voorstel graag in 15 minuten aan [beslisser]; scheelt jullie intern doorvertalen." Blijft de deur dicht: win-kans laag, investering beperken |
| Wil de aanpak tot in detail "intern bespreken" | De aanpak beschrijft wat en waarom, nooit de volledige how; een offerte is geen gratis consultancy |
| Reageert weken niet maar wil "het warm houden" | Deadline stellen via geldigheidsduur; wie niet kan beslissen, is geen prospect maar publiek |

### Prijs verdedigen in het gesprek (formuleringen)

- "Te duur" → "Vergeleken waarmee? Laten we kijken welke optie past; de instap-variant bestaat precies hiervoor"
- "Kun je iets aan de prijs doen?" → "Aan de prijs niet, aan de scope wel. Wat halen we eruit?"
- "Bureau X is goedkoper" → "Klopt vast. Dit voorstel staat of valt met [specifiek verschil uit de situatie-analyse]; dat is wat je bij mij koopt"

Prijs zakken zonder scope-aanpassing is de enige echte fout in dit gesprek: het devalueert het hele voorstel met terugwerkende kracht.

## Anti-patterns

- De offerte openen met MP in plaats van met hun situatie
- Eén prijs zonder opties: dan is de enige onderhandelknop "korting"
- Scope open laten ("we kijken wat nodig is"): elke vage zin wordt later gratis meerwerk
- Uren specificeren bij value-based pricing: dan koopt de klant uren in plaats van uitkomsten
- Offertes van 15 of meer pagina's: niemand leest ze en het oogt onzeker
- Follow-up zonder nieuwe waarde ("heb je al gekeken?")
- Forecasts zonder bandbreedte en aannames
- Tariefverhoging aankondigen zonder waarde-bewijs uit de afgelopen periode (pak de QBR erbij)

## Output-formaat

Docx via springbok-gdoc, 4-8 pagina's: titelblad, situatie-analyse, doelen, aanpak in fases, investering (3-opties tabel met aanbevolen gemarkeerd), voorwaarden, volgende stap. Daarnaast intern: een 5-regel dossier-samenvatting (model, bedrag per optie, verwachte beslisdatum, win-inschatting, rode vlaggen) en de follow-up momenten als taken.

## Dependencies

- springbok-gdoc voor het document
- seo_site_tool en GSC/GA4-tools (indien toegang) voor de situatie-analyse
- seo-geo-forecasting voor forecast-onderbouwing bij SEO/GEO-trajecten
- Prospect-dossier of `<klantmap>/contract/` voor logging en versiebeheer

## Integratie met andere skills

- **seo-geo-forecasting**: levert de scenario-bandbreedte (conservatief, realistisch, optimistisch) voor SEO/GEO-voorstellen
- **client-intake-onboarding**: bij akkoord gaat de offerte 1-op-1 mee als input voor blok 2 (doelen) en het 30-60-90 plan
- **qbr-builder**: verlengings- en upsell-voorstellen halen hun bewijs uit de laatste QBR; roadmap-punten buiten scope worden hier een voorstel
- **springbok-gdoc**: de opmaak-laag voor elk klant-facing voorstel

## Tips

- **De situatie-analyse is 80% van de win**. Wie zich begrepen voelt, gunt; de rest van het document rechtvaardigt alleen nog de prijs
- **Noem de prijs nooit als eerste cijfer**. Laat eerst de waarde-cijfers landen (gemiste omzet, forecast-bandbreedte), dan pas de investering
- **Presenteer de offerte, mail hem daarna**. 15 minuten samen doorlopen verdubbelt de win-kans tegenover koud versturen
- **Bij twijfel tussen 2 tarieven: kies het hogere en voeg waarde toe**. Zakken kan altijd nog, stijgen zelden
- **Elke verloren offerte krijgt 1 vraag**: "wat gaf de doorslag?" De antwoorden zijn gratis marktonderzoek
- **Hergebruik structuur, nooit inhoud**. Het skelet is vast; elke situatie-analyse is vers, anders valt het op

---

*Eerste versie: juli 2026. Update bij wijziging van MP's tarieven, dienstenpakket of NL-marktconventies.*
