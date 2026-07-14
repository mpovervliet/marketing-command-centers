# Audience Strategies — 2026

## Waarom audiences critical zijn
Smart Bidding en Pmax werken beter met sterke audience signals. Ze geven het algoritme richting waar harde targeting ontbreekt.

## Audience lagen

### 1. First-party (eigenaren-data, goud waard)
- **Customer Match**: upload email/phone/address — min. 1.000 records
- **Buyer segments**: 30d / 90d / 365d buyers afzonderlijk
- **Cart abandoners** (dynamic via GA4 of Klaviyo)
- **High-LTV segment**: top 20% klanten voor lookalikes
- **Newsletter subscribers** (warm maar nog geen klant)
- **Cancelled / churned** (win-back doelgroep)

### 2. Site-based (remarketing)
- Website visitors 7d / 30d / 90d
- Category-viewers (product-categorie voor Pmax-signal)
- Productpage-viewers 30d (met hoge intent)
- Cart-abandoners
- Converters

### 3. Google's own (voor acquisition)
- **In-market segments**: actieve onderzoekers
- **Affinity segments**: interesse-gebaseerd (breder)
- **Life events**: verhuizen, trouwen, baby (vaak relevant voor huis-gerelateerd)
- **Demographic segments**: inkomen, opleiding, ouders

### 4. Custom segments
Je eigen "virtual audiences":
- Mensen die keyword X zoeken
- Mensen die op URL Y van concurrent zijn geweest
- Combinaties van bovenstaande

## Toepassing per campagne-type

### Search
- **Observation mode** (niet targeting) → bid adjustments op hoog-performende segmenten
- First-party lists exclude bij acquisitie (bestaande klanten niet bieden als we acquisitie willen)

### Pmax
- **Audience signals per asset group** (signals niet harde targeting)
- Per asset group: 1× CM, 1× website, 1× converters, 2× in-market, 1× custom segment

### Demand Gen
- **Lookalikes** van high-LTV Customer Match
- In-market upper-funnel segmenten
- Video viewers + engagement-list

### Video (YouTube)
- Video viewers 7d/30d
- Channel subscribers
- Custom segments op concurrent-videos

## Customer Match best practices

- Minimum 1.000 records, **ideaal 5.000+** voor lookalikes
- **Refresh minimaal maandelijks** — list veroudert
- Normalisatie: hash client-side of laat Ads doen
- Segmenteren op aankoop-waarde → high-LTV aparte list
- Excludes: current customers uit acquisitie-campagnes

## GDPR/AVG compliance
- Alleen uploaden met marketing-consent
- Explicit opt-out verwerken in CRM → maandelijkse sync
- Privacy policy vermelding van Customer Match verplicht

## Audience refresh schema

| Lijst | Update |
|---|---|
| Customer Match — Buyers | Wekelijks via API/Zapier |
| Cart abandoners | Dagelijks |
| Website visitors | Automatisch (tag-based) |
| High-LTV segment | Maandelijks |
| Churned | Maandelijks |
| Newsletter | Wekelijks |

## Anti-patronen
- Alle klanten in één list → geen differentiatie mogelijk
- Customer Match < 1000 records → wordt door Google genegeerd
- Zelfde audience signal voor alle Pmax asset groups → geen differentiatie
- Exclusions vergeten → bestaande klanten krijgen acquisitie-ads

## Referenties
- [Google Ads Help — Customer Match](https://support.google.com/google-ads/answer/6379332)
- ProfitMetrics, Elevar, Klaviyo voor sync-tools
