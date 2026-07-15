# Red-Team-Review-Template
Versie: 0.1 (stencil)
Status: TEMPLATE, invullen bij intake

Doel: na elke fase de eigen conclusies aanvallen voordat ze doorwerken. Dit onderscheidt een serieuze methodiek van mooie AI-output. Kopieer per fase naar `Red-Team-Review-Fase-[N].md`.

## Hoe te gebruiken

Voer de review uit met een kritische bril (idealiter een aparte agent/sessie). Beantwoord elke vraag eerlijk, ook als dat de fase vertraagt. Bevindingen leiden tot acties of aannames, niet tot stilte.

---

## Red Team Review, Fase [N]

**Beoordeelde documenten:** [lijst]
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
- **Beslissing: fase vrijgegeven ja/nee.** [go / no-go plus voorwaarden]
