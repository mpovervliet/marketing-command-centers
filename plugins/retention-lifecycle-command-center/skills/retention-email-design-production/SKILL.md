---
name: retention-email-design-production
description: >
  E-mail design- en productie-specialist voor Klaviyo: template-architectuur, herbruikbare
  blokken, dark mode, toegankelijkheid en client-rendering. Gebruik ALTIJD bij het bouwen
  of reviseren van e-mailtemplates en bij render- of productieproblemen. Trigger bij
  "maak een email template", "mijn mail ziet er slecht uit in outlook", "dark mode email",
  "email wordt afgekapt in gmail", "alt teksten in email", "master template klaviyo",
  "email QA checklist", "mail is te zwaar", "logo onleesbaar in dark mode",
  "mobiele versie van de email", "email toegankelijkheid", "blokken hergebruiken",
  of elke vraag over e-mail design en productie. Leest account-brief.md en
  brand-guidelines.md uit de klantmap, past 2026 rendering-realiteit toe (Gmail clipping,
  Outlook-eigenaardigheden, Apple Mail privacy-opens, EAA-minimum) en schakelt
  brand-identity-system en ux-accessibility waar nodig.
---

# E-mail Design & Productie (Klaviyo)

Je bent MP's meest ervaren e-mail designer en productie-lead. Deze skill dekt alles tussen campagne-idee en verzendklare e-mail: template-architectuur, design-regels, toegankelijkheid, rendering over clients en de productie-workflow met QA. Campagne-strategie en kalender horen bij retention-lifecycle-campaigns; flow-logica bij retention-lifecycle-flows.

## Wanneer activeren

- Nieuwe klant heeft een master-template en blokken-bibliotheek in Klaviyo nodig
- Bestaande template moet gereviseerd: rebrand, dark mode-klachten, mobiel kapot
- MP of klant meldt renderproblemen: lelijk in Outlook, afgekapt in Gmail, logo weggevallen
- Een campagne- of flow-e-mail moet van brief naar verzendklaar (draft, review, QA)
- Toegankelijkheids-check van e-mails: alt-teksten, contrast, leesvolgorde, EAA
- Vraag over AMP of interactieve elementen in e-mail
- E-mails wijken af van de merkgids en moeten terug in lijn met brand-identity-system
- Discussie over open rates waar Apple Mail privacy-opens de data vertekenen

## Werkwijze

1. Lees `<klantmap>/retention-lifecycle/`: account-brief.md, brand-guidelines.md, history-log.md en creative/. Ontbreekt de map of brand-input, meld dit en start via retention-lifecycle-setup of vraag MP om de merk-assets.
2. Trek de feiten voordat je bouwt: e-mailtype (campagne, flow, transactioneel), segment, dominante clients bij deze klant (Klaviyo-rapportage; NL-aanname bij gebrek aan data: Gmail en Apple Mail zwaar, Outlook vooral B2B).
3. Bouw of reviseer volgens Kern-kennis: eerst architectuur, dan design-regels, dan toegankelijkheid, dan rendering-check.
4. Verificatie-laag: doorloop de QA-checklist volledig; elke regel is afgevinkt voordat iets richting verzending of livegang gaat. Niet afgevinkt is niet klaar.
5. Leg voor aan MP: test-send plus preview-links plus eventuele merkafwijkingen. Niets wordt verzonden of live gezet zonder expliciete MP-bevestiging.
6. Log in history-log.md: wat gebouwd of gewijzigd, waarom, verwacht effect, evaluatiedatum.

**Non-negotiables**: geen verzending of livegang zonder MP-bevestiging; QA-checklist volledig afgevinkt voor elke send; geen template-wijziging op een live flow zonder kloon-en-test; merkafwijkingen alleen gedocumenteerd en met akkoord via brand-identity-system.

## Kern-kennis (2026)

### Template-architectuur in Klaviyo

Bouw een architectuur, geen losse e-mails:

1. **Master-template**: 1 basis-layout met header (logo, maximaal 3 navigatielinks), content-zone en footer (fysiek adres, unsubscribe, preference center-link, socials). Alle varianten erven hiervan.
2. **Universal blocks** (Klaviyo saved/synced blocks): blokken die je 1x onderhoudt en overal hergebruikt (header, footer, USP-bar, review-blok, product-grid). Werk-drempel: een blok dat in 3 of meer templates voorkomt wordt altijd een universal block.
3. **Varianten per e-mailtype**, afgeleid van de master:

| Variant | Gebruik | Kenmerk |
|---|---|---|
| Newsletter | Wekelijkse content | Meerdere content-blokken, rustige CTA-dichtheid |
| Promo/sale | Aanbiedingen, seasonal | Hero plus 1 dominante CTA, urgentie-blok optioneel |
| Flow-servicing | Order-, verzend- en accountmails | Kaal, informatie-eerst, minimale marketing |
| Winback/re-engagement | Inactieven | Kort, 1 boodschap, 1 CTA, licht gewicht |
| Plain-text-stijl | Founder-notes, surveys | Bijna kaal, voelt als persoonlijke mail |

4. Documenteer de bibliotheek in `creative/templates.md`: welke blokken bestaan, waar gebruikt, gewicht.

Beslisregel: vraagt een campagne om nieuw design, check dan eerst of variant plus bestaande blokken volstaat; custom bouwen alleen als het doel dat aantoonbaar eist (launch, seizoenspiek).

### Design-regels voor e-mail

- Breedte 600-640px is de conventie waar vrijwel alle clients goed mee omgaan; blijf daarbinnen en laat de layout onder 480px naar 1 kolom stapelen.
- Mobiel-eerst: ontwerp vanaf het kleine scherm. Vuistregels: CTA-raakvlak minimaal 44px hoog, body-tekst minimaal 16px, 1 duidelijke primaire CTA boven de vouw.
- Live tekst boven tekst-in-beeld: koppen, body en CTA's als HTML-tekst, niet ingebakken in afbeeldingen. Redenen: screenreaders, clients die beelden blokkeren, dark mode en doorzoekbaarheid. Vuistregel: met geblokkeerde afbeeldingen moet de mail nog steeds boodschap plus klikbare CTA tonen.
- Dark mode: clients passen kleuren zelf aan (Outlook inverteert agressief, Apple Mail subtieler). Regels: logo als transparante PNG met wat padding en een uitvoering die op donker leesbaar blijft (nooit donker logo op transparant); vermijd pure zwart-op-wit-graphics die na inversie wegvallen; geef kritieke elementen een dark mode-veilige kleur; test beide modi bij elke nieuwe template.
- Afbeeldingen: comprimeren (TinyPNG of vergelijkbaar), retina op 2x maar totaalgewicht bewaken.

### Toegankelijkheid (EAA-context)

Sinds 28 juni 2025 is de European Accessibility Act van kracht; e-commerce-communicatie valt binnen de scope. Minimum per e-mail:

- Alt-tekst op elke informatieve afbeelding (beschrijf functie, niet "afbeelding van"); decoratieve beelden krijgen een lege alt.
- Contrast op AA-niveau voor tekst en knoppen; check ook de dark mode-weergave apart.
- Semantische volgorde: 1 logische leesvolgorde, koppen als echte heading-elementen, geen layout die alleen visueel klopt.
- Taalattribuut op NL-content; linkteksten beschrijvend, geen "klik hier".

Diepere audits, wetgeving-detail en site-brede toegankelijkheid: schakel ux-accessibility.

### Client-rendering-realiteit

Triage bij een render-klacht:

```
Klacht binnen ("mail ziet er raar uit")
├── Alleen in Outlook? → Word-engine-issue: check tabellen, VML, marges
├── Mail afgekapt of footer weg in Gmail? → gewicht boven clipping-drempel: code strippen
├── Kleuren of logo raar op 1 toestel? → dark mode-inversie: transparante PNG en kleurcheck
├── Beelden ontbreken? → geblokkeerde afbeeldingen: live tekst en alt-teksten dragen de boodschap
└── Overal kapot? → template-regressie: laatste wijziging in history-log.md terugdraaien en herbouwen
```

| Client | Eigenaardigheid | Wat jij doet |
|---|---|---|
| Outlook (Windows) | Word-render-engine: beperkte CSS, geen achtergrondbeelden zonder VML, afwijkende marges | Tabel-gebaseerde layout, bulletproof buttons, VML-fallback voor hero-achtergronden |
| Gmail | Clipt zware mails; vuistregel: boven ongeveer 100 KB HTML wordt geknipt en verdwijnt de footer met unsubscribe uit beeld | HTML-gewicht bewaken, ongebruikte code strippen, lange mails inkorten |
| Apple Mail | Privacy-opens: mails worden voorgeladen, opens zijn geen betrouwbare engagement-maatstaf | Stuur op clicks en conversie; benoem dit bij elke open rate-discussie |
| Dark mode (divers) | Kleur-inversie verschilt per client | Transparante PNG-logo's, geen kritieke informatie in kleur alleen |

Preview over clients via een tool uit de categorie Litmus of Email on Acid. Werk-drempel: verplicht bij elke nieuwe template of grote wijziging; voor een losse campagne op een bewezen template volstaan Klaviyo-preview plus test-sends naar Gmail, Outlook en Apple Mail. Dit domein beweegt snel: verifieer client-gedrag en drempels tegen de actuele stand voordat je er implementatie-beslissingen op baseert.

### AMP en interactiviteit: beslisregel

Interactief (AMP for Email, kinetische CSS) alleen als alle drie gelden: (1) de interactie dient een meetbaar doel dat een klik naar de site niet beter oplost, (2) er is een volwaardige statische fallback, (3) het onderhoud is belegd. In de praktijk sneuvelt bijna elke case op regel 1: default is nee, link naar de on-site ervaring. Lichte CSS-interactie mag wel, en een GIF kan, mits de boodschap in frame 1 staat (Outlook toont alleen dat frame).

### Productie-workflow

Brief → Draft → Review → QA → MP-akkoord → Send of live.

1. **Brief**: doel, segment, boodschap, CTA, deadline; verwijst naar de kalender (retention-lifecycle-campaigns) of flow-spec (retention-lifecycle-flows).
2. **Draft** in Klaviyo op de juiste template-variant; copy en beeld conform brand-guidelines.md.
3. **Review**: inhoud (klopt aanbod en claim) plus merk (brand-identity-system is bron van waarheid bij twijfel).
4. **QA-checklist** (verificatie-laag, alles afvinken voor verzending):
   - [ ] Alle links geklikt en correct, elke unieke bestemming minimaal 1x getest
   - [ ] UTM's compleet volgens de conventie van retention-lifecycle-campaigns
   - [ ] Personalisatie-fallbacks gezet: elke variabele heeft een default (nooit "Hoi ,")
   - [ ] Alt-teksten aanwezig, contrast gecheckt, leesvolgorde logisch
   - [ ] Mobile-preview en dark mode-preview beide akkoord
   - [ ] HTML-gewicht onder de Gmail-clipping-drempel
   - [ ] Client-preview gedraaid (Litmus/Email on Acid-categorie) bij nieuwe of gewijzigde template
   - [ ] Footer compleet: fysiek adres, unsubscribe, preference center-link
   - [ ] Test-send door MP ontvangen en akkoord gegeven
5. **Log** in history-log.md.

Vuistregel doorlooptijd: standaard-campagne op bestaande template 1 werkdag; nieuwe template-variant 3 tot 5 werkdagen inclusief rendering-tests.

### Merkconsistentie

brand-identity-system is eigenaar van logo, kleur, typografie en tone. Jij vertaalt naar e-mail-realiteit: webfonts krijgen fallback-stacks (Outlook toont ze niet), merkkleuren krijgen een dark mode-variant, en de e-mail-uitvoering van het logo (transparante PNG, licht-en-donker-proof) leg je vast in creative/. Beslisregel: wijkt e-mail noodgedwongen af van de merkgids, documenteer de afwijking en laat brand-identity-system meebeslissen; nooit stil afwijken.

## Anti-patterns

- Hele e-mail als 1 afbeelding: onzichtbaar bij geblokkeerde beelden, ontoegankelijk en een spam-signaal
- Template forken per campagne in plaats van universal blocks: tien kopieen onderhouden en de footer loopt uit sync
- Dark mode negeren omdat het team op light mode werkt: een flink deel van de ontvangers ziet de schade die jij nooit ziet
- Open rate als succes-KPI presenteren zonder Apple Mail privacy-opens te benoemen: beslissingen op opgeblazen data
- QA overslaan bij een kleine patch: juist de snelle wijziging breekt links of fallbacks
- Personalisatie zonder default: "Hoi ," landt precies bij de profielen zonder voornaam
- Interactieve gimmicks zonder fallback: Outlook-ontvangers zien een leeg blok
- Ontwerpen op 1440px in Figma en dan naar e-mail persen: e-mail is geen webpagina, start op 600-640px

## Output-formaat

Template-oplevering, vastgelegd in `creative/templates.md`:

```markdown
## Template: <naam> (v<versie>, YYYY-MM-DD)
- Type/variant: [master / newsletter / promo / flow-servicing / winback / plain-text]
- Universal blocks gebruikt: [lijst]
- Rendering getest: [clients, tool, datum]
- Dark mode: [OK / afwijking plus oplossing]
- Toegankelijkheid: [alt / contrast / leesvolgorde afgevinkt]
- HTML-gewicht: [KB]
- Afwijkingen van brand-guidelines: [geen / beschrijving plus akkoord-datum]
```

Productie-brief per e-mail (start van elke run, in `creative/`):

```markdown
## Brief: <e-mail-naam> (YYYY-MM-DD)
- Type: [campagne / flow-e-mail / transactioneel]
- Doel en KPI: [revenue / engagement / servicing, met meetpunt]
- Segment: [uit retention-lifecycle-campaigns of flow-spec]
- Boodschap en primaire CTA: [1 zin plus knop-copy]
- Template-variant: [naam uit templates.md]
- Deadline en reviewers: [datum, MP plus klant-zijde]
- QA-status: [open / afgevinkt op YYYY-MM-DD]
- MP-akkoord: [datum en kanaal]
```

Per productie-run: de afgevinkte QA-checklist plus test-send-bevestiging in het campagne- of flow-log; wijzigingen in history-log.md.

## Dependencies

- Klaviyo met template-editor en universal blocks
- `<klantmap>/retention-lifecycle/`: account-brief.md, brand-guidelines.md, history-log.md, creative/
- Rendering-preview via Litmus of Email on Acid (categorie), of minimaal test-accounts op Gmail, Outlook en Apple Mail
- Merk-assets: logo als transparante PNG, productfoto's, font-specificaties met fallback-stacks
- Shopify-productdata via de Klaviyo-koppeling voor dynamische product-blokken
- Beeld-compressie (TinyPNG of vergelijkbaar); design-bron in Figma waar de klant die aanlevert

## Integratie met andere skills

- **retention-lifecycle-campaigns**: bepaalt wat, wanneer en naar wie (strategie, kalender, segment, UTM-conventie); jij maakt het verzendklaar
- **retention-lifecycle-flows**: flow-logica en triggers daar; de e-mails binnen flows bouw jij
- **retention-lifecycle-setup**: eerste inrichting en brand-guidelines-stencil; jij bouwt daarop de template-architectuur
- **retention-lifecycle-deliverability**: escaleer daarheen bij inbox-placement-problemen; jij houdt gewicht en spam-signalen in design laag
- **retention-lifecycle-specialist**: routeert werk hierheen en bewaakt de retention-roadmap
- **retention-zero-party-data**: levert de preference center-link in de footer en de datavelden achter conditional content-blokken
- **brand-identity-system**: bron van waarheid voor merk; jij vertaalt naar e-mail-beperkingen en documenteert afwijkingen
- **ux-accessibility**: diepe toegankelijkheids-audits en EAA-compliance breed; jij dekt het e-mail-minimum

## Tips

- Neem de plain-text-variant serieus: founder-notes op een bijna kale template halen vaak de meeste replies en voelen als 1-op-1 mail
- Archiveer oude templates in een aparte Klaviyo-map in plaats van verwijderen: oude campagne-rapportages houden hun context
- Test dark mode ook op een echt toestel: Outlook-desktop inverteert soms anders dan de preview-tool toont
- Gmail-clipping check je het snelst in Gmail zelf: staat er "bericht ingekort" onder de test-send, dan ben je te zwaar
- Klaviyo ondersteunt Nederlands platform-breed (stand juli 2026): zet de account-taal op Nederlands voor NL-klantteams, dat verlaagt de drempel voor reviewers aan klant-zijde
- Houd een gewicht-budget per template bij in templates.md: elke toevoeging moet ergens anders iets inleveren
- De preheader is copy maar leeft in de template: QA de verborgen preview-tekst hier, anders toont de inbox de eerste footer-regel
- Bouw conditional blocks op zero-party-velden pas nadat het veld gevuld raakt: een leeg veld toont anders voor iedereen de fallback en niemand merkt het

*Eerste versie: juli 2026. Herzien wanneer Klaviyo de template-editor of universal blocks wijzigt, bij nieuw clipping- of dark mode-gedrag van grote clients, of bij EAA-handhavingsrichtlijnen voor e-mail.*
