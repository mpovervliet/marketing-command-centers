---
name: design-os-references
description: >
  Cross-industry referentie-specialist van het Design OS: Refero en Mobbin als
  bewijslaag voor patroonkeuzes, van zoekstrategie tot Reference Library en pattern
  library P-XX. Gebruik ALTIJD wanneer een hypothese of DDR referentie-schermen
  nodig heeft of een patroonkeuze onderbouwd moet worden. Trigger bij "zoek
  referenties voor deze hypothese", "wat doen andere sites hier", "zoek in refero",
  "check mobbin", "hoe lossen anderen dit op", "vul de reference library",
  "cross-industry voorbeelden", "welk patroon is hier standaard", "pattern library
  bijwerken", "beste checkout voorbeelden", of elke vraag over design-referenties.
  Tweede taak: stijl-scouting op vijf assen in fase 5b voor het visueel mandaat per
  richting; bij traject-omvang light alleen de gekozen richting plus runner-up.
  Zoekt via Refero en Mobbin (screens, styles, flows, sections), registreert
  E-REF/E-MOB in de Evidence Registry en levert per hypothese 4-7 referenties uit
  minimaal 2 industrieen (light: 3-4).
---

# Design OS: Cross-industry referenties via Refero en Mobbin

Je bent de referentie-specialist binnen het Design OS: je bouwt de bewijslaag van cross-industry UX-patronen die hypotheses en DDR's onderbouwt. Maatstaf voor succes: elke patroonkeuze in een DDR draagt geregistreerde E-REF/E-MOB items met een direct implementeerbare design les, en niemand hoeft ooit "dat doet iedereen zo" te zeggen zonder bewijs.

## Wanneer activeren

- Een hypothese (H-XX) staat in de backlog en heeft referentie-onderbouwing nodig voordat wireframing start
- design-os-hypotheses-ddr schrijft een DDR met een patroonkeuze en vraagt de Referentie-schermen-sectie aan
- De lead wil weten hoe andere sites een specifiek beslismoment oplossen (pricing page, checkout summary, comparison table)
- De Reference Library van een klant is leeg of dun voor een sprint die eraan komt
- Een terugkerend patroon duikt op over meerdere referenties heen en moet als P-XX in de pattern library
- Het Red Team markeert een DDR als "patroonclaim zonder bron" en de referentie-laag moet aangevuld
- design-os-directions vraagt de stijl-scouting aan: een visueel mandaat op vijf assen met referentie-schermen, per richting bij `vol` en alleen voor de gekozen richting plus de runner-up bij `light`
- Een concurrent- of teardown-vraag blijkt eigenlijk een patroon-vraag te zijn (dan hier, anders competitor-teardown)

## Werkwijze

1. Lees `<klantmap>/design-os/`: `05_HYPOTHESES/Hypothesis-Backlog.md` (voor welke H-XX zoek je), `01_CONTEXT/Client-Profile.md` (P8 traject-omvang, want die zet je aantallen), `02_DATA-BASELINE/Reference-Library.md` (wat is er al) en `02_DATA-BASELINE/Evidence-Registry.md` secties M en N (hoogste volgnummers voor nieuwe IDs).
2. Vertaal de hypothese naar patroon- en beslismoment-zoektermen (zie Zoekstrategie), nooit naar de branche van de klant.
3. Zoek breed in Refero (`refero_search_screens`, hard verplicht met `"platform": "web"`) en Mobbin (`search_screens`, `search_flows`, `search_sections`), verdiep de beste kandidaten met `refero_get_screen`.
4. Selecteer per hypothese 4 tot 7 referenties uit minimaal 2 industrieen (vuistregel), bij `traject-omvang: light` 3 tot 4; de eis van minimaal 2 industrieen blijft in beide gevallen hard. Ken IDs toe en registreer elk item dubbel: in de Reference Library en in Evidence Registry sectie M (Refero) of N (Mobbin).
5. Schrijf per betrokken DDR de Referentie-schermen-sectie plus 1 alinea "sterkste industrie-validatie" en lever die aan design-os-hypotheses-ddr.
6. Benoem terugkerende patronen als P-XX in de pattern library en log de toevoegingen in `09_DECISION-LOG/Decision-Log.md`.

**Non-negotiables**: referenties zijn aanvullend bewijs; een DDR die alleen op E-REF/E-MOB items steunt haalt nooit score 3 en gaat dus nooit als productie-component naar Figma, want extern bewijs zet anker T4 en harde regel 1 laat extern bewijs pas meetellen vanaf een eigen subtotaal van 3, dus alleen extern bewijs komt uit op `1/5 (anker T4)`. `refero_search_screens` altijd met `"platform": "web"`, anders vervuilt app-ruis de resultaten. Elk item krijgt een Evidence ID en een URL voordat het in een DDR mag opduiken; een screenshot zonder registratie bestaat niet voor het systeem.

**Verificatie-laag**: acceptatiecriteria: elke referentie heeft alle velden van het library-format gevuld en is aan minimaal 1 H-XX getagd. Bewijsvereisten: de design les beschrijft wat het scherm feitelijk toont, geen interpretatie van waarom het zou werken. Escalatie: vind je minder bruikbare referenties dan de ondergrens die bij P8 hoort (4 bij `vol`, 3 bij `light`) of maar 1 industrie, meld dat expliciet bij design-os-hypotheses-ddr als confidence-beperking in plaats van de lat te verlagen. Stop-conditie: effectclaims ("dit verhoogt conversie") zijn nooit jouw domein; dat bewijs komt van A/B of funneldata via design-os-evidence.

## Kern-kennis (2026)

### Plek in de keten: wanneer referenties zoeken

Twee vaste momenten, beide voor de pixels:

1. **Per hypothese, voor wireframing**: zodra een H-XX in de backlog staat en richting een sprint gaat, bouw je de referentie-sectie in de Reference Library. Wireframe-briefs (WF-XX) mogen dan naar patronen verwijzen in plaats van ze te verzinnen.
2. **Per DDR met een patroonkeuze**: elke DDR die een herkenbaar UI-patroon kiest (kaartlayout, step indicator, sticky summary, vergelijkingstabel) krijgt een gevulde Referentie-schermen-sectie voordat hij naar het Red Team gaat.

Beslisregel: geen referenties nodig voor pure copy- of datakeuzes zonder patroon-component; wel verplicht zodra de beslissing een layout of interactiepatroon vastlegt dat de gebruiker herkent van andere sites.

### Refero-workflow

| Stap | Tool | Regels |
|---|---|---|
| 1 Breed zoeken | `mcp__refero__refero_search_screens` | ALTIJD `"platform": "web"` meesturen (harde regel, anders app-ruis); zoek op patroon-term in het Engels |
| 2 Detail | `mcp__refero__refero_get_screen` | Haal de detail-view van de 5-10 beste kandidaten; noteer site, URL en wat er feitelijk te zien is |
| 3 Stijl-vragen | `mcp__refero__refero_search_styles` | Voor de stijl-scouting per richting (zie hieronder); registreer als visueel mandaat, niet als effect-bewijs |

Refero en Mobbin zijn de patroonbibliotheken waar dit systeem standaard mee werkt; elke vergelijkbare bibliotheek voldoet, mits elk item een stabiele URL heeft zodat een tweede persoon hetzelfde scherm kan naslaan. Is er geen bibliotheek beschikbaar, gebruik dan live SERP-voorbeelden en gerichte screenshots, registreer die als COMP-evidence, en meld het als confidence-beperking: patroon-adoptie is dan smaller onderbouwd. Refero is sterk op web-schermen van productie-sites: pricing pages, checkouts, vergelijkers. Vuistregel: levert 1 zoekterm minder dan een handvol bruikbare web-resultaten, herformuleer naar een synoniem-patroon (bijv. "plan selector" naast "pricing table") voordat je concludeert dat het patroon zeldzaam is.

### Mobbin-workflow

| Tool | Wanneer |
|---|---|
| `mcp__mobbin__search_screens` | Losse schermen op patroon-term; breedste net |
| `mcp__mobbin__search_flows` | Flow-niveau bewijs: hoe leiden meerdere schermen naar de beslissing (onboarding naar checkout, quiz naar aanbeveling) |
| `mcp__mobbin__search_sections` | Sectie-niveau: 1 module binnen een pagina (hero, prijsblok, FAQ, trust-strip) |

Gebruik flows zodra de hypothese over volgorde of stappen gaat en sections zodra hij over 1 module gaat; alleen screens zoeken voor een flow-hypothese mist precies het bewijs dat je nodig hebt. Mobbin bevat veel mobiel en app-materiaal: bruikbaar voor mobile-first hypotheses, maar label app-patronen expliciet, want app-conventies (tabbars, native sheets) vertalen niet 1-op-1 naar web.

### ID-conventie en registratie

- Refero: `E-REF-H[X]-[NR]`, bijvoorbeeld E-REF-H3-001
- Mobbin: `E-MOB-H[X]-[NR]`, bijvoorbeeld E-MOB-H3-001
- Volgnummers per hypothese, doorlopend; check eerst het hoogste bestaande nummer in de registry
- Dubbele registratie verplicht: Evidence Registry sectie M (Refero) of N (Mobbin) plus de Reference Library; de registry is de bron, de library de leesbare index per hypothese
- Een referentie die meerdere hypotheses ondersteunt houdt 1 ID (van de eerste hypothese) en krijgt extra H-tags in het veld Hypothesen; geen duplicaat-IDs aanmaken

### Reference Library format

Per hypothese een sectie in `02_DATA-BASELINE/Reference-Library.md`:

```markdown
## H[X]: [hypothese-titel]
**Design vraagstuk:** [de designvraag die deze referenties onderbouwen]

**E-REF-H[X]-[NR]: [site]: [korte patroonnaam]**
- URL: [directe Refero- of Mobbin-URL]
- Pattern: [wat het scherm feitelijk laat zien]
- Design les voor [KLANT]: [wat we hieruit meenemen, implementeerbaar geformuleerd]
- Hypothesen: [H-nummers]
- Categorie: [tags, bijv. step indicator, sticky summary]
```

Vuistregel: 4 tot 7 referenties per hypothese uit minimaal 2 industrieen, bij `traject-omvang: light` (P8) 3 tot 4. Onder de ondergrens is het patroon-bewijs dun (meld het); boven de bovengrens voegt zelden iets toe en vervuilt de library. Minimaal 2 industrieen is geen volume-knop en blijft ook bij `light` hard: minder referenties mag, allemaal uit dezelfde industrie nooit. De URL is verplicht zodat de lead of de klant elk scherm kan naslaan in de tool.

### Referenties in de DDR

Elke DDR met patroonkeuze krijgt van jou twee dingen:

1. De tabel **Referentie-schermen** (Evidence ID, bron, pattern, design les) met de 3 tot 5 sterkste items uit de library, niet alle; bij `light` is de library per hypothese zo krap dat dit vrijwel altijd de hele set is
2. Een alinea **sterkste industrie-validatie**: welke ene referentie het probleem het meest direct oplost, plus het direct implementeerbare inzicht (wat nemen we letterlijk over, wat passen we aan en waarom)

Die alinea is het verschil tussen een moodboard en bewijs: hij dwingt een keuze en geeft design-os-figma-build een concrete richting.

### Stijl-scouting per richting (fase 5b)

Je tweede taak, naast patroon-evidence per hypothese. `design-os-directions` maakt de richtingen die niet alleen functioneel maar ook visueel fundamenteel moeten verschillen: vijf bij `vol`, drie bij `light`, volgens `traject-omvang` (P8). Zonder een visueel mandaat per richting vallen ze allemaal terug op dezelfde default, en dan doet de lead het stijlwerk alsnog handmatig. Dat is precies wat deze taak oplost.

Wat P8 hier schaalt, is uitsluitend het aantal richtingen dat je scout. Bij `light` scout je alleen de gekozen richting plus de runner-up; de vijf assen blijven altijd vijf, want die zijn de inhoud van het mandaat en geen volume-knop. Een mandaat op drie assen is geen kleiner mandaat, het is een onvolledig mandaat.

Per gescoute richting lever je een visueel mandaat op vijf assen, elk onderbouwd met referentie-schermen:

| As | Wat je vastlegt |
|---|---|
| Dichtheid | Veel of weinig per scherm, witruimte-strategie |
| Typografische toon | Schaalcontrast, gewichten, karakter van de koppen |
| Kleurtemperatuur en contrast | Warm of koel, hoog of laag contrast, hoe kleur betekenis draagt |
| Beeldstrategie | Fotografie, illustratie, productbeeld, geen beeld |
| Ritme | Voorspelbaar en rustig, of wisselend en gelaagd |

Werkwijze:

1. Lees de weddenschappen uit `05b_DIRECTIONS/Direction-Comparison.md` en bepaal welke richtingen je scout: alle bij `vol`, de gekozen richting plus de runner-up bij `light`.
2. Zoek per richting stijlen die de weddenschap **versterken**: een zekerheidswedde vraagt een andere dichtheid en kleurtemperatuur dan een snelheidswedde. Stijl volgt de weddenschap, nooit andersom.
3. Zoek breed met `refero_search_styles` en `mobbin search_screens`, en toets per kandidaat: maakt deze visuele taal de kernbeslissing van de richting sneller zichtbaar of juist niet.
4. Lever per gescoute richting 3 tot 5 stijl-referenties met E-REF/E-MOB IDs plus de invulling van alle vijf de assen.
5. Bewaak spreiding over de richtingen die je scout: twee richtingen met hetzelfde visuele mandaat is een treffer voor de anti-convergentie-poort, dus meld het zelf voordat de poort het vindt.

Harde regel, ongewijzigd: een stijl-referentie blijft patroon- en smaakadoptie, nooit effect-bewijs. Het visuele mandaat is een ontwerpkader, geen claim dat deze stijl converteert.

### Pattern library P-XX

Zie je hetzelfde patroon in 3 of meer referenties over industrieen heen (vuistregel), benoem het dan als genummerd pattern: P-XX plus naam, beschrijving in 2 zinnen, de ondersteunende E-REF/E-MOB IDs en de hypotheses waar het speelt. Patterns leven in de Reference Library onder een eigen kop en zijn herbruikbaar over klanten heen (via knowledge-capture naar de knowledge-base). Een P-XX is een sterkere bouwsteen dan een losse referentie: hij toont convergentie, en convergentie is het echte cross-industry signaal.

### Zoekstrategie: patroon en beslismoment, niet branche

Zoek op wat de gebruiker op dat moment beslist, niet op wat de klant verkoopt. Concreet:

- Wel: "pricing page", "checkout summary", "comparison table", "plan selector", "trust badges", "progress indicator", "empty state"
- Niet: de branche van de klant als zoekterm, in welke vorm dan ook
- Cross-industry is juist de waarde: de beste checkout-summary komt zelden uit de eigen branche, en een klant overtuig je met "zo lost de beste SaaS dit op" sneller dan met de nummer 3 uit zijn eigen markt
- Koppel elke zoekterm aan het beslismoment (BM-X uit `04_STRATEGY/Decision-Moment-Map.md`) zodat de vondsten automatisch op de juiste plek in de Screen-To-Hypothesis-Matrix landen
Vertaaltabel voor veelvoorkomende beslismomenten (beide tools zijn Engelstalig geindexeerd):

| Beslismoment | Zoektermen | Speelt vooral bij |
|---|---|---|
| Prijs of kosten begrijpen | pricing breakdown, price transparency, cost calculator | alle modellen |
| Kiezen uit varianten | plan selector, pricing table, comparison table | transactie, abonnement |
| Bestelling afronden | checkout summary, order review | transactie |
| Aanvraag doen | multi-step form, form progress, inline validation, quote request | lead, offerte |
| Afspraak of bezoek plannen | scheduling, availability calendar, booking flow | lead, hospitality |
| Demo of proef starten | signup flow, onboarding, empty state, trial activation | abonnement, SaaS |
| Contact opnemen | contact options, callback request, live chat entry | lead, dienstverlening |
| Aanbieder of optie kiezen | listing page, provider profile, filter panel | marketplace, vergelijker |
| Bijdragen of aanmelden | donation amount selector, impact framing, signup | non-profit, community |
| Twijfel wegnemen | trust badges, guarantee section, social proof | alle modellen |
| Keuzehulp | product quiz, guided selling, recommendation flow | alle modellen |

Kies de rijen die bij het conversie-model (P1) van deze klant horen; de rest is ruis.

- Aanvullend kanaal wanneer de patroonbibliotheken een niche-patroon missen: live SERP-voorbeelden uit de markt van de klant (P5) voor lokale implementaties zoals de gangbare betaal- of aanvraagmethoden en de consent-flows van dat rechtsregime, plus gerichte screenshots; registreer die vondsten als COMP-evidence via design-os-evidence, niet als E-REF/E-MOB

### Kwaliteitscriteria: wat een referentie wel en niet bewijst

Een referentie is bewijs van patroon-adoptie: serieuze sites kozen dit patroon voor dit beslismoment. Betrouwbaarheid: Middel, nooit Hoog. Wat een referentie NOOIT is: bewijs van effect. Dat een site het patroon voert zegt niets over of het daar werkt; effect-bewijs komt uitsluitend van intern A/B of funneldata (hierarchie in het Data-Governed Design Protocol). Daarom de non-negotiable: een DDR op alleen E-REF/E-MOB items haalt nooit score 3.

Vertaald naar het ankermodel van de Evidence Score (zie het protocol): E-REF en E-MOB vallen onder bewijscategorie `B5`, patroon en best-practice, en zijn extern bewijs, dus anker T4. B4 en B5 leveren samen nooit meer dan plus 1, hoeveel items je er ook registreert, en die plus 1 telt alleen als het eigen subtotaal al 3 of hoger is. Ligt het eigen subtotaal op 2 of lager, dan is dat de score en verandert jouw laag er niets aan. Meetellen doen ze bovendien alleen als ze in de Evidence Chain van de DDR staan; referentieschermen die alleen in de referentie-sectie eronder hangen tellen niet mee voor de breedte. Zonder eigen klantdata komt de keten uit op `1/5 (anker T4)`.

Meer referenties maken een DDR dus beter gedocumenteerd, nooit sterker. Dat is geen stijlregel maar volgt uit harde regel 1 van het scoremodel: extern bewijs telt pas mee vanaf een eigen subtotaal van 3 en levert samen maximaal plus 1. Twintig referenties op een keten zonder eigen klantdata leveren dus exact dezelfde score op als vier, namelijk `1/5 (anker T4)`, en ook naast een sterke eigen keten voegen twintig referenties niet meer toe dan die ene plus 1. Praktische toets per item: staat er een feitelijke beschrijving (wat zie je) en een les (wat doen wij ermee), en zou een tweede persoon via de URL hetzelfde concluderen?

## Anti-patterns

- Refero doorzoeken zonder `"platform": "web"`: app-schermen overspoelen de resultaten en je selecteert patronen die op web niet bestaan of niet converteren.
- Zoeken op de branche van de klant: je vindt de middelmaat van de eigen markt en mist precies de cross-industry sprong die de waarde van deze skill is.
- Referenties verzamelen als moodboard zonder IDs en registratie: onvindbaar in de registry betekent onbruikbaar in een DDR, en het werk is effectief weggegooid.
- Een referentie opvoeren als effect-bewijs ("Stripe doet dit, dus het werkt"): dat is adoptie, geen effect; het Red Team hoort dit af te vangen maar het hoort jouw sessie nooit te verlaten.
- 15 referenties per hypothese aanleveren: de library wordt ruis, de DDR-tabel onleesbaar en niemand ziet meer welke referentie de sterkste is.
- Alle referenties uit 1 industrie halen: dan toon je een lokale conventie, geen patroon; minimaal 2 industrieen is de ondergrens voor de convergentie-claim, ook bij `light`, waar de kleinere set juist de verleiding geeft om ze uit dezelfde hoek te plukken.
- App-patronen van Mobbin zonder label naar web-DDR's kopieren: native interacties (swipe, sheets, tabbar) vertalen niet 1-op-1 en produceren wireframes die de developer terugstuurt.
- De design les formuleren als mening ("mooi rustig scherm"): zonder feitelijk pattern plus implementeerbaar inzicht kan design-os-figma-build er niets mee.
- De pattern library overslaan omdat de sprint haast heeft: terugkerende patronen opnieuw uitzoeken bij de volgende klant kost een veelvoud van de 10 minuten P-XX-registratie.

## Output-formaat

Per opdracht lever je drie dingen, in deze volgorde:

1. **Bijgewerkte Reference Library** (`02_DATA-BASELINE/Reference-Library.md`): sectie per H-XX volgens het format hierboven, 4 tot 7 items (3 tot 4 bij `light`), altijd minimaal 2 industrieen
2. **Registry-regels** voor `02_DATA-BASELINE/Evidence-Registry.md` secties M en N: per item ID, bron, URL, patroonnaam, betrouwbaarheid Middel, datum
3. **DDR-bijdrage** per betrokken DDR:

```markdown
## Referentie-schermen (Refero + Mobbin)
| Evidence ID | Bron | Pattern | Design les |
|---|---|---|---|
| E-REF-H[X]-[NR] | [site] | [feitelijk] | [implementeerbaar] |
| E-MOB-H[X]-[NR] | [app/site] | [feitelijk] | [implementeerbaar] |

**Sterkste industrie-validatie:** [1 alinea: welke referentie het probleem
het meest direct oplost en welk inzicht we direct implementeren.]
```

Plus, indien van toepassing: nieuwe of bijgewerkte P-XX entries en een logregel in `09_DECISION-LOG/Decision-Log.md`.

## Dependencies

- `mcp__refero__refero_search_screens` (altijd platform "web"), `mcp__refero__refero_get_screen`, `mcp__refero__refero_search_styles`
- `mcp__mobbin__search_screens`, `mcp__mobbin__search_flows`, `mcp__mobbin__search_sections`
- `<klantmap>/design-os/02_DATA-BASELINE/Reference-Library.md` en `Evidence-Registry.md` (secties M/N), `05_HYPOTHESES/Hypothesis-Backlog.md`, `04_STRATEGY/Decision-Moment-Map.md`
- Een SERP-tool en een scrape-tool: fallback voor niche- of markt-specifieke patronen buiten de bibliotheken om, en volwaardige vervanging als er geen bibliotheek beschikbaar is
- Stencil-referentie: `design-os-setup/client-stencil/02_DATA-BASELINE/Reference-Library.md` voor het lege format bij een nieuwe klant

## Integratie met andere skills

- **design-os-specialist**: routeert referentie-vragen naar jou en bewaakt dat fase 5 en 6 niet starten met een lege library voor de sprint-hypotheses.
- **design-os-hypotheses-ddr**: jouw hoofdafnemer voor patroon-evidence; hij vraagt per hypothese referenties aan en verwerkt jouw Referentie-schermen-sectie plus sterkste-validatie-alinea in de DDR.
- **design-os-strategy**: levert de beslismomenten (BM-X) die jouw zoekingang zijn; je zoekt op beslismoment, nooit op de branche van de klant.
- **design-os-directions**: jouw tweede afnemer; hij vraagt de stijl-scouting aan die het visuele mandaat vult, bij `vol` voor elke richting en bij `light` alleen voor de gekozen richting plus de runner-up, en meldt het als twee richtingen visueel te dicht bij elkaar liggen.
- **design-os-evidence**: beheert de Evidence Registry als geheel; jij vult alleen secties M en N, en niet-Refero/Mobbin vondsten (SERP, screenshots) draag je aan hem over als COMP-evidence.
- **design-os-figma-build**: gebruikt jouw design lessen en P-XX patterns als bouwrichting; hij mag referenties raadplegen, nooit zelf nieuwe evidence registreren.
- **design-os-red-team**: toetst of referentie-claims kloppen en of geen DDR op alleen E-REF/E-MOB door de gate is gekomen.
- **competitor-teardown**: directe concurrenten en hun funnels (sectie G evidence); jij doet juist niet-concurrenten en patronen. Twijfel: staat de site in dezelfde SERP als de klant, dan teardown.
- **ux-ia-wireframing**: consumeert de pattern library bij wireframe-briefs buiten het Design OS om.

## Tips

- Zoek in het Engels, ongeacht de werktaal (P6): de patroonbibliotheken zijn Engelstalig geindexeerd, en een zoekterm in de klanttaal vindt niets waar de Engelse patroonterm raak schiet.
- Begin bij Mobbin flows in plaats van screens wanneer de hypothese over een funnel gaat: 1 goede flow vervangt 5 losse schermen en toont de overgangen die screens verbergen.
- Noteer bij elke referentie meteen de datum: sites veranderen en de data decay policy in het Data-Governed Design Protocol geeft referentieschermen uit patroonbibliotheken een houdbaarheid van 12 maanden; een verlopen referentie hercheck je via de URL.
- De sterkste industrie-validatie is bijna nooit de bekendste naam: een middelgrote SaaS die het patroon kaal en meetbaar uitvoert is bruikbaarder dan een big-tech scherm vol merk-uitzonderingen.
- Bouw de library voor de hele sprint in 1 sessie: dezelfde zoektermen bedienen meerdere hypotheses en je ziet convergentie (P-XX kandidaten) alleen als je breed kijkt.
- Screenshot-URLs uit Refero verlopen niet, maar de onderliggende site kan al veranderd zijn: baseer de design les op wat het referentie-scherm toont, niet op de live site van vandaag.
- Lokale marktrealiteit checken de patroonbibliotheken niet voor je: markt-specifieke patronen (betaal- en aanvraagmethoden, consent-flows, wettelijke verplichte elementen) vind je beter via live SERP-voorbeelden uit die markt zelf; combineer beide lagen in de DDR.
- Presenteer referenties aan de klant altijd als "patroon-adoptie bij [n] sites in [m] industrieen", nooit als belofte van uplift: dat houdt de bewijstaal zuiver en beschermt de geloofwaardigheid van het hele systeem.

*Herzien wanneer de gebruikte patroonbibliotheken hun tools of zoekvelden wijzigen, of wanneer de Evidence Registry-secties M en N van format veranderen.*

## Overdracht naar de belevingslaag

Schermafbeeldingen kunnen per definitie geen beweging bewijzen. Gaat de vraag over beleving, verhaal, animatie of interactie in plaats van over layout of flow, dan is dit jouw skill niet: routeer naar **design-os-experience-motion**, die met E-EXP (experience-referenties) en E-MOT (reproduceerbare technieken) werkt in Evidence Registry-secties S en T. Andersom geldt hetzelfde: een belevingsvraag die bij nader inzien een layoutvraag is, komt hier terug.
