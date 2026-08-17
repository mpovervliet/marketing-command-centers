# [KLANT] Design OS: Conversion Operating System
Versie: 0.1 (stencil)
Status: TEMPLATE, invullen bij intake

> Invul-instructie: vervang alle placeholders ([KLANTMAP], [KLANT], [SITE], [PRODUCT], [MEETBRON_ID], [ADVERTENTIEBRON_ID], [ZOEKBRON_ID], [PROFILE]) via de swap-lijst in INTAKE-CHECKLIST.md. Eén placeholder komt daar later: [AANTAL-RICHTINGEN] wordt pas ingevuld nadat P8 traject-omvang in `01_CONTEXT/Client-Profile.md` is vastgesteld, dus niet in de zoek-en-vervang-stap maar in de stap waarin het klantprofiel wordt ingevuld. Verwijder daarna dit blok.

Dit is geen "website-redesignmap". Het is een Conversion Operating System (COS): een herhaalbare, data-gedreven methodiek om een site te herontwerpen waarbij elke ontwerpbeslissing herleidbaar is naar data, klantintentie, commerciele impact of UX-frictie, en waarbij elke keuze wordt vastgelegd zodat we later kunnen verantwoorden waarom.

## Rolverdeling (wie doet wat)

| Rol | Tool | Verantwoordelijkheid |
|-----|------|----------------------|
| Regisseur/strateeg/analist | Claude Cowork | Context, audits, data, hypotheses, beslissingen bewaken, rapporteren. De kritische regie. |
| Waarheid/datafundament | De meetbronnen uit het klantprofiel (P2) | Waar zit intentie, frictie, rendement, drop-off, waarde, aanbodmix, device- en kanaalverschil. Elke claim verwijst hiernaar. |
| Conceptgenerator | Geisoleerde subagents, 1 per richting (fase 5b) | Het aantal ontwerprichtingen uit traject-omvang (P8): vijf bij `vol`, drie bij `light`. Elk een andere weddenschap op dezelfde data. Exploratie, geen source of truth. |
| Productie- en systeemlaag | De designtool van het traject | Definitieve ontwerpomgeving: design system, componenten, tokens, schermen, prototype, handoff. |

Kernregel: de subagents divergeren, de lead kiest de weddenschap op user case, business case en risico, Figma produceert die ene richting. Smaak kiest nooit, en het systeem kiest evenmin. Guardrail: conceptoutput wordt nooit definitief zonder toetsing aan hypothese, brand, componenten, toegankelijkheid en haalbaarheid.

## De volgorde (het besturingssysteem)

```
Data → Measurement-QA → Segmentatie → Diagnose
     → Conversion Architecture → Hypothese → Richtingen → Besluit
     → Figma → Prototype → Experiment → Learning
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
| `01_CONTEXT/` | Geindexeerde klantcontext (business, brand, SEO/SEA, technisch) plus het klantprofiel met de acht sturende parameters P1 t/m P8, waaronder P8 traject-omvang |
| `02_DATA-BASELINE/` | Data-contract, evidence registry, reference library, measurement-QA, segmentatie |
| `03_DIAGNOSIS/` | CRO/UX/mobile/conversieflow/SEO-audits plus kwalitatieve research |
| `03b_SITE-STRUCTURE/` | Pagina-inventaris en template registry (HP, T1-Tn, E1-En) |
| `04_STRATEGY/` | Conversion architecture, decision-moment-map, positionering, offer, trust, retentie |
| `05_HYPOTHESES/` | Hypothese-backlog (H-XX), screen-to-hypothesis matrix, experiment-roadmap |
| `05b_DIRECTIONS/` | De onderbouwde ontwerprichtingen (Direction Cases, aantal uit P8), vergelijking en keuze |
| `06_DESIGN/` | Design brief, wireframe briefs (WF-XX), Figma operating model |
| `06b_PROTOTYPE/` | Het klikbare prototype als demo-laag: register, publicatie-protocol, QA-checklist, generator-patroon en starterkit |
| `07_DESIGN-SYSTEM/` | Design tokens van [KLANT] |
| `07b_VALIDATION/` | Experiment-design, tracking-spec, readouts |
| `08_HANDOFF/` | Dev-, content-, tracking-handoff, rollout-plan |
| `09_DECISION-LOG/` | DDRs, coverage matrix, beslissingen, aannames, open vragen, afgewezen ideeen |
| `10_PROMPTS-AND-AGENTS/` | Herbruikbare prompts per tool en agent |
| `11_RED-TEAM/` | Zelf-aanval per fase plus Gate-Records: datakwaliteit, interpretatie, hypothese, risico, bias |
| `CLIENT-FACING/` | Opgeschoonde klant-output |

## Werkregels

1. Geen losse conclusies in chat. Elke fase levert documenten in de juiste map.
2. Elke claim is gekoppeld aan brondata, observatie of een expliciete aanname (`09_DECISION-LOG/Assumptions.md`).
3. Eerst Measurement-QA en het Data-Contract, dan pas conclusies.
4. Alleen betrouwbare metrics als KPI. Zie `02_DATA-BASELINE/Data-Contract.md`.
5. Funnel- en performancedata minimaal gesegmenteerd op device, kanaal, landingspagina, producttype, brand/non-brand en new/returning.
6. Per fase een Red Team Review plus een geldig Gate-Record in `11_RED-TEAM/Gate-Records.md` voor doorgang; in fase 5b ook een toets per richting vóór de keuze. Bij traject-omvang (P8) `light` worden de fase-reviews samengevoegd tot drie momenten: na fase 3 (dekt 0 t/m 3), na fase 6 (dekt 4 t/m 6) en na fase 8 (dekt 7 en 8). Fase 9 handoff heeft ook bij `vol` geen eigen review en hangt aan die van fase 8. Geen fase blijft ongetoetst; het Gate-Record per gate en de toets per richting blijven.
7. De ontwerprichtingen worden altijd in evenveel aparte parallelle subagents gemaakt als er richtingen zijn, nooit achter elkaar in 1 sessie. Mapnummers zijn geen fasenummers; leidend is de fasetabel in `00_PLAN/Plan-van-Aanpak.md`.
8. Schrijfregels: werktaal en leesteken-conventies volgens P6 in `01_CONTEXT/Client-Profile.md`, plus de vaste [KLANT]-terminologie uit `01_CONTEXT/Brand-Context.md`.
9. Elke belangrijke keuze naar `09_DECISION-LOG/Decision-Log.md`.

## Definition of Done per fase

Zie `00_PLAN/Definition-of-Done.md`. Een fase is pas gereed als de documenten zelfstandig leesbaar zijn, elke claim een bron of aanname heeft, de Red Team Review is uitgevoerd met een geldig Gate-Record in `11_RED-TEAM/Gate-Records.md`, en de relevante beslissingen in het decision-log staan met verwijzing naar dat recordnummer. Een go zonder record telt niet.
