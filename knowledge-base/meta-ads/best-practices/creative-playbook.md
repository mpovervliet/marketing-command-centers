# Meta Creative Playbook — 2026

## De grondwet

**Creative is 70%+ van performance op Meta in 2026.** Targeting is grotendeels overgenomen door Advantage+. Bidding is auto. Dat laat creative over als grootste hefboom.

Implicaties:
- Plan een **creative-pipeline**, niet ad-hoc batches
- Produceer **meer dan je denkt** (5-8 nieuwe concepten/maand minimum)
- Test op **hooks**, niet op color-tweaks
- **UGC > polished** voor de meeste DTC-segmenten

## De hook (eerste 1.5 seconden)

Een Meta-user beslist binnen **1.7 seconden** of hij blijft kijken. De hook bepaalt 90% daarvan.

### Hook-types (test minimum 3 per concept)
Zie `meta-ads-creative` SKILL.md voor de uitgebreide lijst. Top-5 hook-types:
1. **Pattern interrupt**
2. **Bold claim**
3. **Question hook**
4. **POV-shot** (UGC-feel)
5. **Specific number**

### Hook-test methodiek
Eén concept = één visueel idee + 5 hook-varianten. Launch alle 5, laat ASC kiezen, na 7 dagen kill bottom-2. Winnaar wordt baseline voor volgende iteratie.

## Format-mix (voor actieve account)

| Format | % budget | Wanneer |
|---|---|---|
| **Reels-style video (9:16)** | 40-50% | Default in 2026 — Reels is grootste placement |
| **Static** | 25-30% | Goedkope test, snelle iteratie, basics |
| **Carousel** | 15-20% | Productserie, voor/na, USP-frames, story-arc |
| **Catalog (DPA)** | 10-15% | Retargeting, e-com only |
| **Square video (1:1)** | 5-10% | Feed-only, oudere placements |

## Reels-best practices (cruciaal)

- **9:16 native** (1080×1920) — letterboxed = penalisatie
- **Captions hard-coded** (60-70% kijkt zonder geluid)
- **Eerste frame stoppable** — niet zwart, niet wegtrek-shot
- **Native look > polished** voor UGC. Polished is OK voor brand-spots.
- **Music** via Advantage+ Creative library of licensed
- **Subtitles in brand-color**
- **Loop-friendly** einde
- **Shoot mobile-first** — vertical native, niet "uitsnijden van 16:9"

## Static ad regels

- Productfoto **≥30%** van canvas (anders geen ASC/Pmax fit)
- **1 hoofdboodschap** per static (geen 4 USP's)
- **Hi-contrast** (mobile screen heeft slecht contrast)
- **Tekst-overlay <20%** van image (oude regel maar nog steeds CTR-correlatie)
- **Brand-colors** consistent
- **Pack-shot** als product visueel herkenbaar moet zijn

## Carousel — formats

| Formaat | Wanneer |
|---|---|
| **3-card story** | Hook → proof → CTA |
| **5-card USP** | 1 hoofdpunt + 3 USP's + CTA |
| **Voor / Na** | Card 1 = voor, Card 2-3 = transitie, Card 4-5 = na + CTA |
| **Stappenplan** | Card 1 = "3 stappen", Card 2-4 = stap 1/2/3, Card 5 = CTA |
| **Productserie** | E-com: 5 producten in collectie |

**Vermijd**: 6+ cards (CTR daalt drastisch na card 5).

## Catalog (DPA) ads

- Templates met variabelen `{product.name}`, `{product.price}`
- **Video-templates** (Reels-fit) werken in 2026 beter dan static DPA
- **Advantage+ Creative AAN**
- **Automated Vertical Formats** AAN voor Reels-fit
- 1-2 templates max (te veel = signaal-versnippering)
- Refresh template-design elk kwartaal

## UGC (User Generated Content) — de gouden standaard

UGC-ads converteren vaak 30-100% beter dan polished brand video.

### UGC-soorten
- **Customer testimonial** — bestaande klant praat
- **Influencer-UGC** — paid creator met natuurlijke vibe
- **Faux-UGC** — actor/creator met UGC-look (kostenefficient)
- **Founder-led** — eigenaar/medewerker spreekt persoonlijk

### UGC-brief essentials (zie `meta-ads-creative` skill voor full template)
- Doel + persona
- Hook (eerste 1.5 sec)
- Body (waarom, demo, resultaat)
- CTA
- Format (9:16, captions, duur)
- Brand-elements
- Disclosure (wettelijk: #ad / #partner / #gifted)

### UGC-creator bronnen
- **Billo, Insense, Trend, JoinBrands** — UGC-marketplaces
- **TikTok Creator Marketplace**
- **Bestaande klanten** (gratis vaak best — "review-of-product video")
- **Instagram outreach** naar micro-influencers

## Creative iteratie-ritme

| Account-grootte | Nieuwe concepten/maand | Hooks-varianten/week |
|---|---|---|
| <€5k/mnd | 2-3 | 1-2 op winners |
| €5-15k/mnd | 5-8 | 3-4 |
| €15-50k/mnd | 8-15 | 5-8 |
| >€50k/mnd | 15-25 | 8-15 |

## Creative reporting (Motion-style)

Track per ad/concept:
- **Hook rate** (3-sec VV / impressions)
- **Hold rate** (15-sec VV / 3-sec VV)
- **Watch through 50%, 75%**
- **CTR (link)**
- **Cost per ATC / Purchase**
- **Frequency** (creative fatigue indicator)

Rapporteer per **concept** (niet per ad-ID), zodat je leerlessen kunt extrapoleren.

## Concept-vs-Variation taxonomy

- **Concept** = hoofd-idee (bv. "Voor/na verhaal van customer Sandra")
- **Variation** = zelfde concept, andere uitvoering (hook, music, CTA, color)

Bewaar in `<klantmap>/meta-ads/creative/` als:
```
concepts/
  C001_sandra_voor_na/
    brief.md
    v01_hook-question.mp4
    v02_hook-shock.mp4
    v03_hook-number.mp4
    performance.md
```

## Wat in 2026 NIET meer werkt

- Slideshow-style ad uit alleen statics (low engagement)
- Polished commercial-feel die "duidelijk een ad" is
- "BIG CAPS LETTERS BENEFITS" zonder context
- Voiceover-only video met statics op de achtergrond
- Carousel met 8+ cards
- Tekst-zware static met 5+ USP's

## AI-creative — wanneer

Gebruik `kie_tool` voor:
- **Snelle concept-test** (heb je nog geen UGC-pool?)
- **Static variation** (Imagen 3 / vergelijkbaar voor product-in-setting)
- **Video clips** (Veo / Wan / Kling voor 5-10s scenes)
- **Music + voice** (ElevenLabs voor TTS, Suno voor music)

**Brand-safety**: altijd MP review vóór live, zeker bij logo's of pack-shots door AI (kan vervorming geven).

## Kill-criteria

Een creative pauzeren / vervangen wanneer:
- Hook rate <15% na 500 impressions
- Frequency >5 én CTR-decay >25%
- 0 conversies na 100 link clicks (prospecting)
- Duidelijke negative feedback (Quality Ranking laag in Meta)
- Klant flag (legal / brand)

## Referenties
- [Motion — Creative reporting platform + library](https://motionapp.com/)
- [Savannah Sanchez — Creative strategy](https://www.thesocialsavannah.com/)
- [Barry Hott — DTC creative](https://www.barryhott.com/)
- [Dara Denney — Creative testing methodology](https://www.daradenney.com/)
- [Foxwell Digital — Creative ops framework](https://foxwelldigital.com/)
