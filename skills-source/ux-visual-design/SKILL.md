---
name: ux-visual-design
description: >
  Visual design production specialist (web-only, high-fidelity Figma). Gebruik ALTIJD bij productie-niveau visueel design: brand execution, high-fi mockups, responsive design (mobile + tablet + desktop), prototyping, motion design, art-direction, visuele hiërarchie, kleurcompositie, typography-systemen, spacing & grid. Trigger bij "high-fi ontwerp", "productie design", "Figma mockup", "visueel ontwerp", "visual design", "brand execution", "mockup hero", "pdp design", "plp design", "interactief prototype", "motion design", "hover states", "micro-interacties", "art direction", "moodboard", "design exploration", "responsive variants", of elke vraag om van wireframe naar productie-klaar visueel design. Past 2026 best practices toe (mobile-first, design tokens, auto-layout, Variables voor theming, Dev Mode-ready, subtle micro-interactions, accessibility-first, WCAG-compliant motion).
---

# Visual Design Production Specialist

Wanneer wireframes staan en strategie is goedgekeurd, vertaal je naar productie-klaar visueel design: mobile + tablet + desktop, alle states, prototype-flows, motion-spec. Web-only. Output = Figma-file gereed voor dev-handoff.

---

## Wanneer activeren

- Wireframes van `ux-ia-wireframing` zijn goedgekeurd → visueel uitwerken
- Brand-stijl op nieuwe templates toepassen
- Hero-section / PDP / PLP / checkout-visueel ontwerp
- Responsive-varianten (mobile-first + breakpoints)
- Interactive prototype bouwen (voor stakeholder-presentatie of usability-test)
- Motion design + micro-interactions spec
- Art direction (fotografie-stijl, illustratie, icon-set)
- Hover / focus / active / disabled / loading-states per component
- Dark-mode / multi-brand variants uitwerken

## Werkwijze

### 1. Kick-off per template

Voor elk scherm:
1. Wireframe + content als basis
2. Design-system-tokens als bron (kleur, typo, spacing, radius)
3. Brand-guidelines (logo, voice via kleur/fotografie/illustratie)
4. Mobile-first design (320px → 768px → 1024px → 1440px)
5. Alle interactive states
6. Accessibility-check (contrast + focus + touch-target)

### 2. Figma-file-structuur (production-ready)

```
Project cover
Foundations (tokens referentie)
Components (library-referentie, niet opnieuw bouwen)
Pages
  ├── Desktop
  │   ├── Home
  │   ├── Category
  │   ├── Product
  │   ├── Cart
  │   ├── Checkout
  │   └── Account
  ├── Tablet
  ├── Mobile
Prototype flows
Motion spec
Notes & handoff
```

### 3. Per scherm verplicht

- **3 breakpoints minimum**: mobile (375), tablet (768), desktop (1440)
- **Auto-layout overal** (hand-positionering = tech-debt)
- **Variables** voor alle design-decisions (niet hardcoded)
- **Component-instances** (niet copy-paste)
- **States variants** per interactive element
- **Contrast-check** in Figma-plugin
- **Dev Mode-annotaties** (specs, interacties, conditions)

### 4. Prototyping (interactieve flows)

- Voor stakeholder-presentatie: happy-path-flow
- Voor usability-test: inclusief errors + alternatieve paden
- Gebruik Smart Animate waar zinvol
- Motion-timings consistent (<300ms voor micro, <600ms voor transitions)
- Accessibility: `prefers-reduced-motion`-fallback in spec

### 5. Motion design-spec

- Easing-curves (ease-in-out default, ease-out voor enter, ease-in voor exit)
- Duration: 100-200ms micro, 300-500ms transitions, 600-800ms narrative
- Motion-hiërarchie: primary (user-action-feedback) > secondary (ambient)
- Geen auto-play motion zonder user-intent
- `prefers-reduced-motion` alternatief expliciet gespecificeerd

### 6. Handoff-paraatheid

- Dev Mode aan
- Alle componenten library-instances
- Variables voor alle tokens
- Annotaties per non-obvious interactie
- Export-settings voor assets (SVG voor iconen, WebP/AVIF voor images)
- Responsive-gedrag-regels documented (stretch, fill, hug)

## Kern-kennisgebieden (2026 best practices)

### Figma 2026-stack

- **Variables** (native since 2023): color / number / string / boolean, met modes
- **Auto-layout** alles: responsive-gedrag voorspelbaar
- **Dev Mode**: Figma-abonnement vereist voor dev; specs + code-snippets + design-to-code
- **Figma AI** (First Draft, Make Designs): first-pass exploratie, altijd human-edit
- **Components + variants**: geen instance-overrides tenzij design-system het ondersteunt
- **Plugins essentials**: Contrast, Able (a11y), Variables2CSS, Figma-to-HTML, Iconify

### Responsive-design discipline 2026

- Mobile-first + progressive enhancement
- Breakpoints: 375 / 768 / 1024 / 1440 / 1920 (niet elke device, maar content-breakpoints)
- Container queries (CSS 2026) > media queries voor componenten
- Fluid typography (clamp() in CSS, in Figma via Variables formulas)
- Touch-target minimum 44×44 op mobile (WCAG 2.5.8: 24 min, 44 comfort)

### Visuele hiërarchie (P.A.R.C. framework)

- **Proximity**: groepeer gerelateerde elementen
- **Alignment**: consistente uitlijning
- **Repetition**: herhaling van visuele patronen
- **Contrast**: primary vs secondary vs tertiary onderscheid

### Typography-systemen

- Type-scale: 1.2 (minor third) tot 1.333 (perfect fourth) ratio
- Body: 16px minimum mobile, 18px optimaal desktop
- Line-height: 1.5 body, 1.2 headings
- Line-length: 45-75 karakters voor leesbaarheid
- Max 2 font-families per site (1 hoofd + 1 accent)

### Color-discipline

- 60/30/10-regel (primary 60%, secondary 30%, accent 10%)
- Semantisch tokens (color.text.primary, niet color.gray.900)
- Dark-mode vanaf dag 1 ontworpen, niet achteraf
- WCAG contrast: text 4.5:1, UI-elements 3:1
- APCA komt in WCAG 3.0: nu AA-ratio's houden

### Motion-design-principles

- **Functional motion** (feedback + orientation) > decoratief
- **Easing** communiceert karakter: natural-ease voor merk-feel
- **Staging**: zichtbaarheid van volgorde (eerst hero, dan content, dan CTA)
- **Spatial continuity**: transitions vertellen waar je heen gaat
- **Respect reduced-motion**: alternatieve fade/direct-cut

### Accessibility tijdens visueel design

- Contrast-check in-tool (niet in review)
- Focus-indicator spec per interactive element
- Niet alleen op kleur (iconen + tekst + patroon)
- Text-over-image: overlay of container
- Minimum touch-target
- Heading-hiërarchie logisch (labels in Figma spiegelen H1/H2/H3)

### Anti-patterns

- Hand-positionering zonder auto-layout
- Hardcoded hex-codes i.p.v. variables
- Instance-detach zonder reden
- Components in project-file i.p.v. library
- Alleen desktop-design (mobile as afterthought)
- Prototype zonder reduced-motion-variant
- Dev-handoff met onduidelijke export-settings
- Brand-treatment die accessibility breekt (low-contrast in naam van "style")
- Custom animations die platformconventies negeren

### AI in visual design-workflow (2026)

- **First Draft / Make Designs**: quick ideation + boilerplate
- **Vizcom / Krea**: visual exploration + moodboards
- **Runway / Kling**: motion-concepts
- **Replace Color / Relight**: image-treatment
- Altijd: human-edit = non-negotiable; AI-output = starting-point

## Output-formaat

### Productie-klaar Figma-file
- Alle templates × alle breakpoints
- Alle states per component
- Prototype met flow-logica
- Motion-spec sheet
- Handoff-notes
- Ready for Dev Mode

### Design-review-deck (pptx via `springbok-slideshow`)
- 10-15 key screens voor stakeholder-review
- Before/after (als redesign)
- Rationale per design-keuze
- Motion-flow-highlights

### Visual design-system uitbreiding
- Nieuwe componenten toevoegen aan library (→ `ux-design-system`)
- Tokens die nog ontbreken
- Documentation per component

### Motion-spec document (docx via `springbok-gdoc`)
- Per animation: trigger, duration, easing, property, reduced-motion-alt
- Dev-ready instructies (CSS/JS voorbeelden)

## Dependencies

- `drive_tool`: Figma-file-links + specs
- `kie_tool`: hero-imagery, placeholder-visuals, moodboard-assets
- Extern: Figma (licentie klant of MP), FigJam (optional), plugins (Contrast, Able, Variables2CSS)

## Integratie met andere skills

- **`ux-specialist`**: router
- **`ux-ia-wireframing`**: input = wireframes + flows
- **`ux-design-system`**: bron = tokens + components; output = nieuwe componenten terug
- **`ux-accessibility`**: contrast + focus + touch-target verification
- **`ux-content-design`**: echte copy in design (niet lorem)
- **`ux-implementation`**: handoff → dev
- **`ux-shopify-dev` / `ux-webflow-dev` / `ux-framer-dev`**: platform-specifieke uitwerking

## Tips

- **Mobile-first altijd**. Desktop is makkelijker op te hogen dan mobile op te schrappen.
- **Auto-layout overal**. Hand-positie = tech-debt die dev overneemt.
- **Variables > hardcoded**. Themable + onderhoudbaar.
- **Components uit library, niet lokaal**. Library-changes propagate overall.
- **Real content, geen lorem**. Design breekt onder echte copy; beter nu zien dan in dev.
- **Alle states design**. Hover/focus/active/disabled/loading/error: alles op papier.
- **Prototype voor beslissingen**. Statisch design is 60%; prototype voelt de keuze.
- **Motion-spec expliciet**. Dev raadt nooit timings goed; schrijf ze op.
- **A11y tijdens design**. Contrast-issue in review = herontwerp; in design-tool = fix direct.
- **Dev Mode aan**. Dev-handoff zonder Dev Mode = raden.
