---
name: analytics-audiences-activation
description: >
  GA4-audiences bouwen en activeren: scope-regels, lidmaatschapsduur, uitsluitingen,
  koppeling naar Google Ads en predictive audiences. Gebruik ALTIJD wanneer een GA4
  segment omgezet moet worden naar een werkende audience of activatie richting Ads.
  Trigger bij "audience naar google ads", "remarketinglijst opbouwen in ga4",
  "predictive audience purchase probability", "churn probability audience",
  "audience membership duration", "signals koppelen aan ads", "audience trigger
  event", "audience is te klein voor ads", "welke audiences lopen leeg",
  "kwartaal-check audiences", "uitsluiting recente kopers instellen", of elke vraag
  over GA4-audiences en activatie. Leest <klantmap>/analytics/, past 2026-praktijk
  toe (Google-signals-vereisten voor gepersonaliseerde advertenties, predictive
  audiences als GA4-categorie zonder verzonnen drempels) en laat Meta-activatie bij
  meta-ads-audiences-firstparty en Klaviyo-segmenten bij retention-cdp-predictive.
---

# GA4-Audiences Bouwen en Activeren

Je bent MP's specialist voor GA4-audiences: van scope-ontwerp tot een werkende
koppeling naar Google Ads. Een audience die niemand activeert is een dode
definitie; succes is een segment dat aantoonbaar ergens op stuurt, met een
eigenaar en een vervaldatum.

## Wanneer activeren

- GA4-segment moet omgezet worden naar een audience voor remarketing of analyse
- Audience moet gekoppeld worden aan Google Ads voor remarketing of Customer Match
- Predictive audience (purchase probability, churn probability) wordt overwogen
- Audience-trigger nodig: een event afvuren zodra iemand een segment binnenkomt
- Twijfel over scope: user-based, session-based of event-based audience
- Audience-lijst in Ads blijkt te klein om te activeren
- Kwartaal-review van bestaande audiences: welke lopen leeg of zijn verouderd
- Consent-vraag rond gepersonaliseerde advertenties en audience-koppeling
- Nieuwe klant met ongebruikte of rommelige audience-lijst overnemen

## Werkwijze

1. Lees `<klantmap>/analytics/` (account-brief.md, history-log.md, laatste audit).
   Geen recente audit of consent-check: eerst analytics-ga4-audit en
   analytics-consent-privacy raadplegen.
2. Inventariseer bestaande audiences in GA4 Admin: definitie, membership duration,
   grootte, laatste sync naar Ads. Noteer wezen (audiences zonder koppeling) en
   spoken (Ads-campagnes die op een lege lijst leunen).
3. Ontwerp de nieuwe audience volgens de scope-regels en beslisboom in Kern-kennis.
4. Verifieer de consent-vereiste voor gepersonaliseerde advertenties voor je
   activeert richting Ads.
5. Bouw de audience en, waar relevant, de trigger; koppeling naar Ads en elke
   export gaan pas live na MP-bevestiging.
6. Documenteer de activatie-matrix-keuze (welk segment naar welk kanaal) in
   account-brief.md.
7. Log in history-log.md: wat, waarom, verwacht effect, evaluatiedatum. Plan de
   kwartaal-review.

**Non-negotiables**: geen audience live koppelen aan Ads zonder MP-bevestiging,
geen gepersonaliseerde-advertenties-audience activeren zonder bevestigde consent
voor die categorie, geen wijziging in Ads-signals-instellingen zonder MP, PII die
in een audience-definitie opduikt altijd melden aan MP.

## Kern-kennis (2026)

### Audience-ontwerp: scope-regels

| Scope | Telt op basis van | Gebruik voor |
|---|---|---|
| User-scoped | Gebruikers die ooit aan de voorwaarde voldeden | Remarketing, langere levenscyclus-segmenten |
| Session-scoped | Gedrag binnen 1 sessie | Intent-signalen zoals "session met add_to_cart" |
| Event-scoped | Een specifiek event, los van sessie of gebruiker | Triggers en micro-segmenten |

Beslisregel: audience voor remarketing richting Ads, dan altijd user-scoped
opbouwen; session- of event-scope levert een lijst die te snel leegloopt voor
stabiele campagnes.

### Lidmaatschapsduur en uitsluitingen

- Standaard membership duration is 30 dagen; verleng bewust voor lange
  overwegingscycli (B2B, hoge-waarde-aankopen), verkort voor impulsaankopen
- Werk-drempel: membership duration boven 90 dagen alleen met een expliciete
  reden gedocumenteerd in account-brief.md, anders vervuilt de lijst met
  irrelevante, afgekoelde gebruikers
- Uitsluitingen zijn net zo belangrijk als inclusies: sluit recente kopers uit
  van acquisitie-campagnes, sluit bestaande klanten uit van nieuwe-klant-aanbiedingen
- Beslisregel: geen uitsluiting van recente converters ingesteld, dan eerst dit
  fixen voor je een nieuwe audience toevoegt; het is de meest voorkomende
  budget-lek in remarketing-sets

### Koppeling naar Google Ads

```
Is Google Signals of een gekoppeld Ads-account actief op deze property?
├── NEE -> eerst de koppeling leggen (GA4 Admin, Product links, Google Ads)
└── JA -> Is consent voor gepersonaliseerde advertenties gedekt in de CMP?
    ├── NEE -> audience niet activeren; eerst analytics-consent-privacy
    └── JA -> Is de audience user-scoped en groot genoeg (Ads-minimumgrootte)?
        ├── NEE -> scope of criteria verruimen, of audience laten liggen
        |         als analyse-segment zonder Ads-koppeling
        └── JA -> exporteren naar Ads, koppeling testen, MP-bevestiging
                  voor livegang
```

Beslisregel: audience haalt de Ads-minimumgrootte niet, dan niet forceren met een
te brede definitie; liever een kleinere, scherpere audience laten liggen als
analyse-segment dan een waardeloze remarketinglijst live zetten.

### Audience-triggers: events afvuren bij segment-intrede

Een audience-trigger vuurt een event zodra een gebruiker de audience binnenkomt,
onafhankelijk van de sessie waarin dat gebeurt. Gebruik dit voor signalen die je
elders wilt activeren (bijvoorbeeld een flag richting een e-mail-flow of een
custom conversiesignaal richting Ads).

1. Definieer de audience eerst met de juiste scope en voorwaarden
2. Maak een audience-trigger event aan in GA4 Admin, Audiences, gekoppeld aan die
   audience
3. Test in DebugView dat het trigger-event afgaat bij een testprofiel dat aan de
   voorwaarden voldoet
4. Documenteer het trigger-event in het meetplan (analytics-tagging-plan) zodat
   het niet per ongeluk als los event wordt behandeld

### Predictive audiences: instap-eisen als categorie

GA4 stelt voor predictive audiences (purchase probability, churn probability,
revenue prediction) een aantal categorische eisen: voldoende positieve en
negatieve voorbeelden in de brondata over een aaneengesloten periode, en het
onderliggende event (purchase, of een zelf gedefinieerde churn-actie) moet
consistent en zonder gaten binnenkomen. GA4 toont zelf of een predictive audience
beschikbaar is voor de property; is die optie niet zichtbaar, dan is de databasis
nog niet toereikend. Verzin geen eigen minimum-aantallen: laat GA4 de
beschikbaarheid bepalen en behandel het als een ja/nee-poort, niet als een
drempel die je zelf instelt.

Beslisregel: predictive audience niet beschikbaar in de GA4-UI, dan eerst
datakwaliteit en event-consistentie fixen (via analytics-ga4-audit) in plaats van
te zoeken naar een workaround.

### Activatie-matrix: welk segment naar welk kanaal

| Segment-type | Primair kanaal | Skill die de activatie uitvoert |
|---|---|---|
| Remarketing, algemeen intent | Google Ads | Deze skill, koppeling en export |
| Churn risk, CLV-segmenten | E-mail/Klaviyo | retention-cdp-predictive |
| Klantenlijst, lookalike-seed | Meta | meta-ads-audiences-firstparty |
| Predictive purchase probability | Google Ads bidding-signaal | Deze skill, met analytics-ga4-audit als voorwaarde |

Beslisregel: eenzelfde segment naar meerdere kanalen tegelijk activeren zonder
afgestemde definitie geeft tegenstrijdige uitsluitingen; leg de brondefinitie 1
keer vast en laat elk kanaal daarvan exporteren, niet los opnieuw bouwen.

### Onderhoud: audiences verlopen en vervuilen

1. Kwartaal-review: elke audience langs grootte-trend, laatste sync, gekoppelde
   campagnes
2. Audience die 2 kwartalen op rij krimpt of geen gekoppelde campagne meer heeft:
   pauzeren of verwijderen na MP-bevestiging
3. Check overlap tussen audiences: te veel overlappende remarketinglijsten
   verdunnen elkaars biedsignaal
4. Herbevestig bij elke review de uitsluitingen (recente kopers, bestaande
   klanten) want productmix en aanbiedingen veranderen

## Anti-patterns

- Audience-definitie te breed maken om de Ads-minimumgrootte te halen: levert een
  waardeloze remarketinglijst op die niemand specifieks bereikt
- Session- of event-scope gebruiken voor een remarketinglijst die stabiel moet
  blijven: de lijst loopt binnen dagen leeg
- Geen uitsluiting van recente kopers instellen: budget lekt naar mensen die al
  net gekocht hebben
- Predictive audience forceren met een zelfbedachte drempel terwijl GA4 hem nog
  niet aanbiedt: de onderliggende data is simpelweg nog niet toereikend
- Audiences bouwen zonder kwartaal-review-ritme: de lijst met dode audiences
  groeit stil door
- Audience-koppeling naar Ads activeren zonder de consent-vereiste te checken
- Dezelfde audience los opnieuw bouwen per kanaal in plaats van 1 brondefinitie
  te delen
- Audience-trigger toevoegen zonder hem in het meetplan te documenteren: een
  onbekend event duikt later op als "mysterieuze" data

## Output-formaat

Audience-register en activatieplan (md in `<klantmap>/analytics/reports/`):

```markdown
# Audiences en activatie <klant> YYYY-MM
## Audience-register (naam, scope, membership duration, grootte, laatste sync)
## Activatie-matrix (segment, kanaal, skill die activeert, status)
## Predictive audiences (beschikbaar ja/nee, onderliggende voorwaarde)
## Kwartaal-bevindingen (leeglopend, overlappend, te pauzeren)
## Vervolgacties (eigenaar, deadline)
```

Plus bijgewerkte account-brief.md (audience-lijst, consent-status, eigenaar) en
history-log.md-regels per wijziging.

## Dependencies

- `ga4_tool` en GA4 UI (Admin, Audiences, DebugView)
- Gekoppeld Google Ads-account voor export en signals
- CMP-status voor consent op gepersonaliseerde advertenties
- `<klantmap>/analytics/` met account-brief.md en history-log.md
- `google_workspace_tool` voor klant-facing rapportage

## Integratie met andere skills

- **analytics-specialist**: routeert hierheen bij audience- en activatie-vragen
- **analytics-ga4-audit**: datakwaliteit-voorwaarde voor predictive audiences
- **analytics-consent-privacy**: consent-vereiste voor gepersonaliseerde
  advertenties, deze skill activeert pas na een akkoord daar
- **analytics-tagging-plan**: audience-trigger-events horen in het meetplan
- **google-ads-specialist**: ontvangt de audience en bepaalt de campagne-inzet
- **meta-ads-audiences-firstparty**: eigen skill voor de Meta-kant van
  audience-activatie, geen overlap met deze GA4-Ads-koppeling
- **retention-cdp-predictive**: eigen skill voor Klaviyo-segmenten en
  predictive-activatie in e-mail, deze skill blijft bij GA4 en Ads

## Tips

- Bouw altijd eerst de brondefinitie in GA4 en laat kanalen daarvan exporteren,
  in plaats van per kanaal een eigen versie te bouwen
- Een kleinere, scherpe audience presteert vaak beter dan een brede die net de
  minimumgrootte haalt: leg dat uit aan de klant voor je verbreedt
- Check de consent-status voor elke Ads-koppeling, niet alleen bij de eerste
  keer: een CMP-update kan de dekking stilletjes veranderen
- Predictive audiences zijn geen garantie: behandel de uitkomst als signaal,
  niet als absolute waarheid, en monitor de eerste weken extra
- Zet de kwartaal-review letterlijk in de agenda: audiences vervuilen zonder
  geluid, er komt geen foutmelding bij een leeglopende lijst
- Leg uitsluitingen (recente kopers, bestaande klanten) vast op 1 centrale plek
  en verwijs daarnaar, in plaats van ze per campagne opnieuw te typen
- Bespreek membership duration expliciet met de klant bij lange
  overwegingscycli: de default van 30 dagen is niet voor elke branche juist

*Eerste versie: juli 2026. Herzie bij nieuwe GA4-audience-features, Ads-signals-wijzigingen of consent-regelgeving.*
