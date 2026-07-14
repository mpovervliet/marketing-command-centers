# Interne Linking — Architectuur & Tactiek

## Waarom interne links cruciaal zijn

1. **PageRank-flow**: intern gelinkte pagina's krijgen autoriteit-doorgifte
2. **Crawlability**: zonder interne link is pagina alleen via sitemap bereikbaar
3. **Topic-clustering**: semantische verbindingen maken entiteiten expliciet
4. **User journey**: interne links begeleiden conversie-paden
5. **Click-depth**: pagina's dieper dan 4 clicks worden minder gecrawld

## Hub-and-spoke model (pillar/cluster)

```
Pillar (hub) ─────── Cluster-page 1
   │       ↖     ↗
   │        ✕
   │       ↙     ↘
   ├─────────── Cluster-page 2
   │
   └─────────── Cluster-page 3
```

- **Pillar**: brede term (zoekvolume-hoog, informational), lange diepgang
- **Cluster**: specifieke sub-topics, linken ALLEMAAL naar pillar
- **Pillar** linkt terug naar ALLE clusters
- **Cluster-onderling**: horizontaal linken waar relevant (niet forceren)

## Anchor text strategie

### Wel
- **Descriptive, semantisch**: "Google's Search Quality Rater Guidelines"
- **Variatie**: niet altijd exact match — gebruik synoniemen, entities
- **Context-toevoegingen**: zin eromheen geeft extra context aan Google

### Niet
- Generieke anchors ("klik hier", "lees meer") voor SEO-waardevolle links
- Exacte-match anchor 100% van de tijd (manipulatie-signaal)
- Keyword stuffing in anchors (alle links naar `/broeken-heren` met anchor "broeken heren")

## Prioriteit-regels voor e-commerce

### Category > Product
Productpagina's zijn deep (click-depth 3-5). Zorg dat:
- Elke product-URL interne link krijgt vanuit parent-category
- Product-detail linkt naar vergelijkbare producten (cross-sell) — semantisch relevant
- Product linkt terug naar category (breadcrumb telt)

### Facet / filter pages
Alleen interne links naar filter-pages als die filter een **aparte SEO-pagina** is (met volume + unieke intent). Anders: geen volgbare interne link.

### Blog > Commercial
Blog-content die informationele intent bedient, linkt naar commerciële pagina's met descriptive anchors:
- "Zie ons assortiment [category]"
- "[Merk] modellen bekijken"
Niet meer dan 2-3 commerciële links per 1000 woorden (anders voelt het spammy).

## Navigatie vs contextual

- **Navigatie-links** (header/footer/menu): consistent op elke pagina — Google discount voor "boilerplate"
- **Contextual links** (binnen content): hoger gewogen — bouw deze doelbewust

## Boost interne links voor "priority pages"

Per kwartaal: identificeer 10 pagina's die hoger moeten ranken. Voor elk:

1. Gebruik `site:jouw-site.nl "relevante-term"` → kandidaat-pagina's die term noemen
2. Voeg op die kandidaat-pagina's een contextuele link met descriptive anchor naar de priority page
3. Minimaal 5 extra interne links per priority page in 4 weken
4. Wacht 30-60 dagen, meet ranking-shift

## Click-depth beheren

Regel: elke belangrijke pagina binnen 3 klikken van homepage.

- Diepe categoriestructuren opbreken (pagination > load-more)
- "Related content" blokken: 3-5 links naar pagina's op diepere diepte
- HTML-sitemap (niet alleen XML) voor extreme long-tail

## Link-graph visualisatie

Tools:
- Screaming Frog → Visualisations > Directory Tree / Force-Directed Diagram
- Sitebulb → Link Equity Flow
- Ahrefs Site Audit → Internal Pages > Internal Backlinks per URL

Zoek naar:
- Orphans (geen inbound interne link)
- Dead-ends (geen outbound interne link, traps)
- Pages with 1-2 inbound — kandidaat voor boost
- Pages with > 200 inbound — mogelijk overgelinkt, redistribute

## Orphans-lijst opschonen

1. Crawl vs sitemap vergelijken
2. Als pagina waardevol is → interne links toevoegen vanuit relevante context
3. Als pagina overbodig is → 301 naar best-match + noindex in tussentijd
4. Als pagina oud/legacy → soft 404 of 301 naar actuele versie

## Content-refresh als linking-gelegenheid

Bij elke update van een bestaand artikel:
1. Scan artikel voor termen die nu bestaande interne pagina's raken
2. Voeg 2-5 nieuwe interne links toe waar semantisch relevant
3. Update anchor-texts die oude/gemergde pagina's raken

## Linking voor GEO

LLMs leren entiteiten via link-context. Om je entiteit duidelijk te positioneren:
- Link naar eigen "Over ons" / brand-hub vanuit relevante content
- Link met brand-anchor in eerste 200 woorden van cluster-content
- Link naar expert-author-pagina's vanuit hun artikelen
- Externe links naar authority-bronnen (Wikipedia, official entities) — versterkt je eigen entity-identity

## Anti-patterns

- **Sidebar "Popular posts"** zonder rotatie → zelfde paar URLs krijgen alle interne link-equity
- **"Related posts" automatisch** zonder semantische kwaliteit → random links zonder topic-cluster
- **Footer met 100+ category-links** → dilutie, wordt gedeeltelijk gediscount
- **Nofollow interne links** → doe dit NIET (Google-guidance 2019: nofollow is hint, geen block)
- **Interne links naar redirected URLs** → chain, update altijd naar finale bestemming

## Metric: Internal PageRank

Via Screaming Frog: Internal PageRank kolom. Verdeling:
- Top 10% pagina's: hoogste IPR (homepage, core categories)
- Bottom 10%: orphans of bijna-orphans

Doel: zorg dat top-business-value pagina's ook top-IPR hebben.

## Referenties

- [Google Search Central — Nofollow](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links)
- Kevin Indig — Internal Linking & TIPR-model
- Cyrus Shepard — internal linking analyses (Zyppy)
- Patrick Stox — Ahrefs internal linking study
