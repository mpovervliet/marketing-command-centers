# Nieuwe plugin-skills — integratie-handleiding

Drie nieuwe skills om toe te voegen aan je twee command-centers. Gemaakt op 22-04-2026 in opdracht van het lafugasalento.com UX/CRO-traject, maar generiek-bruikbaar voor elke toekomstige hospitality-klant.

## Wat zit erin

### UX Design Command Center (2 nieuwe skills)

1. **`luxury-villa-rental-ux`** — Core skill voor luxury hospitality UX. Dekt genre-idioom (photography-first, inquiry-first, trust via restraint), multi-property IA, direct-booking CRO-patterns, photography shot-lists, competitive decomposition, copy & voice voor hospitality.

2. **`brand-identity-system`** — Strategisch niveau boven `ux-visual-design` en `ux-design-system`. Merkstrategie, logo-briefing, typography-system, color-system, voice & tone-matrix, brand-guidelines-document, merkarchitectuur. Handoff-pad naar design-system via W3C Design Tokens.

### SEO-GEO Command Center (1 nieuwe skill)

3. **`multilingual-content-architecture`** — Content-zijde van meertaligheid. Complementair aan de bestaande `seo-geo-international` (hreflang/URL-tech). Dekt TMS-keuze (Lokalise, Phrase, Weglot, etc.), content-parity-doctrine, LLM + native-reviewer-workflow, CMS-architectuur voor i18n (Sanity/Contentful/Storyblok/Shopify), translation memory + glossary, launch-plan per markt.

## Integratie-stappen

### Stap 1: drop in je skills-source

Kopieer de folders naar je lokale `skills-source/` directory:

- `ux-design-command-center/luxury-villa-rental-ux/` → `skills-source/ux-design-command-center/skills/luxury-villa-rental-ux/`
- `ux-design-command-center/brand-identity-system/` → `skills-source/ux-design-command-center/skills/brand-identity-system/`
- `seo-geo-command-center/multilingual-content-architecture/` → `skills-source/seo-geo-command-center/skills/multilingual-content-architecture/`

### Stap 2: update plugin-metadata

**`ux-design-command-center/.claude-plugin/plugin.json`** — bump version en update description:

```json
{
  "name": "ux-design-command-center",
  "version": "0.3.0",
  "description": "MP's complete UX Design Command Center — 15 skills (web-only, end-to-end strategie → audit → design → build → launch): setup, UX audit, user research, IA & wireframing, design systems, brand identity systems, accessibility (WCAG 2.2 AA + EAA 2025), content design, visual design productie, luxury hospitality UX, implementation & launch-ops (headless Next.js/Astro), en platform-specifieke dev voor Shopify, Webflow en Framer. Werkt generiek met elke klantmap.",
  "author": { "name": "Maarten Pieter Overvliet" },
  "keywords": [
    "ux", "ux-design", "usability", "accessibility", "wcag", "eaa",
    "user-research", "jtbd", "information-architecture", "wireframing",
    "design-system", "design-tokens", "figma", "ux-writing",
    "content-design", "microcopy", "visual-design", "brand-identity",
    "rebrand", "logo-design", "typography-system", "luxury-hospitality",
    "villa-rental", "boutique-hotel", "implementation", "headless",
    "nextjs", "shopify", "webflow", "framer", "launch-ops"
  ]
}
```

**`ux-design-command-center/README.md`** — voeg toe aan skills-lijst:

```
- `luxury-villa-rental-ux`
- `brand-identity-system`
```

**`seo-geo-command-center/.claude-plugin/plugin.json`** — bump version en update description:

```json
{
  "name": "seo-geo-command-center",
  "version": "0.x.+1",
  "description": "... bestaande beschrijving + multilingual content-architecture ...",
  "keywords": [
    "... bestaande keywords ...",
    "multilingual", "localization", "translation", "tms", "i18n",
    "content-architecture", "lokalise", "phrase", "weglot"
  ]
}
```

Pas de version-bump aan zoals het past in je semver-ritme.

**`seo-geo-command-center/README.md`** — voeg toe aan skills-lijst:

```
- `multilingual-content-architecture`
```

### Stap 3: herbouw en herinstalleer

Draai je `build-plugins.py` en installeer de ververste .plugin files:

```bash
python build-plugins.py
# → produceert ux-design-command-center-0.3.0.plugin
# → produceert seo-geo-command-center-x.x.x.plugin
```

Dan in een Cowork-sessie de nieuwe versies installeren (oude versie eerst deinstalleren indien nodig).

## Directe next-steps voor La Fuga

Met deze drie skills live kun je direct starten met:

1. **`luxury-villa-rental-ux` + `cro-audit`** op lafugasalento.com — combined audit met hospitality-lens + conversion-lens
2. **Competitive decomposition** van Thinking Traveller, Le Collectionist, Plum Guide als benchmark-basis
3. **`brand-identity-system`** — brand-audit om te zien of La Fuga's identity-laag sterk genoeg staat om een nieuwe website te dragen, of dat refresh noodzakelijk is
4. **`multilingual-content-architecture`** — pas relevant als je besluit om vanuit Airbnb-NL te expanderen naar eigen NL/EN/IT-site met TMS

## Skills-samenvatting

| Skill | Plugin | Lines | Primaire trigger |
|---|---|---|---|
| luxury-villa-rental-ux | ux-design-command-center | 222 | Hospitality UX, villa rentals, direct booking CRO |
| brand-identity-system | ux-design-command-center | 260 | Rebrand, brand-refresh, logo-briefing |
| multilingual-content-architecture | seo-geo-command-center | 287 | TMS, translation workflow, content-parity, i18n CMS |

## Schrijfregels gevolgd

Alle drie skills volgen de conventies van de bestaande plugin-skills:
- Nederlands, strategisch-operationeel register
- ~200-290 regels per SKILL.md
- YAML-frontmatter met name + description (de description is "pushy" voor goede triggering)
- Body-structuur: Wanneer activeren → Werkwijze → Kern-kennis → Anti-patterns → Output → Dependencies → Integratie → Tips
- 2026 best practices expliciet benoemd
- Geen em-dash of en-dash
- Geen emoji's

Vragen of tweaks? Laat het weten.
