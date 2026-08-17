# Prototype-Register [KLANT]
Versie: 0.1 (stencil)
Status: TEMPLATE, bijwerken bij elke bouwsessie

Eén regel per uniek scherm of per gegenereerde set, niet per gegenereerde pagina. Dit
register is de enige plek waar staat welk scherm op welke beslissing rust. Een scherm dat
hier niet staat, wordt niet gepubliceerd.

## ID-conventie

| Prefix | Betekenis | Voorbeeld |
|---|---|---|
| PR-XX | Uniek scherm | PR-01 |
| PRG-XX | Gegenereerde set | PRG-01_productdetail |
| PRF-XX | Flow (reeks PR-ID's) | PRF-01_offerte-aanvraag |

Bestandsnamen volgen de slug uit `03b_SITE-STRUCTURE/Page-Inventory.md`. Wijkt een slug
af, dan is dat een IA-besluit en hoort het daar te worden gewijzigd, niet alleen in code.

## Schermen

| PR-ID | Scherm | Bestand | Bouwmodus | DDR / label | Status | Laatste QA |
|---|---|---|---|---|---|---|
| PR-01 | [Startpagina] | index.html | handmatig | DDR-[HX-NN] | concept | |
| PR-02 | [Kern-flow stap 1] | | handmatig | | concept | |
| PRG-01 | [Detailtype] ([n]) | [map]/*.html | generator + `_data/[naam].json` | | concept | |

Statuswaarden: `concept` (in aanbouw), `gebouwd` (klaar, niet gepubliceerd),
`gepubliceerd`, `ingetrokken`.

## PROTO-ONLY items

Demo-plakwerk dat nooit productie wordt. Elk item heeft een vervaldatum; op die datum is
het weg of het is een DDR geworden.

| PR-ID | Wat | Waarom demo | Vervaldatum | Eigenaar |
|---|---|---|---|---|
| | | | | |

## Backfill-schuld

Wat in code is veranderd en in de ontwerp-waarheid nog niet. Drempel: boven 5 open items
stoppen met bouwen en eerst synchroniseren.

| # | Scherm | Wijziging in code | Terug naar ontwerp | Eigenaar | Datum |
|---|---|---|---|---|---|
| | | | | | |

## QA-scorekaarten

Eén blok per deelmoment, nieuwste bovenaan. Zonder scorekaart geen deelmoment.

```markdown
## QA [datum], commit [hash], modus [open/beveiligd]
Blok A: [n]/3 | Blok B: [n]/4 | Blok C: [n]/3
Open punten: [punt, eigenaar, datum]
Backfill openstaand: [n] items
Oordeel: DELEN / NIET DELEN
Gedeeld met: [kring] door [naam] op [datum]
```
