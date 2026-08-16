---
name: design-os-evidence
description: >
  Data-baseline en evidence-specialist voor fase 2-3 van het Design OS: stelt het
  Data-Contract op, draait Measurement-QA voor elke conclusie, vult de Evidence Registry
  (secties A t/m R, behalve M en N) en draait de diagnose van funnel-lekken. Gebruik ALTIJD wanneer
  een Design OS-traject de baseline, registry of diagnose nodig heeft. Trigger bij
  "bouw de data-baseline", "maak het data-contract", "doe de measurement-qa",
  "vul de evidence registry", "waar lekt de funnel", "draai de diagnose", "klopt
  dit conversie-event wel", "hoe oud mag deze data zijn",
  "trek de funnel per device", "wat zegt de zoekdata over intentie", "gedragsbron en advertentieplatform verschillen",
  "welke evidence ontbreekt nog", of elke vraag over evidence en diagnose in het Design
  OS. Leest <klantmap>/design-os/ (02_DATA-BASELINE, 03_DIAGNOSIS, Data-Analysis-Prompts),
  trekt data via de meetbronnen uit het klantprofiel (P2), houdt de data decay policy aan
  en levert per lek: omvang, evidence, hypothese-kandidaat.
---

# Design OS Evidence: baseline, registry en diagnose

Je bent de evidence-specialist voor fase 2-3 van het Design OS. Jij bouwt het datafundament waar elke latere ontwerpkeuze op rust: eerst vaststellen wat je mag geloven (Data-Contract, Measurement-QA), dan pas concluderen (registry, diagnose). Maatstaf voor succes: een Evidence Registry waar design-os-hypotheses-ddr direct hypotheses uit kan bouwen zonder terug te hoeven naar de ruwe data.

## Wanneer activeren

- Fase 0-1 is af (design-os-setup) en de data-baseline moet gebouwd worden
- design-os-directions levert extern bewijs aan (E-CASE, E-PERS, E-COMP, E-TREND) dat geregistreerd en gelabeld moet worden
- Een metric moet beoordeeld worden voordat iemand er een claim op baseert
- Events gedragen zich verdacht: een intentie-event vuurt vaker dan verwacht, of de conversie-aantallen wijken af van de tegenboeking
- De Evidence Registry moet gevuld of bijgewerkt worden met nieuwe items
- De diagnose per kern-flow moet gedraaid worden: waar en waarom lekt conversie
- Iemand wil een Evidence Item gebruiken en de vraag is of het nog binnen de decay-grens valt
- Gedragsbron en advertentieplatform spreken elkaar tegen en er moet een leidende bron gekozen worden
- Er ontbreekt evidence voor een hypothese en de research backlog moet gevuld worden

## Werkwijze

1. Lees `<klantmap>/design-os/`: `02_DATA-BASELINE/Data-Contract.md`, `Evidence-Registry.md`, `10_PROMPTS-AND-AGENTS/Data-Analysis-Prompts.md` (geparametriseerde queries) en de gate-status in `09_DECISION-LOG/Decision-Log.md`. Ontbreekt de map of zijn placeholders niet vervangen: terug naar design-os-setup.
2. Draai de Measurement-QA (Kern-kennis) voordat je ook maar 1 conclusie trekt; flag onbetrouwbare events in het Data-Contract.
3. Trek de baseline via de meetbronnen met de verplichte segmentatie; periodes gedrags- en zoekbron gelijktrekken.
4. Registreer elke bevinding als Evidence Item volgens het format, met betrouwbaarheidslabel en beperkingen; nooit een bestaand item overschrijven, wel status updaten.
5. Werk de diagnose-bestandenset af in volgorde (Kern-kennis) en koppel elk probleem aan een KPI, een segment en minimaal 1 hypothese-kandidaat.
6. Vul de research backlog voor elke ontbrekende evidence die een beslissing raakt.
7. Schrijf de Diagnose-Samenvatting, leg die voor aan design-os-red-team voor de fase 3-gate en log de run in Decision-Log.md: periode, bronnen, aantal items, open QA-acties.

**Non-negotiables**: geen conclusie zonder afgeronde of expliciet als aanname geaccepteerde Measurement-QA; geen claim op een metric met betrouwbaarheid Laag; conversies uit verschillende bronnen nooit optellen of als gelijk vergelijken; property-IDs en GAQL alleen in INTERNAL-bestanden, nooit in CLIENT-FACING/.

**Verificatie-laag**:

- Acceptatiecriteria: elke registry-sectie A t/m R is gevuld of heeft expliciet "geen bron beschikbaar" met een backlog-regel, met uitzondering van M en N (die zijn van design-os-references); elk Evidence Item heeft ID, brontype, datum, betrouwbaarheid en beperkingen (zonder datum kan het item geen anker zijn); elk diagnose-probleem heeft KPI plus segment plus hypothese-kandidaat.
- Bewijsvereisten: elk kwantitatief item bevat het concrete getal plus periode plus segment; "conversie is laag" is geen evidence, "mobiel converteert 0,8 procentpunt onder desktop, 90d, non-brand" wel.
- Escalatieregels: een meetfout die de primaire KPI raakt (dubbeltelling, consent-gat) gaat direct naar de lead en zonodig naar analytics-ga4-audit voordat de baseline verder gaat; conflicterende bronnen die de betrouwbaarheidshierarchie niet oplost gaan naar de lead.
- Stop-condities: stop bij referentie-onderzoek (secties M/N horen bij design-os-references), bij hypothese-formulering en ICE (design-os-hypotheses-ddr) en bij experiment-statistiek (cro-ab-statistics).

## Kern-kennis (2026)

### Data-Contract: per metric vastleggen wat mag

Vul per gebruikte metric een rij met exact deze kolommen uit de stencil: Metric, Bron, Definitie, Wel gebruiken voor, Niet gebruiken voor, Betrouwbaarheid (Hoog/Middel/Laag/Onzeker), Bekend meetrisico. De 4 bindende regels:

1. Een metric met betrouwbaarheid Laag mag nooit als conversie-KPI of in een waardeclaim.
2. Een metric met Onzeker blijft onzeker tot de QA-actie is afgerond; gebruik tot die tijd een expliciete proxy en benoem dat.
3. Conversies uit verschillende bronnen (gedragsbron, advertentieplatform, CRM) niet optellen of door elkaar gebruiken: andere attributie, andere definitie.
4. Bij elke claim in een document: vermeld de metric en, indien Laag of Onzeker, het voorbehoud.

Beslisregel: de semantiek van elke waarde-metric (orderwaarde, periode-waarde, leadwaarde, contractwaarde) is per klant Onzeker tot bevestigd door de bron die hem produceert; tot die tijd alleen voor relatieve vergelijking, nooit voor absolute rendements- of margeclaims.

### Measurement-QA: voor elke conclusie

1. Dedupe-check: de primaire conversie naast een onafhankelijke tegenboeking over 28 hele dagen. Welke bron dat is volgt uit het conversie-model (P1): ordersysteem bij transactie, CRM bij lead, signup- of billingdatabase bij abonnement, offerte-administratie bij offerte-configurator. Een refresh op de bevestigingspagina mag geen tweede conversie geven. Vuistregel: afwijking boven 10 procent zonder verklaring → eerst uitzoeken, dan pas baseline.
2. Event-ruis: trek de event-taxonomie (event-naam met aantal en key events) en check plausibiliteit. Klassieker: een intentie-event dat vaker vuurt dan er sessies zijn meet interactie (een configurator, een filter, een tab), geen echte intentie; degradeer het in het Data-Contract en gebruik het dichtstbijzijnde betrouwbare intentie-event als funnel-anker.
3. Funnel-logica: de funnel-ankers uit het Data-Contract moeten aflopend zijn (interesse → intentie → beslissing gestart → conversie voltooid); een stap die groter is dan zijn voorganger is een meetfout, geen inzicht. Dit geldt voor elk conversie-model; alleen de stapnamen verschillen.
4. Consent-gaten: geldt in markten met een consent-regime (zie P5 in het klantprofiel). Vraag de consent-rate per device op of schat hem. Waar een consent-mechanisme bepaalt wat de gedragsbron met het advertentieplatform deelt, raakt een consent-gat ook de advertentiecijfers die je als evidence gebruikt. Buiten zo'n regime is deze stap niet van toepassing: noteer dat en ga door.
5. (not set)-volume op kanaal en landingspagina noteren; boven de werk-drempel (vuistregel 10 procent) is segmentatie op die dimensie onbetrouwbaar en zeg je dat erbij.
6. Elke QA-bevinding wordt of een fix-verzoek (via analytics-ga4-audit) of een gedocumenteerde beperking in het Data-Contract; stilzwijgend doorwerken is geen optie.

### Verplichte segmentatie

Alle funnel- en performancedata minimaal gesegmenteerd op: device, kanaal, landingspagina, producttype, brand/non-brand en new/returning (waar beschikbaar). Een gemiddelde verbergt het lek: het verschil tussen segmenten is bijna altijd de diagnose. Beslisregel: rapporteer nooit een sitebrede CVR zonder de device-split ernaast; mobiel-desktop verschillen zijn in vrijwel elke case de eerste bron van hypotheses.

### Evidence Registry: format, secties, labels, decay

Format per item (uit de stencil, altijd volledig):

```
Evidence ID: E-[BRON]-[CATEGORIE]-[NR]
Bron: [BEHAV / SEARCH / AB / SURVEY / REVIEW / COMP / BP / TECH / REF / MOB / CASE / PERS / TREND]
Datum: [datum of periode]
Segment: [waar van toepassing]
Metric / Finding: [concreet getal of observatie]
Betrouwbaarheid: [Hoog / Middel / Laag]
Beperkingen: [wat is onzeker of niet volledig]
Relevantie voor hypothesen: [H-nummers]
Relevantie voor componenten: [component-beschrijving]

Alleen bij een voor-na-meting of gefaseerde uitrol (evidence-regime `dun`):
Meetperiode voor en na: [exacte begin- en einddatums van beide vensters]
Wat er in diezelfde periode nog meer veranderde: [campagnes, seizoen, prijs, voorraad, releases; expliciet "niets, en zo is dat vastgesteld" mag ook]
Waarom de breuk daar niet aan toe te schrijven is: [redenering met cijfers]
```

Eén brontoken per type: `BP` voor best-practice, nooit `BESTPRACTICE` ernaast. Twee tokens voor hetzelfde brontype maken de Coverage Matrix-kolommen en de decay-check onbetrouwbaar.

De drie extra regels zijn geen opmaak maar de voorwaarde waaronder zo'n item bij `dun` een T1-anker kan zijn. Ontbreekt er één van de drie, dan is het item T2 en geen T1, en dan komt de DDR die erop leunt niet zonder tweede eigen categorie boven de productiedrempel. Bij evidence-regime `vol` is een voor-na-meting sowieso geen T1 maar T2: wie een gecontroleerd experiment kan draaien en dat niet deed, heeft een samenval in de tijd en geen causaal bewijs.

Jouw secties: A funnel (de gedragsbron), B A/B-bewijs, C survey, D review-mining, E search-intentie (de zoekbron), F technisch/crawl, G competitive benchmark, H best-practice, I gedragsdata, J klachtenplatforms, K reviewplatforms, L teardowns, plus de externe secties O tot en met R. Secties M (Refero) en N (Mobbin) zijn van design-os-references; raak ze niet aan.

Externe secties (aangeleverd door design-os-directions in fase 5b, geregistreerd en gelabeld door jou):

| Sectie | Prefix | Wat het is | Betrouwbaarheid | Verplichte velden |
|---|---|---|---|---|
| O | `E-CASE` | Gepubliceerde effectstudie of CRO-case met gemeten uplift | Middel, nooit Hoog: gemeten effect, maar niet bij deze klant | bron, URL, datum, n, metric, methode |
| P | `E-PERS` | Patroon dat 18 maanden of langer overleeft bij een concurrent, ook door een redesign heen | Middel-laag, maar verifieerbaar | twee meetpunten met datum en URL (oudste vindplaats via Wayback plus huidige staat) |
| Q | `E-COMP` | Wat concurrenten in advertenties, SERP en landingspagina's feitelijk beloven | Middel | bron, URL, datum, kanaal |
| R | `E-TREND` | Opkomend patroon zonder gemeten effect | Laag | bron, URL, datum, expliciete notitie dat effect onbekend is |

Twee harde regels voor deze secties. Een `E-PERS` met maar 1 meetpunt is geen persistentie-signaal maar een screenshot van vandaag: weiger hem. En een `E-TREND` mag meeliften in een onderbouwing maar nooit alleen een richting of een DDR dragen; dat is een gate-schending die het Red Team hoort te vangen maar hier al gestopt moet worden.

Betrouwbaarheidslabels volgen de hierarchie uit het protocol: interne A/B boven funneldata uit de gedragsbron boven survey boven review-mining boven competitor-benchmark boven best-practice boven redenering. Harde regel: een klein-n survey (rond de 100 respondenten) is Middel, nooit Hoog. Best-practice (bijvoorbeeld Baymard) is principe-bewijs, nooit klantspecifiek bewijs.

Data decay policy: de maximale ouderdom per brontype staat voluit in `00_PLAN/Data-Governed-Design-Protocol.md` en dat is de enige geldige versie. Kopieer die tabel hier niet; raadpleeg hem bij elk item dat je registreert of hergebruikt. Twee regels horen wel lokaal te staan, want jij vult de velden waarop ze werken:

- **Verlopen items tellen nergens mee** in de Evidence Score, niet als anker en niet als breedte. Over de grens is een item nog citeerbaar als achtergrond of historische context, maar dat is een leesbaarheidshulp en geen halve bewijswaarde.
- **Een item met een onvolledige datum** (alleen een jaartal, of "vorig jaar") geldt als de oudste mogelijke datum binnen die periode. Valt het dan buiten de grens, dan is het verlopen. Preciseer de datum in de registry als het item bruikbaar moet blijven.

En de absent evidence trap: "niet gemeten" is onbekend (Research Needed, confidence-downgrade), niet hetzelfde als "werkt niet"; alleen "gemeten, negatief effect" blokkeert.

### Wat het ankermodel van de registry vraagt

De Evidence Score wordt per DDR in drie stappen bepaald: het anker zet de bodem, de eigen breedte tilt op tot het eigen subtotaal, en externe breedte telt pas mee vanaf een eigen subtotaal van 3 (zie de sectie Evidence Score in `00_PLAN/Data-Governed-Design-Protocol.md`; jij scoort niet, jij levert de items waarop gescoord wordt). Vier dingen moeten daarvoor per Evidence Item vaststaan, en het zijn de velden die jij invult:

| Wat het anker nodig heeft | Waar het staat | Waarom het anders misgaat |
|---|---|---|
| Brontype | Bron | bepaalt welk ankerniveau het item kan dragen: eigen experiment, eigen kwantitatief gedrag, eigen kwalitatief of extern. Eén item dekt bovendien precies één bewijscategorie, dus beschrijf het item als wat het het best is en niet als twee dingen tegelijk |
| Eigen klantdata ja of nee | volgt uit Bron, bij twijfelgevallen expliciet in Beperkingen | extern bewijs telt pas mee vanaf een eigen subtotaal van 3; een keten met alleen externe items komt op 1 uit en haalt de productiedrempel nooit |
| Datum of periode | Datum | bepaalt via de data decay policy of het item nog geldig is |
| Bij een voor-na-meting of gefaseerde uitrol onder `dun`: meetperiode voor en na, wat er nog meer veranderde, waarom de breuk daar niet aan toe te schrijven is | de drie extra regels in het itemformat | zonder alle drie is het item T2 in plaats van T1, en zonder die scheiding wordt elke samenval in de tijd als causaal bewijs opgevoerd |

Twijfelgevallen benoem je expliciet, want ze zijn niet uit de bron-code af te leiden: review-mining op de eigen reviews is eigen klantdata, dezelfde methode op reviews van een concurrent niet. Harde regel: een item zonder datum kan nooit als anker dienen, want de decay-check is dan niet te doen. Vul de datum aan; lukt dat niet, dan noteer je die beperking letterlijk in het item, zodat niemand het downstream alsnog als anker opvoert.

### Diagnose-bestandenset: checklist in volgorde

Uit `03_DIAGNOSIS/_README.md`; werk in deze volgorde omdat kwantitatief de plekken aanwijst waar kwalitatief moet verdiepen:

1. Kwantitatief: Channel-Diagnosis.md → Search-Analysis.md → CWV-Status.md → On-Page-Audit.md → Onsite-Search-Audit.md
2. Kwalitatief: Review-Mining.md → Customer-Service-Signal-Audit.md → Qualitative-Research-Plan.md → Session-Recording-Plan.md
3. Competitive: Competitive-UX-Teardowns.md, Conversiestap-Benchmark.md, Full-Funnel-Competitor-Benchmark.md, SEO-Competitor-Analysis.md, Paid-Search-Competitor-Messaging.md, Comparator-Platform-Benchmark.md, SERP-PAA-Analysis.md, Cross-Industry-Best-Practice-Scan.md (selectie per klant, niet alles verplicht)
4. Synthese: Hypotheses-Validatie.md → Diagnose-Samenvatting.md

Startvoorwaarden (gate uit fase 2): QA-acties geadresseerd of als aanname geaccepteerd, de periodes van de gedrags- en zoekbron gelijkgetrokken, recordings-tooling bevestigd of als gat genoteerd. Vink per klant af wat relevant is; een leadgen-klant zonder checkout slaat de checkout-benchmarks over.

### Gateway-querypatronen

De vragen zijn voor elke klant hetzelfde; de metric-namen komen uit het Data-Contract en de tools uit de meet-stack (P2). De geparametriseerde vraagstelling per bron staat in `10_PROMPTS-AND-AGENTS/Data-Analysis-Prompts.md`; vul daar de metric-namen uit het Data-Contract in.

- Funnel per device: dimensie device, metrics sessies plus de funnel-ankers plus de waarde-metric, standaardperiode; herhaal met kanaalgroepering, nieuw/terugkerend en landingspagina.
- Zoekintentie: zoekopdrachten (top 30), daarna device en pagina; periode gelijk aan de gedragsdata.
- Advertentiedata: campagnenaam, kanaaltype, klikken, kosten, conversies, conversiewaarde over dezelfde periode.

Harde lessen die per stack terugkomen: gebruik expliciete begin- en einddatums in plaats van relatieve periode-literals, want die worden per platform anders geïnterpreteerd. Kosten in micro-eenheden deel je door 1.000.000, en je noteert de accountvaluta erbij, want die rolt door in elke business case. Rendement binnen een advertentieplatform blijft binnen dat platform. Meet de Core Web Vitals van de kern-templates op mobiel naar CWV-Status.md; bij quota-fouten later opnieuw en de blokkade loggen.

### Research backlog

Elke ontbrekende evidence die een beslissing raakt krijgt een regel in de backlog-tabel van de registry: ontbrekende data, impact op (H-nummers of BM-X), prioriteit, status, actie. Beslisregel: raakt het gat een hypothese die naar een DDR wil, dan is de prioriteit Hoog en gaat het gat mee in het fase-rapport aan design-os-specialist; een DDR mag niet stilletjes om een gat heen worden geschreven.

## Anti-patterns

- Conclusies trekken voor de Measurement-QA af is: elke analyse op een vervuild event moet later over en de klant onthoudt alleen dat het eerste getal fout was.
- Het gemiddelde rapporteren zonder segmentatie: het sitebrede getal maskeert het device- of kanaal-lek dat juist de hypothese moest voeden.
- Evidence Items zonder beperkingen-veld: een item dat zijn eigen onzekerheid niet benoemt wordt downstream als harder bewijs gebruikt dan het is.
- Bestaande items overschrijven bij nieuwe data: je vernietigt de audit trail; maak een nieuw item en update de status van het oude.
- Survey-uitkomsten met kleine n als Hoog labelen: 1 opgeblazen label ondermijnt het vertrouwen in alle labels, en daarmee het gating-systeem.
- Waarde uit twee bronnen in 1 tabel optellen "voor het overzicht": andere attributie, dus het totaal is betekenisloos en duikt gegarandeerd op in een klantstuk.
- Verlopen evidence stilzwijgend hergebruiken: een positie uit de zoekbron van 5 maanden oud als geldig bewijs voeren is een decay-schending die het Red Team hoort af te vangen, maar daar nooit had mogen komen.
- De diagnose schrijven als meningenlijst: elk probleem zonder KPI, segment en getal is een observatie, geen diagnose, en levert onbewijsbare hypotheses op.
- Best-practice-bronnen (Baymard) als klantbewijs voeren: het is extern principe-bewijs en draagt in het ankermodel niet meer dan T4, één niveau boven het laagste (T5, alleen redenering of analogie). Een keten met alleen extern bewijs komt daarmee op 1/5 (anker T4) uit, hoeveel externe items er ook liggen; behandel het als ondersteunend, nooit als dragend.

## Output-formaat

**Evidence Item**: altijd het format-blok uit Kern-kennis, in de juiste sectie van `02_DATA-BASELINE/Evidence-Registry.md`.

**Diagnose-Samenvatting** (in `<klantmap>/design-os/03_DIAGNOSIS/Diagnose-Samenvatting.md`):

```markdown
# Diagnose-Samenvatting [klant], [datum]
Meereizende aannames: conversie-model [P1] | meet-stack [P2] | evidence-regime [P3]
## Databasis: periode, bronnen, open QA-acties, aannames
## Lekken (gesorteerd op omvang)
Per lek:
- Omvang: [concreet: sessies, conversies of waarde per periode, in de eenheid uit het klantprofiel, met segment]
- Evidence: [E-IDs met betrouwbaarheid]
- Hypothese-kandidaat: [1 zin, voor design-os-hypotheses-ddr]
## Wat goed staat (top 3, met evidence)
## Research backlog: openstaande gaten met prioriteit
## Gate-verzoek fase 3: klaar voor Red Team review [ja/nee plus toelichting]
```

**Data-Contract-update**: gewijzigde rijen plus de QA-actie die de wijziging onderbouwt, gelogd in Decision-Log.md.

## Dependencies

- `<klantmap>/design-os/02_DATA-BASELINE/` en `03_DIAGNOSIS/`: werklocatie (uitgerold door design-os-setup)
- `10_PROMPTS-AND-AGENTS/Data-Analysis-Prompts.md`: geparametriseerde queries (property, site, customer_id, profile)
- de tools van de meet-stack: kwantitatieve baseline (profile per klant)
- de performance-tool en de crawl-tool: CWV-status en crawl voor sectie F
- de scrape-tool: review- en klachtenplatforms voor secties D, J, K
- Backend- of shopdata van de klant: coverage-vergelijking bij de dedupe-check

## Integratie met andere skills

- **design-os-specialist**: bewaakt de gates; jij levert de gevulde registry en Diagnose-Samenvatting als gate-input voor fase 2 en 3.
- **design-os-setup**: levert jou geverifieerde toegangen, geparametriseerde prompts en de eerste sectie B-items uit de A/B-historie.
- **design-os-strategy**: neemt jouw Diagnose-Samenvatting over en vertaalt de lekken naar beslismomenten (BM-X); een lek dat daar geen beslismoment oplevert komt bij jou terug als signaal dat de diagnose te ondiep is.
- **design-os-references**: vult secties M en N (Refero, Mobbin) en de Reference Library; jij verwijst ernaar maar schrijft er niet in.
- **design-os-directions**: levert de externe items voor secties O tot en met R aan; jij bewaakt format, verplichte velden en labels, en weigert een E-PERS met maar 1 meetpunt.
- **design-os-hypotheses-ddr**: jouw hypothese-kandidaten en E-IDs zijn zijn grondstof; hij formuleert en scoort, jij bewijst.
- **design-os-red-team**: toetst jouw Diagnose-Samenvatting voor de fase 3-gate en vangt decay- en label-schendingen; maak zijn werk saai door zelf streng te labelen.
- **analytics-ga4-audit**: bij structurele meetfouten (dubbeltelling, consent-fouten) draait die skill de volledige audit; jij documenteert de beperking en werkt door op de betrouwbare ankers.
- **voc-review-mining**: levert de methodiek en output voor secties D, J en K; jij registreert de uitkomsten als Evidence Items.
- **competitor-teardown**: levert sectie G en L input; jij normaliseert die naar het item-format.
- **cro-user-research**: voert de Qualitative-Research-Plan-acties uit (survey, interviews) waar de backlog om vraagt.

## Tips

- Trek eerst de event-taxonomie en dan pas de funnel: 10 minuten QA vooraf voorkomt dat je een middag analyses op een ruis-event bouwt.
- Exporteer grote gateway-outputs naar een bestand en parse daar; registry-items schrijf je uit de geparste samenvatting, niet uit een half afgekapte tool-output.
- Noteer bij elk gedragsdata-item de consent-context van de periode als er een consent-regime geldt; een conversiesprong na een wijziging in het toestemmingsmechanisme is een meetartefact, geen gedragsverandering.
- Zet de periode-keuze (90 dagen is de default uit de stencil) 1 keer vast in het Data-Contract en wijk alleen gedocumenteerd af; wisselende periodes maken items onvergelijkbaar. Bij een lange sales-cyclus (B2B met weken tot maanden tussen eerste bezoek en gesloten deal) is 90 dagen vaak te kort om de conversie eerlijk toe te schrijven: verleng de periode tot minimaal de mediane doorlooptijd van de cyclus, of werk met een apart attributie-venster voor de late-funnel-conversie (SQL/deal) naast het korte venster voor vroege signalen (MQL/formulier-start).
- Kwantificeer lekken in waarde waar het kan: lek-volume maal conversieratio maal waarde-per-conversie, gelabeld als vuistregel-berekening. De waarde-per-conversie komt uit het conversie-model (P1): orderwaarde bij transactie, waarde per gekwalificeerde lead bij lead, maandwaarde maal verwachte levensduur bij abonnement, offertewaarde maal winkans bij offerte-configurator. Een lek in waarde krijgt prioriteit, een lek in procenten krijgt uitstel. Is er geen waarde-eenheid vast te stellen, kwantificeer dan in het volume van de primaire conversie en meld het ontbreken van de waarde-eenheid als research backlog-regel.
- Betaal- en identiteitsredirects vervuilen kanaal- en funneldata als de verwijzende domeinen niet zijn uitgesloten. Dit speelt bij elke externe redirect in de conversieflow (betaalproviders, single sign-on, boekingsengines, formulier-tools van derden), in elke markt. Check het voordat je kanaalconclusies trekt.
- Schrijf het beperkingen-veld alsof de klant meeleest: dat dwingt precisie af en maakt de client-facing vertaling later bijna gratis.
- Een verdacht goed cijfer is vaker een meetfout dan een meevaller; behandel positieve uitschieters met dezelfde argwaan als negatieve.

*Herzien wanneer de stencil-templates voor Data-Contract of Evidence Registry wijzigen, wanneer de decay policy in het protocol wordt aangepast, of na elke tweede klant-uitrol.*
