# Canonical Tags — Regels & Patronen

## Wat is een canonical?

`<link rel="canonical" href="...">` — signaal aan zoekmachines welke URL de "master-versie" is van content die via meerdere URLs bereikbaar is. Voorkomt duplicate-content splitsing van rankingsignalen.

## Wanneer gebruik je canonical?

### Altijd
- **Self-referencing canonical** op elke unieke pagina: pagina wijst naar zichzelf. Zo'n simpele regel voorkomt 80% van canonical-problemen.
- **Paginering**: pagina 2+ → canonical naar pagina 2+ zelf (NIET naar pagina 1 sinds Google 2019-guidance). `rel=prev/next` is deprecated.
- **Faceted navigation**: filtercombinaties die geen unieke landingspagina vormen → canonical naar de hoofdcategorie. UNIEKE filters (met zoekvolume) → eigen canonical + eigen URL.
- **Tracking-parameters** (`utm_*`, `gclid`, `fbclid`): canonical naar schone URL.
- **Session-ID / sort-order variants**: canonical naar canonical-variant zonder parameter.
- **WWW vs non-WWW, HTTP vs HTTPS, trailing-slash vs niet**: 301 redirects + canonical consistent.

### Vaak
- **Syndicatie**: als je content op derden-sites laat verschijnen: zij canonicaliseren naar jouw origineel (of JIJ canonicaliseert naar hen, bij gast-content).
- **PDFs / alternatieve bestandsformaten**: canonical via HTTP-header naar HTML-versie.
- **Mobile m.-subdomeinen**: canonical naar responsive/desktop versie (als m. nog bestaat).

### Bijna nooit
- **Cross-language**: gebruik `hreflang`, GEEN canonical om taalversies te koppelen.
- **Near-duplicate maar intent-verschillend**: twee aparte pagina's met eigen canonical.

## Veelgemaakte fouten

1. **Canonical naar homepage** op elke pagina → Google negeert de hele site zijn rankings.
2. **Canonical naar pagina 1** vanuit pagina 2+ paginering → content op pagina 2+ niet meer geïndexeerd.
3. **Relatieve canonical** (`/pad/pagina`) → gebruik ALTIJD absolute URL (`https://...`).
4. **Meerdere canonical-tags** op één page → Google kiest willekeurig.
5. **Canonical + noindex tegelijk** → conflict.
6. **Canonical naar 404/redirect** → signaal wordt genegeerd.
7. **Canonical naar URL zonder HTTPS** als site wel HTTPS heeft.
8. **Inconsistente trailing-slash** (canonical wel slash, site-URL niet).

## Magento 2 specifiek

- Configuratie: Stores > Configuration > Catalog > Catalog > Search Engine Optimization
- `Use Canonical Link Meta Tag For Categories`: Yes
- `Use Canonical Link Meta Tag For Products`: Yes
- Layered nav filters zonder SEO-waarde: canonical naar category zonder filters
- SEO-waardevolle filters (bv. `kleur=wit`): aparte canonical + URL-rewrite + unieke content

## Shopify specifiek

- Automatische canonical is correct voor 95% van de gevallen
- **Probleem**: collection-product variants (`/collections/xxx/products/yyy`) → altijd canonical naar `/products/yyy`
- Smart Collections met duplicates: canonical naar primaire collectie

## WordPress specifiek

- Yoast / Rank Math doen dit goed als default
- Check: archives (category + tag + author) — sommige willen noindex i.p.v. canonical
- `?replytocom=` comment-links → canonical strippen deze standaard (Yoast)

## Headless / Next.js

```tsx
export const metadata = {
  alternates: {
    canonical: 'https://www.site.nl/pad/pagina'
  }
}
```

Let op: check dat SSR de tag ook output bij client-side navigation (i.e. niet alleen in initial HTML).

## Validatie

1. **Rendered HTML inspectie**: crawl met Screaming Frog / Sitebulb — kolom `Canonical Link Element 1` + statuscode target
2. **GSC > Pages > Why page isn't indexed** — "Duplicate, Google chose different canonical" = je canonical wordt genegeerd
3. **curl test**:
   ```bash
   curl -sL https://www.site.nl/pad | grep -i canonical
   ```
4. **URL Inspection** in GSC: "User-declared canonical" vs "Google-selected canonical" vergelijken

## Canonical vs 301 — welke kies je?

- **301 redirect** als pagina definitief verdwijnt
- **Canonical** als beide URLs bereikbaar moeten blijven maar 1 versie master is
- Canonical is zachter signaal dan 301, Google kan negeren; 301 is harder

## Referenties

- [Google Search Central — Canonicalization](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- John Mueller — Search Off the Record episodes over canonical
