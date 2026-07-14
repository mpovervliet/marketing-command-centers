# Site Architecture — [Klant]

*Laatst bijgewerkt: YYYY-MM-DD*

## Huidige URL-structuur (tot niveau 3)

```
/
├── /categorie-1/
│   ├── /categorie-1/sub-a/
│   └── /categorie-1/sub-b/
├── /categorie-2/
├── /blog/
├── /over-ons/
└── /contact/
```

## Page-types & SEO-doel

| Template | URL-pattern | SEO-intent | Schema | Indexeerbaar? |
|---|---|---|---|---|
| Homepage | `/` | Brand + trust | Organization, WebSite, SearchAction | Ja |
| Categorie | `/kat/` | Commercial / transactional | CollectionPage, BreadcrumbList | Ja |
| Product | `/kat/product/` | Transactional | Product, Offer, Review | Ja |
| Blog hub | `/blog/` | Navigational intern | CollectionPage | Ja |
| Blog post | `/blog/slug` | Informational / GEO | Article, BreadcrumbList | Ja |
| Filter-pages | `/kat/?filter=` | - | - | Nee (canonical naar kat) |
| Searchresults | `/search?q=` | - | - | Nee (robots.txt disallow) |
| Login / account | `/account/` | - | - | Nee (meta noindex) |

## Navigatie-hiërarchie

### Main menu
-
-

### Footer
-
-

### Breadcrumbs
- Aanwezig op alle page-types? ja/nee
- Schema markup? ja/nee
- Target: **alle non-home pages hebben breadcrumbs + schema**

## Hub-spoke topical structuur

Per topic-cluster uit `keyword-universe.md`:
- **Hub-URL**:
- **Spokes** (5-15 diepe-pagina's):
- **Interne link-patroon**: hub → alle spokes; elke spoke → hub + 2-3 zuster-spokes

## Faceted navigation (e-com)

- **Facetten die wel indexeerbaar zijn** (bv. merk-filter):
- **Facetten die niet indexeerbaar zijn** (bv. prijs, review-rating, kleur-combinaties):
- **Technische implementatie**: canonical + robots noindex / meta nofollow / ?param exclusion

## Sitemap-segmentatie

```
/sitemap.xml (index)
├── /sitemap-pages.xml
├── /sitemap-categories.xml
├── /sitemap-products.xml
├── /sitemap-blog.xml
└── /sitemap-images.xml
```

## URL-conventies

- Lowercase
- Hyphens (niet underscores)
- Geen trailing slash OF altijd trailing slash (consistent!)
- Geen parameters voor indexeerbare content
- Kort & semantisch
- Taalcode-patroon: `/nl-nl/` of subdomain `nl.klant.com` of eigen TLD

## Aanbevolen herstructurering (indien nodig)

- **Issue 1**: [beschrijving] → [voorstel] → [impact-schatting]
- **Issue 2**:
- **Issue 3**:

## Fasering

### Fase 1 (quick wins, < 2 weken)
-

### Fase 2 (mid-term, 1-2 maanden)
-

### Fase 3 (lange-termijn, > 2 maanden, migratie-klasse)
-

---

*Bij grote wijzigingen: altijd eerst staging + full crawl + stakeholder-review.*
