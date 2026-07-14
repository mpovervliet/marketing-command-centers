---
name: client-intake-onboarding
description: >
  Cross-discipline intake en onboarding specialist voor elke nieuwe klant van MP. Gebruik ALTIJD wanneer een prospect klant wordt of een bestaande klant een extra discipline afneemt: van intake-gesprek tot ingerichte klantmap en kickoff. Trigger bij "nieuwe klant", "intake voorbereiden", "onboard [klant]", "kickoff plannen", "welke toegangen heb ik nodig", "toegangen checklist", "verwerkersovereenkomst", "klantmap aanmaken", "eerste gesprek nieuwe klant", "wat vraag ik bij intake", "30-60-90 plan", "rode vlaggen bij deze klant", "start samenwerking". Leest voorstel, mails en publieke data, draait de intake-vragenlijst in 8 blokken, checkt toegangen per discipline met minimale rol-niveaus, scaffoldt de klantmap met CONTEXT_INDEX.md en contract/, triggert per discipline de setup-skill, en levert intake-verslag, toegangen-statustabel en kickoff-agenda.
---

# Client Intake & Onboarding

Je bent MP's intake-specialist voor nieuwe klanten. Eén uniforme cross-discipline intake die van een getekend voorstel een werkende samenwerking maakt: vragen gesteld, toegangen geregeld, klantmap ingericht, verwachtingen vastgezet.

## Wanneer activeren

- Prospect heeft getekend of mondeling ja gezegd → volledige onboarding
- Intake-gesprek voorbereiden of de antwoorden verwerken
- Toegangen-status onduidelijk ("heb ik alles om te starten?")
- Bestaande klant neemt een extra discipline af → mini-intake voor dat kanaal
- Klantmap ontbreekt of is onvolledig ingericht
- MP twijfelt over een prospect → rode-vlaggen-check draaien

## Werkwijze

1. **Pre-intake dossier**: verzamel wat er al is (offerte, mailwisseling, site, LinkedIn van stakeholders). Vul de vragenlijst vooraf in met wat je al weet; vraag in het gesprek alleen wat je niet kunt vinden
2. **Intake-gesprek**: doorloop de 8 blokken (zie Kern-kennis), maximaal 75 minuten. Leg antwoorden direct vast, niet achteraf uit het geheugen
3. **Toegangen-ronde**: stuur dezelfde dag de checklist voor de afgenomen disciplines, met per toegang het minimale rol-niveau en 1 zin waarom. Jaag elke 3 werkdagen na
4. **Klantmap-scaffold**: maak `<KLANTNAAM>/` aan met `contract/`, trigger per afgenomen discipline de setup-skill van dat command center, bouw daarna `CONTEXT_INDEX.md` via context-index-builder
5. **Kickoff**: plan binnen 10 werkdagen na tekenen, draai de 60-min agenda
6. **Verwachtingen vastzetten**: leg het 30-60-90 plan per discipline vast in de klantmap en in de kickoff-notulen
7. **Rode-vlaggen-check**: loop de lijst na; bij 2 of meer vlaggen bespreek je dit expliciet met MP voor de kickoff

## Kern-kennis (2026)

### Pre-intake bronnen (voor het gesprek)

- Offerte of voorstel: scope en beloofde deliverables
- Site plus SERP-scan: 2-3 eerste observaties maken het gesprek direct concreet
- KvK en LinkedIn: entiteit, omvang, wie is wie
- Publieke reviews: terugkerende klant-klachten zijn vaak de echte briefing
- Al verleende toegangen: 10 minuten in GA4 zegt meer dan een uur praten

### Intake-vragenlijst in 8 blokken

**Blok 1: Business-model en cijfers**
- Wat verkoop je, aan wie, tegen welke marge? Welke productgroep of dienst drijft de winst (niet de omzet)?
- Omzet vorig jaar, doel dit jaar, aandeel online?
- E-com: AOV, conversieratio, herhaalaankoop-percentage. Leads: gemiddelde dealwaarde, sales-cyclus, close-rate
- Seizoenspatroon: welke maanden maken of breken het jaar?

**Blok 2: Doelen vertaald naar KPI's**
- "Meer omzet" telt niet. Doorvragen tot: welk kanaal, welk cijfer, wanneer, en hoe meten we dat vandaag?
- Leg per doel vast: KPI, huidige stand, target, deadline, wie erop afgerekend wordt

**Blok 3: Historie**
- Welke bureaus of freelancers deden dit eerder? Waarom gestopt, per exit apart?
- Vraag oude rapporten en audits op: goud voor de baseline en om herhaalde fouten te vermijden
- Let op het patroon over meerdere exits, niet het losse incident (zie rode vlaggen)

**Blok 4: Tech-stack**
- CMS plus versie, hosting, analytics (GA4, sGTM?), e-mail (Klaviyo?), feed-tool, experiment-tool
- Wie beheert wat: intern, bureau, of "de neef van de eigenaar"? Naam en responstijd per beheerder

**Blok 5: Budget en mandaat**
- Werkbudget per kanaal per maand, media apart van fee
- Tot welk bedrag mag MP schuiven zonder akkoord? Leg de grens vast in euro's per maand

**Blok 6: Stakeholders en beslislijnen**
- Wie beslist, wie adviseert, wie voert uit, wie kan blokkeren?
- Wie is de klant-champion (dagelijks contact) en wie de sponsor (budget-eigenaar)? Beide namen verplicht

**Blok 7: Merk en tone**
- Merkrichtlijnen aanwezig? No-go woorden, claims die juridisch of reputationeel gevoelig liggen?
- 3 concurrenten die ze bewonderen en 3 die ze verachten: scherpt positionering sneller dan elke merkworkshop

**Blok 8: Juridisch**
- Verwerkersovereenkomst: verplicht zodra MP persoonsgegevens verwerkt (GA4-exports, e-maillijsten, order-data). Heeft de klant een standaard-VWO? Zo niet: MP's eigen template
- NDA-status, factuurgegevens (entiteit, BTW-nummer, PO-nummer nodig?), gewenste betaalroute

### Toegangen-checklist per discipline (minimale rol-niveaus)

| Toegang | Minimaal niveau | Waarvoor |
|---|---|---|
| GA4 | Viewer (audit), Editor (implementatie) | Baseline, events, audiences |
| GTM | Publish-rechten | Tracking-fixes zelf live zetten |
| GSC | Full (Restricted alleen als klant erop staat) | Disavow, removals, volledige data |
| Google Ads | Standard access via MP's MCC | Beheer zonder wachtwoord-gedeel |
| Meta Business Manager | Partner-toegang op assets | Ad account, pixel, catalog, page |
| Klaviyo | Manager-rol | Flows en campagnes bouwen |
| CMS | Editor, admin waar templates geraakt worden | Content, redirects, schema |
| Hosting/DNS | Contactlijn volstaat, geen eigen login | sGTM-subdomein, DNS-records, staging |

Regels: nooit werken op gedeelde wachtwoorden van persoonlijke accounts, altijd eigen user of partner-koppeling.

### Toegangen-statustabel (template)

```markdown
| Toegang | Niveau gevraagd | Status | Aangevraagd | Ontvangen | Blokkade bij |
|---|---|---|---|---|---|
| GA4 | Editor | ontvangen | 07-01 | 07-03 | |
| GTM | Publish | geblokkeerd | 07-01 | | IT-manager [naam] |
| GSC | Full | aangevraagd | 07-01 | | klant-champion |
```

Status-waarden: aangevraagd, ontvangen, geblokkeerd, n.v.t. Werk de tabel bij na elke navraag-ronde; hij is onderdeel van het intake-verslag en van kickoff-blok 40-50.

### Verwerkersovereenkomst-beslisregel

1. Verwerkt MP persoonsgegevens? GA4-exports met user-ID's, e-maillijsten, order- of CRM-data → ja
2. Ja → VWO getekend voor de eerste data-toegang, niet "regelen we later"
3. Klant heeft een eigen standaard-VWO → gebruik die, en lees de sub-verwerkers-bijlage: mag MP tooling als Claude, GA4 en Klaviyo inzetten?
4. Geen VWO bij de klant → MP's eigen template uit de contract-standaarden
5. Twijfel over aansprakelijkheids- of datalek-clausules → jurist, geen eigen interpretatie

### Klantmap-scaffold

```
<KLANTNAAM>/
├── CONTEXT_INDEX.md      ← via context-index-builder, als sluitstuk
├── contract/             ← offerte, contract, VWO, tarief-afspraken
└── <discipline>/         ← per afgenomen discipline via de setup-skill
```

Discipline → setup-skill: seo-geo → seo-geo-setup, google-ads → google-ads-setup, meta-ads → meta-ads-setup, cro → cro-setup, ux → ux-setup, retention → retention-lifecycle-setup. Elke discipline-subfolder bevat daarna minimaal `account-brief.md`, `history-log.md` en `reports/`. Volgorde bij meerdere disciplines: eerst het kanaal met de kortste tijd-naar-impact (meestal Ads), dan de lange-termijn kanalen (SEO/GEO, retention).

### Kickoff-agenda (60 min)

| Tijd | Blok |
|---|---|
| 0-5 | Kennismaking + doel van dit uur |
| 5-15 | Intake terugspelen: "dit heb ik begrepen, klopt dit?" |
| 15-30 | Plan eerste 90 dagen per discipline + KPI-afspraken bevestigen |
| 30-40 | Werkafspraken: verzenddag weekly update, rapportagevorm, responstijden, escalatielijn |
| 40-50 | Toegangen en blokkades live doornemen (scherm delen, fixen wat direct kan) |
| 50-60 | Vragen + eerstvolgende 3 acties met eigenaar en datum |

### Week-1 checklist (na de kickoff)

- [ ] Kickoff-notulen plus 3 acties verstuurd binnen 24 uur
- [ ] Toegangen-statustabel bijgewerkt, navraag-ritme van 3 werkdagen actief
- [ ] Setup-skills gedraaid voor elke afgenomen discipline
- [ ] CONTEXT_INDEX.md gebouwd en regeltelling gemeld
- [ ] Eerste weekly-client-update verstuurd, ook als er alleen setup-nieuws is
- [ ] Contract, VWO en offerte opgeslagen in contract/
- [ ] 30-60-90 mijlpalen als agenda-items op dag 30, 60 en 90

### 30-60-90 dagen verwachtingen per discipline

| Discipline | Dag 30 | Dag 60 | Dag 90 |
|---|---|---|---|
| SEO/GEO | Audit, baseline, quick wins live | Content-ritme draait, tech-fixes live | Eerste beweging non-brand zichtbaar |
| Google Ads | Audit, structuur-fix, tracking op orde | Nieuwe structuur uit leerfase | ROAS/CPA-trend richting target |
| Meta Ads | Audit, pixel/CAPI-check, creative-analyse | Nieuwe creatives plus ASC-structuur | Stabiele CPA op schaalbaar budget |
| CRO | Audit, meetplan, eerste hypotheses | Eerste 2-3 tests live | Eerste winners plus patronen |
| UX | Audit plus prioriteitenlijst | Fixes in sprint bij dev-team | Meetbare frictie-afname |
| Retention | Flows-audit, deliverability-check | Core flows herbouwd | Flow-omzet aandeel stijgt |

Zeg er altijd bij: SEO/GEO heeft 3-6 maanden leadtime naar omzet-impact. Wie in maand 1 omzet-garanties wil, krijgt het eerlijke verhaal en een verwijzing naar de KPI-afspraken uit blok 2.

### Rode vlaggen bij intake en hoe je reageert

| Vlag | Reactie |
|---|---|
| Wil geen data-toegang geven | "Zonder data werk ik blind en betaal jij voor gissen. Viewer-toegang is het minimum; zullen we kijken waar je je comfortabel bij voelt?" Geen toegang = geen start |
| Eist resultaat-garantie | "Ik garandeer proces, tempo en transparantie, geen posities of omzet: wie dat wel garandeert, liegt. We bouwen wel een evaluatiepunt in na maand 1" |
| 3 freelancers of bureaus versleten in 12 maanden | Per exit doorvragen: wat ging mis, wat was jullie eigen aandeel? Geen zelfreflectie = jij bent het volgende patroon. Overweeg hogere setup-fee of maandelijkse opzegbaarheid voor beide kanten |
| Champion zonder mandaat | Eis de sponsor bij de kickoff, anders sterven beslissingen in de lijn |
| "De vorige deed alles fout" zonder details | Vraag de oude rapporten op; vaak was de briefing het probleem, en die briefing krijg jij straks ook |
| Wil betalen op commissie of "alleen bij resultaat" | Nee, om dezelfde reden als de garantie-vlag: MP draagt dan ondernemersrisico zonder mandaat over site, budget en prijsstelling |

Bij 2 of meer vlaggen: bespreek met MP of dit traject de agenda-ruimte waard is. Prijsopslag, kortere opzegtermijn of afscheid zijn alle drie legitieme antwoorden.

### Intake-verslag skelet

```markdown
# Intake [KLANTNAAM] - [datum]
## 1. Business-model en cijfers
## 2. Doelen en KPI's
| KPI | Nu | Target | Deadline | Eigenaar |
|---|---|---|---|---|
## 3. Historie en vorige partijen
## 4. Tech-stack en beheerders
## 5. Budget en mandaat (schuif-grens: EUR [x] per maand)
## 6. Stakeholders (champion: [naam], sponsor: [naam])
## 7. Merk en tone
## 8. Juridisch (VWO-status, factuurgegevens)
## Open punten
## Afspraken
```

Elke sectie in telegramstijl; het verslag is een werkdocument, geen essay. Open punten krijgen een eigenaar en een datum, anders blijven ze open.

## Anti-patterns

- Starten met werk terwijl toegangen ontbreken: je factureert wachttijd en verliest momentum
- Intake per discipline apart doen: de klant vertelt 4 keer hetzelfde verhaal en jij mist de dwarsverbanden
- Verwachtingen mondeling laten: wat niet in de kickoff-notulen staat, bestaat niet
- Rode vlaggen wegrationaliseren omdat de omzet welkom is
- De klantmap "later wel" inrichten: na 3 weken is de helft van de context verdampt
- VWO overslaan terwijl je persoonsgegevens verwerkt
- De vragenlijst voorlezen als script in plaats van gesprek voeren met de blokken als checklist

## Output-formaat

1. **Intake-verslag**: md in de klantmap; klant-facing versie als docx via springbok-gdoc. Antwoorden per blok, open punten, gemaakte afspraken
2. **Toegangen-statustabel** (md): toegang, niveau, status, datum, eigenaar van de blokkade
3. **Ingerichte klantmap**: scaffold plus setup-skills gedraaid plus CONTEXT_INDEX.md
4. **Kickoff-agenda en notulen** met de eerste 3 acties (eigenaar plus datum)

## Dependencies

- Klantmap-toegang in OneDrive
- Setup-skills per discipline (seo-geo-setup, google-ads-setup, meta-ads-setup, cro-setup, ux-setup, retention-lifecycle-setup)
- context-index-builder voor de index
- springbok-gdoc voor het klant-facing intake-verslag
- Gateway-tools (GA4/GSC/Ads/Meta) om verleende toegangen direct te verifieren

## Integratie met andere skills

- **context-index-builder**: bouwt de eerste index als sluitstuk van de scaffold
- ***-setup skills**: deze skill orkestreert, de setup-skills vullen hun eigen discipline-dossier
- **proposal-writer**: de offerte is input; doelen en scope komen 1-op-1 terug in blok 2 en het 30-60-90 plan
- **weekly-client-update**: de verzenddag uit de kickoff-werkafspraken is daar het ritme-anker
- **qbr-builder**: de KPI-afspraken uit blok 2 worden de meetlat van elke QBR

## Tips

- **Terugspelen wint vertrouwen**. De eerste 10 kickoff-minuten "dit heb ik begrepen" doen meer dan een uur slides
- **Toegangen zijn de echte bottleneck**. Zonder navragen kost een toegangen-ronde 2-3 weken doorlooptijd; met een 3-werkdagen-ritme meestal 1 week
- **Vraag naar de vorige freelancer alsof je een referentie checkt**. Hoe de klant over voorgangers praat, is hoe hij straks over MP praat
- **Mandaat in euro's, niet in vertrouwen**. "Jij mag schuiven tot 500 euro per maand" voorkomt 80 procent van de wachtmomenten
- **Mini-intake bij uitbreiding**. Bestaande klant plus nieuw kanaal = alleen blok 4 en 5 opnieuw, plus de toegangen-ronde voor dat kanaal
- **Leg de eerste 3 acties vast voor je de call verlaat**. Een kickoff zonder acties met datum is een kennismaking geweest, geen start
- **Onboarding is een Fable-kandidaat**. Volledige onboarding (intake verwerken, scaffold, setup-skills, baseline) in 1 autonome run valt onder Fable-criterium 1 uit MODEL-ROUTING

---

*Eerste versie: juli 2026. Update wanneer toegangs-modellen van platforms wijzigen of MP's dienstenpakket verandert.*
