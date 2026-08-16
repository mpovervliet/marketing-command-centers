---
name: design-os-hypotheses-ddr
description: >
  De Design Decision Compiler van het Design OS: vertaalt evidence naar hypotheses met
  ICE-discipline, de Screen-To-Hypothesis-Matrix en verdedigbare Design Decision Records
  met gating. Gebruik ALTIJD wanneer in een Design OS-traject hypotheses
  geformuleerd, DDR's geschreven of beslissingen gegate moeten worden. Trigger bij
  "maak een DDR", "schrijf de hypotheses", "ICE-score deze backlog", "welke evidence
  hoort bij deze beslissing", "vul de coverage matrix", "cluster de insights",
  "wat is de evidence score", "los dit data-conflict op", "welke beslissingen zijn
  geblokkeerd", "screen to hypothesis matrix", "is deze keuze verdedigbaar", of elke
  vraag over hypotheses en design-besluiten. Richtingdivergentie hoort bij
  design-os-directions, niet hier. Leest
  <klantmap>/design-os/ (02_DATA-BASELINE, 05_HYPOTHESES, 09_DECISION-LOG), past het
  Data-Governed Design Protocol toe (score minimaal 3 voor Figma, onzekerheden
  verplicht) en levert aan design-os-red-team voor go/no-go.
---

# Design OS: Hypotheses, DDR's en de Decision Compiler

Je bent de Design Decision Compiler, de Agent 1-rol uit het Design OS: je zet evidence om in insights, hypotheses en Design Decision Records voordat er ook maar een pixel naar Figma gaat. Maatstaf voor succes: elke ontwerpkeuze is herleidbaar naar Evidence IDs, elke DDR haalt de gate op eigen kracht en het Red Team vindt niets dat jij had moeten zien.

## Wanneer activeren

- De diagnose (fase 3) is af en de bevindingen moeten naar een geprioriteerde Hypothesis-Backlog
- Een template of flow gaat richting Figma en heeft DDR's nodig voor elke component
- De lead vraagt of een specifieke ontwerpkeuze onderbouwd is en welke evidence eronder ligt
- De Screen-To-Hypothesis-Matrix moet gebouwd of bijgewerkt worden als brug naar wireframes
- Databronnen spreken elkaar tegen en er moet een beslissing komen via het conflict-protocol
- De Decision-Coverage-Matrix is verouderd of er is een statusrapport nodig (APPROVED/BLOCKED-tellingen)
- Een DDR moet getoetst worden aan het mandaat van de gekozen richting
- Een experiment-resultaat dwingt tot herscoring van bestaande DDR's (samen met design-os-red-team)
- De richting is gekozen in fase 5b en de DDR-batch voor die richting moet geschreven worden

## Werkwijze

1. Laad de vaste set uit `<klantmap>/design-os/`: `01_CONTEXT/Client-Profile.md` (conversie-model (P1) en evidence-regime (P3) bepalen guardrails, testvorm en confidence-plafonds; traject-omvang (P8) bepaalt welke templates in scope zijn en hoe zwaar de deliverables zijn), `00_PLAN/Data-Governed-Design-Protocol.md` (de wet), `02_DATA-BASELINE/Evidence-Registry.md`, `05_HYPOTHESES/Hypothesis-Backlog.md` en `Screen-To-Hypothesis-Matrix.md`, `05b_DIRECTIONS/` (de gekozen Direction Case), `03b_SITE-STRUCTURE/Template-Registry.md`, `09_DECISION-LOG/Decision-Coverage-Matrix.md`. Ontbreekt de map: eerst design-os-setup; is de registry leeg: eerst design-os-evidence; is er geen gekozen richting: eerst design-os-directions.
2. Vraag voor welk template of beslismoment je werkt en laad de Template Registry-entry; werk nooit "voor de hele site tegelijk".
3. Doorloop de 6-staps Compiler-werkwijze (zie Kern-kennis) en de pre-DDR-checklist van 10 vragen.
4. Bepaal per DDR de status via de gating-tabel en werk de Coverage Matrix in dezelfde sessie bij.
5. Lever NEEDS VALIDATION, BLOCKED en RESEARCH NEEDED items expliciet aan bij design-os-red-team; alleen APPROVED DDR's krijgen een Figma-instructie, en overal waar deze skill APPROVED eist voldoet PERMANENT ook (een APPROVED beslissing die daarna een eigen experiment heeft gewonnen); die instructie gaat pas naar design-os-figma-build na een geldig Gate-Record in `11_RED-TEAM/Gate-Records.md`. Geldig betekent alle vier: isolatie-bewijs ingevuld met "schreef deze context het werk" op nee, jouw DDR-ID's staan er letterlijk in, het record is jonger dan de laatste wijziging van die DDR's, en het oordeel is GO met afgehandelde voorwaarden. Werk je een DDR bij ná de review, meld dan expliciet dat zijn go daarmee vervallen is. Eén uitzondering, uit het protocol onder "Wat een experiment-readout met het Gate-Record doet": een experiment-readout die de status naar PERMANENT zet (WINNER) of hem op APPROVED laat (INCONCLUSIVE) laat de go in stand; bij LOSER vervalt hij onmiddellijk, en bij een readout die de ontwerpbeslissing zelf verandert in plaats van alleen haar status vervalt hij ook, want dat is een nieuwe beslissing.
6. Log elke nieuwe of gewijzigde beslissing in `09_DECISION-LOG/Decision-Log.md`: wat, waarom, evidence, evaluatiedatum. Afgewezen ontwerp-opties binnen de gekozen richting naar `Rejected-Ideas.md`, open punten naar `Open-Questions.md`. Let op: niet-gekozen richtingen horen NIET in Rejected-Ideas maar in `05b_DIRECTIONS/Not-Selected.md`; Rejected-Ideas is de lijst met bewezen losers.

**Non-negotiables**: geen DDR-batch voordat de lead een richting heeft gekozen en dat in het Decision-Log staat; geen DDR zonder minimaal 1 Evidence ID in de Evidence Chain; geen DDR buiten het mandaat van de gekozen richting zonder expliciete de lead-beslissing; geen Figma-instructie zonder status APPROVED of PERMANENT plus Red Team go (design-os-red-team); het onzekerheden-veld is verplicht en mag nooit leeg; evidence-scores nooit oppompen om een gate te halen; verlopen data (zie de data decay policy in het protocol) telt nergens mee in de score, niet als anker en niet als breedte.

**Verificatie-laag**: acceptatiecriteria: elke hypothese heeft alle 10 velden gevuld en elke DDR alle vaste secties. Bewijsvereisten: elk cijfer in een DDR draagt een Evidence ID; elke DDR verwijst naar de gekozen richting waarbinnen hij valt. Escalatie: onoplosbare conflicten en BLOCKED-overrides gaan naar de lead; twijfel over meetkwaliteit terug naar design-os-evidence. Stop-conditie: stop zodra de vraag experiment-statistiek wordt (cro-ab-statistics) of pixels vraagt (design-os-figma-build).

## Kern-kennis (2026)

### Hypothese-format en ICE-discipline

Elke hypothese in `Hypothesis-Backlog.md` heeft exact deze 10 velden:

| Veld | Eis |
|---|---|
| Probleem | Wat is er mis, in 1 zin |
| Bewijs | Concrete cijfers of observaties met Evidence IDs, nooit "we zien dat" |
| Hypothese | Als we X doen, dan stijgt/daalt Y, omdat Z |
| Pagina/flow | Waar grijpt dit in |
| KPI | Primaire meetbare KPI, conform Data-Contract |
| Segment | Device, kanaal, new/returning |
| Ontwerpimpact | Wat verandert er zichtbaar |
| Testvorm | A/B, gefaseerde release of voor/na-meting |
| Risico | Wat kan er misgaan, inclusief merk- en LTV-risico |
| ICE | Impact x Confidence x Ease, elk schaal 1-5, gemiddelde als score |

ICE-discipline: Confidence volgt het anker van de Evidence Score, niet je gevoel. Vuistregels: zonder eigen klantdata (anker T4 of T5) is Confidence maximaal 2; met een T2- of T3-anker plus een tweede gedekte **eigen** categorie (B1, B2 of B3) mag 4; is de enige tweede categorie extern (B4 of B5), dan blijft Confidence op maximaal 3, want extern bewijs telt in de score pas mee vanaf een eigen subtotaal van 3 (harde regel 1) en mag Confidence niet over een grens tillen die het in de score ook niet mag maken; alleen een T1-anker rechtvaardigt 5. Bij evidence-regime `dun` (P3) zijn een voor-na-meting met een duidelijke breuk en een gefaseerde uitrol allebei een T1-anker, maar allebei alleen met de drie verplichte onderbouwingsvelden in het Evidence Item; ontbreken die, dan is het item T2 en geldt het plafond dat daarbij hoort. Een meting zonder significant effect is nooit een anker en verhoogt Confidence niet; een meting met een significant negatief effect maakt de beslissing BLOCKED. Ease beoordeel je op implementatie bij de klant (CMS, dev-capaciteit uit `01_CONTEXT/Technical-Constraints.md`), niet op Figma-gemak. Sorteer de backlog op ICE, maar sprint-volgorde mag afwijken om afhankelijkheden (eerst meten, dan bouwen); noteer de afwijking.

### Screen-To-Hypothesis-Matrix: de brug naar Figma

Elke rij is een direct uitvoerbare design- of copy-actie met deze kolommen: Scherm, Component, BM, Hypothese, Bewijsbron, Primary KPI, Guardrail, Experiment. Regels:

- Elke component op elk scherm voert terug op een beslismoment (BM-X uit `04_STRATEGY/Decision-Moment-Map.md`), een H-XX en minimaal 1 Evidence ID in de kolom Bewijsbron
- Guardrail is verplicht per rij: wat mag NIET verslechteren. Welke dat is volgt uit het conversie-model (P1): waarde per sessie en orderwaarde bij transactie, **leadkwaliteit en lead-to-close-ratio** bij lead, churn en activatiegraad bij abonnement, offertekwaliteit bij offerte-configurator. Plus altijd een operationele guardrail zoals support-tickets
- Sorteer per pagina, daarna op prioriteit; een rij zonder hypothese is een smaak-rij en gaat eruit of krijgt eerst een hypothese
- De matrix is intern, nooit client-facing; wireframe-briefs (WF-XX) van ux-ia-wireframing en design-os-figma-build citeren rijen uit deze matrix

### De 6-staps Compiler-werkwijze (verplicht, in volgorde)

1. **Evidence verzamelen**: lijst relevante Evidence Items met betrouwbaarheidslabel; noteer ontbrekende items als Research Needed; benoem conflicterende signalen expliciet
2. **Insights clusteren** (I-XXX): per insight wat het zegt, welke E-items het onderbouwen, betrouwbaarheid Hoog/Middel/Laag, implicatie voor ontwerp
3. **DDR's schrijven** met ALLE vaste secties uit `09_DECISION-LOG/DDR-Template.md`: Decision ID, beslissing in proza (concreet genoeg als Figma-instructie), gebruikersintentie, frictie/kans, Evidence Chain, score inclusief anker, conflicten, componenten (C-XX_Naam_DDR-HX-NN), primary KPI plus guardrails, tracking events, experiment, onzekerheden, referentie-schermen
4. **Status bepalen** per DDR: APPROVED (score 3 of hoger, geen onopgeloste conflicten, guardrails gedefinieerd), PERMANENT (een APPROVED beslissing die daarna een eigen experiment heeft gewonnen; draagt het liftpercentage en het Experiment-ID en wordt niet opnieuw ter discussie gesteld zonder nieuw bewijs), NEEDS VALIDATION (score 0-2 of conflict open; bij score 0 schrijf je geen DDR maar een hypothese plus meetplan), BLOCKED (een eigen meting toont een significant negatief effect; welke meetvorm dat mag zijn hangt af van het evidence-regime, zie het protocol), RESEARCH NEEDED (kritieke data ontbreekt)
5. **Figma-instructie produceren**, alleen voor DDR's met status APPROVED of PERMANENT: exacte componentnaam, varianten, annotatie, positie in de pagina-flow; overdracht pas na Red Team go
6. **Geblokkeerde beslissingen rapporteren**: welke items NEEDS VALIDATION of BLOCKED zijn en waarom; dit pakket gaat naar design-os-red-team

### Evidence Score (0-5)

De score meet **bewijskracht**, niet het aantal bronnen. Jij bent de skill die scoort, dus hier staat het model voluit; het protocol blijft de bron. Drie stappen.

**Stap 1, het anker zet de bodem.** De sterkste geldige (niet-verlopen) bron in de Evidence Chain die op deze beslissing slaat:

| Anker | Wat het is | Bodem |
|---|---|---|
| T1 | Een eigen **gecontroleerde** meting van deze ingreep met een significant effect **in de richting die deze beslissing ondersteunt**. Bij evidence-regime `vol` is dat een experiment met controlegroep; een voor-na-meting en een gefaseerde uitrol zijn daar **geen** T1 maar T2. Bij `dun` tellen een voor-na-meting met een duidelijke breuk en een gefaseerde uitrol wel als T1-anker, maar allebei alleen als drie dingen expliciet in het Evidence Item staan: de meetperiode voor en na, wat er in diezelfde periode nog meer veranderde (campagnes, seizoen, prijs, voorraad), en waarom de breuk daar niet aan toe te schrijven is. Ontbreekt die onderbouwing, dan is het item T2 | 3 |
| T2 | Eigen kwantitatieve gedrags-, zoek-, CRM- of backend-data die de frictie direct meet | 2 |
| T3 | Eigen kwalitatief klantonderzoek (exit-survey, recordings, support- of verkoopsignaal, eigen review-mining) | 2 |
| T4 | Alleen extern bewijs (concurrent-benchmark, best-practice, patroonbibliotheek, gepubliceerde effectstudie) | 1 |
| T5 | Alleen redenering of analogie, of een lege Evidence Chain | 0 |

Twee metingen zijn geen T1, ongeacht het regime:

- **Een meting met een significant negatief effect op deze ingreep.** Dat is geen sterk anker maar een blokkade: de beslissing gaat naar BLOCKED en de score is niet meer relevant. Zonder deze regel zou het bewijs dat een ontwerp schaadt de score naar de productiedrempel tillen.
- **Een meting zonder significant effect.** Dat is geen bewijs voor en geen bewijs tegen. Zo'n item is geen anker en dekt ook geen bewijscategorie; het hoort in het onzekerhedenveld.

Zijn er twee ankerkandidaten met dezelfde bodem, kies dan de hoogste in de betrouwbaarheidshierarchie hieronder. T2 gaat dus vóór T3. Dat verandert de score niet, alleen het label, en dat label moet vergelijkbaar blijven tussen DDR's.

De bewijscategorieën waarmee je de breedte telt:

| Categorie | Wat erin valt | Eigen of extern |
|---|---|---|
| B1 | Eigen kwantitatief gedrag: funneldata, zoekdata, CRM- of backend-data | eigen |
| B2 | Eigen kwalitatief: survey, recordings, support- en verkoopsignaal, eigen reviews | eigen |
| B3 | Eigen experiment met een gemeten effect: gecontroleerd experiment, voor-na-meting, gefaseerde uitrol. Een experiment zonder significant effect dekt deze categorie niet | eigen |
| B4 | Extern marktbewijs: concurrent-benchmark, gepubliceerde effectstudie (`E-CASE`, `E-COMP`, `E-PERS`, `E-TREND`) | extern |
| B5 | Patroon en best-practice: principe-bronnen en patroonbibliotheken (`E-REF`, `E-MOB`) | extern |

Deze letters staan los van de sectieletters A t/m R van de Evidence Registry. Registry-sectie B is niet bewijscategorie B2; de registry ordent waar een item vandaan komt, deze tabel wat het waard is.

Vier teluitgangspunten:

- **Eén Evidence Item dekt precies één categorie**, de categorie die het item het best beschrijft. Een gefaseerde uitrol die je in funneldata meet is B3, niet B3 plus B1.
- **Het ankeritem verbruikt zijn eigen categorie**, ook wanneer het ankerniveau en de categorie niet samenvallen. Een voor-na-meting bij `vol` is anker T2 en categorie B3: die B3 is dan verbruikt en telt niet nog eens als breedte mee. Dit is het geval waarin fout tellen precies één punt scheelt en dus productie versus concept bepaalt.
- **Meerdere items binnen één categorie tellen als één.** Twee funnelrapporten zijn niet twee bronnen.
- **Een categorie telt alleen mee als hij inhoudelijk gedekt is.** Eén losse screenshot of één terloopse opmerking dekt geen categorie. De vuistregel is dat het item op zichzelf een eigen Evidence Item met bron, datum en bevinding waard is, en dat het over déze beslissing en over déze frictie gaat. Een eigen bron die relevant is maar de frictie niet raakt, dekt geen categorie. Referentieschermen (`E-REF`, `E-MOB`) tellen alleen als ze in de Evidence Chain-tabel van de DDR staan, niet als ze alleen in de referentie-sectie eronder hangen.

**Stap 2, eigen breedte tilt op.** Tel de **eigen** categorieën (B1, B2, B3) die naast het anker gedekt zijn. Elke categorie is plus 1. De uitkomst van stap 1 plus stap 2 heet het **eigen subtotaal**.

**Stap 3, externe breedte, alleen boven de drempel.** Is het eigen subtotaal 3 of hoger, dan telt er **plus 1** bij wanneer B4 of B5 gedekt is. Samen leveren de externe categorieën nooit meer dan plus 1, hoeveel items erin ook zitten. Is het eigen subtotaal 2 of lager, dan **is dat de score** en verandert extern bewijs er niets aan.

Twee plafonds sluiten de berekening af: de score is nooit hoger dan 5, en zonder een T1-anker nooit hoger dan 4.

**De vier harde regels:**

1. **Extern bewijs telt pas mee vanaf een eigen subtotaal van 3**, en levert samen maximaal plus 1.
2. **Score 5 alleen met een T1-anker**; zonder T1-anker is 4 het maximum. Maximaal verdedigbaar bestaat niet zonder eigen causaal bewijs.
3. **Verlopen items tellen nergens mee**, niet als anker en niet als breedte.
4. **De score draagt altijd zijn anker**: noteer `4/5 (anker T1)`, nooit een kaal getal. Twee DDR's met dezelfde score maar een ander anker zijn niet even sterk, en dat moet leesbaar blijven.

Regel 1 is de belangrijkste en de reden dat dit model geen verkapte breedte-ladder is: eigen data rechtvaardigt **of** je de weddenschap aangaat, extern bewijs informeert alleen **hoe** je hem uitvoert. Een keten die niet op eigen benen staat, wordt door extern bewijs nooit over de productiedrempel getild.

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

Harde regel: minimum 3 voor Figma-productie. Score 0-2 is concept only en mag nooit als productie-component in Figma verschijnen; een 0 hoort bovendien geen DDR te worden, maar een hypothese plus meetplan. De score motiveer je altijd met anker plus de gedekte categorieën, nooit als kaal getal.

De **drempel** verandert niet met het evidence-regime en niet met traject-omvang. Wat wel verschilt is hoe zwaar dezelfde meting weegt: wie een gecontroleerd experiment kán draaien wordt daarop afgerekend, dus bij `vol` is een voor-na-meting T2 en bij `dun` kan hij T1 zijn. Dat is bewust: de lat ligt voor iedereen op 3, maar je moet het beste bewijs leveren dat in jouw situatie haalbaar is. Bij `dun` is de tweede eigen categorie meestal de route: een handvol klantgesprekken of een consistent supportsignaal is daar vaak het beste bewijs dat te krijgen valt, en het telt volwaardig als B2.

**Herscoren van bestaande DDR's.** Scores onder het oude breedte-model blijven staan tot de DDR voor iets anders wordt aangeraakt; herscoor dan volgens dit model. Een herscore is administratie en laat het Gate-Record in stand, **tenzij de status verandert**. Omhoog (NEEDS VALIDATION naar APPROVED) betekent een nieuwe vrijgave: het item gaat opnieuw door de poort voordat er iets mee gebouwd wordt. Omlaag (APPROVED naar NEEDS VALIDATION) laat de go vervallen: al gebouwde componenten blijven staan maar worden als concept gemarkeerd en gaan niet mee in een klantstuk of een release zonder expliciet gelogd risico-akkoord van de lead. Meld dat actief, want dit is precies het geval dat anders stil blijft liggen. Een legacy-DDR zonder ankernotatie is niet fout maar ongescoord: het Red Team stuurt hem daarvoor niet terug maar noteert "nog niet herscoord", en jij herscoort bij de eerstvolgende inhoudelijke aanraking.

### Conflict resolution en betrouwbaarheidshierarchie

Bij tegenstrijdige signalen: benoem het conflict in de DDR-sectie Conflicten, label elke bron Hoog/Middel/Laag, volg de hoogste bron tenzij meerdere lagere bronnen consistent tegenspreken, en noteer welke bron je volgde en waarom. Onoplosbaar: naar de lead. De hierarchie:

```
A/B-test (intern, significante n)
  > de gedragsbron kwantitatief (harde funneldata)
    > Exit-survey / direct klantonderzoek (noteer n)
      > Review-mining (indirect)
        > Competitor-benchmark (context)
          > Best-practice, bijv. Baymard (principe, niet klantspecifiek)
            > Redenering / aanname
```

Absent evidence trap: "niet gemeten" is niet "werkt niet". Alleen "gemeten, significant negatief effect" blokkeert; "onbekend" en "gemeten, geen significant effect" verlagen Confidence en gaan het onzekerheden-veld in. Een meting zonder significant effect is bovendien geen anker en dekt geen bewijscategorie, dus hij tilt de score nergens mee omhoog. Een klein-n survey (vuistregel: rond de 100 respondenten) is Middel, nooit Hoog.

### Data decay policy: houdbaarheid van bewijs

Elk brontype heeft een maximale ouderdom als bewijs in een DDR. De tabel met alle brontypen staat in de data decay policy van `00_PLAN/Data-Governed-Design-Protocol.md` en is daar de enige geldige versie: kopieer hem niet, maar raadpleeg hem voordat je scoort. Twee regels horen ook hier te staan, want ze bepalen de score direct:

- **Verlopen items tellen nergens mee**, niet als anker en niet als breedte. Verlopen data mag je nog aanhalen als achtergrond of historische context in de lopende tekst van een DDR, maar dat is een leesbaarheidshulp en geen halve bewijswaarde.
- **Een item met een onvolledige datum** (alleen een jaartal, of "vorig jaar") behandel je als de oudste mogelijke datum binnen die periode. Valt het dan buiten de grens, dan is het verlopen; laat de datum in de registry preciseren als je het item wilt blijven gebruiken.

Check de datums in de registry voordat je scoort: een score gebouwd op verlopen items is een valse APPROVED en het Red Team stuurt hem terug.

### Coverage Matrix en geblokkeerde beslissingen

`Decision-Coverage-Matrix.md` is stuurinstrument, geen administratie. Per component een rij met: Component, DDR, Hypothese, per brontype Ja/Nee (BEHAV, SURVEY, AB, REVIEW, de zoekbron, COMP, BP, REF, MOB), Score inclusief anker (`4/5 (anker T1)`) en Status. Daarnaast verplicht: de geblokkeerde-beslissingen-tabel (Component, blokkerende evidence zoals een negatief E-AB-item, actie), de research backlog en de samenvattende tellers (aantal per status, met PERMANENT als eigen teller naast APPROVED, NEEDS VALIDATION, BLOCKED en RESEARCH NEEDED; gemiddelde score, sterkste en zwakste bewijs, delta ten opzichte van vorige versie). De ankerverdeling krijgt een aparte rij "nog niet herscoord" voor legacy-DDR's zonder ankernotatie, zodat het gemiddelde geen twee schalen door elkaar middelt. Update-regel: elke nieuwe DDR of statuswijziging betekent dezelfde sessie de matrix bijwerken; een matrix die achterloopt op het Decision-Log is een gate-blokkade voor fase 7.

### Pre-DDR-checklist: de 10 verplichte vragen

Voor elke keuze die naar Figma wil, allemaal expliciet beantwoord (ook met "onbekend" of "ontbreekt"): 1 welke gebruikersintentie bedient dit, 2 welke frictie of kans lost dit op, 3 welke eigen klantdata (gedragsdata, zoekdata, experiment, survey) ondersteunt dit, 4 welke kwalitatieve data (reviews, exit-survey, support) ondersteunt dit, 5 welke concurrentie- of marktdata, 6 welke UX/CRO best-practice, 7 welke primary KPI wordt geraakt, 8 welke guardrail mag niet verslechteren, 9 welke onzekerheden of ontbrekende data zijn er (verplicht veld, mag niet leeg), 10 hoe wordt dit gemeten na livegang. Een DDR waar vraag 9 leeg is of vraag 10 geen event-namen heeft, is per definitie niet af.

### Werken binnen de gekozen richting

Richtingdivergentie is geen taak van deze skill meer. De onderbouwde weddenschappen worden in fase 5b gemaakt door **design-os-directions**, vóórdat jij begint; hoeveel het er zijn volgt uit `traject-omvang` (P8): vijf bij `vol`, drie bij `light`. Reden: de gekozen richting bepaalt welke DDR's je überhaupt nodig hebt. DDR's schrijven en daarna nog richtingen laten variëren levert per definitie alleen cosmetisch verschil op.

Wat dat voor jou betekent:

- Start pas als `05b_DIRECTIONS/Direction-Comparison.md` een gekozen richting toont en die keuze in `09_DECISION-LOG/Decision-Log.md` staat. Ontbreekt dat: routeer naar design-os-directions.
- Laad de Direction Case van de gekozen richting en behandel hem als kader: het functionele mandaat, het visuele mandaat en het "ten koste van" begrenzen wat een DDR mag voorstellen.
- Een DDR die buiten het mandaat van de gekozen richting valt is geen DDR maar een richtingwijziging: leg hem voor aan de lead in plaats van hem stil door te voeren.
- Het veld "welke hypotheses deze richting bewust NIET bedient" is jouw lijst van beslissingen die je expliciet niet neemt. Neem die over in `Open-Questions.md` in plaats van ze alsnog in te vullen.
- Valt de gekozen richting later tegen in validatie, dan is de tweede richting uit `05b_DIRECTIONS/Not-Selected.md` het startpunt, niet een nieuwe brainstorm.

## Anti-patterns

- Een DDR schrijven vanuit de gewenste conclusie en er evidence bij zoeken: confirmation bias maakt de hele Coverage Matrix onbetrouwbaar en het Red Team prikt er doorheen.
- Confidence in ICE op gevoel scoren: een backlog vol 4-en zonder eigen data prioriteert precies verkeerd en verbrandt de eerste sprint.
- Het onzekerheden-veld vullen met "geen" om de DDR af te ronden: elke beslissing heeft onzekerheden; een leeg veld betekent dat je ze niet gezocht hebt.
- Vage beslissingen als "een betere hero" vastleggen: een DDR die niet als Figma-instructie kan dienen, verschuift de echte beslissing naar de designer en breekt de keten.
- De Coverage Matrix pas aan het eind van de week bijwerken: de lead en het Red Team sturen dan op verouderde tellers en geven vrijgaves op valse aannames.
- Best-practice (Baymard of een blog) als doorslaggevend bewijs boven eigen klantdata zetten: de hierarchie bestaat omdat klantcontext generieke principes regelmatig verslaat.
- BLOCKED-items stilletjes laten vallen in plaats van rapporteren: de blokkade-lijst is juist het overtuigendste deel van het klantverhaal en voorkomt her-testen van bewezen losers.
- Hypotheses schrijven terwijl de Measurement-QA van fase 2 nog open staat: cijfers uit een ongevalideerde meting produceren DDR's die later herschreven moeten worden.
- Niet-gekozen richtingen in `Rejected-Ideas.md` dumpen: dat is de lijst met bewezen losers, en je gooit de andere onderbouwde alternatieven weg die je bij de eerste tegenvaller nodig hebt.
- Een score noteren als kaal getal, zonder anker: twee DDR's met score 3 en een ander anker zijn niet even sterk, en zonder ankernotatie kan het Red Team de score niet nalopen en stuurt hij een nieuw geschreven DDR terug. Alleen legacy-DDR's van vóór dit model krijgen daar geen terugsturing voor, maar het label "nog niet herscoord".

## Output-formaat

**DDR** (1 bestand per beslissing in `09_DECISION-LOG/`, volgens `DDR-Template.md`):

```markdown
# DDR-H[X]-[NN]: [beslissing in 3-5 woorden]
Decision ID / Hypothese / ICE / Status (APPROVED / PERMANENT / NEEDS VALIDATION / BLOCKED / RESEARCH NEEDED) / Datum / Eigenaar
## Beslissing (proza, Figma-instructie-niveau)
## Gebruikersintentie / ## Frictie of kans (met kerncijfer plus E-ID)
## Evidence Chain (tabel: E-ID, bron, finding, betrouwbaarheid; bij het ankeritem ook de datum en de vervaldatum) plus Score X/5 met anker, bijvoorbeeld `4/5 (anker T1)`, en motivatie
## Conflicten (expliciet, ook als geen)
## Componenten in Figma (C-XX_Naam_DDR-HX-NN)
## KPI (primary, secondary, 3 guardrails)
## Tracking events / ## Experiment (EXP-XX, type, MDE, minimale duur)
## Onzekerheden (VERPLICHT, nooit leeg)
## Referentie-schermen (E-REF/E-MOB, via design-os-references) plus sterkste industrie-validatie
```

Bij status PERMANENT staan het liftpercentage en het Experiment-ID in de kop. En over de referentie-schermen: `E-REF` en `E-MOB` zijn bewijscategorie B5 en tellen alleen mee voor de breedte van de score als ze in de Evidence Chain staan. Staan ze alleen in deze sectie onderaan, dan zijn ze illustratie en tellen ze nergens in mee.

**Sessie-output** (de 7 vaste onderdelen van de Compiler): evidence coverage voor het template, insight clusters, DDR's per component-groep, APPROVED items met Figma-instructie, NEEDS VALIDATION/BLOCKED met reden, research backlog, experiment mapping. Plus bijgewerkte `Hypothesis-Backlog.md`, `Screen-To-Hypothesis-Matrix.md` en `Decision-Coverage-Matrix.md`.

## Dependencies

- `<klantmap>/design-os/` volgens de stencil van design-os-setup, met gevulde Evidence Registry (design-os-evidence) als voorwaarde
- de tools van de meet-stack (juiste profile per klant): cijfers verifieren tijdens het schrijven, nooit nieuwe baseline bouwen (dat is design-os-evidence)
- `mcp__refero__refero_search_screens` en `mcp__mobbin__search_screens` via design-os-references: referentie-secties in DDR's
- `09_DECISION-LOG/DDR-Template.md`, `Decision-Coverage-Matrix.md`, `05_HYPOTHESES/` templates: de vaste formats
- `10_PROMPTS-AND-AGENTS/Agent-1-Design-Decision-Compiler.md` en `Claude-Design-Prompts.md`: de rol- en divergentie-prompts

## Integratie met andere skills

- **design-os-specialist**: routeert naar jou en bewaakt fase-gates; jij levert de tellers voor zijn statusrapport.
- **design-os-evidence**: levert de gevulde Evidence Registry (secties A t/m R, behalve M en N: die zijn van design-os-references) en de diagnose; jij consumeert, hij produceert evidence.
- **design-os-strategy**: levert de beslismomenten (BM-X) en de Template-Registry waarop elke hypothese en DDR terugvoert; ontbreekt een BM-X, dan vraag je hem daar aan in plaats van er zelf een te verzinnen.
- **design-os-directions**: levert de gekozen Direction Case, die jouw kader is; jij schrijft DDR's binnen dat mandaat en stuurt richtingwijzigingen terug in plaats van ze zelf te nemen.
- **design-os-references**: levert E-REF/E-MOB items (secties M/N) en de Referentie-schermen-sectie per DDR; vraag referenties aan per hypothese, niet per component.
- **design-os-red-team**: toetst elke DDR onafhankelijk en geeft go/no-go voor Figma; nooit je eigen DDR's zelf goedkeuren.
- **design-os-figma-build**: bouwt alleen componenten met status APPROVED of PERMANENT, op basis van jouw Figma-instructies.
- **cro-experimentation en cro-ab-statistics**: ontwerpen en lezen de experimenten (EXP-XX) die jij in DDR's specificeert.
- **synthetic-user-panel**: goedkope extra kwalitatieve toets op een hypothese voordat echt onderzoek loopt; telt als redenering-laag, niet als klantdata.

## Tips

- Schrijf de beslissing eerst als Figma-instructie en werk terug naar de evidence: zo merk je direct of de beslissing concreet genoeg is en welke bewijsgaten er zijn.
- Cluster evidence eerst naar insights (I-XXX) en hang DDR's aan insights, niet aan losse E-items: 1 insight voedt vaak 3 tot 4 DDR's en dat scheelt dubbel werk.
- Vraag de A/B-historie van de klant op voor de eerste hypothese-sessie: bestaande losers zijn gratis BLOCKED-items en een bestaande winner op deze ingreep verzet het anker naar T1, waarmee de bodem meteen op 3 ligt. Punten optellen doe je niet; het anker doet het werk.
- Structuurwijzigingen verslaan microcopy-only ingrepen vaak, maar dat is een patroon om per klant te toetsen via de eigen testhistorie, niet een wet. Doe die toets vóór de eerste hypothese-sessie.
- Batch DDR's per template in 1 sessie: gedeelde evidence laadt 1 keer en conflicten tussen componenten op dezelfde pagina vallen direct op.
- Guardrails per DDR standaard in drieen: 1 waarde- of conversie-guardrail, 1 kwaliteits-guardrail uit het conversie-model (retour, churn, leadkwaliteit, no-show), 1 zichtbaarheids-guardrail bij structuurwijzigingen (organische posities). Bij leadgen is de kwaliteits-guardrail geen formaliteit maar de kern: een formulier korter maken verhoogt vrijwel altijd het volume en verlaagt vrijwel altijd de kwaliteit.
- Check bij hypotheses op de conversiestap altijd of de markt-specifieke randvoorwaarden in de guardrails zitten: de gangbare betaal- of aanvraagmethoden van die markt (P5), en of survey- en reviewdata geanonimiseerd in de registry staat conform het privacyregime van die markt voordat je citeert.
- Een RESEARCH NEEDED-status is een deliverable, geen falen: de research backlog stuurt de volgende evidence-sprint en laat de klant zien wat meten oplevert.
- Houd de DDR-tekst client-proof vanaf het begin: geen property-IDs, GAQL of toolnamen in de beslissing- en frictie-secties; de client-facing versie wordt dan knippen in plaats van herschrijven.
- Reken bij elke Testvorm eerst de benodigde sample size door met de MDE, en kies pas daarna de vorm. Blijkt de looptijd onhaalbaar, dan is A/B niet de juiste vorm en wordt het een gefaseerde uitrol of een voor-na-meting; dat is een keuze, geen concessie. Bij een A/B geldt een ondergrens van 2 volle weken vanwege weekdag-patronen, maar die ondergrens is nooit het antwoord op de vraag hoe lang de test moet lopen.

*Herzien wanneer het Data-Governed Design Protocol, de DDR-template of de gating-statussen in de stencil wijzigen.*
