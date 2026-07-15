# Governance
Versie: 0.1 (stencil)
Status: TEMPLATE, invullen bij intake

Doel: vastleggen wie beslist, hoe kwaliteit wordt bewaakt en in welk ritme het Conversion Operating System loopt. Zo wordt het een methodiek, niet een losse map.

## Rollen en eigenaarschap

| Rol | Tool/persoon | Mandaat |
|-----|--------------|---------|
| Regisseur/strateeg/analist | Cowork (aangestuurd door de lead) | Context, audits, data, hypotheses, beslissingen voorbereiden, documenteren |
| Datafundament | MCP Gateway | Bron van waarheid; geen conclusie zonder bron of expliciete aanname |
| Conceptgenerator | Claude Design | Divergentie, nooit definitief zonder toetsing |
| Productie/systeem | Figma (MCP) | Source of truth voor productie-design, componenten, tokens |
| Eindbeslisser inhoud | [lead invullen] | Keurt fasen goed, bewaakt klantbelang |
| Klant-beslisser | [KLANT], contactpersoon invullen | Akkoord op design/checkout/tracking-wijzigingen |

## Kwaliteitspoorten (gates)

Een fase mag pas door naar de volgende als:
1. Definition of Done van die fase is gehaald (`Definition-of-Done.md`).
2. Er een Red Team Review is uitgevoerd (`11_RED-TEAM/`).
3. Relevante beslissingen in `09_DECISION-LOG/Decision-Log.md` staan.
4. Open aannames met validatie-actie in `Assumptions.md` staan.

## Cadans

- Per fase: een afgerond documentpakket plus Red Team Review plus decision-log-update.
- Bij elke sessie: voortgang wegschrijven in de projectmap.
- Maandelijks: consolideren en opschonen.

## Tweelagige output

Alle werk kent twee modi (zie `Client-vs-Internal-Output.md`):
- INTERNAL: volledige data, property-IDs, aannames, prompts, ruwe analyses (de genummerde mappen).
- CLIENT-FACING: opgeschoonde conclusies zonder interne IDs/toolnamen (`CLIENT-FACING/`).

## Schrijf- en kwaliteitsregels

- Nederlands, helder, direct. Geen em-dash of en-dash.
- Terminologie: vaste productnamen van [KLANT] (vastleggen in `01_CONTEXT/Brand-Context.md`).
- Geen losse chatconclusies: elke uitkomst landt in een document.
- Elke kwantitatieve claim verwijst naar bron of aanname.

## Herbruikbaarheid

Dit systeem is klant-agnostisch opgezet. Voor een nieuwe klant worden alleen de bron-IDs, context en data vervangen; structuur, governance en prompts blijven gelijk.
