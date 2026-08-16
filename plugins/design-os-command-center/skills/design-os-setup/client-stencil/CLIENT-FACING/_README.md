# CLIENT-FACING
Versie: 0.1 (stencil)
Status: TEMPLATE, invullen bij intake

Opgeschoonde, klantwaardige output voor [KLANT]. Conclusies en aanbevelingen in begrijpelijke taal. Beleid: `00_PLAN/Client-vs-Internal-Output.md`. Elke export hier is gecontroleerd tegen de "wat NIET mag"-lijst.

## Wat NIET in klant-output mag

- Property-IDs en account-IDs ([MEETBRON_ID], [ADVERTENTIEBRON_ID], [ZOEKBRON_ID]).
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

| Document | Na fase | Inhoud |
|----------|---------|--------|
| `Executive-Summary-Baseline.md` | 3 (Diagnose) | Samenvatting van de nulmeting en de grootste kansen (zie template en voorbeeld in dit bestand) |
| `Strategie-Presentatie.md` | 4/5b (Strategie/Richtingen) | De gekozen kern-flow, de beslismomenten in klanttaal, en de ontwerprichtingen ter keuze |
| `Design-Voorstel.md` | 7 (Design) | Screenshots van de uitgewerkte richting met 1-2 zinnen per scherm over het functionele en visuele mandaat dat het waarmaakt |
| `Experiment-Resultaten.md` | 8 (Validatie) | Per experiment: wat getest is, de uitkomst in klanttaal (gewonnen/geen verschil/verloren), en het vervolg |
| `Rollout-Samenvatting.md` | 9 (Handoff) | Wat live gaat, in welke volgorde, en wat de klant kan verwachten na livegang |

Maak elk document pas aan wanneer de bijbehorende fase daadwerkelijk is afgerond; een leeg
document vooraf aanmaken suggereert voortgang die er nog niet is.

## Werkwijze

1. Werk altijd eerst INTERNAL, volledig en eerlijk.
2. Genereer per mijlpaal een client-facing samenvatting die conclusies overneemt en interne details verwijdert.
3. Controleer elke export tegen de "wat NIET mag"-lijst voordat hij gedeeld wordt.
