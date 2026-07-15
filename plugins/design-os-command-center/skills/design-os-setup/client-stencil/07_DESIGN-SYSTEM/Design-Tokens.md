# Design-Tokens [KLANT]
Versie: 0.1 (stencil)
Status: TEMPLATE, invullen bij intake

> Invul-instructie: lees de tokens uit het bestaande Figma design system van [KLANT] (file_key in `INTAKE-CHECKLIST.md`) of uit de live site (CSS-variabelen). Dit document is de bron voor Figma-fase 05 t/m 08; wireframes (fase 04) gebruiken uitsluitend het grijze wireframe-palet uit `10_PROMPTS-AND-AGENTS/Agent-3-Figma-Build-Compiler.md`.

## Kleuren

| Token | Waarde (hex) | Gebruik |
|-------|--------------|---------|
| color/primary | | Primaire merkkleur, koppen, accenten |
| color/primary-dark | | Hover/active states |
| color/secondary | | Secundaire accenten |
| color/cta | | Primaire CTA-knoppen |
| color/success | | Positieve feedback, besparingen |
| color/warning | | Waarschuwingen |
| color/error | | Fouten, validatie |
| color/text | | Bodytekst |
| color/text-muted | | Secundaire tekst |
| color/background | | Pagina-achtergrond |
| color/surface | | Kaarten, panelen |
| color/border | | Randen, dividers |

## Typografie

| Token | Font | Size | Weight | Line-height | Gebruik |
|-------|------|------|--------|-------------|---------|
| type/h1 | | | | | Paginakop |
| type/h2 | | | | | Sectiekop |
| type/h3 | | | | | Subkop |
| type/body | | | | | Bodytekst |
| type/small | | | | | Voorwaarden, meta |
| type/price | | | | | Prijsweergave |
| type/cta | | | | | Knoptekst |

## Spacing

| Token | Waarde (px) | Gebruik |
|-------|-------------|---------|
| space/xs | | Binnen componenten |
| space/s | | Tussen gerelateerde elementen |
| space/m | | Tussen componenten |
| space/l | | Tussen secties |
| space/xl | | Paginamarges, hero |

## Radius en overig

| Token | Waarde | Gebruik |
|-------|--------|---------|
| radius/s | | Inputs, badges |
| radius/m | | Kaarten, knoppen |
| radius/l | | Grote panelen |
| shadow/card | | Kaart-elevatie |
| breakpoint/mobile | | bijv. 375px ontwerpbreedte |
| breakpoint/desktop | | bijv. 1440px ontwerpbreedte |

## Regels

- Geen nieuwe kleuren of fonts introduceren zonder decision-log-entry; we werken binnen het bestaande [KLANT] design system.
- Contrast minimaal WCAG 2.2 AA; check bij elke token-combinatie voor tekst op vlak.
- Afwijkingen van het design system loggen in `09_DECISION-LOG/Decision-Log.md`.
