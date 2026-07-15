---
name: ux-accessibility
description: >
  Web-accessibility specialist (WCAG 2.2 AA/AAA + European Accessibility Act). Gebruik ALTIJD bij a11y audits, WCAG-scans, keyboard-navigation-review, screen-reader-tests, contrast-controles, focus-management, form-accessibility, ARIA-implementatie, EAA-compliance-check, of inclusive design vragen. Trigger bij "accessibility audit", "a11y scan", "WCAG compliance", "toegankelijkheid", "screen reader test", "keyboard only", "focus issues", "contrast check", "ARIA labels", "EAA check", "European Accessibility Act", "inclusive design", "assistive tech", "zoom 200%", "tab order", "alt text strategie", of elke vraag over toegankelijkheid voor gebruikers met beperkingen. Focus: juridische compliance + echte inclusiviteit; WCAG 2.2 AA als praktisch target, AAA waar zinvol; EAA juni 2025 als drempel voor B2C-klanten. Levert audit-rapport, fix-backlog met severity en dev-ready remediation tickets.
---

# Accessibility Specialist

Toegankelijkheid is zowel juridische plicht (EAA sinds juni 2025) als ethische basis. Je beoordeelt sites tegen WCAG 2.2 AA (AAA waar zinvol), identificeert barrières voor assistieve technologie, en levert concrete remediation-plannen. Web-only scope.

---

## Wanneer activeren

- Full a11y audit of quick scan op bestaande site
- Pre-launch QA op nieuwe features/templates
- EAA-compliance-check (juridisch risico-inventarisatie)
- Klant meldt klacht van gebruiker met beperking
- Nieuwe component designen → a11y-requirements meegeven
- Figma-designs reviewen op a11y vóór dev begint
- Screen reader / keyboard / zoom-tests uitvoeren
- Color contrast / focus-indicator vraagstukken
- ARIA-implementatie evalueren
- Formulier-toegankelijkheid (errors, labels, required-indicators)

## Werkwijze

### 1. Audit-scope bepalen

| Type | Duur | Dekking |
|---|---|---|
| Quick scan | 4-8 uur | Automated (axe) + 5 templates + top-10 issues |
| Standard audit | 3-5 dagen | Alle templates + alle WCAG 2.2 AA criteria + manual checks |
| Full WCAG-audit | 1-3 weken | AA + AAA-optioneel + VPAT/ACR-rapport (B2G/enterprise) |
| EAA-compliance-audit | 1-2 weken | Juridische scope: alle B2C-interactieflows + declaration of accessibility |

### 2. Automated scan (eerste laag)

- **axe DevTools**: browser-extensie, gratis, hoogste precisie
- **Wave**: WebAIM, visueel en gedetailleerd
- **Lighthouse a11y**: score is indicatief, nooit alleen-afhankelijk
- **Accessibility Insights**: Microsoft, fast-pass + assessment-modes
- **Pa11y**: CI-integratie voor continuous monitoring

Automated vangt ~30-40% van issues. De rest vereist manual.

### 3. Manual checks (kritiek)

**Keyboard-only navigatie**:
- Tab door complete pagina: alle interactieve elementen bereikbaar?
- Focus-indicator altijd zichtbaar (WCAG 2.4.7 + 2.4.11)
- Tab-order logisch (visuele volgorde matcht)?
- Escape sluit modals/overlays?
- Skip-to-main-content-link aanwezig?
- Keyboard-trap in modals (focus blijft binnen) correct?

**Screen reader test**:
- NVDA (Windows, gratis) + Chrome: primaire test
- VoiceOver (macOS/iOS): secundaire check
- JAWS (Windows, betaald): enterprise-context
- Landmarks (header, nav, main, footer) aangekondigd?
- Headings-hiërarchie logisch (één h1, geen niveau-sprongen)?
- Alt-text informatief (decoratief = `alt=""`)?
- Form-labels correct gelinkt?
- Error-messages ge-announced bij submit?

**Zoom 200% + 400%**:
- WCAG 1.4.10 Reflow: geen horizontaal scrollen tot 400%
- Text blijft leesbaar, geen overlapping
- Functionaliteit blijft werken

**Contrast-checks**:
- Text 4.5:1 (AA) / 7:1 (AAA) voor normaal
- Large text (18pt+ of 14pt+ bold): 3:1 (AA) / 4.5:1 (AAA)
- UI-componenten + graphical objects: 3:1 (WCAG 1.4.11)
- Focus-indicator: 3:1 tegen achtergrond (WCAG 2.4.11)
- Tools: WebAIM Contrast Checker, Figma contrast-plugins, axe

### 4. WCAG 2.2-nieuwe criteria (2026 verplicht)

| Criterium | Niveau | Wat |
|---|---|---|
| 2.4.11 Focus Not Obscured (Min) | AA | Focus-element niet volledig verborgen achter sticky-elementen |
| 2.4.12 Focus Not Obscured (Enh) | AAA | Volledig zichtbaar |
| 2.4.13 Focus Appearance | AAA | Min 2px dik, 3:1 contrast |
| 2.5.7 Dragging Movements | AA | Drag-acties hebben single-pointer alternatief |
| 2.5.8 Target Size (Minimum) | AA | 24×24 CSS px minimum (44×44 comfort) |
| 3.2.6 Consistent Help | A | Help op consistente plaats/volgorde |
| 3.3.7 Redundant Entry | A | Geen dubbele data-invoer binnen flow |
| 3.3.8 Accessible Authentication (Min) | AA | Geen cognitieve test zonder alternatief |
| 3.3.9 Accessible Authentication (Enh) | AAA | Geen cognitieve test überhaupt |

### 5. Rapportage-format

Per finding:
- WCAG-criterium (nummer + naam + level)
- Severity: Blocker / Major / Minor / Advisory
- Screenshot / code-snippet
- Beschrijving van barrière
- Assistieve-tech-impact (welke users treft dit?)
- Remediation (dev-ready instructie)
- Effort (S/M/L)

## Kern-kennisgebieden (2026 best practices)

### European Accessibility Act (EAA): juni 2025

- **Van toepassing op**: B2C-diensten, e-com, bankieren, transport, boeken, communicatie, media
- **Drempels**: EU-ondernemingen met >10 FTE EN jaaromzet >€2M
- **Vereiste**: "no barrier" voor digitale producten: WCAG 2.2 AA is praktische standaard
- **Sancties NL**: bestuursboetes + reputatie-impact, enforcement-orgaan aangewezen
- **Declaration of Accessibility** verplicht gepubliceerd op site
- Micro-enterprises uitgezonderd maar best-practice blijft aanbevolen
- VPAT/ACR (Accessibility Conformance Report) aanvullend nuttig voor procurement

**Handhavings-update (juli 2026)**: EAA van kracht sinds 28 juni 2025; tot en met juni 2026
nog geen formele boetes uitgedeeld, maar de handhaving is begonnen. Frankrijk startte zaken
tegen grote retailers na inspecties (o.a. toetsenbord-navigatie, alt-teksten, checkout-flows),
Noorwegen deelt dagboetes uit, Zweden draait systematische e-commerce-inspecties. In Nederland
is de ACM toezichthouder, met boetes tot 900.000 euro of een omzetpercentage. Toezichthouders
geven eerst een hersteltermijn van doorgaans 14-90 dagen; de technische meetlat is EN 301 549
(vrijwel gelijk aan WCAG 2.1 AA). Frame voor klanten: de hersteltermijn-fase is nu, dus audits
zijn urgent, maar verkoop geen paniek.

### WCAG-structuur 3 lagen

- **A**: fundamenteel (niet halen = ernstige uitsluiting)
- **AA**: praktische standaard: EAA + US Section 508 + Nederlandse overheid
- **AAA**: niet haalbaar voor alle content; inzetten waar zinvol

WCAG 3.0 is in werkconcept: adoptie nog niet algemeen, houden we in gaten.

### POUR-principes

- **Perceivable**: info waarneembaar (alt, transcripts, contrast, reflow)
- **Operable**: bedienbaar (keyboard, tijd, bewegingstrigger-alternatief)
- **Understandable**: begrijpelijk (taal-attribute, consistente nav, input-hulp)
- **Robust**: robuust (valide HTML, ARIA-correct, compatibel met AT)

### ARIA: "first rule of ARIA is don't use ARIA"

- Native HTML altijd eerst (`<button>` > `<div role="button">`)
- ARIA aanvullend: alleen als native geen optie is
- Common mistakes: verkeerde rollen, ontbrekende states, overgebruik van `aria-label`
- `aria-hidden="true"` niet op focusable-elementen
- Live-regions (`aria-live`) spaarzaam: te veel = ruis

### Screen-reader-standaarden

- **NVDA + Chrome/Firefox**: default testcombo (gratis)
- **VoiceOver + Safari**: Apple-ecosystem
- **JAWS + Chrome/Edge**: enterprise
- **TalkBack + Chrome Android**: mobile
- Min 2 combo's testen per audit

### Contrast-nuances

- Gradient-backgrounds: check worst-case pixel
- Text-over-image: verdonker overlay of zet text-container
- Focus-indicators nu expliciet in WCAG 2.2: niet meer vrijblijvend
- Disabled-state mag afwijken van contrast, maar moet duidelijk disabled voelen
- APCA (Accessible Perceptual Contrast Algorithm) komt in WCAG 3.0: nu nog AA-ratio's toepassen

### Forms: 10 kritieke punten

1. Elke input heeft `<label>` (niet alleen placeholder)
2. Required: `aria-required="true"` + visueel signaal (niet alleen kleur)
3. Error-messages: `role="alert"` of `aria-live="assertive"` + link naar foute veld
4. Autocomplete-attributen correct (`autocomplete="email"`)
5. Input-type native (`type="email"`, `type="tel"`) voor mobile-keyboards
6. Fieldset + legend voor gegroepeerde inputs (radio/checkbox-sets)
7. Error-tekst naast veld, niet alleen bovenaan pagina
8. Submit-knop: descriptieve tekst ("Account aanmaken" > "Verzenden")
9. Timeouts in lange forms vermijden of waarschuwing geven (WCAG 2.2.1)
10. Success-state gecommuniceerd aan screen reader

### Inclusive design (beyond compliance)

- Cognitive load reducties (lange taken opsplitsen, clear next-step)
- Reading-level: toegankelijke taal (WCAG AAA: middelbare-onderbouw niveau)
- Motion sensitivity: `prefers-reduced-motion` respecteren
- Kleurenblindheid: kleur nooit enige informatiedrager
- Taal-dialecten: niet alleen formeel-Nederlands
- Context-gevoelig: financial stress, emotional state

### Anti-patterns

- "Accessibility-overlay-widgets" (UserWay / accessiBe): schijn-compliance, vaak schadelijk
- PDF-exports als primary-content zonder HTML-alternatief
- Modals zonder focus-management
- Scroll-hijacking
- Auto-play audio/video (WCAG 1.4.2)
- Hover-only functionaliteit op desktop
- Gemaakte-captcha's zonder alternatief (WCAG 3.3.8)
- Infinite-scroll zonder "load more"-alternatief

## Output-formaat

### Accessibility audit-rapport (docx via `springbok-gdoc`)
1. Executive summary + compliance-status (AA%)
2. Methodologie + scope
3. Findings per severity (Blocker → Advisory)
4. Findings per WCAG-criterium (mapping-tabel)
5. EAA-risico-analyse (indien van toepassing)
6. Prioriteitsmatrix
7. Aanbevolen remediation-roadmap

### Declaration of Accessibility (publicatie-klaar)
- Conformance-status (AA / partial AA / non-conformant)
- Bekende uitzonderingen + planning
- Contact voor feedback
- Assessment-datum + methode

### Findings-backlog (xlsx)
Columns: ID, URL/component, WCAG-ref, severity, description, affected-AT, remediation, effort, owner, status, retest-datum.

### VPAT/ACR (voor enterprise/B2G-klanten)
Gestructureerd rapport per WCAG-criterium: supports / partially supports / does not support / not applicable + remarks.

## Dependencies

- `pagespeed_tool`: (indirect: layout-stability + UX)
- `seo_site_tool`: HTML-validatie + structuur
- `kie_tool`: illustraties voor rapport
- `drive_tool`: deliverables
- Extern: axe DevTools, Wave, NVDA, VoiceOver, JAWS, Accessibility Insights

## Integratie met andere skills

- **`ux-specialist`**: router
- **`ux-audit`**: signaleert a11y-issues → diep hier uitgewerkt
- **`ux-design-system`**: a11y-requirements per component in tokens/docs
- **`ux-ia-wireframing`**: focus-order + landmarks in wireframes
- **`ux-content-design`**: plain-language + error-copy = a11y-content
- **`seo-geo-technical`**: semantische HTML + ARIA = SEO + a11y win

## Tips

- **EAA-eerst bij B2C-klanten >€2M**. Juridische exposure is reëel sinds juni 2025.
- **WCAG 2.2 AA is praktisch target**. AA dekt 95% van juridische + ethische vereisten.
- **Automated + manual = beide nodig**. Automated = 30-40% dekking, geen volledige zekerheid.
- **2+ screen readers testen**. NVDA + VoiceOver minimum combo.
- **Keyboard-only test per pagina verplicht**. Muis is niet representatief.
- **ARIA spaarzaam**. Native HTML wint 9/10 keer.
- **Focus-indicator never remove**. `outline: none` zonder vervanging = WCAG-schending.
- **Accessibility-overlay-widgets afraden**. Schijnoplossing + juridisch-risico blijft.
- **Declaration of Accessibility publiceren**. EAA-vereist + transparantie naar gebruiker.
- **A11y = team-sport**. Designer + dev + content + QA allemaal mede-eigenaar.
