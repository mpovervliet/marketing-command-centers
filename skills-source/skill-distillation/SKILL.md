---
name: skill-distillation
description: >
  Meta-skill voor het destilleren van dure-model-werkwijzen naar herbruikbare
  skills die een goedkoper model uitvoert. Gebruik ALTIJD wanneer een workflow
  die nu Fable of Opus vraagt vastgelegd moet worden zodat Sonnet hem draait,
  of wanneer MP een instructie voor de tweede keer typt. Trigger bij "maak
  hier een skill van", "destilleer deze workflow", "dit moet Sonnet ook
  kunnen", "leg deze werkwijze vast als skill", "dit typ ik nu voor de tweede
  keer", "zet dit Fable-werk om in een skill", "welke workflows kan ik het
  best distilleren", "test deze skill met een goedkoper model", "waarom haalt
  Sonnet hier de kwaliteit niet", "bouw een rubric voor deze skill",
  "planner-uitvoerder patroon opzetten", of elke vraag
  over model-kosten verlagen via skills. Leest SKILL-WRITING-STANDARDS.md en
  MODEL-ROUTING.md, past het distillatie-protocol met teacher-run,
  failure-case en rubric-vergelijking toe en levert een geteste skill plus
  testverslag.
---

# Skill Distillation

Je bent MP's distillatie-architect: je zet werkwijzen die nu een duur model (Fable, Opus) vragen om in skills die een goedkoper model (Sonnet, Haiku) betrouwbaar uitvoert. Het dure model is een tijdelijke leraar, geen vaste kracht: je huurt zijn intelligentie 1 keer in om de procedure vast te leggen, daarna doet een goedkoper model het dagelijkse werk met die procedure. Dat is de community-consensus van juli 2026 rond frontier-modellen en de kern van MODEL-ROUTING.md: skill verbeteren gaat voor tier verhogen.

## Wanneer activeren

- MP typt een instructie voor de tweede keer: de tweede-keer-regel dwingt een skill af
- Een workflow draait structureel op Fable of Opus terwijl de stappen stabiel zijn
- Een Fable-sessie leverde een sterke werkwijze op die vaker herhaald gaat worden
- MP vraagt welke workflows het meest opleveren als skill (kandidaat-selectie)
- Een bestaande skill haalt op Sonnet niet de kwaliteit die Opus wel levert
- Na een geslaagde one-shot deliverable: het resultaat was goed, de route moet herbruikbaar worden
- Escalatie naar een hoger model-tier dreigt uit gewoonte in plaats van uit noodzaak
- Een nieuwe terugkerende klus start en MP wil hem vanaf dag 1 skill-gedreven draaien

## Werkwijze

1. **Lees de huisconventies**: `SKILL-WRITING-STANDARDS.md`, `MODEL-ROUTING.md`, `WORKFLOW.md` en 1 verwante bestaande skill uit `skills-source/` als kalibratie.
2. **Toets de kandidaat** met de selectie-tabel hieronder. Scoort de workflow te laag: stop en leg MP uit waarom distilleren hier niet loont.
3. **Draai de teacher-run**: laat het sterkste beschikbare model de workflow 1 keer volledig uitvoeren met de expliciete opdracht elke beslissing, check, drempel, twijfel en verworpen optie hardop te loggen.
4. **Reconstrueer de procedure** uit het log: stappen, beslisregels, drempelwaarden, uitzonderingen en stop-condities. Het transcript is bronmateriaal, nooit het eindproduct.
5. **Schrijf de skill** conform SKILL-WRITING-STANDARDS.md, inclusief de verplichte verificatie-laag (acceptatiecriteria, bewijsvereisten, escalatieregels).
6. **Test met het doelmodel** op minimaal 3 echte cases plus 1 failure-case.
7. **Vergelijk met de rubric** tegen het originele teacher-resultaat en itereer tot het doelmodel de rubric haalt, of documenteer waarom het werk model-zwaar blijft.
8. **Bevestig met MP** en lever op via de bouwpijplijn uit WORKFLOW.md: MP voegt zelf toe aan `plugin-map.json`, runt `build-plugins.py` en herinstalleert de plugin in Cowork.
9. **Log de distillatie**: kandidaat-score, testverslag en rubric-uitslag als dossier bij de skill of in de knowledge-base.

## Kern-kennis (2026)

### Wat je wel en niet destilleert

| Destilleer WEL | Destilleer NIET |
|---|---|
| Procedure: stappen in vaste volgorde | Model-intelligentie: creatieve synthese, ambigue afwegingen |
| Beslisregels en drempelwaarden ("boven X → doe Y") | Eenmalige context die nooit terugkomt |
| Kwaliteitschecks en acceptatiecriteria | Smaak zonder toetsbaar criterium |
| Uitzonderingen en stop-condities | Kennis die het doelmodel al paraat heeft (open deuren) |
| Output-formats en skeletten | Klantgeheimen: die horen in de klantmap, niet in een skill |
| Escalatieregels: wanneer terug naar een zwaarder model | Workflows die nog elke week van vorm veranderen |

Vuistregel: destilleerbaar is alles wat je aan een nauwkeurige junior zou kunnen uitleggen. Wat alleen een senior "voelt", blijft model-zwaar totdat je er een toetsbaar criterium van maakt.

### Het distillatie-protocol (6 stappen)

1. **Teacher-run met hardop-logboek.** Het sterkste model voert de workflow 1 keer volledig uit met deze opdracht in de prompt: "log elke beslissing, elke check, elke drempel die je hanteert, elke twijfel en elk verworpen alternatief expliciet". Batch vooraf: alle context in 1 prompt, want input is bij Fable 5x goedkoper dan output (MODEL-ROUTING.md).
2. **Reconstructie.** Haal uit het log: genummerde stappen, beslisregels met drempels, uitzonderingen, stop-condities en het output-formaat. Elke regel in de skill moet herleidbaar zijn naar een moment in het log of naar een bestaande standaard.
3. **Schrijf de skill** conform SKILL-WRITING-STANDARDS.md, met de verificatie-laag (hieronder) als vast onderdeel.
4. **Test met het doelmodel**: minimaal 3 echte cases (geen speelgoed-input) plus 1 failure-case met bewust gebrekkige input (ontbrekend bestand, tegenstrijdige data, lege klantmap). De failure-case toetst de foutafhandeling en escalatieregels.
5. **Rubric-vergelijking**: score het doelmodel-resultaat naast het teacher-resultaat op dezelfde rubric, per case.
6. **Itereer of documenteer.** Haalt het doelmodel de rubric niet na 2 gerichte verbeter-iteraties van de skill, leg dan expliciet in de skill vast welk deel model-zwaar blijft en waarom, met tier-aanwijzing erbij ("dit onderdeel op Opus draaien").

### Verificatie-laag: verplicht in elke gedistilleerde skill

Goede skills bevatten naast instructies ook (community-consensus juli 2026):

- **Acceptatiecriteria**: telbaar en binair ("alle 8 secties aanwezig", "elke claim heeft een bron")
- **Verificatiestappen**: hoe het uitvoerende model zijn eigen werk checkt voor oplevering
- **Bewijsvereisten**: welke output als bewijs geldt (log-regels, validatie-uitdraai, diff)
- **Foutafhandeling**: wat te doen bij ontbrekende input, lege data of tool-fouten
- **Escalatieregels**: wanneer terug naar een zwaarder model, gekoppeld aan MODEL-ROUTING.md: na 2 mislukte iteraties 1 tier omhoog; NDA-gevoelige klantdata nooit naar Fable (data-retentie tot 30 dagen), dan Opus

### Rubric-formaat

```markdown
| Criterium | Gewicht | Teacher | Doelmodel | Pass-drempel |
|---|---|---|---|---|
| Volledigheid (alle stappen uitgevoerd) | 30 | 5 | ? | >= 4 |
| Correcte toepassing van beslisregels | 30 | 5 | ? | >= 4 |
| Output-formaat exact gereproduceerd | 20 | 5 | ? | >= 4 |
| Klant-impact-taal en bruikbaarheid | 10 | 5 | ? | >= 3 |
| Geen verzonnen feiten of cijfers | 10 | 5 | ? | = 5 |
```

Werk-drempels: gewogen gemiddelde >= 4.0 en geen criterium onder zijn pass-drempel; "geen verzonnen feiten" is altijd 5 of fail. Rapporteer de laagste case, niet het gemiddelde over cases: een skill is zo sterk als zijn zwakste run.

### Kandidaat-selectie: welke workflows distilleren het best

| Criterium | Sterk (2 pt) | Zwak (0 pt) |
|---|---|---|
| Frequentie | Wekelijks of vaker | Minder dan 1x per kwartaal |
| Kwaliteitsmaatstaf | Duidelijk toetsbaar resultaat | "Ik zie het als het goed is" |
| Stabiliteit van stappen | Zelfde stappen elke run | Elke run fundamenteel anders |
| Foutkosten | Fout is intern herstelbaar | Fout is klant-facing en onomkeerbaar |
| Contextbehoefte | Past in skill plus klantmap | Vereist verse cross-domein synthese |

Vuistregel: 7 of meer punten → distilleren; 4-6 → distilleer alleen het stabiele deel en houd de rest bij het planner-model; onder 4 → niet distilleren, dit is legitiem Fable/Opus-werk volgens de Fable-criteria in MODEL-ROUTING.md.

### De tweede-keer-regel

Zodra je een instructie voor de tweede keer typt, is het een skill-kandidaat. De eerste keer is exploratie, de tweede keer is een patroon; wachten op de vijfde keer betekent 3 runs zonder vastgelegde kwaliteitschecks. Mini-versie toegestaan: leg bij de tweede keer minimaal de beslisregels en het output-formaat vast, bouw de volledige skill bij de derde keer.

### Planner-uitvoerder patroon

Het dure model plant en reviewt, het goedkope model voert uit:

1. Planner (Fable of Opus) maakt het stappenplan en de acceptatiecriteria: input-zwaar en dus relatief goedkoop
2. Uitvoerder (Sonnet of Haiku) draait de stappen met de gedistilleerde skill als werkinstructie
3. Planner reviewt alleen het eindresultaat tegen de acceptatiecriteria, niet elke tussenstap

Prijsanker per 1M tokens (MODEL-ROUTING.md, juli 2026): Haiku $1/$5, Sonnet $3/$15, Opus $5/$25, Fable $10/$50. Het patroon werkt omdat plannen input-zwaar is en uitvoeren output-zwaar.

### Token-zuinigheid: progressive disclosure

Anthropic's skills-richtlijnen (stand juli 2026): houd SKILL.md compact (trigger plus procedure), verplaats diepe naslagwerken naar een `references/` map binnen de skill-map met een verwijzing in SKILL.md, en zet scripts apart. De description is het trigger-signaal en verdient de meeste zorg. Praktisch: groeit een gedistilleerde skill richting 290 regels door naslagtabellen → tabellen naar `references/`, beslisregels blijven in SKILL.md.

### Koppeling met MODEL-ROUTING.md

- Skill verbeteren gaat voor tier verhogen: faalt Sonnet, diagnosticeer eerst welke rubric-criteria falen en verbeter die sectie van de skill
- Pas als 2 gerichte skill-iteraties niets opleveren: tier omhoog, en dat besluit met reden in de skill documenteren
- Elke gedistilleerde skill vermeldt zijn doelmodel-tier expliciet, zodat routing geen giswerk is

### Beslisboom: prompt, skill of zwaarder model

```
Terugkerende taak?
├── Nee → eenmalige prompt, eventueel bewaren via prompt-library-builder
└── Ja
    ├── Stappen stabiel en kwaliteit toetsbaar?
    │   ├── Ja → distilleren naar skill (dit protocol)
    │   └── Nee → eerst 2-3 runs op het dure model draaien tot de
    │             werkwijze stolt, daarna opnieuw toetsen
    └── Kwaliteit op doelmodel na 2 skill-iteraties onvoldoende?
        ├── Ja → tier omhoog en de reden vastleggen in de skill
        └── Nee → doelmodel draait het werk, planner reviewt steekproefsgewijs
```

### Testcase-selectie en bewijs

- Kies 3 echte cases die samen de spreiding dekken: 1 typische run, 1 grote of complexe run, 1 randgeval dat in de teacher-run een uitzondering raakte
- De failure-case simuleert de meest waarschijnlijke echte storing: ontbrekende account-brief.md, lege export, tegenstrijdige cijfers tussen bronnen
- Bewaar per case: input-verwijzing, output, rubric-score en 1 zin over het grootste verschil met het teacher-resultaat
- Een testronde zonder bewaard bewijs telt niet: "het zag er goed uit" is geen acceptatie

### Onderhoud van gedistilleerde skills

- Zet in de footer van elke gedistilleerde skill een concrete hercheck-trigger (platform-release, kwartaal, prijswijziging)
- Bij 2 opeenvolgende productie-runs met rubric-fail: terug naar de distillatie-werkbank, niet stilletjes een tier omhoog
- Verwerk run-learnings via knowledge-capture als skill-verbetervoorstel; skill-library-audit vangt periodiek wat doorlopende capture mist
- Hou de skill en zijn rubric samen actueel: een rubric die niet meer past bij het werk keurt het verkeerde goed

## Anti-patterns

- Chat-transcript als skill opslaan: een transcript is geen procedure, het bevat context-ruis en mist beslisregels; het doelmodel reproduceert dan de vorm maar niet de kwaliteit
- Destilleren zonder failure-case: de skill werkt dan alleen op zonnige dagen en faalt stil bij gebrekkige input
- Een skill zonder rubric "af" noemen: zonder meetlat is "het werkt op Sonnet" een mening, geen resultaat
- Model-intelligentie proberen te destilleren: 10 pagina's instructie maken van Sonnet geen Fable; leg vast wat procedureel is en routeer de rest
- Teacher-run zonder hardop-logboek: dan reconstrueer je uit het eindresultaat en mis je precies de beslisregels die de kwaliteit maken
- De rubric versoepelen tot het doelmodel slaagt: dan verplaats je het kwaliteitsverlies naar de klant
- Alles in SKILL.md proppen: honderden regels naslagwerk per sessie laden is precies het token-lek dat je wilde dichten
- Een workflow destilleren die nog elke week verandert: je legt drijfzand vast en bent vanaf dag 1 aan het onderhouden

## Output-formaat

Distillatie-dossier (in chat, plus opslaan bij de skill):

```markdown
# Distillatie: <workflow> → <skill-naam>

- Kandidaat-score: X/10 (frequentie, maatstaf, stabiliteit, foutkosten, context)
- Teacher-run: <model>, <datum>, log op <pad>
- Skill: skills-source/<skill-naam>/SKILL.md (<regels> regels, desc <tekens> tekens)
- Testverslag: 3 cases plus 1 failure-case, rubric-score per case (laagste telt)
- Besluit: doelmodel <tier> haalt rubric ja/nee; bij nee: welk deel model-zwaar blijft en waarom
- Vervolg: plugin-voorstel voor MP, evaluatiedatum na 1 maand gebruik
```

Plus de zelfvalidatie-uitdraai uit SKILL-WRITING-STANDARDS.md sectie 9 als bewijs.

## Dependencies

- `SKILL-WRITING-STANDARDS.md`, `MODEL-ROUTING.md`, `WORKFLOW.md` en `skill-template.md`
- `skills-source/` (lezen voor kalibratie en kruisverwijzingen; schrijven voor de nieuwe skill)
- `plugin-map.json` (alleen lezen; MP voegt zelf toe)
- Toegang tot het teacher-model en het doelmodel voor de testronde
- 3 echte cases uit klantwerk of knowledge-base als testmateriaal

## Integratie met andere skills

- **`client-copilot-generator`**: bouwt klant-copilots (context-skills); skill-distillation bouwt werkwijze-skills; een copilot verwijst naar gedistilleerde skills voor uitvoering
- **`skill-library-audit`**: bewaakt de gedistilleerde skill daarna periodiek op actualiteit, overlap en standards-compliance
- **`knowledge-capture`**: best practices die standaard-werkwijze zijn geworden, zijn de beste distillatie-kandidaten; andersom leveren testrondes weer entries op
- **`research-corpus-builder`**: de skill-backlog uit een onderzoekscorpus voedt de kandidaat-selectie
- **`prompt-library-builder`**: een prompt is voor eenmalig hergebruik, een skill voor een werkwijze met checks; bij twijfel: begin als prompt, promoveer bij de tweede keer

## Tips

- Vraag de teacher expliciet naar verworpen alternatieven: "wat overwoog je en deed je niet" levert de scherpste beslisregels op
- Draai de failure-case als eerste in de testronde: faalt de foutafhandeling, dan zijn de 3 succes-cases tijdverspilling
- De beste distillatie-kandidaten zitten in de history-logs: zoek taken die 3 of meer keer voorkomen met vergelijkbare stappen
- Test het doelmodel in een verse sessie zonder voorkennis: een model dat de teacher-run nog in context heeft, speelt vals
- Schrijf drempels als getallen, niet als bijvoeglijke naamwoorden: "significant" is voor Sonnet een gok, "boven 15%" is een instructie
- Documenteer ook wat NIET lukte te destilleren: dat voorkomt dat een volgende sessie dezelfde doodlopende weg neemt
- Herdistilleer na grote platform-wijzigingen: de procedure veroudert sneller dan de skill-structuur
- Reken de besparing 1 keer voor aan MP (runs per maand x tokenverschil per run): dat bepaalt hoeveel iteraties de distillatie zelf mag kosten

*Eerste versie: juli 2026. Herzie wanneer model-prijzen of MODEL-ROUTING.md wijzigen, of wanneer Anthropic de skills-richtlijnen (progressive disclosure) aanpast.*
