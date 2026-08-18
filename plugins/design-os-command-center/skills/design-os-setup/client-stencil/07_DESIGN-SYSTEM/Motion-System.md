> Aannames die met dit document meereizen (uit `01_CONTEXT/Client-Profile.md`):
> merkregels [P2] | evidence-regime [P3] | traject-omvang [P8]

# Motion-System [KLANT]
Versie: 0.1 (stencil)
Status: TEMPLATE, invullen bij fase 7 of zodra een DDR beweging vastlegt
Hoort bij: `Design-Tokens.md` (kleur, typografie, ruimte). Dit document is de bewegingslaag
van dezelfde tokenset en is bindend voor elke DDR die beweging vastlegt.

**Kernregel: beweging is een ontwerpbeslissing, geen afwerking.** Elke waarneembare beweging
valt onder een DDR, krijgt een Motion Spec en haalt de performance- en toegankelijkheidspoort,
of hij gaat er niet in.

## 1. Motion-tokens

### 1a. Duur
| Token | Waarde | Gebruik |
|---|---|---|
| `--mo-xs` | 120ms | Directe feedback: hover, focus, state |
| `--mo-s` | 200ms | Kleine state-wissels |
| `--mo-m` | 320ms | Paneel- en menuwissels, accordeon |
| `--mo-l` | 560ms | Sectie-reveal (tekst) |
| `--mo-xl` | 900ms | Sectie-reveal (beeld), onthulling |

### 1b. Easing
| Token | Waarde | Gebruik |
|---|---|---|
| `--ease-out` | `cubic-bezier(.2,.7,.2,1)` | Alles wat binnenkomt |
| `--ease-in` | `cubic-bezier(.6,0,.9,.4)` | Alles wat verdwijnt |
| `--ease-inout` | `cubic-bezier(.65,0,.35,1)` | Positiewissels |
| `--ease-reveal` | `cubic-bezier(.7,0,.2,1)` | Onthullingen (clip-path) |

[Bounce, overshoot en elastic alleen bij merken die expliciet speels zijn. Toets tegen P2.]

### 1c. Afstand en stagger
| Token | Waarde | Gebruik |
|---|---|---|
| `--mo-rise-s` | 12px | Tekstregels, labels |
| `--mo-rise-m` | 24px | Kaarten, blokken |
| `--mo-rise-l` | 46px | Hele secties |
| `--mo-stagger` | 70ms | Vertraging per element, plafond 8 |

## 2. De drie tiers

| Tier | Wat | Budget | Gate |
|---|---|---|---|
| T1 Micro | Feedback op directe interactie | Onbeperkt, mits kort en composited | Valt onder de tokens |
| T2 Sectie | Beweging bij intreden van een sectie | Max 1 per sectie, 1 tegelijk zichtbaar | Motion Spec in de DDR van die sectie |
| T3 Signature | De dragende, verhalende beweging | Max 2 per pagina, 1 per viewport | Eigen DDR, gemeten performance |

## 3. Motion Spec (verplicht formaat in elke DDR met beweging)

```
Trigger:            [interactie / sectie in viewport (threshold) / scrollpositie binnen de sectie]
Property:           [uitsluitend transform, opacity, clip-path, stroke-dashoffset, filter]
Duur + easing:      [token + token]
Afstand / stagger:  [token, aantal elementen]
Tier:               [T1 / T2 / T3]
Reduced-motion:     [de zichtbare eindtoestand, concreet]
Zonder JS:          [wat de gebruiker ziet als het script faalt]
Kosten:             [alleen-CSS / composited / main-thread JS / canvas-rAF]
Meting:             [welk cijfer dit raakt en welke drempel geldt]
```

## 4. Performance-budget

| Regel | Grens |
|---|---|
| Geanimeerde properties | Alleen composited; nooit width/height/top/left/margin/padding |
| LCP-element | Beweegt niet |
| Layout shift | Gereserveerde hoogte via aspect-ratio of min-height; nul shift |
| Canvas / rAF | Pauzeert buiten viewport en bij `document.hidden`; beeindigt zichzelf bij stilstand |
| Scroll-listeners | `{passive:true}`, rAF-gethrottled, metingen voor een schrijfronde |
| Mobiel | Expliciet lichter: minder elementen, lagere DPR-cap, automatische beweging standaard uit |
| Libraries | [AANVULLEN: nul is het uitgangspunt; elke library is een eigen DDR] |
| Budget nieuw motion-JS | [AANVULLEN, bijv. 12 KB gzipped] |

## 5. Toegankelijkheid (WCAG 2.2 AA)

1. `prefers-reduced-motion: reduce` levert een volwaardige eindtoestand, geen versnelde animatie. Ook JS leest de media query zelf uit en luistert op `change`.
2. 2.2.2 Pause, Stop, Hide: automatische beweging langer dan 5 seconden krijgt een zichtbare pauzeknop. Pauze op hover is niet genoeg.
3. 2.3.3 Animation from Interactions: gedekt door punt 1.
4. Toetsenbord: elk interactief element in een T3 is bereikbaar en bedienbaar met een zichtbare focus-ring. Een canvas is `role="img"` en niet focusbaar; de knoppenrij ernaast is de bediening.
5. Geen beweging op de primaire call-to-action of op velden tijdens invullen.
6. Dimmen van inactieve elementen raakt nooit een interactief element.

## 6. Geblokkeerde patronen

| # | Patroon | Reden |
|---|---|---|
| B-01 | Scroll-jacking | Desorienteert, sterkst bij taakgerichte gebruikers |
| B-02 | Smooth-scroll-library op catalogus-, formulier- of afrekenpagina's | Zelfde reden |
| B-03 | Beweging op of onder het LCP-element | Laadmetriek |
| B-04 | Autoplay-video met geluid | WCAG 1.4.2 |
| B-05 | Oneindige beweging zonder pauzemogelijkheid | WCAG 2.2.2 |
| B-06 | Beweging op de primaire CTA of op velden tijdens invullen | Verlaagt voltooiing |
| B-07 | AI-gegenereerd beeld of video bij een klant die dat verbiedt | Merkregel P2 |
| B-08 | Beweging als enige drager van informatie | Onbruikbaar bij reduced motion en zonder JS |
| B-09 | Parallax op tekst | Leesbaarheid |
| B-10 | Externe motion-library zonder DDR | Permanente afhankelijkheid |

[Klantspecifieke blokkades hieronder toevoegen, met de bron erbij.]

## 7. Motion-schuld: bestaande beweging zonder DDR

| # | Bevinding | Herkomst | Actie |
|---|---|---|---|
| M1 | | | [onder tokens brengen / DDR schrijven / verwijderen] |

[Elke build bevat beweging die door geen enkele DDR gedekt is. Deze lijst is de enige plek
waar die schuld zichtbaar blijft.]
