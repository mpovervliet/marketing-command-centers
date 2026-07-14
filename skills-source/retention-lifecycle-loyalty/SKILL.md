---
name: retention-lifecycle-loyalty
description: >
  Loyalty programs & subscription commerce specialist. Gebruik ALTIJD bij vragen over loyalty-programma's (LoyaltyLion, Smile.io, Yotpo, Klaviyo native), subscription-modellen (Recharge, Smartrr, Skio), referral programs, VIP-tiers, points-systems, cashback, paid memberships, of subscription churn-management. Trigger bij "loyalty programma opzetten", "LoyaltyLion vs Smile.io", "Klaviyo native loyalty", "punten systeem", "VIP tier", "referral program", "subscription lancering", "Recharge setup", "Smartrr onboarden", "Skio headless", "subscription churn", "cancel flow", "abonnement retentie", "paid membership", "cashback programma", of elke post-purchase-retention-stack vraag. Past 2026 best practices toe (loyalty alleen bij AOV<€80 + repeat-potentie, Klaviyo native default voor <100k klanten, Recharge leader voor subscriptions, churn-save flows verplicht, tier-structuur max 3-4 niveaus).
---

# Loyalty Programs & Subscription Commerce

Deze skill behandelt de bredere retentie-stack: loyalty-programma's, subscription-commerce, referrals en het integreren daarvan met Klaviyo.

## Wanneer activeer je deze skill

- Klant wil loyalty-programma starten of herzien
- Subscription-business launch of -optimalisatie
- Churn-rate subscription te hoog
- Referral-programma opzetten
- VIP-tier strategie
- MP zegt: "LoyaltyLion onboarden", "welke loyalty-app", "subscription launchen", "Recharge vs Smartrr", "cancel-flow optimaliseren"

## Deel 1: Moet deze klant een loyalty-programma hebben?

**Niet elke klant heeft loyalty nodig.** Check deze triggers:

### Groen licht (bouw loyalty)
- AOV <€80 (lagere drempel voor herhaling)
- Order frequency potentie >2x/jaar
- 6+ maanden historiek om baselines te bepalen
- Categoriteit: beauty, cosmetica, food, supplements, pet, apparel basics, wine, koffie
- Repeat rate 90d >15% (zonder loyalty) → loyalty kan dat liften naar 25-30%

### Rood licht (geen loyalty, focus op andere retentie)
- AOV >€200 (low-frequency purchase, loyalty-punten voelen onnatuurlijk)
- Eenmalige aankopen (bruiloft, verbouwing, specialty items)
- Subscription is logischer (consumables → abonnement > punten)
- Repeat rate 90d >40% zonder loyalty → je hebt het al

### Oranje licht (overweeg alternatief)
- High-end / luxury → "members-only benefits" ipv punten (Aesop, NEOM-stijl)
- Very high AOV → early access, concierge-service, private events
- Services / experiences → tier-based toegang (Soho House-model)

---

## Deel 2: Welke loyalty-app kies je?

### Klaviyo Native Loyalty (sinds Q3 2024)
- **Past bij**: Shopify-klanten <100k klanten, al Klaviyo-heavy setup, willen integratie zonder extra tool
- **Kosten**: inbegrepen in Klaviyo hogere tiers
- **Voordeel**: Native integratie, geen webhook-overlap, flows trigger-based op loyalty-events, zero extra vendor
- **Nadeel**: Minder mature dan LoyaltyLion/Smile: feature-parity nog niet 100%

### LoyaltyLion
- **Past bij**: Mid-market Shopify/BigCommerce, brand die customization wil
- **Kosten**: vanaf €399/mnd → enterprise €1500+
- **Voordeel**: Diepe customization, tier-logic, gamification, enterprise-features
- **Nadeel**: Prijzig voor kleine klanten, implementation-complexiteit

### Smile.io
- **Past bij**: Kleine/mid Shopify DTC, eenvoud
- **Kosten**: Free tier → $49/mnd → $599/mnd
- **Voordeel**: Makkelijk opzetten, mooie UX out-of-box, betaalbaar
- **Nadeel**: Minder custom dan LoyaltyLion, minder enterprise-features

### Yotpo Loyalty (was Swell)
- **Past bij**: Al Yotpo-reviews-gebruikers (combo-discount)
- **Voordeel**: Suite-integratie (reviews + loyalty + SMS in 1 tool)
- **Nadeel**: Suite-lock-in, niet de beste op elk individueel onderdeel

### Paid memberships (alternatief)
Voor high-AOV of community-merken: **Pietra, Stamped Memberships, custom builds via Shopify Functions**. Recurring fee → exclusive benefits (discount, early access, community).

### Beslisboom

```
Klaviyo-first account + <100k klanten + eenvoud gewenst?
  YES → Klaviyo Native Loyalty
  NO  → ga verder

Enterprise-niveau, diepe customization?
  YES → LoyaltyLion
  NO  → ga verder

Yotpo al in stack (reviews)?
  YES → Yotpo Loyalty (suite-discount)
  NO  → Smile.io
```

---

## Deel 3: Loyalty-programma ontwerp

### Structuur: punt-systeem

- **Earning**: 1 punt per €1 spend (standaard 1:1) + bonus-triggers (review = 50pt, birthday = 100pt, referral = 200pt)
- **Redeeming**: 100 punten = €5 korting (1% default redemption rate: niet 'gratis', want marge)
- **Tier-systeem** (max 3-4 tiers, anders cognitive overload):
  - Bronze: 0-500 punten (1× multiplier)
  - Silver: 501-1500 (1.25×)
  - Gold: 1501-5000 (1.5×) + perks (free shipping, early access)
  - Platinum: >5000 (2×) + concierge + exclusieve drops

### Earning-events (minimum-set)

| Event | Punten | Trigger |
|---|---|---|
| Purchase | 1 pt / €1 | Order placed + fulfilled |
| Signup | 100 | Join loyalty |
| Birthday | 100 | Yearly on b-day |
| Review | 50 | Review submitted |
| Referral (sender) | 200 | Referee makes 1st purchase |
| Referral (receiver) | €10 credit | 1st purchase via ref-link |
| Social-share | 20 | Per platform, max 3/maand |
| UGC-upload | 50 | Approved by mod |

### Redeeming-options

- Discount op cart (€5/€10/€25/€50 bij corresponderende punten)
- Free shipping upgrade
- Exclusive products (loyalty-locked)
- Early access tot launches
- Surprise-gift (boxable assortiment)

### Communicatie-flows (Klaviyo trigger-based)

1. **Enrollment-email**: "Welkom in {{programma}}, hier is wat je kunt doen"
2. **Points-update**: na purchase: "Je verdiende {{points}} punten!"
3. **Tier-upgrade**: "Gefeliciteerd, je bent nu {{tier}}!"
4. **Points-expiry warning**: "Je {{points}} verdwijnen in 30 dagen"
5. **Birthday bonus**
6. **VIP exclusive drop**: alleen voor top-tier
7. **Refer-a-friend reminder**

---

## Deel 4: Subscription Commerce

### Wanneer past subscription?

**Hoge fit**:
- Consumables (skincare, supplements, koffie, pet food, laundry)
- Predictable replenishment-cycle (30-90 dagen)
- AOV €30-80 per shipment (marge boven subscriber-discount-cost)
- Shopify e-commerce

**Lage fit**:
- Seasonal / occasion-based producten (fashion, tech)
- Very high AOV met long cycle (>12 mnd)
- B2B met custom-pricing per klant
- Specialty (bruidswinkel, verbouwing)

### Welke subscription-app?

**Recharge** (de leader, >50% markt-share)
- Past bij: Mid tot enterprise Shopify, complex subscription-logic
- Voordeel: Battle-tested, 3rd-party ecosystem rijk, dev-extensible
- Nadeel: UI dated, customer portal oogt oud zonder custom dev

**Smartrr**
- Past bij: Premium DTC brands die UX waarderen
- Voordeel: Beste customer portal, community-features, loyalty-integratie
- Nadeel: Duurder dan Recharge, kleiner ecosystem

**Skio**
- Past bij: Headless / modern-stack klanten, growth-minded DTC
- Voordeel: Modern UX, passwordless login, predictive churn-save
- Nadeel: Jonger platform, minder 3rd-party integraties

**Shopify Subscriptions (native, gratis)**
- Past bij: Kleine/mid klanten, eenvoudige behoefte
- Voordeel: Gratis, native, Checkout Extensibility ready
- Nadeel: Beperkte features (geen advanced retention-tools)

### Subscription-programma ontwerp

**Pricing-structuur**:
- First order: 10-20% discount (hook)
- Recurring: 10-15% subscriber-discount
- Skip-month: toegestaan, 1× per 3 mnd limiet
- Swap-product: toegestaan (LTV-positief)
- Cancel: self-serve in portal (wettelijk), maar met retention-flow (zie beneden)

**Frequency-opties** (geef klant controle):
- Elke 4 wk / 6 wk / 8 wk / 12 wk
- Één-klik wijziging in portal

### Churn-save flows (essentieel)

Bij cancel-intent → automatische retention-flow:

1. **"Wat houdt je tegen?"** survey (1-click-redenen):
   - Te veel product → bied "skip 1 month" of "verlaag frequentie"
   - Te duur → bied pauze of downgrade-option
   - Geen behoefte meer → accept cancel, maar bied 20% terugkom-coupon
   - Probleem met product → escalate naar support (Gorgias/Zendesk)
   - Overstappen naar ander merk → win-back offer

2. **Save-offer personalisatie**: eerste cancel → 15% discount volgende maand; tweede cancel-poging → accept

3. **Meting**: save-rate %, churn voor/na save-flow, save-ROI (costs per retained sub)

### Subscription KPI's

| KPI | Doel |
|---|---|
| Churn rate (maandelijks) | <5% mature, <10% eerste 3 mnd |
| Average subscriber lifespan | >8 mnd |
| Subscriber CLV / one-time CLV | >2.5× |
| Save-rate bij cancel-intent | >25% |
| Monthly active subscribers growth | +5-15% MoM |
| Skip-month rate | <15% (anders prijs/cadans-issue) |

### Subscription-emails (Klaviyo integration)

- **Pre-shipment reminder** (3d voor ship-datum): "Je volgende {{merk}}-box komt over 3 dagen. Nog iets aanpassen?"
- **Post-shipment**: "Onderweg!"
- **Skip/swap toestel-email**: wanneer klant gebruikt
- **Churn-save flow** (zie boven)
- **Subscriber-only perks** (apart segment): early access, exclusieve producten

---

## Deel 5: Referral Programs

Referrals zijn vaak de hoogste CLV-acquisitie:

- Referee CLV typisch 25-40% hoger dan normale acquisitie
- Refer-rate in loyalty-programma's: 5-15% van members
- ROI: €5-15 per referred customer vs. €15-50 CAC op Meta/Google

### Apps
- **Friendbuy** (enterprise, platform-agnostisch)
- **Mention Me** (premium, high-AOV)
- **LoyaltyLion / Smile.io** hebben native referrals
- **ReferralCandy** (Shopify, betaalbaar)
- **Klaviyo**: referrals mogelijk via coupon-codes + tracked-links, beperkt mature

### Referral-mechaniek

- **Give €X, get €X**: 2-sided (referral + referee beide reward)
- **Give points, get points**: in loyalty-context
- **Social-share + track**: UTM-geïdentificeerd, beloning bij eerste purchase via link

### Integratie met Klaviyo

- Referral-event → Klaviyo event `Referral Sent` of `Referral Converted`
- Flow: thank-you voor sender, welkom voor referee (speciale welcome-flow-versie), VIP-upgrade bij N successful refers

---

## Deel 6: Integratie met Klaviyo (cruciaal)

Elk van bovenstaande tools moet syncen naar Klaviyo profile:

### Standaard profile-properties om te pushen

- `loyalty_tier` (Bronze/Silver/Gold/Platinum)
- `loyalty_points_balance`
- `loyalty_total_earned`
- `loyalty_enrollment_date`
- `subscription_status` (active/paused/cancelled/none)
- `subscription_plan_id`
- `subscription_next_order_date`
- `subscription_total_orders`
- `referrals_sent_count`
- `referrals_converted_count`

### Flows die deze data triggeren

- Tier-upgrade flow
- Points-expiry warning
- Subscription pre-ship reminder
- Churn-save (cancel-intent)
- Referral thank-you

### Segmenten

- Active subscribers
- At-risk subscribers (skipped >2 mnd of cancel-intent in portal)
- VIP loyalty members
- Redeemer vs. earner (sommige verdienen wel, redeemen nooit: incentive-issue)

---

## Deel 7: Meten & rapportage

Voor elke loyalty/subscription-klant, build een maandelijks rapport met:

```markdown
## Loyalty & Subscription KPI's: YYYY-MM

### Loyalty Program
- Active members: ___ (% van totale klantbestand)
- New enrollments this month: ___
- Redemption rate (% members die loyalty gebruiken): __%
- Revenue attributed to loyalty flows: €___
- Tier distribution: Bronze __%, Silver __%, Gold __%, Platinum __%
- Referral conversions: ___
- Referral CLV (vs. baseline): ___

### Subscription Program  
- Active subscribers: ___
- MRR (monthly recurring revenue): €___
- New subs this month: ___
- Churn rate: __%
- Save-rate bij cancel-intent: __%
- Subscriber vs. one-time CLV: ___×
```

Log in `<klantmap>/retention-lifecycle/reports/loyalty-subscription-YYYY-MM.md`.

---

## Non-negotiables

- **Nooit loyalty aanbevelen** zonder baseline-repeat-rate check
- **Nooit subscription launchen** zonder churn-save flow ingebouwd
- **Altijd self-serve cancel** in portal (wettelijk + klant-ervaring)
- **Altijd tier-max 4** (bron/silver/gold/platinum); meer wordt onbegrijpelijk
- **Altijd sync events** naar Klaviyo voor flow-triggers
- **Altijd KPI-dashboard** vanaf dag 1 (niet achteraf bouwen)
- **Nooit punt-systeem** zonder expiry-policy (anders liability + dead weight)
