# Intake-Checklist nieuwe klant
Versie: 0.1 (stencil)
Status: TEMPLATE, invullen bij intake

Doel: alles verzamelen wat nodig is om het Design OS voor een nieuwe klant te starten. Pas als deze checklist compleet is (of gaten expliciet als aanname zijn vastgelegd) begint fase 0.

## 1. Toegangen

| Toegang | Identifier | Profile/route | Status |
|---------|-----------|---------------|--------|
| GA4 | [GA4_PROPERTY_ID] | [PROFILE] | Open |
| Google Search Console | [GSC_SITE] | [PROFILE] | Open |
| Google Ads | [ADS_CUSTOMER_ID] | [PROFILE] | Open |
| Figma (design system + werkbestand) | file_key: [invullen] | | Open |
| A/B-testtooling | [tool + toegang] | | Open |
| Session recordings / heatmaps | [tool of "niet aanwezig"] | | Open |
| Overige bronnen (CRM, e-mail, feed) | [invullen] | | Open |

## 2. Aanleiding en klantbewijs

- [ ] Aanleiding van het traject (waarom nu, wie is opdrachtgever, wat is de doel-KPI)
- [ ] Exit-survey of ander direct klantonderzoek (inclusief n en periode)
- [ ] Review-bronnen: reviewplatforms, klachtenplatforms, app-store reviews
- [ ] Supportdata: top-tickets, veelgestelde vragen, retour-/annuleringsredenen

## 3. Historie

- [ ] A/B-testhistorie: alle eerdere tests met resultaat (winner/loser/inconclusive)
- [ ] Eerdere audits, onderzoeken, strategie-documenten → kopieren naar `01_CONTEXT/`
- [ ] Bekende gefaalde of afgewezen ideeen → `09_DECISION-LOG/Rejected-Ideas.md`

## 4. Brand en design

- [ ] Brand guidelines, tone of voice, verplichte terminologie
- [ ] Bestaand design system (Figma-bibliotheek, tokens, componenten)
- [ ] Beeldmateriaal en assets (logo's, productfoto's, klantfoto's)
- [ ] Scope-afspraak: rebrand ja/nee (default: nee, werken binnen bestaand systeem)

## 5. Technische stack

- [ ] CMS / frontend-platform en checkout-platform
- [ ] Tag management (GTM), consent-setup (Consent Mode v2)
- [ ] Bekende technische beperkingen (SPA-rendering, legacy, release-cadans)
- [ ] Wie is dev-contactpersoon en wat is de deploy-flow

## 6. Swap-lijst (placeholders die overal vervangen moeten worden)

| Placeholder | Betekenis | Waarde voor deze klant |
|-------------|-----------|------------------------|
| [KLANT] | Klantnaam | |
| [SITE] | Primair domein (bijv. voorbeeldklant.nl) | |
| [PRODUCT] | Kernproduct of productlijn | |
| [GA4_PROPERTY_ID] | GA4 property-ID | |
| [ADS_CUSTOMER_ID] | Google Ads customer-ID | |
| [GSC_SITE] | GSC-property (bijv. sc-domain:voorbeeldklant.nl) | |
| [PROFILE] | Gateway-profile voor de Google-toegangen | |

Werkwijze: zoek-en-vervang alle placeholders in de hele stencil-map, vul daarna de context-stubs in `01_CONTEXT/` en start fase 0 met `10_PROMPTS-AND-AGENTS/Cowork-Master-Prompt.md`.
