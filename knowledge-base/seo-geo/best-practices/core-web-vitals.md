# Core Web Vitals — 2026 Implementatiegids

## De drie metrics (2026)

| Metric | Goed | Needs improvement | Poor |
|---|---|---|---|
| **LCP** (Largest Contentful Paint) | < 2.5s | 2.5-4.0s | > 4.0s |
| **INP** (Interaction to Next Paint) — vervanger van FID sinds maart 2024 | < 200ms | 200-500ms | > 500ms |
| **CLS** (Cumulative Layout Shift) | < 0.1 | 0.1-0.25 | > 0.25 |

Drempels worden gemeten op **75e percentiel** van field-data (Chrome UX Report / CrUX). Je moet dus 75% van je pageloads onder de "goed"-drempel hebben.

## Field data vs lab data

- **Field data (CrUX)**: echte Chrome-gebruikers. Dit is wat Google gebruikt voor ranking-signalen. Rolling 28-dagen window.
- **Lab data (Lighthouse)**: gesimuleerd. Handig voor debuggen, maar niet Google's ranking-signaal.

Altijd field-data als eindmeting; lab-data voor causale analyse van waarom iets verbetert of verslechtert.

## LCP optimalisatie

### Oorzaken
- Trage server response (TTFB > 800ms)
- Render-blocking resources (CSS/JS in `<head>`)
- Hero-image niet preloaded
- Laat web-font loading
- Client-side rendering van hero-content

### Fixes
1. **Server response**: CDN (Cloudflare/Fastly/Vercel Edge), caching, DB-query optimization, server-side HTML caching
2. **Image preload**:
   ```html
   <link rel="preload" as="image" href="/hero.webp" fetchpriority="high">
   ```
3. **Image formats**: WebP of AVIF (30-50% kleiner dan JPG), `srcset` voor responsive
4. **Critical CSS inline**, rest async via `<link rel="preload" as="style">`
5. **Font-display**: `font-display: swap` of `optional`, fallback-font dicht bij webfont in metrics
6. **No LCP below the fold**: lazy-loading juist WEL voor below-fold, NIET voor hero

### Doel: LCP < 2.5s op 75% van page-loads

## INP optimalisatie

### Oorzaken
- Lange JavaScript tasks on main thread (> 50ms)
- Heavy event-handlers
- Third-party scripts die main thread blokkeren
- Layout thrashing (forced reflow)
- Onnodige React re-renders

### Fixes
1. **Code-splitting**: `React.lazy`, dynamic imports, route-based splitting
2. **Web Workers** voor heavy computation
3. **Defer non-critical JS**: `<script defer>` of `<script async>`
4. **Third-party audit**: welke scripts vertragen INP? GTM, chat-widgets, tracking
5. **GTM consolidatie**: 1 tag-manager, lazy-load chat, defer analytics
6. **Debounce / throttle** op frequente events (scroll, resize, input)
7. **requestIdleCallback** voor low-priority work
8. **React-specifiek**: useMemo, useCallback, React.memo waar re-renders duur zijn

### Doel: INP < 200ms op 75%

## CLS optimalisatie

### Oorzaken
- Images zonder dimensies (dan wordt ruimte pas gereserveerd na load)
- Ads, embeds, iframes zonder gereserveerde ruimte
- Web-fonts met grote metric-verschillen van fallback
- Dynamische content-injectie boven bestaande content (banners)
- CSS-animations op `top`/`left`/`width`/`height`

### Fixes
1. **Image `width` + `height`** (of aspect-ratio CSS): altijd
2. **Ad-slots** met `min-height` reserveren
3. **Embeds** (YouTube, Twitter) met wrapper + aspect-ratio
4. **Font-loading**: `size-adjust`, `ascent-override`, `descent-override`, `line-gap-override` voor webfont
5. **Banners / cookie-prompts**: onder bestaande content of modal-style (overlay, niet push)
6. **Animations**: gebruik `transform` en `opacity` — die triggeren geen layout

### Doel: CLS < 0.1 op 75%

## Meet-workflow

1. **GSC > Core Web Vitals** — field-data per URL-groep (mobile + desktop)
2. **PageSpeed Insights / CrUX Dashboard** — field + lab per specifieke URL
3. **Lab-debug** via Lighthouse / Chrome DevTools Performance tab
4. Identificeer probleem-templates (niet per URL, maar per template-type)
5. Fix op template-niveau
6. Wacht 28 dagen voor nieuwe CrUX-data
7. Verify: GSC + PSI tonen verbetering

## CWV als ranking signal

- CWV is een **drempel**, niet een groeifactor. Onder drempel = nadeel. Bovengemiddeld = geen voordeel boven drempelniveau.
- Valt onder "Page Experience" ranking-system.
- Effect vooral zichtbaar bij **concurrerende queries** (waar veel sites gelijk scoren op andere signalen).
- Voor competitive niches: CWV-niveau hanteren als hygiënefactor.

## Mobile first

Google indexeert mobile-first. Test altijd mobile. Desktop-CWV is niet voldoende.

## Quick-win sjabloon

Voor alle klanten, bij onboarding:
- [ ] Hero-image preload
- [ ] WebP/AVIF voor alle images
- [ ] Width + height op alle `<img>`
- [ ] Cookie-banner: overlay-style, geen push
- [ ] GTM tags: alleen essentials sync laden, rest event-triggered
- [ ] Font-display: swap + metric-matched fallback
- [ ] Third-party scripts: audit top 10, verwijderen wat kan
- [ ] Critical CSS: inline voor above-fold

Typisch resultaat: LCP -1.5s, INP -150ms, CLS -0.15 binnen 4 weken.

## Referenties

- [web.dev / Core Web Vitals](https://web.dev/articles/vitals)
- [Google Search Central — Page Experience](https://developers.google.com/search/docs/appearance/page-experience)
- [Chrome UX Report docs](https://developer.chrome.com/docs/crux/)
- Patrick Stox (Ahrefs) — CWV blog series
