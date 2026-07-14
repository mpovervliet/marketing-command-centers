# Springbok Google Docs huisstijl-spec (volledige technische referentie)

Dit is de volledige, ongewijzigde huisstijl-specificatie voor springbok-gdoc. De waarden hieronder (fonts, kleuren, maten, DXA-waarden, code) zijn de bron van waarheid. SKILL.md bevat de beslislaag; dit bestand de exacte specs. Wijzig niets zonder MP-akkoord.

## Design Systeem

### Font & Typografie

| Element | Font | Grootte | Gewicht | Kleur |
|---------|------|---------|---------|-------|
| Hoofdtitel (cover) | Inter | 26pt (sz: 52) | Bold | #1a1a1a |
| Subtitel (cover) | Inter | 9.5pt (sz: 19) | Normal | #666666 |
| Key metric (cover) | Inter | 9.5pt (sz: 19) | Bold + underline | #1a1a1a |
| Meta-info (cover) | Inter | 9.5pt (sz: 19) | Normal | #666666 |
| Footer-info (cover) | Inter | 9.5pt (sz: 19) | Italic | #333333 |
| H1 (sectiekoppen) | Inter | 15pt (sz: 30) | Bold | #1a1a1a |
| H1 subtitle | Inter | 9.5pt (sz: 19) | Normal | #888888 |
| H2 (subsecties) | Inter | 11pt (sz: 22) | Bold | #1a1a1a |
| H3 (sub-subsecties) | Inter | 12pt (sz: 24) | Normal | #1f4d78 |
| Body tekst | Inter | 9.5pt (sz: 19) | Normal | #000000 |
| Bold labels | Inter | 8.5pt (sz: 17) | Bold | #1a1a1a |
| Tabel header | Inter | 8.5pt (sz: 17) | Bold | #1a1a1a |
| Tabel body | Inter | 8.5pt (sz: 17) | Normal | #000000 |

**Let op:** Google Docs ondersteunt Inter standaard. In de .docx gebruiken we Inter als primair font. Als Inter niet beschikbaar is in de docx omgeving, val terug op Arial (wordt automatisch gemapped door Google Docs).

### Kleurenpalet

| Gebruik | Kleur | Hex |
|---------|-------|-----|
| Primair tekst | Zwart | #000000 |
| Koppen | Donkergrijs | #1a1a1a |
| Body donker | Donkergrijs | #333333 |
| Subtitels/meta | Middengrijs | #666666 |
| Licht meta | Lichtgrijs | #888888 |
| Accent blauw (H3) | Donkerblauw | #1f4d78 |
| Link blauw | Blauw | #2e74b5 |
| Positief/impact | Groen | #1a7a1a |
| Negatief/kritiek | Rood | #cc0000 |
| Tabel border | Lichtgrijs | #dddddd |
| Tabel header bg | Lichtgrijs | #f5f5f5 |
| Tabel alt row bg | Nog lichter | #f0f0f0 |

### Paginastructuur

- **Pagina formaat:** US Letter (12240 x 15840 DXA)
- **Marges:** 1 inch rondom (1440 DXA)
- **Content breedte:** 9360 DXA
- **Footer:** Paginanummer links + Springbok logo rechts (floating image, GEEN tabel)
- **BELANGRIJK:** Gebruik NOOIT tabellen in footers. Google Docs rendert ze kapot. Gebruik in plaats daarvan een floating ImageRun (HorizontalPositionAlign.RIGHT, VerticalPositionAlign.CENTER) in dezelfde paragraph als het paginanummer.
- **Sectie-breaks:** Elke grote Fase/sectie begint op een nieuwe pagina

### Titelpagina (Cover)

De titelpagina heeft een specifieke structuur:

1. **Lege ruimte bovenaan** (spacing before: 3600 DXA)
2. **Hoofdtitel** - gecentreerd, 26pt bold, #1a1a1a
3. **Ondertitel/klantnaam** - gecentreerd, 9.5pt, #666666, met pipe-separators (|)
4. **Lege regel**
5. **Key metric** - gecentreerd, 9.5pt bold, met belangrijkste getal onderstreept
6. **Meta-informatie** - gecentreerd, 9.5pt, #666666, pipe-separated (bijv. "Gebaseerd op X analyses | Y acties | ~Z uur effort")
7. **Lege regel**
8. **Auteur-info** - gecentreerd, 9.5pt italic, #333333 (bijv. "Springbok Agency | 2 april 2026 | Growth Lead: MP Overvliet")
9. **Page break**

### Sectie-opmaak (H1 secties)

Elke grote sectie:
1. **H1 kop** - 15pt bold, #1a1a1a
2. **Optionele H1 subtitle** - direct onder H1, 9.5pt, #888888, pipe-separated meta (bijv. "Week 1-2 april | 25.000 - 35.000 EUR/jaar | ~4 uur effort")
3. **Body tekst** - 9.5pt, normaal

### Taak-kaarten (voor actiepunten)

Elke taak heeft:
1. **H2 kop** - bold, bijv. "T1. Brand Exclusions uitbreiden naar alle PMax campagnes"
2. **Compact tabel** - 2 kolommen (Label | Waarde):
   - Impact: waarde in **groen** (#1a7a1a)
   - Wie: naam
   - Effort: tijdsinschatting
   - Urgentie: eventueel in **rood** (#cc0000) als KRITIEK
3. **Body tekst** - uitleg
4. **Optioneel "Specifiek uitvoeren:"** - bold label, gevolgd door bullet list

### Tabellen

**Compacte taak-tabellen (2 kolommen):**
- Breedte: volledige content breedte (9360 DXA)
- Kolommen: ~30% label (2808 DXA), ~70% waarde (6552 DXA)
- Borders: 1pt solid #dddddd
- Header: bold labels in linkerkolom, lichte achtergrond #f5f5f5
- Cell padding: top/bottom 40 DXA, left/right 80 DXA

**Data-tabellen (meerdere kolommen):**
- Breedte: volledige content breedte (9360 DXA)
- Header rij: bold tekst, achtergrond #f5f5f5
- Alternerende rijen: wit / #f0f0f0
- Totaalrij: bold
- Borders: 1pt solid #dddddd
- Cell padding: top/bottom 40 DXA, left/right 80 DXA

### Bullet Lists

- Standaard bullet points (geen unicode, gebruik LevelFormat.BULLET)
- Indent: 720 DXA left, 360 DXA hanging
- Font: Inter 9.5pt
- Tussen items: geen extra spacing

### Callout Boxes (voor kernbevindingen)

Gebruik een 1-cel tabel met speciale styling:
- Top border: 6pt solid accent-kleur (groen #27AE60 voor positief, rood #E74C3C voor waarschuwing, blauw #2E74B5 voor info)
- Andere borders: 1pt solid #BDC3C7
- Achtergrond: lichte tint van accent (groen: #E8F8F5, rood: #FDEDEC, blauw: #EBF5FB)
- Label: bold, accent-kleur, 12pt
- Body: #2C3E50, 11pt
- **Anti-paginasplitsing:** Callout boxes gebruiken `cantSplit: true` op de TableRow en `keepLines: true` / `keepNext: true` op de paragrafen. Dit voorkomt dat een callout box halverwege wordt gesplitst over twee pagina's. Als het blok niet meer past op de huidige pagina, wordt het automatisch naar de volgende pagina verplaatst.

### Spacing tussen elementen

Tabellen en callout boxes in docx hebben geen native margin-before of margin-after. Zonder extra spacing plakt content direct tegen tabellen en callout boxes aan. Dit is vooral zichtbaar bij callout boxes (die als 1-cel tabel zijn geimplementeerd): als een bullet list of body tekst direct erboven staat, plakt de callout visueel aan het vorige element. Dit ziet er lelijk en onprofessioneel uit.

**Oplossing: gebruik `autoSpace()`**

Het script exporteert een `autoSpace(arr, gap)` utility. Wrap je sections-array hiermee voordat je het aan `buildDocument()` geeft:

```js
const { autoSpace, buildDocument } = require("./scripts/create_springbok_doc.js");

// In je main functie:
await buildDocument({
  sections: autoSpace(s),  // automatisch spacing rond elke tabel
  ...
});
```

`autoSpace()` doet het volgende:
- Voegt een spacer-paragraaf (200 DXA) toe VOOR elke Table die niet al wordt voorafgegaan door een spacer
- Voegt een spacer-paragraaf (200 DXA) toe NA elke Table die niet direct gevolgd wordt door een spacer
- Voorkomt dubbele spacers
- Is veilig om altijd te gebruiken, ook als je al handmatige spacers hebt

**Handmatige spacers** zijn ook beschikbaar via `spacer(after)`:
```js
const { spacer } = require("./scripts/create_springbok_doc.js");
s.push(spacer(200));  // 200 DXA = ~3.5mm ruimte
```

Handmatige spacers zijn zelden nodig als je `autoSpace()` gebruikt, omdat het automatisch spacing rond alle tabellen (inclusief callout boxes) toevoegt.

### Geen em-dash of en-dash

Per project CLAUDE.md: gebruik NOOIT em-dash (--) of en-dash (-) in teksten. Gebruik komma, punt, of herschrijf de zin.

## Technische implementatie

Het formatting script (`scripts/create_springbok_doc.js`) is een template dat je moet aanpassen per document. Het bevat:

1. Alle style-definities (fonts, kleuren, heading styles)
2. Helper-functies voor veelvoorkomende elementen:
   - `createCoverPage()` - titelpagina
   - `createH1Section()` - sectiekop met optionele subtitle
   - `createTaskCard()` - taak met impact/wie/effort tabel
   - `createDataTable()` - data tabel met headers
   - `createCalloutBox()` - callout/kernbevinding box (met anti-paginasplitsing)
   - `createBulletList()` - bullet list
   - `spacer(after)` - lege paragraaf voor visuele ruimte tussen elementen
   - `autoSpace(arr, gap)` - post-processor die automatisch spacing na tabellen toevoegt
3. Paginastructuur met headers/footers

### Stap-voor-stap

1. Kopieer `scripts/create_springbok_doc.js` naar je werkdirectory
2. Pas de content-secties aan (titels, body tekst, tabellen, etc.)
3. Voer uit: `node create_springbok_doc.js`
4. Valideer: `python scripts/office/validate.py output.docx` (gebruik het pad naar validate.py vanuit de docx skill)
5. Open in Google Docs om visueel te controleren

## Belangrijk: Google Docs compatibiliteit

- Gebruik ALTIJD `WidthType.DXA` voor tabellen (nooit PERCENTAGE)
- Gebruik `ShadingType.CLEAR` (nooit SOLID) voor achtergrondkleuren
- Inter font wordt standaard ondersteund door Google Docs
- Test het document altijd in Google Docs, niet alleen in Word
- **GEEN tabellen in footers/headers.** Google Docs rendert tabellen in footers als kapotte tekst. Gebruik floating images (via `ImageRun` met `floating` property) voor logo-positionering naast paginanummers.
- **Geen PositionalTab gebruiken.** Wordt niet ondersteund in het XML schema en veroorzaakt validatiefouten. Gebruik floating images in plaats daarvan.
