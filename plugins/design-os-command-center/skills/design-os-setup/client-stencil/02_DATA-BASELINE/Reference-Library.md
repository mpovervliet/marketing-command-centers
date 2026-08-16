# Reference Library [KLANT]
Versie: 0.1 (stencil)
Status: TEMPLATE, invullen bij intake

Bronnen: Refero (E-REF-*), Mobbin (E-MOB-*)
Doel: centrale referentiedatabase van cross-industry UX-patronen ter ondersteuning van design decisions. Elk item bevat de directe URL zodat het scherm of de flow raadpleegbaar blijft in de tool.

## Gebruik

- Elk item is gekoppeld aan een of meer hypothesen (H-nummers) en een Evidence ID.
- Bij het onderbouwen van design keuzes in DDRs wordt verwezen naar deze IDs.
- Evidence ID formaat: `E-REF-H[nr]-[volgnr]` (Refero) en `E-MOB-H[nr]-[volgnr]` (Mobbin).
- Registreer elk item ook in `Evidence-Registry.md` sectie M of N.

## Wat referenties wegen in de Evidence Score

Referenties zijn extern bewijs: ankerlaag T4, bewijscategorie **B5** (patroon en best-practice). Zie
`00_PLAN/Data-Governed-Design-Protocol.md`, sectie "Evidence Score". Die categorieletters staan los
van de sectieletters van de Evidence Registry: registry-sectie M en N ordenen waar een item
vandaan komt, B5 zegt wat het waard is.

- Hoeveel referenties je ook verzamelt, samen tillen ze de breedte met maximaal 1 categorie (B5).
  Vier schermen zijn geen vier bronnen.
- Referenties tellen alleen mee voor de breedte als ze in de Evidence Chain-tabel van de DDR staan.
  Staan ze uitsluitend in de sectie "Referentie-schermen" onderaan de DDR, dan zijn ze illustratie
  bij de uitvoering en veranderen ze de score niet.
- Externe categorieën tellen pas mee vanaf een eigen subtotaal van 3, en B4 en B5 leveren samen
  nooit meer dan plus 1. Is het eigen subtotaal 2 of lager, dan is dat de score en verandert geen
  enkele referentie daar iets aan. Een onderbouwing die alleen op referenties leunt komt uit op
  1/5 (anker T4): dat is context, geen bewijs bij deze klant.
- Referenties zijn dus onmisbaar om een patroonkeuze te verantwoorden, maar ze halen een beslissing
  nooit alleen over de productie-drempel van 3.
- Houd de data decay policy aan: referentieschermen uit patroonbibliotheken hebben daar een eigen
  rij. De termijn staat in het protocol, niet hier.

## Hoeveel referenties per hypothese

Het aantal schaalt mee met traject-omvang (P8) in `01_CONTEXT/Client-Profile.md`.

| Traject-omvang | Referenties per hypothese |
|----------------|---------------------------|
| vol | 4 tot 7 |
| light | 3 tot 4 |

Hard bij beide waarden: minimaal 2 industrieën per hypothese. Dat is een kwaliteitsregel, geen
volume-regel, en schaalt dus niet mee. Vier referenties uit 1 industrie zijn zwakker dan drie uit
twee.

## Format per referentie

```
**E-REF-H[X]-[NNN] of E-MOB-H[X]-[NNN]: [site/app]: [korte patroonnaam]**
- URL: [directe Refero- of Mobbin-URL]
- Site/app: [naam]
- Pattern: [wat het scherm laat zien, feitelijk]
- Design les voor [KLANT]: [wat we hieruit meenemen]
- Hypothesen: [H-nummers]
- Categorie: [vrije tags, bijv. step indicator, sticky summary]
```

---

## H1: [hypothese-titel invullen]

**Design vraagstuk:** [de designvraag die deze referenties moeten onderbouwen]

### Refero-referenties

[nog geen items]

### Mobbin-referenties

[nog geen items]

---

## H2: [hypothese-titel invullen]

**Design vraagstuk:** [invullen]

### Refero-referenties

[nog geen items]

### Mobbin-referenties

[nog geen items]

---

Voeg per nieuwe hypothese een sectie toe volgens hetzelfde stramien.
