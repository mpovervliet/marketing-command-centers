# Gate-Records [KLANT]
Versie: 0.1 (stencil)
Status: TEMPLATE, aanvullen bij elke Red Team-run

Dit is het bewijs dat een poort echt gepasseerd is, en door wie. Zonder Gate-Record is
er geen go, ook niet als iemand zegt dat de review gedraaid is.

## Waarom dit bestand bestaat

Het hele Design OS rust op de Red Team-poort. Die poort is alleen iets waard als hij
onafhankelijk is, en onafhankelijkheid die je niet kunt aantonen is geen onafhankelijkheid.
Eerder was de enige controle dát er ergens een go gelogd stond, niet door wie of in welke
context. Een sessie kon dus haar eigen werk goedkeuren zonder dat het achteraf zichtbaar was.

## Beheerregels

- ID-vorm: `GATE-DDR-[nr]` voor een DDR-batch, `GATE-DIR-[nr]` voor een set Direction Cases, `GATE-FASE-[nr]` voor een fase-review. Volgnummers doorlopend per type.
- Eén record per Red Team-run. Nooit een bestaand record aanpassen; bij een hertoets een nieuw record.
- Een record zonder ingevuld isolatie-bewijs is ongeldig en telt niet als go.
- Een record dekt alleen de items die er letterlijk in staan. Een DDR die niet in de lijst staat, is niet getoetst.
- Een record vervalt zodra een getoetst item is gewijzigd na de datum van het record. Wijzig je een DDR of Direction Case, dan moet hij opnieuw door de poort.
- De sessie die het getoetste werk schreef, mag dit record niet aanmaken.
- Wordt één richting hergenereerd, dan wordt vraag 8 (verschilt deze richting van alle andere) voor de héle set opnieuw beantwoord, niet alleen voor de hergenereerde richting: het antwoord voor de overgebleven richtingen kan door de nieuwe richting kantelen. Het nieuwe `GATE-DIR`-record dekt daarom de volledige set en somt alle richting-letters op in "Getoetste items", niet alleen de hergenereerde.

## Wat een experiment-readout met een bestaand record doet

De beheerregels hierboven blijven onverkort gelden, en in het bijzonder de drie die het record
tanden geven: een record dekt alleen wat er letterlijk in staat, het vervalt zodra een getoetst
item daarna is gewijzigd, en zonder isolatie-bewijs is het ongeldig. Er is één afgebakende
uitzondering, omdat een
gewonnen experiment de beslissing sterker maakt in plaats van anders, en de vervalregel anders
juist het best onderbouwde component uit de build zou halen. De volledige tabel staat in
`00_PLAN/Data-Governed-Design-Protocol.md` onder "Wat een experiment-readout met het Gate-Record
doet"; hier staat wat dat voor dit bestand betekent.

| Uitkomst van de readout | Wat er met het bestaande record gebeurt |
|---|---|
| WINNER, status van de DDR naar PERMANENT | De go blijft staan. Geen nieuw record. Log wel een regel in het Decision-Log met een verwijzing naar het Learning Record |
| INCONCLUSIVE, status blijft APPROVED | De go blijft staan. Geen nieuw record |
| LOSER, status naar BLOCKED | De go vervalt onmiddellijk en het component gaat uit de build |
| De readout verandert de ontwerpbeslissing zelf, niet alleen haar status | De go vervalt: dit is een nieuwe beslissing en gaat opnieuw door de poort, met een nieuw record |

Twee grenzen aan deze uitzondering, zodat ze de vervalregel niet uitholt:

- Ze geldt alleen voor een statuswijziging die uit een experiment-readout komt. Elke andere
  wijziging van een getoetst item laat het record gewoon vervallen.
- De Learning Extractor schrijft zelf geen Gate-Record. Zijn output is een Learning Record. De
  poort is pas aan de orde als er een nieuwe of gewijzigde beslissing uit de readout voortkomt.

Een herscore die de status omlaag stuurt (APPROVED naar NEEDS VALIDATION) valt níet onder deze
uitzondering: daar vervalt de go. Al gebouwde componenten blijven staan, maar worden als concept
gemarkeerd en gaan niet mee in een klantstuk of release zonder gelogd risico-akkoord van de lead.

## Record-format

```markdown
### GATE-[DDR / DIR / FASE]-[volgnummer]

| Veld | Waarde |
|------|--------|
| Datum en tijd | [YYYY-MM-DD HH:MM] |
| Type toets | DDR-batch (12 vragen) / Direction Cases (8 vragen) / Fase-review (7 dimensies) |
| Uitvoeringsvorm | subagent / verse sessie |
| Traject-omvang | vol (5 richtingen) / light (3 richtingen), uit P8 in `01_CONTEXT/Client-Profile.md` |
| Isolatie-bewijs | [subagent-run-ID of sessie-ID, plus de eerste regel van de opdracht die is meegegeven] |
| Schreef deze context het getoetste werk? | nee (verplicht; ja maakt het record ongeldig) |
| Getoetste items | [volledige lijst IDs: DDR-H1-01, DDR-H1-02, ... of de richting-letters, doorletterend vanaf A tot het aantal uit de traject-omvang] |
| Geladen bronbestanden | [paden] |
| Laatste wijzigingsdatum getoetste items | [datum, moet vóór de datum van dit record liggen] |

Oordeel per item:

| Item | Oordeel | Score | Verloren op vraag |
|------|---------|-------|-------------------|
| | | | |

Uitkomst:

| Veld | Waarde |
|------|--------|
| Samenvattend oordeel | GO / NO-GO |
| Top-3 kritieke gaten | 1. ... 2. ... 3. ... |
| Voorwaarden bij GO | [of "geen"] |
| Vervalt bij | wijziging van een van de getoetste items. Eén uitzondering: een statuswijziging die uit een experiment-readout komt (WINNER naar PERMANENT, INCONCLUSIVE blijft APPROVED) laat het record staan. Elke andere wijziging, ook een herscore, een toegevoegd Evidence Item of een aangepaste guardrail, laat het vervallen |
```

## Records

[nog geen records]

## Controle door afnemers

`design-os-figma-build`, `design-os-hypotheses-ddr` en `design-os-directions` controleren
vóór gebruik vier dingen, niet alleen of er een record is:

1. Isolatie-bewijs ingevuld en "schreef deze context het getoetste werk" staat op nee
2. De ID's die zij gaan gebruiken staan letterlijk in de lijst getoetste items
3. Het record is jonger dan de laatste wijziging van die items
4. Het samenvattend oordeel is GO, en eventuele voorwaarden zijn afgehandeld

Faalt een van de vier, dan is er geen geldige go en gaat het werk terug naar
`design-os-red-team`. Dat is geen formaliteit: een verlopen of te smalle go is precies
hoe niet-getoetste componenten in een klantpresentatie belanden.
