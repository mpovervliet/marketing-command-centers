# GEO Visibility Dashboard — [Klantnaam]

Template voor maandelijkse tracking van LLM-zichtbaarheid.

**Laatst bijgewerkt**: [YYYY-MM-DD]
**Tracking-cadans**: Maandelijks (1e werkdag)
**Eigenaar**: [consultant]

---

## 1. Test-prompt-set (20-40 prompts)

Groepeer per intent:

### Brand-aware prompts
Doel: zien of brand genoemd wordt bij algemene vragen in de niche.

| # | Prompt |
|---|---|
| 1 | Wat zijn de beste [productcategorie] in Nederland? |
| 2 | Waar kan ik het beste [dienst] kopen/afnemen in [stad]? |
| 3 | Welke aanbieders van [product] zijn toonaangevend? |
| 4 | Wie is een specialist in [niche]? |
| 5 | Vergelijk aanbieders van [product] in Nederland |
| 6 | Hoe kies ik een goede [product]? |
| 7 | Wat zijn betrouwbare [adjective]-aanbieders van [product]? |
| 8 | Welke merken domineren de markt van [niche]? |
| ... | ... |

### Brand-specific prompts
Doel: zien hoe brand genoemd wordt wanneer direct bevraagd.

| # | Prompt |
|---|---|
| 1 | Wat is [brand]? |
| 2 | Hoe goed is [brand]? |
| 3 | Wat zijn de reviews over [brand]? |
| 4 | Is [brand] een goede keus voor [doelgroep]? |
| 5 | Wat zijn alternatieven voor [brand]? |
| ... | ... |

### Competitor-comparison prompts
Doel: zien hoe brand naast concurrenten presteert.

| # | Prompt |
|---|---|
| 1 | Vergelijk [brand] met [concurrent 1] |
| 2 | [brand] vs [concurrent 2] — wat is beter? |
| 3 | Welke van deze is beter: [brand], [concurrent 1], [concurrent 2]? |
| ... | ... |

### Information prompts (niet-commerciëel)
Doel: zien of brand opduikt in educatieve content over het onderwerp.

| # | Prompt |
|---|---|
| 1 | Hoe werkt [proces / concept dat brand begrijpt]? |
| 2 | Wat zijn de trends in [niche] 2026? |
| ... | ... |

---

## 2. Test-matrix

Voor elke prompt × elke engine noteren:

| Kolom | Waarde |
|---|---|
| Prompt nummer | [1-40] |
| Engine | ChatGPT / Perplexity / Gemini / AI Overviews / Claude / Copilot |
| Datum test | YYYY-MM-DD |
| Brand genoemd? | Ja / Nee |
| Sentiment | Positief / Neutraal / Negatief |
| Link naar brand-site? | Ja / Nee / URL |
| Rank in antwoord (indien lijst) | 1e / 2e / 3e / ... |
| Concurrenten genoemd | [Lijst namen] |
| Opvallende framing | [Context-notitie] |

Ideaal in spreadsheet (Google Sheets / Looker).

---

## 3. Maandelijkse samenvattende tabel

### Share-of-voice per engine

| Engine | Deze maand | Vorige mnd | Δ MoM | 3 mnd geleden | Δ QoQ |
|---|---|---|---|---|---|
| ChatGPT | [x]% | [y]% | [Δ] | [z]% | [Δ] |
| Perplexity | [x]% | [y]% | [Δ] | [z]% | [Δ] |
| Google AI Overviews | [x]% | [y]% | [Δ] | [z]% | [Δ] |
| Gemini | [x]% | [y]% | [Δ] | [z]% | [Δ] |
| Claude | [x]% | [y]% | [Δ] | [z]% | [Δ] |
| Microsoft Copilot | [x]% | [y]% | [Δ] | [z]% | [Δ] |

### Sentiment-distributie (deze maand)

| Engine | Positief | Neutraal | Negatief |
|---|---|---|---|
| ChatGPT | [x]% | [y]% | [z]% |
| ... | | | |

### Citation-link-ratio

| Engine | Vermeld mét link | Vermeld zonder link |
|---|---|---|
| ChatGPT | [x]% | [y]% |
| ... | | |

---

## 4. Competitor-benchmark

### Share-of-voice vs top-3 concurrenten (alle engines gemiddeld)

| Merk | Deze maand | Δ MoM |
|---|---|---|
| [Klant-brand] | [x]% | [Δ] |
| [Concurrent 1] | [x]% | [Δ] |
| [Concurrent 2] | [x]% | [Δ] |
| [Concurrent 3] | [x]% | [Δ] |

### Waar winnen/verliezen we

- **Sterkste**: [Engine/prompt-cluster waar we domineren]
- **Zwakste**: [Waar concurrentie sterker genoemd wordt]
- **Snelgroeiend**: [Waar we zichtbare verbetering hebben]
- **Aandachtspunt**: [Waar we verliezen MoM]

---

## 5. Narrative-analyse

### Welke kernboodschappen komen naar voren?

Wanneer brand wordt genoemd, welke context-woorden komen vaak mee?

- [Keyword 1] (genoemd in X% van positive mentions)
- [Keyword 2]
- [Keyword 3]

### Welke beelden/eigenschappen worden toegeschreven?

- [Eigenschap 1: bv. "voordelig", "specialistisch"]
- [Eigenschap 2]

### Mismatches tussen brand-positionering en LLM-narratief

| Onze positionering | Hoe LLMs ons framen | Gap? |
|---|---|---|
| [Wat we willen zijn] | [Wat LLMs zeggen] | [Ja/Nee + uitleg] |

---

## 6. Actie-plan volgend maand

Op basis van de trends:

| Observatie | Actie | Owner | Deadline |
|---|---|---|---|
| [Observatie 1] | [Actie] | [...] | [...] |
| ... | | | |

---

## 7. AI-referrer traffic (GA4)

Filter op bekende AI-bronnen in GA4 > Acquisition > Traffic acquisition > Source/Medium:

| Bron | Sessies | Conversies | MoM Δ |
|---|---|---|---|
| chatgpt.com | [x] | [y] | [Δ] |
| perplexity.ai | [x] | [y] | [Δ] |
| gemini.google.com | [x] | [y] | [Δ] |
| claude.ai | [x] | [y] | [Δ] |
| Overig AI | [x] | [y] | [Δ] |

---

## 8. Tooling status

- [ ] Profound / Otterly / Peec / eigen scraper actief
- [ ] Alerts op brand-dalingen ingesteld
- [ ] Competitor-tracking actueel
- [ ] Prompt-set herzien (quartaal)

---

## 9. Bijlagen

- Spreadsheet met alle individuele test-resultaten
- Screenshots van opvallende LLM-antwoorden (bewijsvoering)
- Competitor-benchmarks historisch

---

*Dit dashboard is een momentopname. GEO is nog snel in evolutie. Verwacht prompt-set en engines elk kwartaal te herzien.*
