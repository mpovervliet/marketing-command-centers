# Generator-Patroon [KLANT]
Versie: 0.1 (stencil)
Status: TEMPLATE, aanpassen aan de templateset van deze klant

Vanaf 8 pagina's van hetzelfde template stop je met kopiëren en schrijf je een generator.
Onder die drempel is een generator meer werk dan hij oplevert; erboven is handwerk de
oorzaak van elk stil verschil tussen pagina's.

## De zes conventies

1. **Eén generator per templatetype.** `_gen_<template>.py` leest `_data/<template>.json`
   en schrijft de pagina's naar de prototype-root of een submap. Geen generator die twee
   templatetypes tegelijk doet.
2. **Data en presentatie gescheiden.** Alle variabele inhoud in JSON, nooit in de
   generator. Een contentcorrectie is dan een JSON-edit plus rerun in plaats van
   zoek-en-vervang over honderden bestanden.
3. **Gegenereerde bestanden zijn wegwerpartikelen.** Nooit met de hand editen. Handmatige
   edits in gegenereerde output verdwijnen bij de volgende run zonder foutmelding, want
   de pagina bestaat daarna nog steeds.
4. **Blok-markers voor tweede passes.** Omsluit machinaal beheerde secties met
   `<!-- seo-head -->` en `<!-- /seo-head -->`, zodat een aparte generator meta, canonical
   en gestructureerde data kan herschrijven zonder de pagina opnieuw te bouwen.
5. **Zoekindex als laatste stap.** Eén indexgenerator die ná alle andere draait, over de
   definitieve bestandsset. Draait hij eerder, dan wijst de zoekfunctie naar pagina's die
   niet meer bestaan.
6. **Deterministisch.** Dezelfde data plus dezelfde generator geeft byte-identieke output.
   Willekeur (roterende beelden, tijdstempels) hoort in de browserlaag, niet in de build.

## Volume-norm

Een prototype van enkele honderden pagina's is haalbaar en overtuigend, maar alleen als
minder dan tien procent handmatig is. Loopt het aandeel handwerk daarboven, dan is de
onderhoudslast groter dan de demo-waarde: schrap dan breedte en verdiep de kern-flow.

## Bouwvolgorde

| Stap | Wat | Waarom in deze volgorde |
|---|---|---|
| 1 | Kern-flow handmatig, volledig doorklikbaar | De flow is de demo; breedte zonder flow overtuigt niet |
| 2 | Datamodel per templatetype vastleggen in JSON | Het model bepaalt de generator, niet andersom |
| 3 | Generators per templatetype draaien | Volume erbij zonder handwerk |
| 4 | Meta-pass over alle pagina's (blok-markers) | Titels, beschrijvingen, canonical en noindex in 1 keer consistent |
| 5 | Zoekindex genereren | Over de definitieve set |
| 6 | Linkcheck plus QA-blok C | Pas nu heeft controleren zin |

## Datamodel-skelet

```json
{
  "items": [
    {
      "slug": "voorbeeld-item",
      "titel": "",
      "intro": "",
      "kenmerken": [],
      "beeld": {"bron": "", "licentie": "", "alt": ""},
      "cta": {"label": "", "doel": ""},
      "ddr": "DDR-[HX-NN]"
    }
  ]
}
```

Het veld `ddr` is geen decoratie: het maakt de gegenereerde set herleidbaar in
`Prototype-Register.md` zonder dat je per pagina hoeft te zoeken.

## Veelvoorkomende valkuilen

- Relatieve paden in CSS zijn relatief aan het CSS-bestand, niet aan de pagina. Staat
  `theme.css` in `css/`, dan is een verwijzing naar `assets/` dus `../assets/`.
- Generators die naar dezelfde bestandsnaam schrijven overschrijven elkaar stil; laat elke
  generator zijn bestandslijst afdrukken en vergelijk de totalen.
- Een JSON met een niet-unieke slug levert minder pagina's op dan verwacht: tel altijd
  invoerregels tegen uitvoerbestanden.
