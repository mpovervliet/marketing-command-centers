# Plan van Aanpak: [KLANT] Conversion Operating System
Versie: 0.1 (stencil)
Status: TEMPLATE, invullen bij intake

## Uitgangspunt

Een data-gedreven UX/CRO-redesigntraject voor [SITE], opgezet als herhaalbaar Conversion Operating System (COS). Elke ontwerpbeslissing is herleidbaar naar data, klantintentie, commerciele impact of UX-frictie. "Zo converterend mogelijk" wordt bewezen via experimenten, niet beweerd via een ontwerp.

We herontwerpen niet "de hele site in een keer". We bouwen een Conversion Architecture en grijpen in per beslismoment. Dat verlaagt risico en maakt de winst meetbaar.

## Rolverdeling

- **Cowork** = regisseur/strateeg/analist (context, audits, data, hypotheses, beslissingen, rapportage).
- **MCP Gateway** = waarheid/datafundament (GA4, GSC, Ads, en andere bronnen waar beschikbaar).
- **Claude Design** = conceptgenerator (3 tot 5 visuele richtingen, divergentie, geen source of truth).
- **Figma (MCP)** = productie- en systeemlaag (design system, componenten, tokens, schermen, prototype, handoff).

## De keten

```
Data → Measurement-QA → Segmentatie → Diagnose → Hypothese
     → Conversion Architecture → Conceptvarianten → Figma
     → Prototype → Experiment-roadmap → Handoff
```

## Fasen en outputmappen

| Fase | Doel | Output |
|------|------|--------|
| 0. Plan & governance | Methodiek, scope, DoD, rollen, logs | `00_PLAN/`, `09_DECISION-LOG/`, `10_PROMPTS-AND-AGENTS/` |
| 1. Context | Bestaande [KLANT]-kennis indexeren | `01_CONTEXT/` |
| 2. Data-baseline | Access, measurement-QA, commercieel, segmentatie, intentie | `02_DATA-BASELINE/` |
| 3. Diagnose | CRO/UX/mobile/checkout/SEO per flow | `03_DIAGNOSIS/`, `03_SITE-STRUCTURE/` |
| 4. Strategie | Conversion architecture, propositie, IA, page-types, messaging | `04_STRATEGY/` |
| 5. Hypotheses | Backlog met bewijs, impact-effort, experiment-roadmap | `05_HYPOTHESES/` |
| 6. Design | Wireframes, Claude Design-richtingen, Figma, componenten, prototype | `06_DESIGN/`, `07_DESIGN-SYSTEM/` |
| 7. Validatie | User-test, A/B-plan, tracking-plan, QA | `07_VALIDATION/` |
| 8. Handoff | Dev, content, tracking, rollout | `08_HANDOFF/` |

## Gebruik van Claude Design en Figma

- Claude Design genereert minimaal vijf richtingen (zie `10_PROMPTS-AND-AGENTS/Claude-Design-Prompts.md`). Daarna beoordeelt Cowork welke richting het best matcht met data, paid angles, GSC-intentie en funnelproblemen. Keuze op hypothese-fit, niet op smaak.
- Figma wordt vroeg ingezet als redesign-workspace met pagina's: 00 Current Site Audit, 01 Data Insights, 02 Conversion Architecture, 03 Wireframes, 04 Visual Directions, 05 Final Components, 06 Prototype, 07 Experiment Variants, 08 Dev Handoff. Figma is daarmee een visueel beslisdocument, niet alleen een ontwerpbestand.

## Eerste stap na intake

Fase 1 en 2 starten: context indexeren, databronnen verifieren via de Gateway, Measurement-QA uitvoeren en de gesegmenteerde baseline trekken. Pas daarna diagnose.
