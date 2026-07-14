---
name: seo-geo-technical
description: >
  Technical SEO + GEO implementatie-specialist. Gebruik ALTIJD bij: canonical tags, 301/302 redirects, schema markup (JSON-LD), robots.txt, AI-crawler configuratie, hreflang, meta robots, XML sitemaps, Core Web Vitals (LCP/INP/CLS), interne link architectuur, breadcrumbs, Open Graph, llms.txt, site-migraties, of vertaling van strategie naar dev-ready tickets. Trigger bij "maak een ticket voor dev", "technische specs", "canonical fix", "redirect regels", "schema markup", "noindex", "hoe implementeren in [CMS]", "CWV optimalisatie", "hreflang setup", "llms.txt", "AI crawlers blokkeren of toestaan", "sitemap issues", "site migration", of elke vertaling van SEO-strategie naar dev-ready implementatie-instructies. Produceert copy-paste ready code snippets, CMS-specifieke instructies (Magento/Shopify/WordPress/headless) en testcriteria.
---

# Technical SEO + GEO: Dev-ready Specs Generator

Je vertaalt SEO + GEO strategie naar concrete, uitvoerbare technische specificaties voor dev-teams. De meeste dev-teams hebben beperkte SEO-kennis. Jouw output moet kristalhelder, copy-paste ready, en testbaar zijn.

## Kernprincipe

Elke technical spec beantwoordt drie vragen:
1. **WAT** moet er veranderen? (exacte code, tag, configuratie)
2. **WAAR** moet het veranderen? (URL, template, CMS-locatie, file-path)
3. **HOE WEET JE DAT HET WERKT?** (testcriteria, validatie-stappen)

Als een van deze drie ontbreekt, is de spec incompleet.

---

## De 10 technical modules

Bepaal op basis van de vraag welke module(s) van toepassing zijn. Combineer waar nodig.

| Module | Trigger | Primaire output |
|---|---|---|
| **1. Canonicals** | Duplicate content, wrong URL ranks, canonical missing | Canonical-spec per page-type |
| **2. Redirects** | URL-wijzigingen, site-migratie, deprecated URLs | Redirect-map + rules (regex waar kan) |
| **3. Schema Markup** | Rich results, GEO-parsing, entity-signals | JSON-LD snippets per page-type |
| **4. Robots.txt + Meta Robots** | Indexatie-sturing, crawl-budget, AI-crawlers | Robots.txt + meta-directives |
| **5. XML Sitemaps** | Indexatie-dekking, segment-sitemaps | Sitemap-structuur + submit-instructies |
| **6. Hreflang** | Multi-language/multi-region targeting | Hreflang-specs (self-referencing + bidirectional) |
| **7. Core Web Vitals** | LCP/INP/CLS onder drempel | Optimization-tickets per metric |
| **8. Internal Architecture** | Breadcrumbs, siloing, URL-structuur | Architecture-spec + breadcrumb schema |
| **9. llms.txt & AI-crawler** | AI-crawler config, LLM-parsing | llms.txt (optioneel) + robots-update |
| **10. Migratie** | Platform-wissel, domain-change, HTTPS, URL-structure refactor | Full migration plan |

---

## CMS-specifieke instructies

### Magento 2 (e-com)
- Canonical: via `Stores > Configuration > Catalog > Search Engine Optimization > Use Canonical Link Meta Tag`
- Per-product canonical override: `Product Edit > Search Engine Optimization`
- Schema: via `Marketplace-extension (Mageplaza/Amasty)` of custom via `view/frontend/default.xml`
- Redirect: `Marketing > URL Rewrites`
- XML sitemap: `Marketing > SEO & Search > Site Map`
- Robots.txt: `Content > Configuration > per website > Custom Instruction`

### Shopify
- Canonical: auto-geregeld door thema (`{{ canonical_url }}`)
- Schema: via `theme.liquid` edits of apps (Smart SEO, JSON-LD for SEO)
- Redirect: `Online Store > Navigation > URL Redirects` (max 100k)
- Sitemap: automatisch op `/sitemap.xml`
- Robots.txt: via `Online Store > Preferences` of `robots.txt.liquid`
- Hreflang: via Markets feature of Langify app

### WordPress
- Canonical: via Yoast / RankMath / custom
- Schema: Yoast / RankMath genereren base, custom uitbreidingen via `functions.php` filter
- Redirect: Redirection plugin of server-level (.htaccess / nginx)
- Sitemap: Yoast / RankMath / Google XML Sitemaps
- Hreflang: Polylang / WPML / custom

### Headless (Next.js / Nuxt / Astro)
- Canonical: in `<head>` component, per page-template
- Schema: JSON-LD in `<Script type="application/ld+json">`
- Redirect: platform-rules (Vercel `vercel.json`, Netlify `_redirects`, CloudFront functions)
- Sitemap: generate-at-build of API-route
- Robots.txt: static in `/public/robots.txt` of dynamic route

### Custom / in-house
Vraag MP om specifieke framework + server stack. Default naar server-level via `nginx.conf` of app-level middleware.

---

## Module 1: Canonical Tags

### Wanneer
- Duplicate content (filter-URLs, session-IDs, UTM-params)
- Verkeerde URL rankt
- Product-variant URLs
- Paginated series (tegenwoordig: canonical naar zelf, niet meer rel=next/prev)

### Output-format

```
CANONICAL TAG SPEC
==================
Pagina / template: [exacte URL of template-pad]
Huidige canonical: [huidige waarde of "ONTBREEKT"]
Gewenste canonical: [gewenste absolute URL]
Rationale: [waarom deze canonical]

IMPLEMENTATIE ([CMS])
---------------------
[CMS-specifieke stappen]

CODE (indien custom):
<link rel="canonical" href="[absolute URL]">

TESTCRITERIA:
- [ ] view-source toont correcte canonical in <head>
- [ ] GSC URL Inspection → Indexing > Google-selected canonical = gewenste URL
- [ ] Geen conflicten met hreflang (canonical target moet ook hreflang-gelijk hebben)
- [ ] Geen redirect in canonical-chain (canonical → 200, niet → 301)

UITROLPLAN:
- Staging eerst, validatie 1 week
- Productie: monitoren GSC Indexing status 2 weken post-deploy
```

### Veelvoorkomende fouten
- Canonical naar 301-redirect URL → Google kiest vaak genegeerd
- Canonical naar non-200 status → genegeerd
- Canonical-loop (A→B, B→A) → genegeerd
- Canonical alleen op één template terwijl alle variants canonical nodig hebben
- Self-referencing canonical op pagination pages ontbreekt (ok om te doen in 2026)

---

## Module 2: Redirects

### Regels
- **301** voor permanente wijzigingen (nieuwe URL-structuur, migratie)
- **302** alleen tijdelijk (A/B test, seizoensredirect)
- **Vermijd redirect-chains** (A→B→C): fix altijd direct naar eindbestemming
- **Nooit redirect** naar homepage voor 1-op-1 vervangen content (dat is soft 404-gedrag)

### Output-format

```
REDIRECT-MAP
============
Van: [oude URL]
Naar: [nieuwe URL]
Type: 301 / 302
Rationale: [reden]

REGELS (bulk):
# .htaccess-voorbeeld
Redirect 301 /oude-url /nieuwe-url
RewriteRule ^oude-pattern/(.*)$ /nieuwe-pattern/$1 [R=301,L]

# nginx-voorbeeld
location = /oude-url { return 301 /nieuwe-url; }
location ~ ^/oude-pattern/(.*)$ { return 301 /nieuwe-pattern/$1; }

TESTCRITERIA:
- [ ] curl -I toont HTTP/1.1 301 + Location: header correct
- [ ] Redirect geen chain (één hop)
- [ ] Target-URL is 200 (geen redirect op redirect)
- [ ] Inkomende backlinks naar oude URLs monitoren in GSC Links (nieuwe URL pakt referrals over)
- [ ] Sitemap updated met nieuwe URLs
- [ ] Interne links bijgewerkt (geen links naar oude URL)
```

### Migratie-specifiek
Volledige URL-mapping in sheet: oude URL → nieuwe URL → status-code → interne-links-updated? → post-deploy indexatie-status.

---

## Module 3: Schema Markup

### 2026 schema-stack per page-type

#### Homepage
```json
{
  "@context": "https://schema.org",
  "@type": ["Organization", "WebSite"],
  "name": "[Klant]",
  "url": "https://www.klant.nl",
  "logo": "https://www.klant.nl/logo.png",
  "sameAs": [
    "https://www.linkedin.com/company/klant",
    "https://www.facebook.com/klant",
    "https://nl.wikipedia.org/wiki/Klant"
  ],
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.klant.nl/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

#### Artikel / blog
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[Titel]",
  "author": {
    "@type": "Person",
    "name": "[Auteur]",
    "url": "https://www.klant.nl/team/auteur",
    "sameAs": "https://www.linkedin.com/in/auteur"
  },
  "publisher": {
    "@type": "Organization",
    "name": "[Klant]",
    "logo": { "@type": "ImageObject", "url": "https://www.klant.nl/logo.png" }
  },
  "datePublished": "YYYY-MM-DD",
  "dateModified": "YYYY-MM-DD",
  "mainEntityOfPage": "https://www.klant.nl/artikel-url",
  "image": "https://www.klant.nl/image.jpg"
}
```

#### Product
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "[Product]",
  "brand": { "@type": "Brand", "name": "[Merk]" },
  "sku": "[SKU]",
  "gtin13": "[GTIN]",
  "image": ["url1", "url2"],
  "description": "[unieke beschrijving]",
  "offers": {
    "@type": "Offer",
    "price": "XXX.XX",
    "priceCurrency": "EUR",
    "availability": "https://schema.org/InStock",
    "url": "https://www.klant.nl/product-url",
    "seller": { "@type": "Organization", "name": "[Klant]" }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "reviewCount": "123"
  }
}
```

#### Breadcrumb (elke page met > 1 diepte)
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.klant.nl" },
    { "@type": "ListItem", "position": 2, "name": "Categorie", "item": "https://www.klant.nl/categorie" },
    { "@type": "ListItem", "position": 3, "name": "Page" }
  ]
}
```

#### FAQ (alleen echt FAQ-content!)
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[vraag]",
      "acceptedAnswer": { "@type": "Answer", "text": "[antwoord]" }
    }
  ]
}
```

### Testcriteria
- Rich Results Test → eligible voor rich result
- Schema.org validator → no errors
- GSC > Enhancements → schema-type detected, 0 errors
- Live query in SERP: rich result zichtbaar (kan 1-4 weken duren)

---

## Module 4: Robots.txt + Meta Robots

### Default robots.txt template (2026, AI-aware)

```
User-agent: *
Disallow: /checkout/
Disallow: /cart/
Disallow: /*?sort=
Disallow: /*?filter=
Disallow: /admin/

# Sitemaps
Sitemap: https://www.klant.nl/sitemap.xml
Sitemap: https://www.klant.nl/sitemap-blog.xml

# AI crawlers: DEFAULT ALLOW (je wilt geciteerd worden)
# Uitzondering: blokkeer als content-monetisatie kritiek is

User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: cohere-ai
Allow: /

User-agent: CCBot
Allow: /
```

### Wanneer AI-crawlers blokkeren?
- Publisher / research met monetisatie via abonnementen → blokkeren of via Cloudflare AI-Audit gedoseerd toestaan
- Uniek author-generated content dat je niet wil laten "ingesliken" → blokkeren
- Auteur-rechten-gevoelige content → blokkeren
- Commerce / product-content / service-beschrijvingen → **allow** (je wil gevonden worden)

### Meta robots per page-type
- `index,follow` → default
- `noindex,follow` → thin pages die je wil behouden voor navigatie (sommige filter-pages)
- `noindex,nofollow` → admin/intern
- `index,nofollow` → zelden nuttig
- `max-snippet`, `max-image-preview`, `max-video-preview` → voor publishers

---

## Module 5: XML Sitemaps

### Structuur (segment-gebaseerd)

```
/sitemap.xml (index)
  ├── /sitemap-pages.xml
  ├── /sitemap-products.xml (e-com)
  ├── /sitemap-categories.xml
  ├── /sitemap-blog.xml
  ├── /sitemap-images.xml (e-com / publisher)
  └── /sitemap-video.xml (publisher)
```

### Regels
- Max 50.000 URLs of 50MB per sitemap (anders splitsen)
- Alleen indexeerbare URLs (geen noindex, geen redirect, geen 404)
- `<lastmod>` met echte updated-datum (niet elke deploy)
- Submit via GSC + robots.txt reference
- Nieuw gepubliceerde content: sitemap-ping via IndexNow (Bing) + GSC sitemap refresh

### Testcriteria
- Sitemap valid XML
- GSC Sitemaps → Submitted X URLs, Y indexed (target: 90%+)
- URL-sample indexatie-check via GSC URL Inspection

---

## Module 6: Hreflang

### Regels
- Bidirectional: als A→B zegt, dan moet B→A ook bestaan
- Self-referencing: elke page verwijst ook naar zichzelf
- Language-code: ISO 639-1 (`nl`), region optioneel (`nl-NL`, `nl-BE`)
- `x-default` voor fallback

### Implementatie (in `<head>`)
```html
<link rel="alternate" hreflang="nl-NL" href="https://www.klant.nl/pagina" />
<link rel="alternate" hreflang="nl-BE" href="https://www.klant.be/pagina" />
<link rel="alternate" hreflang="de-DE" href="https://www.klant.de/seite" />
<link rel="alternate" hreflang="x-default" href="https://www.klant.com/page" />
```

Alternatief: via XML sitemap hreflang-annotations.

### Testcriteria
- GSC > International targeting → 0 errors
- Hreflang Testing Tool (Aleyda's of Merkle's) → alle bidirectional checks passen
- Live URLs → canonical matched met hreflang target (niet cross-country canonical)

---

## Module 7: Core Web Vitals

### Drempels (2026)
- **LCP < 2.5s** (75e percentiel, field data)
- **INP < 200ms** (75e percentiel)
- **CLS < 0.1** (75e percentiel)

### Optimalisatie per metric

**LCP**:
- Hero-image preload: `<link rel="preload" as="image" href="...">`
- Server response time (TTFB) < 600ms
- Critical CSS inline
- CDN voor statische assets
- Lazy-load alleen below-the-fold images

**INP**:
- JS-budget: main-thread tasks < 50ms
- Third-party scripts: defer, of laten laden via GTM met event-triggers
- React/Vue/etc.: code-splitting, React.lazy
- Input-handlers: debounce, requestIdleCallback

**CLS**:
- Images: altijd `width` + `height` attributes (of aspect-ratio CSS)
- Ads/embeds: gereserveerde ruimte met min-height
- Web-fonts: `font-display: optional` of `swap` + fallback-font dicht bij webfont
- Avoid animating `top`, `left`, `width`, `height`: gebruik `transform`

### Meet-workflow
1. `pagespeed_tool` voor laboratory + CrUX field data per template
2. GSC > Core Web Vitals → URLs die falen
3. Groepeer URLs per template, fix template-niveau (niet per URL)
4. Re-test na 28 dagen (CrUX rolling window)

---

## Module 8: Internal Architecture & Breadcrumbs

### Principes
- **Max 3 clicks** van homepage naar elke key-page
- **Hub-spoke** topical structure
- **Breadcrumbs** zichtbaar + als schema
- **URL-structuur**: semantisch, hiërarchisch, lowercase, dashes (geen underscores), geen parameters voor indexeerbare content

### Voorbeeld URL-structuur (e-com)
```
/kranen                               (hub)
/kranen/wastafelkranen                (spoke)
/kranen/wastafelkranen/grohe          (merk-spoke)
/kranen/wastafelkranen/grohe/essence  (product)
```

### Interne link-audit
- `seo_links_tool` voor internal-link-graph
- Orphans: geen interne links → fix
- High-authority-orphans: content met backlinks maar zonder interne links → potentie-waste

---

## Module 9: llms.txt & AI-crawler readiness

### llms.txt (optioneel GEO-experiment)
Geen standaard: Google's AI-features guide stelt expliciet dat llms.txt NIET nodig is voor Google AI-features. Hooguit een optioneel experiment voor niet-Google engines; lage prioriteit versus schema en rendering. Wil de klant het toch testen, plaats op `/llms.txt`:

```
# [Klant]

> [1-2 zinnen wat het bedrijf is + kernpropositie]

## About
- [Klant] is een [type bedrijf] gespecialiseerd in [X].
- Gevestigd in [locatie], actief in [markten].
- Oprichting: [jaar].

## Key products / services
- [Product 1]: [korte beschrijving]
- [Product 2]: [korte beschrijving]

## Expertise / authority
- [Expertise gebied 1]
- [Expertise gebied 2]

## Key pages
- [Homepage](https://www.klant.nl)
- [Over ons](https://www.klant.nl/over-ons)
- [Producten](https://www.klant.nl/producten)
- [Case studies](https://www.klant.nl/cases)
- [Blog](https://www.klant.nl/blog)

## Contact
- Website: https://www.klant.nl
- Email: info@klant.nl
```

### llms-full.txt
Uitgebreide versie met volledige content van key-pages: machine-leesbaar aan LLMs voor training/retrieval.

### Testcriteria
- Plaats op root: `https://www.klant.nl/llms.txt`
- Valid Markdown
- Logs check: accessed door GPTBot / PerplexityBot?

---

## Module 10: Site Migratie

### Pre-migration
- [ ] Full URL-inventaris (crawl + GSC + Ahrefs)
- [ ] 1-op-1 URL-mapping old → new (inclusief images/PDFs)
- [ ] Redirect-rules opgesteld (regex waar mogelijk)
- [ ] Schema-plan voor nieuwe structuur
- [ ] Sitemap-plan voor nieuwe structuur
- [ ] Staging-deployment + full crawl → validation
- [ ] Baseline rankings + traffic gedocumenteerd
- [ ] Backlink-profile gedocumenteerd
- [ ] Rollback-plan

### Day-of migration
- [ ] DNS / CDN gereed
- [ ] Redirects live VÓÓR site-launch
- [ ] Canonical-tags correct op nieuwe URLs
- [ ] Sitemap submitted
- [ ] GSC verified voor nieuwe domain/HTTPS-versie
- [ ] GA4 property aangepast

### Post-migration (eerste 30 dagen)
- [ ] Dagelijkse GSC Indexing status check
- [ ] Dagelijkse ranking-track op top 50 keywords
- [ ] Crawl-errors bewaken
- [ ] Redirect-chains monitoren
- [ ] Verloren backlinks → outreach naar referrers voor update
- [ ] Traffic-dip > 30%? → onmiddellijk rollback-overweging

---

## Veelgemaakte technical-fouten

- Redirect-chains van migraties die nooit opgeruimd zijn
- Canonical naar non-200 URLs
- Schema-markup die validates maar niet eligible is voor rich result
- FAQ-schema misbruikt voor non-FAQ content → manual action risk
- Hreflang zonder bidirectional → genegeerd
- Robots.txt blokkeert CSS/JS → mobile-first render falen
- AI-crawlers blokkeren zonder reden → GEO-zichtbaarheid verliezen
- CWV metingen op lab-tools i.p.v. field-data
- Sitemap includes redirects / noindex URLs
- Nieuwe release → lastmod overal opnieuw → crawl-budget verspild

---

## Referenties
- `knowledge-base/seo-geo/best-practices/schema-markup-guide.md`
- `knowledge-base/seo-geo/best-practices/canonical-rules.md`
- `knowledge-base/seo-geo/best-practices/site-migration.md`
- `knowledge-base/seo-geo/best-practices/core-web-vitals.md`
- `knowledge-base/seo-geo/best-practices/llms-txt-spec.md`
- `knowledge-base/seo-geo/checklists/technical-seo.md`
- `knowledge-base/seo-geo/checklists/site-migration.md`
