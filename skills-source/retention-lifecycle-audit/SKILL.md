---
name: retention-lifecycle-audit
description: >
  Klaviyo & lifecycle audit specialist. Voer een 80+ punt audit uit op bestaande Klaviyo-accounts + bredere retentie-stack. Gebruik ALTIJD wanneer een bestaand Klaviyo-account doorgelicht moet worden, bij een klant-overname, na een achterstand, of voor een second opinion. Trigger bij "audit mijn Klaviyo", "check gezondheid email-programma", "waar lekt retentie", "second opinion lifecycle", "overgenomen van vorig bureau", "health check retentie", "waar is groei mogelijk", "quick scan Klaviyo", "full audit email", "hoe doet onze email het", "retentie diagnose", of elke vraag over het doorlichten van een bestaand email/SMS/loyalty programma. Levert gestructureerd audit-rapport met prioriteitsmatrix (Impact × Effort): dekt: deliverability, account-structuur, integratie, lists/segments, flows, campaigns, compliance, Predictive Analytics, cross-channel, loyalty & reviews stack, CLV-baseline. Past 2026 standaarden toe (DMARC-enforced, BIMI, Segments AI, Predictive Analytics, 60-80% revenue uit flows).
---

# Retention & Lifecycle Audit

Deze skill voert een systematische 80+ punt audit uit op een bestaand Klaviyo-account en de bredere retentie-stack, en levert een prioritized-actielijst op.

## Wanneer activeer je deze skill

- Klant-overname van ander bureau
- Bestaand account dat slechter presteert dan benchmark
- MP zegt: "audit", "health check retentie", "waar verlies ik geld in email", "quick scan", "second opinion"
- Kwartaal-audit ritueel voor bestaande klanten

## Output-formaat

Een markdown-rapport `<klantmap>/retention-lifecycle/reports/audit-YYYY-MM-DD.md` met deze structuur:

1. Executive Summary (3-5 bullets, business-impact)
2. Deliverability Health
3. Account-structuur & Integratie
4. Lists, Segments, Profile Properties
5. Flows (performance + gaps)
6. Campagnes + Segmentatie
7. SMS Programma
8. Loyalty & Subscription Stack
9. Reviews / UGC Stack
10. Cross-Channel Integratie
11. Compliance & Privacy
12. Prioriteitsmatrix (Impact × Effort)
13. Top 10 actiepunten in volgorde

## De audit-checklist (80+ punten)

### 1. Deliverability Health (15 punten)

- [ ] DMARC-record aanwezig (`dig TXT _dmarc.merk.nl`)
- [ ] DMARC-policy `p=quarantine` of `p=reject` (niet `p=none` na 8+ weken)
- [ ] SPF alignment (Klaviyo's IP in SPF OF `include:_spf.klaviyo.com`)
- [ ] DKIM actief + aligned (Klaviyo's 2 CNAMEs correct)
- [ ] Dedicated sending subdomain (`mail.merk.nl` niet bare domain)
- [ ] Custom tracking domain ingesteld
- [ ] BIMI-record met VMC (optioneel maar scoort op trust/opens)
- [ ] Google Postmaster Tools toegankelijk: check reputation (hoog / medium / laag)
- [ ] Microsoft SNDS toegankelijk: check deliverability Outlook
- [ ] Bounce rate laatste 90 dagen <2%
- [ ] Spam complaint rate <0.1% (warning >0.3%)
- [ ] Unsubscribe rate per send <0.5%
- [ ] Inbox placement (Litmus / GlockApps test): >95% gmail + outlook
- [ ] Geen blacklist-hits (Spamhaus, SURBL, Barracuda)
- [ ] One-click unsubscribe header correct (List-Unsubscribe + List-Unsubscribe-Post)

### 2. Account-structuur & Integratie (10 punten)

- [ ] Shopify (of Magento/WooCommerce/custom) integratie actief + up-to-date
- [ ] Historische orders gesync'd
- [ ] Web tracking op alle pagina's (incl. checkout, PDP, blog)
- [ ] Klaviyo Catalog gevuld met producten + afbeeldingen (voor dynamic content)
- [ ] Placed Order, Ordered Product, Added to Cart, Viewed Product events fires
- [ ] Fulfilled Order event voor post-purchase timing
- [ ] Refunded Order event voor suppressions
- [ ] Signup forms gekoppeld aan juiste list
- [ ] UTM-conventie consistent over alle sends (utm_source=klaviyo, utm_campaign=X)
- [ ] Custom integrations (3rd party tools → Klaviyo webhooks)

### 3. Lists, Segments & Profile Properties (10 punten)

- [ ] Hoeveel profielen totaal (inactieven meetellen)
- [ ] % engaged 90d (doel: >40%)
- [ ] % engaged 365d (doel: >60%: anders list rot)
- [ ] Lijstgroei per maand (>3% MoM gezond)
- [ ] Aantal actieve segments (minimum 10 bij volwassen account)
- [ ] Sunset-logica: worden niet-openers >90d gesuppresseerd uit bulk-sends?
- [ ] Predictive Analytics aangezet (CLV, Churn, Next Order): vanaf 500+ orders
- [ ] Profile properties gevuld (acquisition_source, first_purchase, loyalty_tier)
- [ ] VIP segment gedefinieerd + in gebruik
- [ ] Discount-seeker segment (voor marge-bescherming)

### 4. Flows (20 punten)

Per core flow → check of actief + performance:

- [ ] **Welcome series** (3-5 emails, 14d): Open >50%, CVR >5%
- [ ] **Abandoned cart** (3 emails, 72u): CVR >8%, RPR >€5
- [ ] **Browse abandonment** (2 emails, 48u): actief + CVR >2%
- [ ] **Post-purchase** (3-5 emails, 30-45d): RPR >€0.50
- [ ] **Winback** (2-3 emails, 90/120/180d): actief
- [ ] **Replenishment** (product-specifiek): voor consumables
- [ ] **Sunset / re-engagement**: unengaged 90d+ → final re-engagement → suppress
- [ ] **Birthday**: optioneel, leuk voor AOV <€60 brands
- [ ] **VIP-flow**: exclusive perks, early access
- [ ] **Review-request** (flow-gebaseerd via Klaviyo of integratie met reviews-app)
- [ ] **Post-delivery** flow (fulfilled event): separate van post-purchase-at-order
- [ ] **Back-in-stock** flow: catalog-driven
- [ ] **Low-inventory urgency** flow: optioneel
- [ ] Alle flows hebben A/B tests actief of recent gedaan (subject, timing, CTA)
- [ ] Alle flows hebben one-click unsubscribe + afzender-adres
- [ ] Alle flows UTM-tagged correct
- [ ] Flow-splits op predicted_clv of segment actief
- [ ] Dynamische product-aanbevelingen (Klaviyo Catalog) gebruikt
- [ ] SMS-steps in core flows (cart, shipping, winback): indien SMS enabled
- [ ] Alt-text en fallbacks voor personalization-tokens (`{{ first_name|default:'hi' }}`)

### 5. Campagnes + Segmentatie (10 punten)

- [ ] Campagne-frequentie (1-3 per week gezond voor e-com)
- [ ] Altijd naar segment, nooit naar "all subscribers" (behalve echte announce-momenten)
- [ ] Send-tijd geoptimaliseerd (Klaviyo Smart Send Time aan)
- [ ] A/B testen op subject-line standaard
- [ ] Preview-text altijd ingevuld
- [ ] Mobile-first design (60-70% van opens op mobile)
- [ ] Campagne-kalender 4-6 weken vooruit gepland
- [ ] Suppression-regels per campagne (purchasers laatste 14d vaak suppressen)
- [ ] Revenue per recipient (RPR) > €0.20 gemiddeld
- [ ] Unsubscribe rate <0.5% per send

### 6. SMS Programma (5 punten)

- [ ] SMS-opt-in via two-step form (email → SMS)
- [ ] TCPA / GDPR compliant opt-in (explicit consent, duidelijke disclosure)
- [ ] Opt-out in elke SMS (STOP / AFMELDEN)
- [ ] Max 3-4 promotionele sends/maand
- [ ] SMS-flows actief (cart urgency, shipping, winback)

### 7. Loyalty & Subscription Stack (5 punten)

- [ ] Loyalty-app aanwezig? (LoyaltyLion / Smile.io / Yotpo / Klaviyo native / geen)
- [ ] Loyalty-events syncen naar Klaviyo profile
- [ ] Loyalty-flow: enrollment, tier upgrade, points reminder, expiry warning
- [ ] Subscription-app? (Recharge / Smartrr / Skio / geen)
- [ ] Subscription-lifecycle flows: pre-delivery, skip/swap, pause, churn-save

### 8. Reviews / UGC Stack (5 punten)

- [ ] Reviews-app aanwezig (Yotpo / Stamped / Junip / Klaviyo / Trustpilot / Google)
- [ ] Review-request email in post-purchase flow (7-14d na fulfillment)
- [ ] Review-rate post-purchase >4%
- [ ] Gem. rating >4.3 (waarschuwing bij <4.0)
- [ ] UGC actief gemodereerd + gebruikt in email/ads/PDP

### 9. Cross-Channel Integratie (5 punten)

- [ ] Klaviyo → Meta Custom Audiences sync actief
- [ ] Klaviyo → Google Ads Customer Match sync
- [ ] Suppression-sync (purchasers excluded van acquisition-ads)
- [ ] Identity resolution (email + phone + cookie-id) consistent
- [ ] GA4 ontvangt correcte UTM's van Klaviyo-sends

### 10. Compliance & Privacy (5 punten)

- [ ] Opt-in bewijs voor alle lijsten (date, IP, source)
- [ ] Footer heeft fysiek afzender-adres
- [ ] Privacy policy link in elke email
- [ ] GDPR-verwijder-verzoek workflow gedocumenteerd
- [ ] Double-opt-in voor DE-markt (wettelijk verplicht)

## De prioriteitsmatrix

Voor elke finding → score op:
- **Impact** (1-5): hoeveel business-impact bij fixen
- **Effort** (1-5): hoeveel werk om te fixen
- **Priority** = Impact × (6 - Effort)

Sorteer top 10 voor actielijst.

## Scoringsrubriek samenvatting

| Categorie | Max punten | Klant-score | % | Status |
|---|---|---|---|---|
| Deliverability | 15 | __ | __% | Groen/Geel/Rood |
| Integratie | 10 | __ | __% | |
| Lists/Segments | 10 | __ | __% | |
| Flows | 20 | __ | __% | |
| Campagnes | 10 | __ | __% | |
| SMS | 5 | __ | __% | |
| Loyalty/Sub | 5 | __ | __% | |
| Reviews/UGC | 5 | __ | __% | |
| Cross-channel | 5 | __ | __% | |
| Compliance | 5 | __ | __% | |
| **Totaal** | **90** | **__** | **__%** | |

**Status drempels**:
- Groen (gezond): >80%
- Geel (aandacht): 60-80%
- Rood (kritiek): <60%

## Business-impact bereken

Voor elke top-3 actiepunt, schat:
- Huidige RPR / CVR / repeat-rate
- Verwachte lift na fix (% of absoluut)
- Jaarlijks € effect

Voorbeeld: "Welcome flow mist email 2+3 → huidige CVR 2% op 500 nieuwe subs/mnd = 10 orders × €60 AOV = €600/mnd. Met 4% CVR (benchmark): €1.200/mnd = €7.200/jaar lift."

## Non-negotiables

- Nooit "het account is prima" roepen zonder data-check: alle 80+ punten doorlopen
- Altijd benchmarks noemen (email-share 20-40%, RPR welcome >€2, repeat 90d >25%)
- Actiepunten moeten concreet zijn: niet "verbeter flows" maar "bouw stap 3 van welcome-serie met UGC-carousel + €25 incentive, verwacht +3% CVR"
- Rapport in `retention-lifecycle/reports/audit-YYYY-MM-DD.md` + log in history-log

## Follow-up sub-skills

Na audit, verwijs MP naar:
- **retention-lifecycle-deliverability**: voor elke Rood-score op DMARC/SPF/DKIM
- **retention-lifecycle-flows**: voor ontbrekende of onderpresterende flows
- **retention-lifecycle-campaigns**: voor segmentatie/campagne-kalender
- **retention-lifecycle-loyalty**: als loyalty/subscription ontbreekt en AOV/repeat het rechtvaardigt
- **retention-lifecycle-reviews**: als review-rate <4% of rating <4.0
- **retention-lifecycle-cohort**: voor diepere CLV/churn-analyse
