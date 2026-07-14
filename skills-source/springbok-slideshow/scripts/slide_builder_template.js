/**
 * SPRINGBOK SLIDE BUILDER — Template v8.0
 * =========================================
 * Gebruik dit bestand als basis voor elke nieuwe presentatie.
 *
 * GEBRUIK:
 *   node slide_builder.js
 *   → Output: output_presentation.pptx
 *
 * AANPASSEN:
 *   1. Pas PRESENTATION_CONFIG aan (titel, auteur, bestandsnaam)
 *   2. Bouw slides in de main() functie
 *   3. Gebruik de helper functies (addFooter, sectionLabel, slideTitle, card, etc.)
 *
 * DEPENDENCIES:
 *   npm install pptxgenjs sharp lucide-static
 *
 * CHANGELOG v8.0:
 *   - Callout: sparkle vervangen door → pijl (apart element), yPos parameter toegevoegd
 *   - 3-kolom cards: icon + titel op dezelfde regel (inline), posities 0.6/3.6/6.6, breedte 2.8
 *   - 2-kolom cards: icon + titel op dezelfde regel (inline)
 *   - numBadge: badge + titel op dezelfde regel (inline)
 *   - Globe icon toegevoegd aan icon set
 *   - Title slide: fontSize 42, drie regels (titel, subtitel, ondertitel)
 *   - Closing slide: forEach loop met stepSpacing
 */

const pptxgen = require("pptxgenjs");
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const PRESENTATION_CONFIG = {
  title: "Jouw Presentatie Titel",
  author: "Springbok",
  outputFile: "output_presentation.pptx",
};

const LUCIDE = path.join(__dirname, "node_modules/lucide-static/icons");
async function renderLucide(name, color, size = 256) {
  let svg = fs.readFileSync(path.join(LUCIDE, name + ".svg"), "utf8");
  svg = svg.replace(/width="24"/, `width="${size}"`).replace(/height="24"/, `height="${size}"`);
  svg = svg.replace(/stroke="currentColor"/, `stroke="${color}"`);
  return "image/png;base64," + (await sharp(Buffer.from(svg)).png().toBuffer()).toString("base64");
}

const BLOP = "M0,13.8518 C0,5.25414 5.1478,0 13.9878,0 C22.8278,0 27.9739,5.25588 27.9739,13.8518 C27.9739,21.991 22.9341,27.7036 13.9878,27.7036 C5.04146,27.7036 0,22.636 0,13.8518 Z";
const WORDMARK = "M35.3201,17.0683 L39.9815,16.2368 C40.3023,17.4972 41.3482,18.1404 43.0619,18.1404 C44.5628,18.1404 45.2862,17.6314 45.2862,16.8278 C45.2862,16.0241 44.643,15.7016 41.6429,15.3268 C38.0518,14.8718 35.8012,13.6917 35.8012,10.6915 C35.8012,7.69141 38.1598,5.54721 42.579,5.54721 C46.9981,5.54721 49.144,7.31487 49.6513,9.9681 L45.2845,10.7177 C45.0701,9.5915 44.1322,9.08252 42.5249,9.08252 C41.024,9.08252 40.4888,9.6456 40.4888,10.3952 C40.4888,11.3592 41.8015,11.5213 44.1061,11.8159 C47.8837,12.325 50,13.3169 50,16.4512 C50,19.5856 47.6954,21.864 42.8195,21.864 C38.4248,21.864 35.8535,19.8819 35.3184,17.0683 M55.7875,19.1846 L55.7875,26.7398 L50.9919,26.7398 L50.9919,5.89586 L55.1443,5.89586 L55.5993,8.57523 C56.3768,6.75354 57.93,5.57511 60.2869,5.57511 C64.1185,5.57511 66.4231,8.28062 66.4231,13.6394 L66.4231,14.0943 C66.4231,15.862 66.1546,17.2566 65.6194,18.4071 C64.5752,20.6577 62.6716,21.7298 60.3147,21.7298 C57.9579,21.7298 56.5633,20.7919 55.7858,19.1846 M61.5995,14.0142 L61.5995,13.6394 C61.5995,10.8798 60.367,9.7014 58.6796,9.7014 C56.9921,9.7014 55.7335,10.9879 55.7335,13.6115 L55.7335,13.9601 C55.7335,16.371 56.8858,17.6575 58.6534,17.6575 C60.4211,17.6575 61.6013,16.4512 61.6013,14.0142 M67.7113,5.89586 L71.6232,5.89586 L72.2926,9.08426 C72.8016,6.6472 74.3566,5.68145 77.1684,5.68145 L78.0523,5.68145 L78.0523,10.7996 L76.2306,10.7996 C75.2927,10.7996 74.5693,10.9338 74.0341,11.1744 C73.016,11.6294 72.6935,12.6753 72.6935,14.5493 L72.6935,21.4351 L67.7113,21.4351 L67.7113,5.89586 Z M79.2586,2.60113 C79.2586,0.99386 80.3028,0.001953 82.0983,0.001953 C83.8939,0.001953 84.9381,0.99386 84.9381,2.60113 C84.9381,4.2084 83.92,5.20031 82.0983,5.20031 C80.2766,5.20031 79.2586,4.26244 79.2586,2.60113 Z M82.0983,6.43278 C83.0902,6.43278 84.0002,6.21836 84.6435,5.9778 L84.6435,21.4369 L79.5793,21.4369 L79.5793,5.97605 C80.2226,6.21836 81.1064,6.43104 82.0983,6.43104 M86.5994,21.4351 L86.5994,5.89586 L90.7535,5.89586 L91.2085,8.52119 C92.0383,6.72739 93.6194,5.57511 96.0321,5.57511 C99.5151,5.57511 101.311,7.7716 101.311,11.551 L101.311,21.4369 L96.3807,21.4369 L96.3807,12.9438 C96.3807,11.014 95.8979,9.7816 94.1041,9.7816 C92.3103,9.7816 91.5589,11.1762 91.5589,13.3186 L91.5589,21.4369 L86.6029,21.4369 L86.5994,21.4351 Z M104.872,27.5975 C102.756,27.0623 102.032,26.0704 102.032,24.6776 C102.032,23.1244 103.077,22.1063 105.381,21.6775 C103.399,21.355 102.301,20.3108 102.301,18.6233 C102.301,16.7999 103.507,15.6214 105.65,15.1664 C103.722,14.443 102.703,13.0763 102.703,10.8781 L102.703,10.8519 C102.703,7.55718 105.329,5.86797 109.375,5.73549 C112.321,5.54722 112.535,5.22646 112.535,3.29669 L112.535,0.80385 L117.359,0.80385 L117.359,3.21475 C117.359,5.38509 116.69,6.16258 113.555,6.29681 L113.555,6.43104 C115.992,7.04641 117.172,8.70946 117.172,10.7717 L117.172,10.9059 C117.172,14.4151 114.519,16.2368 109.858,16.2368 L108.948,16.2368 C108.17,16.2368 107.581,16.2908 107.18,16.317 C106.35,16.4512 106.162,16.6656 106.162,17.0683 C106.162,17.6035 106.645,17.7918 108.332,17.7918 L111.655,17.7918 C116.022,17.7918 117.978,19.5333 117.978,22.4532 C117.978,25.856 115.485,27.9985 109.591,27.9985 L109.377,27.9985 C107.447,27.9985 105.946,27.8921 104.876,27.5975 M113.771,22.9622 C113.771,22.2388 113.208,21.7821 111.413,21.7821 L109.028,21.7821 C107.421,21.8622 106.455,22.3713 106.455,23.2028 L106.455,23.2307 C106.455,23.9541 107.206,24.5695 109.323,24.5695 L109.992,24.5695 C112.725,24.5695 113.77,23.9001 113.77,22.9622 M112.297,11.0123 L112.297,10.9059 C112.297,9.32483 111.305,8.78965 109.938,8.78965 C108.571,8.78965 107.553,9.45906 107.553,10.9321 L107.553,11.0402 C107.553,12.4069 108.465,13.0222 109.91,13.0222 C111.355,13.0222 112.295,12.379 112.295,11.0123 M123.281,18.836 L122.906,21.4351 L118.645,21.4351 L118.645,0.80385 L123.469,0.80385 L123.469,8.38696 C124.299,6.59316 125.828,5.57336 128.024,5.57336 C129.203,5.57336 130.247,5.86797 131.132,6.40315 C132.954,7.52754 134.08,9.7258 134.08,13.2349 L134.08,13.7178 C134.08,19.0225 131.749,21.8361 127.918,21.8361 C125.561,21.8361 124.034,20.6577 123.282,18.836 M129.23,13.6917 L129.23,13.3169 C129.23,10.8519 128.05,9.6194 126.363,9.6194 C124.675,9.6194 123.389,10.9582 123.389,13.2628 L123.389,13.6115 C123.389,16.3449 124.567,17.5773 126.337,17.5773 C128.106,17.5773 129.23,16.4251 129.23,13.6917 Z M135.098,14.0403 L135.098,13.5574 C135.098,11.7898 135.447,10.315 136.116,9.13656 C137.457,6.77795 139.894,5.57336 142.948,5.57336 C144.529,5.57336 145.868,5.86797 147.048,6.48334 C149.407,7.71581 150.773,10.0727 150.773,13.5574 L150.773,14.0403 C150.773,15.7557 150.451,17.2025 149.809,18.3531 C148.469,20.6856 146.112,21.8361 142.924,21.8361 C137.86,21.8361 135.1,19.2369 135.1,14.0386 M145.924,13.9845 L145.924,13.5557 C145.924,11.0105 144.88,9.6979 142.976,9.6979 C141.072,9.6979 139.948,10.9304 139.948,13.5557 L139.948,13.9845 C139.948,16.3954 141.154,17.6296 142.95,17.6296 C144.745,17.6296 145.924,16.4233 145.924,13.9845 Z M156.856,17.6819 L156.856,21.4334 L152.06,21.4334 L152.06,0.80385 L156.856,0.80385 L156.856,12.0303 C157.633,11.415 158.597,10.3952 159.375,9.29694 C160.206,8.1185 160.822,6.88603 161.17,5.89412 L166.314,5.89412 C165.751,7.71756 164.493,10.315 162.966,12.0303 C162.858,12.1646 162.751,12.2988 162.617,12.4051 L167.627,21.4351 L162.214,21.4351 L159.24,15.7557 C158.357,16.5331 157.553,17.1764 156.91,17.6575 L156.856,17.6854 L156.856,17.6819 Z";

async function renderLogo(blopColor, textColor) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 168 28" width="840" height="140"><path fill="${blopColor}" d="${BLOP}"/><path fill="${textColor}" d="${WORDMARK}"/></svg>`;
  return "image/png;base64," + (await sharp(Buffer.from(svg)).png().toBuffer()).toString("base64");
}

async function main() {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  pres.author = PRESENTATION_CONFIG.author;
  pres.title = PRESENTATION_CONFIG.title;

  const C = {
    bg: "0F0F0F", teal: "052B25", navy: "111B32", purple: "210128",
    darkPurp: "2A1B21", neon: "DDFF00", orange: "F18417", blue: "8387FF",
    pink: "FFC7FF", gold: "B9A874", red: "E46962", white: "FFFFFF",
    sbkPurple: "9B59B6", ee: "EEEEEE", grayL: "D1D2D3", gray: "9E9E9E",
    grayD: "5E5E5E", black: "000000", cardA: "1A1A1A",
  };
  const F = "Inter";
  const R = 0.1;

  const themes = {
    ch1: { bg: C.teal,   accent: C.neon,   card: C.cardA, border: C.neon   },
    ch2: { bg: C.cardA,  accent: C.orange,  card: C.cardA, border: C.orange },
    ch3: { bg: C.teal,   accent: C.neon,    card: C.cardA, border: C.neon   },
    ch4: { bg: C.navy,   accent: C.blue,    card: C.cardA, border: C.blue   },
    ch5: { bg: C.purple, accent: C.pink,    card: C.cardA, border: C.pink   },
    ch6: { bg: C.teal,   accent: C.neon,    card: C.cardA, border: C.neon   },
    ch7: { bg: C.cardA,  accent: C.orange,  card: C.cardA, border: C.orange },
  };

  console.log("Logo's renderen...");
  const logos = {};
  for (const [k, t] of Object.entries(themes)) {
    logos[k] = await renderLogo("#" + t.accent, "#" + C.white);
  }
  logos.title   = logos.ch1;
  logos.gold    = await renderLogo("#" + C.gold, "#" + C.white);
  logos.closing = logos.ch1;

  console.log("Icons renderen...");
  async function iconsFor(accent) {
    const c = "#" + accent;
    return {
      rocket: await renderLucide("rocket", c), settings: await renderLucide("settings", c),
      chart: await renderLucide("trending-up", c), shield: await renderLucide("shield-check", c),
      users: await renderLucide("users", c), bulb: await renderLucide("lightbulb", c),
      arrow: await renderLucide("arrow-right", c), warn: await renderLucide("triangle-alert", c),
      bolt: await renderLucide("zap", c), db: await renderLucide("database", c),
      chat: await renderLucide("message-circle", c), crown: await renderLucide("crown", c),
      star: await renderLucide("star", c), target: await renderLucide("target", c),
      layers: await renderLucide("layers", c), monitor: await renderLucide("monitor", c),
      brain: await renderLucide("brain", c), layout: await renderLucide("layout-dashboard", c),
      search: await renderLucide("search", c), gauge: await renderLucide("gauge", c),
      globe: await renderLucide("globe", c),
    };
  }

  const ic1 = await iconsFor(C.neon);
  const ic2 = await iconsFor(C.orange);
  const ic3 = await iconsFor(C.blue);
  const ic4 = await iconsFor(C.pink);

  // ── HELPERS ──

  const addFooter = (s, logoKey) => {
    s.addImage({ data: logos[logoKey] || logos.title, x: 0.4, y: 5.15, w: 1.1, h: 0.183 });
  };

  const sectionLabel = (s, text, accent) => {
    const tw = Math.max(text.length * 0.085 + 0.3, 0.9);
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.6, y: 0.38, w: tw, h: 0.24, rectRadius: 0.12,
      fill: { color: accent }, line: { color: accent, width: 0 }
    });
    s.addText(text.toUpperCase(), {
      x: 0.6, y: 0.38, w: tw, h: 0.24,
      fontSize: 7, fontFace: F, color: C.bg,
      align: "center", valign: "middle", charSpacing: 1, bold: true
    });
  };

  const slideTitle = (s, textRegular, textBold) => {
    if (!textBold) {
      s.addText(textRegular, { x: 0.6, y: 0.7, w: 8.8, h: 0.45, fontSize: 20, fontFace: F, color: C.white });
    } else {
      s.addText([
        { text: textRegular + " ", options: { fontSize: 20, fontFace: F, color: C.white } },
        { text: textBold, options: { fontSize: 20, fontFace: F, color: C.white, bold: true } },
      ], { x: 0.6, y: 0.7, w: 8.8, h: 0.45 });
    }
  };

  const card = (s, x, y, w, h, accent, fillColor) => {
    const fill = fillColor || C.cardA;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x, y, w, h, rectRadius: R,
      fill: { color: fill }, line: { color: accent, width: 0.5 }
    });
  };

  const accentCard = (s, x, y, w, h, accent) => {
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x, y, w, h, rectRadius: R, fill: { color: accent }
    });
  };

  /** Callout banner — arrow left, text right, custom y-position */
  const callout = (s, text, accent, yPos) => {
    const y = yPos || 4.35;
    const bg = accent === C.neon ? C.teal : accent === C.orange ? "2A1F18" : accent === C.blue ? C.navy : C.darkPurp;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.6, y, w: 8.8, h: 0.38, rectRadius: R,
      fill: { color: bg }, line: { type: "none", width: 0, color: "000000" }
    });
    s.addText("\u2192", { x: 0.72, y, w: 0.25, h: 0.38, fontSize: 9, fontFace: F, color: accent, valign: "middle" });
    s.addText(text, { x: 0.95, y, w: 8.1, h: 0.38, fontSize: 9, fontFace: F, color: accent, valign: "middle" });
  };

  const numBadge = (s, x, y, num, accent) => {
    s.addShape(pres.shapes.OVAL, { x, y, w: 0.32, h: 0.32, fill: { color: accent } });
    s.addText(String(num), {
      x, y, w: 0.32, h: 0.32,
      fontSize: 11, fontFace: F, color: C.bg,
      bold: true, align: "center", valign: "middle"
    });
  };

  const chapterSlide = (s, num, title, theme, logoKey) => {
    s.background = { color: theme.bg };
    s.addText(String(num), { x: 0.6, y: 1.4, w: 1.5, h: 1.6, fontSize: 64, fontFace: F, color: theme.accent, bold: true });
    s.addText(title, { x: 2.3, y: 1.6, w: 6.5, h: 1.6, fontSize: 32, fontFace: F, color: C.white, lineSpacingMultiple: 1.15 });
    addFooter(s, logoKey);
  };

  // ── SLIDES ──

  console.log("Slides bouwen...");

  // Title
  {
    const s = pres.addSlide();
    s.background = { color: C.teal };
    s.addText("Jouw Presentatie Titel", { x: 0.6, y: 1.2, w: 8.8, h: 0.8, fontSize: 42, fontFace: F, color: C.white, bold: true });
    s.addText("Subtitel of tagline", { x: 0.6, y: 2.3, w: 8.0, h: 0.5, fontSize: 20, fontFace: F, color: C.neon });
    s.addText("Ondertitel met context", { x: 0.6, y: 3.1, w: 8.0, h: 0.4, fontSize: 12, fontFace: F, color: C.grayL });
    addFooter(s, "title");
  }

  // Chapter 1
  { const s = pres.addSlide(); chapterSlide(s, "1", "Context &\nUrgentie", themes.ch1, "ch1"); }

  // 3-Column Cards (icon + title INLINE)
  {
    const s = pres.addSlide();
    s.background = { color: C.bg };
    const accent = themes.ch1.accent; const ic = ic1;
    sectionLabel(s, "Context", accent);
    slideTitle(s, "Drie redenen waarom", "dit nu urgent is");
    const cardW = 2.8, cardH = 2.8, cardY = 1.3;

    card(s, 0.6, cardY, cardW, cardH, accent);
    s.addImage({ data: ic.warn, x: 0.85, y: cardY + 0.25, w: 0.22, h: 0.22 });
    s.addText("Korte titel", { x: 1.15, y: cardY + 0.22, w: cardW - 0.7, h: 0.28, fontSize: 11, fontFace: F, color: C.white, bold: true });
    s.addText("Beschrijving hier.", { x: 0.85, y: cardY + 0.6, w: cardW - 0.4, h: 1.8, fontSize: 9, fontFace: F, color: C.grayL, wrap: true });

    card(s, 3.6, cardY, cardW, cardH, accent);
    s.addImage({ data: ic.chart, x: 3.85, y: cardY + 0.25, w: 0.22, h: 0.22 });
    s.addText("Korte titel", { x: 4.15, y: cardY + 0.22, w: cardW - 0.7, h: 0.28, fontSize: 11, fontFace: F, color: C.white, bold: true });
    s.addText("Beschrijving hier.", { x: 3.85, y: cardY + 0.6, w: cardW - 0.4, h: 1.8, fontSize: 9, fontFace: F, color: C.grayL, wrap: true });

    card(s, 6.6, cardY, cardW, cardH, accent);
    s.addImage({ data: ic.rocket, x: 6.85, y: cardY + 0.25, w: 0.22, h: 0.22 });
    s.addText("Korte titel", { x: 7.15, y: cardY + 0.22, w: cardW - 0.7, h: 0.28, fontSize: 11, fontFace: F, color: C.white, bold: true });
    s.addText("Beschrijving hier.", { x: 6.85, y: cardY + 0.6, w: cardW - 0.4, h: 1.8, fontSize: 9, fontFace: F, color: C.grayL, wrap: true });

    callout(s, "Samenvatting in een zin.", accent);
    addFooter(s, "ch1");
  }

  // Closing
  {
    const s = pres.addSlide();
    s.background = { color: C.teal };
    s.addText("Wat zijn de volgende stappen?", { x: 0.6, y: 1.0, w: 8.8, h: 0.5, fontSize: 20, fontFace: F, color: C.neon });
    const steps = ["Eerste actie", "Tweede actie", "Derde actie"];
    steps.forEach((text, i) => {
      s.addText([
        { text: `${i + 1}.  `, options: { color: C.neon, bold: true, fontSize: 14 } },
        { text: text, options: { color: C.white, fontSize: 13 } },
      ], { x: 0.6, y: 1.95 + i * 0.4, w: 8.5, h: 0.4, fontFace: F, valign: "middle" });
    });
    addFooter(s, "closing");
  }

  console.log("Opslaan...");
  await pres.writeFile({ fileName: PRESENTATION_CONFIG.outputFile });
  console.log("Klaar: " + PRESENTATION_CONFIG.outputFile);
}

main().catch(console.error);
