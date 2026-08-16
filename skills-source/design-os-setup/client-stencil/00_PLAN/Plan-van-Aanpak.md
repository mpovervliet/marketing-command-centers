# Plan van Aanpak: [KLANT] Conversion Operating System
Versie: 0.1 (stencil)
Status: TEMPLATE, invullen bij intake

## Uitgangspunt

Een data-gedreven UX/CRO-redesigntraject voor [SITE], opgezet als herhaalbaar Conversion Operating System (COS). Elke ontwerpbeslissing is herleidbaar naar data, klantintentie, commerciele impact of UX-frictie. "Zo converterend mogelijk" wordt bewezen via experimenten, niet beweerd via een ontwerp.

We herontwerpen niet "de hele site in een keer". We bouwen een Conversion Architecture en grijpen in per beslismoment. Dat verlaagt risico en maakt de winst meetbaar.

## Rolverdeling

- **Cowork** = regisseur/strateeg/analist (context, audits, data, hypotheses, beslissingen, rapportage).
- **De meetbronnen uit P2** = waarheid/datafundament (de meetbronnen uit het klantprofiel, P2).
- **Conceptgeneratie** = geisoleerde subagents, 1 per ontwerprichting (divergentie, geen source of truth). Het aantal richtingen volgt uit traject-omvang (P8): vijf bij `vol`, drie bij `light`.
- **Figma (MCP)** = productie- en systeemlaag (design system, componenten, tokens, schermen, prototype, handoff).

## De keten

```
Data → Measurement-QA → Segmentatie → Diagnose
     → Conversion Architecture → Hypothese → Richtingen → Besluit
     → Figma → Prototype → Experiment-roadmap → Handoff
```

## Fasen en outputmappen

| Fase | Doel | Output |
|------|------|--------|
| 0. Plan & governance | Methodiek, scope, DoD, rollen, logs | `00_PLAN/`, `09_DECISION-LOG/`, `10_PROMPTS-AND-AGENTS/` |
| 1. Context | Bestaande [KLANT]-kennis indexeren | `01_CONTEXT/` |
| 2. Data-baseline | Access, measurement-QA, commercieel, segmentatie, intentie | `02_DATA-BASELINE/` |
| 3. Diagnose | CRO/UX/mobile/conversieflow/SEO per flow | `03_DIAGNOSIS/` |
| 4. Strategie | Conversion architecture, beslismomenten (BM-X), propositie, IA, page-types | `04_STRATEGY/`, `03b_SITE-STRUCTURE/` |
| 5. Hypotheses | Backlog met bewijs, impact-effort, experiment-roadmap | `05_HYPOTHESES/` |
| 5b. Richtingen | Onderbouwde weddenschappen op de kern-flow (aantal uit P8), keuze door de lead | `05b_DIRECTIONS/` |
| 6. Besluit | DDR's binnen de gekozen richting, coverage matrix, gating | `09_DECISION-LOG/` |
| 7. Design | Wireframes, Figma-uitwerking van de gekozen richting, componenten, prototype | `06_DESIGN/`, `07_DESIGN-SYSTEM/` |
| 8. Validatie | User-test, A/B-plan, tracking-plan, QA | `07b_VALIDATION/` |
| 9. Handoff | Dev, content, tracking, rollout | `08_HANDOFF/` |

Let op: mapnummers zijn géén fasenummers. De map `07_DESIGN-SYSTEM/` hoort bij fase 7 en `07b_VALIDATION/` bij fase 8; `03_DIAGNOSIS/` bij fase 3 en `03b_SITE-STRUCTURE/` bij fase 4. Leidend is de fasetabel hierboven, niet het mapnummer.

Ritme van de Red Team-reviews: bij traject-omvang (P8) `vol` volgt na elke fase een eigen fase-review. Bij `light` worden die fase-reviews samengevoegd tot drie momenten: een review na fase 3 (dekt 0 t/m 3), een review na fase 6 (dekt 4 t/m 6) en een review na fase 8 (dekt 7 en 8). Fase 9 handoff heeft ook bij `vol` geen eigen review en hangt aan die van fase 8. Dat verandert alleen het ritme, niet de inhoud: geen fase blijft ongetoetst, elke gate houdt zijn eigen Gate-Record en de toets per richting in fase 5b blijft los daarvan bestaan.

## Conceptgeneratie en Figma

- In fase 5b wordt het aantal richtingen uit traject-omvang (P8) gegenereerd: vijf bij `vol`, drie bij `light`, nooit minder dan drie. Elke richting krijgt een eigen geisoleerde subagent met een verbodslijst van de mechaniek en visuele taal van de andere richtingen (zie `10_PROMPTS-AND-AGENTS/Claude-Design-Prompts.md` en `05b_DIRECTIONS/`). Er zijn altijd evenveel geisoleerde subagents als richtingen: minder richtingen is geen reden om ze in 1 context te schrijven. De richtingen zijn verschillende weddenschappen op dezelfde data, niet varianten van dezelfde weddenschap.
- De lead kiest de weddenschap op basis van user case, business case en risico. Het systeem doet geen aanbeveling; zodra het kiest, wordt de onderbouwing achteraf-rationalisatie.
- De Figma-werkomgeving (file-toegang, paginastructuur) wordt vroeg ingericht zodat de build zonder wachttijd kan starten zodra de gate opengaat; het daadwerkelijk bouwen van schermen begint pas na Red Team APPROVED op de betreffende DDR's en nadat de richting gekozen en gelogd is (zie `00_PLAN/Data-Governed-Design-Protocol.md`, sectie De agent-workflow). De pagina-indeling staat in `06_DESIGN/Design-Brief.md` sectie 5 en dat is de enige bron; herhaal hem hier niet. Er is geen pagina met concurrerende visuele richtingen meer: die keuze is in fase 5b gemaakt en onderbouwd.

## Eerste stap na intake

Fase 1 en 2 starten: context indexeren, databronnen verifieren via de Gateway, Measurement-QA uitvoeren en de gesegmenteerde baseline trekken. Pas daarna diagnose.
