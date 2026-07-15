# Client-vs-Internal-Output
Versie: 0.1 (stencil)
Status: TEMPLATE, invullen bij intake

Doel: scheiden wat intern is (volledige werkelijkheid) van wat klantwaardig is (opgeschoonde conclusies). Voorkomt dat property-IDs, toolnamen, promptlogs en ruwe analyses in klantmateriaal belanden.

## Twee modi

| Aspect | INTERNAL | CLIENT-FACING |
|--------|----------|---------------|
| Locatie | de genummerde mappen (00 t/m 11) | `CLIENT-FACING/` |
| Data | volledig, met absolute cijfers | conclusies, relatief waar nodig, geen ruwe IDs |
| Technische details | property-IDs, customer-IDs, GAQL, toolnamen | weggelaten of geabstraheerd |
| Aannames/QA | expliciet en zichtbaar | vertaald naar "te bevestigen punten" zonder jargon |
| Prompts/agents | volledig (`10_PROMPTS-AND-AGENTS/`) | niet aanwezig |
| Toon | operationeel/analytisch | strategisch/besluitvormend |

## Wat NIET naar CLIENT-FACING mag

- GA4 property-ID ([GA4_PROPERTY_ID]), Ads customer-ID ([ADS_CUSTOMER_ID]), GSC-property-string ([GSC_SITE]).
- Toolnamen en gateway-prefixen, GAQL-queries, dataLayer-internals.
- Promptlogs en agent-instructies.
- Onbevestigde aannames als feit gepresenteerd.

## Wat WEL naar CLIENT-FACING gaat

- Heldere conclusies en kansen (bijv. "mobiel converteert lager dan desktop, grootste hefboom zit mobiel").
- Geprioriteerde aanbevelingen en de redenering erachter.
- Visuals, conversion architecture, hypotheses in begrijpelijke taal.
- Duidelijk gemarkeerde "te bevestigen punten" (de QA-vragen, ontdaan van jargon).

## Werkwijze

1. Werk altijd eerst INTERNAL (volledig en eerlijk).
2. Genereer per mijlpaal een CLIENT-FACING-samenvatting die de conclusies overneemt en de interne details verwijdert.
3. Controleer elke client-facing export tegen de "wat NIET mag"-lijst voordat hij gedeeld wordt.

## Eerste client-facing artefact

`CLIENT-FACING/Executive-Summary-Baseline.md`: opgeschoonde samenvatting van de data-baseline, klaar om met [KLANT] te delen.
