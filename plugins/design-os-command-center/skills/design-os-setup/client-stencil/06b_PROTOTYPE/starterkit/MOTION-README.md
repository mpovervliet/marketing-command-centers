# Motion-laag

`css/motion.css` + `js/motion.js`: de bewegingslaag van het prototype. Nul externe
libraries, geen build-stap, optioneel: laat beide bestanden weg als er niets beweegt.

## Aanzetten in een pagina

```html
<link rel="stylesheet" href="css/theme.css">
<link rel="stylesheet" href="css/motion.css">   <!-- na theme.css -->
<script src="js/app.js"></script>
<script src="js/motion.js"></script>            <!-- na app.js -->
```

`reveal()` en `mediaLoop()` starten vanzelf; de chain start je zelf met
`ProtoMotion.initChain(document.querySelector('#chain'))`.

## Data-attributen

| Attribuut | Werking |
|---|---|
| `data-mo="rise"` | Element schuift omhoog en vervaagt in zodra het in beeld komt |
| `data-mo="clip"` | Beeld schuift open van onder naar boven (`clip-path`) |
| `data-mo-rise="s"` / `"l"` | Amplitude 12px of 46px (default 24px) |
| `data-mo-stagger` | Op de container: kinderen volgen elkaar op met 70ms, plafond 8 |
| `data-mo-loop="pad.mp4"` | Laadt de video pas bij hover/focus. Leeg attribuut = niets |
| `data-mo-loop-stage` | Optioneel kind waar de video in komt (default: het element zelf) |
| `data-chain-track` | Kolom met de stappen; hierbinnen wordt de voortgang gemeten |
| `data-chain-step` | Eén stap. Het aantal is vrij |
| `data-chain-fig` | Beeld in de sticky kolom, evenveel als er stappen zijn |
| `data-chain-dot` | Punt op de rail, evenveel als er stappen zijn |
| `data-chain-line` | SVG-`<path>` dat als voortgangslijn wordt getekend |
| `data-mo-pause-label` | Span in een `.mo-pause`-knop waar het label in wordt gezet |

## API

`ProtoMotion.reveal(root)` · `initChain(root, {onStep})` · `createLoop(el, tick, opts)` ·
`bindPause(btn, loop, {play, pause})` · `mediaLoop(root)` · `budget()` ·
`prefersReduced()` · `onReducedChange(fn)`. `createLoop` is de enige toegestane rAF-lus:
pauzeert buiten de viewport en bij een verborgen tab, en stopt zichzelf zodra je `tick`
één keer `false` teruggeeft. Beweging die langer dan 5 seconden doorloopt koppel je met
`bindPause` aan een `<button class="mo-pause">` (WCAG 2.2.2).

## Twee regels die je niet aanpast

1. **`motion.js` zet als eerste `html.js`, en motion.css verbergt alleen onder `.js`.**
   Zonder JS of bij een scriptfout staat alle content zichtbaar op zijn eindtoestand.
   Zet een verborgen begintoestand dus nooit buiten `.js`.
2. **`prefers-reduced-motion` is een eindtoestand, geen versnelde animatie.** De
   media query én `html.mo-reduced` (live omschakelen) geven hetzelfde resultaat.

## Drie dingen die je per klant invult

1. **Tokens.** De duur-, easing- en afstandswaarden bovenaan `motion.css` zijn de
   defaults. Wijk je af, leg dat vast in de DDR: beweging is een ontwerpbeslissing.
2. **Welke secties bewegen.** Zet `data-mo` alleen waar een DDR het dekt. Regel:
   max 1 sectie-animatie per sectie, max 2 dragende animaties per pagina, en het
   LCP-element (hero-kop en hero-beeld) beweegt nooit.
3. **Teksten en beeld.** De knoplabels van `bindPause` en elke `data-mo-loop`-bron
   komen van de klant; dit bestand bevat bewust geen tekst en geen media-URL's.
