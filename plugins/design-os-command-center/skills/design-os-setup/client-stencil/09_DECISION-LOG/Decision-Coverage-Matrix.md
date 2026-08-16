# Decision Coverage Matrix
Versie: 0.1 (stencil)
Status: TEMPLATE, invullen bij intake
Beheer: update bij elke nieuwe beslissing of statuswijziging.

## Legenda

**Databronnen (per kolom: Ja/Nee):**
- BEHAV = de gedragsbron, eigen kwantitatieve funneldata
- SURVEY = eigen kwalitatieve klantdata (exit-survey of vergelijkbaar)
- AB = intern A/B-testresultaat
- REVIEW = review-mining (review- en klachtenplatforms)
- SEARCH = de zoekbron, zoekconsole
- COMP = competitor-benchmark
- BP = best-practice (bijv. Baymard / industrie)
- REF = Refero cross-industry UX-referentie (Evidence Registry sectie M)
- MOB = Mobbin cross-industry UX-referentie (Evidence Registry sectie N)

De bronkolommen tonen dekking, niet bewijskracht. Een rij met veel Ja-kolommen is niet
automatisch sterk.

**Score (anker):** de Evidence Score van de DDR, altijd met zijn anker erbij, in één vaste
notatie: `X/5 (anker T[n])`, bijvoorbeeld `3/5 (anker T2)`. Niet `3 (anker T2)` en niet
`3/5 (T2)`; het woord "anker" hoort er letterlijk bij. De score komt in drie stappen tot stand:
het anker is de sterkste geldige bron in de keten en zet de bodem, elke gedekte eigen categorie
(B1, B2, B3) náást het anker tilt met 1 op tot het eigen subtotaal, en pas vanaf een eigen
subtotaal van 3 levert extern bewijs (B4, B5) samen maximaal plus 1. Het volledige model, de
categorieën en de vier harde regels staan in `00_PLAN/Data-Governed-Design-Protocol.md`, sectie
"Evidence Score". Neem die tabellen hier niet over: één bron van waarheid.

Een legacy-DDR zonder ankernotatie noteer je als `nog niet herscoord` in de score-kolom. Hij
wordt daarvoor niet teruggestuurd en telt in de aparte rij onderaan mee, niet in het gemiddelde.

**Status:**
- APPROVED = mag naar Figma, mag geimplementeerd
- PERMANENT = APPROVED beslissing die daarna een eigen experiment heeft gewonnen; noteer het liftpercentage en het Experiment-ID. Blijft staan zonder nieuw bewijs
- NEEDS VALIDATION = alleen als concept in Figma
- BLOCKED = niet implementeren: een eigen meting toont een significant negatief effect. Welke meetvorm daarvoor legitiem is hangt af van het evidence-regime (P3): bij `vol` doorgaans een intern experiment, bij `dun` ook een uitgerolde wijziging met een duidelijke breuk in een voor-na-meting of een consistent en herhaald support- of verkoopsignaal, mits de onderbouwing expliciet is vastgelegd. Een expliciete afwijzing zonder meting is géén BLOCKED
- RESEARCH NEEDED = kritieke data ontbreekt, beslissing uitgesteld

## Sprint 1 componenten

| Component | DDR | Hypothese | BEHAV | SURVEY | AB | REVIEW | SEARCH | COMP | BP | REF | MOB | Score (anker) | Status |
|-----------|-----|-----------|:---:|:------:|:--:|:------:|:---:|:----:|:--:|:---:|:---:|:-------------:|--------|
| | | | | | | | | | | | | /5 (anker T[n]) | |
| | | | | | | | | | | | | /5 (anker T[n]) | |

## Sprint 2 componenten (prep)

| Component | DDR | Hypothese | BEHAV | SURVEY | AB | REVIEW | SEARCH | COMP | BP | REF | MOB | Score (anker) | Status |
|-----------|-----|-----------|:---:|:------:|:--:|:------:|:---:|:----:|:--:|:---:|:---:|:-------------:|--------|
| | | | | | | | | | | | | /5 (anker T[n]) | |

## Geblokkeerde beslissingen

| Component | Blokkerende evidence | Actie |
|-----------|---------------------|-------|
| | E-AB-[...]: [negatief resultaat] | Niet implementeren |

## Research backlog

| Ontbrekende data | Impact op | Prioriteit | Status | Actie |
|-----------------|-----------|-----------|--------|-------|
| | | | Open | |

## Samenvattende status

| Teller | Waarde | Delta t.o.v. vorige versie |
|--------|--------|---------------------------|
| Componenten APPROVED | | |
| Componenten PERMANENT | | |
| Componenten NEEDS VALIDATION | | |
| Componenten BLOCKED | | |
| Componenten RESEARCH NEEDED | | |
| Gemiddelde Evidence Score | /5 | |
| Sterkste bewijs | | |
| Zwakste bewijs | | |

Het gemiddelde blijft een kaal getal: een gemiddelde heeft geen anker. Daarom staat de
ankerverdeling er los naast. Die verdeling laat in één blik zien of het traject op eigen
causaal bewijs draait of vooral op context.

| Ankerniveau | Aantal DDR's | Delta t.o.v. vorige versie |
|-------------|--------------|---------------------------|
| T1 (eigen meting van deze ingreep) | | |
| T2 (eigen kwantitatieve gedrags- of zoekdata) | | |
| T3 (eigen kwalitatief klantonderzoek) | | |
| T4 (alleen extern bewijs) | | |
| T5 (alleen redenering of analogie) | | |
| Nog niet herscoord (legacy-DDR zonder ankernotatie) | | |

De rij "nog niet herscoord" staat er zodat het gemiddelde geen twee schalen door elkaar middelt.
Deze DDR's tellen niet mee in de Gemiddelde Evidence Score hierboven; herscoren gebeurt bij de
eerstvolgende inhoudelijke aanraking van de DDR.
