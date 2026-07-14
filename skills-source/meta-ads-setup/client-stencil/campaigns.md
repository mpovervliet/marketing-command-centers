# Campaigns Overview — [Klant] (Meta Ads)

## Huidige architectuur

```
(boom-diagram van live campagnes, bv.)

ASC Prospecting (CBO €... /dag)
├── Ad-set 1 (Advantage+ Audience, broad)
│   ├── Ad: video — UGC Hook A
│   ├── Ad: static — Lifestyle 1
│   └── Ad: carousel — USP frames
└── (ASC = single ad-set, alle ads daarin)

Retargeting Warm 14-30d (CBO €... /dag)
├── Ad-set 1: Site visitors 14d (excl. purchase 30d)
└── Ad-set 2: ATC 7-30d (DPA + brand-statics)

Branded Reach (Reels, optioneel)
└── Ad-set: brand awareness 9:16 video
```

## Campagnes

### 1. [Campagne naam]
- **Type**: ASC / Conversion / Lead Gen / Reach / Engagement / Catalog Sales
- **Objective (API)**: OUTCOME_SALES / OUTCOME_LEADS / OUTCOME_AWARENESS / etc.
- **Doel**: prospecting / retargeting / retention / brand
- **Budget**: €... /dag (CBO of ABO?)
- **Bid strategy**: Lowest Cost / Cost Cap (€...) / Bid Cap / ROAS Goal (%)
- **Optimisation event**: Purchase / Lead / ATC / etc.
- **Status**: actief / leerfase / experiment / paused
- **Existing Customer Cap**: ___% (alleen ASC)
- **Ad-sets**:
  - [Ad-set naam] — audience — placement — # ads
- **Rationale**:
- **Launch datum**:
- **Last major change**: YYYY-MM-DD

### 2. ...

---

## Shared resources

### Custom Audiences
- [naam] — bron — refresh-frequentie

### Lookalikes
- [naam] — seed — % — markt

### Saved Audiences (interest-based, indien gebruikt)
-

### Datasets / Pixels
- [Dataset ID] — gekoppeld aan: [...]

### Catalogs
- [Catalog ID] — bron — # items — used in: [campagnes]

### Creative-batches (per launch-window)
- Batch [datum] — # ads — concept-thema's

---

## Naming convention
```
[Channel]_[Funnel]_[Audience]_[Creative-batch]_[Date]
bv: META_ASC_Broad_Batch04_2026-04
```

## Wijzigingen log
Zie `history-log.md`.
