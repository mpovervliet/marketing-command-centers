# Design-Tokens [KLANT]
Versie: 0.1 (stencil)
Status: TEMPLATE, invullen bij intake

> Invul-instructie: lees de tokens uit het bestaande Figma design system van [KLANT] (file_key in `INTAKE-CHECKLIST.md`) of uit de live site (CSS-variabelen). Dit document is de bron voor de Figma-pagina's 04 t/m 06 (Selected Direction, Design System, Prototype); wireframes (pagina 03) gebruiken uitsluitend het grijze wireframe-palet uit `10_PROMPTS-AND-AGENTS/Agent-3-Figma-Build-Compiler.md`.

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
| type/emphasis | | | | | Nadruk op het kerncijfer of de kernbelofte (prijs, doorlooptijd, resultaat); laat leeg als er geen kerncijfer is |
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

- Geen nieuwe kleuren of fonts introduceren zonder decision-log-entry; bij merk-mandaat brand-vast en brand-open werken we binnen het bestaande [KLANT] design system; bij brand-afwezig wordt dit bestand juist in fase 7 ingevuld als deliverable.
- Contrast minimaal WCAG 2.2 AA; check bij elke token-combinatie voor tekst op vlak.
- Afwijkingen van het design system loggen in `09_DECISION-LOG/Decision-Log.md`.

## Voorbeeld (fictief, ter illustratie van het formaat — niet kopiëren als klantwaarde)

Zo ziet een volledig ingevulde kleurenset eruit; vervang elke waarde door de daadwerkelijke
tokens van [KLANT]:

| Token | Waarde (hex) | Gebruik |
|-------|--------------|---------|
| color/primary | #1B4D3E | Primaire merkkleur, koppen, accenten |
| color/primary-dark | #0F2E24 | Hover/active states |
| color/secondary | #E8A33D | Secundaire accenten |
| color/cta | #1B4D3E | Primaire CTA-knoppen |
| color/success | #2E7D32 | Positieve feedback, besparingen |
| color/warning | #ED6C02 | Waarschuwingen |
| color/error | #C62828 | Fouten, validatie |
| color/text | #1A1A1A | Bodytekst |
| color/text-muted | #6B6B6B | Secundaire tekst |
| color/background | #FFFFFF | Pagina-achtergrond |
| color/surface | #F7F6F3 | Kaarten, panelen |
| color/border | #DDDAD3 | Randen, dividers |

| Token | Font | Size | Weight | Line-height | Gebruik |
|-------|------|------|--------|-------------|---------|
| type/h1 | Inter | 40px | 700 | 1.15 | Paginakop |
| type/h2 | Inter | 28px | 700 | 1.2 | Sectiekop |
| type/body | Inter | 16px | 400 | 1.5 | Bodytekst |
| type/cta | Inter | 16px | 600 | 1.2 | Knoptekst |

| Token | Waarde (px) | Gebruik |
|-------|-------------|---------|
| space/xs | 4 | Binnen componenten |
| space/s | 8 | Tussen gerelateerde elementen |
| space/m | 16 | Tussen componenten |
| space/l | 32 | Tussen secties |
| space/xl | 64 | Paginamarges, hero |

Dit is 1 mogelijke, willekeurig gekozen tokenset (geen huisstijl van een echte klant) —
het format is het punt, niet de kleuren.
