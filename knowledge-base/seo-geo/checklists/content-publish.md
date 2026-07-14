# Content Publicatie — Pre-flight Checklist

Elke content-publicatie (blog, landingspage, category, product-detail) moet hier doorheen.

## Voor publicatie

### Zoekintent & keyword
- [ ] Primary keyword gekozen + geverifieerd (DFS volume + intent)
- [ ] Secundaire keywords / semantische variants gebruikt
- [ ] Zoekintent matcht met content-type (info/commercial/transactional)
- [ ] SERP-vergelijk: top-10 gekeken voor format-expectations

### Structuur
- [ ] H1: 1× per page, primary keyword natural
- [ ] H-hiërarchie logisch (H1 → H2 → H3)
- [ ] H2's weerspiegelen zoekintentie / PAA-vragen
- [ ] TL;DR-block bovenaan (3-5 bullets) indien informational
- [ ] Duidelijke CTA(s)
- [ ] FAQ-sectie indien relevant

### On-page SEO
- [ ] Title: ≤60 tekens, primary keyword, brand-appendix
- [ ] Meta description: ≤160 tekens, unique, CTA
- [ ] Slug/URL: kort, semantisch, primary keyword
- [ ] H1 niet identiek aan title maar semantisch consistent
- [ ] Primary keyword in eerste 100 woorden
- [ ] Interne links: 3-8 descriptive anchors
- [ ] Outbound links: 1-3 naar authority-bronnen

### Media
- [ ] Featured image (hero) specific voor content (geen generieke stock)
- [ ] Alt-text op alle images: beschrijvend, niet stuffed
- [ ] Image dimensies (width/height) ingesteld
- [ ] WebP/AVIF format
- [ ] File-naming semantic (niet `IMG_1234.jpg`)
- [ ] Originele visuals / diagrams waar mogelijk (GEO-plus)

### E-E-A-T
- [ ] Auteur ingevuld + gelinkt aan bio
- [ ] Author-schema met knowsAbout/expertise
- [ ] `datePublished` + `dateModified` correct
- [ ] Bronnen vermeld (als claim cijfer/feit bevat)
- [ ] First-hand experience / case / data waar mogelijk

### Schema
- [ ] Juiste schema-type (Article / Product / HowTo / FAQPage / etc)
- [ ] Required fields ingevuld
- [ ] `publisher` link naar Organization entity
- [ ] Schema-validator geen errors (validator.schema.org)
- [ ] Rich Results Test check (search.google.com/test/rich-results)

### GEO-layer (citation-worthy)
- [ ] Statement-first opening (key-claim in eerste paragraph)
- [ ] Ten minste 1 datapoint met bron
- [ ] Quote/verwijzing naar authority
- [ ] Machine-parsable structuur (lijsten, tabellen waar relevant)
- [ ] Entity-links (brand, concepts, people gelinkt)

### Technisch
- [ ] Mobile-responsive (check op mobile device)
- [ ] CWV: LCP check (hero-image preload)
- [ ] Geen render-blocking scripts in head
- [ ] Canonical self-referencing
- [ ] Indexerbaar (geen noindex)
- [ ] Robots: allow

### Cross-check
- [ ] Niet duplicate met bestaande pagina (cannibalisation check)
- [ ] Past in hub/cluster-structuur
- [ ] Interne links VAN relevante hub/cluster pagina's naar deze nieuwe content
- [ ] Social share previews (OG-image + OG-description)

## Na publicatie (dag 0 + dag 7)

### Dag 0 (binnen 1 uur)
- [ ] URL submit via GSC URL Inspection → "Request indexing"
- [ ] Sitemap update (of wacht automatische regeneratie)
- [ ] Internal link-audit: linkt correcte pagina's naar nieuwe content?
- [ ] Social share (LinkedIn, Twitter, brand-kanalen)
- [ ] Email-nieuwsbrief includeren (indien hub-content)

### Dag 7
- [ ] Indexatie-check in GSC (URL Inspection)
- [ ] Geen schema-errors in GSC Enhancements
- [ ] Impressies starten (GSC Performance)
- [ ] Eerste ranking-check (positie voor primary keyword)

### Dag 30
- [ ] Performance-review: impressies, kliks, positie
- [ ] Zoekquery's waarop de pagina binnenkomt: match intent?
- [ ] CTR optimalisaties indien nodig (titel/meta)
- [ ] Content refinement op basis van GSC-data

### Dag 90
- [ ] Ranking-positie stabiel?
- [ ] Conversie-contributie zichtbaar?
- [ ] Citation-check in LLMs (voor key-content)
- [ ] Update-planning (evergreen vs news)

## Quality gate (voor go-live)

Stop de publicatie als:
- ❌ Geen unieke perspective vs SERP top-10
- ❌ AI-generated zonder human edit
- ❌ Schema validator errors
- ❌ Mobile CWV slecht
- ❌ Cannibalisatie met bestaande ranking-pagina

## Tool-flow

1. Keyword + intent → DFS Keywords / GSC
2. Outline → Surfer Content Editor of eigen framework
3. Schrijven → human + (optioneel AI-draft + revisie)
4. Schema → Merkle schema generator of custom JSON-LD
5. Publicatie → CMS
6. Validatie → Rich Results Test + GSC URL Inspection
7. Promotie → Social, email, interne links
8. Monitor → GSC (dagen) + GA4 (weken) + LLM-check (dagen 30+)
