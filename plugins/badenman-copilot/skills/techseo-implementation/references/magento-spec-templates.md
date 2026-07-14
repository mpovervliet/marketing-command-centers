# Magento spec-templates en naslag: techseo-implementation

Naslagbestand bij skills-source/techseo-implementation/SKILL.md. Bevat de volledige, copy-paste ready spec-templates per module, de schema-voorbeelden, het ticket-template en de Magento-configuratietabel. De beslislaag (module-keuze, prioritering, drempels, verificatie) staat in SKILL.md; lees dit bestand wanneer je een spec of ticket daadwerkelijk uitschrijft.

## Module 1: Canonical Tags

**Output format:**

```
CANONICAL TAG SPEC
==================
Pagina: [exacte URL]
Huidige canonical: [huidige waarde of "ONTBREEKT"]
Gewenste canonical: [gewenste waarde]

Implementatie (Magento):
- Ga naar Catalog > Categories/Products > [pagina]
- Veld "Canonical URL" instellen op: [waarde]
- OF: voeg toe aan <head> sectie van template:
  <link rel="canonical" href="[URL]" />

Testcriteria:
- [ ] View page source: zoek naar rel="canonical"
- [ ] Waarde moet exact overeenkomen met: [URL]
- [ ] Slechts 1 canonical tag per pagina
- [ ] Google Search Console URL Inspection: canonical moet correct worden herkend
```

## Module 2: 301 Redirects

**Output format:**

```
301 REDIRECT SPEC
=================
Type: Permanent (301)
Bron: [oude URL]
Doel: [nieuwe URL]

Implementatie optie A (Magento Admin):
- Marketing > URL Rewrites > Add URL Rewrite
- Request Path: [pad zonder domein]
- Target Path: [pad zonder domein]
- Redirect Type: Permanent (301)

Implementatie optie B (.htaccess):
RewriteRule ^[oude-pad]$ [nieuwe-pad] [R=301,L]

Implementatie optie C (nginx):
rewrite ^/[oude-pad]$ /[nieuwe-pad] permanent;

Testcriteria:
- [ ] curl -I [oude URL] geeft HTTP 301
- [ ] Location header wijst naar [nieuwe URL]
- [ ] Geen redirect chains (max 1 hop)
- [ ] Oude URL niet meer in XML sitemap
```

## Module 3: Schema Markup (JSON-LD)

**Output format:**

```
SCHEMA MARKUP SPEC
==================
Pagina: [URL]
Schema type: [type]

JSON-LD code (plaats in <head> of voor </body>):
<script type="application/ld+json">
[exacte JSON-LD code]
</script>

Implementatie (Magento):
- Voeg toe aan CMS Block of via layout XML
- OF: gebruik Magento schema extension (indien beschikbaar)
- Template pad: [pad naar template bestand]

Testcriteria:
- [ ] Google Rich Results Test: [URL van test tool]
- [ ] Schema Markup Validator: geen errors
- [ ] Alle verplichte velden aanwezig
- [ ] Data komt overeen met zichtbare pagina-content
```

**Veelgebruikte schema templates:**

### FAQ Schema
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[vraag]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[antwoord]"
      }
    }
  ]
}
```

### BreadcrumbList Schema
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.saniweb.nl/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "[Categorie]",
      "item": "[URL]"
    }
  ]
}
```

### CollectionPage Schema (voor categoriepagina's)
```json
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "[Categorie naam]",
  "description": "[Meta description]",
  "url": "[URL]",
  "numberOfItems": "[aantal producten]"
}
```

## Module 4: Meta Tags & Robots Directives

**Output format:**

```
META TAG SPEC
=============
Pagina: [URL]

Huidige meta title: [huidig]
Nieuwe meta title: [nieuw] ([X/60 tekens])

Huidige meta description: [huidig]
Nieuwe meta description: [nieuw] ([X/155 tekens])

Robots directive: [index,follow / noindex,follow / etc.]

Implementatie (Magento):
- Catalog > [Products/Categories] > [item] > Search Engine Optimization
- Meta Title: [waarde]
- Meta Description: [waarde]
- Meta Robots: [waarde]

Testcriteria:
- [ ] View source: <title> tag bevat exact: [waarde]
- [ ] View source: meta name="description" bevat exact: [waarde]
- [ ] View source: meta name="robots" bevat: [waarde]
- [ ] Karakter-limieten gerespecteerd (title max 60, description max 155)
```

## Module 5: Interne Link Architectuur

**Output format:**

```
INTERNE LINK SPEC
=================
Doel: [wat bereiken we hiermee]

Toe te voegen links:
| Bronpagina | Doelpagina | Ankertekst | Locatie op pagina |
|------------|------------|------------|-------------------|
| [URL] | [URL] | [tekst] | [footer/body/sidebar/breadcrumb] |

Te verwijderen links:
| Bronpagina | Huidige link | Reden |
|------------|-------------|-------|

Implementatie:
- [Per link: waar in het CMS of template dit moet gebeuren]

Testcriteria:
- [ ] Screaming Frog crawl: doelpagina heeft X interne links (was Y)
- [ ] Link is zichtbaar en klikbaar op bronpagina
- [ ] Ankertekst bevat target keyword
- [ ] Link is geen nofollow
```

## Module 6: Hreflang Tags

**Output format:**

```
HREFLANG SPEC
=============
Pagina cluster:
| Taal/Regio | URL |
|------------|-----|
| nl-NL | [URL] |
| nl-BE | [URL] |
| de-DE | [URL] |

Per pagina toe te voegen in <head>:
<link rel="alternate" hreflang="nl" href="[NL URL]" />
<link rel="alternate" hreflang="nl-BE" href="[BE URL]" />
<link rel="alternate" hreflang="de" href="[DE URL]" />
<link rel="alternate" hreflang="x-default" href="[NL URL]" />

Testcriteria:
- [ ] Elke pagina in het cluster bevat ALLE hreflang tags (inclusief self-referencing)
- [ ] hreflang Checker tool: geen errors
- [ ] Google Search Console: geen hreflang errors in International Targeting rapport
```

## Module 7: Open Graph & Social Tags

**Output format:**

```
OPEN GRAPH SPEC
===============
Pagina: [URL]

Toe te voegen in <head>:
<meta property="og:title" content="[titel]" />
<meta property="og:description" content="[beschrijving]" />
<meta property="og:image" content="[image URL, min 1200x630px]" />
<meta property="og:url" content="[canonical URL]" />
<meta property="og:type" content="[website/product/article]" />
<meta property="og:site_name" content="Saniweb" />

Testcriteria:
- [ ] Facebook Sharing Debugger: preview toont correct
- [ ] LinkedIn Post Inspector: preview toont correct
- [ ] og:image is minimaal 1200x630px en < 8MB
```

## Ticket Template

Wanneer gevraagd om een dev ticket, gebruik dit format:

```
TICKET: [korte beschrijving]
Priority: [Critical / High / Medium / Low]
Geschatte effort: [uren]
Afhankelijkheden: [andere tickets of acties]

Context:
[1-2 zinnen waarom dit nodig is, in niet-technisch SEO taal]

Specificaties:
[relevante module specs van hierboven]

Acceptatiecriteria:
[testcriteria van de specs]

Deadline suggestie: [datum op basis van prioriteit]
```

## Magento-Specifieke Kennis

### Waar configureer je wat in Magento 2

| Wijziging | Locatie in Magento Admin |
|-----------|------------------------|
| Meta title/description (product) | Catalog > Products > [product] > SEO |
| Meta title/description (categorie) | Catalog > Categories > [cat] > SEO |
| Canonical URL (product) | Catalog > Products > [product] > SEO > Canonical URL |
| URL Rewrites / Redirects | Marketing > SEO & Search > URL Rewrites |
| Robots.txt | Content > Design > Configuration > Search Engine Robots |
| XML Sitemap genereren | Marketing > SEO & Search > Site Map |
| CMS pagina's | Content > Pages |
| Static blocks (voor content in categorieen) | Content > Blocks |

### Veelvoorkomende Magento SEO valkuilen

- Magento genereert standaard duplicate URL's voor producten in meerdere categorieen. Gebruik "Use Categories Path for Product URLs = No" of stel canonicals correct in.
- Layered navigation (filters) creëert crawlbare URL's met parameters. Deze moeten noindex of canonical krijgen.
- Magento's standaard meta title format voegt vaak de store name toe. Check of dit gewenst is.

*Eerste versie: juli 2026 (verplaatst uit SKILL.md). Herzie samen met SKILL.md bij een Magento-upgrade of wijziging van de spec-formats.*
