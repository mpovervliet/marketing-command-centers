---
name: cro-implementation
description: >
  CRO experiment & personalization implementation specialist (technische uitvoering van tests). Gebruik ALTIJD bij bouwen/coderen/QA'en van experimenten op een live site: VWO/Convert/AB Tasty/Optimizely custom code, client-side variant-builds, server-side testing, feature flags, personalization-rules, GTM/dataLayer-spec, tracking-QA, anti-flicker setup, of experiment-QA. Trigger bij "experiment bouwen", "variant coderen", "VWO custom code", "AB Tasty code", "Convert variant", "Optimizely implementation", "server-side test", "feature flag", "LaunchDarkly", "Statsig", "Unleash", "personalization engine", "GTM dataLayer voor test", "anti-flicker", "experiment QA", "tracking QA", "split URL test", of elke technische uitvoering van CRO-test. Past 2026 best practices toe (client-side voor UI-changes, server-side voor logica/pricing, feature flags voor safe-rollouts, anti-flicker verplicht, QA-checklist vóór live, dataLayer-consistent, Consent Mode v2 respect).
---

# CRO Implementation Specialist

Experimenten ontwerp je in `cro-experimentation`; hier **bouw** je ze: client-side variant-code, server-side test-infrastructuur, feature flags, personalization-rules, tracking-setup, en QA. Zonder goede implementatie verliest elk experiment 30-50% van zijn signaal door tracking-issues, flicker, of QA-bugs.

---

## Wanneer activeren

- Variant-code schrijven voor client-side test (VWO/AB Tasty/Convert/Optimizely)
- Server-side test opzetten (pricing, logica, checkout-flows)
- Feature flag-infrastructuur (LaunchDarkly/Statsig/Unleash)
- Personalization-engine configureren (Dynamic Yield, Bloomreach, Insider, Algolia)
- GTM/dataLayer-spec voor experiment-events
- Anti-flicker-snippet installeren/checken
- Experiment-QA vóór live (cross-browser/-device)
- Tracking-validatie (fires event in alle varianten correct?)
- Segment/audience-definities in tool
- Consent-mode integratie (niet testen op users die consent weigerden)

## Werkwijze

### 1. Tool-keuze-framework

| Type test | Beste tool-categorie |
|---|---|
| UI-change client-side (knop, layout, copy) | VWO / Convert / AB Tasty |
| Logic + pricing server-side | Optimizely Full Stack / Statsig / Split.io |
| Feature rollout | LaunchDarkly / Statsig / Unleash |
| Personalization (1:1) | Dynamic Yield / Bloomreach / Insider |
| Search-ranking | Algolia AI / Coveo |
| Platform-native | Shopify Experiments / Optimize-successors |

### 2. Client-side implementatie (VWO/AB Tasty/Convert-style)

**Pre-launch checklist**:
- Anti-flicker snippet in `<head>` vóór alle andere scripts
- Snippet `async` vs `sync` begrijpen (sync = veiliger, geen flicker; async = betere CWV)
- CSP (Content Security Policy) compatible
- Consent-mode integratie (pre-consent = no-test tenzij legitimate)

**Variant-code**:
```javascript
// Wacht op DOM-element (veilige mutation)
utils.waitForElement('.hero-cta', (el) => {
  el.textContent = 'Start gratis proef';
  el.classList.add('variant-b');
});
```

Best practices:
- `utils.waitForElement` (of tool-equivalent) tegen race-conditions
- Nooit directe `document.querySelector` zonder wait
- Idempotent code (meerdere triggers = geen dubbele wijziging)
- CSS-scoping via specifieke selectors
- Clean-up-logica niet nodig (tool herlaadt op reset)
- Variant-specifieke klassen voor tracking + styling

**Event-firing naar dataLayer**:
```javascript
dataLayer.push({
  event: 'cro_experiment',
  experiment_id: 'EXP-042',
  variant: 'B',
  experiment_name: 'hero-cta-copy'
});
```

### 3. Server-side testing (Optimizely Full Stack, Statsig, Split.io)

Wanneer server-side:
- Pricing-tests (client-side = race-condition-hel)
- API-response-wijzigingen
- Recommendation-algoritmes
- Checkout-flow-logica
- Search-ranking
- Personalization-rules

Flow:
1. Feature-flag + experiment-config in tool
2. SDK in backend (Node/Python/Ruby/Go/Java)
3. `getVariation(userId, experimentKey)` calls
4. Variant-logic in code
5. Event-tracking (conversion) via zelfde SDK
6. Statistical-analysis in tool-dashboard

### 4. Feature flags (safe rollouts)

**LaunchDarkly / Statsig / Unleash**:
- Flag-per-feature
- Targeting-rules (% rollout, user-attributes, environments)
- Kill-switch voor instant rollback
- Combineer met experiment (flag-based A/B)
- SDK in backend + frontend

**Progressive rollout-pattern**:
1. 1% (canary, 24h monitor)
2. 5% (24h)
3. 25% (24h)
4. 50% (24h)
5. 100% (full)

Stop bij elke stap als errors > baseline.

### 5. Personalization-implementatie

- **Audience-definities** in tool (new vs returning, high-AOV, geo, etc.)
- **Rules** per audience (toon variant X, skip Y)
- **Recommendations** op algoritme (collaborative, content-based, trending)
- **A/B binnen personalization** (test algoritme-keuze zelf)
- **CWV-impact** monitoren (personalization-engines zijn vaak traag)
- **Consent-mode** respect

### 6. GTM/dataLayer voor experimenten

**Schema** (vast per klant):
```javascript
{
  event: 'cro_experiment',
  experiment_id: string,
  experiment_name: string,
  variant: string,  // 'A', 'B', 'control'
  user_id: string,  // indien beschikbaar
  timestamp: ISO8601
}
```

**GA4-integratie**:
- Custom dimension: `experiment_id`
- Custom dimension: `variant`
- Custom events voor micro-conversies binnen experiment

**Consent-mode v2 integratie**:
- Experiment-participation alleen bij `analytics_consent=granted`
- Fallback: geen tracking, maar variant wel tonen (mits geen personal data)

### 7. Anti-flicker (verplicht client-side)

Zonder anti-flicker: user ziet 200ms de controle-versie, dan wijzigt naar variant → wipe-effect = slechte UX + variant-data-vervuiling.

**Standaard pattern** (VWO/Convert/AB Tasty):
```html
<style>body { opacity: 0 !important; }</style>
<script>
  setTimeout(function() {
    document.body.style.opacity = '1';
  }, 4000); // fallback na 4s
</script>
<!-- Experiment-tool snippet komt hierna en verwijdert opacity na render -->
```

Tool-specifiek: Google Optimize-stijl snippet is standaard. Controleer documentation per tool.

### 8. Experiment-QA-checklist (vóór live)

**Functional**:
- [ ] Variant rendert correct (alle browsers: Chrome/Safari/Firefox/Edge)
- [ ] Mobile + tablet + desktop
- [ ] Variant-klasse aanwezig (voor CSS)
- [ ] Geen console-errors
- [ ] Geen flicker (anti-flicker werkt)
- [ ] Idempotent (refresh = zelfde variant, niet random)
- [ ] Goals-events fire (dataLayer + tool-dashboard)
- [ ] Conversie-tracking fires
- [ ] Cross-device consistent (sticky variant-assignment)

**Non-functional**:
- [ ] CWV-impact <5% regression
- [ ] Accessibility niet verslechterd
- [ ] Consent-mode respected
- [ ] Fallback bij JS-fail (niet kapotte pagina)

### 9. Experiment-monitoring live

- Dag 1: real-time check dashboard (fires vs expected)
- Dag 2-3: sanity-check (resultaten zien uit zoals verwacht?)
- Wekelijks: tussenstand zonder beslissen (bij sequential: wel peeks)
- Bij extreme daling: kill-switch + rootcause

## Kern-kennisgebieden (2026 best practices)

### Client-side tool-landschap 2026

- **VWO**: solide all-rounder, SaaS, Bayesian-engine
- **AB Tasty**: enterprise, Europees, personalisatie-strong
- **Convert**: privacy-first, GDPR-friendly, minder vendor-lock
- **Optimizely Web**: enterprise, duur, krachtig
- **Kameleoon**: AI-first
- Google Optimize gedowned sept 2023 → VWO/Convert-migratie courant

### Server-side + feature flag-landschap

- **Optimizely Full Stack**: enterprise server-side
- **Statsig**: modern, gratis-tier, Bayesian, feature flags + experiments
- **Split.io**: enterprise, feature-flag-primary
- **LaunchDarkly**: feature flags + experimentation, enterprise
- **GrowthBook**: open-source alternatief, self-host
- **Unleash**: open-source feature flags
- **PostHog**: open-source, feature flags + product-analytics

### Personalization-engine 2026

- **Dynamic Yield** (McDonald's): enterprise e-com
- **Bloomreach**: content + commerce personalization
- **Insider**: cross-channel
- **Algolia AI**: search + recommendations
- **Klaviyo**: email-driven onsite personalization
- **Nosto**: e-com focus

### Privacy + consent (2026 cruciaal)

- **GDPR + DMA + ePrivacy** in EU: experimenten mogen niet zonder consent tracken
- **Consent Mode v2** (Google): expliciet + modeled data
- **First-party tracking** via eigen subdomain
- **Server-side GTM**: privacy + performance
- **Pseudonimisering** van user-IDs
- **Data retention-policies** in tool-settings

### Anti-patterns

- Client-side test zonder anti-flicker → variant-data-vervuiling
- Race-conditions (direct `querySelector` zonder wait)
- Variant-code die global state-muteert (conflicts met andere tests)
- Niet-idempotent code (dubbele triggers)
- Server-side test zonder proper SDK → inconsistente assignments
- GTM-events firend vóór variant-render → wrong attribution
- CWV-regressie-pijp door experiment-snippet
- Geen kill-switch → big-release rollback-pijn
- Experiment + personalization overlap zonder segmentation → noise in data
- Consent negeren → legal exposure
- QA skippen voor "het is maar een knop" (elke test krijgt QA)
- Multi-variant op zelfde pagina zonder orthogonality → interactie-effecten

### Tracking-pitfalls

- Event fires voor variant-render → attribuut wordt aan controle toegeschreven
- Event fires meerdere keren → inflated conversions
- Event fires niet in alle varianten → scheve data
- Consent blokkeert fire → incomplete data
- GA4 sampling bij high-volume → statistische power verlies

### QA-tools

- **Browser-extensies**: VWO Assistant, AB Tasty Preview, Convert Preview
- **GTM Preview**: dataLayer-validatie
- **Chrome DevTools**: Network + Console + Performance
- **BrowserStack / LambdaTest**: cross-device
- **axe DevTools**: a11y-regression-check

## Output-formaat

Compact skelet implementatie-ticket, voor dev-overdracht:

| Veld | Inhoud |
|---|---|
| ID + hypothese | uit cro-experimentation |
| Tool-keuze | met reden |
| Variant-code | pseudo-code of snippet |
| Targeting + goals | audiences, pages, devices, dataLayer-spec |
| QA-plan + kill-switch | browsers/devices, rollback-trigger |

### Overige deliverable-skeletten

### Implementation-spec (per experiment)
1. Experiment-ID + hypothese
2. Tool-keuze + why
3. Variant-code (client-side pseudo-code of snippet)
4. Targeting (audiences, pages, devices)
5. Goals (primary + secondary) met dataLayer-spec
6. QA-plan (browsers, devices, scenarios)
7. Kill-switch-criteria
8. Monitoring-plan

### Variant-code-library
- Gestructureerd per experiment-ID
- Git-repo voor versionering
- Snippets + helpers (waitForElement, cookie-helpers, etc.)
- Shared utilities

### Experiment-QA-rapport
- Checklist-status per item
- Screenshots per browser/device
- Console-errors (als die er zijn)
- Performance-impact (voor/na CWV)
- A11y-regression-check
- Go/no-go-advies

### DataLayer-schema-document
- Events per experiment-type
- Mandatory properties
- GA4/server-GTM-integratie
- Consent-mode-handling

## Dependencies

- `github_tool`: variant-code-repo
- `pagespeed_tool`: CWV-impact-check
- `ga4_tool`: tracking-validatie
- `drive_tool`: specs + rapporten
- Extern: VWO, Convert, AB Tasty, Optimizely, Statsig, GrowthBook, LaunchDarkly, GTM, Chrome DevTools, BrowserStack

## Integratie met andere skills

- **`cro-specialist`**: router
- **`cro-experimentation`**: ontwerp input → hier implementatie
- **`cro-checkout`** / **`cro-landing-page`**: use-cases waar deze implementatie aan diensten
- **`cro-user-research`**: personalization-audiences uit research
- **`ux-implementation`**: coordinate launch-ops + performance-budget
- **`ux-shopify-dev`** / **`ux-webflow-dev`** / **`ux-framer-dev`**: platform-specifieke integratie-paden
- **`seo-geo-technical`**: cross-cutting (canonicals, redirects bij split-URL)

## Tips

- **Anti-flicker verplicht**. Zonder = data-vervuiling en slechte UX.
- **`waitForElement` always**. Direct DOM-manipulatie zonder wait = race-condition.
- **Idempotent code**. Dubbele triggers zijn realiteit; code moet niet 2x muteren.
- **DataLayer-spec per klant**. Consistent schema = betrouwbare analyse.
- **Consent-mode integratie vanaf dag 1**. Retrofit is pijnlijk.
- **QA verplicht voor elke test**. "Kleine change" bestaat niet.
- **Kill-switch altijd**. Rollback zonder deploy = levenredder.
- **Server-side voor logica, client-side voor UI**. Kiez goed.
- **Feature flags scheiden release van experiment**. Veiligere deploys.
- **CWV-impact monitoren**. Experiment-snippet is vaak CWV-killer.
- **Tool-vendor-lock minimaliseren**. Code-portabiliteit houden.
- **Personalisatie + experiment apart**. Samenvoegen = noise.
