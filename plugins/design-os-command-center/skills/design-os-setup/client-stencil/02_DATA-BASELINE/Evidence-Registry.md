# Evidence Registry [KLANT]
Versie: 0.1 (stencil)
Status: TEMPLATE, invullen bij intake

Databronnen: [opsommen zodra gebruikt: de gedragsbron periode, de zoekbron periode, crawl-datum, survey plus n, A/B-historie, review-mining, teardowns, referentie-searches]

Beheerregels:
- Bij nieuwe data of nieuwe analyses altijd nieuwe Evidence Items aanmaken; bestaande items niet overschrijven (wel status updaten).
- Elk item krijgt een uniek ID: E-[BRON]-[CATEGORIE]-[NR]. Referentie-items: E-REF-H[X]-[NR] (Refero) en E-MOB-H[X]-[NR] (Mobbin).
- Elk item heeft een betrouwbaarheidslabel en beperkingen. Houd de data decay policy uit het protocol aan.

## Format per Evidence Item

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
```

## Wat een Evidence Item nodig heeft om anker te kunnen zijn

Deze registry is de bron waaruit het anker van de Evidence Score wordt bepaald (zie
`00_PLAN/Data-Governed-Design-Protocol.md`, sectie "Evidence Score"). Het anker is de sterkste
geldige bron die op de beslissing slaat en zet de bodem van de score; de breedte tilt hem op.
Herhaal de anker-tabel hier niet, verwijs naar het protocol.

Om een item als anker te kunnen gebruiken moeten drie dingen vaststaan. Ze worden gedragen door de
bestaande velden; er komen hiervoor geen velden of kolommen bij.

| Wat moet vaststaan | Welk veld draagt dat | Waarvoor het dient |
|--------------------|---------------------|--------------------|
| Het brontype | `Bron` | Bepaalt welke ankerlaag (T1 t/m T5) van toepassing is |
| Of het eigen klantdata van deze klant is | `Bron`, indien nodig verduidelijkt in `Beperkingen` | Bepaalt of het item in het eigen subtotaal telt (B1, B2, B3) of pas als externe breedte (B4, B5), en die externe breedte telt pas mee vanaf een eigen subtotaal van 3 |
| De datum of periode | `Datum` | Bepaalt via de data decay policy of het item nog geldig is |

Harde regels bij het invullen:

1. **Een item zonder datum kan nooit als anker dienen.** Zonder datum is de decay-check niet uit te
   voeren en is de geldigheid onbepaald. Zo'n item telt ook niet mee in de breedte. Vul `Datum` in,
   of noteer het als openstaand punt in de Research Backlog hieronder.
2. Is niet uit `Bron` af te leiden of het om eigen klantdata van deze klant gaat, dan hoort dat
   expliciet in `Beperkingen`. Een extern item dat als eigen data wordt gelezen, tilt de score ten
   onrechte over de productie-drempel heen.
3. Een verlopen item blijft in de registry staan (niet overschrijven, wel status updaten), maar telt
   niet mee, niet als anker en niet als breedte.
4. **De houdbaarheid van elk brontype staat in de data decay policy in het protocol**, en die is de
   enige bron. Elk brontype dat hier voorkomt heeft daar een eigen rij: naast de klassieke bronnen
   ook een voor-na-meting of gefaseerde uitrol, een support-, verkoop- of servicesignaal, recordings
   en heatmaps, CRM- of backend-data, en de items uit de secties M t/m R (referentieschermen uit
   patroonbibliotheken `E-REF` en `E-MOB`, gepubliceerde effectstudies `E-CASE`,
   persistentie-signalen `E-PERS`, concurrent-messaging `E-COMP` en trend-signalen `E-TREND`).
   Neem die termijnen hier niet over; zoek ze op in
   `00_PLAN/Data-Governed-Design-Protocol.md`, sectie "Data decay policy".
5. **Een onvolledige datum telt als de oudste mogelijke datum binnen die periode.** Staat er alleen
   een jaartal of "vorig jaar", dan reken je vanaf het vroegste moment dat daarbij past. Valt het item
   dan buiten de grens, dan is het verlopen. Preciseer de datum in dit bestand als je het item wilt
   blijven gebruiken.
6. **Bij evidence-regime `dun` is een voor-na-meting alleen een T1-anker met drie expliciete velden
   in het Evidence Item**: de meetperiode voor en na, wat er in diezelfde periode nog meer veranderde
   (campagnes, seizoen, prijs, voorraad), en waarom de breuk niet aan die andere oorzaken toe te
   schrijven is. Ontbreekt die onderbouwing, dan is het item T2, geen T1. Draag die drie velden in
   `Metric / Finding` en `Beperkingen`; er komen hiervoor geen velden bij. Bij evidence-regime `vol`
   is een voor-na-meting sowieso geen T1 maar T2.

## A: Funnel en conversiedata (gedragsbron)

[nog geen items]

## B: A/B-test bewijs (intern)

[nog geen items]

## C: Survey / direct klantonderzoek

[nog geen items]

## D: Review-mining

[nog geen items]

## E: Zoekintentie (zoekconsole van de dominante zoekmachine in deze markt)

[nog geen items]

## F: Technisch / crawl

[nog geen items]

## G: Competitive benchmark

[nog geen items]

## H: Best-practice (bijv. Baymard, industrie-onderzoek)

[nog geen items]

## I: Gedragsdata (recordings, heatmaps, onsite search)

[nog geen items]

## J: Klachtenplatforms

[nog geen items]

## K: Reviewplatforms

[nog geen items]

## L: Live competitive UX (teardowns)

[nog geen items]

## M: Refero cross-industry referenties (E-REF-*)

[nog geen items]

## N: Mobbin cross-industry referenties (E-MOB-*)

[nog geen items]

## O: Gepubliceerde effectstudies (E-CASE-*)

CRO-cases en onderzoek met gemeten uplift. Betrouwbaarheid Middel, nooit Hoog: het is
gemeten effect, maar niet bij deze klant. Verplicht per item: bron, URL, datum, n, de
gemeten metric en de methode.

[nog geen items]

## P: Persistentie-signalen (E-PERS-*)

Patronen die 18 maanden of langer overleven bij een concurrent, inclusief door een
redesign heen. Geen effectbewijs, wel een verifieerbaar signaal dat de concurrent
het gemeten en gehouden heeft. Betrouwbaarheid Middel-laag.

Verplicht per item: twee meetpunten met datum (oudste vindplaats via Wayback en
huidige staat), beide met URL. Een screenshot van alleen vandaag is adoptie op
1 moment en telt niet als E-PERS.

[nog geen items]

## Q: Concurrent-messaging (E-COMP-*)

Wat concurrenten in advertenties, SERP-snippets en landingspagina's feitelijk
beloven. Betrouwbaarheid Middel. Verplicht per item: bron, URL, datum en kanaal.
Bronnen: konvert, dfs_serp_tool, seo_keywords_tool.

[nog geen items]

## R: Markttrends (E-TREND-*)

Opkomende patronen zonder gemeten effect. Betrouwbaarheid Laag. Harde regel: een
E-TREND-item mag meeliften in een onderbouwing, maar nooit alleen een richting of
een DDR dragen.

[nog geen items]

## Ontbrekende Evidence: Research Backlog

| Ontbrekende data | Impact op | Prioriteit | Status | Actie |
|-----------------|-----------|-----------|--------|-------|
| | | | Open | |
| | | | Open | |
