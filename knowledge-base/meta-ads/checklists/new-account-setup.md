# Checklist: New Meta Ads Account Setup

Doorloop deze in volgorde. Vink af tijdens onboarding.

## Fase 1 — Business Manager fundamenten

- [ ] Business Manager (BM) bestaat, klant is **eigenaar** (niet bureau-locked)
- [ ] MP/bureau heeft **admin** rol toegekend
- [ ] Ad Account aangemaakt of geclaimd in BM
- [ ] Facebook Page geclaimd in BM
- [ ] Instagram Business Account gekoppeld aan Page
- [ ] Payment method actief + backup
- [ ] Timezone correct (vaak Europe/Amsterdam)
- [ ] Currency correct (EUR voor NL, anders per markt)
- [ ] Factuuradres correct
- [ ] Spending limit ingesteld (veiligheidsmaatregel)
- [ ] 2FA verplicht voor alle admin-users
- [ ] Geen "ghost" users met toegang (oude bureau-personeelsleden)

## Fase 2 — Tracking fundamenten

- [ ] **Pixel ID** bekend en geïnstalleerd op site
- [ ] **Dataset** aangemaakt (consolidate Pixel + CAPI hier)
- [ ] **CAPI** route gekozen + geïmplementeerd:
  - [ ] Shopify native (incl. "Maximum data sharing")
  - [ ] Conversions API Gateway (managed)
  - [ ] Server-side GTM
  - [ ] WooCommerce/Magento plugin
  - [ ] Eigen API
- [ ] **event_id** dedup actief op alle kritieke events (Pixel + CAPI verzenden zelfde ID)
- [ ] **Advanced Matching** aan met email, phone, fn, ln, ct, st, zp, country, fbp, fbc, IP, UA
- [ ] **Domain verified** in BM
- [ ] **Aggregated Event Measurement (AEM)** geconfigureerd:
  - Prio 1: Purchase (e-com) of Qualified Lead (B2B)
  - Top 8 events ingevuld
- [ ] **Test Events** geverifieerd (Events Manager → Test Events)
- [ ] **Event Match Quality (EMQ)** baseline gemeten ≥7.0 binnen 48u
- [ ] **CAPI coverage** ≥80% binnen eerste week, doel 95%+ binnen maand 1
- [ ] Cookie banner / Consent signals correct doorgegeven aan Pixel + CAPI

## Fase 3 — Catalog & Commerce (e-com)

- [ ] Catalog aangemaakt in Commerce Manager
- [ ] Catalog-bron gekoppeld (Shopify / Channable / WooCommerce / API / CSV)
- [ ] Sync-frequentie ≥4× per dag (real-time bij Shopify native)
- [ ] **Disapprovals <2%** in Diagnostics
- [ ] Verplichte velden compleet: id, title, description, availability, price, image, link, brand, gtin/mpn, category
- [ ] **Custom labels 0-4** gevuld (marge, seizoen, hero, velocity, klant-segment)
- [ ] **Product Sets** aangemaakt: Bestsellers, High margin, New arrivals, Seasonal, Per categorie
- [ ] **Instagram Shop** geactiveerd
- [ ] Producten getagged op organic IG-posts (top 10 minimum)

## Fase 4 — Audiences

- [ ] Customer Match upload met buyers-180d (min. 1.000 records)
- [ ] Customer Match: high-LTV segment
- [ ] Customer Match: lapsed buyers (180-365d) voor winback
- [ ] Custom Audience: Website 30d, 90d, 180d
- [ ] Custom Audience: ATC 14d, 30d (excl. Purchase)
- [ ] Custom Audience: IG engagers 365d
- [ ] Custom Audience: FB Page engagers 365d
- [ ] Custom Audience: Video viewers 25/50/75/95% (per video of overall)
- [ ] Lookalike 1% Purchasers (seed ≥1.000)
- [ ] Lookalike 1-3% Purchasers (scale)
- [ ] Lookalike 1% IG-engagers (alt-seed)
- [ ] Sync-tool actief (Klaviyo / HubSpot / Zapier voor Customer Match auto-refresh)

## Fase 5 — Campagne-architectuur (Power Stack)

E-com:
- [ ] Campagne 1: ASC Prospecting (CBO, 50-70% budget, Existing Cust Cap 20-30%)
- [ ] Campagne 2: Retargeting Warm 14-30d (CBO, 10-15%)
- [ ] Campagne 3: Retargeting Engagement 7-14d (optioneel)
- [ ] Campagne 4: Retention Winback (5%)
- [ ] Campagne 5: Brand Reach (optioneel boven €25k/mnd)

B2B:
- [ ] Campagne 1: Lead Gen Form TOF
- [ ] Campagne 2: Conversion Form MOF
- [ ] Campagne 3: RT Demo
- [ ] Campagne 4: ABM Targeted (optioneel)

## Fase 6 — Ad-set configuratie

- [ ] Per ad-set: budget ≥10× CPA target
- [ ] Optimisation event = Purchase / Lead (niet Page View / LP View)
- [ ] Attribution window = 7d click + 1d view (default)
- [ ] **Advantage+ Placements ON** (default)
- [ ] **Advantage+ Audience ON** (default; Original Audience Options alleen voor Special Categories)
- [ ] Geo correct (NL / BE / DE / etc.)
- [ ] Age & gender breed (tenzij wettelijk anders)
- [ ] Exclusions ingesteld:
  - Recent purchasers (30d/90d)
  - Bestaande klanten (Customer Match)

## Fase 7 — Creative launch-batch

- [ ] **8-15 ads** klaar voor ASC launch
- [ ] Mix: 40% video Reels-fit, 30% static, 20% carousel, 10% catalog
- [ ] Per ad: **Advantage+ Creative AAN** (tenzij brand-locked)
- [ ] Hooks-library ingevuld in `creative/hooks-library.md`
- [ ] Naming convention consistent: `META_[Funnel]_[Audience]_[Concept]_[v01/02]_YYYY-MM`
- [ ] Primary text <125 chars (mobile preview)
- [ ] Headlines 27-40 chars
- [ ] CTA per ad-doel correct gekozen
- [ ] Captions hard-coded op video
- [ ] 9:16 native voor Reels (geen letterbox)

## Fase 8 — Bidding & Budget

- [ ] Bid strategy = **Lowest Cost** (start)
- [ ] Cost Cap pas inplannen na 50+ conv/7d (week 5+)
- [ ] CBO actief op campagne-niveau
- [ ] Daily budgets ≥10× CPA target
- [ ] **Existing Customer Budget Cap** ingesteld op ASC (20-30%)

## Fase 9 — Launch verification (T-0)

- [ ] Pixel fires getest in Test Events op alle kritieke events
- [ ] Geen policy-issues op ads (Account Quality groen)
- [ ] Catalog actief, geen disapprovals
- [ ] AEM Purchase op prioriteit 1
- [ ] Domain verified
- [ ] Existing Customer Cap correct ingesteld
- [ ] Dagbudget × aantal dagen = klant-toegekend maandbudget
- [ ] Branded term policy met klant gecheckt (mag je merknaam concurrent in copy noemen?)
- [ ] Special Ad Category check (housing/credit/employment/social)

## Fase 10 — Post-launch (T+24u, T+48u, T+7d)

T+24u:
- [ ] Events binnen, EMQ ≥6 (zal stijgen naar 7+)
- [ ] CAPI events arriving
- [ ] Geen disapproval-meldingen
- [ ] Spend matchend met dagbudget

T+48u:
- [ ] EMQ ≥7
- [ ] CAPI coverage ≥80%
- [ ] Eerste impressies + clicks (sanity)
- [ ] Geen rare frequency-spikes

T+7d:
- [ ] EMQ ≥7.5 (mikpunt 7-8)
- [ ] CAPI coverage ≥90%
- [ ] Learning phase status check per ad-set
- [ ] Eerste creative-data: kill bottom-2 ads als duidelijk onder
- [ ] History-log update met launch-status

---

## Output

Sla deze ingevulde checklist op als `<klantmap>/meta-ads/reports/setup-checklist-YYYY-MM-DD.md` met alle items geboxchecked of geannoteerd.
