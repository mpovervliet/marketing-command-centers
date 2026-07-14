---
name: ux-webflow-dev
description: >
  Webflow development specialist (visual-dev platform voor marketing + content + light e-com). Gebruik ALTIJD bij Webflow-specifieke build-vragen: site-structuur, Client-First-methodologie, CMS collections + binding, Ecommerce (beperkt), Logic (workflows), Memberstack/Outseta-integratie, Localization, SEO-setup, code-embeds, custom interactions, reverse-proxy, of Webflow-naar-hosting-migratie. Trigger bij "Webflow site", "Webflow build", "Client-First", "Finsweet", "Webflow CMS", "Webflow Ecommerce", "Webflow Logic", "Webflow Localization", "Memberstack", "Outseta", "Webflow interactions", "Webflow animaties", "custom code embed", "Webflow naar WordPress", "reverse proxy Webflow", "Webflow SEO", of elke Webflow-build-vraag. Past 2026 best practices toe (Client-First v2 als CSS-methodologie, Finsweet-libraries voor power-ups, Logic voor workflows, Localization native, Memberstack voor auth/gated, code-embeds beperken voor CWV).
---

# Webflow Development Specialist

Webflow = visual-dev-platform. Ideaal voor marketing-sites, content-heavy sites, portfolio's, light-ecom (<500 SKUs), SaaS-marketing. Deze skill dekt site-structuur, Client-First-methodologie, CMS, Ecommerce, Logic, Localization, en integraties. 2026-realiteit: Webflow + Finsweet + Memberstack stack domineert non-Shopify premium marketing.

---

## Wanneer activeren

- Marketing-site build (homepage, product-pages, pricing, about, blog)
- Portfolio / agency / creator-site
- Light e-com (<500 SKUs, simple product-types)
- Webflow CMS-structuur ontwerpen
- Client-First CSS-methodologie implementeren
- Finsweet-libraries integreren (CMS Filter, CMS Load, etc.)
- Memberstack of Outseta voor auth + gated content
- Webflow Localization voor multi-taal
- Logic voor form-routing, auto-responders, conditional flows
- Custom interactions + complex animaties
- Migratie naar/van Webflow
- Performance-optimalisatie op Webflow

## Werkwijze

### 1. Project-scope & site-architectuur

Vraag eerst:
- Aantal pagina's (statisch)?
- CMS-collections (dynamisch, aantal + velden)?
- E-com (product-count + complexiteit)?
- Auth nodig (Memberstack/Outseta)?
- Multi-taal (Localization)?
- Forms-complexiteit (Logic nodig)?

### 2. Client-First v2 (CSS-methodologie)

De-facto standaard voor schaalbare Webflow-projecten.

**Naming convention**:
- `is-` voor states (`is-active`, `is-hidden`)
- `u-` voor utilities (`u-color-primary`)
- `padding-global` / `padding-section-medium` voor consistency
- Component-naming: `cta_wrapper`, `cta_button`

**Style guide page**:
- Alle typography-styles
- Alle button-variants
- Alle spacing-tokens
- Color-system
- Form-states
- Export-bron voor design-system-check

### 3. CMS-strategy

- **Collections** per entity-type (Blog Posts, Team Members, Case Studies, etc.)
- **Reference fields** voor relaties
- **Multi-reference** voor many-to-many
- **Plain text + Rich text** kiezen zorgvuldig
- **Switch fields** voor conditionals
- Max 10.000 items per collection (pro) / 50.000 (business)
- **Import via CSV** of API voor bulk
- **Native hosting** beperkt tot 10.000 items/site totaal (2026-limit)

### 4. Finsweet-libraries (power-ups)

- **CMS Filter**: client-side filtering
- **CMS Load**: pagination, load-more, infinite-scroll
- **CMS Combine**: multi-collection-aggregate
- **CMS Slider**: dynamic slider
- **Attributes**: universele helper-bibliotheek
- **Cookie consent**: GDPR-compliant
- **Client-First v2**: methodologie + tooling

Custom code-free + meest gebruikt in pro Webflow-builds.

### 5. Webflow Ecommerce (wanneer wel/niet)

**Wel**:
- <500 SKUs
- Simpele product-types (geen complexe varianten/bundles)
- Eenvoudige checkout
- Brand-first (visueel)
- Snelle time-to-market

**Niet (kies Shopify)**:
- >500 SKUs
- Complex inventory-management
- Multi-warehouse / multi-region met voorraad-sync
- Uitgebreide B2B-features
- Uitgebreide tax-regimes
- App-ecosysteem nodig (reviews, subscriptions, etc.)

### 6. Webflow Logic (workflows)

- Form-submit triggers
- Email-autoresponders
- Conditional routing (if-then)
- CRM-integratie (HubSpot, Salesforce via native of Zapier)
- Webhook-triggers
- Delay + loop (limited)

Beperkt maar genoeg voor marketing-site-flows. Complex = Make/Zapier + Webflow.

### 7. Localization (sinds 2024 native)

- Multi-locale in één project
- Auto-translation (AI-assisted, edit-friendly)
- Hreflang automatisch
- Locale-specifiek editing per pagina
- Combineert met CMS
- Subdirectory- of subdomain-structure

### 8. Performance-optimalisatie

- **Images**: WebP export automatisch, responsive variants, lazy-load default
- **Fonts**: Google Fonts of self-host (better CWV)
- **Animations**: `will-change` via custom code waar heavy
- **Code-embeds**: minimaliseer; elke embed is render-kost
- **Finsweet-libraries**: async-load waar mogelijk
- **Third-party**: audit Intercom, Drift, hotjar-impact
- **CDN**: native Webflow (Cloudflare-gebaseerd): goed baseline

### 9. Custom code-integratie

- **Head custom code** voor tracking + schema
- **Footer custom code** voor JS-libraries
- **Per-page custom code** voor page-specifics
- **Embed component** voor blocks (beperkt gebruik)
- **Reverse-proxy** (Cloudflare Workers) voor subfolder-deployment (blog.example.com → example.com/blog)

## Kern-kennisgebieden (2026 best practices)

### Webflow vs Shopify vs Framer (positionering 2026)

- **Webflow**: marketing + content + light-ecom, meest rijke CMS + Logic
- **Shopify**: serious e-com, product-catalog + checkout strength
- **Framer**: modern marketing sites, lightest + fastest, minder CMS-diep
- **WordPress**: legacy, goed voor content-redacties, expensive-to-maintain

MP's portfolio: Webflow voor marketing/portfolio-sites, Shopify voor e-com, Framer voor brand-launch-sites.

### Memberstack / Outseta (auth + gated)

- **Memberstack 2.0**: modern, webflow-native, Stripe-integratie
- **Outseta**: auth + CRM + billing combined, meer all-in-one
- Beide: gated content, member-directories, subscriptions
- Alternatief: Auth0, Clerk + custom (complexer)

### Webflow Apps (2024+ marketplace)

- **Jetboost**: no-code-power (filter, load-more, favorite)
- **PowerUp**: CMS-tools
- **Client Billing**: MP's freelance-billing
- **Relume**: AI-sitemap + component-library
- **Wized**: dynamic app-logic

Kwaliteit varieert; test CWV-impact.

### SEO op Webflow

- Meta per pagina editable
- Schema via custom-code (geen native schema)
- Sitemap auto-generated
- 301-redirects in site-settings (beperkt, gebruik Cloudflare voor bulk)
- Canonicals default, custom per pagina
- Open Graph + Twitter cards per pagina

### Accessibility op Webflow

- Aria-labels native in Designer
- Focus-styles expliciet ontwerpen (Webflow default = zwak)
- Keyboard-nav testen in prototype
- Alt-text per image verplicht
- Form-labels linken
- Custom interactions: reduced-motion-variant

### Limits en workarounds

- **10.000 CMS-items per site** (Pro plan): voor meer: Webflow Enterprise of migratie
- **50 form-submits/month** op gratis → serieus plan nodig
- **Beperkte URL-structuur** → reverse-proxy voor complexe paths
- **Geen native schema** → custom-code embedded JSON-LD
- **Beperkt A/B-testen** native → cro-implementation-tooling ernaast

### Hosting + domain

- Webflow hosting = CF-edge, gratis SSL, auto-caching
- Custom domain: CNAME + A-records
- Pro plan voor kritieke sites
- Business plan voor e-com / grote CMS

### Anti-patterns

- Hand-matched classes zonder Client-First → onderhoudsnachtmerrie
- Custom code overal → Webflow-redundantie + CWV-impact
- CMS-collections misbruiken als database (niet voor queryable data)
- Webflow Ecommerce op 1000+ SKUs → limieten raken
- Geen style-guide page → inconsistency
- Google Fonts zonder preconnect
- Alles in 1 big collection (beter: split by purpose)
- Animations overal (afhandelings-latency)
- Webflow voor enterprise-dashboards (verkeerde tool)

## Output-formaten

### Webflow-build-brief (docx via `springbok-gdoc`)
1. Site-architecture (statisch + CMS)
2. Client-First-setup
3. Finsweet-libraries
4. Integraties (Memberstack, forms, Logic, CMS)
5. Localization-plan
6. Performance-budget
7. Timeline + milestones

### Client-First style-guide (Webflow-pagina-spec)
- Typography-scale
- Color-system
- Spacing-tokens
- Button-variants
- Form-states
- Layout-structuur-classes

### CMS-schema-documentatie
- Collection per collection: velden, relaties, conventions
- Binding-plan per template
- Reference-field-mapping

### Webflow-audit (bestaande site)
- Site-structure-assessment
- Client-First-conformance
- CWV per template
- SEO-issues
- A11y-scan
- Integration-health

## Dependencies

- `pagespeed_tool`: CWV
- `seo_site_tool`: technical SEO
- `github_tool`: custom-code-repo
- `drive_tool`: deliverables
- Extern: Webflow Designer, Finsweet libraries, Client-First v2-docs, Memberstack, Outseta

## Integratie met andere skills

- **`ux-specialist`** / **`ux-implementation`**: platform-delegate
- **`ux-visual-design`**: design-handoff naar Webflow-build
- **`ux-design-system`**: tokens → style-guide-page
- **`ux-accessibility`**: a11y-compliance in Webflow
- **`cro-landing-page`**: LP-builds voor paid traffic
- **`cro-implementation`**: experiment-tools op Webflow
- **`seo-geo-technical`**: schema + CWV op Webflow
- **`ux-framer-dev`**: alternatief voor marketing-sites

## Tips

- **Client-First v2 default**. Scalability + team-handoff + AI-compatibel.
- **Finsweet-libraries leren**. 80% van custom-code-needs vervalt.
- **Webflow Ecommerce alleen <500 SKUs**. Groter = Shopify.
- **Memberstack voor auth**. Outseta als ook CRM+billing gewenst.
- **Localization native**. Geen meer hacks met multiple-sites.
- **Code-embeds minimaliseren**. Elke embed = CWV-risico.
- **Style-guide-page verplicht**. Geen style-guide = geen design-system.
- **Webflow + Cloudflare-proxy**. Voor complex URL-routing of performance-gain.
- **Finsweet CMS Filter > custom code**. Dekt 90% van filtering-needs.
- **Pro-plan minimum voor serieus werk**. Gratis plan = demo only.
