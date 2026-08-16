# 08_HANDOFF
Versie: 0.1 (stencil)
Status: TEMPLATE, invullen bij intake

Doel: dev-ready opleveren met een gefaseerd rollout-plan dat big-bang-risico vermijdt.

## Documenten in deze map

| Document | Inhoud |
|----------|--------|
| `Dev-Handoff.md` | Specs per component/scherm. Route A (met devteam): Figma Dev Mode / Code Connect, acceptatiecriteria per DDR. Route B (zonder devteam, bijv. freelance WordPress/Elementor-bouwer): screenshots plus niet-technische checklist |
| `Content-Handoff.md` | Definitieve copy per page-type, terminologie conform `01_CONTEXT/Brand-Context.md` |
| `Tracking-Handoff.md` | Conversie- en guardrail-definities. Route A (met devteam): dataLayer/events, het consent-mechanisme van dit rechtsregime (P5), nieuwe events per DDR. Route B (zonder devteam/GTM-toegang): native platform-tracking of handmatige telling als guardrail-vervanger |
| `Rollout-Plan.md` | Gefaseerde uitrol per beslismoment plus rollback-criteria. Route A: met staging, feature flags en een dev-team, uitrol per flag met een go/no-go per fase. Route B: zonder die infrastructuur, uitrol in een afgebakend tijdvenster met een dagelijkse guardrail-check en een teruggezette versie klaar |

Welke route (A of B) van toepassing is volgt uit `01_CONTEXT/Technical-Constraints.md`
(vraag 1: CMS/frontend-framework, en vraag 4: releaseproces). Beide routes zijn
volwaardig: Route B is geen verkapte lagere kwaliteitslat, maar een andere manier om
dezelfde Definition of Done te halen bij minder technische infrastructuur.

## Inputs

Definitieve design (fase 7, alleen APPROVED of PERMANENT DDRs), validatieplan (fase 8), `01_CONTEXT/Technical-Constraints.md`, platformbevestiging uit `09_DECISION-LOG/Open-Questions.md`.

## Regels

- Alleen componenten met een APPROVED of PERMANENT DDR gaan in de handoff; NEEDS VALIDATION-items worden expliciet gemarkeerd als concept. Bij PERMANENT horen het liftpercentage en het Experiment-ID in de spec.
- Elke component in de dev-spec behoudt zijn ID (C-XX) en DDR-verwijzing zodat dev-vragen terug te leiden zijn naar het bewijs.
- Tracking-handoff bevat per nieuw event: naam, trigger, parameters en welk experiment of KPI het voedt.
- Rollout gefaseerd per beslismoment; per fase een go/no-go op basis van guardrails.

## Definition of Done

Dev-ready specs, tracking-plan en gefaseerd rollout-plan dat big-bang-risico vermijdt. Zie `00_PLAN/Definition-of-Done.md`.
