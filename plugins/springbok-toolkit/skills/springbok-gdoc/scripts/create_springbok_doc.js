#!/usr/bin/env node
/**
 * Springbok Google Docs Huisstijl - Document Generator
 *
 * Template script voor het genereren van professionele .docx documenten
 * in de Springbok Agency huisstijl, geoptimaliseerd voor Google Docs.
 *
 * Gebruik: Kopieer dit bestand, pas de CONTENT sectie onderaan aan,
 * en voer uit met: node create_springbok_doc.js
 */

const fs = require("fs");
const path = require("path");
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, LevelFormat,
  HeadingLevel, BorderStyle, WidthType, ShadingType,
  PageNumber, PageBreak, TabStopType, TabStopPosition,
  ImageRun, HorizontalPositionRelativeFrom, HorizontalPositionAlign,
  VerticalPositionRelativeFrom, VerticalPositionAlign
} = require("docx");

// ============================================================
// SPRINGBOK LOGO SVG PATHS (vectordata voor het logo)
// ============================================================

const LOGO_BLOP = "M0,13.8518 C0,5.25414 5.1478,0 13.9878,0 C22.8278,0 27.9739,5.25588 27.9739,13.8518 C27.9739,21.991 22.9341,27.7036 13.9878,27.7036 C5.04146,27.7036 0,22.636 0,13.8518 Z";
const LOGO_WORDMARK = "M35.3201,17.0683 L39.9815,16.2368 C40.3023,17.4972 41.3482,18.1404 43.0619,18.1404 C44.5628,18.1404 45.2862,17.6314 45.2862,16.8278 C45.2862,16.0241 44.643,15.7016 41.6429,15.3268 C38.0518,14.8718 35.8012,13.6917 35.8012,10.6915 C35.8012,7.69141 38.1598,5.54721 42.579,5.54721 C46.9981,5.54721 49.144,7.31487 49.6513,9.9681 L45.2845,10.7177 C45.0701,9.5915 44.1322,9.08252 42.5249,9.08252 C41.024,9.08252 40.4888,9.6456 40.4888,10.3952 C40.4888,11.3592 41.8015,11.5213 44.1061,11.8159 C47.8837,12.325 50,13.3169 50,16.4512 C50,19.5856 47.6954,21.864 42.8195,21.864 C38.4248,21.864 35.8535,19.8819 35.3184,17.0683 M55.7875,19.1846 L55.7875,26.7398 L50.9919,26.7398 L50.9919,5.89586 L55.1443,5.89586 L55.5993,8.57523 C56.3768,6.75354 57.93,5.57511 60.2869,5.57511 C64.1185,5.57511 66.4231,8.28062 66.4231,13.6394 L66.4231,14.0943 C66.4231,15.862 66.1546,17.2566 65.6194,18.4071 C64.5752,20.6577 62.6716,21.7298 60.3147,21.7298 C57.9579,21.7298 56.5633,20.7919 55.7858,19.1846 M61.5995,14.0142 L61.5995,13.6394 C61.5995,10.8798 60.367,9.7014 58.6796,9.7014 C56.9921,9.7014 55.7335,10.9879 55.7335,13.6115 L55.7335,13.9601 C55.7335,16.371 56.8858,17.6575 58.6534,17.6575 C60.4211,17.6575 61.6013,16.4512 61.6013,14.0142 M67.7113,5.89586 L71.6232,5.89586 L72.2926,9.08426 C72.8016,6.6472 74.3566,5.68145 77.1684,5.68145 L78.0523,5.68145 L78.0523,10.7996 L76.2306,10.7996 C75.2927,10.7996 74.5693,10.9338 74.0341,11.1744 C73.016,11.6294 72.6935,12.6753 72.6935,14.5493 L72.6935,21.4351 L67.7113,21.4351 L67.7113,5.89586 Z M79.2586,2.60113 C79.2586,0.99386 80.3028,0.001953 82.0983,0.001953 C83.8939,0.001953 84.9381,0.99386 84.9381,2.60113 C84.9381,4.2084 83.92,5.20031 82.0983,5.20031 C80.2766,5.20031 79.2586,4.26244 79.2586,2.60113 Z M82.0983,6.43278 C83.0902,6.43278 84.0002,6.21836 84.6435,5.9778 L84.6435,21.4369 L79.5793,21.4369 L79.5793,5.97605 C80.2226,6.21836 81.1064,6.43104 82.0983,6.43104 M86.5994,21.4351 L86.5994,5.89586 L90.7535,5.89586 L91.2085,8.52119 C92.0383,6.72739 93.6194,5.57511 96.0321,5.57511 C99.5151,5.57511 101.311,7.7716 101.311,11.551 L101.311,21.4369 L96.3807,21.4369 L96.3807,12.9438 C96.3807,11.014 95.8979,9.7816 94.1041,9.7816 C92.3103,9.7816 91.5589,11.1762 91.5589,13.3186 L91.5589,21.4369 L86.6029,21.4369 L86.5994,21.4351 Z M104.872,27.5975 C102.756,27.0623 102.032,26.0704 102.032,24.6776 C102.032,23.1244 103.077,22.1063 105.381,21.6775 C103.399,21.355 102.301,20.3108 102.301,18.6233 C102.301,16.7999 103.507,15.6214 105.65,15.1664 C103.722,14.443 102.703,13.0763 102.703,10.8781 L102.703,10.8519 C102.703,7.55718 105.329,5.86797 109.375,5.73549 C112.321,5.54722 112.535,5.22646 112.535,3.29669 L112.535,0.80385 L117.359,0.80385 L117.359,3.21475 C117.359,5.38509 116.69,6.16258 113.555,6.29681 L113.555,6.43104 C115.992,7.04641 117.172,8.70946 117.172,10.7717 L117.172,10.9059 C117.172,14.4151 114.519,16.2368 109.858,16.2368 L108.948,16.2368 C108.17,16.2368 107.581,16.2908 107.18,16.317 C106.35,16.4512 106.162,16.6656 106.162,17.0683 C106.162,17.6035 106.645,17.7918 108.332,17.7918 L111.655,17.7918 C116.022,17.7918 117.978,19.5333 117.978,22.4532 C117.978,25.856 115.485,27.9985 109.591,27.9985 L109.377,27.9985 C107.447,27.9985 105.946,27.8921 104.876,27.5975 M113.771,22.9622 C113.771,22.2388 113.208,21.7821 111.413,21.7821 L109.028,21.7821 C107.421,21.8622 106.455,22.3713 106.455,23.2028 L106.455,23.2307 C106.455,23.9541 107.206,24.5695 109.323,24.5695 L109.992,24.5695 C112.725,24.5695 113.77,23.9001 113.77,22.9622 M112.297,11.0123 L112.297,10.9059 C112.297,9.32483 111.305,8.78965 109.938,8.78965 C108.571,8.78965 107.553,9.45906 107.553,10.9321 L107.553,11.0402 C107.553,12.4069 108.465,13.0222 109.91,13.0222 C111.355,13.0222 112.295,12.379 112.295,11.0123 M123.281,18.836 L122.906,21.4351 L118.645,21.4351 L118.645,0.80385 L123.469,0.80385 L123.469,8.38696 C124.299,6.59316 125.828,5.57336 128.024,5.57336 C129.203,5.57336 130.247,5.86797 131.132,6.40315 C132.954,7.52754 134.08,9.7258 134.08,13.2349 L134.08,13.7178 C134.08,19.0225 131.749,21.8361 127.918,21.8361 C125.561,21.8361 124.034,20.6577 123.282,18.836 M129.23,13.6917 L129.23,13.3169 C129.23,10.8519 128.05,9.6194 126.363,9.6194 C124.675,9.6194 123.389,10.9582 123.389,13.2628 L123.389,13.6115 C123.389,16.3449 124.567,17.5773 126.337,17.5773 C128.106,17.5773 129.23,16.4251 129.23,13.6917 Z M135.098,14.0403 L135.098,13.5574 C135.098,11.7898 135.447,10.315 136.116,9.13656 C137.457,6.77795 139.894,5.57336 142.948,5.57336 C144.529,5.57336 145.868,5.86797 147.048,6.48334 C149.407,7.71581 150.773,10.0727 150.773,13.5574 L150.773,14.0403 C150.773,15.7557 150.451,17.2025 149.809,18.3531 C148.469,20.6856 146.112,21.8361 142.924,21.8361 C137.86,21.8361 135.1,19.2369 135.1,14.0386 M145.924,13.9845 L145.924,13.5557 C145.924,11.0105 144.88,9.6979 142.976,9.6979 C141.072,9.6979 139.948,10.9304 139.948,13.5557 L139.948,13.9845 C139.948,16.3954 141.154,17.6296 142.95,17.6296 C144.745,17.6296 145.924,16.4233 145.924,13.9845 Z M156.856,17.6819 L156.856,21.4334 L152.06,21.4334 L152.06,0.80385 L156.856,0.80385 L156.856,12.0303 C157.633,11.415 158.597,10.3952 159.375,9.29694 C160.206,8.1185 160.822,6.88603 161.17,5.89412 L166.314,5.89412 C165.751,7.71756 164.493,10.315 162.966,12.0303 C162.858,12.1646 162.751,12.2988 162.617,12.4051 L167.627,21.4351 L162.214,21.4351 L159.24,15.7557 C158.357,16.5331 157.553,17.1764 156.91,17.6575 L156.856,17.6854 L156.856,17.6819 Z";

/**
 * Genereer het Springbok logo als PNG Buffer
 * @param {string} blopColor - Hex kleur voor de blop (bijv. "#F18417" voor oranje)
 * @param {string} textColor - Hex kleur voor de tekst (bijv. "#333333")
 * @returns {Buffer} PNG buffer
 */
async function renderLogoSvgToBuffer(blopColor = "#F18417", textColor = "#333333") {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 168 28" width="504" height="84"><path fill="${blopColor}" d="${LOGO_BLOP}"/><path fill="${textColor}" d="${LOGO_WORDMARK}"/></svg>`;
  try {
    const sharp = require("sharp");
    return await sharp(Buffer.from(svg)).png().toBuffer();
  } catch (e) {
    // sharp niet beschikbaar - return null, script valt terug op tekst
    return null;
  }
}

// ============================================================
// DESIGN TOKENS - Springbok Google Docs Huisstijl
// ============================================================

const COLORS = {
  // Tekst
  black: "000000",
  heading: "1a1a1a",
  bodyDark: "333333",
  subtitle: "666666",
  metaLight: "888888",

  // Accenten
  accentBlue: "1f4d78",
  linkBlue: "2e74b5",
  positive: "1a7a1a",
  negative: "cc0000",

  // Tabel
  tableBorder: "dddddd",
  tableHeaderBg: "f5f5f5",
  tableAltRowBg: "f0f0f0",

  // Callout - Groen
  calloutGreenBorder: "27AE60",
  calloutGreenBg: "E8F8F5",
  calloutGreenText: "27AE60",

  // Callout - Rood
  calloutRedBorder: "E74C3C",
  calloutRedBg: "FDEDEC",
  calloutRedText: "E74C3C",

  // Callout - Blauw
  calloutBlueBorder: "2E74B5",
  calloutBlueBg: "EBF5FB",
  calloutBlueText: "2E74B5",

  // Callout - body
  calloutBody: "2C3E50",
  calloutLightBorder: "BDC3C7",
};

const FONTS = {
  primary: "Inter",
  fallback: "Arial",
};

const SIZES = {
  coverTitle: 52,       // 26pt
  coverSubtitle: 19,    // 9.5pt
  h1: 30,               // 15pt
  h2: 22,               // 11pt
  h3: 24,               // 12pt
  body: 19,             // 9.5pt
  tableText: 17,        // 8.5pt
  calloutLabel: 24,     // 12pt
  calloutBody: 22,      // 11pt
  small: 16,            // 8pt
};

const PAGE = {
  width: 12240,          // US Letter
  height: 15840,
  margin: 1440,          // 1 inch
  contentWidth: 9360,    // width - 2 * margin
};

// ============================================================
// HELPER FUNCTIES
// ============================================================

/** Maak een TextRun met Inter font */
function text(content, options = {}) {
  return new TextRun({
    text: content,
    font: FONTS.primary,
    size: options.size || SIZES.body,
    bold: options.bold || false,
    italics: options.italic || false,
    underline: options.underline ? {} : undefined,
    color: options.color || COLORS.black,
    ...options.extra,
  });
}

/** Standaard tabel border */
function tableBorder(color) {
  const c = color || COLORS.tableBorder;
  return { style: BorderStyle.SINGLE, size: 1, color: c };
}

function allBorders(color) {
  const b = tableBorder(color);
  return { top: b, bottom: b, left: b, right: b };
}

/** Cel margins */
function cellMargins(top = 40, bottom = 40, left = 80, right = 80) {
  return { top, bottom, left, right };
}

// ============================================================
// COVER PAGE
// ============================================================

/**
 * Maak een titelpagina
 * @param {Object} opts
 * @param {string} opts.title - Hoofdtitel (bijv. "Ranking Analyse")
 * @param {string} opts.subtitle - Ondertitel/klantnaam (bijv. "Badenman / DMG Sanitair | Saniweb NL/BE/DE")
 * @param {string} opts.keyMetric - Kernmetriek (bijv. "Totaal besparingspotentieel: 73.000 - 111.000 EUR/jaar")
 * @param {string} opts.metaInfo - Meta-informatie (bijv. "Gebaseerd op 4 analyses | 12 acties | ~24 uur effort")
 * @param {string} opts.footerInfo - Auteur-info (bijv. "Springbok Agency | 2 april 2026 | Growth Lead: MP Overvliet")
 */
function createCoverPage({ title, subtitle, keyMetric, metaInfo, footerInfo, _logoParagraph }) {
  const children = [];

  // Optioneel: klant-logo bovenaan (als _logoParagraph is meegegeven)
  if (_logoParagraph) {
    children.push(new Paragraph({ spacing: { before: 1800 } }));
    children.push(_logoParagraph);
    children.push(new Paragraph({ spacing: { before: 800 } }));
  } else {
    // Lege ruimte bovenaan
    children.push(new Paragraph({ spacing: { before: 3600 } }));
  }

  // Hoofdtitel
  children.push(new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 200 },
    children: [text(title, { size: SIZES.coverTitle, bold: true, color: COLORS.heading })],
  }));

  // Ondertitel
  if (subtitle) {
    children.push(new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 400 },
      children: [text(subtitle, { size: SIZES.coverSubtitle, color: COLORS.subtitle })],
    }));
  }

  // Key metric
  if (keyMetric) {
    children.push(new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 100 },
      children: [text(keyMetric, { size: SIZES.coverSubtitle, bold: true })],
    }));
  }

  // Meta-informatie
  if (metaInfo) {
    children.push(new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 400 },
      children: [text(metaInfo, { size: SIZES.coverSubtitle, color: COLORS.subtitle })],
    }));
  }

  // Auteur-info
  if (footerInfo) {
    children.push(new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 200 },
      children: [text(footerInfo, { size: SIZES.coverSubtitle, italic: true, color: COLORS.bodyDark })],
    }));
  }

  // Geen page break nodig: cover zit in eigen sectie, sectie-break zorgt voor nieuwe pagina

  return children;
}

// ============================================================
// HEADING FUNCTIES
// ============================================================

/**
 * Maak een H1 sectiekop met optionele subtitle
 * @param {string} title - Koptekst
 * @param {string} [subtitle] - Optionele subtitle (pipe-separated meta)
 * @param {boolean} [pageBreakBefore] - Start op nieuwe pagina
 */
function createH1(title, subtitle, pageBreakBefore = false) {
  const children = [];

  if (pageBreakBefore) {
    children.push(new Paragraph({ children: [new PageBreak()] }));
  }

  children.push(new Paragraph({
    spacing: { before: pageBreakBefore ? 600 : 400, after: subtitle ? 60 : 200 },
    children: [text(title, { size: SIZES.h1, bold: true, color: COLORS.heading })],
  }));

  if (subtitle) {
    children.push(new Paragraph({
      spacing: { after: 200 },
      children: [text(subtitle, { size: SIZES.body, color: COLORS.metaLight })],
    }));
  }

  return children;
}

/**
 * Maak een H2 subkop
 */
function createH2(title) {
  return new Paragraph({
    spacing: { before: 300, after: 120 },
    children: [text(title, { size: SIZES.h2, bold: true, color: COLORS.heading })],
  });
}

/**
 * Maak een H3 subkop
 */
function createH3(title) {
  return new Paragraph({
    spacing: { before: 240, after: 100 },
    children: [text(title, { size: SIZES.h3, color: COLORS.accentBlue })],
  });
}

// ============================================================
// BODY TEKST
// ============================================================

/**
 * Maak een body paragraaf
 * @param {string|TextRun[]} content - Tekst of array van TextRuns
 */
function createBody(content) {
  if (typeof content === "string") {
    return new Paragraph({
      spacing: { after: 120 },
      children: [text(content)],
    });
  }
  return new Paragraph({
    spacing: { after: 120 },
    children: content,
  });
}

/**
 * Maak een body paragraaf met bold label
 * @param {string} label - Bold label
 * @param {string} value - Normale tekst
 */
function createLabeledBody(label, value) {
  return new Paragraph({
    spacing: { after: 120 },
    children: [
      text(label, { bold: true }),
      text(" " + value),
    ],
  });
}

// ============================================================
// TABELLEN
// ============================================================

/**
 * Maak een compacte taak-tabel (2 kolommen: Label | Waarde)
 * Veelgebruikt voor Impact/Wie/Effort tabellen bij taakkaarten
 *
 * @param {Array<{label: string, value: string, valueColor?: string}>} rows
 */
function createTaskTable(rows) {
  const labelWidth = 2808;
  const valueWidth = 6552;

  return new Table({
    width: { size: PAGE.contentWidth, type: WidthType.DXA },
    columnWidths: [labelWidth, valueWidth],
    rows: rows.map(row => new TableRow({
      children: [
        new TableCell({
          width: { size: labelWidth, type: WidthType.DXA },
          borders: allBorders(),
          margins: cellMargins(),
          shading: { fill: COLORS.tableHeaderBg, type: ShadingType.CLEAR },
          children: [new Paragraph({
            children: [text(row.label, { size: SIZES.tableText, bold: true, color: COLORS.heading })],
          })],
        }),
        new TableCell({
          width: { size: valueWidth, type: WidthType.DXA },
          borders: allBorders(),
          margins: cellMargins(),
          children: [new Paragraph({
            children: [text(row.value, {
              size: SIZES.tableText,
              bold: row.valueColor ? true : false,
              color: row.valueColor || COLORS.black,
            })],
          })],
        }),
      ],
    })),
  });
}

/**
 * Maak een data-tabel met headers en rijen
 *
 * @param {Object} opts
 * @param {string[]} opts.headers - Kolomnamen
 * @param {number[]} opts.columnWidths - Kolombreedtes in DXA (moeten optellen tot 9360)
 * @param {Array<Array<{text: string, bold?: boolean, color?: string}|string>>} opts.rows - Rijen met celwaarden
 * @param {boolean} [opts.alternateRows=true] - Alternerende rijkleuren
 * @param {number[]} [opts.boldRows] - Indices van rijen die bold moeten zijn (bijv. totaalrij)
 */
function createDataTable({ headers, columnWidths, rows, alternateRows = true, boldRows = [] }) {
  const tableRows = [];

  // Header rij
  tableRows.push(new TableRow({
    children: headers.map((header, i) => new TableCell({
      width: { size: columnWidths[i], type: WidthType.DXA },
      borders: allBorders(),
      margins: cellMargins(),
      shading: { fill: COLORS.tableHeaderBg, type: ShadingType.CLEAR },
      children: [new Paragraph({
        children: [text(header, { size: SIZES.tableText, bold: true, color: COLORS.heading })],
      })],
    })),
  }));

  // Data rijen
  rows.forEach((row, rowIdx) => {
    const isAlt = alternateRows && rowIdx % 2 === 1;
    const isBold = boldRows.includes(rowIdx);

    tableRows.push(new TableRow({
      children: row.map((cell, colIdx) => {
        const cellData = typeof cell === "string" ? { text: cell } : cell;
        return new TableCell({
          width: { size: columnWidths[colIdx], type: WidthType.DXA },
          borders: allBorders(),
          margins: cellMargins(),
          shading: isAlt ? { fill: COLORS.tableAltRowBg, type: ShadingType.CLEAR } : undefined,
          children: [new Paragraph({
            children: [text(cellData.text, {
              size: SIZES.tableText,
              bold: isBold || cellData.bold || false,
              color: cellData.color || COLORS.black,
            })],
          })],
        });
      }),
    }));
  });

  return new Table({
    width: { size: PAGE.contentWidth, type: WidthType.DXA },
    columnWidths: columnWidths,
    rows: tableRows,
  });
}

// ============================================================
// CALLOUT BOX
// ============================================================

/**
 * Maak een callout box (kernbevinding, waarschuwing, info)
 *
 * @param {Object} opts
 * @param {string} opts.label - Label (bijv. "KERNBEVINDING", "LET OP", "INFO")
 * @param {string} opts.body - Body tekst
 * @param {"green"|"red"|"blue"} [opts.type="green"] - Type callout
 */
function createCalloutBox({ label, body, type = "green" }) {
  const colorMap = {
    green: { border: COLORS.calloutGreenBorder, bg: COLORS.calloutGreenBg, text: COLORS.calloutGreenText },
    red: { border: COLORS.calloutRedBorder, bg: COLORS.calloutRedBg, text: COLORS.calloutRedText },
    blue: { border: COLORS.calloutBlueBorder, bg: COLORS.calloutBlueBg, text: COLORS.calloutBlueText },
  };
  const c = colorMap[type] || colorMap.green;

  return new Table({
    width: { size: PAGE.contentWidth, type: WidthType.DXA },
    columnWidths: [PAGE.contentWidth],
    rows: [new TableRow({
      cantSplit: true,
      children: [new TableCell({
        width: { size: PAGE.contentWidth, type: WidthType.DXA },
        borders: {
          top: { style: BorderStyle.SINGLE, size: 6, color: c.border },
          left: { style: BorderStyle.SINGLE, size: 1, color: COLORS.calloutLightBorder },
          bottom: { style: BorderStyle.SINGLE, size: 1, color: COLORS.calloutLightBorder },
          right: { style: BorderStyle.SINGLE, size: 1, color: COLORS.calloutLightBorder },
        },
        shading: { fill: c.bg, type: ShadingType.CLEAR },
        margins: { top: 200, bottom: 200, left: 240, right: 240 },
        children: [
          new Paragraph({
            keepLines: true,
            keepNext: true,
            spacing: { after: 120 },
            children: [text(label, { size: SIZES.calloutLabel, bold: true, color: c.text })],
          }),
          new Paragraph({
            keepLines: true,
            children: [text(body, { size: SIZES.calloutBody, color: COLORS.calloutBody })],
          }),
        ],
      })],
    })],
  });
}

// ============================================================
// TAAK KAART (combinatie van H2 + TaskTable + Body)
// ============================================================

/**
 * Maak een complete taakkaart
 *
 * @param {Object} opts
 * @param {string} opts.title - Taaktitel (bijv. "T1. Brand Exclusions uitbreiden")
 * @param {string} opts.impact - Impact waarde (wordt groen gekleurd)
 * @param {string} opts.who - Verantwoordelijke
 * @param {string} opts.effort - Tijdsinschatting
 * @param {string} [opts.urgency] - Urgentie (wordt rood gekleurd als aanwezig)
 * @param {string|TextRun[]} opts.body - Uitleg tekst
 * @param {string[]} [opts.bullets] - Optionele bullet list items
 * @param {string} [opts.bulletsLabel] - Label voor bullet list (bijv. "Specifiek uitvoeren:")
 */
function createTaskCard({ title, impact, who, effort, urgency, body, bullets, bulletsLabel }) {
  const children = [
    createH2(title),
    createTaskTable([
      { label: "Impact", value: impact, valueColor: COLORS.positive },
      { label: "Wie", value: who },
      { label: "Effort", value: effort },
      ...(urgency ? [{ label: "Urgentie", value: urgency, valueColor: COLORS.negative }] : []),
    ]),
    new Paragraph({ spacing: { after: 120 } }), // spacing na tabel
  ];

  if (body) {
    children.push(createBody(body));
  }

  if (bulletsLabel) {
    children.push(createLabeledBody(bulletsLabel, ""));
  }

  // Bullets worden apart toegevoegd via numbering in het document

  return children;
}

// ============================================================
// DOCUMENT BUILDER
// ============================================================

/**
 * Bouw het volledige document
 *
 * @param {Object} opts
 * @param {Object} opts.cover - Cover page opties (zie createCoverPage)
 * @param {Array} opts.sections - Array van content elementen (Paragraphs, Tables, etc.)
 * @param {string} [opts.outputPath] - Output bestandspad
 * @param {Buffer} [opts.logoBuffer] - Optioneel: Springbok logo als Buffer
 */
async function buildDocument({ cover, sections, outputPath = "output.docx", logoBuffer }) {
  const coverChildren = createCoverPage(cover);

  // Probeer het logo te renderen als er geen logoBuffer is meegegeven
  let finalLogoBuffer = logoBuffer;
  if (!finalLogoBuffer) {
    finalLogoBuffer = await renderLogoSvgToBuffer("#F18417", "#333333");
  }

  // Footer: paginanummer LINKS + logo RECHTS als floating image
  // Google Docs ondersteunt GEEN tabellen in footers (rendert als "1 k").
  // Oplossing: floating image in dezelfde paragraph als het paginanummer.
  // Het logo zweeft naar rechts, verticaal gecentreerd op de paragraph.
  let footerRuns = [
    new TextRun({ children: [PageNumber.CURRENT], font: FONTS.primary, size: SIZES.small, color: COLORS.metaLight }),
  ];

  if (finalLogoBuffer) {
    footerRuns.push(
      new ImageRun({
        type: "png",
        data: finalLogoBuffer,
        transformation: { width: 100, height: 17 },
        floating: {
          horizontalPosition: {
            relative: HorizontalPositionRelativeFrom.MARGIN,
            align: HorizontalPositionAlign.RIGHT,
          },
          verticalPosition: {
            relative: VerticalPositionRelativeFrom.PARAGRAPH,
            align: VerticalPositionAlign.CENTER,
          },
        },
        altText: { title: "Springbok", description: "Springbok Agency logo", name: "springbok-logo" },
      })
    );
  }

  const footerChildren = [
    new Paragraph({
      alignment: AlignmentType.LEFT,
      spacing: { before: 0, after: 0 },
      children: footerRuns,
    }),
  ];

  const doc = new Document({
    styles: {
      default: {
        document: {
          run: { font: FONTS.primary, size: SIZES.body },
        },
      },
      paragraphStyles: [
        {
          id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
          run: { size: SIZES.h1, bold: true, font: FONTS.primary, color: COLORS.heading },
          paragraph: { spacing: { before: 400, after: 200 }, outlineLevel: 0 },
        },
        {
          id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
          run: { size: SIZES.h2, bold: true, font: FONTS.primary, color: COLORS.heading },
          paragraph: { spacing: { before: 300, after: 120 }, outlineLevel: 1 },
        },
        {
          id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
          run: { size: SIZES.h3, font: FONTS.primary, color: COLORS.accentBlue },
          paragraph: { spacing: { before: 240, after: 100 }, outlineLevel: 2 },
        },
      ],
    },
    numbering: {
      config: [
        {
          reference: "springbok-bullets",
          levels: [{
            level: 0,
            format: LevelFormat.BULLET,
            text: "\u2022",
            alignment: AlignmentType.LEFT,
            style: {
              paragraph: { indent: { left: 720, hanging: 360 } },
              run: { font: FONTS.primary, size: SIZES.body },
            },
          }],
        },
      ],
    },
    sections: [
      // Sectie 1: Cover page (geen footer, geen paginanummer, geen logo)
      {
        properties: {
          page: {
            size: { width: PAGE.width, height: PAGE.height },
            margin: { top: PAGE.margin, right: PAGE.margin, bottom: PAGE.margin, left: PAGE.margin },
          },
        },
        children: coverChildren,
      },
      // Sectie 2: Content (met footer: paginanummer + logo)
      {
        properties: {
          page: {
            size: { width: PAGE.width, height: PAGE.height },
            margin: { top: PAGE.margin, right: PAGE.margin, bottom: PAGE.margin, left: PAGE.margin },
          },
          pageNumberStart: 1,
        },
        footers: {
          default: new Footer({ children: footerChildren }),
        },
        children: [
          ...sections.flat(),
        ],
      },
    ],
  });

  const buffer = await Packer.toBuffer(doc);
  fs.writeFileSync(outputPath, buffer);
  console.log(`Document gegenereerd: ${outputPath}`);
  return outputPath;
}

// ============================================================
// BULLET LIST HELPER
// ============================================================

/**
 * Maak bullet list items
 * @param {string[]} items - Bullet items
 * @returns {Paragraph[]}
 */
function createBulletList(items) {
  return items.map(item => new Paragraph({
    numbering: { reference: "springbok-bullets", level: 0 },
    spacing: { after: 40 },
    children: [text(item)],
  }));
}

// ============================================================
// SPACING UTILITIES
// ============================================================

/**
 * Creates a spacer paragraph with configurable spacing.
 * Use between elements that need visual separation (e.g. after tables, before callout boxes).
 * @param {number} after - Spacing in DXA (default 200 = ~3.5mm)
 */
function spacer(after = 200) {
  return new Paragraph({ spacing: { after } });
}

/**
 * Post-processes a sections array to automatically insert spacing around Table elements.
 * Tables in docx have no native margin-before or margin-after, so without this, content
 * directly above or below a table (body text, headings, callout boxes) will visually
 * "stick" to it with no gap. This is especially noticeable with callout boxes, which are
 * implemented as single-cell tables and look broken when they touch the element above them.
 *
 * Specifically:
 * - Adds spacing AFTER every Table that is not followed by a spacer
 * - Adds spacing BEFORE every Table that is preceded by a non-spacer element
 *
 * Usage: pass your sections array through autoSpace() before handing it to buildDocument():
 *   buildDocument({ sections: autoSpace(s), ... })
 *
 * @param {Array} arr - Array of docx elements (Paragraphs, Tables, etc.)
 * @param {number} gap - Spacing in DXA (default 200)
 * @returns {Array} New array with spacer paragraphs inserted around tables
 */
function autoSpace(arr, gap = 200) {
  const out = [];
  for (let i = 0; i < arr.length; i++) {
    // Add spacing BEFORE a Table if the previous element is not already a spacer
    if (arr[i] instanceof Table && i > 0) {
      const prev = out[out.length - 1];
      if (prev && !prev._isAutoSpacer) {
        const sp = spacer(gap);
        sp._isAutoSpacer = true;
        out.push(sp);
      }
    }
    out.push(arr[i]);
    // Add spacing AFTER a Table if the next element is not a spacer
    if (arr[i] instanceof Table && i + 1 < arr.length) {
      const next = arr[i + 1];
      if (next._isAutoSpacer) continue;
      const sp = spacer(gap);
      sp._isAutoSpacer = true;
      out.push(sp);
    }
  }
  return out;
}

// ============================================================
// EXPORTS
// ============================================================

module.exports = {
  // Design tokens
  COLORS, FONTS, SIZES, PAGE,
  // Helpers
  text, tableBorder, allBorders, cellMargins,
  // Spacing utilities
  spacer, autoSpace,
  // Components
  createCoverPage,
  createH1, createH2, createH3,
  createBody, createLabeledBody,
  createTaskTable, createDataTable,
  createCalloutBox,
  createTaskCard,
  createBulletList,
  // Builder
  buildDocument,
};

// ============================================================
// VOORBEELD: Direct uitvoeren als script
// ============================================================

if (require.main === module) {
  console.log("Springbok Google Docs template geladen.");
  console.log("Importeer dit script in je eigen document-generator:");
  console.log('  const springbok = require("./create_springbok_doc.js");');
  console.log("");
  console.log("Beschikbare functies:");
  console.log("  createCoverPage, createH1, createH2, createH3");
  console.log("  createBody, createLabeledBody, createBulletList");
  console.log("  createTaskTable, createDataTable, createCalloutBox, createTaskCard");
  console.log("  buildDocument");
}
