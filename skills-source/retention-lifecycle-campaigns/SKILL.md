---
name: retention-lifecycle-campaigns
description: >
  Klaviyo campagnes, segmentatie & calendar specialist. Gebruik ALTIJD bij het plannen, bouwen of analyseren van one-off email/SMS campagnes, newsletters, product-launches, seasonal promotions, flash sales, segmentatie-strategie en A/B testing. Trigger bij "campagne", "nieuwsbrief", "newsletter", "send kalender", "product launch email", "Black Friday campaign", "seasonal promo", "flash sale email", "segment xxxx", "RFM", "VIP segment", "engaged 30d segment", "predictive segment", "A/B test subject", "send time optimization", "Smart Send Time", "suppression regels", "send frequency optimaliseren", of elke vraag over one-off communicatie en segmentatie-strategie. Past 2026 best practices toe (segment-first nooit batch-and-blast, 1-3 campagnes/wk, Smart Send Time standaard, A/B op subject verplicht, predictive-AOV splits, suppression van recente kopers, UTM-conventie consistent).
---

# Klaviyo Campagnes, Segmentatie & Calendar

Campagnes (one-off sends) zijn de tegenhanger van flows. Waar flows 60-80% van email-revenue genereren, leveren campagnes de resterende 20-40% + drijven merk-momentum, launches, seizoenspieken.

## Wanneer activeer je deze skill

- Campagne-kalender plannen
- Individuele campagne bouwen / copy schrijven
- Segmentatie-strategie ontwerpen
- A/B test opzetten voor een campagne
- Send-frequency discussie
- MP zegt: "plan Q2 campagnes", "nieuwsbrief deze week", "segment voor VIP", "Black Friday kalender", "A/B test welke werkt"

## Het campagne-framework

Elke campagne-planning werkt zo:

```
Doel (revenue / engagement / list-growth / re-activate)
  ↓
Segment (wie krijgt het)
  ↓
Timing (dag + Smart Send Time)
  ↓
Message (subject + preview + copy + design)
  ↓
A/B variable (1 ding tegelijk)
  ↓
Suppression (wie NIET)
  ↓
UTM + trackable goals
  ↓
Measurement (RPR, CVR, unsub, revenue)
```

---

## Deel 1: Segmentatie-strategie

### Het minimum-segmenten-set (2026)

Elke Klaviyo-account heeft deze 10+ segmenten actief:

| Segment | Logica | Gebruik voor |
|---|---|---|
| **Engaged 30d** | Open or Click in last 30d | Mainstream campagnes (hoogste delivery) |
| **Engaged 60d** | Open or Click in last 60d | Breder bereik, nog acceptabele reputation |
| **Engaged 90d** | Open or Click in last 90d | Max-bereik campagnes + sunset-waarschuwing op de rest |
| **Purchasers 0-30d** | Placed Order last 30d | **Suppressen** voor discount-campaigns (bescherm marge) |
| **Purchasers 31-90d** | Placed Order 31-90d geleden | Post-purchase follow-up campagnes |
| **Purchasers 91-180d** | Placed Order 91-180d | Repeat-nudge campagnes |
| **VIP** | Top 10% op Total Spend OR Predicted CLV top 10% | Exclusive-drops, early access, geen korting nodig |
| **At-risk** | Predicted Churn Risk = High | Winback + retention-campagnes |
| **Discount seekers** | >50% van orders had discount code | Code-gedreven campagnes (maar lagere marge-content) |
| **Full-price buyers** | 0% discount in order history | **Suppressen** van discount-campaigns (marge-bescherming) |
| **Category X affinity** | Viewed of Ordered in category X | Category-specific drops |
| **Predicted AOV tier** | Klaviyo Predicted AOV top/mid/bottom 33% | Content + incentive-size splitsen |

### Hoe bouw je een goed segment

1. **Start vanuit het doel**: niet vanuit de data. Wil je 3e-bestelling drijven? → segment "Purchasers met 2 orders, last order 60-90d"
2. **Voeg een negatief toe**: "Purchasers 2 orders + NIET Placed Order last 30d" (suppress recente kopers)
3. **Test met preview**: bekijk de lijst voor send (check of het klopt met intuition)
4. **Documenteer in `segments.md`**: naam, logica, wanneer-gebruiken, maandelijks review

### RFM-model (indien >5k profielen)

Recency / Frequency / Monetary quartielen → 5×5×5 segmenten. Te veel voor praktisch gebruik; condenseer naar 5 action-groepen:

- **Champions** (R5 F5 M5) → VIP-treatment
- **Loyal** (R3-5 F3-5 M2-4) → mainstream + incentive tests
- **At-risk** (R1-2 F3-5 M3-5) → winback urgent
- **Need attention** (R2-3 F1-2 M1-2) → re-engagement
- **Lost** (R1 F1 M1) → sunset

Klaviyo's **Segments AI** doet vergelijkbaars auto-generated: controleer of dat in jouw account betere segmenten oplevert dan handmatig.

---

## Deel 2: Campagne-types

### Type A: Newsletters / Content
Doel: brand-engagement, nurturing, soft-sell. 1×/week typisch.
Segment: Engaged 60-90d.
Measurement: Open, CTR, list-engagement-retention (voorkomt sunset).

### Type B: Product-launches
Doel: direct revenue + awareness. 1 per launch, eventueel follow-up na 48u.
Segment: VIP eerst (early access), 24u later rest.
Measurement: First-week revenue, CVR, share on social.

### Type C: Seasonal / Holiday (BF/CM, Kerst, Valentijn, etc.)
Doel: piekrevenue. Kalender 6 weken vooruit gepland. Teasers → kick-off → reminders → last-chance.
Segment: heel actief + eventueel reactivering van 180d+ met specifieke seasonal hook.

### Type D: Flash sales / Urgency
Doel: snelle conversie. 24-48u windows.
Segment: Engaged 30d + uitsluiting purchasers 7d.
Measurement: RPR tijdens window, urgency-boost effect.

### Type E: Re-engagement / Winback campagnes (niet flow)
Doel: inactive heractiveren. 1×/kwartaal.
Segment: Not engaged 60-180d, niet at-risk van sunset.

### Type F: Survey / Preference center
Doel: data-verrijking, segmentatie-verfijning.
Segment: Engaged 30d die lang geen preference-check hebben gehad.

### Type G: User-generated / social-proof
Doel: trust + conversie. Delen klant-reviews, UGC, case-stories.
Segment: Engaged 60d + at-risk (sterk werkend voor twijfelaars).

---

## Deel 3: Campagne-kalender (send calendar)

### Frequency-principes

- **E-com mainstream**: 2-3 sends/week is sweet-spot. Onder 1/wk = lijst-rot. Boven 5/wk = churn.
- **VIP-segment**: minder (1/wk), exclusief. Overcommunicatie = VIP-voel weggenomen.
- **Discount-seekers**: 3-4/wk is OK, maar marge-bescherming belangrijker dan frequency.
- **Seasonal pieken** (BF/CM): tijdelijk 4-6/wk tolerabel.
- **New subscribers**: geen bulk-campaigns in eerste 14 dagen (welcome-flow doet het werk).

### 4-week rolling calendar template

```markdown
# Klant-campaign-calendar: Week van YYYY-MM-DD

## Week 1 (DD - DD)
| Dag | Type | Segment | Subject-concept | A/B var | Suppression |
|---|---|---|---|---|---|
| Di | Newsletter | Engaged 60d | "Deze week in …" | subject-A vs B | recent purchasers 14d |
| Do | Flash | Engaged 30d | "48u: {{korting}}% op {{cat}}" | send time 10u vs 14u | recent purchasers 7d |

## Week 2 ...
```

Plan **4-6 weken vooruit**. Mark altijd: segment, A/B variabele, UTM-campaign, suppression, doel.

### Kritieke dagen om te plannen

- **Zondag avond 18-21u**: hoge open-rates, lage concurrentie
- **Dinsdag + donderdag 9-11u**: klassiek goed
- **Vrijdag 16-18u**: weekend-voorbereiding (fashion/home)
- **Niet**: maandag voor 9u (inbox-stapel vanuit weekend), vrijdag middag na 18u

**Klaviyo Smart Send Time** aanzetten: send-time individueel geoptimaliseerd per profiel (check of dit outperformt globale slots; usually ja).

---

## Deel 4: A/B testing

### Test 1 variabele tegelijk

- **Subject line** (meest impact: test altijd)
- **Preview text**
- **From-name** ({{merk}} vs. {{founder-name}} from {{merk}} vs. Team {{merk}})
- **Send time** (Smart Send Time vs. globale slots vs. specifieke tijd)
- **CTA-copy** (kooptrigger vs. info vs. urgency)
- **Incentive-framing** (% vs. € vs. free-shipping vs. gift)
- **Hero-image** (product vs. lifestyle vs. abstract)

### Benchmark-thresholds voor "winner"

- Minstens **1000 opens per variant** voor subject-test
- Minstens **200 clicks per variant** voor CTA-test
- Minimaal **95% confidence** (Klaviyo toont dit automatisch)
- Statistisch significant én directioneel groot genoeg (>10% relatief verschil)

### Sequential testing

1. Week 1: Subject A vs. B
2. Week 2: Winner A gebruiken, test preview-text A vs. B
3. Week 3: Winner gebruiken, test CTA
4. Week 4: Winner gebruiken, test incentive-framing
Maand daarna: iterate winner further. Documenteer in `experiments/` folder.

---

## Deel 5: Suppression-regels

**Altijd uitsluiten**:
- Profielen die in de laatste 7 dagen al 3+ emails hebben ontvangen (send-fatigue)
- Refunded last 30d (brand-safety)
- Hard-bounced in last 90d
- Unsubscribed ever
- Spam-complained ever

**Vaak uitsluiten** (context-afhankelijk):
- Purchasers last 7-14d voor discount-campaigns (marge-bescherming)
- At-risk-high voor acquisitie-tone campaigns (bouw re-engagement eerst)
- First-timers in flow active (laat welcome-flow afronden)

**Suppression in Klaviyo** via:
- Segment-conditions in campagne (exclude)
- Globale suppressed-list (unsub/bounce)
- Flow-exclusions (active in specific flow)

---

## Deel 6: UTM-conventie

Elke campaign:
```
utm_source=klaviyo
utm_medium=email  (of 'sms' voor SMS)
utm_campaign=<campaign-naam>  (bv. '2026-04-spring-sale')
utm_content=<segment OR variant>  (bv. 'vip_A' or 'engaged-60d_B')
```

GA4-attributie moet kloppen; Klaviyo's eigen attributie is lijnen anders (click-based) dan GA4 (sessie-based).

---

## Deel 7: Campagne QA checklist (vóór send)

- [ ] Subject line <50 chars (mobile cut-off)
- [ ] Preview-text gevuld (niet default leeggelaten)
- [ ] From-name + from-email kloppend met brand
- [ ] Reply-to werkt (MP of klant of noreply@ bewust)
- [ ] Alle links werken (klik-check minimum 3)
- [ ] UTM-tags compleet
- [ ] Alt-text op alle images
- [ ] Mobile-preview OK
- [ ] Dark-mode preview OK (hero fallback)
- [ ] Footer: fysiek adres, unsubscribe, privacy policy
- [ ] Suppression-segmenten geselecteerd
- [ ] Segment-grootte klopt met verwachting
- [ ] Send-time: Smart Send Time of gekozen tijdslot correct
- [ ] Test-send naar MP + klant
- [ ] A/B variabele gedefinieerd + winner-criterium gezet
- [ ] MP goedkeuring

---

## Deel 8: Reporting per campagne

24u en 7d na send: log in `reports/campaigns-YYYY-MM.md`:

```markdown
## Campaign: <naam>: sent YYYY-MM-DD HH:MM
- Segment: <segment>
- Sent: ___ recipients
- Open rate: __% (benchmark ≥25%)
- CTR: __% (benchmark ≥2%)
- CVR: __% 
- RPR: €___ (benchmark €0.20+)
- Unsubscribe: __% (<0.5% = OK)
- Revenue attributed: €___
- A/B winner: <variant>
- Learnings:
- Vervolgactie:
```

Maandelijks aggregeren in `reports/monthly-YYYY-MM.md`.

---

## KPI's

| KPI | Default doel |
|---|---|
| Open rate | >25% (benchmark) |
| CTR | >2% |
| CVR | >1% |
| RPR | >€0.20 |
| Unsubscribe per send | <0.5% |
| Spam complaint per send | <0.1% |
| Campaign share of revenue | 20-40% van email+SMS-revenue |

---

## Non-negotiables

- Nooit "blast to all" zonder segment
- Nooit A/B zonder pre-defined winner-criterium
- Nooit campaign live zonder QA-pass
- Altijd UTM compleet
- Altijd suppression van recent-purchasers bij discount-campaigns
- Altijd reporting 24u/7d na send + maandelijkse aggregatie
