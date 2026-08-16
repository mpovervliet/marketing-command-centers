# Data-Governed Design Protocol
Versie: 0.2 (stencil)
Status: TEMPLATE, invullen bij intake
Geldt voor: alle [KLANT] redesign-beslissingen

## Principe

Elke ontwerpkeuze op [SITE] moet herleidbaar zijn naar alle relevante beschikbare data. Smaak, gewoonte en aannames gelden niet als bewijs.

De keten is ondeelbaar:

```
Ruwe data
  → Evidence Item (E-[BRON]-[CATEGORIE]-[NR])
    → Insight (I-XXX)
      → Hypothesis (H-XX)
        → Design Decision Record (DDR-H[X]-[NN])
          → Figma component (C-XX)
            → Experiment (EXP-XX)
              → Learning (L-EXP-XX-NNN)
                → Update systeem
```

Geen stap mag worden overgeslagen. Een DDR zonder gekoppeld Evidence Item is ongeldig.

## No Evidence, No Design: 10 verplichte vragen

Voor elke ontwerpkeuze die naar Figma gaat, moeten onderstaande vragen beantwoord zijn. Niet alle vragen hoeven "ja" als antwoord te hebben, maar ze moeten allemaal expliciet zijn beantwoord, inclusief "onbekend" of "ontbreekt".

1. Welke gebruikersintentie bedient deze keuze?
2. Welke frictie of kans wordt opgelost?
3. Welke eigen [KLANT]-data (gedragsdata, zoekdata, eigen experimenten, survey) ondersteunt dit?
4. Welke kwalitatieve data (reviews, exit-survey, support) ondersteunt dit?
5. Welke concurrentie- of marktdata ondersteunt dit?
6. Welke UX/CRO best-practice ondersteunt dit?
7. Welke primary KPI wordt geraakt?
8. Welke guardrail mag niet verslechteren?
9. Welke onzekerheden of ontbrekende data zijn er? (verplicht veld, mag niet leeg)
10. Hoe wordt de keuze gemeten na livegang?

## Evidence Score

Elke Design Decision Record krijgt een score van 0 tot 5. De score meet **bewijskracht**, niet het
aantal bronnen. Hij wordt in drie stappen bepaald: de sterkste geldige bron zet de bodem, eigen
breedte tilt op, en externe breedte telt pas mee boven de drempel.

> Waarom zo: een score die brontypes telt, spreekt de betrouwbaarheidshierarchie hieronder tegen.
> Eén gewonnen eigen experiment is causaal bewijs bij deze klant en hoort niet lager te staan dan
> drie zwakke bronnen die toevallig van verschillend type zijn.

### Stap 1: het anker bepaalt de bodem

Zoek de sterkste bron in de Evidence Chain die **geldig** is (niet verlopen volgens de data decay
policy) en **op deze beslissing** slaat. Die bron is het anker.

| Anker | Wat het is | Bodem |
|-------|-----------|-------|
| T1 | Een eigen **gecontroleerde** meting van deze ingreep met een significant effect **in de richting die deze beslissing ondersteunt**. Bij evidence-regime `vol` betekent dat een experiment met controlegroep. Bij `dun` telt ook een uitgerolde wijziging met een duidelijke breuk in een voor-na-meting of een gefaseerde uitrol, maar alleen met de onderbouwing die onder deze tabel staat | 3 |
| T2 | Eigen kwantitatieve gedrags-, zoek-, CRM- of backend-data die de frictie direct meet | 2 |
| T3 | Eigen kwalitatief klantonderzoek: exit-survey, recordings, support- of verkoopsignaal, review-mining van de eigen klant | 2 |
| T4 | Alleen extern bewijs: concurrent-benchmark, best-practice, patroonbibliotheek, gepubliceerde effectstudie | 1 |
| T5 | Alleen redenering of analogie, of een lege Evidence Chain | 0 |

Een voor-na-meting of een gefaseerde uitrol is bij `vol` **geen** T1. Wie een gecontroleerd
experiment kan draaien en het niet deed, heeft geen causaal bewijs maar een samenval in de tijd.
Bij `dun` zijn beide vormen wel een T1-anker, maar alleen als drie dingen expliciet in het
Evidence Item staan: de meetperiode voor en na, wat er in diezelfde periode nog meer veranderde
(campagnes, seizoen, prijs, voorraad), en waarom de breuk niet aan die andere oorzaken toe te
schrijven is. Ontbreekt die onderbouwing, dan is het item T2, geen T1.

Twee metingen zijn geen T1, ongeacht het regime:

- **Een meting met een significant negatief effect op deze ingreep.** Dat is geen sterk anker maar
  een blokkade: de beslissing gaat naar BLOCKED en de score is niet meer relevant. Zonder deze
  regel zou het bewijs dat een ontwerp schaadt de score naar de productiedrempel tillen.
- **Een meting zonder significant effect.** Dat is geen bewijs voor en geen bewijs tegen. Zo'n
  item is geen anker en dekt ook geen bewijscategorie; het hoort in het onzekerhedenveld. Zie de
  absent evidence trap verderop.

### De bewijscategorieën

| Categorie | Wat erin valt | Eigen of extern |
|-----------|---------------|-----------------|
| B1 | Eigen kwantitatief gedrag: funneldata, zoekdata, CRM- of backend-data | eigen |
| B2 | Eigen kwalitatief: survey, recordings, support- en verkoopsignaal, eigen reviews | eigen |
| B3 | Eigen experiment met een gemeten effect: gecontroleerd experiment, voor-na-meting, gefaseerde uitrol. Een experiment zonder significant effect dekt deze categorie niet | eigen |
| B4 | Extern marktbewijs: concurrent-benchmark, gepubliceerde effectstudie (`E-CASE`, `E-COMP`, `E-PERS`, `E-TREND`) | extern |
| B5 | Patroon en best-practice: principe-bronnen en patroonbibliotheken (`E-REF`, `E-MOB`) | extern |

Deze letters staan los van de sectieletters van de Evidence Registry. Registry-sectie B is niet
bewijscategorie B2; de registry ordent waar een item vandaan komt, deze tabel wat het waard is.

Vier teluitgangspunten:

- **Eén Evidence Item dekt precies één categorie**, de categorie die het item het best beschrijft.
  Een gefaseerde uitrol die je in funneldata meet is B3, niet B3 plus B1.
- **Het ankeritem verbruikt zijn eigen categorie**, ook wanneer het ankerniveau en de categorie
  niet samenvallen. Een voor-na-meting bij `vol` is anker T2 en categorie B3: die B3 is dan
  verbruikt en telt niet nog eens als breedte mee. Dit is het geval waarin fout tellen precies één
  punt scheelt en dus productie versus concept bepaalt.
- **Meerdere items binnen één categorie tellen als één.** Twee funnelrapporten zijn niet twee bronnen.
- **Een categorie telt alleen mee als hij inhoudelijk gedekt is.** Eén losse screenshot of één
  terloopse opmerking dekt geen categorie. De vuistregel is dat het item op zichzelf een eigen
  Evidence Item met bron, datum en bevinding waard is, en dat het over déze beslissing en over
  déze frictie gaat. Een eigen bron die relevant is maar de frictie niet raakt, dekt geen
  categorie. Referentieschermen (`E-REF`, `E-MOB`) tellen alleen als ze in de Evidence
  Chain-tabel van de DDR staan, niet als ze alleen in de referentie-sectie eronder hangen.

### Stap 2: eigen breedte tilt op

Tel de **eigen** categorieën (B1, B2, B3) die naast het anker gedekt zijn. Elke categorie is plus 1.
De uitkomst van stap 1 plus stap 2 heet het **eigen subtotaal**.

### Stap 3: externe breedte, alleen boven de drempel

Is het eigen subtotaal 3 of hoger, dan telt er **plus 1** bij wanneer B4 of B5 gedekt is. Samen
leveren de externe categorieën nooit meer dan plus 1, hoeveel items erin ook zitten.

Is het eigen subtotaal 2 of lager, dan **is dat de score**. Extern bewijs verandert er niets aan.

Twee plafonds sluiten de berekening af: de score is nooit hoger dan 5, en zonder een T1-anker
nooit hoger dan 4.

> Dit is de kern van het model. Extern bewijs mag een keten die al op eigen benen staat mooier
> maken; het mag een keten die dat niet doet nooit over de productiedrempel tillen. Het is dezelfde
> regel die in fase 5b voor ontwerprichtingen geldt: eigen data rechtvaardigt **of** je de
> weddenschap aangaat, extern bewijs informeert alleen **hoe** je hem uitvoert.

### De vier harde regels

1. **Extern bewijs telt pas mee vanaf een eigen subtotaal van 3**, en levert samen maximaal plus 1.
2. **Score 5 alleen met een T1-anker**; zonder T1-anker is 4 het maximum. Maximaal verdedigbaar
   bestaat niet zonder eigen causaal bewijs.
3. **Verlopen items tellen niet mee**, niet als anker en niet als breedte. Zie de data decay policy.
4. **De score draagt altijd zijn anker**: noteer `4/5 (anker T1)`, nooit een kaal getal. Twee DDR's
   met dezelfde score maar een ander anker zijn niet even sterk, en dat moet leesbaar blijven.

Zijn er twee ankerkandidaten met dezelfde bodem, kies dan de hoogste in de
betrouwbaarheidshierarchie hieronder. T2 gaat dus vóór T3. Dat verandert de score niet, alleen het
label, en dat label moet vergelijkbaar blijven tussen DDR's.

### Wat dit oplevert in de praktijk

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

Minimum voor Figma-productie: score 3. Score 0-2 is concept only, en een 0 hoort geen DDR te
worden: schrijf er eerst een hypothese en een meetplan bij.

De **drempel** verandert niet met het evidence-regime. Wat wel verschilt is hoe zwaar dezelfde
meting weegt: wie een gecontroleerd experiment kán draaien wordt daarop afgerekend, dus bij `vol`
is een voor-na-meting T2 en bij `dun` kan hij T1 zijn. Dat is bewust: de lat ligt voor iedereen op
3, maar je moet het beste bewijs leveren dat in jouw situatie haalbaar is. Bij `dun` is de tweede
eigen categorie meestal de route: een handvol klantgesprekken of een consistent supportsignaal is
daar vaak het beste bewijs dat te krijgen valt, en het telt volwaardig als B2.

### Naam en overgangsregel voor bestaande DDR's

Deze score heette eerder "Evidence Completeness Score". Die naam beschreef het oude breedte-model
en is vervallen: er wordt geen volledigheid meer gemeten. Kom je de oude naam nog tegen in een
klantmap, dan verwijst hij naar hetzelfde veld en herscoor je volgens onderstaande regel.

Scores die onder het oude breedte-model zijn toegekend, blijven staan tot de DDR voor iets anders
wordt aangeraakt; herscoor dan volgens dit model. Een herscore is administratie en laat het
Gate-Record in stand, **tenzij de status verandert**. Dan geldt per richting:

| Verschuiving | Wat er gebeurt |
|---|---|
| Omhoog, van NEEDS VALIDATION naar APPROVED | Nieuwe vrijgave: het item gaat opnieuw door de poort voordat er iets mee gebouwd wordt |
| Omlaag, van APPROVED naar NEEDS VALIDATION | De go vervalt. Is er al gebouwd, dan blijft het component staan maar wordt het gemarkeerd als concept en gaat het niet mee in een klantstuk of een release zonder expliciet gelogd risico-akkoord van de lead. Meld het actief, want dit is precies het geval dat anders stil blijft liggen |

Een legacy-DDR zonder ankernotatie is niet fout maar ongescoord volgens dit model. Het Red Team
stuurt hem daarvoor niet terug; het noteert "nog niet herscoord" en herscoort bij de eerstvolgende
inhoudelijke aanraking. De ankerverdeling in de Coverage Matrix telt zulke DDR's in een aparte rij
"nog niet herscoord", zodat het gemiddelde geen twee schalen door elkaar middelt.

## Conflict resolution protocol

Als databronnen tegenstrijdige signalen geven:

1. Benoem het conflict expliciet in het DDR onder "Conflicten".
2. Geef elke bron een betrouwbaarheidslabel: Hoog / Middel / Laag.
3. Ga uit van de bron met de hoogste betrouwbaarheid, tenzij meerdere lagere bronnen consistent zijn.
4. Leg de beslissing voor aan de lead voor validatie als het conflict niet oplosbaar is.
5. Noteer in het DDR welke bron is gevolgd en waarom.

Betrouwbaarheidshierarchie:
```
A/B-test (intern, significante n)
  > de gedragsbron kwantitatief (harde funneldata)
    > Exit-survey / direct klantonderzoek (noteer n)
      > Review-mining (reviewplatforms, indirect)
        > Competitor-benchmark (extern, context)
          > Best-practice, bijv. Baymard (principe, niet klantspecifiek)
            > Redenering / aanname
```

## Data decay policy

Evidence Items hebben een maximale houdbaarheid:

| Brontype | Maximale ouderdom voor gebruik in DDR |
|----------|---------------------------------------|
| Funneldata uit de gedragsbron | 6 maanden |
| Positiedata uit de zoekbron | 3 maanden |
| A/B-testresultaten | 18 maanden (patroon relevant) |
| Exit-survey | 12 maanden |
| Review-mining | 6 maanden |
| Competitor-benchmark | 6 maanden |
| Best-practice / Baymard | 24 maanden |
| Voor-na-meting of gefaseerde uitrol | 18 maanden, gelijk aan een experiment |
| Support-, verkoop- of servicesignaal | 6 maanden |
| Recordings en heatmaps | 6 maanden |
| CRM- of backend-data | 6 maanden |
| Referentieschermen uit patroonbibliotheken (`E-REF`, `E-MOB`) | 12 maanden |
| Gepubliceerde effectstudie (`E-CASE`) | 24 maanden |
| Persistentie-signaal (`E-PERS`) | 6 maanden sinds het laatste meetpunt |
| Concurrent-messaging (`E-COMP`) | 6 maanden |
| Trend-signaal (`E-TREND`) | 12 maanden |

Data die de grens overschrijdt mag nog worden aangehaald als achtergrond of als historische
context in de lopende tekst van een DDR, maar telt nergens mee in de score: niet als anker en
niet als gedekte categorie. "Historisch bewijs" is dus een leesbaarheidshulp, geen halve
bewijswaarde.

Een item met een onvolledige datum (alleen een jaartal, of "vorig jaar") behandel je als de
oudste mogelijke datum binnen die periode. Valt het dan buiten de grens, dan is het verlopen.
Preciseer de datum in de registry als je het item wilt blijven gebruiken.

**Bewijs verloopt zonder dat iemand iets doet.** Dat is het enige geval waarin een APPROVED stil
onwaar wordt: het Gate-Record blijft geldig, want er is niets gewijzigd, terwijl het anker eronder
is vervallen. Twee regels vangen dat af:

- Elke DDR draagt in zijn Evidence Chain de datum van het ankeritem. Bij het schrijven noteer je
  daar de **vervaldatum** van dat item bij, niet alleen de meetdatum.
- Bij elke fase-review en bij elke nieuwe DDR-batch controleert het Red Team of er APPROVED DDR's
  zijn waarvan het anker inmiddels is verlopen. Die gaan naar "nog niet herscoord" en worden bij
  de eerstvolgende aanraking herscoord. Staat er iets van in productie, dan geldt de omlaag-regel
  hieronder.

## Absent evidence trap

"We hebben dit niet gemeten" is niet hetzelfde als "dit werkt niet". In een DDR wordt onderscheid gemaakt:

- Niet gemeten = onbekend: mag als "Research Needed" worden genoteerd.
- Gemeten, geen significant effect: geen bewijs voor en geen bewijs tegen. Een niet-significant resultaat is geen bewijs van afwezigheid, zeker niet bij lage n. Resultaat: confidence-downgrade, geen blokkade.
- Gemeten, significant negatief effect: bewijs dat het schadelijk is.

Alleen "gemeten, significant negatief effect" is een harde blokkade. Bij evidence-regime `dun` is de meetvorm zwakker maar de regel identiek: het gaat om een meting, niet om een vermoeden. "Onbekend" en "geen significant effect" resulteren in confidence-downgrade, niet in blokkade.

## Gating systeem

| Status | Betekenis | Actie |
|--------|-----------|-------|
| APPROVED | Score >= 3, geen onopgeloste conflicten | Mag naar Figma |
| PERMANENT | Een APPROVED beslissing die daarna een eigen experiment heeft gewonnen. Draagt het liftpercentage en het Experiment-ID | **Mag naar Figma en naar de handoff, precies als APPROVED.** Wordt niet opnieuw ter discussie gesteld zonder nieuw bewijs. Overal waar een regel "APPROVED" eist, voldoet PERMANENT ook |
| NEEDS VALIDATION | Score 0-2, of conflict onopgelost | Alleen als concept in Figma, niet voor productie. Bij score 0: geen DDR, maar een hypothese plus meetplan |
| BLOCKED | Een eigen meting toont een significant negatief effect. Bij evidence-regime `vol` is dat doorgaans een intern experiment; bij `dun` telt ook een uitgerolde wijziging met een duidelijke breuk in een voor-na-meting, of een consistent en herhaald support- of verkoopsignaal, mits de onderbouwing expliciet is vastgelegd | Niet in Figma zonder expliciete go van de lead |
| RESEARCH NEEDED | Kritieke data ontbreekt | Eerst meten, dan beslissen |

## Figma component naming convention

Elk component in Figma krijgt een naam die de beslischain zichtbaar maakt:

```
C-[nummer]_[ComponentNaam]_DDR-H[X]-[NN]
```

Voorbeeld (fictief): `C-01_PricingCard_DDR-H1-01`. Figma-annotatie bij elk component bevat minimaal: Decision ID, Hypothese, Primary KPI, Evidence score inclusief anker (`4/5 (anker T1)`), Guardrail, Experiment ID (als bekend).

## De agent-workflow

| Agent | Rol | Waar |
|-------|-----|------|
| A, Conversion Architect | Vertaalt de lekken naar beslismomenten (BM-X), conversion architecture en site-structuur | fase 4, `03b_SITE-STRUCTURE/` en `04_STRATEGY/` |
| 0, Direction Compiler | Leidt de forks uit de evidence af, genereert het aantal onderbouwde ontwerprichtingen dat bij `traject-omvang` (P8) hoort in evenzoveel geisoleerde subagents, draait de anti-convergentie-poort | fase 5b, `05b_DIRECTIONS/` |
| 1, Design Decision Compiler | Verzamelt evidence, schrijft inzichten, maakt DDRs binnen de gekozen richting, produceert Figma-instructies | fase 6, `09_DECISION-LOG/` |
| 2, Red Team | Toetst de Direction Cases (8 vragen) en elke DDR (12 vragen) aan dit protocol. Geeft APPROVED / NEEDS STRONGER EVIDENCE / BLOCKED plus reden | fase 5b en 6, `11_RED-TEAM/` |
| 3, Figma Build Compiler | Bouwt alleen APPROVED of PERMANENT componenten van de gekozen richting | fase 7 |
| 4, Learning Extractor | Schrijft experiment-uitkomsten terug de kennisbasis in | fase 8 |

Twee isolatie-regels, beide omdat zelfcontrole en zelf-divergentie in 1 context niets vinden:

1. Agent 2 draait altijd in een aparte sessie of subagent, nooit in de context die de DDRs of de richtingen schreef.
2. De richtingen van agent 0 worden altijd in evenveel aparte parallelle subagents gemaakt als er richtingen zijn, nooit achter elkaar in 1 sessie: de eerste richting wordt anders de aantrekker en de rest worden bewerkingen ervan. Dit geldt onverkort bij `traject-omvang: light`; minder richtingen is geen reden om ze in één context te schrijven.

### Wat een experiment-readout met het Gate-Record doet

Een gewonnen of verloren experiment wijzigt de DDR: status, liftpercentage en score. Volgens de
vervalregel hieronder zou dat elke go laten vervallen, ook op een component dat door dat
experiment juist beter onderbouwd is dan ooit. Daarom één uitzondering, scherp afgebakend:

| Uitkomst | Wat er met de go gebeurt |
|---|---|
| WINNER, status naar PERMANENT | De go blijft staan. De update maakt de beslissing sterker, niet anders. Noteer het nieuwe recordnummer niet, maar wel een regel in het Decision-Log met een verwijzing naar het Learning Record |
| INCONCLUSIVE, status blijft APPROVED | De go blijft staan |
| LOSER, status naar BLOCKED | De go vervalt onmiddellijk en het component gaat uit de build |
| Een readout die de ontwerpbeslissing zelf verandert, niet alleen haar status | De go vervalt: dit is een nieuwe beslissing en gaat opnieuw door de poort |

De Learning Extractor schrijft geen Gate-Record. Zijn output is een Learning Record; de poort is
alleen aan de orde als er een nieuwe of gewijzigde beslissing uit voortkomt.

Deze uitzondering is scherp begrensd en mag nergens ruimer worden geformuleerd: hij geldt
**alleen** voor een statuswijziging die uit een experiment-readout komt. Elke andere wijziging van
een getoetst item, ook een herscore, een toegevoegd Evidence Item of een aangepaste guardrail,
laat het record gewoon vervallen.

### Het Gate-Record

De isolatie-regel voor agent 2 hierboven is aantoonbaar gemaakt met het **Gate-Record** in
`11_RED-TEAM/Gate-Records.md`. Elke run van agent 2 levert er een, met isolatie-bewijs (run- of sessie-ID), de volledige lijst getoetste ID's en de laatste wijzigingsdatum van die items. Drie regels geven het record tanden: een record dekt alleen wat er letterlijk in staat, het vervalt zodra een getoetst item daarna is gewijzigd, en zonder isolatie-bewijs is het ongeldig. Afnemers controleren vier punten voordat ze bouwen: isolatie-bewijs ingevuld met "schreef deze context het werk" op nee, de te gebruiken ID's staan letterlijk in de lijst, het record is jonger dan de laatste wijziging van die items, en het oordeel is GO met afgehandelde voorwaarden. Een go zonder record telt niet.

Cowork mag pas Figma MCP aanroepen na Red Team APPROVED op de betreffende DDRs, en pas nadat de richting gekozen en gelogd is. Prompts: `10_PROMPTS-AND-AGENTS/`.

## Wat dit protocol NIET doet

- Het blokkeert niet alle beslissingen met ontbrekende data: het maakt onzekerheden zichtbaar.
- Het vervangt het Hypothesis-Backlog niet: het vertaalt hypothesen naar uitvoerbare besluiten.
- Het vervangt de Design Brief niet: de Brief is de samenvatting; het Evidence-Register is de bron.
- Het vervangt de Red Team Reviews niet: die toetsen outputkwaliteit, dit protocol toetst besliskwaliteit.

## Onderbouwing van ontwerprichtingen (fase 5b)

Een ontwerprichting is geen DDR maar een weddenschap, en heeft daarom een eigen bewijsstandaard. De scheiding die de betrouwbaarheidshierarchie hierboven intact houdt:

> Eigen klantdata rechtvaardigt **of** we de weddenschap aangaan. Extern bewijs informeert alleen **hoe** we hem uitvoeren en of het patroon op schaal levensvatbaar is.

| Laag | Wat | Rol | Minimum per richting |
|------|-----|-----|----------------------|
| 1 | Eigen data (gedragsdata, zoekdata, eigen experimenten, survey, reviews) | Draagt de weddenschap | 1 kwantitatief item, verplicht |
| 2 | `E-CASE`, `E-PERS`, `E-COMP`, `E-TREND` | Versterkt de uitvoering | 2 items, waarvan minimaal 1 E-CASE of E-PERS |
| 3 | `E-REF`, `E-MOB` | Patroon-adoptie en visuele taal | vrij |

Regels voor laag 2:

- `E-CASE`: gepubliceerde effectstudie met bron, URL, datum, n en methode. Betrouwbaarheid Middel, nooit Hoog: gemeten effect, maar niet bij deze klant.
- `E-PERS`: patroon dat 18 maanden of langer overleeft bij een concurrent, inclusief door een redesign heen. Verplicht twee meetpunten met datum en URL. Een screenshot van alleen vandaag is adoptie op 1 moment en telt niet.
- `E-COMP`: wat concurrenten feitelijk beloven in advertenties en SERP. Betrouwbaarheid Middel.
- `E-TREND`: opkomend patroon zonder gemeten effect. Betrouwbaarheid Laag, mag meeliften maar nooit alleen dragen.

En de regel die nergens onderhandelbaar is: dat een concurrent een patroon voert bewijst niet dat het werkt. Adoptie is geen effect.

## Bronbestanden die dit protocol voedt

| Bestand | Rol in protocol |
|---------|----------------|
| `02_DATA-BASELINE/Data-Contract.md` | Definitie welke metrics betrouwbaar zijn |
| `02_DATA-BASELINE/Evidence-Registry.md` | Alle Evidence Items |
| `05_HYPOTHESES/Hypothesis-Backlog.md` | Alle hypothesen (H-XX) |
| `05_HYPOTHESES/Screen-To-Hypothesis-Matrix.md` | Koppeling scherm-hypothese-KPI |
| `05b_DIRECTIONS/` | De ontwerprichtingen (aantal uit `traject-omvang` P8), hun onderbouwing en de gekozen weddenschap |
| `06_DESIGN/Design-Brief.md` | Data-to-design vertaaltabel |
| `09_DECISION-LOG/` (DDRs) | Alle DDRs per component |
| `09_DECISION-LOG/Decision-Coverage-Matrix.md` | Status-overzicht alle beslissingen |
| `11_RED-TEAM/` | Red Team audit output |
