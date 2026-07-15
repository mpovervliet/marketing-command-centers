# Data-Contract
Versie: 0.1 (stencil)
Status: TEMPLATE, invullen bij intake

Doel: formeel vastleggen welke metric waarvoor gebruikt mag worden. Voorkomt dat iemand later een onbetrouwbare metric als conversiewinst presenteert. Dit contract is bindend voor alle documenten in dit systeem.

> Invul-instructie: vul per gebruikte metric een rij in tijdens de Measurement-QA (fase 2). De voorbeeldrijen hieronder zijn leeg of generiek; vervang ze door de werkelijke bevindingen van [KLANT].

## Contract per metric

| Metric | Bron | Definitie | Wel gebruiken voor | Niet gebruiken voor | Betrouwbaarheid | Bekend meetrisico |
|--------|------|-----------|--------------------|--------------------|:---------------:|-------------------|
| sessions | GA4 | Sessies | Verkeersvolume, basis voor CVR | Waardebepaling | | Consent/modeling kan ondertellen |
| purchase / ecommercePurchases | GA4 | Voltooide aankoop-event | Primaire conversie, funnel-eindpunt | | | Consent-impact |
| begin_checkout | GA4 | Start checkout-event | Funnel-anker (koopintentie) | Omzetwaarde | | Stapdefinitie verifieren |
| add_shipping_info (of equivalent) | GA4 | [stapdefinitie verifieren] | Checkout-microfunnel | Omzetwaarde | | Stapdefinitie te bevestigen |
| add_to_cart | GA4 | [verifieren: echte cart-add of interactie-ruis?] | [invullen na QA] | [invullen na QA] | | Kan op interactie vuren i.p.v. echte intentie |
| purchaseRevenue | GA4 | [exacte betekenis verifieren: orderwaarde, maandwaarde, LTV?] | Volume-indicatie, relatieve vergelijking | LTV, absolute ROAS, marge (tot bevestigd) | | Semantiek onbevestigd |
| sessionDefaultChannelGroup | GA4 | Kanaalindeling | Kanaalvergelijking | | | Kanaaldefinitie controleren (bijv. transactionele e-mail) |
| newVsReturning | GA4 | Nieuw vs terugkerend | Segmentvergelijking | Absolute aantallen | | (not set)-volume noteren |
| landingPagePlusQueryString | GA4 | Instappagina | LP-prestatie | | | (not set)-volume noteren |
| metrics.conversions (Ads) | Google Ads | Ads-conversies | Campagne-performance | Mengen met GA4-purchase | | Andere attributie dan GA4 |
| metrics.conversions_value (Ads) | Google Ads | Conversiewaarde Ads | ROAS-indicatie binnen Ads | Vergelijken met GA4-omzet | | Waarde-definitie zelfde caveat |
| GSC clicks/impressions/position | GSC | Organische zoekdata | Intentie, zichtbaarheid | Conversie | | Periode gelijktrekken met GA4 |
| [klantspecifieke metric] | | | | | | |

Betrouwbaarheid invullen als: Hoog / Middel / Laag / Onzeker.

## Regels (bindend)

1. Een metric met betrouwbaarheid "Laag" mag nooit als conversie-KPI of in een waardeclaim.
2. Een metric met betrouwbaarheid "Onzeker" blijft onzeker tot de bijbehorende QA-actie is afgerond; gebruik tot die tijd een expliciete proxy en benoem dat.
3. GA4- en Ads-conversies niet optellen of door elkaar gebruiken (andere attributie).
4. Bij elke claim in een document: vermeld de metric en, indien Laag/Onzeker, het voorbehoud.

## Onderhoud

Werk dit contract bij zodra een QA-actie een metric opwaardeert. Log de wijziging in `09_DECISION-LOG/Decision-Log.md`.
