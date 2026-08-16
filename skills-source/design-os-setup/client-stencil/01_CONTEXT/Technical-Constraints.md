# Technical-Constraints [KLANT]
Versie: 0.1 (stencil)
Status: TEMPLATE, invullen bij intake

> Invul-instructie: beantwoord met het dev-team van [KLANT]. Onbeantwoorde vragen naar `09_DECISION-LOG/Open-Questions.md`. Technische haalbaarheid is geen van de 10 verplichte vragen uit het protocol; het is dimensie 4 van de Red Team-fase-review ("Technische haalbaarheid": welke ingreep is technisch lastig of duur en daardoor risicovol, en botst iets met platform-, legal- of compliance-constraints). Onbeantwoorde vragen hier komen daar dus terug, en ze bepalen bovendien het veld Implementatielast in elke Direction Case.

## Invulvragen

1. Welk CMS / frontend-framework draait [SITE]? (bepaalt handoff-vorm in fase 9)
2. Welk systeem verwerkt de conversie (checkout, formulier-tool, boekingsengine, signup-stack, CRM-koppeling) en hoe aanpasbaar is het?
3. Is de site (deels) client-side gerenderd? Welke pagina's zijn niet crawlbaar?
4. Hoe verloopt releasen? (cadans, staging, feature flags, rollback-mogelijkheid)
5. Welke A/B-testtooling is beschikbaar en waar mag getest worden?
6. Hoe is tracking opgezet? (GTM-container, dataLayer-structuur, key events, het consent-mechanisme van dit rechtsregime (P5))
7. Wat zijn de huidige Core Web Vitals op de kern-LP's mobiel? (LCP, INP, CLS)
8. Welke wettelijke of compliance-eisen raken de funnel? (KYC, leeftijd, sector-regels)
9. Welke velden in de conversiestap zijn verplicht om juridische of operationele redenen?
10. Welke systemen zijn onaantastbaar in dit traject? (billing, CRM, ERP)

## Bekende constraints (invullen)

| # | Constraint | Impact op design/experimenten | Bron | Status |
|---|-----------|-------------------------------|------|--------|
| TC1 | | | | Open |
| TC2 | | | | Open |
