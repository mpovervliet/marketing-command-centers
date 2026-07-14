---
name: ux-implementation
description: >
  Web implementation & launch-ops specialist (platform-agnostic + headless). Gebruik ALTIJD bij design-naar-code vertaling, headless stacks (Next.js, Remix, Nuxt, Astro + Sanity/Contentful/Storyblok), performance-budgets, Core Web Vitals, pre-launch QA, staging-to-prod flows, of launch-ops. Trigger bij "dev handoff", "launch plan", "QA checklist", "staging naar productie", "go live", "performance budget", "Core Web Vitals", "headless stack", "Next.js site", "Sanity CMS", "Contentful", "Storyblok", "Astro build", "site bouwen", "frontend QA", "launch readiness", "pre-launch audit", "post-launch monitor", of elke implementatie/launch-vraag los van platform. Past 2026 best practices toe (CWV budgets LCP<2.5s INP<200ms CLS<0.1, staging + visual-regression + a11y-regression verplicht, feature flags voor safe-launches, server-components default). Schakelt naar ux-shopify-dev / ux-webflow-dev / ux-framer-dev voor platform-specifics.
---

# Web Implementation & Launch-Ops Specialist

Overbrugging tussen design en live. Platform-agnostic + headless-stack advies. Concrete output: dev-handoff-packets, launch-checklists, QA-protocollen, performance-budgets, post-launch-monitoring. Voor platform-specifieke implementatie → sub-skills.

---

## Wanneer activeren

- Design-handoff naar dev-team organiseren
- Headless-stack-keuze voor nieuwe site (Next.js + CMS)
- Pre-launch QA-protocol opstellen
- Launch-plan (staging → prod, feature flags, rollback)
- Performance-budget vaststellen (CWV-targets)
- Post-launch monitoring (synthetic + RUM)
- Dev-review (code-quality, naming, conventions: op hoog niveau)
- Cross-browser + cross-device testing
- A11y-regressie bij elke release

## Werkwijze

### 1. Dev-handoff-packet (universal)

- **Figma-link** met Dev Mode aan
- **Design-system reference** (tokens, components, docs)
- **Content-specs** (copy, images, video)
- **Responsive-gedrag-rules** per component
- **Motion-spec** (timings, easings, reduced-motion)
- **Accessibility-requirements** per component
- **Browser-support-matrix** (meestal last-2 + Safari)
- **Performance-budget** (LCP/INP/CLS per template)
- **SEO-requirements** (metadata, structured data, sitemap)
- **Analytics-events** (GA4, GTM dataLayer-spec)

### 2. Headless-stack-beslissing (als relevant)

| Stack | Wanneer |
|---|---|
| **Next.js + Sanity** | Premium marketing + content-heavy; excellent DX |
| **Next.js + Contentful** | Enterprise + multi-brand |
| **Astro + Storyblok** | Marketing/content, low JS, Edge-first |
| **Remix + headless** | Forms-heavy + dynamic UX |
| **Nuxt + Directus** | Vue-preference; self-hostable CMS |

Default in 2026: Next.js 15 (App Router, RSC, Partial Prerendering) + Sanity voor content, Vercel of Netlify voor hosting.

### 3. Performance-budget per template

**Core Web Vitals 2026-targets**:
- LCP ≤ 2.5s (75th percentile)
- INP ≤ 200ms
- CLS ≤ 0.1
- TTFB ≤ 600ms
- FCP ≤ 1.8s

**JS-budget**:
- Marketing site: <100KB gzipped initial
- E-com: <200KB gzipped initial, streaming for rest
- Interactive app: case-by-case

**Image-budget**:
- Hero: <200KB WebP/AVIF
- Thumbnails: <50KB WebP/AVIF
- Lazy-load off-screen
- Responsive `srcset` + `sizes`
- Next-gen formats met fallback

### 4. Pre-launch QA-checklist

**Functional**:
- Alle pagina's op staging renderen
- Alle interactive states werkend
- Forms: submit, validation, error-states, success-flow
- Cart/checkout (bij e-com): hele funnel doorlopen
- Search werkend + resultaten correct
- Filter + sort functioneel
- Account-flows (register, login, forgot, edit)
- Payment-flow sandbox getest

**Non-functional**:
- Core Web Vitals op CrUX-niveau (real users, niet lab)
- A11y-scan (axe + Lighthouse) zonder criticals
- Keyboard-only doorlopen per template
- Screen-reader (NVDA + VoiceOver) op kern-taken
- Contrast op alle states
- Reduced-motion respect
- Cross-browser: Chrome, Safari, Firefox, Edge (last 2 versions)
- Cross-device: iPhone, Android, iPad, Desktop

**SEO + tracking**:
- Meta + Open Graph + Twitter cards per template
- Structured data (Product, Organization, Breadcrumb, FAQ)
- Sitemap.xml + robots.txt
- Canonicals correct
- 301-redirects van oude URLs
- GA4 events firend correct
- GTM dataLayer schema compleet
- Consent Mode v2 (GDPR)

### 5. Launch-plan (staging → prod)

1. Feature-freeze op staging
2. Final stakeholder-review (visual + content + legal)
3. Pre-launch QA (zie boven)
4. DNS-voorbereiding (TTL omlaag 48h vóór cutover)
5. Backup oude site
6. Monitoring-infra actief (UptimeRobot, Sentry, Vercel Analytics)
7. Cutover-window (low-traffic slot)
8. Post-deploy smoke-test (5-min rondje)
9. Monitor first 24h intensief
10. Rollback-plan vooraf gedefineerd

### 6. Post-launch monitoring (week 1-4)

- **RUM** (Real User Monitoring): Vercel Speed Insights, Cloudflare Web Analytics, SpeedCurve
- **Error-tracking**: Sentry voor client-errors
- **Uptime**: UptimeRobot / Better Uptime
- **CWV-tracking**: CrUX dashboard via GSC
- **Search-Console**: coverage + Core Web Vitals
- **Funnel-metrics**: GA4 + klant-KPI's
- **A11y-regressie**: Pa11y CI of Axe CI in pipeline

### 7. Continuous post-launch (ongoing)

- Weekly CWV-check
- Monthly Lighthouse-audit per template
- Quarterly A11y-audit
- Release-notes per deploy
- Feature-flags voor safe-rollouts

## Kern-kennisgebieden (2026 best practices)

### Next.js 15 + React Server Components (default)

- App Router + RSC als default
- Server actions voor mutations
- Streaming + Suspense voor fast-paint
- Partial Prerendering (PPR) voor dynamic-in-static
- Edge runtime voor low-latency
- `next/image` + `next/font` verplicht voor CWV

### Astro voor content-heavy

- Islands architecture (0 JS default, hydrate on demand)
- Content Collections met Zod-validation
- View Transitions API native
- Uitermate geschikt voor marketing sites

### Remix voor forms/dynamic

- Loader/action pattern: native web platform
- Progressive enhancement ingebouwd
- Minder populair dan Next maar DX uitstekend

### Headless CMS 2026-keuzes

- **Sanity**: structured content, real-time, GROQ, portable-text
- **Contentful**: enterprise, multi-locale, webhooks
- **Storyblok**: visual editor in-context, goed voor marketing
- **Directus**: open-source, self-host, SQL-based
- **Payload**: code-first, TypeScript, self-host
- **Hygraph**: GraphQL-native
- WordPress-headless: legacy-keuze maar nog relevant voor content-redacties

### Hosting 2026

- **Vercel**: Next.js-native, edge, immediate preview deployments
- **Netlify**: framework-agnostic, edge functions
- **Cloudflare Pages + Workers**: budget-friendly + workers
- **AWS Amplify / SST**: enterprise
- **Render**: simple deploys

### Core Web Vitals-optimalisatie-tactics

- Preconnect voor critical third-parties
- Font-display: swap + `next/font` of fontsource
- Images: WebP/AVIF + responsive srcset + priority voor hero
- Lazy-load below-fold (`loading="lazy"`)
- Self-host critical fonts (geen Google Fonts CDN tenzij preconnect)
- Critical CSS inline, rest async
- Code-split per route
- Preload LCP-image

### Accessibility in code (verplicht)

- Semantic HTML eerst (landmarks: header/nav/main/aside/footer)
- ARIA alleen als native niet kan
- Focus-management in SPAs (focus-restore bij route-change)
- `prefers-reduced-motion` honoured
- `prefers-color-scheme` ondersteund
- Form-labels `for`-gekoppeld
- Error-handling: `role="alert"` + `aria-live`

### Feature flags & safe rollouts

- **LaunchDarkly / Statsig / Unleash**: flag-management
- Progressive rollout (5% → 25% → 100%)
- Kill-switch per feature
- Integratie met A/B-testing (zie `cro-implementation`)

### Analytics & tagging

- GA4 als standaard
- GTM als tag-manager
- dataLayer-schema per project vastgelegd
- Consent Mode v2 voor EU (GDPR + DMA)
- Server-side GTM voor performance + privacy
- First-party tracking via eigen subdomain

### Anti-patterns

- Geen performance-budget → geheid CWV-issues
- Launch zonder staging → rollback-hel
- Geen feature flags → grote releases = groot risico
- A11y-check vergeten → EAA-exposure
- Lighthouse-score op lab = real-user-performance (RUM is anders)
- Third-party scripts ongemonitord (Intercom/chat-widgets killen CWV)
- Font-loading zonder font-display strategy
- `<img>` zonder width/height (CLS-issue)
- Legacy jQuery+WP in headless-context verkrijgbaar
- "Wij fixen het later" (CWV/a11y/SEO)

## Output-formaten

### Dev-handoff-packet (folder/doc)
1. Figma-link + Dev Mode aan
2. Design-system reference
3. Performance-budget per template
4. A11y-requirements
5. SEO-requirements
6. Analytics-events-spec
7. Content-checklist
8. Release-plan

### Launch-readiness-rapport (docx via `springbok-gdoc`)
1. QA-results (functional + non-functional)
2. CWV-status per template
3. A11y-scan-results
4. Outstanding issues
5. Launch-go/no-go
6. Rollback-plan

### Performance-budget-document
- Per template: LCP/INP/CLS-target + JS/CSS/image-budget
- Monitoring-plan
- Escalation-criteria

### Post-launch-rapport (eerste 30 dagen)
- RUM-data samenvatting
- Error-rate
- CWV-trend
- Funnel-performance
- Issue-log + resolution

## Dependencies

- `pagespeed_tool`: CWV + Lighthouse-audits
- `seo_site_tool`: technical-SEO QA
- `github_tool`: repo-review indien beschikbaar
- `ga4_tool`: event-validatie
- `drive_tool`: handoff-documenten
- Extern: Vercel/Netlify, Sentry, UptimeRobot, axe, Pa11y, SpeedCurve

## Integratie met andere skills

- **`ux-specialist`**: router
- **`ux-visual-design`**: input = productie-klaar design
- **`ux-design-system`**: implementation-laag voor tokens
- **`ux-accessibility`**: QA + regression
- **`ux-shopify-dev` / `ux-webflow-dev` / `ux-framer-dev`**: platform-specifieke executie
- **`seo-geo-technical`**: technical-SEO overlap (schema, redirects, canonicals)
- **`cro-implementation`**: tagging + experiment-tech op nieuwe site

## Tips

- **Performance-budget vanaf dag 1**. Achteraf optimaliseren = dubbel werk.
- **Staging verplicht**. Geen enkele launch zonder.
- **Feature flags standard**. Safe-rollout + instant rollback.
- **CWV is real-user, geen lab**. Lighthouse is indicatief, CrUX is waarheid.
- **A11y-regression in CI**. Pa11y of axe per commit.
- **Dev Mode in Figma aan**. Zonder = slechte handoff gegarandeerd.
- **Headless = keuze voor complexiteit-upgrade**. Klein team = SaaS; team+budget = headless.
- **Vercel default voor Next.js**. Andere keuze = reden nodig.
- **Launch-window low-traffic**. Nooit vrijdagmiddag (legende, want waar).
- **Post-launch-monitoring strak 4 weken**. Daarna CWV + errors in ritme.
