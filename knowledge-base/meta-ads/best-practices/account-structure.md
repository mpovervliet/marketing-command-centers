# Meta Ads Account Structure — 2026

## 5 principes

1. **Consolidate, don't fragment.** Te veel campagnes/ad-sets verspreiden signaal. Algoritme leert op ad-set niveau — geef het ≥50 conv/week.
2. **ASC is de motor**, niet een laag erbij. Voor e-com prospecting krijg ASC 50-70% van budget.
3. **Retargeting is niet meer wat het was.** iOS + Pixel-loss = retargeting-pools half zo groot. Houd het simpel: 1-2 retargeting ad-sets max.
4. **Naming is operations.** Een goede naming-convention = sneller debuggen, sneller rapporteren.
5. **Brand & retention apart.** Branded reach + winback verdienen aparte campagnes met aparte KPIs.

## Power Stack (e-com, default)

```
Campagne 1: META_ASC_Prospecting          50-70% budget    | Existing Cust Cap 20-30%
Campagne 2: META_RT_Warm14-30             10-15%           | Site visitors + ATC, DPA + brand
Campagne 3: META_RT_Engagement7-14        5-10%            | Video VV 50%+ / IG engagers (optioneel)
Campagne 4: META_Retention_Winback90      5%               | Buyers 30-90d, win-back / cross-sell
Campagne 5: META_Brand_Reach              5-10%            | Reels awareness (optioneel boven €25k/mnd)
```

**Totaal 3-5 campagnes** voor accounts <€50k/mnd. Onder €15k/mnd: vaak **2 campagnes** (ASC + 1 retargeting).

## B2B / lead-gen Stack

```
Campagne 1: META_LG_Form_TOF              40%   | Instant Form, broad
Campagne 2: META_Conv_Form_MOF            30%   | Conversion → site form, mid-intent
Campagne 3: META_RT_Demo                  20%   | Engaged + site visitors → demo CTA
Campagne 4: META_ABM_Targeted             10%   | Custom audience uploaded company-list
```

- AEM prioriteit aangepast: Qualified Lead > Lead > Purchase
- Offline conversion sync (CRM → Meta) verplicht voor middel/hoog-commit lead-cycles

## Ad-set rules

- **Maximaal 4 ad-sets per campagne** (liever 2-3)
- **Budget per ad-set ≥ 10× CPA target**
- **Minimaal 5 ads per ad-set** (anders geen creative-rotatie binnen Meta's algorithme)
- **CBO (Campaign Budget Optimization) default**, ABO alleen bij sterk audience-test (interest-A vs interest-B vs broad)
- **Advantage+ Placements default ON**

## Naming convention

```
[Channel]_[Funnel]_[Audience-tag]_[Creative-batch]_[YYYY-MM]
```

Voorbeelden:
- `META_ASC_Broad_Batch04_2026-04`
- `META_RT_Site14d_BatchDPA01_2026-04`
- `META_LG_Form_BroadEU_Batch02_2026-03`
- `META_Brand_Reach_ReelsBatch01_2026-04`

Audience-tag voorbeelden: `Broad`, `Site14d`, `LAL1pct_Buyers`, `IGEngage365d`, `CM_BuyersList_2026-Q1`.

## Wanneer NIET consolideren

- **Geo-split** als markten ander aanbod / taal / pricing hebben (NL vs DE)
- **Categorie-split** als ASC >€10k/mnd én strategisch onderscheid (high-margin vs low)
- **Special Ad Categories** (housing/employment/credit/social) — Meta dwingt aparte structuur
- **Brand vs non-brand** alleen als beide >50 conv/week per campagne

## Audit-signalen voor restructure

- Budget-versnippering (>15 actieve ad-sets, geen >50 conv/week)
- Audience-overlap >25% tussen ad-sets (tool: Audience Overlap)
- Frequency stijgt over álle campagnes tegelijk (audience saturation)
- Campagne >30 dagen 0 spend → opruimen
- Naming inconsistent → unify

## Referenties
- [Meta Business — Account Structure best practices](https://www.facebook.com/business/help)
- [Common Thread Collective — Kill, Cut, Keep, Scale framework](https://commonthreadco.com/blogs/coachs-corner)
- [Foxwell Digital — Meta consolidation framework](https://foxwelldigital.com/)
