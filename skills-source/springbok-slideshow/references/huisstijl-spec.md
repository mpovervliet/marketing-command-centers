# Springbok Slideshow huisstijl-spec (volledige technische referentie)

Dit is het volledige, ongewijzigde Springbok design system voor springbok-slideshow: kleuren, chapter-themes, typografie, layout grid, de 11 design rules, alle helper functions, icons en card layout patterns. De waarden hieronder zijn de bron van waarheid; SKILL.md bevat de beslislaag. Wijzig niets zonder MP-akkoord. Voor copy-paste code per slide-type: zie references/slide_types.md.

## Design System

### Colors

```javascript
const C = {
  bg: "0F0F0F",        // Main slide background (near-black)
  cardA: "1A1A1A",     // Card fill
  teal: "052B25",      // Chapter 1/3/6 background
  navy: "111B32",      // Chapter 4 background
  purple: "210128",    // Chapter 5 background
  darkPurp: "2A1B21",  // Callout bg for pink accent
  neon: "DDFF00",      // Ch1, Ch3, Ch6 accent
  orange: "F18417",    // Ch2, Ch7 accent
  blue: "8387FF",      // Ch4 accent
  pink: "FFC7FF",      // Ch5 accent
  gold: "B9A874",      // Proof/evidence slides
  red: "E46962",
  white: "FFFFFF",
  ee: "EEEEEE",
  grayL: "D1D2D3",     // Standard body text
  gray: "9E9E9E",      // Secondary text
  grayD: "5E5E5E",     // Sources, meta
  black: "000000",
};
```

### Chapter Themes

Each chapter has a coordinated background + accent color. Never mix accents within a chapter.

| Chapter | Use case | Background | Accent |
|---------|----------|------------|--------|
| ch1 | Context, urgency | teal `052B25` | neon `DDFF00` |
| ch2 | Financial, impact | cardA `1A1A1A` | orange `F18417` |
| ch3 | Proposition, offering | teal `052B25` | neon `DDFF00` |
| ch4 | Platform, product | navy `111B32` | blue `8387FF` |
| ch5 | Revenue, pricing | purple `210128` | pink `FFC7FF` |
| ch6 | Strategy, roadmap | teal `052B25` | neon `DDFF00` |
| ch7 | Implementation | cardA `1A1A1A` | orange `F18417` |

You don't need to use all 7 chapters: pick the themes that match the user's content.

### Typography

Everything uses Inter. The hierarchy:

| Element | Size | Weight | Color |
|---------|------|--------|-------|
| Title page main title | 42pt | Bold | white |
| Title page subtitle | 20pt | Regular | accent |
| Title page third line | 12pt | Regular | grayL |
| Slide title | 20pt | Regular + **Bold** mix | white |
| Section label (pill) | 7pt | Bold, UPPERCASE | bg on accent fill |
| Chapter title | 32pt | Regular | white |
| Chapter number | 64pt | Bold | accent |
| Card title | 9.5-11pt | Bold | white |
| Body text | 8.5-9pt | Regular | grayL |
| Source/citation | 7-8pt | Regular | grayD |
| KPI number | 28-80pt | Bold | accent |
| Callout text | 9pt | Regular | accent |
| Closing step number | 14pt | Bold | accent |
| Closing step text | 13pt | Regular | white |

### Layout Grid

Slides are 10" × 5.63" (16:9).

| Measurement | Value |
|-------------|-------|
| Left margin | 0.6" |
| Content width | 8.8" |
| 3-column card width | 2.8" (positions: 0.6 / 3.6 / 6.6) |
| 2-column card width | 4.3" (positions: 0.6 / 5.1) |
| Section label y | 0.38" |
| Slide title y | 0.70" |
| Content start y | 1.25"-1.35" |
| Callout y | ~4.35" (adjustable via yPos parameter) |
| Footer logo y | 5.15" |

### 11 Design Rules

1. All shapes are rounded (rectRadius: 0.1")
2. Cards have border ALL AROUND (not just top)
3. Section labels are pill-shaped (rectRadius: 0.12")
4. Headings use mixed weight: "Regular part" + **"Bold highlight"**
5. Chapter dividers: big number left, title right
6. Font is ALWAYS Inter
7. Never mix accent colors within one chapter
8. Footer logo color matches chapter accent
9. Callouts use → arrow (as separate element), not the sparkle glyph: the sparkle looks like AI
10. Icons and titles ALWAYS sit on the same line (inline): never stack icon above title
11. Margins: left 0.6", content 8.8" wide

## Helper Functions

The template script (`scripts/slide_builder_template.js`) includes all these helpers.

### `addFooter(slide, logoKey)`
Adds the Springbok logo at the bottom. `logoKey` is "ch1"-"ch7", "title", "gold", or "closing".

### `sectionLabel(slide, text, accentColor)`
Pill-shaped tag at top of slide. Text is auto-uppercased. Width auto-sizes to text length.

### `slideTitle(slide, regularText, boldText)`
Mixed-weight heading. If `boldText` is null/undefined, just renders `regularText`.

### `card(slide, x, y, w, h, accentColor, fillColor?)`
Rounded card with accent border. Default fill is `cardA` (1A1A1A).

### `accentCard(slide, x, y, w, h, accentColor)`
Solid filled card (no border, fill = accent color). Use for emphasis blocks.

### `callout(slide, text, accentColor, yPos?)`
Banner at bottom of slide. Uses → arrow as a separate element positioned left,
with text to the right. No outline border. Background auto-adjusts to match accent.

The `yPos` parameter lets you adjust the vertical position (default: 4.35).
This is useful when content above varies in height: pass a custom y to avoid
overlap or gaps. Example: `callout(s, "Text here", accent, 4.20)`.

### `numBadge(slide, x, y, number, accentColor)`
Numbered circle badge for step lists.

### `chapterSlide(slide, num, title, theme, logoKey)`
Full chapter divider. `theme` is from the themes object (e.g., `themes.ch3`).

## Icons

The template pre-renders 21 Lucide icons in each accent color using Sharp:
`rocket, settings, trending-up, shield-check, users, lightbulb, arrow-right,
triangle-alert, zap, database, message-circle, crown, star, target, layers,
monitor, brain, layout-dashboard, search, gauge, globe`

Access them as `ic1.rocket` (neon), `ic2.rocket` (orange), `ic3.rocket` (blue), `ic4.rocket` (pink).

To add custom icons, use the `renderLucide(name, color, size)` function with any
icon name from the lucide-static package.

## Card Layout Patterns

There are two key patterns for placing icons/badges with titles inside cards.
The critical rule is: **icons and titles must always be on the same horizontal line**.

### Icon + Title Inline (3-column cards)
```
Icon at:  x + 0.25, y: cardY + 0.25, w: 0.22, h: 0.22
Title at: x + 0.55, y: cardY + 0.22, w: cardW - 0.7, h: 0.28
Body at:  x + 0.25, y: cardY + 0.6
```
Keep titles SHORT (max ~20 characters) so they fit on one line.

### Icon + Title Inline (2-column cards)
```
Icon at:  x + 0.25, y: y + 0.18, w: 0.22, h: 0.22
Title at: x + 0.55, y: y + 0.15, w: cardW - 0.75, h: 0.3
Body at:  x + 0.25, y: y + 0.48
```

### numBadge + Title Inline
```
Badge at: x + 0.25, y: cardY + 0.22 (using numBadge helper)
Title at: x + 0.65, y: cardY + 0.19, w: cardW - 0.8, h: 0.3
Body at:  x + 0.25, y: cardY + 0.6
```

