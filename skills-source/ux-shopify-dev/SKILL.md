---
name: ux-shopify-dev
description: >
  Shopify development & theming specialist (Online Store 2.0 + Hydrogen). Gebruik ALTIJD bij Shopify-specifieke build-, theming-, of customization-vragen: Liquid, Online Store 2.0 (sections, JSON templates, app blocks), Hydrogen + Oxygen (headless), Shopify Functions, Checkout Extensibility, Shopify Markets, metaobjects, metafields, B2B, Shop App, of Plus-specifics. Trigger bij "Shopify theme", "Dawn theme", "Liquid code", "sections", "metaobjects", "metafields", "Hydrogen build", "headless Shopify", "checkout extensibility", "Shopify Functions", "Shopify Markets", "multi-currency", "B2B Shopify", "Shopify Plus", "theme customization", "app blocks", "custom Shopify app", "Shopify CLI", of elke build-vraag op Shopify. Past 2026 best practices toe (Online Store 2.0 default, sections everywhere, metaobjects voor structured data, Checkout Extensibility na Checkout 1.0-deprecation aug 2024, Markets voor internationaal, Web Pixels voor tracking, CWV-optimalisatie).
---

# Shopify Development Specialist

Shopify is default-platform voor MP's e-com klantportfolio (moieme, iliabeauty, veel more). Deze skill dekt theming, headless builds, checkout-customization, internationale setup, B2B, en Shopify Plus-specifics. 2026-realiteit: Online Store 2.0 + Hydrogen + Checkout Extensibility.

---

## Wanneer activeren

- Shopify-theme customization (Dawn-gebaseerd of custom)
- Online Store 2.0 templates + sections uitbreiden
- Hydrogen + Oxygen headless-build
- Checkout Extensibility (checkout UI + Shopify Functions)
- Shopify Markets internationaliseren (multi-region/currency/locale)
- Metaobjects + metafields voor structured data
- B2B Shopify setup
- Shopify Plus (scripts vs Functions, Wholesale, Launchpad)
- Shopify App development (custom functionaliteit)
- Performance-optimalisatie (CWV op Shopify)
- Analytics via Web Pixels API

## Werkwijze

### 1. Platform-scope check

| Plan | Wat kan | Wat niet |
|---|---|---|
| Basic/Grow | Sections, metafields, basic apps | Shopify Functions, checkout.liquid, Scripts |
| Advanced/Plus | Alles van Basic + B2B, multi-currency |: |
| **Plus** | Scripts (deprecated), Functions, Launchpad, Wholesale, Expansion Stores |: |

Check plan voor je features belooft.

### 2. Theme-ontwikkeling (Online Store 2.0)

**Structure**:
- `config/settings_schema.json`: theme-editor settings
- `layout/theme.liquid`: master-layout
- `sections/`: herbruikbare secties
- `templates/*.json`: page-templates (section-gebaseerd)
- `blocks/`: block-level building
- `snippets/`: herbruikbare fragmenten
- `assets/`: CSS/JS/images

**Key principes**:
- Sections everywhere (elke pagina is section-gebaseerd)
- JSON templates i.p.v. .liquid templates
- Metafields via theme-editor exposable
- App blocks voor third-party-integratie binnen sections
- `{% schema %}` per section voor merchant-config

### 3. Hydrogen (headless) wanneer kiezen

Kies Hydrogen als:
- Custom frontend-stack (React Router 7 / Remix-basis)
- Complex content-needs (headless CMS ernaast zoals Sanity)
- Sub-second performance-eis
- Custom checkout (vereist Plus + Oxygen)
- Multi-brand / multi-site shared backend

Skip Hydrogen als:
- Klein tot middelgroot + standaard e-com
- Klant heeft geen dev-team voor onderhoud
- Snelle time-to-market
- Budget beperkt (Hydrogen + Oxygen = extra kosten)

2026: Hydrogen v2025 op Remix → migreert naar React Router 7. Oxygen = Shopify-hosting voor Hydrogen.

### 4. Checkout Extensibility (verplicht sinds aug 2024)

- `checkout.liquid` is **deprecated** (Plus-only legacy, end-of-life 2024-2025)
- **Checkout UI Extensions** via Shopify CLI
- **Shopify Functions** voor discount/delivery/payment-logic
- **Branded Checkout** via theme-editor (geen code)
- Custom flows via Checkout Blocks

### 5. Metaobjects + metafields (structured data 2026)

- **Metafields**: extra data op product/variant/customer/order
- **Metaobjects**: custom data-entities (bijv. "Author", "Size Guide", "Store Location")
- Definitie via Shopify Admin → Settings → Custom data
- Expose naar storefront via Liquid of GraphQL
- Gebruik voor: product-specs, FAQ, maat-tabellen, authors, locaties, richer PDP-content
- SEO-win: structured data direct koppelbaar aan schema.org

### 6. Shopify Markets (internationaal)

- Multi-region / multi-currency / multi-language
- Auto price-conversion of manual prijslijsten
- Geo-IP routing + domain-per-market
- Translate & Adapt-app voor vertalingen
- Hreflang automatisch gegenereerd
- Combineert met Shopify Payments voor lokale betaalmethodes

### 7. Performance op Shopify (CWV-reality)

- Dawn-theme: best-practice-baseline (blazing fast)
- Custom theme: Lighthouse <90 default: optimaliseren vereist
- Image-optimalisatie: Shopify CDN + `image_url` met width/format
- `preload` voor LCP-image
- Third-party apps = #1 CWV-killer (audit continu)
- Lazy-load below-fold met `loading="lazy"`
- Async script-injection
- Oxygen-hosting voor Hydrogen = CDN-edge default

### 8. Tracking (Web Pixels API)

- Sinds Shopify 2.0: Web Pixels API voor custom tracking
- GA4 / Meta Pixel / TikTok Pixel via Shopify Admin
- Consent-mode ondersteund
- Server-side tracking via Google tag (sGTM)
- Custom Pixels voor eigen tagging-needs

## Kern-kennisgebieden (2026 best practices)

### Liquid-essentials

- `{% section %}` / `{% sections %}` voor layout
- `{% render %}` > `{% include %}` (scoped context)
- `{% liquid %}` tag voor multi-line blocks
- `image_tag` filter met `widths` + `sizes` voor responsive images
- `money_with_currency` respecteert Markets
- `content_for_header` voor third-party apps

### Shopify CLI (dev-workflow)

- `shopify theme dev`: lokaal ontwikkelen met hot-reload
- `shopify theme push/pull`: theme-sync
- `shopify app dev`: app-development
- `shopify hydrogen dev`: Hydrogen-development
- GraphQL Admin + Storefront APIs

### Dawn theme als baseline

- Official reference-theme, open-source
- Snelle CWV-score
- Accessibility-ready
- Metaobjects + app blocks pre-built
- Use-case: klant wil snelle start zonder design-overhead → Dawn customizen beter dan nieuw bouwen

### Shopify Functions (beyond Scripts)

- Rust/WASM of JS (via Shopify CLI)
- Types: discount, delivery, payment, cart-transform, order-routing
- Scripts (Plus legacy) migreren naar Functions
- CLI: `shopify app generate extension --type=function`

### B2B Shopify (2026-volwassen)

- B2B-companies + company-locations
- Prijslijsten per company
- Net payment terms
- Quantity-rules + order-minimums
- Separate B2B-catalogs
- Custom B2B-checkout-flows

### Shopify Plus-exclusive features

- **Launchpad**: geplande events (sales, drops)
- **Wholesale**: B2B channel (migrating to built-in B2B)
- **Scripts** → migratie naar Functions verplicht
- **Expansion Stores**: extra stores binnen plan
- **Organization Admin**: multi-store management
- **ShopifyQL**: data-analytics query-taal

### Apps-strategy

- **Native Shopify Admin** apps eerst (Shop Channel, Email, Flow)
- Third-party: check performance-impact (CWV) + review-score + response-time
- App-blocks > legacy script-injection
- Evite-list: trage reviews-apps, floating cart-widgets, chat-popups zonder lazy-load
- Top-aanbevolen categorieën: Klaviyo (email), Judge.me (reviews), Octane AI (quiz), Shogun (page-builder, maar check CWV)

### Shopify SEO-specifics

- URL-structuur beperkt (`/products/`, `/collections/`, `/pages/`): niet custom
- Canonical automatisch
- Hreflang via Markets automatisch
- Robots.txt editable sinds 2021
- Sitemap.xml automatisch
- Structured data: Product + Offer + BreadcrumbList automatisch, rest custom
- JSON-LD injection via theme.liquid

### Anti-patterns

- `checkout.liquid` nog bouwen (deprecated, migreer nu)
- Scripts (Plus) i.p.v. Functions
- Third-party-app-explosie zonder CWV-check
- `{% include %}` i.p.v. `{% render %}`
- Custom theme zonder Dawn-baseline
- Metaobjects negeren, custom database bouwen
- Markets negeren voor multi-region → hreflang-hel
- Checkout extensions ≠ checkout.liquid (begrip mengen)
- Native Shopify Admin apps negeren voor third-party

## Output-formaten

### Shopify development-brief (docx via `springbok-gdoc`)
1. Theme-architecture (2.0 / Hydrogen)
2. Custom functionality (Functions / apps)
3. Metaobjects + metafields-schema
4. Markets-setup
5. B2B-requirements (indien)
6. Performance-budget
7. Timeline + milestones

### Migration-plan (checkout.liquid → Extensibility)
- Feature-inventaris van bestaande checkout.liquid
- Mapping naar Checkout UI Extensions + Functions
- Timeline (6-12 weken typical)
- QA-plan

### Theme-audit-rapport
- CWV per template
- App-inventaris + CWV-impact
- Theme-code-quality
- Metaobjects/metafields-usage
- SEO-issues (Shopify-specifiek)
- Aanbevelingen

### Hydrogen-setup-architecture
- Next-level frontend-stack
- CMS-integratie (Sanity/Contentful)
- Content-mapping
- Deploy-strategy (Oxygen)
- Cost-estimate

## Dependencies

- `shopify_tool`: Shopify Admin API (orders, products, customers)
- `github_tool`: theme-repo review
- `pagespeed_tool`: CWV op Shopify
- `seo_site_tool`: technical-SEO
- `channable_tool`: feed-syndicatie vanaf Shopify
- `drive_tool`: deliverables
- Extern: Shopify CLI, Theme Inspector, Web Pixels-docs

## Integratie met andere skills

- **`ux-specialist`** / **`ux-implementation`**: platform-delegate
- **`ux-visual-design`**: design-handoff naar Liquid-theme
- **`ux-design-system`**: tokens → Shopify theme-settings
- **`ux-accessibility`**: a11y in theme-code
- **`cro-checkout`**: Shopify-checkout-CRO
- **`cro-implementation`**: Web Pixels + GTM op Shopify
- **`seo-geo-ecommerce`**: Shopify-SEO
- **`google-ads-pmax-shopping`** / **`channable-shopping-feeds`**: product-feeds

## Tips

- **Online Store 2.0 default**. Geen reden meer voor 1.0 unless legacy.
- **Checkout Extensibility NU**. checkout.liquid is dood, migreer.
- **Dawn als baseline**. Sneller + a11y-ready + up-to-date.
- **Metaobjects > custom database**. Native + queryable + editor-friendly.
- **Apps-inventaris kritisch**. Elk app = CWV-risk; audit kwartaal.
- **Hydrogen alleen als reden**. Headless = complexiteit; niet default.
- **Shopify CLI + git**. Geen FTP-editing meer.
- **Markets voor internationaal**. Vervangt oude multi-store-gemodel.
- **Functions voor discount/shipping-logic**. Scripts is dood.
- **Web Pixels voor tracking**. GA4/Meta/TikTok native integrate.
- **Theme performance = 80% images + third-party apps**. Check deze 2 eerst.
