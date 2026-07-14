---
name: springbok-slideshow
description: >
  Deliverable-generator voor branded Springbok PowerPoint presentaties (.pptx) via
  PptxGenJS in Node.js: donker design system met neon-accenten, rounded cards en Inter
  typografie. Gebruik ALTIJD wanneer content, data of een outline omgezet moet worden
  naar een presentatie of deck. Trigger bij "maak een springbok presentatie", "zet dit
  om naar een springbok presentatie", "maak slides voor de klant", "maak hier een
  presentatie van", "zet dit in slides", "maak een deck", "maak een pitch deck", "maak
  een slideshow", "presentatie in springbok huisstijl", "maak slides van dit rapport",
  "bouw een pptx", "kwartaalpresentatie maken", of elke vraag over presentaties in
  Springbok-stijl. Leest references/huisstijl-spec.md (het volledige design system) en
  references/slide_types.md (copy-paste recepten voor 10 slide-types), bouwt via
  scripts/slide_builder_template.js en levert pas op na MP-review.
---

# Springbok Slideshow: presentaties in huisstijl

Je bent MP's presentatie-bouwer. Je bouwt professionele .pptx decks met PptxGenJS in het Springbok design system: donker, modern, neon-accenten, rounded cards en Inter typografie. De techniek en het design system staan vast in het script en de specs; jouw werk is het verhaal in de juiste slide-types gieten.

## Wanneer activeren

- Content, data of een outline moet een klant-presentatie worden
- Een QBR, proposal of plan moet als deck in plaats van als document
- MP zegt "maak hier een presentatie van" of "zet dit in slides"
- Een bestaand rapport moet samengevat worden als presentatie voor een meeting
- Een pitch of new-business verhaal heeft branded slides nodig
- Een workshop of kennissessie voor een klant vraagt om Springbok-slides
- Intern deck dat klant-zichtbaar kan worden en dus huisstijl verdient

## Werkwijze

1. **Lees de content en context**: wat is het verhaal, voor wie, welke meeting; check `<klantmap>/account-brief.md` voor klantnaam en context
2. **Lees `references/huisstijl-spec.md`**: het volledige design system (kleuren, themes, typografie, layout grid, helpers, icons). Voor copy-paste code per slide-type: `references/slide_types.md`
3. **Kopieer het template-script**: `cp <skill-pad>/scripts/slide_builder_template.js ./slide_builder.js`
4. **Installeer dependencies** indien nodig: `npm install pptxgenjs sharp lucide-static`
5. **Pas aan**: `PRESENTATION_CONFIG` bovenaan (titel, auteur, output-bestandsnaam) en vervang ALLEEN de `// SLIDES` sectie in `main()`. Helpers, kleurdefinities en logo/icon-rendering blijven byte-voor-byte onaangeroerd
6. **Kies per hoofdstuk 1 chapter-theme en 2-4 slide-types** (beslistabellen in Kern-kennis); wissel types af
7. **Run**: `node slide_builder.js`; fix errors met maximaal 2 pogingen, daarna escaleren naar MP
8. **Open de .pptx** en vink de acceptatiecriteria af (zie Output-formaat)
9. **Lever als concept aan MP**; log 1 regel in `<klantmap>/<discipline>/history-log.md`

## Kern-kennis (2026)

De huisstijl-regels zijn tijdloos en liggen volledig vast in `references/huisstijl-spec.md` (stand juli 2026): dat bestand is leidend voor alle kleuren, maten, coordinaten en patterns. Bij twijfel of een ontbrekende spec beslist MP; verzin nooit eigen kleuren, themes of layouts.

### Chapter-themes: welk thema wanneer

Elk hoofdstuk krijgt 1 gecoordineerd background-plus-accent paar. Nooit accenten mixen binnen 1 hoofdstuk.

| Chapter | Use case | Background | Accent |
|---------|----------|------------|--------|
| ch1 | Context, urgency | teal `052B25` | neon `DDFF00` |
| ch2 | Financial, impact | cardA `1A1A1A` | orange `F18417` |
| ch3 | Proposition, offering | teal `052B25` | neon `DDFF00` |
| ch4 | Platform, product | navy `111B32` | blue `8387FF` |
| ch5 | Revenue, pricing | purple `210128` | pink `FFC7FF` |
| ch6 | Strategy, roadmap | teal `052B25` | neon `DDFF00` |
| ch7 | Implementation | cardA `1A1A1A` | orange `F18417` |

Je hoeft niet alle 7 te gebruiken: kies de themes die bij de content passen.

### Kleuren-kern

Snelle referentie; het volledige palet staat als JS-object in de spec.

| Kern | Waarde |
|---|---|
| Slide background | `0F0F0F` (near-black) |
| Card fill | cardA `1A1A1A` |
| Accenten | neon `DDFF00`, orange `F18417`, blue `8387FF`, pink `FFC7FF` |
| Proof/evidence slides | gold `B9A874` |
| Body tekst | grayL `D1D2D3`; secundair `9E9E9E`; bronnen `5E5E5E` |
| Titels en card-titels | white `FFFFFF` |

### Typografie-kern

Alles is Inter. De belangrijkste maten; de volledige hierarchie staat in de spec.

| Element | Size | Weight | Color |
|---|---|---|---|
| Title page main title | 42pt | Bold | white |
| Slide title | 20pt | Regular + **Bold** mix | white |
| Chapter number / chapter title | 64pt Bold / 32pt Regular | zie spec | accent / white |
| Section label (pill) | 7pt | Bold, UPPERCASE | bg on accent fill |
| Card title | 9.5-11pt | Bold | white |
| Body text | 8.5-9pt | Regular | grayL |
| KPI number | 28-80pt | Bold | accent |
| Source/citation | 7-8pt | Regular | grayD |

### De 11 design rules

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

### Welk slide-type wanneer

De 10 types staan met complete code in `references/slide_types.md`.

| Verhaal-moment | Slide-type |
|---|---|
| Opening | Type 1: Title Page |
| Nieuw hoofdstuk | Type 2: Chapter Divider |
| 3 punten, pijlers of voordelen | Type 3: Three Column Cards with Icons |
| Cijfers en KPI's | Type 4: KPI Numbers (2x2 Grid) |
| Vergelijking of opties naast elkaar | Type 5: Table / Comparison |
| 2 kanten van 1 verhaal | Type 6: Two Column Cards |
| Fasering of stappenplan | Type 7: Three Column Phases with numBadge |
| 1 groot cijfer met context | Type 8: Big Stat with Supporting Cards |
| Bewijs, cases, resultaten | Type 9: Proof / Evidence Slide (gold accent) |
| Afsluiting en call to action | Type 10: Next Steps / Closing |

### Deck-opbouw

```
Title slide (hook + subtitle + contextregel)
└── Per hoofdstuk:
    ├── Chapter Divider (theme zetten)
    └── 2-4 content slides, afwisselende types
└── Next Steps / Closing (heldere call to action)
```

Beslisregels: nooit 2 keer hetzelfde slide-type back-to-back; vuistregel 10-18 slides voor een klantmeeting van 30-45 minuten; maximaal 3 cards of 4 KPI's per slide, meer content = extra slide.

### Helpers, icons en grid

Het template-script bevat alle helpers: `addFooter()`, `sectionLabel()`, `slideTitle()`, `card()`, `accentCard()`, `callout()` (met instelbare `yPos`, default 4.35), `numBadge()` en `chapterSlide()`. Signatures en gedrag staan in de spec.

Icons: 21 Lucide icons worden pre-rendered per accent-kleur via Sharp; toegang als `ic1.rocket` (neon), `ic2` (orange), `ic3` (blue), `ic4` (pink). Custom icons via `renderLucide(name, color, size)` met elke naam uit lucide-static.

Grid: slides zijn 10" x 5.63" (16:9), left margin 0.6", content 8.8" breed. Exacte card-posities en de inline icon/titel-coordinaten (3-koloms, 2-koloms, numBadge) staan in de spec: neem ze letterlijk over.

## Anti-patterns

- Accentkleuren mixen binnen 1 hoofdstuk: breekt de chapter-logica en oogt direct rommelig
- Icon boven de titel stapelen: regel 10 zegt inline; gestapeld verliest de card zijn hierarchie
- De sparkle glyph in callouts: ziet eruit als AI-output; gebruik de → arrow als los element
- Zelfde slide-type back-to-back herhalen: het publiek haakt visueel af
- Een ander font dan Inter of eigen kleuren toevoegen: alles buiten de spec is fout
- Card-titels langer dan ~20 tekens in 3-koloms cards: breken over 2 regels en duwen de body weg
- Helpers of kleurdefinities in het script herschrijven: de huisstijl is heilig, alleen de slides-sectie wijzigen
- Voorbeeldslides uit het template laten staan: pijnlijk zichtbaar bij de klant
- Slides volproppen: meer dan 3 cards of 4 KPI's per slide maakt alles onleesbaar op een scherm
- Het deck direct naar de klant sturen: MP reviewt altijd eerst

## Output-formaat

Deliverable: 1 .pptx bestand plus een korte oplever-notitie aan MP:

```markdown
## Deck klaar voor review: [titel]
- Bestand: [pad].pptx ([n] slides, [n] hoofdstukken, themes: [ch-lijst])
- Doel en publiek: [klant, meeting, datum]
- Acceptatiecriteria: [alles groen / afwijkingen benoemd]
- Open punten voor MP: [twijfels, aannames, [MP: aanvullen] items]
```

Acceptatiecriteria (allemaal groen voor oplevering):

- [ ] `node` draait zonder error; de .pptx opent zonder reparatie-melding in PowerPoint of Google Slides
- [ ] Huisstijl-checklist: Inter overal, 1 accent per hoofdstuk, footer-logo in de accent-kleur, alle shapes rounded, icons inline met titels
- [ ] Geen placeholder-tekst of voorbeeldslides uit het template achtergebleven
- [ ] Callouts overlappen niet met de content erboven (yPos gecontroleerd per slide)
- [ ] Cijfers en klantnaam gecheckt tegen de bron
- [ ] Geen em-dash of en-dash in slide-teksten

Stop-condities: een script-error die na 2 fixpogingen blijft → escaleer naar MP met de foutmelding; ontbreekt de spec voor een gewenst slide-type of element → vraag MP en improviseer niet. Non-negotiable: er gaat NIETS naar een klant zonder MP-review.

## Dependencies

- Node.js met `pptxgenjs`, `sharp` en `lucide-static` (npm)
- `scripts/slide_builder_template.js`: het template-script met alle setup, helpers en rendering
- `references/huisstijl-spec.md`: het volledige design system, bron van waarheid
- `references/slide_types.md`: copy-paste code voor alle 10 slide-types
- Klantmap: `account-brief.md` voor context, `history-log.md` voor logging
- PowerPoint of Google Slides voor de visuele eindcheck

## Integratie met andere skills

- **springbok-gdoc**: zelfde huisstijl-familie; moet het een leesbaar document worden, schakel daarheen. Deck = deze skill, document = gdoc
- **qbr-builder**: bouwt het kwartaalverhaal; deze skill maakt er het QBR-deck van (chapter-themes per QBR-blok werken goed)
- **proposal-writer**: schrijft de proposal; voor een pitch-meeting giet deze skill hem in slides
- **seo-geo-reporting, google-ads-reporting, meta-ads-reporting, cro-reporting**: leveren de cijfers en duiding; KPI- en Big Stat-slides vatten ze samen
- **weekly-client-update**: weeklies blijven mail; een deck is voor meetings, niet voor het weekritme

## Tips

- Maak bij decks langer dan 12 slides eerst een outline van 1 regel per slide en laat MP die zien voor je bouwt; herbouwen na een structuur-wijziging kost meer dan de check
- Kies icons semantisch, niet decoratief: een `gauge` bij snelheid, een `shield-check` bij compliance; een willekeurig icoon ondermijnt het punt
- Gebruik de mixed-weight titel bewust: het bold-deel is de conclusie van de slide, niet zomaar het laatste woord
- Varieer de callout-yPos per slide op basis van de content erboven; de default 4.35 is een startpunt, geen wet
- Zet gold (Type 9) alleen in voor echt bewijs: cases, cijfers, testimonials. Gold voor gewone content devalueert de proof-slides
- Gebruik de chapter-kleuren als verhaalritme: teal voor context en strategie, orange voor geld en uitvoering, dat leert het publiek onbewust mee
- De eerste run is traag omdat Sharp alle logo's en icons rendert; dat is normaal, geen hang

---

*Eerste versie: april 2026, herschreven naar huisstandaard juli 2026. Herzie wanneer het template-script, het design system of de slide-type-bibliotheek wijzigt.*
