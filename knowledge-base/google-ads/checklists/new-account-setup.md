# New Account Setup Checklist

Van greenfield naar live-klaar Google Ads account.

## Fase 1 — Fundamenten (dag 1)
- [ ] MCC-link met klantaccount
- [ ] Billing ingesteld (klant's eigen kaart/factuur)
- [ ] Timezone = klant's timezone (niet bureau-timezone!)
- [ ] Currency (niet meer aanpasbaar na transactie)
- [ ] Factuuradres compleet
- [ ] Account-naam volgens conventie: `<Klant> - <Land> - <Fase>`
- [ ] Auto-tagging AAN
- [ ] User access: klant read-only, MP admin, optioneel andere freelancers
- [ ] 2FA verplicht op main account

## Fase 2 — Tracking Stack (dag 1-3)
- [ ] GTM container op site
- [ ] Consent Mode v2 Advanced via gecertificeerde CMP (Cookiebot/Usercentrics/etc.)
- [ ] GA4 property gekoppeld
- [ ] GA4 → Ads link in Tools & Settings
- [ ] Ads conversion action(s) aangemaakt
- [ ] Enhanced Conversions AAN + user data veldnamen mapped
- [ ] Real-time test: test transactie / lead → zichtbaar in GA4 + Ads
- [ ] Enhanced Conv % check na 24u (>50%)
- [ ] Server-side GTM (indien budget >€10k/mnd)
- [ ] Offline Conversion Upload opgezet (B2B, Zapier/CRM-api)
- [ ] Klant-specifieke conversion values correct (niet dummy €1)

## Fase 3 — Feed & Merchant Center (e-com, dag 2-4)
- [ ] Merchant Center account (eigenaar: klant)
- [ ] Linking met Google Ads
- [ ] Feed-bron (Shopify / Channable / direct)
- [ ] Product titles geoptimaliseerd (keyword front-loaded)
- [ ] GTINs / MPN ingevuld
- [ ] Google Product Category op laag niveau
- [ ] Custom labels 0-4 mapping (marge, seizoen, inventory, bestseller, brand)
- [ ] Supplemental feed voor marge (indien POAS-aanpak)
- [ ] Disapprovals opgelost (<1%)
- [ ] Free Listings + Automatic Improvements AAN
- [ ] Shipping settings (landen, kosten, doorlooptijd)
- [ ] Return policy in Merchant Center
- [ ] Price micro-data verifiëren op site

## Fase 4 — Audience Infrastructure (dag 3-5)
- [ ] Customer Match upload (minimaal 1000 records, liefst 5k+)
- [ ] Segmentatie: buyers-90d, high-LTV, cart-abandoners, churned
- [ ] Website visitor lists: 7d, 30d, 90d
- [ ] Converter-list per campagne-type
- [ ] CM sync geautomatiseerd (Klaviyo, Zapier, CRM)
- [ ] GDPR consent documented

## Fase 5 — Keyword & Concurrent Research (dag 3-5)
- [ ] Keyword research via `dfs_keywords_tool` (NL/BE/DE per klant)
- [ ] Long-tail lijst per categorie
- [ ] SERP-analyse via `dfs_serp_tool` top 5 competitors
- [ ] Volume/CPC-schatting per cluster
- [ ] Concurrent-landingpages gereviewd
- [ ] Branded-kw lijst klant + variaties + typos

## Fase 6 — Campagne-architectuur (dag 5-7)
Default Power Pack (e-com):
- [ ] Search — Brand
- [ ] Pmax — Brand (exclusion OFF)
- [ ] Pmax — Core High Margin (exclusion ON)
- [ ] Pmax — Core Mid Margin (exclusion ON)
- [ ] Pmax — Hero SKUs (exclusion ON)
- [ ] AI Max Search — Generic (optioneel, start 30d later)
- [ ] Demand Gen (optioneel bij budget >€15k/mnd)

B2B lead-gen:
- [ ] Search — Brand
- [ ] Search — High-intent non-brand
- [ ] AI Max Search — Generic (experiment)
- [ ] Pmax — Lead-focused (met OCI upload)

## Fase 7 — Creative & Assets (dag 5-10)
Via `google-ads-creative` skill:
- [ ] 15 headlines per Search ad group (STAG)
- [ ] 4-5 descriptions per ad group
- [ ] 15 headlines per Pmax asset group
- [ ] 5 long headlines per asset group
- [ ] 5 descriptions per asset group
- [ ] 20 images per asset group (1:1, 1.91:1, 4:5)
- [ ] 5-15 videos per asset group (6s, 15s, 30s, multi-orientatie)
- [ ] Logo 1:1 + 4:1
- [ ] 8-10 sitelinks
- [ ] 8-10 callouts
- [ ] Structured snippets
- [ ] Price extensions (e-com)
- [ ] Alle assets policy-compliant

## Fase 8 — Bidding & Budgets (dag 5-7)
- [ ] Start alle campagnes op Maximize Conversions (geen target)
- [ ] Budget = minimaal 10× verwacht CPA per dag
- [ ] Pmax Core krijgt 50-60% budget
- [ ] Search Generic: 20-30%
- [ ] Pmax Brand: 5-10%
- [ ] Bid caps in portfolio (3× tCPA) indien zorgen
- [ ] Shared bidding strategies aanmaken voor future-use

## Fase 9 — Negatives & Exclusions (dag 5-7)
- [ ] Shared negative list "General Wasted"
- [ ] Shared negative list "Jobs & Career"
- [ ] Shared negative list "Brand Terms" (voor non-brand campagnes)
- [ ] Placement exclusion list (shared)
- [ ] Pmax brand exclusion AAN op non-brand
- [ ] Audience exclusion: bestaande klanten uit acquisitie
- [ ] Geo-exclusion: landen waar klant niet levert

## Fase 10 — Launch (dag 10)
- [ ] Pre-launch review met MP (alle campagnes, alle assets)
- [ ] Conversion test: test transactie door dev/test-order
- [ ] Spelling/copy review
- [ ] Landing pages live + mobiel getest
- [ ] Budget pacing verwachting
- [ ] Launch-tijd: maandag-woensdag, niet vrijdag (monitoring-weekend risico)

## Fase 11 — Monitoring eerste 14 dagen (leerfase)
- [ ] Dag 1: alle campagnes actief, impressies komen
- [ ] Dag 2-3: eerste clicks/conversies
- [ ] Dag 7: budget-pacing check
- [ ] Dag 14: eerste mini-audit (verspilling, gaps)
- [ ] Dag 21-28: eerste volwaardige eval
- [ ] Geen grote structurele wijzigingen in eerste 14 dagen (learning period)

## Fase 12 — Overdracht naar routine
- [ ] `history-log.md` entry: Account launch
- [ ] `account-brief.md` bijgewerkt met live customer_id en linked accounts
- [ ] Weekly optimize calendar ingesteld
- [ ] Monthly audit datum gepland
- [ ] Klant-onboarding deliverables gedeeld (Sheets dashboard, rapport-ritme)
