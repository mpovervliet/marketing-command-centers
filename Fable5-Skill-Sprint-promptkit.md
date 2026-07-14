# Fable 5 Skill Sprint — prompt-kit voor MP

Drie kant-en-klare prompts om, zolang Fable 5 gratis is (tot 12-07-2026), in bulk
uitstekende skills te bouwen bovenop je `marketing-command-centers`. Ontworpen naar
je eigen `MODEL-ROUTING.md`-regels: batch vooraf, alle context in één prompt, autonoom
laten draaien.

## Zo gebruik je dit

1. Start een **nieuwe sessie** en zet het model op **Fable 5 (High)**.
2. **Koppel de map** `C:\marketing-command-centers` als context (Add folder) — zonder
   die map kan Fable je bestaande skills en de bouwpijplijn niet lezen.
3. Draai **Prompt 1** (roadmap). Lees de lijst, streep/voeg toe wat je wilt.
4. Draai **Prompt 2** (de bouwmachine) en plak je goedgekeurde lijst erin. Laat 'm
   autonoom lopen.
5. Optioneel **Prompt 3** om de kwaliteitslat vast te leggen voor ná Fable (Sonnet/Opus).
6. Daarna in Cowork: de herbouwde `.plugin`-bestanden uit `dist\` opnieuw installeren.

> Let op je eigen NDA-regel: voor klant-copilot-skills met gevoelige klantdata houdt
> Fable die 30 dagen vast. Bouw klant-copilots **generiek** (playbooks/structuur), zet
> gevoelige klantdata er niet in.

---

## PROMPT 1 — Skill-roadmap (draai dit eerst, bouwt nog niks)

```
Je bent mijn AI-systeemarchitect voor marketing-skills. De map C:\marketing-command-centers
is als context gekoppeld: dit is mijn plugin-bron- en bouwmap. Ik ben Maarten Pieter
Overvliet, freelance AI-marketeer gespecialiseerd in SEO & GEO, met command centers voor
SEO/GEO, Google Ads, Meta Ads, CRO, UX, Retention/Lifecycle, plus klant-copilots (Badenman,
La Fuga) en persoonlijke freelance-skills.

Doel: lever een geprioriteerde roadmap van NIEUWE skills die mijn toekomstige werk
aantoonbaar sneller en beter maken. Ik ga die daarna in bulk laten bouwen. Bouw nu nog niks.

Werk in deze volgorde:

1. INVENTARISEER. Lees skills-source/, plugin-map.json, WORKFLOW.md, skill-template.md en de
   README's van de command centers. Maak een volledige lijst van bestaande skills per center.

2. SPOT DE GATEN. Bepaal per command center welke skills ontbreken t.o.v. 2026 best practices
   en een compleet vakgebied. Kijk expliciet ook naar:
   - Nieuwe command centers voor aangrenzende vakgebieden (bv. Analytics/GA4+GTM+server-side,
     marketplaces/Amazon+bol, AI-automation & agent-workflows, digital PR/comms, pricing &
     margin, deliverability-diep, affiliate, video/YouTube, local SEO).
   - Workflow- & freelance-skills die MIJN proces versnellen (rapport-automation,
     deliverable-generators, offerte/factuur, client-intake, kennisbeheer, proposal-writing,
     QBR-builder, urenverantwoording).
   - Diepere klant-copilots.
   - Een aparte categorie "waar ik nu niet aan denk maar in mijn vakgebied waardevol is" —
     wees hier ambitieus en concreet, geen open deuren.

3. PRIORITEER. Scoor elk idee op Impact (hoe vaak, hoeveel tijd bespaart het) x Inspanning
   (complexiteit om te bouwen).

4. LEVER. Een tabel per categorie met kolommen: skill-naam (kebab-case, wordt straks de
   foldernaam), doel in 1 zin, 2-3 trigger-scenario's, doel-plugin (bestaand of nieuw),
   Impact, Inspanning, prioriteit (P1/P2/P3). Sluit af met een "bouw deze eerst"-shortlist
   van de sterkste 15.

Stel maximaal 3 verhelderingsvragen als iets echt onduidelijk is; ga anders uit van redelijke
aannames en benoem ze kort.
```

---

## PROMPT 2 — De bouwmachine (plak je goedgekeurde lijst erin)

```
Je bent mijn skill-bouwer. De map C:\marketing-command-centers is gekoppeld. Bouw nieuwe
skills in bulk volgens mijn exacte conventies en bouwpijplijn.

INPUT: <plak hier de goedgekeurde skills uit de roadmap, of schrijf: "gebruik de top-15
shortlist die je net maakte en werk die volledig af, daarna P2 zolang de kwaliteit houdt">.

Conventies (hard, niet van afwijken):
- Bron van waarheid = skills-source/<skill-naam>/SKILL.md. De foldernaam == name: in de
  frontmatter (kebab-case).
- Volg skill-template.md als structuur en WORKFLOW.md voor de flow.
- Nederlands, strategisch-operationeel register. Circa 200-290 regels per SKILL.md.
- YAML-frontmatter met name + description. De description is "pushy" voor goede triggering,
  met concrete triggerzinnen, max circa 950 tekens (Cowork-validator kapt boven 1024).
- Geen em-dash of en-dash, geen emoji's.
- Body-structuur: Wanneer activeren -> Werkwijze -> Kern-kennis -> Anti-patterns ->
  Output-formaat -> Dependencies -> Integratie -> Tips.
- 2026 best practices expliciet benoemen.

KWALITEITSPOORT (belangrijk): elke skill moet niet-triviale, actuele expertise en concrete
playbooks/checklists bevatten die een generieke assistent NIET vanzelf heeft. Mik op zoveel
mogelijk skills, maar schrap elk idee dat deze poort niet haalt. Liever een grote stapel
uitstekende skills dan volume met dunne fluff.

Werkwijze per skill:
1. Maak skills-source/<skill-naam>/SKILL.md.
2. Voeg de skill toe aan de juiste plugin in plugin-map.json. Is het een nieuw vakgebied?
   Maak dan een nieuw plugin-object aan met complete metadata en bump de version.

Na alle skills:
3. Draai python build-plugins.py en bevestig dat elke gewijzigde .plugin in dist/ is
   herbouwd (let op de description-validator).
4. RAPPORTEER: tabel met elke gemaakte skill, de plugin waarin die valt, het aantal regels,
   en de exacte lijst .plugin-bestanden die ik in Cowork opnieuw moet installeren.

Werk autonoom door de hele lijst. Vraag alleen iets als een skill een inhoudelijke keuze
vereist die echt van mij moet komen.
```

---

## PROMPT 3 — Kwaliteit vastleggen voor ná Fable (optioneel)

```
Je bent mijn senior skill-editor. Doel: borgen dat NA Fable (met Sonnet of Opus) mijn
skill-kwaliteit op peil blijft. De map C:\marketing-command-centers is gekoppeld.

1. Bestudeer mijn 5 sterkste bestaande skills in skills-source/ (bv. seo-geo-specialist,
   cro-specialist, google-ads-specialist, ux-specialist, retention-lifecycle-specialist).
   Destilleer wat ze goed maakt: structuur, dieptegraad, triggering, toon, playbook-dichtheid.

2. Schrijf een nieuw bestand SKILL-WRITING-STANDARDS.md in de repo: een compacte, testbare
   checklist + do's/don'ts + een expliciete "definition of done" voor een skill, zo dat een
   goedkoper model zonder mij in de kamer een near-Fable skill kan schrijven.

3. Update skill-template.md en WORKFLOW.md waar ze afwijken of incompleet zijn.

4. Toon een before/after-diff van elke wijziging met 1 regel reden.

Verander geen bestaande skill-inhoud. Alleen de standaard- en templatebestanden.
```

---

## Kleine tips

- Draai Prompt 1 en 2 in **dezelfde** Fable-sessie: dan houdt Fable de roadmap-context vast
  en hoef je minder te herhalen.
- Wil je nog meer volume in de resterende gratis dagen? Draai Prompt 2 een tweede keer met
  "werk nu de P2-lijst af" nadat de shortlist klaar is.
- Verdeel zware runs over losse berichten (bv. "bouw eerst de 8 SEO/GEO-skills, dan stop en
  rapporteer") zodat je tussentijds kunt bijsturen zonder een hele run kwijt te raken.
- Na installatie: start telkens een nieuw gesprek zodat Cowork de nieuwe plugin-versies laadt.
```
