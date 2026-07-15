---
name: cro-checkout
description: >
  E-commerce checkout CRO-specialist. Gebruik ALTIJD bij checkout-optimalisatie, cart-abandonment, guest-checkout, one-page checkout, payment-diversiteit (Shop Pay, Apple Pay, Klarna, iDEAL, Bancontact), Shopify checkout, Magento checkout-flow, abandoned-cart email/SMS, mobile checkout-UX, address-autocomplete, shipping-options, of alles tussen Add-to-Cart en Bedankt. Trigger bij "checkout optimaliseren", "cart abandonment verminderen", "one-page checkout", "Shop Pay", "Apple Pay", "Klarna integratie", "iDEAL fix", "guest checkout", "payment options", "shipping costs", "address autocomplete", "abandoned cart email", "cart recovery flow", "mobile checkout", of elke post-cart-funnel vraag. Past 2026 best practices toe (70-78% cart-abandonment baseline, mobile 85%, one-page +7.5% lift, Shop Pay +50% CVR, guest-checkout verplicht, transparante shipping vroeg, address-autocomplete, max 3 stappen multi-step).
---

# Checkout CRO Specialist

Checkout is waar geld lekt of stroomt. Cart-abandonment gemiddeld 70-78% (mobile 85%) = elk procent-punt winst is directe €-impact. Deze skill focust specifiek op de post-Add-to-Cart funnel, waar technische complexiteit en psychologische friction samenkomen.

---

## Wanneer activeren

- Cart-abandonment analyseren / terugdringen
- Checkout-flow redesign (multi-step → one-page, of vice versa)
- Payment-options uitbreiden / optimaliseren (Shop Pay, Apple Pay, Klarna, iDEAL, SEPA)
- Guest-checkout aanzetten / force-account-creation verwijderen
- Shipping-options en transparantie
- Address-autocomplete integratie (Google Places, Loqate, PostcodeAPI)
- Mobile checkout-UX (grootste impact-gebied)
- Abandoned-cart recovery email/SMS flows
- Shopify checkout-customizatie (Plus / Shop Pay / Extensions API)
- Magento checkout-flow (Saniweb-type situatie)
- Error-state-optimalisatie (validatie, payment-declines)
- Post-purchase upsell / thank-you page conversion

## Werkwijze

1. **Funnel-diagnose**:
   - GA4-checkout funnel per stap: add_to_cart → begin_checkout → add_shipping_info → add_payment_info → purchase
   - Drop-off percentages per stap, per device, per payment-method
   - Session recordings op checkout-stappen (Clarity / Hotjar)
   - Form-analytics: welk veld zorgt voor drop-off?
   - Error-analytics: welke validatie-errors verschijnen veelvuldig?

2. **Heuristieken-scan**:
   - Guest-checkout beschikbaar?
   - Shipping-kosten vroeg zichtbaar (liefst op PDP/cart)?
   - Payment-options populair voor markt (iDEAL in NL, Bancontact in BE, Klarna DE/NL)?
   - Address-autocomplete aanwezig?
   - Progress-indicator (multi-step) of expand-collapse (one-page)?
   - Mobile-layout: form-velden vol-breedte?
   - Trust-signals in checkout (badges, SSL-mentie, return-policy)?
   - Foutmeldingen actionable ("Postcode ongeldig" vs "Deze postcode bestaat niet: controleer de 4 cijfers + 2 letters")

3. **Concrete optimalisatie-lagen**:

   **Laag 1: Fundamenten** (elke shop):
   - Guest-checkout aan
   - Shipping-kosten op cart-page tonen
   - Populaire payment-options toegevoegd
   - Address-autocomplete
   - Mobile-responsive gevalideerd

   **Laag 2: Friction-reductie**:
   - Velden minimaliseren (auto-fill waar mogelijk)
   - Inline validation (geen submit-error-cycle)
   - Save-payment-for-next-time
   - 1-click wallets (Shop Pay, Apple Pay boven fold in checkout)

   **Laag 3: Advanced**:
   - One-page checkout (als volume voldoende om A/B te testen)
   - Dynamic shipping-estimation
   - Order-bump op checkout-page
   - Abandoned-cart recovery (email/SMS binnen 1u, 24u, 72u)

4. **Test-design** (delegeer naar `cro-experimentation`):
   - Primary metric: purchase-CVR
   - Guardrails: AOV, refund-rate, support-tickets
   - Runtime: minstens 2 volle weken
   - Segment-analyse: mobile vs desktop, new vs returning

## Kern-kennisgebieden (2026 best practices)

### Cart-abandonment benchmarks (2026)

- **Globaal gemiddelde**: 70-78% cart-abandonment
- **Mobile**: 85% (15% CVR gap met desktop is extreme)
- **NL specifiek**: iets lager door iDEAL, 65-72%
- **Top-10% shops**: 50-55% abandonment (30-50% CVR op cart)

### Top-oorzaken cart-abandonment (Baymard 2026)

1. Extra kosten te hoog (shipping, tax, fees): 48%
2. Account-aanmaken verplicht: 24%
3. Te lang / complex checkout-proces: 17%
4. Geen totaalprijs vooraf: 16%
5. Website te traag / error: 15%
6. Betaal-methode ontbreekt: 11%
7. Betaal-veiligheid-twijfel: 10%

Fix-prioriteit volgt deze tellingen.

### Guest-checkout verplicht

- **Force account = 24% abandonment-oorzaak**
- Always offer: Guest / Login / Social-login
- "Account aanmaken" optioneel na aankoop (post-purchase)
- Shopify / Magento: default als guest, niet als requires-account

### One-page vs multi-step

- **One-page winst**: +7.5% CVR gemiddeld (Shopify / Baymard 2026)
- **Wanneer multi-step**: complexe B2B (PO-nummers, VAT, meerdere adressen)
- **Wanneer one-page**: standaard B2C e-com, mobiele-first shops
- Expand-collapse sections zijn een one-page-compromis

### Payment-options per markt (2026)

**NL**:
- iDEAL (60%+ online NL betalingen): verplicht
- Creditcard (Visa, MC): standaard
- PayPal: 20-25% preferentie
- Klarna / AfterPay (BNPL): groeiend, 15%+
- Apple Pay / Google Pay: mobile-lift
- Shop Pay (als Shopify)

**BE**:
- Bancontact (60%+ BE online): verplicht
- iDEAL (Belgische NL-sprekers)
- Credit Card, PayPal standaard

**DE**:
- Klarna / SOFORT / Giropay / SEPA
- PayPal dominant
- Creditcard minder groot

**FR / IT / ES**:
- Creditcard dominant
- PayPal, Apple Pay / Google Pay mobile
- SEPA Direct Debit

### Shop Pay impact (Shopify)

- **+50% CVR lift** vs standaard checkout (Shopify data 2026)
- Mobile: +91% speedup
- Auto-fill adres + payment → 1-click checkout
- Cross-shop recognition: klant die bij ander Shopify-merk kocht → direct als bekend
- Activeren: Shopify admin → Payments → Accelerated checkouts

### Apple Pay / Google Pay

- Mobile lift 15-30% op CVR waar geactiveerd
- Biometric authenticatie = minder fraud, minder drop-off
- Boven de fold in checkout tonen (niet onderaan)
- Setup: payment-provider (Stripe, Mollie, Adyen) heeft toggle

### Abandoned-cart recovery

**Timing (email/SMS)**:
- 1 uur: vriendelijke reminder ("Je winkelwagen wacht")
- 24 uur: incentive (free shipping / 5% korting)
- 72 uur: urgency/last-chance ("Voorraad beperkt")

**Werkzame elementen**:
- Product-image + titel zichtbaar
- 1-click-resume-link (terug naar gevulde cart)
- Reviews van het specifieke product
- Soft-urgency (voorraad) alleen als echt zo
- Recovery-rate benchmark: 10-20% van sends

### Address-autocomplete

- Google Places, Loqate, Postcode.nl integratie
- NL: postcode + huisnummer → adres auto-invul
- Tijdwinst 40-60%, error-reductie 50%+
- Verplicht voor serieuze NL-shop in 2026

### Error-states optimaliseren

- Inline validation (niet submit → error)
- Human language ("Voer je 4-cijfer + 2-letter postcode in, bijv. 1234 AB")
- Positieve feedback bij correcte input
- Decline-handling: als creditcard geweigerd, suggest alternatieven meteen

### Mobile-checkout specifics

- **Mobile 85% abandonment** = waar je grootste kans ligt
- Numerieke keyboard voor numerieke velden (inputmode="numeric")
- Auto-capitalize off voor email, on voor naam
- Tap-targets ≥ 44px
- Shop Pay / Apple Pay / Google Pay hoog in flow
- Sticky order-summary (expandable)

### Shipping-transparantie

- Toon shipping-costs op cart-page, niet pas in checkout-stap 3
- Free-shipping-threshold duidelijk ("€X tot gratis verzending")
- Delivery-estimate vroeg in flow ("Morgen in huis bij bestellen voor 22:00")
- International: valuta + tax-inclusief-toon per markt

### Anti-patterns

- Account-aanmaken verplicht vóór purchase
- Shipping pas op stap 3 tonen
- Geen address-autocomplete
- Alleen creditcard in NL
- "Submit" als payment-CTA
- Sticky cookie-banner over checkout-button
- Cross-sells midden in payment-step (distracties)
- Abandoned-cart mail na 7 dagen (te laat, al vergeten)

## Output-formaat

Skelet voor het checkout-audit-rapport, gebruik makend van de funnel-diagnose en heuristieken-scan uit Werkwijze:

```markdown
# Checkout-audit: [klant], [maand jaar]
1. Funnel-analyse per stap, met visualisatie
2. Top-10 friction-points, gescoord
3. Quick wins, minder dan 2 weken implementatie
4. Structural changes: multi-step versus one-page
5. Payment-diversificatie roadmap per markt
6. Abandoned-cart recovery flow-design
7. Impact-estimaat in euro's, AOV keer verwachte CVR-lift
```

### Overige deliverable-skeletten

### Checkout-audit (docx via `springbok-gdoc`)
1. Funnel-analyse per stap (met visualisatie)
2. Top-10 friction-points (gescoord)
3. Quick wins (<2 weken implementatie)
4. Structural changes (multi-step → one-page?)
5. Payment-diversificatie roadmap
6. Abandoned-cart recovery flow-design
7. Impact-estimaten in € (op basis van AOV × verwachte CVR-lift)

### Checkout-redesign brief
- Current-state wireframe
- Future-state wireframe
- Per veld: wel/niet houden, verplicht/optioneel, validation-rules
- Payment-options incl. markt-volgorde
- Error-states
- Mobile-specifics
- Tech-stack (Shopify/Magento/headless)

### Abandoned-cart flow-spec
- Timing (1u, 24u, 72u)
- Copy per mail/SMS
- Incentive-policy
- UTMs voor attributie
- Unsubscribe-compliance

### Payment-integratie checklist
Per markt: required + optional providers, integration-requirements per tool.

## Dependencies

- `ga4_tool`: checkout-funnel-analyse
- `shopify_tool`: Shopify checkout-config, Shop Pay, Extensions
- `pagespeed_tool`: checkout-speed monitoring
- `drive_tool`: audit-deliverables
- Clarity / Hotjar: session-recordings op checkout
- Payment-provider docs (Mollie, Stripe, Adyen): integratie-specs

## Integratie met andere skills

- **`cro-audit`**: identificeert checkout als priority → deze skill zoomt in
- **`cro-user-research`**: recordings van checkout-frustratie zijn directe input
- **`cro-experimentation`**: checkout-tests hebben speciale aandacht nodig (revenue-impact)
- **`cro-reporting`**: checkout-verbeteringen krijgen eigen € in klant-rapport
- **`seo-geo-ecommerce`**: overlap in PDP→cart-UX, voorraad, schema
- **`google-ads-setup`** / **`meta-ads-setup`**: checkout-events voeren Enhanced Conversions / CAPI

## Tips

- **Mobile 85% abandonment is je grootste kans**. Niet desktop eerst optimaliseren.
- **Shop Pay aanzetten als Shopify-klant**. +50% CVR = geen discussie nodig.
- **Shipping-kosten op cart**. Niet pas in stap 3. Dit is #1 abandonment-oorzaak.
- **Guest-checkout altijd**. Force-account kost je 24% van carts.
- **Address-autocomplete verplicht** in NL/BE. 40-60% tijdwinst, 50% fewer errors.
- **Abandoned-cart binnen 1 uur**. Niet na 7 dagen. Timing = momentum.
- **Payment-diversiteit per markt**. iDEAL NL, Bancontact BE, Klarna DE/NL/AT: non-onderhandelbaar.
- **One-page test vóór redesign**. Hypothese: +7.5%. Maar test het, want context matters.
- **Inline validation**. Errors vóór submit, niet na. Reduceert rage-clicks drastisch.
- **Checkout is revenue-territorium**. Elke test hier vereist guardrails (AOV, refund-rate) en langere runtime.
