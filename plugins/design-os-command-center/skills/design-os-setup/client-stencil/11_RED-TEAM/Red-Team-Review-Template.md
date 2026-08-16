# Red-Team-Review-Template
Versie: 0.1 (stencil)
Status: TEMPLATE, invullen bij intake

Doel: de eigen conclusies aanvallen voordat ze doorwerken. Dit onderscheidt een serieuze methodiek van mooie AI-output. Kopieer per review naar `Red-Team-Review-Fase-[N].md`.

## Wanneer je deze review draait

Het ritme volgt `traject-omvang` (P8) uit `01_CONTEXT/Client-Profile.md`.

| Traject-omvang | Ritme |
|----------------|-------|
| vol | na elke fase |
| light | samengevoegd: drie reviews, na fase 3 (dekt 0 t/m 3), na fase 6 (dekt 4 t/m 6) en na fase 8 (dekt 7 en 8), elk over alle tussenliggende fases samen |

Fase 9 handoff heeft ook bij `vol` geen eigen review en hangt aan die van fase 8.

Bij `light` verandert alleen de frequentie, niet de diepgang. Geen fase blijft ongetoetst: `light` voegt reviews samen, het laat er geen vervallen. De zeven dimensies hieronder worden ook in een samengevoegde review alle zeven doorlopen, en de samengevoegde review benoemt per dimensie welke fases hij dekt.

## Hoe te gebruiken

Voer de review uit met een kritische bril (idealiter een aparte agent/sessie). Beantwoord elke vraag eerlijk, ook als dat de fase vertraagt. Bevindingen leiden tot acties of aannames, niet tot stilte.

---

## Red Team Review, Fase [N]

**Beoordeelde documenten:** [lijst]
**Gedekte fases:** [bij `vol` één fase; bij `light` de samengevoegde reeks, bijvoorbeeld fase 1 t/m 3]
**Datum:** [datum]

### 1. Datakwaliteit
- Welke conclusie steunt op een onbetrouwbare of onbevestigde metric?
- Zijn periodes, segmenten en bronnen consistent?

### 2. Metric-interpretatie
- Welke metric is mogelijk verkeerd geinterpreteerd?
- Worden correlatie en oorzaak door elkaar gehaald?

### 3. Hypothese-sterkte
- Welke hypothese klinkt logisch maar heeft weinig bewijs?
- Welke hypothese is niet of nauwelijks testbaar gegeven het volume?

### 4. Technische haalbaarheid
- Welke ingreep is technisch lastig of duur en daardoor risicovol?
- Botst iets met platform-, legal- of compliance-constraints?

### 5. Merk- en LTV-risico
- Welke UX-ingreep kan conversie verhogen maar merkvertrouwen schaden?
- Welke optimalisatie helpt korte termijn maar schaadt LTV/retentie?

### 6. Kanaal- en doelgroep-bias
- Is een conclusie te veel gebaseerd op een kanaal (bijv. Paid Search) en te weinig op organic/direct/new visitors?
- Generaliseren we mobiel-gedrag onterecht naar desktop of omgekeerd?

### 7. Blinde vlekken
- Welke groep gebruikers of beslismoment ontbreekt in de analyse?
- Welke aanname zou, als hij onjuist is, de hele richting omgooien?

### Uitkomst

- **Top 3 zwakke plekken:**
  1. [invullen]
  2. [invullen]
  3. [invullen]
- **Acties:** [naar Open-Questions/Assumptions] of correcties [naar de fasedocumenten].
- **Gate-Record:** [GATE-FASE-[nr] in `Gate-Records.md`; verplicht, zonder record geen vrijgave]
- **Beslissing:** fase vrijgegeven ja of nee. [go / no-go plus voorwaarden]
