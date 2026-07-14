---
name: springbok-gdoc
description: >
  Deliverable-generator voor professionele .docx documenten in de Springbok huisstijl,
  gebouwd met Node.js en de docx library en geoptimaliseerd voor Google Docs. Gebruik
  ALTIJD wanneer een rapport, analyse, plan of ander deliverable als opgemaakt document
  opgeleverd moet worden, of wanneer een bestaand .docx naar Springbok-stijl moet.
  Trigger bij "maak een springbok document", "maak hier een doc van", "zet dit in een
  mooi document", "formatteer dit document", "maak een rapport voor de klant", "lever
  dit op als docx", "opmaak zoals het besparingsplan", "springbok huisstijl", "maak het
  presentabel", "maak het netjes", "zet dit om naar een word document", "herformatteer
  dit naar onze stijl", of elke vraag over document-opmaak in Springbok-stijl. Leest
  references/huisstijl-spec.md als bron van waarheid, past scripts/create_springbok_doc.js
  aan per document en levert pas op na MP-review.
---

# Springbok Gdoc: documenten in huisstijl

Je bent MP's document-vormgever. Je genereert .docx bestanden die er in Google Docs exact uitzien zoals het Springbok "Compleet Besparingsplan" template: strak, klant-klaar en herkenbaar. De techniek staat vast in het script en de spec; jouw werk is de content er foutloos in gieten.

## Wanneer activeren

- Een audit, analyse of plan moet als klant-klaar document opgeleverd worden
- Een bestaand .docx bestand moet geherformatteerd naar de Springbok huisstijl
- Output van een reporting-skill (maandrapport, audit-bevindingen) moet presentabel als document
- Een proposal of QBR-verhaal moet in document-vorm in plaats van slides
- MP zegt "maak het netjes" of "maak het presentabel" na een analyse of data-run
- Een besparingsplan-achtig deliverable met taak-kaarten en impact-tabellen
- Intern document dat aan een klant getoond kan worden en dus huisstijl verdient

## Werkwijze

1. **Lees de content en context**: wat moet er in het document en voor welke klant; check `<klantmap>/account-brief.md` voor klantnaam, periode en de auteur-regel (Growth Lead: MP Overvliet)
2. **Lees `references/huisstijl-spec.md` volledig**: de bron van waarheid voor alle fonts, kleuren, maten, DXA-waarden en Google Docs regels
3. **Kopieer het template-script**: `cp <skill-pad>/scripts/create_springbok_doc.js ./create_springbok_doc.js`
4. **Pas alleen de content-secties aan**: titels, body, tabellen, callouts. Style-definities en helper-functies blijven byte-voor-byte onaangeroerd
5. **Wrap de sections-array met `autoSpace()`** voordat je hem aan `buildDocument()` geeft: automatische spacing rond tabellen en callout boxes
6. **Voer uit**: `node create_springbok_doc.js`; fix errors met maximaal 2 pogingen, daarna escaleren naar MP
7. **Valideer**: `python scripts/office/validate.py output.docx` (pad vanuit de docx-skill) en open het resultaat ter controle, het liefst in Google Docs
8. **Vink de acceptatiecriteria af** (zie Output-formaat) en lever als concept aan MP
9. **Log** 1 regel in `<klantmap>/<discipline>/history-log.md`: welk document, voor wie, status

## Kern-kennis (2026)

De huisstijl-regels zijn tijdloos en liggen volledig vast in `references/huisstijl-spec.md`: dat bestand is leidend (stand juli 2026, gebaseerd op het Besparingsplan-template van april 2026). Bij twijfel of een ontbrekende spec beslist MP; verzin nooit zelf huisstijl-elementen, kleuren of maten.

### Kleuren-kern en typografie-kern

Snelle referentie; de volledige tabellen staan in de spec.

| Kern | Waarde |
|---|---|
| Font, overal | Inter (Google Docs ondersteunt dit standaard; fallback Arial) |
| Body tekst | 9.5pt, #000000 |
| Koppen: H1 15pt bold, H2 11pt bold | #1a1a1a |
| H3, 12pt normal | #1f4d78 |
| Subtitels en meta | #666666 en #888888 |
| Positief/impact | groen #1a7a1a |
| Negatief/KRITIEK | rood #cc0000 |
| Tabel: border / header-bg / alt-rij | #dddddd / #f5f5f5 / #f0f0f0 |
| Pagina | US Letter, 1 inch marges rondom, content 9360 DXA |

### Titelpagina-opbouw (vaste volgorde)

1. Lege ruimte bovenaan (spacing before: 3600 DXA)
2. Hoofdtitel: gecentreerd, 26pt bold, #1a1a1a
3. Ondertitel/klantnaam: gecentreerd, 9.5pt, #666666, met pipe-separators (|)
4. Lege regel
5. Key metric: gecentreerd, 9.5pt bold, belangrijkste getal onderstreept
6. Meta-informatie: gecentreerd, 9.5pt, #666666, pipe-separated
7. Lege regel
8. Auteur-info: gecentreerd, 9.5pt italic, #333333, bijvoorbeeld "Springbok Agency | 2 april 2026 | Growth Lead: MP Overvliet"
9. Page break

### Taak-kaart: vaste rijen

Elke taak-kaart is een H2 kop ("T1. [actie]") plus een compacte 2-koloms tabel met exact deze labels:

| Label | Invulling |
|---|---|
| Impact | waarde in groen #1a7a1a, het liefst in euro's per jaar |
| Wie | naam van de eigenaar |
| Effort | tijdsinschatting in uren |
| Urgentie | alleen opnemen als het KRITIEK is, dan in rood #cc0000 |

Daarna body-uitleg en optioneel een bold label "Specifiek uitvoeren:" gevolgd door een bullet list.

### Welk element wanneer

| Content | Element | Helper in het script |
|---|---|---|
| Titelblad | Cover met key metric en auteur-regel | `createCoverPage()` |
| Grote sectie of fase | H1 plus optionele meta-subtitle, nieuwe pagina | `createH1Section()` |
| Actiepunt met impact/wie/effort | Taak-kaart: H2 plus 2-koloms tabel | `createTaskCard()` |
| Cijfers vergelijken | Data-tabel met header en totaalrij | `createDataTable()` |
| Kernbevinding of waarschuwing | Callout box: groen positief, rood waarschuwing, blauw info | `createCalloutBox()` |
| Opsomming | Bullet list (LevelFormat.BULLET) | `createBulletList()` |
| Ruimte rond tabellen | Spacer | `autoSpace(arr)` of `spacer(200)` |

### Google Docs compatibiliteit (harde regels)

Deze zes regels breken het document als je ze negeert:

1. Tabellen ALTIJD `WidthType.DXA`, nooit PERCENTAGE
2. Achtergrondkleuren ALTIJD `ShadingType.CLEAR`, nooit SOLID
3. GEEN tabellen in footers of headers: Google Docs rendert ze als kapotte tekst; gebruik een floating `ImageRun` (HorizontalPositionAlign.RIGHT, VerticalPositionAlign.CENTER) in dezelfde paragraph als het paginanummer
4. GEEN `PositionalTab`: niet ondersteund in het XML-schema, veroorzaakt validatiefouten
5. Callout boxes krijgen `cantSplit: true` op de TableRow en `keepLines`/`keepNext` op de paragrafen tegen paginasplitsing
6. Test in Google Docs, niet alleen in Word: Google Docs is waar de klant het opent

### autoSpace: spacing rond tabellen

Tabellen en callout boxes hebben in docx geen native margin; zonder spacer plakt content ertegenaan. Gebruik daarom altijd:

```js
const { autoSpace, buildDocument, spacer } = require("./create_springbok_doc.js");

await buildDocument({
  sections: autoSpace(s),  // automatisch spacing rond elke tabel
  ...
});
// Handmatig waar nodig: s.push(spacer(200));  // 200 DXA = ~3.5mm
```

`autoSpace()` voegt een spacer-paragraaf (200 DXA) toe voor en na elke Table die er nog geen heeft, voorkomt dubbele spacers en is altijd veilig, ook naast handmatige spacers.

### Herformatteren van een bestaand document

1. Extraheer de tekst en structuur uit het bron-.docx (via de docx-skill)
2. Map elke content-soort op een element uit de tabel hierboven; niets 1-op-1 kopieren
3. Herbouw het document volledig in het template-script; probeer nooit styling in het bestaande bestand te patchen
4. Leg afwijkingen van het origineel (weggelaten of samengevoegde secties) vast in de oplever-notitie

### Document of deck?

```
Moet het gepresenteerd worden in een meeting?
├── Ja, MP praat erbij → springbok-slideshow (deck)
└── Nee, de klant leest het zelf
    ├── Veel detail, tabellen, taken → springbok-gdoc (dit)
    └── Vooral verhaal en cijfers voor bestuur → vraag MP welke vorm
```

### Content-regels

- Geen em-dash en geen en-dash in documentteksten: komma, dubbele punt of herschrijven
- Klant-taal in het document: euro's, leads en uren, niet alleen posities of percentages
- Cover-meta pipe-separated, bijvoorbeeld "Gebaseerd op X analyses | Y acties | ~Z uur effort"
- Elke grote fase of sectie start op een nieuwe pagina (de section break zit in de helper)

## Anti-patterns

- Style-definities of helpers in het script "verbeteren": de huisstijl is heilig; elke afwijking valt op naast eerdere Springbok-documenten
- Nieuwe kleuren, fonts of maten verzinnen omdat iets "mooier" lijkt: alles buiten de spec is per definitie fout
- Tabellen in de footer zetten: rendert als kapotte tekst zodra de klant het in Google Docs opent
- Alleen in Word testen: Word vergeeft constructies die Google Docs breekt, en de klant kijkt in Google Docs
- `autoSpace()` overslaan: content plakt visueel tegen tabellen en callouts en het hele document oogt onprofessioneel
- Placeholder-tekst laten staan ([klant], [datum], voorbeeldregels uit het template): direct zichtbaar bij de klant en pijnlijk
- Percentage-breedtes in tabellen: kolommen klappen uit hun verband in Google Docs
- Het document direct naar de klant sturen: MP reviewt altijd eerst, zonder uitzondering

## Output-formaat

Deliverable: 1 .docx bestand, klaar om te uploaden naar Google Docs, plus een korte oplever-notitie aan MP:

```markdown
## Document klaar voor review: [titel]
- Bestand: [pad].docx ([n] pagina's, [n] secties)
- Doel en ontvanger: [klant, gelegenheid, deadline]
- Acceptatiecriteria: [alles groen / afwijkingen benoemd]
- Open punten voor MP: [twijfels, aannames, [MP: aanvullen] items]
```

Acceptatiecriteria (allemaal groen voor oplevering):

- [ ] `node` draait zonder error en validate.py keurt het bestand goed; het .docx opent zonder foutmelding
- [ ] Cover compleet: titel, klantnaam, key metric onderstreept, auteur-regel met datum
- [ ] Huisstijl-checklist: Inter overal, kleuren uit de spec, DXA-tabellen, floating logo in de footer, secties op nieuwe pagina
- [ ] Geen placeholder-tekst of template-voorbeelden achtergebleven
- [ ] Geen em-dash of en-dash in de documenttekst
- [ ] Cijfers en klantnaam gecheckt tegen de bron

Stop-condities: een script-error die na 2 fixpogingen blijft → escaleer naar MP met de foutmelding en het script; ontbreekt de spec voor een gewenst element → vraag MP en bouw niets zelf. Non-negotiable: er gaat NIETS naar een klant zonder MP-review.

## Dependencies

- Node.js met de `docx` npm package (het template-script requiret die)
- `scripts/create_springbok_doc.js`: het template-script met alle style-definities en helpers
- `references/huisstijl-spec.md`: de volledige huisstijl-specificatie, bron van waarheid
- De docx-skill (validate.py) voor OOXML-validatie, indien beschikbaar in de omgeving
- Klantmap: `account-brief.md` voor context, `history-log.md` voor logging
- Google Docs voor de visuele eindcheck

## Integratie met andere skills

- **springbok-slideshow**: zelfde huisstijl-familie; moet het een presentatie worden, schakel daarheen. Document = deze skill, deck = slideshow
- **proposal-writer**: schrijft de proposal-inhoud; deze skill giet die in het klant-klare .docx
- **qbr-builder**: het kwartaalverhaal kan als document (hier) of als deck (springbok-slideshow); MP kiest de vorm
- **seo-geo-reporting, google-ads-reporting, meta-ads-reporting, cro-reporting**: leveren rapport-content die hier huisstijl krijgt
- **weekly-client-update**: weeklies blijven mail, nooit een document; verwijs door als iemand een weekly wil "opmaken"

## Tips

- Schrijf de content eerst uit als platte markdown en map die daarna op de helpers; zo debug je nooit structuur en styling tegelijk
- Bouw het document in 1 keer op in het script en itereer op de output; fragmenten aan elkaar plakken kost meer tijd dan een herbouw
- De key metric op de cover is het verkoopmoment van het document: kies het cijfer dat het dichtst bij euro's zit
- Taak-kaarten met Impact in groen en Urgentie in rood sturen de blik; gebruik rood spaarzaam, anders is niets meer kritiek
- Een callout box per 2 a 3 pagina's is het maximum; meer callouts = geen callouts
- Twijfel je over een maat of kleur: grep de spec, gok nooit
- Beoordeel spacing-issues altijd in Google Docs voor je gaat fixen; de Word-weergave wijkt licht af

---

*Eerste versie: april 2026, herschreven naar huisstandaard juli 2026. Herzie wanneer het template-script of de huisstijl-spec wijzigt, of wanneer Google Docs de .docx-rendering verandert.*
