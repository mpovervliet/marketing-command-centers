# Governance
Versie: 0.1 (stencil)
Status: TEMPLATE, invullen bij intake

Doel: vastleggen wie beslist, hoe kwaliteit wordt bewaakt en in welk ritme het Conversion Operating System loopt. Zo wordt het een methodiek, niet een losse map.

## Rollen en eigenaarschap

| Rol | Tool/persoon | Mandaat |
|-----|--------------|---------|
| Regisseur/strateeg/analist | Cowork (aangestuurd door de lead) | Context, audits, data, hypotheses, beslissingen voorbereiden, documenteren |
| Datafundament | De meetbronnen uit het klantprofiel (P2) | Bron van waarheid; geen conclusie zonder bron of expliciete aanname |
| Conversion architect | Cowork, fase 4 | Beslismomenten (BM-X), conversion architecture, site-structuur |
| Conceptgenerator | Geisoleerde subagents, 1 per richting (fase 5b) | Divergentie tot evenveel weddenschappen als richtingen uit traject-omvang (P8): vijf bij `vol`, drie bij `light`. Nooit definitief zonder toetsing |
| Kwaliteitspoort | Red Team in aparte subagent | Geen go zonder Gate-Record met isolatie-bewijs |
| Productie/systeem | De designtool van het traject | Source of truth voor productie-design, componenten, tokens |
| Eindbeslisser inhoud | [lead invullen] | Keurt fasen goed, bewaakt klantbelang |
| Klant-beslisser | [KLANT], contactpersoon invullen | Akkoord op design/checkout/tracking-wijzigingen |

## Kwaliteitspoorten (gates)

Een fase mag pas door naar de volgende als:
1. Definition of Done van die fase is gehaald (`Definition-of-Done.md`).
2. Er een Red Team Review is uitgevoerd (`11_RED-TEAM/`).
3. Er een geldig Gate-Record in `11_RED-TEAM/Gate-Records.md` staat: isolatie-bewijs ingevuld met "schreef deze context het werk" op nee, de betreffende ID's staan er letterlijk in, het record is jonger dan de laatste wijziging van die items, en het oordeel is GO met afgehandelde voorwaarden. Een go zonder record telt niet.
4. Relevante beslissingen in `09_DECISION-LOG/Decision-Log.md` staan, met verwijzing naar het recordnummer.
5. Open aannames met validatie-actie in `Assumptions.md` staan.

## Cadans

- Per fase: een afgerond documentpakket plus Red Team Review plus Gate-Record plus decision-log-update. Bij traject-omvang (P8) `light` worden de fase-reviews samengevoegd tot drie momenten: na fase 3 (dekt 0 t/m 3), na fase 6 (dekt 4 t/m 6) en na fase 8 (dekt 7 en 8). Fase 9 handoff heeft ook bij `vol` geen eigen review en hangt aan die van fase 8. Geen fase blijft ongetoetst; de documentpakketten, Gate-Records en de toets per richting in fase 5b blijven ongewijzigd.
- Bij elke sessie: voortgang wegschrijven in de projectmap.
- Maandelijks: consolideren en opschonen.

## Tweelagige output

Alle werk kent twee modi (zie `Client-vs-Internal-Output.md`):
- INTERNAL: volledige data, property-IDs, aannames, prompts, ruwe analyses (de genummerde mappen).
- CLIENT-FACING: opgeschoonde conclusies zonder interne IDs/toolnamen (`CLIENT-FACING/`).

## Schrijf- en kwaliteitsregels

- Werktaal en schrijfconventies volgens P6 in `01_CONTEXT/Client-Profile.md`. Helder en direct.
- Terminologie: vaste productnamen van [KLANT] (vastleggen in `01_CONTEXT/Brand-Context.md`).
- Geen losse chatconclusies: elke uitkomst landt in een document.
- Elke kwantitatieve claim verwijst naar bron of aanname.

## Herbruikbaarheid

Dit systeem is klant-agnostisch opgezet. Voor een nieuwe klant worden alleen de bron-IDs, context en data vervangen; structuur, governance en prompts blijven gelijk.
