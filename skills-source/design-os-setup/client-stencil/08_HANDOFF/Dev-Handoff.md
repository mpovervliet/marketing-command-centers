# Dev-Handoff [KLANT]
Versie: 0.1 (stencil)
Status: TEMPLATE, invullen in fase 9

Doel: elk APPROVED of PERMANENT component dev-ready opleveren, herleidbaar naar zijn DDR.
Bron: `01_CONTEXT/Technical-Constraints.md` (vraag 1: CMS/frontend-framework) bepaalt welke
vorm van handoff hieronder van toepassing is.

## Route A — met devteam (CMS met custom dev-capaciteit, staging, releasecyclus)

Gebruik Figma Dev Mode / Code Connect waar beschikbaar. Per component:

```
Component: C-XX_NaamComponent_DDR-HX-NN
Status: APPROVED / PERMANENT (bij PERMANENT: Experiment-ID en liftpercentage vermelden)
Figma-link: [Dev Mode-link naar het specifieke component]
Acceptatiecriteria:
  1. [Meetbaar: bijv. "CTA-tekst exact zoals in Content-Handoff.md, geen lorem"]
  2. [Meetbaar: bijv. "Responsive breakpoints kloppen met Design-Tokens.md breakpoint/mobile en breakpoint/desktop"]
  3. [Meetbaar: bijv. "Tracking-event vuurt conform Tracking-Handoff.md"]
Afwijking van design toegestaan bij: [technische randvoorwaarde, met verwijzing naar Technical-Constraints.md TC-nummer]
```

## Route B — zonder devteam (freelance bouwer, no-code/low-code CMS zoals WordPress/Elementor, Webflow of vergelijkbaar)

Geen Dev Mode-workflow nodig; de bouwer werkt direct vanaf Figma-schermen en -specimens.
Lever op:

- Volledige screenshots per scherm (`get_screenshot`) in de volgorde van de kern-flow, elk
  met het bijbehorende DDR-ID en de 2-regelige toelichting uit het hi-fi-voortgangsvoorstel
  (zie `design-os-figma-build`).
- De spec-kaarten uit `07_DESIGN-SYSTEM/` (kleuren, typografie, spacing) als los overzicht,
  zodat de bouwer geen Figma-account nodig heeft om de basiswaarden over te nemen.
- Een korte, niet-technische toelichting per component: wat moet klikbaar zijn, welke tekst
  is definitief (uit `Content-Handoff.md`), en welke velden verplicht zijn.
- Geen acceptatiecriteria in ontwikkeltaal (geen API's, geen dataLayer-verwijzingen); wél
  een simpele checklist die de klant of bouwer zelf kan aflopen (zie voorbeeld hieronder).

## Voorbeeld (fictief, generiek — Route B, zonder devteam)

```
Scherm: T2 Prijs-/pakketpagina, mobiel
DDR: DDR-H1-01 (prijsindicatie above-the-fold)
Screenshot: [link naar export]
Wat moet kloppen:
  - Prijsindicatie zichtbaar zonder scrollen op een telefoon van 375px breed
  - Knoptekst is exact "Bereken jouw prijs", niet "Klik hier"
  - Kleuren en lettertype volgens 07_DESIGN-SYSTEM/Design-Tokens.md
Wie controleert: [naam bouwer of klant-contactpersoon]
```

## Definition of Done

Elke component met een geldige DDR is opgeleverd via de route die past bij de
implementatiecapaciteit van [KLANT] (Route A of B); elke afwijking van het ontwerp is
gemotiveerd en teruggekoppeld naar `09_DECISION-LOG/Decision-Log.md`.
