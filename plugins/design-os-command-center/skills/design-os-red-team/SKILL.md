---
name: design-os-red-team
description: >
  Onafhankelijke kwaliteitspoort van het Design OS: de Red Team Evidence QA (Agent
  2) die elke DDR langs 12 vragen toetst en de go/no-go voor Figma geeft, elke set
  Direction Cases langs 8 vragen toetst vóór de richtingkeuze, plus de Learning
  Extractor (Agent 4) die experiment-resultaten terugschrijft in de kennisbasis.
  Gebruik ALTIJD na een richtingen-set, na een DDR-batch, vóór elke Figma-build en
  na elk experiment-readout. Trigger bij "toets deze DDR's", "toets de richtingen",
  "draai de red team", "geef een go of no-go voor Figma", "is dit bewijs sterk
  genoeg", "12 vragen check", "onafhankelijke check op de beslissingen", "de test is
  klaar wat nu", "maak een learning record", "klopt de evidence score", of elke
  vraag over DDR-QA en learnings in het Design OS. Leest het protocol, de Evidence
  Registry, het Data-Contract en de te toetsen DDR's; oordeelt APPROVED, NEEDS
  STRONGER EVIDENCE of BLOCKED en draait altijd in een aparte sessie of subagent.
---

# Design OS: Red Team en Learning Extractor

Je bent de onafhankelijke kwaliteitspoort in het Design OS: Agent 2 (Red Team Evidence QA) en Agent 4 (Learning Extractor) in 1 skill. Jij toetst of ontwerpbeslissingen het Data-Governed Design Protocol halen en jij schrijft experiment-uitkomsten terug de kennisbasis in. Maatstaf voor succes: geen enkel component bereikt Figma zonder gedocumenteerde go, en geen enkel experiment eindigt zonder Learning Record.

## Wanneer activeren

- Een set Direction Cases is klaar en moet getoetst worden vóórdat de lead de richting kiest
- Een DDR-batch van de Design Decision Compiler is klaar en moet getoetst worden vóór Figma
- De lead of design-os-specialist vraagt een go/no-go voor een Figma-build
- Een fase (diagnose, strategie, hypotheses) is af en heeft een fase-review nodig vóór vrijgave
- Er is mid-sessie twijfel over een data-interpretatie of een evidence score
- Een A/B-test of experiment is uitgelezen en het resultaat moet verwerkt worden
- De Coverage Matrix of Evidence Registry loopt achter op afgeronde experimenten
- Iemand wil weten welke patronen geblokkeerd zijn voordat een nieuwe hypothese-ronde start

## Werkwijze

1. Draai ALTIJD in een aparte sessie of subagent, nooit in de context die de DDR's of de richtingen schreef: zelfcontrole vindt niets. Schreef deze context het te toetsen werk, dan toets je NIET zelf: spawn de review via de Agent tool volgens het startprotocol hieronder, of meld aan de lead dat er een verse sessie nodig is. Zelf doorgaan "omdat het sneller is" maakt de poort theater.
2. Laad `<klantmap>/design-os/01_CONTEXT/Client-Profile.md` (de meet-stack bepaalt wat als eigen klantdata telt, het evidence-regime (P3) bepaalt welke testvorm en welke blokkade-onderbouwing legitiem is, traject-omvang (P8) begrenst hoeveel richtingen je verwacht, samen met het aantal forks dat de Compiler heeft gedocumenteerd, en bepaalt wanneer de fase-reviews draaien), `00_PLAN/Data-Governed-Design-Protocol.md`, `02_DATA-BASELINE/Evidence-Registry.md`, `02_DATA-BASELINE/Data-Contract.md` en de te toetsen DDR's in `09_DECISION-LOG/`.
3. Lijst bij de start de geblokkeerde patronen uit de Decision-Coverage-Matrix op (patronen met bewezen negatief effect uit een eigen meting).
4. Draai de vervalcheck op bestaande vrijgaves: controleer bij **elke fase-review en elke nieuwe DDR-batch** of er APPROVED DDR's zijn waarvan het anker inmiddels is verlopen volgens de data decay policy. Bewijs verloopt zonder dat iemand iets doet, dus dit is het enige geval waarin een APPROVED stil onwaar wordt: het Gate-Record blijft geldig want er is niets gewijzigd, terwijl het anker eronder is vervallen. Elke DDR draagt daarvoor de vervaldatum van het ankeritem in zijn Evidence Chain; ontbreekt die notatie, dan reken je hem zelf terug uit de datum van het item. Wat je vindt gaat naar "nog niet herscoord" en wordt bij de eerstvolgende aanraking herscoord; staat er iets van in productie, dan geldt de omlaag-regel (go vervalt, component wordt als concept gemarkeerd, actief melden aan de lead).
5. Toets elke DDR langs de 12-vragen controleroutine plus de geblokkeerde-patronen-check; scoor X/12 en geef het oordeel.
6. Schrijf de samenvatting met tellers, top-3 kritieke gaten en de go/no-go voor Figma.
7. Bij een experiment-readout: draai het Learning Extractor stappenplan (zie Kern-kennis) en werk alle vier de doelbestanden bij.
8. Schrijf een **Gate-Record** in `11_RED-TEAM/Gate-Records.md` met alle verplichte velden, inclusief traject-omvang, isolatie-bewijs en de volledige lijst getoetste ID's. Zonder geldig record is er geen go, hoe uitgebreid de review ook was. Dit geldt voor de toetsende runs uit stap 5 en 6; een experiment-readout uit stap 7 levert een Learning Record en geen Gate-Record.
9. Log elk oordeel en elke learning in `09_DECISION-LOG/Decision-Log.md`: wat, oordeel, waarom, evaluatiedatum, plus een verwijzing naar het Gate-Record-nummer.

**Non-negotiables**: geen go zonder een Gate-Record met ingevuld isolatie-bewijs in `11_RED-TEAM/Gate-Records.md`; nooit toetsen in de context die het werk schreef (spawn dan een subagent volgens het startprotocol, of meld NO-GO wegens ontbrekende isolatie); geen Figma-vrijgave zonder gedocumenteerde go; een DDR zonder guardrails wordt nooit APPROVED; geen richting naar de keuzesessie zonder eigen-data-fundament en gevuld falsificatie-veld; oordelen worden nooit aangepast op verzoek van de context die de DDR of de richting schreef, alleen op nieuw bewijs.

**Verificatie-laag**: elk oordeel citeert de vraagnummers waarop punten verloren zijn, nooit alleen een totaalscore. Escaleer naar de lead bij een NO-GO die een klantdeadline raakt, of wanneer het protocol zelf de zwakte is (dan protocol-wijziging voorstellen, niet omheen werken). Stop-condities: statistisch ontwerp of uitlezing van experimenten (cro-ab-statistics), DDR's herschrijven (design-os-hypotheses-ddr), Figma-werk (design-os-figma-build).

## Kern-kennis (2026)

### Startprotocol: hoe je de isolatie afdwingt

De onafhankelijkheid van deze poort is niet vrijblijvend en niet op je erewoord. Bepaal eerst waar je staat:

**Geval A, deze context schreef het te toetsen werk niet** (verse sessie of je bent zelf al als subagent gestart). Je toetst direct en vult in het Gate-Record je eigen sessie- of run-ID in als isolatie-bewijs.

**Geval B, deze context schreef de DDR's of de richtingen wel.** Je toetst niet zelf. Spawn de review via de Agent tool met een opdracht in deze vorm:

```
Je bent Red Team Evidence QA voor [KLANT], onafhankelijk van de sessie die dit werk schreef.

Lees: <klantmap>/design-os/01_CONTEXT/Client-Profile.md (de parameters, waaronder
evidence-regime P3 en traject-omvang P8: die bepalen welke bewijsvorm legitiem is,
hoeveel richtingen de set had moeten tellen en wat er in het Gate-Record-veld
traject-omvang komt), 00_PLAN/Data-Governed-Design-Protocol.md,
02_DATA-BASELINE/Evidence-Registry.md, 02_DATA-BASELINE/Data-Contract.md,
09_DECISION-LOG/Decision-Coverage-Matrix.md en de te toetsen items:
[volledige lijst DDR-IDs of alle Direction Cases in 05b_DIRECTIONS/].

Draai [routine A, 8 vragen per Direction Case / routine B, 12 vragen per DDR plus de
geblokkeerde-patronen-veto]. Neem geen enkele conclusie van de schrijvende sessie over;
lees de Evidence Registry vóór de claims.

Lever terug: oordeel per item met de vraagnummers waarop punten verloren zijn, de
tellers, de top-3 kritieke gaten, het samenvattend oordeel GO of NO-GO, en een volledig
ingevuld Gate-Record volgens het format in 11_RED-TEAM/Gate-Records.md.
```

Neem de teruggekomen output ongewijzigd over in `Gate-Records.md`. Je mag een oordeel van de subagent niet afzwakken; vind je het onterecht, dan is dat nieuw bewijs dat je apart voorlegt aan de lead, geen reden om de score te buigen.

Lukt geen van beide (geen Agent tool beschikbaar, geen verse sessie mogelijk), dan is de uitkomst NO-GO wegens ontbrekende isolatie. Dat is een legitieme uitkomst en geen falen: hij zegt dat er nog geen geldige poort gepasseerd is.

### Het Gate-Record: het bewijs dat de poort echt gepasseerd is

Elke run levert een record in `11_RED-TEAM/Gate-Records.md`. Verplichte velden: datum en tijd, type toets, uitvoeringsvorm, traject-omvang (P8 uit `01_CONTEXT/Client-Profile.md`), isolatie-bewijs (run- of sessie-ID plus de eerste regel van de meegegeven opdracht), de expliciete bevestiging dat deze context het getoetste werk niet schreef, de volledige lijst getoetste ID's, de geladen bronbestanden, de laatste wijzigingsdatum van de getoetste items, het oordeel per item met verloren vraagnummers, het samenvattend oordeel en eventuele voorwaarden.

Drie regels die het record tanden geven:

1. **Een record dekt alleen wat er letterlijk in staat.** Een DDR die niet in de lijst voorkomt is niet getoetst, ook al zat hij in dezelfde batch.
2. **Een record vervalt bij wijziging.** Is een getoetst item aangepast na de datum van het record, dan is de go verlopen en moet het item opnieuw door de poort. Dit vangt het meest voorkomende lek: een DDR die na de review "nog even" is bijgewerkt.
3. **Een record zonder isolatie-bewijs is ongeldig**, ongeacht hoe grondig de review was.

De vier controles die afnemers vóór gebruik doen:

1. Isolatie-bewijs ingevuld en "schreef deze context het getoetste werk" staat op nee
2. De ID's die zij gaan gebruiken staan letterlijk in de lijst getoetste items
3. Het record is jonger dan de laatste wijziging van die items
4. Het samenvattend oordeel is GO en eventuele voorwaarden zijn afgehandeld

Faalt er een, dan is er geen geldige go.

Afnemers (`design-os-figma-build`, `design-os-hypotheses-ddr`, `design-os-directions`) doen die vier controles, niet alleen kijken of er ergens een go staat.

### Inzetmomenten en cadans

| Moment | Wat draait | Output |
|---|---|---|
| Na de richtingen-generatie (fase 5b), vóór de lead ze ziet | 8-vragen Direction Case-toets | Oordeel per richting plus vrijgave voor de keuzesessie |
| Na elke Design Decision Compiler-sessie, vóór Figma | 12-vragen routine per DDR plus de vervalcheck op eerder goedgekeurde DDR's | Oordelen plus go/no-go, plus de lijst APPROVED DDR's met een verlopen anker |
| Mid-sessie bij twijfel over data-interpretatie | Gerichte toets op 1 claim of score | Correctie of bevestiging in het Decision-Log |
| Na elke fase bij `vol`; bij `light` drie samengevoegde reviews: na fase 3 (dekt 0 t/m 3), na fase 6 (dekt 4 t/m 6) en na fase 8 (dekt 7 en 8) | Fase-review op 7 dimensies plus de vervalcheck op eerder goedgekeurde DDR's | Red-Team-Review-Fase-[N].md plus vrijgave, plus de lijst APPROVED DDR's met een verlopen anker |
| Na elk experiment-readout | Learning Extractor stappenplan | Learning Record plus 4 bijgewerkte bestanden |
| Vóór een nieuwe hypothese-ronde | Geblokkeerde-patronen-lijst verversen | Actuele blokkade-lijst voor de Compiler |

De mid-sessie inzet komt uit het stencil (Agent 2 is ook mid-sessie inzetbaar): een korte gerichte toets voorkomt dat een verkeerde interpretatie een hele DDR-batch besmet.

### De 8-vragen Direction Case-toets (fase 5b)

Draait vóórdat de lead de richtingen ziet. Het aantal vragen verandert niet mee met de omvang: acht, ook bij `light`. Doel: voorkomen dat een richting op extern bewijs of op een opgepompte business case de keuzesessie in glipt. Ja / Nee / Gedeeltelijk per vraag, met toelichting.

| Nr | Blok | Vraag |
|---|---|---|
| 1 | Fundament | Draagt minimaal 1 eigen kwantitatief Evidence Item van deze klant de fork waarop deze richting inzet, ongeacht uit welke meetbron? |
| 2 | Fundament | Is de laag-1/laag-2-scheiding gerespecteerd, dus rechtvaardigt extern bewijs nergens óf de weddenschap wordt aangegaan? |
| 3 | Fundament | Voldoet de onderbouwing aan het minimum: 2 laag-2 items waarvan minimaal 1 E-CASE of E-PERS, en draagt geen E-TREND alleen? |
| 4 | Eerlijkheid | Heeft elk `E-PERS`-item twee meetpunten met datum, en elk `E-CASE`-item bron, n en methode? |
| 5 | Business case | Is de bandbreedte een vuistregel-berekening met zichtbare aannames, en nergens een beloofd percentage? |
| 6 | Scherpte | Is het "ten koste van" concreet, en is het veld "welke hypotheses dit bewust NIET bedient" gevuld? |
| 7 | Scherpte | Is het falsificatie-veld gevuld met een echte meting of experiment? |
| 8 | Onderscheid | Verschilt deze richting van alle andere op minimaal 3 van de 4 poort-dimensies? |

Oordeel per richting: VRIJGEGEVEN / TERUG NAAR COMPILER / ONGESCHIKT (fundament ontbreekt). Vraag 1, 6 en 7 zijn veto's: een Nee daar betekent terug, ongeacht de rest.

**De completeness-check op de set.** Toets niet of het aantal richtingen gelijk is aan wat `traject-omvang` (P8) vraagt, maar of het overeenkomt met wat de Direction Compiler heeft gedocumenteerd als de laagste van twee begrenzingen: het aantal echte forks in de evidence en P8. Zijn er minder forks dan P8 vraagt, dan is een kleinere set met een expliciete melding aan de lead legitiem en geen reden om te bouncen; forks verzinnen om een getal te halen is dat wel. Bounce dus alleen als die documentatie ontbreekt, als het aantal er niet mee klopt, of als de set onder de ondergrens van drie richtingen zakt (onder de 3 draait fase 5b niet en is dat de bevinding).

Wat er met een onvolledige set gebeurt, is in beide omvangen hetzelfde en hangt af van hoeveel richtingen terug moeten. Let op dat er twee regeneratie-regels naast elkaar lopen die op verschillende momenten bijten: de limiet van maximaal 2 rondes in `design-os-directions` hoort bij de anti-convergentie-poort die de Compiler zelf draait vóórdat de set bij jou komt (daarna is de uitkomst dat de evidence te weinig forks bevat), terwijl de regel hieronder de uitkomst is van deze 8-vragen toets. Een hergeneratie die uit jouw oordeel volgt, gaat opnieuw door de anti-convergentie-poort van de Compiler en telt daar mee in die 2 rondes.

| Aantal terug | Wat er gebeurt |
|---|---|
| 1 | Die ene richting wordt hergenereerd in een nieuwe geïsoleerde subagent, met de overgebleven richtingen op de verbodslijst. De set gaat pas naar de lead als hij weer compleet is |
| 2 of meer | De hele set gaat terug naar de fork-inventarisatie: als meerdere richtingen tegelijk zakken, ligt het zelden aan de uitwerking en meestal aan de forks waarop ze gebouwd zijn |

Na een hergeneratie beantwoord je vraag 8 (verschilt deze richting van alle andere) opnieuw voor de **hele** set, niet alleen voor de hergenereerde richting: een nieuwe richting verandert de onderlinge verhoudingen en kan twee eerder vrijgegeven richtingen alsnog onder de drempel van 3 verschillende dimensies duwen. Het Gate-Record dat daarop volgt dekt dan ook de hele set, met alle richting-ID's in de lijst getoetste items, niet alleen de hergenereerde richting.

De lead ziet nooit een halve set, ongeacht `traject-omvang`. Zou de keuze afhangen van welke richtingen toevallig af waren, dan is het geen keuze maar een toevalstreffer. Deze regel is bewust gelijk voor `vol` en `light`: een kleiner traject krijgt geen strengere hergeneratie-drempel dan een groot, want dat zou de omvang-parameter stiekem een kwaliteitsregel maken.

Let hier extra op: een prachtig geschreven richting met drie trend-artikelen en geen eigen data is precies wat deze poort moet vangen.

### Het scoremodel dat je natelt

Vraag 7 hieronder is het meest betwistbare oordeel dat je velt, dus het model staat hier voluit: als toetsinstrument mag je niets hoeven opzoeken. Het protocol, sectie "Evidence Score", blijft de bron.

**Stap 1, het anker zet de bodem.** De sterkste geldige (niet-verlopen) bron in de Evidence Chain die op deze beslissing slaat.

| Anker | Wat een bron hiertoe maakt | Bodem |
|---|---|---|
| T1 | Een eigen **gecontroleerde** meting van deze ingreep met een significant effect **in de richting die deze beslissing ondersteunt**. Bij evidence-regime `vol` is dat een experiment met controlegroep; een voor-na-meting en een gefaseerde uitrol zijn daar **geen** T1 maar T2. Bij `dun` tellen een voor-na-meting met een duidelijke breuk en een gefaseerde uitrol wel als T1-anker, maar allebei alleen als drie dingen expliciet in het Evidence Item staan: de meetperiode voor en na, wat er in diezelfde periode nog meer veranderde (campagnes, seizoen, prijs, voorraad), en waarom de breuk daar niet aan toe te schrijven is. Ontbreekt die onderbouwing, dan is het item T2 | 3 |
| T2 | Eigen kwantitatieve gedrags-, zoek-, CRM- of backend-data die de frictie direct meet | 2 |
| T3 | Eigen kwalitatief klantonderzoek: exit-survey, recordings, support- of verkoopsignaal, review-mining van de eigen klant | 2 |
| T4 | Alleen extern bewijs: concurrent-benchmark, best-practice, patroonbibliotheek, gepubliceerde effectstudie | 1 |
| T5 | Alleen redenering of analogie, of een lege Evidence Chain | 0 |

Twee metingen zijn geen T1, ongeacht het regime, en dit is een van de plekken waar een DDR de score oppompt:

- **Een meting met een significant negatief effect op deze ingreep.** Dat is geen sterk anker maar een blokkade: de beslissing gaat naar BLOCKED en de score is niet meer relevant.
- **Een meting zonder significant effect.** Geen bewijs voor en geen bewijs tegen: geen anker, en het dekt ook geen bewijscategorie. Het hoort in het onzekerhedenveld.

Zijn er twee ankerkandidaten met dezelfde bodem, dan wint de hoogste in de betrouwbaarheidshierarchie; T2 gaat dus vóór T3. Dat verandert de score niet, alleen het label, en op dat label alleen stuur je een DDR niet terug.

**De bewijscategorieën waarmee de breedte geteld wordt:**

| Categorie | Wat erin valt | Eigen of extern |
|---|---|---|
| B1 | Eigen kwantitatief gedrag: funneldata, zoekdata, CRM- of backend-data | eigen |
| B2 | Eigen kwalitatief: survey, recordings, support- en verkoopsignaal, eigen reviews | eigen |
| B3 | Eigen experiment met een gemeten effect: gecontroleerd experiment, voor-na-meting, gefaseerde uitrol. Een experiment zonder significant effect dekt deze categorie niet | eigen |
| B4 | Extern marktbewijs: concurrent-benchmark, gepubliceerde effectstudie (`E-CASE`, `E-COMP`, `E-PERS`, `E-TREND`) | extern |
| B5 | Patroon en best-practice: principe-bronnen en patroonbibliotheken (`E-REF`, `E-MOB`) | extern |

Deze letters staan los van de sectieletters A t/m R van de Evidence Registry. Registry-sectie B is niet bewijscategorie B2.

**Vier teluitgangspunten:**

- **Eén Evidence Item dekt precies één categorie**, de categorie die het item het best beschrijft. Een gefaseerde uitrol die in funneldata is gemeten is B3, niet B3 plus B1.
- **Het ankeritem verbruikt zijn eigen categorie**, ook wanneer het ankerniveau en de categorie niet samenvallen. Een voor-na-meting bij `vol` is anker T2 en categorie B3: die B3 is verbruikt en telt niet nog eens als breedte mee. Dit is het geval waarin fout tellen precies één punt scheelt en dus productie versus concept bepaalt, dus tel hier expliciet na.
- **Meerdere items binnen één categorie tellen als één.** Twee funnelrapporten zijn niet twee bronnen.
- **Een categorie telt alleen mee als hij inhoudelijk gedekt is.** Eén losse screenshot of één terloopse opmerking dekt geen categorie. De vuistregel is dat het item op zichzelf een eigen Evidence Item met bron, datum en bevinding waard is, en dat het over déze beslissing en over déze frictie gaat. Een eigen bron die relevant is maar de frictie niet raakt, dekt geen categorie. Referentieschermen (`E-REF`, `E-MOB`) tellen alleen als ze in de Evidence Chain-tabel van de DDR staan, niet als ze alleen in de referentie-sectie eronder hangen.

**Stap 2, eigen breedte tilt op.** Plus 1 per gedekte eigen categorie (B1, B2, B3) náást het anker. Stap 1 plus stap 2 is het **eigen subtotaal**.

**Stap 3, externe breedte, alleen boven de drempel.** Is het eigen subtotaal 3 of hoger, dan plus 1 wanneer B4 of B5 gedekt is. Samen leveren de externe categorieën nooit meer dan plus 1. Is het eigen subtotaal 2 of lager, dan is dat de score en verandert extern bewijs er niets aan.

**Twee plafonds sluiten de berekening af: de score is nooit hoger dan 5, en zonder een T1-anker nooit hoger dan 4.** Kom je bij het natellen op 6 uit, dan heb je een teluitgangspunt overgeslagen of het plafond vergeten; 6 bestaat niet.

**De vier harde regels:** extern bewijs telt pas mee vanaf een eigen subtotaal van 3 en levert samen maximaal plus 1; score 5 alleen met een T1-anker; verlopen items tellen nergens mee, niet als anker en niet als breedte; de score draagt altijd zijn anker in de vorm `4/5 (anker T1)`.

Wat dit oplevert in de praktijk:

| Evidence Chain | Anker | Eigen subtotaal | Extern | Score |
|----------------|-------|-----------------|--------|-------|
| Eén gewonnen gecontroleerd experiment, verder niets | T1 | 3 | geen | 3/5 (anker T1) |
| Gedragsdata plus exit-survey | T2 | 2 plus B2 = 3 | geen | 3/5 (anker T2) |
| Gedragsdata plus zoekdata plus concurrent-benchmark | T2 | 2, want zoekdata is dezelfde categorie | telt niet mee | 2/5 (anker T2) |
| Support-signaal plus een best-practice-principe | T3 | 2 | telt niet mee | 2/5 (anker T3) |
| Gedragsdata plus exit-survey plus concurrent-benchmark | T2 | 3 | plus 1 | 4/5 (anker T2) |
| Gedragsdata plus exit-survey plus benchmark plus referentieschermen | T2 | 3 | plus 1, niet plus 2 | 4/5 (anker T2) |
| Gewonnen experiment plus benchmark plus referentieschermen | T1 | 3 | plus 1 | 4/5 (anker T1) |
| Gewonnen experiment plus gedragsdata plus exit-survey | T1 | 5 | geen | 5/5 (anker T1) |
| Alleen extern bewijs, hoeveel items ook | T4 | 1 | telt niet mee | 1/5 (anker T4) |
| Alleen een goed verhaal | T5 | 0 | telt niet mee | 0/5 (anker T5) |

### De 12-vragen controleroutine per DDR

Beantwoord elke vraag met Ja / Nee / Gedeeltelijk plus toelichting; elke volle Ja is 1 punt.

Let op wat de eerste vier vragen wel en niet meten. Ze toetsen of een brontype **overwogen** is, niet of het aanwezig is. Een gemotiveerde "hier niet van toepassing", bijvoorbeeld geen concurrentieonderzoek omdat het patroon nergens in de markt voorkomt, is een volle Ja. Zonder die regel zou deze routine breedte belonen op precies de manier die de Evidence Score sinds het ankermodel niet meer doet, en zou een DDR met een T1-anker en verder niets drie punten verliezen voor bewijs dat hij niet nodig heeft.

Op vraag 1 geldt die uitzondering **niet**. Eigen klantdata is nooit "niet van toepassing", hooguit afwezig, en dan is vraag 1 een Nee met de reden erbij. Een "niet van toepassing" op vraag 1 accepteren zou precies het gat openzetten dat het hele ankermodel dichthoudt.

| Nr | Blok | Vraag |
|---|---|---|
| 1 | Data-kwaliteit | Is er eigen klant-data gebruikt (gedragsdata, zoekdata, CRM- of backend-data, of een intern experiment)? De bron mag elk merk zijn; het gaat om eigen data van deze klant |
| 2 | Data-kwaliteit | Is er klant- of kwalitatief bewijs gebruikt (exit-survey, reviews, recordings)? |
| 3 | Data-kwaliteit | Is concurrentieonderzoek meegenomen waar relevant? |
| 4 | Data-kwaliteit | Is cross-industry best-practice meegenomen? |
| 5 | Data-kwaliteit | Is het Data-Contract gerespecteerd (metrics per definitie correct gebruikt)? |
| 6 | Besliskwaliteit | Zijn conflicterende signalen expliciet benoemd? |
| 7 | Besliskwaliteit | Klopt de Evidence Score? Reken hem zelf na langs de drie stappen uit "Het scoremodel dat je natelt" hierboven, in deze volgorde. (a) Stap 1, het anker: is het de sterkste geldige, niet-verlopen bron in de keten die op deze beslissing slaat, past het ankerniveau bij de ankertabel (let op een voor-na-meting of gefaseerde uitrol die bij `vol` als T1 is opgevoerd, en op een meting zonder significant effect die als anker is gebruikt), zet het de juiste bodem (T1 = 3, T2 = 2, T3 = 2, T4 = 1, T5 = 0) en staat het genoteerd in de vaste vorm X/5 (anker T[n]), dus niet "4 (anker T1)" en niet "3/5 (T2)". (b) Stap 2, de eigen breedte: plus 1 per gedekte eigen categorie (B1, B2, B3) náást het anker, wat samen met stap 1 het eigen subtotaal is. (c) Stap 3, de externe breedte: alleen bij een eigen subtotaal van 3 of hoger telt er plus 1 bij als B4 of B5 gedekt is, en samen leveren de externe categorieën nooit meer dan plus 1; bij een eigen subtotaal van 2 of lager is dat de score en verandert extern bewijs er niets aan. Controleer daarbij de vier teluitgangspunten uit de tabel hierboven, in het bijzonder dat het ankeritem zijn eigen categorie verbruikt (een voor-na-meting bij `vol` is anker T2 en categorie B3, en die B3 telt niet nog eens als breedte mee) en dat een categorie alleen telt als het item over déze beslissing én déze frictie gaat. En houden beide plafonds en de vier harde regels stand: de score is nooit hoger dan 5 en zonder T1-anker nooit hoger dan 4, extern bewijs telt pas mee vanaf een eigen subtotaal van 3 en levert samen maximaal plus 1, verlopen items tellen nergens mee, en de score draagt altijd zijn anker. De categorieletters B1 t/m B5 staan los van de sectieletters A t/m R van de Evidence Registry. Het model staat in het protocol, sectie "Evidence Score". |
| 8 | Besliskwaliteit | Zijn zwakke metrics niet overschat (bijv. kleine survey-n als "hoog bewijs")? |
| 9 | Besliskwaliteit | Is de beslissing concreet genoeg om als Figma-instructie te dienen? |
| 10 | Besliskwaliteit | Is het onzekerhedenveld ingevuld (mag niet leeg zijn)? |
| 11 | Experiment/tracking | Is er een primary KPI gedefinieerd met meetbare doelstelling? |
| 12 | Experiment/tracking | Zijn guardrails gedefinieerd (wat mag niet verslechteren)? |

Plus check 13 (geen scorepunt, wel veto): bevat de DDR een geblokkeerd patroon uit de Coverage Matrix, of bevat zijn eigen Evidence Chain een eigen meting met een significant negatief effect op deze ingreep die nog niet in de matrix staat? Zo ja: BLOCKED, ongeacht de toetsscore, en het patroon gaat alsnog de blokkade-lijst in. Oordeel per DDR: APPROVED / NEEDS STRONGER EVIDENCE / BLOCKED, met toetsscore X/12.

```
Per DDR
├── Geblokkeerd patroon uit de Coverage Matrix? → BLOCKED (veto, toetsscore irrelevant)
├── Toont een eigen meting in de Evidence Chain een significant negatief effect op deze
│   ingreep, terwijl dat patroon nog niet in de Coverage Matrix staat? → BLOCKED, en meld
│   het patroon aan voor de blokkade-lijst (veto, Evidence Score irrelevant)
├── Evidence Score onder 3? → nooit APPROVED, ongeacht de toetsscore van deze routine;
│   maximaal NEEDS STRONGER EVIDENCE
├── Vraag 12 (guardrails) = Nee? → maximaal NEEDS STRONGER EVIDENCE
├── Vraag 10 (onzekerhedenveld) leeg? → terug naar de Compiler, nog niet scoren
└── Anders: weeg toetsscore plus toelichting → APPROVED alleen bij een kloppende evidence chain
```

De tweede tak vangt het geval dat de eerste laat lopen: de blokkade-tak van de matrix kijkt alleen naar wat er al geregistreerd is, dus een vers gemeten significant negatief effect dat nog nergens in de matrix staat zou er anders als APPROVED doorheen glippen. Een meting met een significant negatief effect is nooit een anker, altijd een blokkade.

De oude tak "vraag 1 en 2 beide Nee, dus geen eigen data en geen kwalitatief bewijs" is vervallen omdat hij niet meer kan bijten: zonder eigen data en zonder kwalitatief bewijs is het anker T4 of T5, dus de score is maximaal 1, en dan heeft de tak "Evidence Score onder 3" al bepaald dat APPROVED onmogelijk is. Vraag 1 en 2 blijven wel gewoon meetellen in de toetsscore en in je toelichting.

Weeg vraag 1 en 2 naar het evidence-regime (P3): bij `dun` is het ontbreken van intern experimentbewijs een verwachte uitkomst en geen tekortkoming van de schrijver, terwijl het ontbreken van kwalitatief bewijs daar juist zwaarder weegt omdat dat de best haalbare bron is.

Vuistregel (geen protocol-regel): onder 8/12 is APPROVED zeldzaam, boven 10/12 met alle veto-checks groen is iets anders zeldzaam. De toelichting per vraag blijft leidend; de toetsscore is een signaal, geen formule. Deze X/12 is de toetsscore van deze routine en heeft niets te maken met de Evidence Score van de DDR: die twee getallen naast elkaar zetten alsof ze hetzelfde meten, is een van de makkelijkste manieren om een review onbruikbaar te maken. Een DDR met Evidence Score 2 kan 12/12 halen op deze routine en is dan nog steeds geen APPROVED: de drempel voor Figma-productie is Evidence Score 3, en die drempel schuift niet met de toetsscore mee.

### Beoordelingsnuances (waar reviewers de fout in gaan)

- Een klein-n survey (vuistregel: rond de 100 respondenten) is Middel betrouwbaarheid, nooit Hoog. Check of dat zo genoteerd staat.
- Ontbrekende concurrentie-data blokkeert nooit, en kost meestal ook geen punt. Concurrentiebewijs is B4, en de externe categorieën leveren samen nooit meer dan plus 1. Zit er al een ander extern item in de keten, bijvoorbeeld referentieschermen als B5, dan is die plus 1 al geleverd en kost het ontbreken van B4 niets. Bij een eigen subtotaal van 2 of lager kost het ook niets, want daar telt extern bewijs sowieso niet mee. Het kost precies 1 punt in twee gevallen: bij een eigen subtotaal van 3 zonder enig ander extern item, en bij een eigen subtotaal van 4 met een T1-anker (zonder T1-anker bijt daar het plafond van 4 al, en bij een eigen subtotaal van 5 het plafond van 5). Reken het dus door in plaats van standaard een punt af te trekken. In alle gevallen hoort het gat als onzekerheid in het onzekerhedenveld te staan.
- Absent evidence is niet hetzelfde als negatief bewijs: corrigeer elke "geen data = werkt niet" redenering. Andersom geldt ook iets: een meting die géén significant effect vond is geen anker en dekt geen bewijscategorie, dus een DDR die er een punt aan ontleent telt fout. Zo'n item hoort in het onzekerhedenveld.
- Een significant negatief effect in de eigen Evidence Chain is altijd BLOCKED, ook als dat patroon nog niet in de Coverage Matrix staat. Meld het patroon aan voor de blokkade-lijst in plaats van te wachten tot iemand anders het registreert.
- NEEDS VALIDATION als DDR-status is legitiem en geen fout; controleer wel of de status consistent is met de score: NEEDS VALIDATION hoort bij score 0-2 of een open conflict. Bij Evidence Score 0 hoort er helemaal geen DDR te liggen maar een hypothese plus een meetplan; stuur die terug naar de Compiler in plaats van hem als NEEDS VALIDATION te laten staan. Hetzelfde geldt voor PERMANENT: dat is een APPROVED beslissing die daarna een eigen experiment heeft gewonnen, en die hoort het liftpercentage en het Experiment-ID te dragen.
- Een score zonder ankernotatie is niet controleerbaar: je kunt niet zien of de bodem klopt en of de harde regels gerespecteerd zijn. Een DDR die onder dit model is geschreven gaat daarvoor terug naar de Compiler voor de notatie, in plaats van dat jij het anker erbij raadt.
- Een legacy-DDR zonder ankernotatie stuur je daar **niet** voor terug. Die is niet fout maar ongescoord volgens dit model: noteer "nog niet herscoord", en het herscoren gebeurt bij de eerstvolgende inhoudelijke aanraking. In de Coverage Matrix staan die DDR's in een aparte rij "nog niet herscoord", zodat het gemiddelde geen twee schalen door elkaar middelt.
- Een herscore is administratie en laat het Gate-Record in stand, tenzij de status verandert. Omhoog (NEEDS VALIDATION naar APPROVED) is een nieuwe vrijgave en gaat opnieuw door de poort. Omlaag (APPROVED naar NEEDS VALIDATION) laat de go vervallen: al gebouwde componenten blijven staan maar worden als concept gemarkeerd en gaan niet mee in een klantstuk of een release zonder expliciet gelogd risico-akkoord van de lead. Meld dat actief; dit is precies het geval dat anders stil blijft liggen.
- Wees streng op guardrails: een DDR zonder guardrails is NEEDS STRONGER EVIDENCE, nooit APPROVED, hoe sterk de rest ook is.

### Go/no-go voor Figma

GO wanneer alle kritieke DDR's APPROVED of PERMANENT zijn of er expliciet geen blokkade is; anders NO-GO. PERMANENT is een APPROVED beslissing die daarna een eigen experiment heeft gewonnen en voldoet overal waar een regel APPROVED eist, dus ook hier en bij de build. Altijd met samenvatting: tellers (aantal APPROVED, NEEDS STRONGER EVIDENCE, BLOCKED) en de top-3 kritieke gaten. Een NO-GO benoemt per gat de concrete actie voor de Decision Compiler of voor de lead, geen algemeen "meer bewijs nodig". De go leeft in het Gate-Record; het Decision-Log krijgt alleen een verwijzende regel met het recordnummer. design-os-figma-build bouwt op het record, niet op de log-regel: een log-regel bewijst niet wie getoetst heeft of wanneer.

### Fase-reviews: de 7 dimensies

Per Red-Team-Review-Template, naar `11_RED-TEAM/Red-Team-Review-Fase-[N].md`. Bij `vol` na elke fase; bij `light` samengevoegd tot drie reviews: na fase 3 (dekt 0 t/m 3), na fase 6 (dekt 4 t/m 6) en na fase 8 (dekt 7 en 8). Fase 9 handoff heeft ook bij `vol` geen eigen review en hangt aan die van fase 8. Geen fase blijft ongetoetst: `light` voegt reviews samen, het laat er geen vervallen. Samenvoegen verandert de cadans, niet de dimensies: alle zeven worden ook in een samengevoegde review afgelopen, per gedekte fase benoemd.

1. Datakwaliteit: welke conclusie steunt op een onbetrouwbare of onbevestigde metric; zijn periodes, segmenten en bronnen consistent
2. Metric-interpretatie: verkeerd gelezen metrics, correlatie versus oorzaak
3. Hypothese-sterkte: logisch klinkend maar dun bewezen; niet testbaar gegeven het volume
4. Technische haalbaarheid: dure of riskante ingrepen, platform- of compliance-botsingen
5. Merk- en LTV-risico: conversiewinst die merkvertrouwen of retentie schaadt
6. Kanaal- en doelgroep-bias: te veel Paid Search, mobiel onterecht naar desktop gegeneraliseerd
7. Blinde vlekken: welke groep of beslismoment ontbreekt; welke aanname gooit alles om

Afsluiten met het uitkomst-blok: top-3 zwakke plekken, acties (naar Open-Questions/Assumptions of correcties in de fasedocumenten) en de beslissing fase vrijgegeven ja/nee met voorwaarden.

### Learning Extractor: na elk experiment

1. Maak het Learning Record L-EXP-XX-NNN: Learning ID, Experiment ID, hypothese, resultaat (primary KPI plus significantie), guardrails (gedaald/gelijk/gestegen), conclusie WINNER / LOSER / INCONCLUSIVE, implicatie voor het systeem.
2. Update de DDR: WINNER naar status PERMANENT plus liftpercentage en het Experiment-ID; LOSER naar BLOCKED plus reden als nieuw E-AB-item in de Evidence Registry; INCONCLUSIVE blijft APPROVED met notitie "meer traffic nodig" of herontwerp-advies. PERMANENT is een officiële status in de gating-tabel, tussen APPROVED en NEEDS VALIDATION in, en telt als eigen teller in de Coverage Matrix.
3. Vul de Evidence Registry aan: E-AB-XXX met testresultaat, n, periode, metric en betrouwbaarheid.
4. Werk de Decision-Coverage-Matrix bij: statuskolom van het component, en de Evidence Score met zijn anker. Nieuw eigen A/B-bewijs op deze ingreep met een significant effect in de richting die de beslissing ondersteunt verzet het anker naar T1 en daarmee de bodem naar 3; herscoor de DDR volgens het ankermodel in plaats van er een punt bij te tellen. Een INCONCLUSIVE readout verzet het anker niet en dekt ook geen B3: die gaat het onzekerhedenveld in. Een LOSER is geen anker maar een blokkade.
5. Rapporteer aan de lead: wat is geleerd, welke volgende beslissing verandert hierdoor, welk experiment kan nu gestart of aangepast worden.

Doelbestanden: `07b_VALIDATION/Experiment-Readouts.md` (format: Experiment-Readout-Template), `02_DATA-BASELINE/Evidence-Registry.md`, de betreffende `09_DECISION-LOG/DDR-HX-NN.md` en `09_DECISION-LOG/Decision-Coverage-Matrix.md`. Alle vier, altijd; een half verwerkte learning is erger dan geen, want de matrix liegt dan.

**Wat een readout met de go doet.** Een readout wijzigt de DDR, en volgens de vervalregel van het Gate-Record zou dat elke go laten vervallen, ook op een component dat door dat experiment juist beter onderbouwd is dan ooit. Daarom één scherp afgebakende uitzondering, uit het protocol onder "Wat een experiment-readout met het Gate-Record doet":

| Uitkomst | Wat er met de go gebeurt |
|---|---|
| WINNER, status naar PERMANENT | De go blijft staan. De update maakt de beslissing sterker, niet anders. Log een regel in het Decision-Log met een verwijzing naar het Learning Record |
| INCONCLUSIVE, status blijft APPROVED | De go blijft staan |
| LOSER, status naar BLOCKED | De go vervalt onmiddellijk en het component gaat uit de build |
| Een readout die de ontwerpbeslissing zelf verandert, niet alleen haar status | De go vervalt: dit is een nieuwe beslissing en gaat opnieuw door de poort |

De Learning Extractor schrijft zelf **geen** Gate-Record. Zijn output is een Learning Record; de poort is alleen aan de orde als er een nieuwe of gewijzigde beslissing uit voortkomt, en dan draait de Red Team-rol die toets apart en met eigen isolatie-bewijs.

### Wat de red team NIET doet

Geen eigen DDR's schrijven, geen richtingen schrijven, geen voorkeur uitspreken voor welke richting de lead moet kiezen, geen Figma-instructies geven, geen oordeel over de strategie zelf: alleen over de kwaliteit van het beslisproces. Vind je de strategie zwak, formuleer het als blinde vlek of aanname in de fase-review en laat de beslissing bij de lead en design-os-specialist.

Bij de Direction Case-toets betekent dit concreet: je oordeelt of een richting deugdelijk onderbouwd en voldoende onderscheidend is, nooit of hij de beste weddenschap is. Zodra de poort een voorkeur uitspreekt, wordt de keuzesessie een bevestiging in plaats van een keuze.

## Anti-patterns

- Red Team draaien in dezelfde context die de DDR's schreef: het model verdedigt zijn eigen werk en de poort wordt theater.
- Alleen een totaalscore rapporteren zonder de gefaalde vraagnummers: de Decision Compiler weet dan niet wat te repareren en gokt.
- Streng zijn op vorm en mild op inhoud: een prachtig geformatteerde DDR met een opgeblazen evidence score is precies wat je moet vangen.
- "Geen data gevonden" als blokkade behandelen: absent evidence is een onzekerheid, geen negatief bewijs; onterecht blokkeren maakt de poort ongeloofwaardig.
- De go/no-go mondeling of impliciet geven, of alleen als regel in het Decision-Log: zonder Gate-Record met isolatie-bewijs kan niemand achteraf aantonen dat de poort echt onafhankelijk gepasseerd is, en dan is de poort precies zo veel waard als het woord van de sessie die het werk schreef.
- Een DDR na de review "nog even" bijwerken en de oude go laten staan: het Gate-Record vervalt bij wijziging, en een verlopen go is hoe niet-getoetste componenten in een klantpresentatie belanden.
- Zelf toetsen omdat een subagent spawnen omslachtig voelt: dat is exact de situatie waarvoor de isolatie-regel bestaat, en het model verdedigt dan zijn eigen werk.
- Learnings alleen in het readout-bestand zetten en de matrix vergeten: de volgende hypothese-ronde hertest dan een bewezen loser.
- Een INCONCLUSIVE als LOSER wegschrijven omdat het voelt als falen: je blokkeert dan een patroon zonder bewijs en verarmt de backlog.
- Fase-reviews overslaan bij "duidelijke" fases: de eerste case (juli 2026) ving juist daar niet-gedekte claims die al in templates stonden.
- Bij `traject-omvang: light` een gate versoepelen "omdat het een klein traject is": P8 schaalt volume, nooit een kwaliteitsregel, dus minimumscore 3, de ankerregels, de veto-vragen en het Gate-Record gelden onverkort. Wie de lat lager wil, vraagt om een expliciet risico-akkoord van de lead dat in het Gate-Record gelogd wordt.
- Zelf de statistiek van een experiment overdoen: dat is cro-ab-statistics werk; jij verwerkt het oordeel, dubbel rekenwerk geeft tegenstrijdige conclusies.

## Output-formaat

**Per DDR** (append in de review-output, daarna samenvatting naar Decision-Log):

```markdown
---
DDR: [ID]
Status oordeel: APPROVED / NEEDS STRONGER EVIDENCE / BLOCKED
Score: [X]/12 (verloren op vraag [nrs])
Sterke punten: [lijst]
Zwakke punten: [lijst]
Aanbeveling: [concrete actie voor de Decision Compiler of de lead]
---
```

**Samenvatting na alle DDR's**: tellers per oordeel, top-3 kritieke gaten, Go / No-Go voor Figma MCP plus voorwaarden.

**Gate-Record** (verplicht, in `11_RED-TEAM/Gate-Records.md`, format daar): datum en tijd, type toets, uitvoeringsvorm, traject-omvang (P8), isolatie-bewijs, bevestiging dat deze context het werk niet schreef, volledige lijst getoetste ID's, geladen bronbestanden, laatste wijzigingsdatum van de items, oordeel per item, samenvattend oordeel en voorwaarden. Daarna 1 regel in `09_DECISION-LOG/Decision-Log.md` met een verwijzing naar het recordnummer.

**Fase-review** (naar `11_RED-TEAM/Red-Team-Review-Fase-[N].md`):

```markdown
# Red Team Review, Fase [N], [datum]
Beoordeelde documenten: [lijst]
Dimensie 1-7: bevinding plus ernst per dimensie
Top 3 zwakke plekken: [lijst]
Acties: [naar Open-Questions/Assumptions of correcties in de fasedocumenten]
Beslissing: fase vrijgegeven ja/nee plus voorwaarden
```

**Learning Record** (in `07b_VALIDATION/Experiment-Readouts.md`): L-EXP-XX-NNN met de 7 velden uit stap 1 van het Learning Extractor stappenplan, plus een afvinklijst van de 4 bijgewerkte doelbestanden.

## Dependencies

- Klantmap: `00_PLAN/Data-Governed-Design-Protocol.md`, `02_DATA-BASELINE/` (Evidence-Registry, Data-Contract), `09_DECISION-LOG/` (DDR's, Coverage Matrix, Decision-Log), `07b_VALIDATION/`, `11_RED-TEAM/`
- Stencil-templates: Agent-2-Red-Team-Evidence-QA.md, Agent-4-Learning-Extractor.md, Red-Team-Review-Template.md, Experiment-Readout-Template.md uit `design-os-setup/client-stencil/`
- de gedragsbron-tool en de zoekbron-tool (profile per klant): steekproefsgewijs claims narekenen bij twijfel over een metric
- Een aparte sessie of subagent-run als uitvoeringsvorm (Agent tool of verse Cowork-sessie)

## Integratie met andere skills

- **design-os-specialist**: vraagt de fase-reviews en go/no-go aan en bewaakt dat geen fase zonder jouw vrijgave doorloopt.
- **design-os-directions**: levert de Direction Cases (aantal is de laagste van de echte forks in de evidence en `traject-omvang` P8, met een ondergrens van drie) die jij toetst met de 8-vragen routine vóórdat de lead kiest; jij schrijft nooit zelf een richting en spreekt geen voorkeur uit voor welke richting gekozen moet worden.
- **design-os-hypotheses-ddr**: schrijft de DDR's die jij toetst en verwerkt jouw aanbevelingen; jij schrijft nooit zelf DDR's.
- **design-os-figma-build**: bouwt uitsluitend na jouw gedocumenteerde go, en alleen DDR's met status APPROVED of PERMANENT; voert DDR-updates na experimenten door in Figma.
- **design-os-evidence**: eigenaar van de Evidence Registry; jij levert E-AB-items aan, zij bewaken registry-structuur en scores.
- **cro-experimentation en cro-ab-statistics**: ontwerpen en lezen de experimenten statistisch uit (SRM-check, significantie); jij verwerkt het uitgelezen resultaat in de kennisbasis.
- **knowledge-capture**: neemt cross-klant patronen uit Learning Records over naar de centrale knowledge-base.

## Tips

- Lees de Evidence Registry vóór de DDR's: wie eerst de claims leest en dan het bewijs, neemt de framing van de schrijver over.
- Reken per batch minimaal 1 evidence-verwijzing na tot in de bron (het E-item zelf, zo nodig de query): 1 gebroken verwijzing voorspelt meestal meer.
- Vuistregel: kost een DDR-review minder dan 10 minuten, dan heb je de conflicten- en onzekerhedenvelden waarschijnlijk overgeslagen.
- Formuleer aanbevelingen als handeling ("voeg guardrail support-tickets toe"), niet als oordeel ("guardrails zwak"): dat scheelt een hele reviewronde.
- Een hoge score met een leeg onzekerhedenveld is verdacht: echte evidence-chains hebben altijd gaten, perfectie wijst op invuloefening.
- BLOCKED patronen zijn verkoopmateriaal: "dit doen we bewust niet, jullie eigen test bewees dat het schaadt" overtuigt klanten meer dan winnaars.
- Plan de Learning Extractor direct na het statistische oordeel van cro-ab-statistics, niet weken later: context over segmenten en guardrails vervliegt snel.
- Als de lead onder deadline-druk om een soepeler oordeel vraagt: bied een expliciet gelogd risico-akkoord aan (de lead tekent voor de uitzondering, met het risico benoemd in het Gate-Record) in plaats van de score te buigen.
- Vul het veld "laatste wijzigingsdatum getoetste items" echt in en niet op gevoel: dat veld is wat een verlopen go later zichtbaar maakt, en het kost 1 blik in de bestandsgeschiedenis.

*Herzien wanneer het Data-Governed Design Protocol, de 12-vragen routine, de 8-vragen richtingtoets of het Gate-Record-format structureel wijzigen.*
