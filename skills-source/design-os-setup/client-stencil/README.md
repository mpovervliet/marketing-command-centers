# [KLANT] Design OS: Conversion Operating System
Versie: 0.1 (stencil)
Status: TEMPLATE, invullen bij intake

> Invul-instructie: vervang alle placeholders ([KLANT], [SITE], [PRODUCT], [GA4_PROPERTY_ID], [ADS_CUSTOMER_ID], [GSC_SITE], [PROFILE]) via de swap-lijst in INTAKE-CHECKLIST.md. Verwijder daarna dit blok.

Dit is geen "website-redesignmap". Het is een Conversion Operating System (COS): een herhaalbare, data-gedreven methodiek om een site te herontwerpen waarbij elke ontwerpbeslissing herleidbaar is naar data, klantintentie, commerciele impact of UX-frictie, en waarbij elke keuze wordt vastgelegd zodat we later kunnen verantwoorden waarom.

## Rolverdeling (wie doet wat)

| Rol | Tool | Verantwoordelijkheid |
|-----|------|----------------------|
| Regisseur/strateeg/analist | Claude Cowork | Context, audits, data, hypotheses, beslissingen bewaken, rapporteren. De kritische regie. |
| Waarheid/datafundament | MCP Gateway (GA4, GSC, Google Ads, en andere bronnen waar beschikbaar) | Waar zit intentie, frictie, ROAS, drop-off, LTV, productmix, device- en kanaalverschil. Elke claim verwijst hiernaar. |
| Conceptgenerator | Claude Design | Snelle visuele divergentie, 3 tot 5 richtingen. Exploratie, geen source of truth. |
| Productie- en systeemlaag | Figma (MCP) | Definitieve ontwerpomgeving: design system, componenten, tokens, schermen, prototype, handoff. |

Kernregel: Claude Design divergeert, Cowork beslist op basis van data, Figma produceert. Smaak kiest nooit; hypothese-fit kiest. Guardrail: Claude Design-output wordt nooit definitief zonder toetsing aan hypothese, brand, componenten, toegankelijkheid en haalbaarheid.

## De volgorde (het besturingssysteem)

```
Data → Measurement-QA → Segmentatie → Diagnose → Hypothese
     → Conversion Architecture → Concepten → Figma
     → Prototype → Experiment → Learning
```

We beginnen niet met "de hele site", maar met een Conversion Architecture die de site opdeelt in beslismomenten (BM-X). Het redesign wordt daarmee een set conversie-ingrepen per beslismoment, geen nieuwe website in een keer.

## Twee output-modi

| Modus | Locatie | Inhoud |
|-------|---------|--------|
| INTERNAL | de genummerde mappen (00 t/m 11) | Volledige data, property-IDs, aannames, prompts, ruwe analyses |
| CLIENT-FACING | `CLIENT-FACING/` | Opgeschoonde conclusies, geen interne IDs/toolnamen/promptlogs |

Beleid: `00_PLAN/Client-vs-Internal-Output.md`.

## Mapstructuur

| Map | Inhoud |
|-----|--------|
| `00_PLAN/` | Plan, scope, definition of done, governance, protocol, client-vs-internal |
| `01_CONTEXT/` | Geindexeerde klantcontext (business, brand, SEO/SEA, technisch) |
| `02_DATA-BASELINE/` | Data-contract, evidence registry, reference library, measurement-QA, segmentatie |
| `03_DIAGNOSIS/` | CRO/UX/mobile/checkout/SEO-audits plus kwalitatieve research |
| `03_SITE-STRUCTURE/` | Pagina-inventaris en template registry (HP, T1-Tn, E1-En) |
| `04_STRATEGY/` | Conversion architecture, decision-moment-map, positionering, offer, trust, retentie |
| `05_HYPOTHESES/` | Hypothese-backlog (H-XX), screen-to-hypothesis matrix, experiment-roadmap |
| `06_DESIGN/` | Design brief, wireframe briefs (WF-XX), Figma operating model |
| `07_DESIGN-SYSTEM/` | Design tokens van [KLANT] |
| `07_VALIDATION/` | Experiment-design, tracking-spec, readouts |
| `08_HANDOFF/` | Dev-, content-, tracking-handoff, rollout-plan |
| `09_DECISION-LOG/` | DDRs, coverage matrix, beslissingen, aannames, open vragen, afgewezen ideeen |
| `10_PROMPTS-AND-AGENTS/` | Herbruikbare prompts per tool en agent |
| `11_RED-TEAM/` | Zelf-aanval per fase: datakwaliteit, interpretatie, hypothese, risico, bias |
| `CLIENT-FACING/` | Opgeschoonde klant-output |

## Werkregels

1. Geen losse conclusies in chat. Elke fase levert documenten in de juiste map.
2. Elke claim is gekoppeld aan brondata, observatie of een expliciete aanname (`09_DECISION-LOG/Assumptions.md`).
3. Eerst Measurement-QA en het Data-Contract, dan pas conclusies.
4. Alleen betrouwbare metrics als KPI. Zie `02_DATA-BASELINE/Data-Contract.md`.
5. Funnel- en performancedata minimaal gesegmenteerd op device, kanaal, landingspagina, producttype, brand/non-brand en new/returning.
6. Per fase een Red Team Review voor doorgang.
7. Schrijfregels: Nederlands, geen em-dash of en-dash, vaste [KLANT]-terminologie (vastleggen in `01_CONTEXT/Brand-Context.md`).
8. Elke belangrijke keuze naar `09_DECISION-LOG/Decision-Log.md`.

## Definition of Done per fase

Zie `00_PLAN/Definition-of-Done.md`. Een fase is pas gereed als de documenten zelfstandig leesbaar zijn, elke claim een bron of aanname heeft, de Red Team Review is uitgevoerd, en de relevante beslissingen in het decision-log staan.
