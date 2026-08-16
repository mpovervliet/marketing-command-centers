# Klantprofiel [KLANT]
Versie: 0.1 (stencil)
Status: TEMPLATE, invullen in fase 0-1
Eigenaar: design-os-setup

> **Dit is geen context, dit is configuratie.** De rest van `01_CONTEXT/` is input dat
> pas bewijs wordt na verificatie. Dit bestand is bindend: skills lezen deze waarden en
> passen hun regels erop aan. Een verkeerde waarde hier produceert stil fout werk, geen
> zichtbare fout.

Fase 1 is niet af zolang een parameter leeg is. Staat een waarde nog niet vast, vul dan
`[AANVULLEN]` in plus een regel in `09_DECISION-LOG/Open-Questions.md`; een leeg veld
is een vergeten vraag, een gemarkeerd veld is een bewuste openstaande keuze.

## De parameters

| # | Parameter | Waarde | Vastgesteld door en datum | Gelezen door |
|---|-----------|--------|---------------------------|--------------|
| P1 | conversie-model | [transactie / lead / abonnement / offerte-configurator / hybride] | | evidence, strategy, hypotheses-ddr, directions, references |
| P2 | meet-stack | [google-volledig / google-deels / niet-google / platform-only] | | setup, evidence, red-team, specialist |
| P3 | evidence-regime | [vol / dun] | | hypotheses-ddr, directions, red-team, specialist |
| P4 | merk-mandaat | [brand-vast / brand-open / brand-afwezig] | | directions, figma-build |
| P5 | markt-en-rechtsregime | [landcode(s) of regio] | | evidence, figma-build, hypotheses-ddr, references, setup |
| P6 | werktaal | intern: [taal] / client-facing: [taal] | | alle skills (output-formaten) |
| P7 | traject-modus | [diagnose-only / kern-flow / vol-redesign / audit-bestaand-design] | | specialist, setup, strategy, directions, figma-build |
| P8 | traject-omvang | [vol / light] | | specialist, setup, strategy, directions, references, hypotheses-ddr, figma-build, red-team |

Regel voor onderhoud: een parameter met een lege kolom "gelezen door" is administratie en
hoort hier niet. Voeg er alleen een toe als minimaal twee skills er een andere **regel**
op baseren, niet alleen andere inhoud.

---

## P1. conversie-model

Wat telt in deze klantsituatie als conversie, en hoe wordt waarde gemeten. Dit is de
zwaarste parameter: hij bepaalt het funnel-anker, de Data-Contract-rijen, de QA-stappen en
elke waardeberekening in het traject.

| Waarde | Primaire conversie | Funnel-ankers | Waarde-eenheid | Kwaliteits-guardrail |
|--------|-------------------|---------------|----------------|---------------------|
| transactie | aankoop | productweergave, mandje, checkout-start, aankoop | orderwaarde | retour, annulering |
| lead | aanvraag, offerte, contact, boeking | formulier-start, formulier-verzonden, gekwalificeerd | waarde per gekwalificeerde lead | leadkwaliteit, lead-to-close-ratio |
| abonnement | afsluiten of trial-start | plan-keuze, signup, activatie | maandwaarde maal verwachte levensduur | churn, activatiegraad |
| offerte-configurator | configuratie afgerond en aanvraag verstuurd | configurator-start, stap-voltooiing, aanvraag | gemiddelde offertewaarde maal winkans | offerte-kwaliteit, doorlooptijd |
| hybride | meerdere naast elkaar | per stroom apart | per stroom apart | per stroom apart |

**Vul in voor deze klant:**

| Veld | Waarde |
|------|--------|
| Primaire conversie-event (exacte naam in de meetbron) | |
| Funnel-ankers, in volgorde | |
| Waarde-eenheid en hoe die berekend wordt | |
| Waar de waarde vandaan komt (meetbron, CRM, backend, handmatig) | |
| Kwaliteits-guardrail die niet mag verslechteren | |
| Bij hybride: welke stroom is leidend | |

Belangrijk bij `lead`: het grootste CRO-risico is dat je het aanvraagvolume verhoogt en de
kwaliteit verlaagt. De kwaliteits-guardrail is daar geen formaliteit maar de kern.

## P2. meet-stack

Waar de gedragsdata vandaan komt. Bepaalt de verificatie-run, de querypatronen en wat als
eigen klantdata telt.

| Waarde | Betekenis |
|--------|-----------|
| google-volledig | Analytics, zoekconsole en advertentieplatform van Google, alle drie beschikbaar |
| google-deels | Een deel daarvan; benoem welke ontbreekt en wat de vervanger is |
| niet-google | Andere analytics (bijvoorbeeld Matomo, Piwik PRO, Plausible, Adobe) |
| platform-only | Alleen rapportage uit het commerce- of CRM-platform zelf |

**Vul in voor deze klant:**

| Veld | Waarde |
|------|--------|
| Gedragsdata-bron plus toegangsroute | |
| Zoekdata-bron (of "geen") | |
| Advertentiedata-bron (of "niet van toepassing") | |
| Transactie- of leadbron voor de tegenboeking bij de dedupe-check | |
| Bekende beperkingen van deze stack | |

Harde regel: het systeem eist een betrouwbare gedragsbron plus minimaal 1 kwalitatieve
bron. Het eist geen specifiek merk. Een niet-Google-bron is geen lagere bewijskracht,
alleen een andere query.

## P3. evidence-regime

Hoeveel bewijs deze klant realistisch kan produceren. Bepaalt de route naar bewijs, **niet**
de lat: de minimumscore voor productie blijft 3, ongeacht deze waarde.

| Waarde | Wanneer | Wat er verandert |
|--------|---------|------------------|
| vol | Voldoende volume voor significante experimenten binnen een redelijke doorlooptijd | A/B is de default-testvorm; intern A/B-bewijs is bereikbaar |
| dun | Te weinig conversies voor significantie binnen enkele maanden | Voor-na-meting en gefaseerde uitrol zijn de default-testvormen; kwalitatief bewijs weegt zwaarder omdat het relatief het beste bewijs is dat te krijgen valt; meer beslissingen eindigen terecht als concept only, en dat is een diagnose, geen systeemfout |

**Vul in voor deze klant:**

| Veld | Waarde |
|------|--------|
| Sessies per maand | |
| Conversies per maand | |
| Haalbare testduur voor een detecteerbaar effect | |
| Beschikbare testtooling (of "geen") | |
| Gekozen regime plus motivering | |

Bij `dun` geldt ook: een blokkade hoeft niet uit een A/B-test te komen. Een uitgerolde
wijziging met een duidelijke breuk in een voor-na-meting, of een consistent support- of
verkoopsignaal, kan een patroon blokkeren. Leg de onderbouwing dan explicieter vast, want
de bewijsvorm is zwakker.

## P4. merk-mandaat

Hoever de ontwerprichtingen visueel mogen divergeren.

| Waarde | Betekenis |
|--------|-----------|
| brand-vast | Alle richtingen blijven binnen `07_DESIGN-SYSTEM/Design-Tokens.md`; divergentie zit in structuur, mechaniek en compositie |
| brand-open | Richtingen mogen de merkexpressie oprekken zolang logo en kernkleur herkenbaar blijven; elke oprekking wordt expliciet als voorstel benoemd |
| brand-afwezig | Er is nog geen design system. De tokens zijn dan geen bron maar een deliverable, en de spreiding over de richtingen is tegelijk de merkverkenning |

**Vul in voor deze klant:**

| Veld | Waarde |
|------|--------|
| Mandaat | |
| Bij brand-open: wat mag opgerekt, wat blijft vast | |
| Bij brand-afwezig: wanneer worden de tokens vastgesteld | |
| Waar het bestaande design system leeft (of "bestaat niet") | |

## P5. markt-en-rechtsregime

Voor welke markt of markten wordt ontworpen, en welk juridisch kader daar geldt.

**Vul in voor deze klant:**

| Veld | Waarde |
|------|--------|
| Markt(en) | |
| Valuta van de advertentie- en omzetdata | |
| Gangbare betaal- of aanvraagmethoden in deze markt | |
| Privacyregime dat van toepassing is | |
| Toegankelijkheidsnorm en de grond daarvoor | |
| Consent-regime en of dat de meetdata raakt | |

Bij meerdere markten: benoem of de beslismomenten per markt verschillen. Verschillen ze,
dan is dat een eigen dimensie in de segmentatie en mogelijk een eigen kern-flow.

## P6. werktaal

| Veld | Waarde |
|------|--------|
| Taal interne documenten | |
| Taal client-facing output | |
| Schrijfconventies van de opdrachtgever (leestekens, aanspreekvorm, verboden woorden) | |
| Zoektaal voor referentie-onderzoek | |

Let op: referentie-onderzoek gebeurt vrijwel altijd in het Engels, ongeacht de werktaal,
omdat de patroonbibliotheken Engelstalig geïndexeerd zijn.

## P7. traject-modus

Welke fases en gates draaien.

| Waarde | Draait | Eindigt bij |
|--------|--------|-------------|
| diagnose-only | 0 t/m 3 | Diagnose-samenvatting; geen richtingen, geen DDR's |
| kern-flow | 0 t/m 9 op 1 flow | Handoff van die ene flow |
| vol-redesign | 0 t/m 9 op alle kern-templates | Handoff van het geheel |
| audit-bestaand-design | 0 t/m 3 plus een toets van bestaande componenten op de score | Auditrapport: welke componenten halen de drempel |

**Vul in voor deze klant:**

| Veld | Waarde |
|------|--------|
| Modus | |
| Bij kern-flow: welke flow | |
| Fases die bewust niet draaien, plus reden | |

## P8. traject-omvang

Hoeveel werk het traject omvat. Schaalt **alleen volume**: het aantal richtingen, het aantal
templates in scope en de zwaarte van de deliverables. Raakt geen enkele kwaliteitsregel.

> Let op waar deze parameter **niet** over gaat. Weinig verkeer is geen reden voor `light`; dat
> stuurt P3 evidence-regime. Welke fases draaien is geen kwestie van omvang; dat is P7. P8 gaat
> over de omvang van de opdracht: budget, doorlooptijd en hoeveel van de site meedoet. Een kleine
> klant met een ruime opdracht draait `vol`, een grote klant met een korte opdracht draait `light`.

| Waarde | Wanneer |
|--------|---------|
| vol | Volledige opdracht: er is ruimte voor de complete richtingenronde en alle kern-templates |
| light | Korte of afgebakende opdracht: het traject moet passen in beperkte tijd of budget |

### Wat er meeschaalt

| Aspect | vol | light |
|--------|-----|-------|
| Richtingen in fase 5b | 5 | 3 |
| Templates in scope voor DDR's en build | alle kern-templates uit het Template-Registry | de kern-flow plus maximaal 2 aanpalende templates |
| Direction Case | volledig format | verkort format: dezelfde verplichte velden, kortere toelichting per veld |
| Referenties per hypothese | 4 tot 7 uit minimaal 2 industrieën | 3 tot 4 uit minimaal 2 industrieën |
| Wireframe-briefs | 1 per template in scope, alle schermen uitgewerkt | 1 per template in scope; binnen de kern-flow worden alle schermen uitgewerkt, daarbuiten alleen het scherm waar de beslissing landt |
| Fase-reviews door het Red Team | na elke fase | drie samengevoegde reviews: na fase 3 (dekt 0 t/m 3), na fase 6 (dekt 4 t/m 6) en na fase 8 (dekt 7 en 8) |
| Stijl-scouting per richting | 5 assen per richting | 5 assen, alleen voor de gekozen richting plus de runner-up |

### Wat er niet meeschaalt

Deze lijst is de kern van de parameter. Bij `light` blijven ongewijzigd: de minimumscore 3 voor
Figma-productie, de anker-regels van de Evidence Score, de 12-vragen DDR-toets, de 8-vragen
Direction Case-toets, de anti-convergentie-poort op vier dimensies, elk verplicht veld
(onzekerheden, guardrails, falsificatie, "ten koste van"), de betrouwbaarheidshierarchie, de data
decay policy, de isolatie-eis en elk veld van het Gate-Record.

De route naar bewijs schaalt mee, de lat niet. Wie bij `light` een gate wil versoepelen, vraagt in
werkelijkheid om een andere lat en moet dat als expliciet risico-akkoord aan de lead voorleggen,
gelogd in het Gate-Record.

Twee regels die eerder stil misgingen en daarom expliciet staan:

- **Geen fase blijft ongetoetst.** `light` voegt reviews samen, het laat er geen vervallen. De
  review na fase 8 dekt de Figma-uitwerking en de validatie; fase 9 handoff heeft ook bij `vol`
  geen eigen review en hangt aan die van fase 8. Een samengevoegde review loopt alle zeven
  dimensies af en benoemt per gedekte fase wat hij daar gevonden heeft.
- **Elke template in scope krijgt een wireframe-brief**, ook de aanpalende. Wat bij `light`
  schaalt is niet het aantal briefs maar hoeveel schermen er per template worden uitgewerkt:
  binnen de kern-flow allemaal, daarbuiten alleen het scherm waar de beslissing landt.

### Ondergrenzen

- Nooit minder dan 3 richtingen. Bij 2 wordt de keuzesessie een vergelijking in plaats van een
  keuze, en ankert de lead op de eerst gepresenteerde.
- De richtingen worden ook bij `light` in evenveel geïsoleerde parallelle subagents gemaakt.
  Minder richtingen is geen reden om ze in één context te schrijven.
- De lead ziet nooit een onvolledige set. Moet één richting terug, dan wordt die hergenereerd in
  een nieuwe geïsoleerde subagent; moeten er twee of meer terug, dan gaat de set terug naar de
  fork-inventarisatie. Die regel is gelijk voor `vol` en `light`: een kleiner traject krijgt geen
  strengere drempel, want dan zou deze parameter alsnog een kwaliteitsregel worden.

**Vul in voor deze klant:**

| Veld | Waarde |
|------|--------|
| Omvang | |
| Aanleiding voor deze keuze (budget, doorlooptijd, scope van de opdracht) | |
| Aantal richtingen in fase 5b | |
| Templates in scope, expliciet benoemd | |
| Wat er bewust buiten scope blijft, en wat dat mogelijk kost | |

Bij `light` hoort het laatste veld ingevuld te zijn met iets concreets. "Minder werk" is geen
scope-keuze; "we ontwerpen de categoriepagina niet en accepteren dat het lek daar blijft" wel.

---

## Wijzigingsregel

Een parameter wijzigen tijdens een lopend traject is een besluit, geen correctie. Log het
in `09_DECISION-LOG/Decision-Log.md` met de reden, en beoordeel welk werk daardoor
herzien moet worden. `conversie-model` en `meet-stack` wijzigen betekent vrijwel altijd
dat het Data-Contract en de baseline opnieuw moeten.

Een paar parameters reizen mee met het werkstuk in plaats van hier opgezocht te worden:
`merk-mandaat` plus `traject-omvang` staan in elke Direction Case, en `conversie-model` plus
`evidence-regime` staan in de kop van elke DDR en van de Diagnose-Samenvatting. Zo draagt elk
artefact zijn eigen aannames, ook als dit bestand later wijzigt.

`traject-omvang` wijzigen van `light` naar `vol` halverwege betekent niet dat de al gemaakte
richtingen ongeldig zijn. Het betekent dat er richtingen bij komen, in nieuwe geïsoleerde
subagents, met de bestaande richtingen op de verbodslijst, en dat de anti-convergentie-poort en
de Red Team-toets over de volledige nieuwe set opnieuw draaien.
