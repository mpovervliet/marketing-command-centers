# Prototype-QA-Checklist [KLANT]
Versie: 0.1 (stencil)
Status: TEMPLATE, draaien vóór elk deelmoment

Tien punten, drie blokken. Deelnorm: alle punten uit blok A en B groen, maximaal 1
openstaand punt uit blok C met eigenaar en datum. Vul de uitkomst als scorekaart in
`Prototype-Register.md`, met datum en commit-hash.

## Blok A, keten (3 punten, alle drie verplicht groen)

| # | Controle | Hoe je het toetst | Uitkomst |
|---|---|---|---|
| A1 | Elk scherm heeft een DDR-ID of PROTO-ONLY plus vervaldatum | Register naast de gepubliceerde bestandslijst leggen; verschil is een bevinding | |
| A2 | Geen component die BLOCKED staat in de Coverage Matrix | BLOCKED-lijst uit `09_DECISION-LOG/Decision-Coverage-Matrix.md` aflopen | |
| A3 | Alleen de gekozen richting is zichtbaar | Zoek naar restanten van niet-gekozen richtingen: oude bestanden, varianten, ongebruikte CSS-blokken | |

## Blok B, inhoud (4 punten, alle vier verplicht groen)

| # | Controle | Hoe je het toetst | Uitkomst |
|---|---|---|---|
| B1 | Content-pariteit: elke feitelijke claim is bronbaar | Alle aantallen, certificeringen, locaties, doorlooptijden, garanties en superlatieven verzamelen en 1 voor 1 terugvoeren op de klantmap. Niet bronbaar: schrappen of generiek maken | |
| B2 | Geen lorem, geen TODO, geen zichtbare placeholders | Tekstueel zoeken over de hele publicatie op `lorem`, `TODO`, `XXX`, `[`, `placeholder` | |
| B3 | Geen archief- of werkbestanden in de publicatie | Zoek op patronen als `z_old`, `-tmp`, `_archief`, `-kies`, `_preview` en verwijder ze uit de publicatie | |
| B4 | Beeldgebruik is licentietechnisch publiceerbaar en claimt niets | Bronlijst per beeld; beeld dat een claim suggereert die B1 niet dekt, gaat eruit | |

B1 is het punt waarvoor dit blok bestaat. In de eerste prototype-case ving deze check zes
claims af die plausibel klonken, niet bronbaar waren en anders in een klantdemo hadden
gestaan.

## Blok C, techniek (3 punten, maximaal 1 open)

| # | Controle | Hoe je het toetst | Uitkomst |
|---|---|---|---|
| C1 | Nul gebroken interne links, nul console-errors op de kern-flow | Linkcheck over de publicatie plus de kern-flow doorlopen met de console open | |
| C2 | Werkt op 390 pixels, zichtbare focus-states, contrast conform de matrix, reduced-motion werkt | Viewport op 390; met de tab-toets door de kern-flow; contrast tegen `07_DESIGN-SYSTEM/Design-Tokens.md`; systeeminstelling voor beperkte beweging aanzetten | |
| C3 | Formulieren versturen niets | Elk formulier indienen en verifiëren dat er geen verzoek naar een productie-endpoint gaat, niets wordt opgeslagen en de bevestigingspagina zegt dat er niets verzonden is (AVG) | |

## Statuscheck vóór het deelmoment

Vijf vaste URL's, alle vijf status 200: startpagina, een gegenereerde detailpagina, een
formulierpagina, een pagina met zoekfunctie, en één diep genest pad. Faalt er één, dan
gaat het deelmoment niet door: een 404 tijdens een presentatie kost meer geloofwaardigheid
dan drie zwakke schermen.

## Uitslag

```markdown
## QA [datum], commit [hash], modus [open/beveiligd]
Blok A: [n]/3 | Blok B: [n]/4 | Blok C: [n]/3
Open punten: [punt, eigenaar, datum]
Backfill openstaand: [n] items
Oordeel: DELEN / NIET DELEN
```
