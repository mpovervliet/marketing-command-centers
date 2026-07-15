# CLIENT-FACING
Versie: 0.1 (stencil)
Status: TEMPLATE, invullen bij intake

Opgeschoonde, klantwaardige output voor [KLANT]. Conclusies en aanbevelingen in begrijpelijke taal. Beleid: `00_PLAN/Client-vs-Internal-Output.md`. Elke export hier is gecontroleerd tegen de "wat NIET mag"-lijst.

## Wat NIET in klant-output mag

- Property-IDs en account-IDs ([GA4_PROPERTY_ID], [ADS_CUSTOMER_ID], [GSC_SITE]).
- Toolnamen, gateway-prefixen en profile-namen.
- GAQL-queries, dataLayer-internals en andere query- of implementatiedetails.
- Promptlogs en agent-instructies.
- Onbevestigde aannames gepresenteerd als feit.

## Wat WEL in klant-output gaat

- Heldere conclusies en kansen, relatief geformuleerd waar absolute cijfers gevoelig zijn.
- Geprioriteerde aanbevelingen met de redenering erachter.
- Visuals, conversion architecture en hypotheses in begrijpelijke taal.
- Duidelijk gemarkeerde "te bevestigen punten" (QA-vragen ontdaan van jargon).

## Inhoud

| Document | Inhoud |
|----------|--------|
| `Executive-Summary-Baseline.md` | Samenvatting van de nulmeting en de grootste kansen |
| [per fase aanvullen] | Diagnose-samenvatting, strategie-presentatie, experiment-resultaten |

## Werkwijze

1. Werk altijd eerst INTERNAL, volledig en eerlijk.
2. Genereer per mijlpaal een client-facing samenvatting die conclusies overneemt en interne details verwijdert.
3. Controleer elke export tegen de "wat NIET mag"-lijst voordat hij gedeeld wordt.
