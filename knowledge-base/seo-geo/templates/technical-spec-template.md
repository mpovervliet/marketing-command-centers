# Technische Specificatie — [Klant] — [Ticket-naam]

**Ticket-ID**: [Monday/Jira-reference]
**Prioriteit**: P0 / P1 / P2 / P3
**Geschatte effort**: [x uur / dagen]
**Indiener**: Maarten Pieter Overvliet
**Datum**: [YYYY-MM-DD]

---

## 1. Wat + Waarom

### Wat
[1-2 zinnen concrete beschrijving van de verandering]

### Waarom (SEO/GEO rationale)
[1-2 zinnen over welke zoek/LLM-impact dit heeft]

### Verwachte impact
- [Metric 1]: +[x]%
- [Metric 2]: [qualitatief effect]

---

## 2. Scope

### In scope
- [...]
- [...]

### Out of scope (expliciet)
- [...]

### Affected page-types / templates
- [Template 1]
- [Template 2]

---

## 3. Acceptatiecriteria

- [ ] [Exact meetbare criterium 1]
- [ ] [Criterium 2]
- [ ] [Criterium 3]

---

## 4. Implementatie-instructies (per platform)

### Als [Magento / Shopify / WordPress / Next.js / headless]

[Stap-voor-stap, copy-paste-ready]

### Code voorbeeld

```[taal]
// Relevant code snippet
```

### Configuratie-wijzigingen

- Bestand: [pad]
- Wijziging: [...]

### Database-wijzigingen (indien van toepassing)

- Tabel: [...]
- Kolom: [...]

---

## 5. Testing

### Functionele tests
- [ ] [Test 1: wat moet werken]
- [ ] [Test 2]

### SEO-validatie
- [ ] curl / browser check: [expected output]
- [ ] Rich Results Test: no errors
- [ ] Schema validator: pass
- [ ] URL Inspection in GSC: canonical/index goed

### Regression-tests
- [ ] Geen 404's op gerelateerde URLs
- [ ] CWV niet geregresseerd
- [ ] Analytics events nog actief

---

## 6. Rollback-plan

Als iets fout gaat, rollback via:
1. [Stap 1]
2. [Stap 2]

Rollback-criteria: [Wanneer trekken we de plug — bv. "ranking-drop > 20% op primary-kw's binnen 48u"]

---

## 7. Monitoring post-release

Eerste 48 uur:
- [ ] [Check 1]
- [ ] [Check 2]

Na 1 week:
- [ ] [Check]

Na 4 weken:
- [ ] [Final validation check]

---

## 8. Referenties

- [Best practice doc]
- [Relevante externe bron]

---

## 9. Q&A / Dev-notities

[Dev-team vult hier aan met vragen of implementatie-keuzes]
