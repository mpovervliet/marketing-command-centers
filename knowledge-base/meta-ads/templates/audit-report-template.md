# Meta Ads Audit Report — [Klant]
*Audit datum: YYYY-MM-DD*
*Periode geanalyseerd: laatste 90 dagen*
*Auditor: MP*

## Executive Summary (½ A4)

[3-5 zinnen. Focus op grootste hefbomen + €-impact-schatting + tijdslijn.]

**Top 3 bevindingen**:
1. [Hoofd-issue 1 + impact-schatting]
2. [Hoofd-issue 2 + impact-schatting]
3. [Hoofd-issue 3 + impact-schatting]

**Geschatte impact bij volledige implementatie**: €... extra omzet/jaar of -€... CAC-besparing.

---

## Scorecard (per domein, 0-10)

| Domein | Score | Korte toelichting |
|---|---|---|
| 1. Business Manager & Accounts | /10 | |
| 2. Tracking Stack (Pixel/CAPI/EMQ) | /10 | |
| 3. Campagne-structuur | /10 | |
| 4. Ad Sets | /10 | |
| 5. Ads & Creative Health | /10 | |
| 6. Audiences | /10 | |
| 7. Catalog & Commerce | /10 | |
| 8. Bidding & Budget | /10 | |
| 9. Beleid & Compliance | /10 | |
| 10. Cross-channel & Incrementaliteit | /10 | |
| **Totaal** | **/100** | |

---

## Bevindingen in detail

### 1. Business Manager & Accounts
- ✅ Wat goed is: [...]
- ❌ Issues: [...]
- 💡 Recommendation: [...]

### 2. Tracking Stack
*De zwaarste weging — 30% van audit-impact zit hier.*
- ✅ Wat goed is: [...]
- ❌ Issues: [bv. EMQ Purchase = 5.8 → mist 25-40% match]
- 💡 Recommendation: [bv. Advanced Matching uitbreiden, sGTM upgrade]
- 📊 Bewijs: [screenshots / data uit Events Manager]

### 3. Campagne-structuur
- ✅ ...
- ❌ ...
- 💡 ...

### 4. Ad Sets
- ✅ ...
- ❌ ...
- 💡 ...

### 5. Ads & Creative Health
- ✅ ...
- ❌ ...
- 💡 ...
- Top performers afgelopen 90d: [lijst]
- Underperformers (zombies): [lijst]

### 6. Audiences
- ✅ ...
- ❌ ...
- 💡 ...

### 7. Catalog & Commerce (e-com)
- ✅ ...
- ❌ ...
- 💡 ...

### 8. Bidding & Budget
- ✅ ...
- ❌ ...
- 💡 ...

### 9. Beleid & Compliance
- ✅ ...
- ❌ ...
- 💡 ...

### 10. Cross-channel & Incrementaliteit
- ✅ ...
- ❌ ...
- 💡 ...

---

## Prioriteitsmatrix (Impact × Effort)

| Prio | Impact | Effort | Item | Verantwoordelijke | Deadline |
|---|---|---|---|---|---|
| **P1 — week 1** | Hoog | Laag | [...] | MP / klant-dev | YYYY-MM-DD |
| P1 | Hoog | Laag | [...] | | |
| P1 | Hoog | Laag | [...] | | |
| **P2 — maand 1** | Hoog | Middel | [...] | | |
| P2 | Hoog | Middel | [...] | | |
| **P3 — kwartaal** | Middel | Hoog | [...] | | |
| **P4 — nice-to-have** | Laag | - | [...] | | |

---

## Aanbevolen next steps

**Komende 7 dagen**:
1. ...
2. ...
3. ...

**Komende 30 dagen**:
- ...

**Komende 90 dagen**:
- ...

---

## Methodologie

- 90 dagen data uit Meta Ads Manager via `meta_tool action=ad_insights`
- Events Manager review (EMQ, coverage, dedup)
- Catalog Diagnostics check
- Concurrent-snapshot uit Meta Ad Library
- 80+ punt checklist (zie `meta-ads-audit` skill)

## Bijlagen

- Detail-data export per ad-set (link)
- Tracking-flow diagram
- Creative-portfolio overzicht
- Concurrent-creatives screenshot
