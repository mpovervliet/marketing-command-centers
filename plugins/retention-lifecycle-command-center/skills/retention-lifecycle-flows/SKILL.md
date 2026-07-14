---
name: retention-lifecycle-flows
description: >
  Klaviyo automated flows specialist. Gebruik ALTIJD bij het bouwen, optimaliseren of debuggen van automated email/SMS flows in Klaviyo. Trigger bij "welcome series", "abandoned cart flow", "browse abandonment", "post-purchase", "winback", "replenishment", "sunset flow", "re-engagement", "birthday flow", "VIP flow", "back-in-stock", "flow optimaliseren", "flow CVR te laag", "flow timing", "flow personalisatie", "flow splits", "dynamic product blocks", "flow A/B test", "flow SMS-step toevoegen", of elke vraag over Klaviyo flows. Bevat volledige playbooks per core-flow inclusief structuur, timing, copy-frameworks, subject-line benchmarks, segmentatie-splits, A/B-test priorities en KPI-drempels. Past 2026 best practices toe (dynamic product feeds, predicted-AOV splits, Campaigns AI / Flows AI als v1-draft, cross-channel splits email↔SMS, flow-naar-flow exits).
---

# Klaviyo Automated Flows: Volledige Playbooks

Flows zijn verantwoordelijk voor **60-80% van totale email revenue**. Deze skill bevat de complete playbooks voor alle core-flows en de methodiek om ze te bouwen, te A/B testen en op te schalen.

## Wanneer activeer je deze skill

- Nieuwe flow bouwen
- Bestaande flow iteren / optimaliseren
- MP zegt: "welcome series voor [klant]", "abandoned cart herschrijven", "post-purchase flow uitbreiden", "winback flow starten", "VIP flow bouwen"

## Het flow-framework

Elke Klaviyo-flow heeft deze componenten:

```
Trigger (event / segment / list / date)
  ↓
Filters (who qualifies / who is excluded)
  ↓
Steps (email / SMS / mobile push / delay / conditional split / update profile)
  ↓
Exit conditions (when does someone leave the flow)
  ↓
Goals (primary + secondary)
  ↓
Reports (open/CTR/CVR/RPR per step, total revenue attributed)
```

**Regel**: Geen flow live zonder **exit-conditions**. Een klant die koopt tijdens een winback-flow moet eruit.

---

## Flow #1: Welcome Series

**Trigger**: Added to list `Main Subscribers` (of `Newsletter`)
**Doel**: Eerste aankoop, brand-introductie, segmentatie-verfijning
**Duur**: 14 dagen, 3-5 emails
**Exit**: Placed Order

### Structuur

| Stap | Timing | Onderwerp | Inhoud | KPI-benchmark |
|---|---|---|---|---|
| Email 1 | 0 min (instant) | Welkom + je incentive ({{coupon}}) | Warme welkom, merk-verhaal 3 regels, incentive, duidelijke CTA | Open >55%, CTR >15%, CVR >5% |
| Email 2 | +24u | Zo haal je het meest uit {{merk}} | Top-3 producten / categorieën + social proof | Open >35%, CTR >8% |
| Email 3 | +4d | Achter de schermen / het verhaal | Founder-story, brand values, missie | Open >30%, CTR >5% |
| Email 4 (optioneel) | +8d | Laatste kans op je welkomstkorting | Urgentie, recap incentive | Open >30%, CVR >3% |
| Email 5 (optioneel) | +14d | Jouw mening telt (segmentatie-quiz) | Preference center / product-interesse quiz | Open >25% (doel: segmentatie-verfijning) |

### Copy-frameworks per email

**Email 1: Welcome + Incentive**
```
Subject: Welkom bij {{merk}}: en je {{korting}}% is onderweg
Preview: Hier is je code voor je eerste bestelling ↓

Hi {{first_name|default:'daar'}},

Blij dat je er bent. Bij {{merk}} doen we {{1-zinsbelofte}}.

Jouw welkomstcode:
┌──────────────────────┐
│   WELKOM{{number}}   │
└──────────────────────┘
→ {{incentive_value}} op je eerste bestelling, geldig {{dagen}} dagen.

[Shop nu]

Dit is wat klanten vaak eerst bestellen:
[3 product-tiles met Klaviyo Catalog dynamic content]

- {{afzender}}

P.S. Op {{adres}} staat altijd de deur open voor vragen.
```

**Email 3: Brand-story**
```
Subject: Het verhaal achter {{merk}}
Preview: Waarom we hier zijn, en wat je mag verwachten

Toen we in {{jaar}} begonnen, was {{probleem}}.
Daarom bouwden we {{oplossing}}, omdat {{reden}}.

[Image: founder / team / production]

{{3-4 zinnen over missie/waarden}}

Vandaag staan deze producten bij klanten die zoals jij starten:
[Dynamic content - top 3 voor deze signup-source]
```

### A/B testen priorities

1. **Email 1 subject**: incentive framing vs. brand-hook vs. naam-personalisatie
2. **Incentive-grootte**: 10% vs. 15% vs. free-shipping (meten op CLV, niet alleen CVR)
3. **Email 2 timing**: 24u vs. 48u
4. **Email 4 wel/niet**: 4 vs. 5 emails (CVR-effect op hele flow)
5. **Preference-quiz in email 5**: volledige quiz vs. 1-vraag

### Dynamische splits

- Signup-source (popup / footer / checkout / referral) → different hero + email 2
- Product-affinity (if first view = category X) → different product-tiles

---

## Flow #2: Abandoned Cart

**Trigger**: Added to Cart OR Started Checkout (Klaviyo definieert verschil)
**Doel**: Cart recovery, CVR >8%, RPR >€5 per recipient
**Duur**: 72 uur, 3 emails (+ optionele SMS)
**Exit**: Placed Order OR Update status=purchased

### Structuur

| Stap | Timing | Kanaal | Subject/Copy-hook | KPI-benchmark |
|---|---|---|---|---|
| Email 1 | +1u | Email | "Je vergat iets" / "Je cart wacht op je" | Open >50%, CTR >15%, CVR >5% |
| SMS 1 (optioneel) | +2u | SMS | "Hey {{naam}}, je cart bij {{merk}} staat nog klaar: {{link}}" | Click >12%, CVR >3% |
| Email 2 | +24u | Email | Social proof + cart-reminder + optioneel FAQ | Open >40%, CVR >3% |
| Email 3 | +72u | Email | Incentive (5-10%) of free shipping, LAATSTE trigger | Open >35%, CVR >5% |

### Copy frameworks

**Email 1: Cart reminder (geen korting)**
```
Subject: Je vergat iets
Preview: Je cart staat nog klaar

Hi {{first_name|default:''}},

Het is nog niet afgerekend. Je cart:

{% for item in event.extra.line_items %}
[image] {{item.title}} :  {{item.quantity}}×  €{{item.price}}
{% endfor %}

Totaal: €{{event.extra.subtotal}}

[Afrekenen →]

P.S. Vragen? Reply op deze mail, iemand leest mee.
```

**Email 3: Met incentive**
```
Subject: Laatste duwtje: {{korting}}% op je cart
Preview: Geldig 24 uur ↓

{{first_name}},

We zien je twijfelen. Dus een klein gebaar:

Code: LAATSTE{{number}}
→ {{korting}}% off je cart, 24u geldig.

[Shop cart]

{{Klaviyo Catalog: gerelateerde producten}}
```

### 2026 best practices

- **Image van het cart-item dynamisch** (niet alleen tekst): 20-30% CTR-lift
- **SMS-step na email 1**: lift +10-15% op totaal flow-CVR
- **Incentive pas bij email 3**: niet direct (beschermt marge)
- **Exclude first-timers** in sommige strategieën (first-timer cart = intent) OF geef first-timers juist ruimere incentive
- **Smart cart-recovery**: herken wederkerende abandoners → andere copy ("je gaat al een tijdje twijfelen: wat houd je tegen?")

### Splits (conditional)

- AOV cart >€100 → geen incentive, alleen social proof + free shipping nadruk
- AOV <€30 → nudge met bundel-suggestie, geen korting
- VIP-segment → gepersonaliseerde toon, hogere urgentie SMS

---

## Flow #3: Browse Abandonment

**Trigger**: Viewed Product (3x binnen 1 uur OR 1× + duration > 2 min)
**Doel**: Interesse naar cart, 2% CVR+ (lagere intent dan cart)
**Duur**: 48 uur, 2 emails
**Exit**: Placed Order OR Started Checkout (dan naar abandoned cart)

### Structuur

| Stap | Timing | Subject | Inhoud |
|---|---|---|---|
| Email 1 | +4u (niet te snel, creepy-drempel) | "Nog aan het rondkijken?" | Product dat ze bekeken + 3 alternatieven + social proof op dat product |
| Email 2 | +48u | "Niet helemaal wat je zocht?" | Category-alternatieven, no push |

**Let op creepiness-line**: noem NIET de exacte pagina. Wel: "We zagen je interesse in onze {{category}}". 

---

## Flow #4: Post-Purchase

**Trigger**: Placed Order (of Fulfilled Order voor post-delivery)
**Doel**: Van eenmalig naar repeat, LTV-lift, UGC/reviews genereren
**Duur**: 30-45 dagen, 3-5 emails

### Structuur

| Stap | Timing | Onderwerp | Doel |
|---|---|---|---|
| Email 1 | +30 min | "Bedankt! + wat nu?" | Bevestiging + verzenduitleg + set expectations |
| Email 2 | +7d (na fulfilled) | "Hoe is het bevallen?" | Review-request + UGC-vraag |
| Email 3 | +14d | Cross-sell / complementair | "Past goed bij {{purchased_item}}" |
| Email 4 | +30d | "Klaar voor je volgende?" | Second-purchase incentive |
| Email 5 (repeat-product) | +45d (of replenishment-cycle) | Replenishment reminder | Voor consumables |

### Splits

- Eerste aankoop → onboarding-tone (welkom in de club)
- Herhaalaankoop → tier-message ("dit is je 3e bestelling: je bent officieel VIP")
- Cadeau-aankoop (shipping≠billing) → andere tone (afzender, niet ontvanger, heeft email)
- High-AOV → warmer, personal, geen direct sell in eerste 2 emails
- Low-AOV → agressiever second-purchase, kleine maar snelle incentive

### Post-purchase is het enige moment waar je een **review kunt vragen zonder irritatie**. Gebruik email 2 voor: ster-rating (low-friction), UGC-upload, tag-op-social-CTA.

---

## Flow #5: Winback

**Trigger**: Segment membership change → Purchaser no order 90d
**Doel**: Herstel CLV, voorkom full churn
**Duur**: 2-3 emails over 2 weken (incremental incentive)
**Exit**: Placed Order

### Structuur

| Stap | Segment-trigger | Subject | Inhoud |
|---|---|---|---|
| Email 1 | 90d no order | "Lang niet gezien" | Zachte reminder, nieuwe producten, geen korting |
| Email 2 | 120d | "Iets speciaals voor je" | Incentive (10-15%) met urgentie |
| Email 3 | 180d | "Laatste kans" | Grootste incentive (15-25%) OF sunset-trigger |
| Exit | 210d + geen re-engagement | → Sunset flow |

Voor **VIP-historie klanten** (>€500 CLV): persoonlijkere email in stap 1, geen incentive: puur "we missen je". Hogere effectiviteit dan kortingsmailing.

---

## Flow #6: Replenishment (conditional, voor consumables)

**Trigger**: X dagen na Placed Order waarbij SKU in "consumable" tag
**Doel**: Repeat op verbruiksartikelen zonder subscription
**Duur**: 2 emails rond expected replenish-cycle

### Structuur

- Days-since-purchase > gemiddelde verbruiks-cyclus (product-specifiek, bv. 45d voor shampoo, 90d voor tandpasta)
- Email 1: "Bijna op?" + makkelijke re-order CTA
- Email 2 (7d later): subscription-pitch (als Recharge/Smartrr live)

---

## Flow #7: Sunset / Re-engagement (list hygiene)

**Trigger**: No open/click in 90 dagen (kan strenger: 60d voor sterk-engagende lijsten)
**Doel**: Lijst-hygiëne, deliverability-bescherming
**Duur**: 1-2 emails + auto-suppress

### Structuur

| Stap | Timing | Subject | Inhoud |
|---|---|---|---|
| Email 1 | Trigger | "We willen je niet verliezen" | Eenmalige re-engagement-vraag (1-klik "ja houd me aan boord") |
| Exit als geklikt |, |, | → terug naar engaged |
| Auto-suppress | +7d geen klik |: | Move to suppressed list (blijft profiel, maar niet meer bulk-send) |

**Uitzondering voor churn-prone verticals** (fashion, luxury): geef 180d ruimte voordat sunset, want koopcyclus is langer.

---

## Flow #8: Birthday (optioneel)

Vraag geboortedatum in welcome-email 4 of preference center. Flow triggert 3 dagen voor → cadeau/korting-mail. Warm, persoonlijk, niet-spammy. Werkt vooral goed bij AOV <€60 brands.

---

## Flow #9: VIP / Loyalty-tier

**Trigger**: Profile update loyalty_tier = VIP OR entry in segment "VIP top 10%"
**Doel**: Exclusivity-gevoel, early access, brand-love
**Structuur**: Trigger-gebaseerde perks (tier up, birthday, anniversary, early access drops)

---

## Flow #10: Back-in-stock (catalog-driven)

**Trigger**: Product back in stock + profile heeft Viewed Product of Added to Cart op die SKU
**Doel**: Convert wachtenden
**Structuur**: 1 instant email + optionele SMS voor VIP

---

## Flow-QA checklist (vóór publish)

- [ ] Test-send naar mp+test@klant.nl alle steps
- [ ] Alle links werken + UTM-tags correct
- [ ] Alt-text op alle images
- [ ] Personalization-tokens hebben fallbacks (`{{first_name|default:'hi'}}`)
- [ ] Exit-conditions gedefinieerd (Placed Order minimum)
- [ ] Suppression-regels (refunded orders, unsubscribers)
- [ ] Spam-score <3 via Mail-Tester (of Litmus)
- [ ] Mobile-preview check
- [ ] Dark-mode preview check (hero-image fallback)
- [ ] Dynamische Klaviyo Catalog blokken geladen (als gebruikt)
- [ ] Send-limits check (max 1 flow-email per 24u across flows voor 1 profiel)
- [ ] MP goedkeuring op copy + design

## KPI's per flow (rapportage-tabel)

| Flow | Entries/wk | Open% | CTR% | CVR% | RPR | € per 30d |
|---|---|---|---|---|---|---|
| Welcome | | 55%+ | 15%+ | 5%+ | €2+ | |
| Cart | | 50%+ | 15%+ | 8%+ | €5+ | |
| Browse | | 40%+ | 8%+ | 2%+ | €1+ | |
| Post-P | | 45%+ | 7%+ |: | €0.50+ | |
| Winback | | 30%+ | 5%+ | 2%+ | €0.75+ | |

**Update maandelijks** in `flows.md` + rapport.

## Non-negotiables

- Elke flow moet **exit-condition Placed Order** hebben
- Geen flow live zonder QA-pass
- A/B testen verplicht na 500 flow-entries
- Maandelijkse health-check: is RPR gedaald? Is CVR gedaald? → iteratie-trigger
- Refunded orders → re-entry gat (wacht minimum 30d voor nieuw in winback)
