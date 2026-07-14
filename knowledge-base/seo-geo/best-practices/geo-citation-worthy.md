# GEO: Citation-Worthy Content — 2026 Playbook

## Wat is GEO?

Generative Engine Optimization. Zichtbaarheid in antwoordmachines (ChatGPT, Perplexity, Google AI Overviews, Gemini, Claude, Microsoft Copilot) waar het antwoord zelf de gebruiker-interactie is, niet een doorklik.

## Het Princeton-onderzoek (2024/2025)

Aggarwal et al. toonden in *"GEO: Generative Engine Optimization"* dat deze content-tactieken de citation-kans in LLM-antwoorden significant verhogen:

| Tactiek | Impact op citations |
|---|---|
| Quotation from authority | +30-40% |
| Statistics + specific numbers | +20-35% |
| Citing sources (outbound links) | +20-30% |
| Clear structure (H2/H3) | +15-25% |
| Fluency optimization (beter-schrijven) | +10-20% |
| Simple language | +10% |
| Authoritative tone | +10% |

**NIET bewezen effectief**: keyword stuffing, gebruik van unieke woorden zonder context, vage general statements.

## De 9 principes van citation-worthy content

### 1. Statement-first schrijven
Beantwoord de hoofdvraag in de eerste 100 woorden. Geen intro-fluff.

**Voor**: "Linkbuilding is een belangrijk onderdeel van SEO en er zijn vele manieren..."
**Na**: "Linkbuilding drijft 52% van de rankingsinvloed voor competitieve keywords. De drie meest effectieve tactieken in 2026 zijn digital PR (22%), data-driven content (18%) en gastartikelen (12%)."

### 2. Data > mening
Elke bewering die je wil laten citeren, ondersteun met: percentage / benchmark / aantal / jaar / studie.

### 3. Bron aanhalen
LLMs vertrouwen content die zelf vertrouwt. Outbound links naar primaire bronnen (niet naar SERP-competitors).

### 4. Machine-parsable structuur
- Duidelijke H2/H3 met semantische zoekintentie
- Lijsten (geordend én ongeordend) waar informatie sequentieel is
- Tabellen voor vergelijkingen
- Korte alinea's (max 4 zinnen)
- TL;DR-blokken waar nuttig

### 5. Author authority
- Author-schema met `name`, `url`, `sameAs` (LinkedIn), `jobTitle`, `knowsAbout`
- Auteurs-bio zichtbaar + linkbaar
- LinkedIn-profiel up-to-date

### 6. Recency signalering
- `datePublished` + `dateModified` in schema + zichtbaar in body
- "Last updated: [datum]" expliciet
- Content daadwerkelijk vernieuwd bij datum-refresh

### 7. Unieke invalshoek
- Eigen survey / data-analyse
- Case study met meetbare resultaten
- Expert-interview
- First-hand observatie / experiment

### 8. Structured data maximaliseren
Per content-type minimaal schema:
- Artikel: `Article` + author + publisher
- How-to: `HowTo` (als echt HowTo)
- FAQ: `FAQPage` (als echt FAQ)
- Product: `Product` + `Offer` + `AggregateRating`
- Review: `Review` met reviewer-authority

### 9. Entity-linking
Noem en beschrijf relevante entiteiten expliciet in je content (personen, merken, producten, concepten) en link ze naar eigen hub-pagina's of externe authority-bronnen (Wikipedia, official).

## Format-sjabloon voor citation-ready artikelen

```
# [Titel — primary keyword + waarde]

*Auteur: [Naam] | Expert in [domein] | Laatst bijgewerkt: [datum]*

## TL;DR
- [Statement 1 met datapoint]
- [Statement 2 met datapoint]
- [Key takeaway]

## Inleiding (max 150 wrd)
[Probleem / context / waarom dit artikel nu relevant]

## [H2 met primaire zoekintentie-vraag]
[Statement bovenaan de sectie]
[Data + bron + context]
[Praktijkvoorbeeld of screenshot]

## [H2 met secondary intent]
...

## Veelgestelde vragen
### Vraag 1
[Antwoord in 1-3 zinnen bovenaan]
[Eventueel uitwerking]

### Vraag 2
...

## Bronnen
- [Primary source 1]
- [Primary source 2]

## Over de auteur
[Naam + expertise + LinkedIn]
```

## GEO-boosters (quick wins voor bestaande content)

Voor top 10-30 organic content-stukken:
1. **TL;DR toevoegen** (3-5 bullets bovenaan)
2. **1 datapoint toevoegen** met outbound bron
3. **Auteur-info uitbreiden** (bio + LinkedIn)
4. **Last-updated refresh** (echte update, niet alleen datum)
5. **FAQ-sectie** onderaan met 3-5 PAA-vragen

Gem. impact: 15-40% citation-share increase binnen 90 dagen (branche-afhankelijk).

## Anti-patterns

- **Over-optimalisatie**: wanneer content "voelt" als geoptimaliseerd voor machines
- **Datapoints verzinnen**: LLMs worden steeds beter in fact-checking
- **AI-content zonder human-pass**: hallucinations + generieke tone
- **Alle artikelen zelfde format**: LLMs pikken patronen op — varieer structuur
- **Blokkeren van AI-crawlers als je wel geciteerd wil worden**: onzinnige strategie

## Monitoring

Zie `seo-geo-reporting` skill → Modus 5 (AI Visibility Rapport).

## Tools (2026)

- **Profound** (enterprise) — LLM-visibility tracking
- **Otterly** (mid-market) — citation-monitoring
- **Peec AI** — prompt-based brand-tracking
- **Evertune** — competitor GEO-benchmark
- **Ziptie** — custom-built LLM-monitoring
- **Apify-LLM-scrapers** — DIY via Claude-Web / ChatGPT / Perplexity

## Referenties

- [Aggarwal et al. (2024) — GEO: Generative Engine Optimization (Princeton)](https://arxiv.org/abs/2311.09735)
- Aleyda Solis — GEO-frameworks (learningseo.io)
- Kevin Indig — Growth Memo GEO-research
- Andrea Volpini / WordLift — semantic SEO + GEO
- Michael King — iPullRank GEO-writing
