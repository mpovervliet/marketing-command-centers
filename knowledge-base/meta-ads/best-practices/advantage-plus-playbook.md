# Advantage+ Shopping Campaigns — Playbook 2026

## 3 principes

1. **ASC eats prospecting.** In de meeste e-com accounts ≥80% van prospecting-budget = ASC.
2. **Creative is je input.** ASC werkt zo goed als de creative die je erin stopt. 8-15 ads = werkbare batch.
3. **Existing Customer Cap is je hefboom.** Tussen 0% (alleen acquisitie) en 100% (alleen retentie) — kies bewust per klant.

## Wanneer ASC, wanneer niet

| Situatie | ASC? |
|---|---|
| E-com, ≥€50/dag budget, Catalog actief | **JA** |
| E-com, <€20/dag budget | **NEE** (te weinig signal voor ASC) |
| B2B / Lead-gen | **NEE** (ASC is sales-only voor nu) |
| Subscription / SaaS | Conditioneel — als Purchase event = subscription start, ja |
| Local / single-location | NEE — gewone Conversion campagne werkt beter |
| Marktplaats (Bol, Amazon) | Geen DTC-purchase = geen ASC |

## Setup (stap voor stap)

### Stap 1: Vereisten check
- Catalog actief (≥10 producten, <2% disapprovals)
- Pixel + CAPI Purchase event met value
- Domain verified
- AEM Purchase op prioriteit 1
- Existing Customer audience geüpload (CSV via Customer Match)

### Stap 2: Campagne aanmaken
- Type: Sales
- Subtype: Advantage+ Shopping Campaign
- Conversion location: Website
- Performance goal: Maximize number of conversions (start) of Maximize value of conversions
- Catalog: link je catalog
- Budget: CBO, daily, ≥10× CPA target

### Stap 3: Geographies + Cap
- Markten: 1-3 landen (nooit "world wide" tenzij echt globaal)
- **Existing Customer Budget Cap**: 20-30% start
- Existing Customer audience verifiëren

### Stap 4: Ads toevoegen (8-15)
- Mix: 40% video (9:16 Reels-fit), 30% static, 20% carousel, 10% catalog (DPA-template)
- Per ad: Advantage+ Creative AAN
- Naming: `META_ASC_Broad_<Concept>_<v01/02>_YYYY-MM`
- Eerste batch: variation in **hooks** > variation in everything

### Stap 5: Launch
- Geen "fancy options" eerste 7 dagen — laat ASC leren
- Geen wijzigingen in Cap, geen budget-shifts >20%, geen ads pauzeren
- Tracking-check dag 1: events kloppen?

### Stap 6: Eerste eval (dag 8-14)
- Bottom 2 ads: kill als <0.5% link CTR + 200+ impr
- Winners (≥1.5% CTR + onder CPA): laat staan, geen budget-shift
- Algemene CPA: indien 2× target → audit (creative te zwak / Pixel issue / catalog mis)

### Stap 7: Scale (dag 15-28+)
- Algemene CPA onder target 14d → +20-25% campagne-budget
- Refresh ad-batch om de 14-21 dagen (3-5 nieuwe ads/2 weken)
- Eventueel: 2e ASC voor categorie-/geo-split

## ASC vs gewone Conversion-campagne (sales)

| Metric | ASC | Conversion |
|---|---|---|
| Audience targeting | Advantage+ (broad, AI-driven) | Custom (interest, LAL, etc.) |
| Placements | All Advantage+ | Custom mogelijk |
| Existing Customer Cap | JA | Nee (handmatig excluden nodig) |
| Catalog integration | Native | Native (DPA campaign) |
| Creative aantal | 1 ad-set, 8-15 ads | Meerdere ad-sets |
| Best voor | Prospecting bij scale | Specific audience tests, retargeting |

## Existing Customer Budget Cap — kies waarde

| Cap | Wanneer |
|---|---|
| **0% (off)** | Alleen acquisitie. Mooi voor pure CAC-meting. |
| **15-20%** | Standaard voor groei-acquisitie focus. |
| **25-30%** | Mid-balance: enige cross-sell maar acquisitie primair. |
| **50%** | Helft retention — als retentie KPI is. |
| **70-100%** | Expliciet retentie-campagne — gebruik dan een **2e** ASC zonder Cap-omkering. |

**Formule kies-houvast**: hoe groter je purchaser-base relatief tot prospect-pool, hoe hoger je Cap setten, anders kannibaliseer je via ASC bestaande conversies.

## Wat als ASC niet werkt?

| Symptoom | Diagnose | Fix |
|---|---|---|
| Verbruikt te weinig budget (≤50%) | Te weinig signaal: bid te laag of audience te smal | Bid omhoog (Cost Cap +20%) of geo verbreden |
| Verbruikt vol, maar CPA 2-3× target | Creative onder par | Refresh batch, ander hook-type, UGC inbrengen |
| Verbruikt vol, on-target eerste 5 dagen, dan crash | Audience saturation / creative fatigue | Refresh creative, evt. verbreed geo |
| Bijna alle conversies zijn Existing Customer | Cap te hoog | Cap omlaag (10-15%) |
| Disapprovals plotseling hoog | Catalog feed-issue | Channable / Shopify feed health-check |
| Ads onevenredig in Audience Network | Lage kwaliteit placement-mix | "Manual placements" overwegen — alleen FB+IG+Reels |

## Catalog-vereisten voor ASC

- ≥10 producten (technisch min., praktisch >50 voor goede performance)
- Title: 60-100 chars met merk + USP
- Image: 1200×1200 minimum, witte/lifestyle
- Price + currency
- Availability real-time
- `google_product_category` correct
- Custom labels invullen voor toekomstige product set-creatie

## Multi-ASC strategie (gevorderd)

Pas zinvol bij **>€10k/mnd in single ASC** EN strategische redenen:

- **ASC NL** + **ASC BE** + **ASC DE** (taal + pricing per markt)
- **ASC High Margin** + **ASC Volume** (custom-label-driven product sets)
- **ASC Hero SKU** (top 20 products) + **ASC Long Tail** (rest)
- **ASC Brand A** + **ASC Brand B** (multi-brand catalogs)

**Niet doen**: ASC opdelen "om meer te testen" zonder strategische reden — versnippert leer-signaal.

## Referenties
- [Meta — ASC official docs](https://www.facebook.com/business/help/advantage-plus-shopping-campaigns)
- [Common Thread Collective — ASC playbook](https://commonthreadco.com/)
- [Foxwell Digital — Advanced ASC strategies](https://foxwelldigital.com/)
- [Motion — Creative-first ASC reporting](https://motionapp.com/)
