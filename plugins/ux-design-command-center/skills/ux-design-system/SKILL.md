---
name: ux-design-system
description: >
  Design System specialist (web-only, strategisch/audit-gericht). Gebruik ALTIJD bij vragen over design-systems, component libraries, design tokens, Figma library governance, tokens-naar-code pipelines, Storybook, style guides, component-spec, of bij het evalueren/opzetten van systematisch werken op UX-kant. Trigger bij "design system opzetten", "design tokens", "component library", "Figma library audit", "Storybook", "style dictionary", "tokens naar code", "design system governance", "nieuwe component ontwerpen", "theming", "dark mode", "branding in design system", "design system maturity", "atomic design", "shadcn evaluatie", "component documentatie", "versie management design", of elke vraag over systematisch design. Past 2026 best practices toe (W3C Design Tokens Community Group format, Style Dictionary als default transform, Figma Variables als bron, Dev Mode handoff, atomic design als mental model niet als rigid structuur, shadcn/ui als referentie voor open-source, governance-owner verplicht).
---

# Design System Specialist

Design systems zijn de vermenigvuldiger van elke UX-team. Zonder systeem is elke feature vanaf-nul-werk; met systeem levert dev 2-5× sneller consistent werk. Web-only scope. MP's rol: evalueren, opzetten, governance-advies: niet zelf componenten produceren.

---

## Wanneer activeren

- Klant vraagt "hebben we een design-system nodig?"
- Bestaand design-system audit: is dit nog bruikbaar, wat mist?
- Design tokens opzetten (kleuren, spacing, typography, radii)
- Figma-library-structuur evalueren
- Tokens-naar-code pipeline (Style Dictionary, Tokens Studio)
- Storybook opzetten / beoordelen als component-docs
- Governance-vraag: wie beheert, wie mag wijzigen?
- Nieuwe component ontwerpen (spec, variants, states)
- Theming / dark-mode / multi-brand in één systeem
- Design-system-maturity-assessment
- Migratie-plan (oud systeem → nieuw, of ongestructureerd → systeem)

## Werkwijze

1. **Maturity-assessment** van huidige status:

| Niveau | Kenmerken |
|---|---|
| 0: Geen systeem | Ad-hoc styling, duplicaten, inconsistentie |
| 1: Style guide | Kleuren/fonts gedocumenteerd, geen componenten |
| 2: Component library | Figma-library + code-components, geen tokens |
| 3: Design tokens | Tokens als bron voor Figma + code, beperkte governance |
| 4: Full system | Tokens + components + Storybook + governance + versioning |

2. **Audit-vragen bij bestaand systeem**:
   - Hoeveel componenten vs hoeveel gebruikt in designs?
   - Design/code-sync: wat is bron-of-truth?
   - Governance: wie beslist over wijzigingen?
   - Versioning: hoe breaking changes communiceren?
   - Documentation: is dit vindbaar voor designers + devs?

3. **Token-strategie** (bij nieuw systeem):
   - **Reference tokens** (primitief): color.blue.500, spacing.4
   - **System tokens** (semantisch): color.text.primary, spacing.inset.md
   - **Component tokens** (context): button.bg.default, card.padding
   - Hiërarchie: component → system → reference
   - Format: W3C Design Tokens Community Group JSON

4. **Figma-library-structuur**:
   - **Variables** voor tokens (native Figma support sinds 2023)
   - **Components** per atomisch niveau (atoms → molecules → organisms)
   - **Modes** voor theming (light/dark, brand-variants)
   - **Libraries** separated: foundations / components / patterns / templates
   - Naming-conventies: PascalCase voor componenten, kebab-case voor tokens

5. **Code-pipeline** (advies, niet zelf implementeren):
   - Tokens-bron: Figma Variables (via Tokens Studio) of JSON in repo
   - Transform: Style Dictionary → CSS/SCSS/JS/iOS/Android outputs (wij: alleen CSS/JS)
   - Output-targets: CSS custom properties, Tailwind config, SCSS variables
   - Sync: designer wijzigt Figma → build pipeline → PR naar codebase

6. **Component-documentatie** (Storybook-gedreven):
   - Live voorbeelden
   - Alle variants + states
   - Do's / don'ts
   - Accessibility-notes per component
   - Code-snippet voor dev
   - Link naar Figma-component

7. **Governance-model**:
   - Core-team (ontwerpt, reviewt, versioneert)
   - Contributor-team (mag proposals doen)
   - Consumer-team (gebruikt, feedback)
   - RFC-proces voor nieuwe componenten
   - Versioning semantisch (MAJOR.MINOR.PATCH)

## Kern-kennisgebieden (2026 best practices)

### W3C Design Tokens Community Group (DTCG)

- Standaard JSON-format voor tokens
- Breed ondersteund: Style Dictionary, Tokens Studio, Figma (native)
- Structuur: `{ "$value": "...", "$type": "color" }`
- Interoperabiliteit gegarandeerd tussen tools
- Adopt dit als default in 2026: proprietary formats vermijden

### Atomic design als mental model (niet rigid)

Brad Frost's hiërarchie:
- Atoms (button, input, label)
- Molecules (search-field = input + button)
- Organisms (header = logo + nav + search)
- Templates (abstract page layouts)
- Pages (invulde templates)

In 2026: gebruik als mental model, niet als rigide folder-structuur. Sommige teams werken met "primitives + components + compositions".

### Shadcn/ui als referentie

- Open-source, "copy-into-project" i.p.v. npm-dependency
- Voor React-teams goede referentie voor component-structuur
- Radix UI als headless-component-basis
- Tailwind + CSS variables als styling
- Niet altijd haalbaar voor non-React klanten, maar patterns zijn universeel toepasbaar

### Figma Variables (vs oude style-variables)

- Variables zijn de moderne-bron (sinds 2023)
- Ondersteunen modes (dark/light, brand-variants)
- Sync met code via Tokens Studio + Style Dictionary
- Kleurvariabelen + numeric + string + boolean
- Migrate oude "color styles" naar variables: oude stijlen zijn legacy

### Governance-pitfalls herkennen

- **Design-system team zonder mandaat** → teams maken eigen componenten
- **Geen contribution-proces** → core-team wordt bottleneck
- **Geen versioning** → breaking changes verrassen teams
- **Geen usage-monitoring** → niet weten wat gebruikt wordt
- **Docs ontbreken** → systeem is onvindbaar

### Design-system-metrics

- **Adoption-rate**: % designs dat library-componenten gebruikt (tools: Figma's "library usage")
- **Coverage**: % van componenten met doc + code-equivalent
- **Consistency-drift**: aantal 1-off-designs per periode
- **Dev-velocity**: feature-time voor/na systeem
- **Maintenance-overhead**: % van team-tijd aan systeem

### Theming / multi-brand strategie

- Token-laag beslist theming, niet component-laag
- Light/dark: 2 modes op system-tokens
- Multi-brand: meerdere mode-sets op component-tokens
- Vermijd: conditional logic in componenten ("if brand === X")

### Documentation-standard

- Live Storybook of Backlight-hosted docs
- Per component:
  - Voorbeeld
  - Props-tabel
  - Accessibility-guidance
  - Do's / don'ts met visuals
  - Figma-link
  - Code-snippet
- Search-friendly (veel teams missen dit)

### Migration-strategie (oud → nieuw systeem)

1. **Foundation eerst**: tokens + typography + grid (geen componenten)
2. **High-frequency components**: button, input, card (80% van UI)
3. **Pattern library**: repeated compositions
4. **Templates**: page-level layouts
5. **Deprecation-plan**: oude componenten labelen, timeline voor verwijdering

Niet alles tegelijk migreren: faseer per feature-team.

### Anti-patterns

- Design-system starten zonder audit van bestaande UI
- Alle componenten "perfect" willen vóór release (ship imperfect, itereer)
- Tokens hardcoden in componenten (foundation-level lek)
- Figma-library zonder code-equivalent (alleen-design = nutteloos)
- Geen ownership → stagnatie
- Over-theming (60 modes voor 3 brands)
- Custom wielen uitvinden waar Radix/Headless UI bestaat
- Versioning negeren → breaking changes zonder communicatie

## Output-formaten

### Design System Audit-rapport (docx via `springbok-gdoc`)
1. Maturity-assessment
2. Inventaris huidige assets (Figma + code)
3. Gap-analyse (wat mist, wat dupliceert)
4. Governance-evaluatie
5. Prioriteits-roadmap
6. ROI-estimaat (velocity-winst, consistentie-waarde)

### Token-strategie document
- Hiërarchie (reference → system → component)
- Naming-conventies
- DTCG-JSON-structuur
- Output-targets (CSS vars, Tailwind, iOS/Android indien relevant)
- Sync-pipeline (designer → code)

### Component-spec (per component)
- Doel + gebruiksscenario's
- Anatomie + variants + states
- Tokens gebruikt
- Accessibility-requirements
- Do's / don'ts
- Figma-link + code-reference

### Governance-charter
- Rollen (core/contributor/consumer)
- RFC-proces
- Versioning-strategie
- Contribution-rituelen
- Succes-metrics

### Maturity-roadmap (90/180/365-day)
- Fase 1: foundation (tokens + key components)
- Fase 2: library + docs
- Fase 3: governance + adoption
- Fase 4: optimization + cross-product

## Dependencies

- `drive_tool` / `google_workspace_tool`: deliverables
- `github_tool`: token-repo review (als klant repo-toegang geeft)
- Externe tools: Figma, Tokens Studio, Style Dictionary, Storybook, Backlight

## Integratie met andere skills

- **`ux-specialist`**: router
- **`ux-accessibility`**: WCAG-requirements per component
- **`ux-content-design`**: copy-guidance per component (button-labels, error-microcopy)
- **`ux-audit`**: design-inconsistenties signaleren → systeem-fix
- **`seo-geo-technical`**: component-niveau schema-markup/semantiek waar relevant

## Tips

- **DTCG-format default in 2026**. Proprietary token-formats = later migratie-pijn.
- **Figma Variables > oude styles**. Upgrade waar mogelijk.
- **Governance zonder mandaat = inconsistentie**. Systeem werkt alleen met echte autoriteit.
- **Ship imperfect**. Voll en systeem lanceren = maanden late; itereren vanaf basisversie = weken snellere adoptie.
- **Adoption-metrics tracken**. Library usage meten; zonder meten is systeem onzichtbaar.
- **Shadcn/ui lezen voor patterns**. Open-source referentie, zelfs als je niet React gebruikt.
- **Tokens hiërarchie verplicht**. Flat tokens = chaos bij schaal.
- **Docs naast code, niet er achter**. Live Storybook in CI of developers negeren het.
- **Componenten met toegankelijkheid af**. A11y in component = a11y overal waar component gebruikt.
- **Versioning vóór breaking-changes**. Eerst MAJOR-regels vastleggen, dan pas breaken.
