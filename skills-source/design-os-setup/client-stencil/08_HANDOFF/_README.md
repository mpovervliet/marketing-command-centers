# 08_HANDOFF
Versie: 0.1 (stencil)
Status: TEMPLATE, invullen bij intake

Doel: dev-ready opleveren met een gefaseerd rollout-plan dat big-bang-risico vermijdt.

## Documenten in deze map

| Document | Inhoud |
|----------|--------|
| `Dev-Handoff.md` | Specs per component/scherm, Figma Dev Mode / Code Connect, acceptatiecriteria per DDR |
| `Content-Handoff.md` | Definitieve copy per page-type, terminologie conform `01_CONTEXT/Brand-Context.md` |
| `Tracking-Handoff.md` | dataLayer/events, conversie- en guardrail-definities, Consent Mode v2, nieuwe events per DDR |
| `Rollout-Plan.md` | Gefaseerde uitrol per beslismoment, staging → prod, feature flags, rollback-criteria |

## Inputs

Definitieve design (fase 6, alleen APPROVED DDRs), validatieplan (fase 7), `01_CONTEXT/Technical-Constraints.md`, platformbevestiging uit `09_DECISION-LOG/Open-Questions.md`.

## Regels

- Alleen componenten met APPROVED DDR gaan in de handoff; NEEDS VALIDATION-items worden expliciet gemarkeerd als concept.
- Elke component in de dev-spec behoudt zijn ID (C-XX) en DDR-verwijzing zodat dev-vragen terug te leiden zijn naar het bewijs.
- Tracking-handoff bevat per nieuw event: naam, trigger, parameters en welk experiment of KPI het voedt.
- Rollout gefaseerd per beslismoment; per fase een go/no-go op basis van guardrails.

## Definition of Done

Dev-ready specs, tracking-plan en gefaseerd rollout-plan dat big-bang-risico vermijdt. Zie `00_PLAN/Definition-of-Done.md`.
