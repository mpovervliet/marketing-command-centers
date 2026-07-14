# Schema Markup — 2026 Implementatiegids

## Waarom schema markup (2026)

Drie redenen, alle drie belangrijker dan vroeger:

1. **Rich results in SERP** — visuele dominantie, hogere CTR
2. **Entity-signaal aan Google** — entity-based ranking
3. **GEO / LLM-parsing** — LLMs gebruiken structured data om content te begrijpen + citeren

## JSON-LD is de enige goede keuze

Microdata en RDFa zijn legacy. Gebruik `<script type="application/ld+json">` in `<head>` of onderaan `<body>`.

## De schema-stack per page-type

### Homepage
Minimaal: `Organization` + `WebSite` + `SearchAction`

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.klant.nl/#organization",
      "name": "[Klant]",
      "url": "https://www.klant.nl",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.klant.nl/logo.png",
        "width": 500,
        "height": 100
      },
      "sameAs": [
        "https://www.linkedin.com/company/klant",
        "https://www.facebook.com/klant",
        "https://www.instagram.com/klant",
        "https://twitter.com/klant",
        "https://nl.wikipedia.org/wiki/Klant",
        "https://www.wikidata.org/wiki/QXXXXXX"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+31-...",
        "contactType": "customer service",
        "areaServed": "NL",
        "availableLanguage": ["Dutch", "English"]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.klant.nl/#website",
      "url": "https://www.klant.nl",
      "name": "[Klant]",
      "publisher": { "@id": "https://www.klant.nl/#organization" },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.klant.nl/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    }
  ]
}
```

### Article / blog post
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[Titel]",
  "description": "[Meta description]",
  "image": [
    "https://www.klant.nl/featured-image.jpg"
  ],
  "datePublished": "2026-04-17T09:00:00+02:00",
  "dateModified": "2026-04-17T09:00:00+02:00",
  "author": {
    "@type": "Person",
    "name": "[Auteur]",
    "url": "https://www.klant.nl/auteur/[slug]",
    "sameAs": "https://www.linkedin.com/in/auteur",
    "jobTitle": "[functie]",
    "knowsAbout": ["[onderwerp 1]", "[onderwerp 2]"]
  },
  "publisher": {
    "@type": "Organization",
    "name": "[Klant]",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.klant.nl/logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.klant.nl/blog/[slug]"
  }
}
```

### Product (e-com)
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "[Productnaam]",
  "description": "[unieke beschrijving, niet fabrikant-copy]",
  "brand": { "@type": "Brand", "name": "[Merk]" },
  "sku": "[SKU]",
  "gtin13": "[GTIN]",
  "mpn": "[MPN]",
  "image": [
    "https://www.klant.nl/product-1.jpg",
    "https://www.klant.nl/product-2.jpg"
  ],
  "offers": {
    "@type": "Offer",
    "url": "https://www.klant.nl/product-slug",
    "priceCurrency": "EUR",
    "price": "XXX.XX",
    "priceValidUntil": "2026-12-31",
    "availability": "https://schema.org/InStock",
    "seller": { "@type": "Organization", "name": "[Klant]" },
    "hasMerchantReturnPolicy": {
      "@type": "MerchantReturnPolicy",
      "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
      "merchantReturnDays": 30,
      "returnMethod": "https://schema.org/ReturnByMail",
      "returnFees": "https://schema.org/FreeReturn"
    },
    "shippingDetails": {
      "@type": "OfferShippingDetails",
      "shippingRate": {
        "@type": "MonetaryAmount",
        "value": 0,
        "currency": "EUR"
      },
      "deliveryTime": {
        "@type": "ShippingDeliveryTime",
        "handlingTime": { "@type": "QuantitativeValue", "minValue": 0, "maxValue": 1, "unitCode": "DAY" },
        "transitTime": { "@type": "QuantitativeValue", "minValue": 1, "maxValue": 3, "unitCode": "DAY" }
      }
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "reviewCount": "123"
  }
}
```

### BreadcrumbList (alle non-home pagina's)
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.klant.nl" },
    { "@type": "ListItem", "position": 2, "name": "Categorie", "item": "https://www.klant.nl/categorie" },
    { "@type": "ListItem", "position": 3, "name": "Sub-cat", "item": "https://www.klant.nl/categorie/sub" },
    { "@type": "ListItem", "position": 4, "name": "Pagina" }
  ]
}
```

### FAQPage (alleen als pagina echt FAQ is)
Let op: Google handhaaft strenger sinds 2023 — gebruik alleen bij echte FAQ-content, niet op elk artikel.

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[Vraag 1]",
      "acceptedAnswer": { "@type": "Answer", "text": "[Antwoord]" }
    }
  ]
}
```

### HowTo (bij echte how-to content)
```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "[Titel]",
  "description": "[Beschrijving]",
  "image": "https://www.klant.nl/howto.jpg",
  "totalTime": "PT30M",
  "step": [
    { "@type": "HowToStep", "name": "Stap 1", "text": "[Uitleg]", "image": "https://..." },
    { "@type": "HowToStep", "name": "Stap 2", "text": "[Uitleg]" }
  ]
}
```

### LocalBusiness (per vestiging)
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "[Klant] - [Locatie]",
  "image": "https://www.klant.nl/storefront.jpg",
  "url": "https://www.klant.nl/locaties/[slug]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Straat 1",
    "addressLocality": "Amsterdam",
    "postalCode": "1012 AB",
    "addressCountry": "NL"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 52.37, "longitude": 4.89 },
  "telephone": "+31...",
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Monday", "opens": "09:00", "closes": "18:00" }
  ]
}
```

### Review (wanneer je reviews publiceert)
Alleen self-serving reviews uit GSC-overtredingen riskeren. Third-party reviews of user-generated OK.

```json
{
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "Product",
    "name": "[Product]"
  },
  "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
  "author": { "@type": "Person", "name": "[Reviewer]" },
  "datePublished": "2026-04-17",
  "reviewBody": "[Review-tekst]"
}
```

## Schema-gebruik voor GEO

LLMs parseren schema om entities te begrijpen. Voor GEO-optimalisatie verrijken:

- **Organization** met uitgebreide `description` (50-150 wrd)
- **Article** met `about` (links naar entities), `mentions` (andere entities)
- **Author** met `knowsAbout`, `alumniOf`, `hasOccupation`
- **Product** met volledige `additionalProperty`, `material`, `color`, etc.

## Validatie-workflow

1. **Rich Results Test** (search.google.com/test/rich-results) — eligible voor rich result?
2. **Schema.org validator** (validator.schema.org) — syntactisch correct?
3. **GSC > Enhancements** — Google ziet schema + 0 errors?
4. **SERP-check** — komt rich result daadwerkelijk in SERP terecht? (kan 1-4 weken duren)

## Veelgemaakte fouten

- Schema zonder juiste page-context (bv. Product-schema op blog-post)
- Incomplete required fields (bv. `Product` zonder `offers`)
- `aggregateRating` zonder echte review-data op pagina (manual action risk)
- FAQ-schema op elke page (overused, verlies aan rich-result eligibility)
- Schema op JS-rendered pages die Google niet kan renderen
- Schema in iframe (wordt niet opgepikt)
- Absolute vs relative URL-mix
- `@id` niet consistent bruik voor entity-linking

## Multi-schema op één page

Combineer via `@graph` om meerdere entities te linken:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": "...#organization" },
    { "@type": "WebSite", "@id": "...#website", "publisher": { "@id": "...#organization" } },
    { "@type": "Article", "publisher": { "@id": "...#organization" }, "isPartOf": { "@id": "...#website" } }
  ]
}
```

## Referenties

- [Schema.org documentation](https://schema.org)
- [Google Search Central — Structured Data](https://developers.google.com/search/docs/appearance/structured-data)
- [Merkle Schema Markup Generator](https://technicalseo.com/tools/schema-markup-generator/)
- [Schema App Highlighter](https://www.schemaapp.com/)
