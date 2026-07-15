# Definition of Done
Versie: 0.1 (stencil)
Status: TEMPLATE, invullen bij intake

Een fase of document is pas "gereed" als aan alle onderstaande criteria is voldaan.

## Algemeen (elk document)

- Zelfstandig leesbaar, met datum, koppen en duidelijke structuur.
- Elke kwantitatieve claim verwijst naar een bron (GA4-property, GSC, Ads-account, bestand) of staat expliciet als aanname in `09_DECISION-LOG/Assumptions.md`.
- Geen em-dash of en-dash. Terminologie conform `01_CONTEXT/Brand-Context.md`.
- Relevante keuzes vastgelegd in `09_DECISION-LOG/Decision-Log.md`.

## Per fase

**Fase 2, Data-baseline**
- Data-toegangen compleet gedocumenteerd (bron, identifier, beperking).
- Measurement-QA uitgevoerd voor conclusies; bekende meetfouten geflagd.
- Funnel gesegmenteerd op minimaal device, kanaal, new/returning, landingspagina.
- Commerciele baseline met meer dan alleen CVR (omzet, AOV-proxy, ROAS/CPA, kanaalwaarde).

**Fase 3, Diagnose**
- Per kern-flow een audit met bewijs (data plus heuristiek), niet alleen meningen.
- Elk gevonden probleem koppelt aan een KPI en een segment.

**Fase 4, Strategie**
- Conversion Architecture ingevuld over alle lagen, beslismomenten (BM-X) benoemd.
- Propositie-hierarchie en page-type-strategie onderbouwd met intentie- en performancedata.

**Fase 5, Hypotheses**
- Elke hypothese heeft: probleem, bewijs, hypothese, pagina/flow, KPI, segment, ontwerpimpact, testvorm, risico.
- Geprioriteerd via impact-effort (ICE of vergelijkbaar).

**Fase 6, Design**
- Claude Design-richtingen beoordeeld op hypothese-fit, niet op smaak.
- Figma-frames binnen het bestaande design system; componenten en tokens hergebruikt.
- Elke frame gekoppeld aan een APPROVED DDR; prototype gekoppeld aan de hypotheses die het test.

**Fase 7, Validatie**
- Meetbaar testplan met guardrails, sample-size-logica en trackingspecificatie.
- QA-checklist voor live.

**Fase 8, Handoff**
- Dev-ready specs, tracking-plan en gefaseerd rollout-plan dat big-bang-risico vermijdt.
