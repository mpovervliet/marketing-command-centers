# Data-Contract
Versie: 0.2 (stencil)
Status: TEMPLATE, invullen bij intake

Doel: formeel vastleggen welke metric waarvoor gebruikt mag worden. Voorkomt dat iemand later een onbetrouwbare metric als conversiewinst presenteert. Dit contract is bindend voor alle documenten in dit systeem.

> Invul-instructie: bepaal eerst het conversie-model (P1) en de meet-stack (P2) uit `01_CONTEXT/Client-Profile.md`. Kies daarna de bijbehorende funnel-set hieronder en vul per gebruikte metric een rij tijdens de Measurement-QA (fase 2). De metric-namen hangen van de meetbron af; de kolommen niet.

## Conversie-model van deze klant

| Veld | Waarde (uit `01_CONTEXT/Client-Profile.md`) |
|------|---------------------------------------------|
| P1 conversie-model | [transactie / lead / abonnement / offerte-configurator / hybride] |
| P2 meet-stack | [google-volledig / google-deels / niet-google / platform-only] |
| Primaire conversie-event | |
| Funnel-ankers in volgorde | |
| Waarde-eenheid en rekenwijze | |
| Bron van de waarde | |
| Kwaliteits-guardrail | |

## Funnel-sets per conversie-model (kies er 1, of combineer bij hybride)

Onderstaande stapnamen zijn voorbeelden. Wat telt is de **rol** van elke stap, niet de naam.

| Rol in de funnel | transactie | lead | abonnement | offerte-configurator |
|------------------|-----------|------|-----------|---------------------|
| Interesse getoond | productweergave | dienst- of oplossingspagina bekeken | plan-overzicht bekeken | configurator geopend |
| Intentie getoond | item aan mandje | formulier gestart | plan gekozen | eerste stap voltooid |
| Beslissing gestart | checkout gestart | formulier halverwege | signup gestart | configuratie compleet |
| Conversie voltooid | aankoop | aanvraag verstuurd | abonnement of trial actief | offerte-aanvraag verstuurd |
| Kwalificatie (indien van toepassing) | betaling geslaagd | lead gekwalificeerd in CRM | activatie of eerste gebruik | offerte uitgebracht |

Regel: de funnel moet aflopend zijn. Een stap die groter is dan zijn voorganger is een meetfout, geen inzicht. Dat geldt voor elk model.

## Contract per metric

| Metric | Bron | Definitie | Wel gebruiken voor | Niet gebruiken voor | Betrouwbaarheid | Bekend meetrisico |
|--------|------|-----------|--------------------|--------------------|:---------------:|-------------------|
| sessies | [meetbron] | Sessies | Verkeersvolume, basis voor conversieratio | Waardebepaling | | Consent of modellering kan ondertellen |
| [primaire conversie-event] | [meetbron] | [definitie] | Primaire conversie, funnel-eindpunt | | | |
| [funnel-anker 1] | [meetbron] | [stapdefinitie verifieren] | Funnel-anker (intentie) | Waardebepaling | | Stapdefinitie te bevestigen |
| [funnel-anker 2] | [meetbron] | [stapdefinitie verifieren] | Microfunnel | Waardebepaling | | Stapdefinitie te bevestigen |
| [interactie-event met ruisrisico] | [meetbron] | [verifieren: echte intentie of interactie-ruis?] | [invullen na QA] | [invullen na QA] | | Kan op interactie vuren in plaats van op intentie |
| [waarde-metric] | [meetbron of CRM] | [exacte betekenis verifieren: order, periode-waarde, leadwaarde, contractwaarde?] | Volume-indicatie, relatieve vergelijking | Absolute waardeclaims tot bevestigd | | Semantiek onbevestigd |
| [kwaliteits-metric] | [CRM of backend] | [bijv. gekwalificeerde leads, retour, churn] | Guardrail | Primaire KPI | | Vaak vertraagd beschikbaar |
| kanaalindeling | [meetbron] | Kanaalgroepering | Kanaalvergelijking | | | Kanaaldefinitie controleren |
| nieuw tegenover terugkerend | [meetbron] | Segmentindeling | Segmentvergelijking | Absolute aantallen | | (not set)-volume noteren |
| instappagina | [meetbron] | Landingspagina | Landingspagina-prestatie | | | (not set)-volume noteren |
| advertentie-conversies | [advertentieplatform] | Conversies volgens het platform | Campagne-performance | Mengen met de gedragsbron | | Andere attributie |
| advertentie-conversiewaarde | [advertentieplatform] | Conversiewaarde volgens het platform | Rendement binnen het platform | Vergelijken met omzet uit de gedragsbron | | Waarde-definitie zelfde voorbehoud |
| zoekdata (clicks, vertoningen, positie) | [zoekbron] | Organische zoekdata | Intentie, zichtbaarheid | Conversie | | Periode gelijktrekken met de gedragsbron |
| [klantspecifieke metric] | | | | | | |

Betrouwbaarheid invullen als: Hoog / Middel / Laag / Onzeker.

## Regels (bindend)

1. Een metric met betrouwbaarheid "Laag" mag nooit als conversie-KPI of in een waardeclaim.
2. Een metric met betrouwbaarheid "Onzeker" blijft onzeker tot de bijbehorende QA-actie is afgerond; gebruik tot die tijd een expliciete proxy en benoem dat.
3. Conversies uit verschillende bronnen (gedragsbron tegenover advertentieplatform tegenover CRM) niet optellen of als gelijk vergelijken: ze hanteren andere attributie en andere definities.
4. Bij elke claim in een document: vermeld de metric en, indien Laag of Onzeker, het voorbehoud.
5. De semantiek van elke waarde-metric is Onzeker tot bevestigd door de bron die hem produceert (backend, CRM of klant). Tot die tijd alleen voor relatieve vergelijking, nooit voor absolute waarde- of rendementsclaims.

## Onderhoud

Werk dit contract bij zodra een QA-actie een metric opwaardeert. Log de wijziging in `09_DECISION-LOG/Decision-Log.md`. Wijzigt P1 of P2 in het klantprofiel, dan moet dit contract opnieuw: de funnel-set verandert dan mee.
