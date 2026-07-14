---
name: retention-lifecycle-setup
description: >
  Klaviyo onboarding & lifecycle setup-specialist voor nieuwe klanten. Gebruik ALTIJD wanneer een nieuwe klant een Klaviyo-account nodig heeft, een bestaand account opnieuw gestructureerd moet worden, of wanneer een klantmap nog géén retention-lifecycle/ subfolder heeft. Trigger bij "nieuwe klant Klaviyo onboarden", "start retention voor [klant]", "Shopify naar Klaviyo", "setup Klaviyo", "email infra opzetten", "DMARC en DKIM configureren", "dedicated sending domain", "eerste flows opzetten", "Klaviyo lancering", of elke vraag over het inrichten van een Klaviyo-programma from scratch. Past 2026 best practices toe (DMARC verplicht, BIMI overwegen, dedicated subdomain, Klaviyo ↔ Shopify sync voor orders/products/segments, Predictive Analytics vanaf dag 1, minimum 5 core flows bij launch). Maakt automatisch de retention-lifecycle/ subfolder aan in de klantmap.
---

# Retention & Lifecycle Setup: Klaviyo Onboarding

Deze skill voert de complete onboarding van een nieuwe klant in Klaviyo uit en richt de lifecycle-infrastructuur in volgens 2026 best practices.

## Wanneer activeer je deze skill

- Nieuwe klant met (nog) geen Klaviyo-account
- Klant met verwaarloosd Klaviyo-account dat nieuwe fundering nodig heeft
- `<klantmap>/retention-lifecycle/` folder bestaat nog niet
- MP zegt: "nieuwe klant onboarden retention", "setup Klaviyo voor [klant]", "Shopify naar Klaviyo", "waar beginnen we"

## Stap 1: Maak de klantmap-stencil aan

Maak binnen `<klantmap>/retention-lifecycle/` deze structuur:

```
retention-lifecycle/
├── account-brief.md              ← klant-context (vul in tijdens intake)
├── history-log.md                ← chronologisch wijzigingen-log (lege start)
├── flows.md                      ← live flow-architectuur
├── segments.md                   ← segmenten + logica
├── kpis.md                       ← KPI-targets
├── deliverability.md             ← DMARC/SPF/DKIM/BIMI status
├── brand-guidelines.md           ← tone, kleuren, templates
├── experiments/
├── reports/
└── creative/
```

**account-brief.md template** (vul in tijdens intake):

```markdown
# <KLANT>: Retention & Lifecycle Account Brief

## Business
- Vertical: [beauty / fashion / food / B2B / DTC / marketplace]
- Shopify? / Magento? / Custom? / Headless?
- AOV: €___
- Jaarlijkse orders: ___
- Lijstgrootte Klaviyo: ___ actieve profielen
- Huidige ESP (pre-Klaviyo): [Mailchimp / Sendgrid / geen]
- Klaviyo account-ID: ___
- Sender domain: ___ (bv. mail.merk.nl)

## KPI's & doelen
- Email/SMS share of revenue nu: __%
- Doel 12 maanden: __%
- Repeat rate 90d nu: __%
- Repeat rate doel: __%
- Gem. CLV 12m: €___

## Deliverability baseline
- DMARC: [none / quarantine / reject / geen]
- SPF: [OK / broken / geen]
- DKIM: [OK / broken / geen]
- BIMI: [yes / no]
- Sender reputation (Google Postmaster Tools): [hoog / medium / laag / geen data]

## Integratie
- Shopify connected: [yes / no / partial]
- Subscription-app: [Recharge / Smartrr / Skio / geen]
- Loyalty-app: [LoyaltyLion / Smile.io / Yotpo / Klaviyo native / geen]
- Reviews-app: [Yotpo / Stamped / Junip / Klaviyo / Trustpilot / geen]
- Klaviyo SMS: [enabled / disabled]

## Compliance
- GDPR-consent bewijs aanwezig: [yes / no]
- Opt-in methode: [single / double / soft]
- Privacy policy link: ___

## Team
- Primaire contactpersoon klant: ___ (rol)
- Email-copy goedkeuring: [MP / klant]
- Design-goedkeuring: ___

## Huidige flows (als klant al Klaviyo heeft)
- Welcome: [actief / niet / onduidelijk]
- Abandoned cart: __
- Browse abandonment: __
- Post-purchase: __
- Winback: __

## Quick wins identificeert bij intake
1. 
2. 
3. 
```

## Stap 2: Klaviyo ↔ Shopify integratie verifiëren

Checklist voor juiste sync:

- [ ] Klaviyo → Shopify integratie actief (Klaviyo > Integrations)
- [ ] Historische data-sync voltooid (orders, customers, products)
- [ ] **Web tracking geïnstalleerd** (klaviyo.js op alle pagina's incl. checkout)
- [ ] **Signup forms** koppelen aan Klaviyo lists (niet losse forms)
- [ ] **Added to Cart** event fires (check via Klaviyo Activity feed)
- [ ] **Viewed Product** event fires
- [ ] **Started Checkout** event fires
- [ ] **Placed Order** + **Ordered Product** events correct
- [ ] **Fulfilled Order** events (voor post-purchase flow timing)
- [ ] **Refunded Order** events (voor suppressions)
- [ ] Shopify customer tags → Klaviyo profile properties
- [ ] Product-feed voor dynamic content (Klaviyo Catalog)

Voor **headless** setups: verify dat klaviyo.js manueel is toegevoegd op alle pagina's + events zelf worden gefired via JS API.

## Stap 3: Deliverability fundament

Vóór enige campagne of flow verzendt:

1. **Dedicated sending domain**: `mail.merk.nl` (nooit direct `merk.nl`)
2. **SPF**: voeg `include:_spf.klaviyo.com` toe aan TXT-record merkdomein
3. **DKIM**: Klaviyo genereert 2 CNAME-records, beide toevoegen in DNS
4. **DMARC**: start met `v=DMARC1; p=none; rua=mailto:dmarc@merk.nl; pct=100;`: monitor 4 weken, dan naar `p=quarantine`
5. **Custom tracking domain**: `track.merk.nl` i.p.v. Klaviyo's default
6. **BIMI** (optioneel, aanbevolen): SVG logo + VMC-certificaat: 10-15% open-lift
7. **Google Postmaster Tools** aanmelden met klant-domein
8. **Microsoft SNDS** aanmelden voor Hotmail/Outlook visibility

Wacht **48-72 uur** na DNS-wijzigingen + verifieer in Klaviyo > Account > Domains & Sending dat alles groen staat.

Zie **retention-lifecycle-deliverability** voor diepere DMARC-workflow.

## Stap 4: Lists, Segments & Profile Properties basis

**Lists** (alleen opt-in lijsten):
- `Main Subscribers` (default opt-in list)
- `SMS Subscribers` (separate opt-in per TCPA/GDPR)
- `VIP` (manual add / segment-sync)

**Segments** (dynamisch): minimum 10 bij launch:
1. Engaged 30d (open or click in last 30d)
2. Engaged 60d
3. Engaged 90d
4. Purchasers 0-30d
5. Purchasers 31-90d
6. Purchasers 91-180d
7. Purchasers 180+d (at-risk)
8. VIP (top 10% spend OR Predicted CLV top decile)
9. Unengaged 90d+ (sunset candidates)
10. Discount seekers (only bought with discount code)

**Profile properties** (custom fields): vul via Shopify sync + acquisitie-formulieren:
- `acquisition_source` (Meta / Google / Organic / Referral / Email)
- `signup_date`
- `first_purchase_date`
- `first_purchase_category`
- `predicted_clv` (Klaviyo Predictive)
- `predicted_churn_risk` (Klaviyo Predictive)
- `loyalty_tier` (als loyalty-app aanwezig)
- `subscription_status` (active / cancelled / none)

**Klaviyo Predictive Analytics** aanzetten (beschikbaar vanaf 500+ orders): CLV, Next Order Date, Churn Risk, Average Time Between Orders, Gender, Predicted AOV.

## Stap 5: Forms & Acquisitie-setup

Minimum launch-set:

| Form | Plaatsing | Trigger | Incentive |
|---|---|---|---|
| **Welcome Popup** | Homepage, PDP | 10s timer OR exit-intent | 10-15% off first order OR gratis gift |
| **Bottom Bar** | Persistent na popup-close | Scroll 30% |: |
| **SMS opt-in** | Post-email-optin step (two-step flow) | na email submit | Extra 5% OR early access |
| **Checkout opt-in** | Shopify checkout | Pre-checked of uitdrukkelijk |: |
| **Exit-intent** | Cart-page | exit-intent mouse-out | Free shipping OR 10% |

**Design-regels** (2026):
- Mobile-first (60-70% van opt-ins)
- Single-field email (geen voornaam op step 1): 30-40% hogere conversie
- Double opt-in alleen als GDPR/compliance dat eist (DE default)
- A/B testen: copy, incentive-grootte, timing
- Form-performance meten via Klaviyo Signups report

## Stap 6: De 5 core flows bij launch

Bouw minimum deze 5 flows voor go-live. Uitgebreide flow-specs in **retention-lifecycle-flows**.

1. **Welcome Series** (3 emails, 14 dagen)
2. **Abandoned Cart** (3 emails, 72 uur)
3. **Browse Abandonment** (2 emails, 48 uur)
4. **Post-Purchase** (3 emails, 30 dagen)
5. **Winback** (2 emails, vanaf 90 dagen inactief)

Skip voor go-live (later toevoegen): replenishment, sunset, VIP, birthday.

## Stap 7: Cross-channel koppelingen

- **Klaviyo → Meta Custom Audiences** (via CAPI-integratie): sync VIP + Engaged + Purchasers → gebruikt in meta-ads voor exclusion/inclusion
- **Klaviyo → Google Ads Customer Match**: sync vergelijkbaar
- **Suppression-sync**: Shopify `customers-unsubscribe-marketing` → Klaviyo (standaard)
- **GA4 UTM-strategie**: alle email/SMS met `utm_source=klaviyo`, `utm_medium=email` of `sms`, `utm_campaign={{flow_name}}`, `utm_content={{message_id}}`: zodat GA4-attributie klopt

## Stap 8: KPI-baseline + doelen

Vul `kpis.md` in met:

```markdown
# <KLANT>: Retention KPI's

## Baseline (intake-datum: YYYY-MM-DD)
- Email share of revenue: __%
- Lijstgrootte: ___ profielen
- Engaged 90d: __%
- Repeat rate 90d: __%
- Gem. CLV 12m: €___
- Gem. AOV: €___

## Doelen 90 dagen
- Email share of revenue: __% (van __ naar __)
- Engaged 90d: __%
- Repeat rate 90d: __%
- Deliverability: 100% auth (DMARC p=quarantine)
- Flows live: 5 core + 2 extra

## Doelen 12 maanden
- Email/SMS share of revenue: 25-35%
- CLV 12m: +15-25%
- Churn-rate: -20%
```

## Stap 9: Launch-checklist

- [ ] `account-brief.md` volledig ingevuld
- [ ] Shopify↔Klaviyo integratie groen
- [ ] Web tracking + events werken
- [ ] SPF / DKIM / DMARC = p=none actief, monitoring running
- [ ] Custom sending + tracking domain
- [ ] 5 core flows gebouwd, QA'd, op Draft
- [ ] 3 acquisitie-forms live
- [ ] Segments aangemaakt (10 minimum)
- [ ] Predictive Analytics aangezet (als >500 orders)
- [ ] Suppression-regels getest (refunds, unsubs)
- [ ] UTM-convention gedocumenteerd
- [ ] GA4 ontvangt email-traffic met correcte UTMs
- [ ] MP + klant goedkeuring op brand/voice/ontwerp
- [ ] 1-week monitoring window afgesproken

## Stap 10: Log + overdracht

In `history-log.md`:

```markdown
## YYYY-MM-DD: Account-launch
- Onboarding voltooid
- DMARC: p=none (week 4-monitoring: evalueer naar p=quarantine)
- 5 core flows live op Draft → publish na MP-approval
- Eerste review-meeting ingepland: YYYY-MM-DD (7d na launch)
- Verwacht effect: 15-25% email-share 90d, 30-40% lift welcome-flow CVR
```

Verwijs daarna MP naar **retention-lifecycle-audit** voor de 4-weeks review en **retention-lifecycle-flows** voor flow-iteratie.

## Non-negotiables voor setup

- Geen flow live zonder test-send + spam-score check (Litmus / Mail-Tester)
- Geen lijst-import zonder opt-in-bewijs
- Geen DMARC sprong naar `p=reject` binnen 8 weken
- Geen SMS live zonder expliciete TCPA/GDPR-compliante opt-in-flow
- Altijd test-profiel (`mp+test@klant.nl`) aanmaken voor QA
