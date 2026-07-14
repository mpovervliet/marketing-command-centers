# Slide Types — Recipe Book

All slide types with copy-paste code. These snippets go inside the `main()` function
of `slide_builder.js`, after all the helpers and icon setup are defined.

Variables available: `pres, C, F, R, themes, logos, ic1, ic2, ic3, ic4` and all helper functions.

---

## Type 1: Title Page

```javascript
{
  const s = pres.addSlide();
  s.background = { color: C.teal };
  s.addText("Main Title Here", {
    x: 0.6, y: 1.2, w: 8.8, h: 0.8,
    fontSize: 42, fontFace: F, color: C.white, bold: true
  });
  s.addText("Subtitle or tagline in accent color", {
    x: 0.6, y: 2.3, w: 8.0, h: 0.5,
    fontSize: 20, fontFace: F, color: C.neon
  });
  s.addText("Third line with context or summary in lighter color", {
    x: 0.6, y: 3.1, w: 8.0, h: 0.4,
    fontSize: 12, fontFace: F, color: C.grayL
  });
  addFooter(s, "title");
}
```

---

## Type 2: Chapter Divider

```javascript
{
  const s = pres.addSlide();
  chapterSlide(s, "1", "Chapter\nTitle", themes.ch1, "ch1");
  // Use themes.ch1–ch7 and logoKey "ch1"–"ch7"
}
```

---

## Type 3: Three Column Cards with Icons (INLINE layout)

Icon and title sit on the SAME LINE — icon left, title right. This prevents the
stacked look where icons float above titles. Card positions are 0.6 / 3.6 / 6.6
with width 2.8" each.

The pattern for each card:
- Icon: `x + 0.25, y: cardY + 0.25, w: 0.22, h: 0.22`
- Title: `x + 0.55, y: cardY + 0.22, w: cardW - 0.7` (sits next to icon)
- Body: `x + 0.25, y: cardY + 0.6` (below the icon+title line)

Keep titles SHORT (max ~20 chars) so they fit on one line next to the icon.

```javascript
{
  const s = pres.addSlide();
  s.background = { color: C.bg };
  const accent = themes.ch1.accent;
  const ic = ic1; // ic1=neon, ic2=orange, ic3=blue, ic4=pink

  sectionLabel(s, "SECTION NAME", accent);
  slideTitle(s, "Regular title part", "bold highlight");

  const cardW = 2.8, cardH = 2.8, cardY = 1.3;

  // Card 1 — icon + title INLINE
  card(s, 0.6, cardY, cardW, cardH, accent);
  s.addImage({ data: ic.rocket, x: 0.85, y: cardY + 0.25, w: 0.22, h: 0.22 });
  s.addText("Card 1 Title", { x: 1.15, y: cardY + 0.22, w: cardW - 0.7, h: 0.28, fontSize: 11, fontFace: F, color: C.white, bold: true });
  s.addText("Body text description here.", {
    x: 0.85, y: cardY + 0.6, w: cardW - 0.4, h: 1.8,
    fontSize: 9, fontFace: F, color: C.grayL, wrap: true
  });

  // Card 2
  card(s, 3.6, cardY, cardW, cardH, accent);
  s.addImage({ data: ic.chart, x: 3.85, y: cardY + 0.25, w: 0.22, h: 0.22 });
  s.addText("Card 2 Title", { x: 4.15, y: cardY + 0.22, w: cardW - 0.7, h: 0.28, fontSize: 11, fontFace: F, color: C.white, bold: true });
  s.addText("Body text description here.", {
    x: 3.85, y: cardY + 0.6, w: cardW - 0.4, h: 1.8,
    fontSize: 9, fontFace: F, color: C.grayL, wrap: true
  });

  // Card 3
  card(s, 6.6, cardY, cardW, cardH, accent);
  s.addImage({ data: ic.shield, x: 6.85, y: cardY + 0.25, w: 0.22, h: 0.22 });
  s.addText("Card 3 Title", { x: 7.15, y: cardY + 0.22, w: cardW - 0.7, h: 0.28, fontSize: 11, fontFace: F, color: C.white, bold: true });
  s.addText("Body text description here.", {
    x: 6.85, y: cardY + 0.6, w: cardW - 0.4, h: 1.8,
    fontSize: 9, fontFace: F, color: C.grayL, wrap: true
  });

  callout(s, "Key takeaway in one sentence.", accent);
  addFooter(s, "ch1");
}
```

---

## Type 4: KPI Numbers (2×2 Grid)

```javascript
{
  const s = pres.addSlide();
  s.background = { color: C.bg };
  const accent = themes.ch2.accent;

  sectionLabel(s, "FINANCIAL", accent);
  slideTitle(s, "The impact in", "numbers");

  const kpis = [
    { val: "€2.4M", label: "Annual savings",    sub: "Source: Forrester 2025" },
    { val: "+18%",  label: "Margin improvement", sub: "Current benchmark" },
    { val: "€8.5M", label: "Value creation",     sub: "At 5x EBITDA" },
    { val: "24 wks", label: "Time to value",     sub: "Phased rollout" },
  ];

  const pos = [
    { x: 0.6, y: 1.3 }, { x: 5.1, y: 1.3 },
    { x: 0.6, y: 2.75 }, { x: 5.1, y: 2.75 },
  ];

  kpis.forEach((kpi, i) => {
    const { x, y } = pos[i];
    card(s, x, y, 4.3, 1.25, accent);
    s.addText(kpi.val, {
      x: x + 0.25, y: y + 0.08, w: 2.5, h: 0.5,
      fontSize: 28, fontFace: F, color: accent, bold: true
    });
    s.addText(kpi.label, {
      x: x + 0.25, y: y + 0.6, w: 3.8, h: 0.28,
      fontSize: 10, fontFace: F, color: C.white, bold: true
    });
    s.addText(kpi.sub, {
      x: x + 0.25, y: y + 0.88, w: 3.8, h: 0.25,
      fontSize: 8, fontFace: F, color: C.gray
    });
  });

  callout(s, "Sources: Forrester · McKinsey · Industry Benchmark 2026", accent);
  addFooter(s, "ch2");
}
```

---

## Type 5: Table / Comparison

```javascript
{
  const s = pres.addSlide();
  s.background = { color: C.bg };
  const accent = themes.ch3.accent;

  sectionLabel(s, "PACKAGES", accent);
  slideTitle(s, "Three levels,", "one approach");

  // Header row
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.6, y: 1.3, w: 8.8, h: 0.35, rectRadius: 0.05, fill: { color: accent }
  });
  ["COLUMN 1", "COLUMN 2", "COLUMN 3", "COLUMN 4"].forEach((h, i) => {
    s.addText(h, {
      x: 0.7 + i * 2.2, y: 1.3, w: 2.1, h: 0.35,
      fontSize: 8, fontFace: F, color: C.bg, bold: true, charSpacing: 3, valign: "middle"
    });
  });

  // Data rows
  const rows = [
    ["Row 1 Col A", "Col B", "Col C", "Col D"],
    ["Row 2 Col A", "Col B", "Col C", "Col D"],
    ["Row 3 Col A", "Col B", "Col C", "Col D"],
  ];
  rows.forEach((row, ri) => {
    const y = 1.75 + ri * 0.65;
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.6, y, w: 8.8, h: 0.6,
      fill: { color: ri % 2 === 0 ? "161616" : C.cardA }
    });
    row.forEach((cell, ci) => {
      s.addText(cell, {
        x: 0.7 + ci * 2.2, y, w: 2.1, h: 0.6,
        fontSize: ci === 0 ? 10 : 9, fontFace: F,
        color: ci === 0 ? accent : C.grayL,
        bold: ci === 0, valign: "middle"
      });
    });
  });

  callout(s, "Footer note about the table content.", accent);
  addFooter(s, "ch3");
}
```

---

## Type 6: Two Column Cards (INLINE icon + title)

Icon and title sit on the same line. The 2-column layout uses width 4.3" with
positions 0.6 and 5.1.

```javascript
{
  const s = pres.addSlide();
  s.background = { color: C.bg };
  const accent = themes.ch4.accent;
  const ic = ic3;

  sectionLabel(s, "PLATFORM", accent);
  slideTitle(s, "Product:", "Feature Overview");

  const cardW = 4.3, cardH = 1.35;
  const allCards = [
    { x: 0.6, y: 1.3,  icon: ic.layout,  title: "Feature 1", body: "Description here." },
    { x: 5.1, y: 1.3,  icon: ic.monitor, title: "Feature 2", body: "Description here." },
    { x: 0.6, y: 2.8,  icon: ic.brain,   title: "Feature 3", body: "Description here." },
    { x: 5.1, y: 2.8,  icon: ic.db,      title: "Feature 4", body: "Description here." },
  ];

  allCards.forEach(({ x, y, icon, title, body }) => {
    card(s, x, y, cardW, cardH, accent);
    s.addImage({ data: icon, x: x + 0.25, y: y + 0.18, w: 0.22, h: 0.22 });
    s.addText(title, {
      x: x + 0.55, y: y + 0.15, w: cardW - 0.75, h: 0.3,
      fontSize: 9.5, fontFace: F, color: C.white, bold: true
    });
    s.addText(body, {
      x: x + 0.25, y: y + 0.48, w: cardW - 0.45, h: 0.8,
      fontSize: 8.5, fontFace: F, color: C.grayL, wrap: true
    });
  });

  callout(s, "Key insight about the platform features.", accent);
  addFooter(s, "ch4");
}
```

---

## Type 7: Three Column Phases with numBadge (INLINE)

numBadge and title sit on the same line. Uses 3-column layout (0.6/3.6/6.6, w=2.8).

```javascript
{
  const s = pres.addSlide();
  s.background = { color: C.bg };
  const accent = themes.ch6.accent;

  sectionLabel(s, "APPROACH", accent);
  slideTitle(s, "Three phases to", "the goal");

  const cardW = 2.8, cardH = 2.8, cardY = 1.3;

  // Phase 1 — numBadge + title INLINE
  card(s, 0.6, cardY, cardW, cardH, accent);
  numBadge(s, 0.85, cardY + 0.22, 1, accent);
  s.addText("Phase 1 title", { x: 1.25, y: cardY + 0.19, w: cardW - 0.8, h: 0.3, fontSize: 11, fontFace: F, color: C.white, bold: true });
  s.addText("Description of what happens in this phase.", {
    x: 0.85, y: cardY + 0.6, w: cardW - 0.4, h: 1.8,
    fontSize: 9, fontFace: F, color: C.grayL, wrap: true
  });

  // Phase 2
  card(s, 3.6, cardY, cardW, cardH, accent);
  numBadge(s, 3.85, cardY + 0.22, 2, accent);
  s.addText("Phase 2 title", { x: 4.25, y: cardY + 0.19, w: cardW - 0.8, h: 0.3, fontSize: 11, fontFace: F, color: C.white, bold: true });
  s.addText("Description of what happens in this phase.", {
    x: 3.85, y: cardY + 0.6, w: cardW - 0.4, h: 1.8,
    fontSize: 9, fontFace: F, color: C.grayL, wrap: true
  });

  // Phase 3
  card(s, 6.6, cardY, cardW, cardH, accent);
  numBadge(s, 6.85, cardY + 0.22, 3, accent);
  s.addText("Phase 3 title", { x: 7.25, y: cardY + 0.19, w: cardW - 0.8, h: 0.3, fontSize: 11, fontFace: F, color: C.white, bold: true });
  s.addText("Description of what happens in this phase.", {
    x: 6.85, y: cardY + 0.6, w: cardW - 0.4, h: 1.8,
    fontSize: 9, fontFace: F, color: C.grayL, wrap: true
  });

  callout(s, "Each phase validates the next with hard data.", accent);
  addFooter(s, "ch6");
}
```

---

## Type 8: Big Stat with Supporting Cards

```javascript
{
  const s = pres.addSlide();
  s.background = { color: C.bg };
  const accent = themes.ch2.accent;

  sectionLabel(s, "EVIDENCE", accent);
  slideTitle(s, "What do", "the numbers say?");

  // Large stat card (left)
  card(s, 0.6, 1.3, 3.5, 2.8, accent, "2A1F18");
  s.addText("68%", {
    x: 0.8, y: 1.5, w: 3.1, h: 1.0,
    fontSize: 80, fontFace: F, color: accent, bold: true, align: "center"
  });
  s.addText("Description of what this stat means\nacross two lines", {
    x: 0.8, y: 2.6, w: 3.0, h: 0.9,
    fontSize: 10, fontFace: F, color: C.grayL, align: "center", wrap: true
  });
  s.addText("Source, Year", {
    x: 0.8, y: 3.55, w: 3.0, h: 0.2,
    fontSize: 7, fontFace: F, color: C.grayD, align: "center"
  });

  // Supporting stats (right, stacked)
  const quotes = [
    { stat: "78%", label: "Supporting stat description", bron: "Source 1" },
    { stat: "3.2x", label: "Another supporting stat",   bron: "Source 2" },
    { stat: "€580K", label: "Third supporting metric",  bron: "Source 3" },
  ];

  quotes.forEach((q, i) => {
    const y = 1.3 + i * 1.0;
    card(s, 4.4, y, 5.0, 0.85, accent);
    s.addText(q.stat, {
      x: 4.6, y: y + 0.05, w: 1.4, h: 0.6,
      fontSize: 28, fontFace: F, color: accent, bold: true
    });
    s.addText(q.label, {
      x: 6.1, y: y + 0.05, w: 3.1, h: 0.45,
      fontSize: 9.5, fontFace: F, color: C.white
    });
    s.addText(q.bron, {
      x: 6.1, y: y + 0.55, w: 3.1, h: 0.2,
      fontSize: 7, fontFace: F, color: C.grayD
    });
  });

  callout(s, "All data based on published reports.", accent);
  addFooter(s, "ch2");
}
```

---

## Type 9: Proof / Evidence Slide (Gold Accent)

```javascript
{
  const s = pres.addSlide();
  s.background = { color: C.bg };
  const accent = C.gold;

  sectionLabel(s, "PROVEN", accent);
  slideTitle(s, "Track record &", "proof points");

  const proofs = [
    { title: "Client A", result: "+34%", label: "Conversions in 3 months", detail: "Pilot project" },
    { title: "Client B", result: "-22%", label: "Cost per acquisition",    detail: "6 month engagement" },
    { title: "Client C", result: "€180K", label: "Revenue generated",     detail: "Cross-channel" },
  ];

  proofs.forEach((p, i) => {
    const x = 0.6 + i * 3.1;
    card(s, x, 1.3, 2.9, 2.8, accent);
    s.addText(p.title, {
      x: x + 0.2, y: 1.45, w: 2.5, h: 0.3,
      fontSize: 10, fontFace: F, color: C.gray
    });
    s.addText(p.result, {
      x: x + 0.2, y: 1.8, w: 2.5, h: 0.8,
      fontSize: 48, fontFace: F, color: accent, bold: true
    });
    s.addText(p.label, {
      x: x + 0.2, y: 2.65, w: 2.5, h: 0.35,
      fontSize: 10, fontFace: F, color: C.white, bold: true
    });
    s.addText(p.detail, {
      x: x + 0.2, y: 3.05, w: 2.5, h: 0.3,
      fontSize: 8, fontFace: F, color: C.gray
    });
  });

  callout(s, "Results validated by client. References available.", accent);
  addFooter(s, "gold");
}
```

---

## Type 10: Next Steps / Closing

```javascript
{
  const s = pres.addSlide();
  s.background = { color: C.teal };

  s.addText("What are the next steps?", {
    x: 0.6, y: 1.0, w: 8.8, h: 0.5,
    fontSize: 20, fontFace: F, color: C.neon
  });

  const steps = [
    "First action item with owner name",
    "Second action item with timeline",
    "Third action item with deliverable",
  ];

  const stepY0 = 1.95;
  const stepSpacing = 0.40;
  steps.forEach((text, i) => {
    const y = stepY0 + i * stepSpacing;
    s.addText([
      { text: `${i + 1}.  `, options: { color: C.neon, bold: true, fontSize: 14 } },
      { text: text, options: { color: C.white, fontSize: 13 } },
    ], { x: 0.6, y, w: 8.5, h: 0.4, fontFace: F, valign: "middle" });
  });

  addFooter(s, "closing");
}
```
