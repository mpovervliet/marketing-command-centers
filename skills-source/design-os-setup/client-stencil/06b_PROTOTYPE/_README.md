# 06b_PROTOTYPE: de bewegende demo-laag
Versie: 0.1 (stencil)
Status: TEMPLATE, vullen in fase 7b

Doel: van de gekozen richting een klikbaar prototype maken dat een opdrachtgever zelf
kan doorlopen, zodat beslissingen getoetst worden op gedrag in plaats van op instemming
bij een presentatie.

Eigenaar: `design-os-prototype`.

## Kernregel

De designtool bevat de waarheid, het prototype is de bewegende demo daarvan. Het
prototype neemt nooit een ontwerpbeslissing die niet in een DDR staat. Wat in code
ontstaat en niet gedekt is, wordt teruggedraaid, wordt een DDR-aanvraag, of krijgt het
label PROTO-ONLY met een vervaldatum.

## Wanneer deze fase draait

Fase 7b hangt tussen fase 7 (Design) en fase 8 (Validatie) en is optioneel. Draai hem
wanneer minimaal 1 van deze drie geldt:

- er komt een deelmoment of gebruikerstest waarbij klikgedrag meer oplevert dan kijken
- de kern-flow bevat interactie die statisch niet over te brengen is (filters, zoeken,
  meerstapsformulieren, condities)
- de opdrachtgever moet intern draagvlak organiseren en heeft daarvoor iets nodig dat
  zonder uitleg te begrijpen is

Sla hem over bij traject-modus `diagnose-only` en bij een traject dat maar 1 template
raakt.

## Bestanden in deze map

| Bestand | Inhoud |
|---|---|
| `Prototype-Register.md` | 1 regel per scherm of gegenereerde set, met PR-ID, DDR-koppeling en QA-scorekaarten |
| `Publish-Protocol.md` | Onder welk account de repo komt, de twee publicatie-modi met hun eisen, en de vaste framing bij delen |
| `Prototype-QA-Checklist.md` | De tienpunts-poort die vóór elk deelmoment groen moet staan |
| `Generator-Patroon.md` | Hoe je pagina's genereert in plaats van kopieert, en de zes conventies daarbij |
| `starterkit/` | Werkende basis: tokens-CSS, basispagina, generator, deploy-scripts, robots en noindex |

## Definition of Done

Elk scherm in het register met DDR-ID of PROTO-ONLY plus vervaldatum; QA-scorekaart met
datum en commit-hash bij het laatste deelmoment; publicatie-account en modus vastgelegd in
`09_DECISION-LOG/Decision-Log.md`; backfill-lijst leeg of onder de drempel van 5 items;
niet-gekozen richtingen niet zichtbaar in de publicatie.

## Wat hier NIET hoort

Productie-code, echte klantdata of persoonsgegevens, tags van de opdrachtgever
(analytics, advertenties, consent), en formulieren die daadwerkelijk iets versturen.
De productie-implementatie loopt via fase 9 en `08_HANDOFF/`.
