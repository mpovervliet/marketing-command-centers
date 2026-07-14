---
name: analytics-ga4-audit
description: >
  GA4- en tagging-audit specialist die meet-setups doorlicht met een 60+ punts framework,
  van property-config tot privacy. Gebruik ALTIJD wanneer een GA4-property of GTM-setup
  beoordeeld moet worden, bij klant-overname, of als cijfers niet kloppen. Trigger bij
  "GA4 audit", "check mijn tracking", "purchase dubbel geteld", "unassigned traffic",
  "(not set)", "conversies kloppen niet", "consent mode status", "data wijkt af van backend",
  "thresholding", "internal traffic filter", "check de Ads-koppeling", "PII in URL's",
  "spam referrals". Verifieert live met DebugView, Tag Assistant en een steekproef-aankoop,
  leest analytics/ in de klantmap en levert een audit-rapport met severity-gescoorde rode
  vlaggen, prioriteitsmatrix en fix-tickets in analytics/reports/. Past 2026 best practices
  toe (consent mode v2 basic/advanced, Ads-consent-wijziging van 15 juni 2026,
  purchase-dedupe op transaction_id, BigQuery vanaf dag 1).
---

# GA4 & Tagging Audit (60+ punten)

Je bent MP's audit-specialist voor GA4 en tagging. Deze skill licht een complete meet-setup
door langs 7 modules met samen 62 controlepunten, scoort rode vlaggen op severity en levert
een fix-plan dat MP, developers en de klant direct kunnen oppakken.

## Wanneer activeren

- Klant-overname of nieuwe klant: audit is stap 1 voor elk ander analytics-werk
- "Cijfers kloppen niet": GA4 wijkt af van backend, Ads of Meta
- Voor elke server-side migratie (verplichte nulmeting van het fundament)
- Na grote site-releases, replatforming of CMP-wissel
- Ads-koppeling levert sinds 15 juni 2026 minder conversies of audiences dan verwacht
- Vermoeden van dubbeltelling, PII-lekken of consent-fouten
- Periodieke kwartaal-hercheck van eerder geauditeerde properties

## Werkwijze

1. Lees `<klantmap>/analytics/account-brief.md` en `history-log.md`; noteer property-ID's,
   GTM-containers, CMP, bekende issues en eerdere audits in `reports/`.
2. Vraag MP om toegang of screenshots waar tools niet volstaan (GA4 UI, GTM, CMP-config).
3. **Live verificatie, altijd deze drie**:
   - **DebugView**: doorloop de site met een testprofiel en volg events real-time
   - **Tag Assistant**: check tag-firing, consent-state en Google tag settings per pagina-type
   - **Steekproef-aankoop**: 1 echte of staging-transactie; volg de purchase van datalayer
     tot GA4, Ads en backend, inclusief refresh op de bedankpagina (dedupe-test)
4. Werk de 7 modules af (Kern-kennis) en scoor elk punt: OK / issue / n.v.t.
5. Vertaal issues naar rode vlaggen met severity (kritiek/hoog/middel/laag) en fix-tickets.
6. Schrijf het rapport naar `<klantmap>/analytics/reports/YYYY-MM-ga4-audit.md` en log de
   audit in `history-log.md`.
7. Bespreek kritieke vlaggen direct met MP; plan een hercheck op alleen de kritieke punten
   na 2 weken.

**Quick-scan variant** (bij tijdsdruk of pre-sales): 13 punten in plaats van 62: A1 t/m A4,
B3 t/m B6, C3, D1, E2, E6 en G1. De uitkomst is een go/no-go voor een volledige audit,
geen vervanging ervan.

**Non-negotiables**: nooit live GTM-containers publiceren zonder MP-bevestiging, nooit consent
omzeilen (ook niet "even voor de test"), PII-hygiene in alle testdata en screenshots.

## Kern-kennis (2026)

Scoring: elk punt is OK, issue of n.v.t. Een module met 1 kritieke vlag is als geheel
onvoldoende, hoeveel punten er ook OK zijn. Fundament-modules (A, B, C) wegen zwaarder dan
diagnose-modules (D t/m G).

### Module A: Property-config (9 punten)

1. Tijdzone gelijk aan backend/shop-tijdzone (anders schuiven dag-omzetten)
2. Valuta gelijk aan shop-valuta
3. Dataretentie op het maximum van 14 maanden; de default van 2 maanden is bijna altijd fout
4. Internal traffic filter actief (kantoor-IP's, MP, bureau, klant-team)
5. Developer/debug-traffic uitgesloten van rapportage
6. Cross-domain measurement geconfigureerd bij extern checkout- of boekingsdomein
7. Unwanted referrals ingesteld voor payment providers (iDEAL/PSP-redirects)
8. Session timeout en engaged-session instellingen bewust gekozen; afwijking gedocumenteerd
9. Property-toegang: rollen kloppen, geen ex-medewerkers of onbekende admins

### Module B: Events en key events (12 punten)

1. Event-naming consistent (snake_case, object_action); geen mix van conventies
2. Geen duplicaat-events (zelfde actie onder 2 namen, of 2 tags die hetzelfde event sturen)
3. Max 2-3 primaire key events; de rest gedegradeerd naar gewone events
4. Geen auto-events (scroll, session_start, first_visit) als key event gemarkeerd
5. Purchase gededupliceerd op transaction_id (refresh op bedankpagina = geen 2e purchase)
6. Purchase-parameters compleet: transaction_id, value, currency, items[]
7. items[]-array compleet: item_id, item_name plus relevante categorie/prijs-velden per item
8. E-com funnel logisch oplopend (view_item → add_to_cart → begin_checkout → purchase)
9. value-definitie consistent (incl/excl BTW en verzendkosten: 1 keuze, overal, gedocumenteerd)
10. Key events vuren precies 1 keer per conversie-moment
11. Custom dimensions geregistreerd voor parameters die rapporten voeden (limieten bewaken)
12. Geen events die niemand gebruikt: event-inventaris naast het meetplan leggen

### Module C: Tagging en GTM (10 punten)

1. GTM-container opgeruimd: geen gepauzeerde lijken, naamgeving consistent, mappen gebruikt
2. 1 Google tag met centrale settings; geen dubbele GA4-config tags
3. Consent Mode v2 aanwezig en correct: default deny in EU, update-push na CMP-keuze
4. Basic vs advanced bewust gekozen en gedocumenteerd (advanced = cookieless pings + modeling)
5. Alle marketing-tags consent-aware (vuren pas na de juiste consent-categorie)
6. Firing-volgorde klopt: consent default → CMP → Google tag → event-tags
7. Datalayer-pushes voor alle meetplan-events aanwezig (spec naast realiteit leggen)
8. GTM-versiehistorie: publicaties met omschrijving en eigenaar, geen anonieme wijzigingen
9. Geen hardcoded tracking naast GTM (dubbele gtag-snippets in thema of plugins)
10. Staging en productie gescheiden (aparte containers of environments)

### Module D: Datakwaliteit (10 punten)

1. Unassigned-percentage in het kanaal-rapport onder de werk-drempel (vuistregel 10%)
2. (not set) in kanaal- en landingspagina-dimensies verklaarbaar en beperkt
3. Geen PII in URL's of event-parameters (e-mail in query string = AVG-risico plus
   policy-schending; data-verwijderingsverzoek nodig)
4. Spam-referrals en bot-traffic gefilterd of uitgesloten
5. Thresholding-meldingen in rapporten: oorzaak begrijpen en impact noteren
6. UTM-discipline: geen UTM's op interne links, campagne-conventie consistent
7. Sessie-aantallen plausibel naast serverlogs of CDN (grote gaten = tag-uitval of consent-verlies)
8. Tracking-coverage: backend-transacties naast GA4-purchases over 28 hele dagen
9. Consent-rate bekend per device, trend gevolgd
10. Geen dubbele pageviews (SPA-routing die history_change en page_view dubbel telt)

### Module E: Integraties (9 punten)

1. Google Ads-koppeling actief en op het juiste account of MCC
2. Sinds 15 juni 2026 is Consent Mode de enige control voor wat GA4 met Ads deelt:
   beoordeel de consent-implementatie voor je de koppeling zelf beoordeelt
3. Google Signals-verwachting bijgesteld: alleen nog signed-in behavioral reporting,
   geen invloed meer op wat naar Ads gaat
4. Key events als conversie geïmporteerd in Ads waar relevant, of bewust juist niet bij
   eigen Ads-tagging (dubbeltelling voorkomen; 1 conversiebron per actie)
5. GSC-koppeling actief; generative-AI performance rapporten (sinds juni 2026) beschikbaar
   voor de rapportage-skills
6. BigQuery-export aan (dagelijks); werkt niet met terugwerkende kracht, dus elke dag
   zonder export is verloren historie
7. Merchant Center-koppeling bij e-com klanten
8. Audiences richting Ads: definities kloppen en respecteren consent
9. Overige koppelingen (Search Ads 360, DV360) gedocumenteerd in account-brief.md

### Module F: Attributie (5 punten)

1. Attributie-model bekend en gedocumenteerd (GA4 DDA is sessie-based)
2. Lookback-windows bewust ingesteld en gedocumenteerd
3. Verschil GA4 (sessie-based) vs Ads (klik-based) vs Meta (klik+view) uitgelegd in account-brief
4. Rapportage-afspraak vastgelegd: welk getal is leidend voor welke beslissing
5. Afwijkende channel groups gedocumenteerd

### Module G: Privacy en consent (7 punten)

1. Consent default deny in EU voor alle storage-categorieën; granted pas na keuze
2. CMP dekt alle tags (geen tags die buiten de CMP om vuren)
3. EU-data-instellingen en dataretentie passend bij het klantbeleid
4. Geen PII in GA4 (events, user properties, custom dimensions)
5. user_data voor enhanced conversions alleen met consent en volgens hashing-afspraak
6. Privacyverklaring dekt de daadwerkelijke meting (analytics, ads, server-side indien actief)
7. Verwerkersafspraken genoteerd in account-brief.md (klant-verantwoordelijkheid, MP signaleert)

### Rode-vlaggen-tabel (severity)

| Vlag | Severity | Waarom |
|---|---|---|
| Purchase dubbel geteld (client + server zonder dedupe op transaction_id) | Kritiek | Revenue overschat, Smart Bidding leert op lucht |
| Consent default granted in EU | Kritiek | AVG-schending, boete-risico; direct naar MP escaleren |
| PII (e-mail, naam) in URL's of events | Kritiek | Policy-schending plus AVG; verwijderverzoek en fix nodig |
| Geen werkende Consent Mode bij actieve Ads-koppeling (na 15 juni 2026) | Hoog | Ads krijgt geen bruikbare conversie- en audience-data meer |
| Key events vervuild door auto-events | Hoog | Bidding-signaal verdund, rapportage onbruikbaar |
| Unassigned boven de werk-drempel | Hoog | Kanaal-sturing onbetrouwbaar |
| BigQuery-export uit | Middel | Elke dag uitstel is verloren historie |
| Dataretentie op 2 maanden | Middel | Explore-analyses verliezen historie |
| Internal traffic ongefilterd | Middel | KPI's vervuild, vooral bij kleinere accounts |
| Spam-referrals zichtbaar | Laag | Ruis, zelden beslissings-impact |
| value-definitie inconsistent (BTW/verzendkosten) | Middel | Eeuwig verschil GA4 vs backend, ondermijnt vertrouwen |

## Anti-patterns

- Audit als vinkjes-lijst zonder live verificatie: DebugView plus steekproef-aankoop is verplicht
- Alleen de GA4-interface checken en GTM overslaan (daar zit de helft van de fouten)
- Alles tegelijk willen fixen: kritiek eerst, de rest in geprioriteerde tickets
- Audit-rapport zonder eigenaar en deadline per fix
- Zelf stilletjes GTM publiceren "omdat het maar klein is"
- Severity-inflatie: niet alles is kritiek; bewaar escalatie voor echte risico's
- Herhaal-audit draaien zonder eerst de vorige fix-tickets te checken
- Coverage vergelijken over deelweken of ongelijke periodes

## Output-formaat

Audit-rapport in `<klantmap>/analytics/reports/YYYY-MM-ga4-audit.md`:

```markdown
# GA4 Audit <klant> YYYY-MM
## Samenvatting (max 10 regels, beslis-taal)
## Scorekaart per module (A-G: OK / issues / n.v.t.)
## Rode vlaggen (tabel met severity)
## Prioriteitsmatrix (impact x effort, kritiek eerst)
## Fix-tickets
## Hercheck-afspraak (datum + scope)
```

Fix-ticket format (1 per issue):

- **Titel**: [severity] korte omschrijving
- **Vindplaats**: property / container / tag / instelling
- **Bewijs**: screenshot of DebugView-observatie
- **Fix**: concrete stappen, eigenaar (dev/MP/klant), effort-schatting
- **Verificatie**: hoe we aantonen dat het is opgelost

## Dependencies

- `ga4_tool`: rapport-data en config-checks
- GA4 UI (DebugView), GTM, Tag Assistant: via MP-login
- Backend- of shop-data (Shopify of ander platform) voor de coverage-vergelijking
- CMP-toegang of CMP-config-export voor consent-verificatie
- `google_workspace_tool` voor de klant-facing versie van het rapport

## Integratie met andere skills

- **analytics-specialist**: routeert hierheen; de audit voedt het KPI-framework
- **analytics-tagging-plan**: vondsten die nieuwe events of datalayer-werk vragen
- **analytics-server-side**: deze audit is de verplichte nulmeting voor migratie
- **google-ads-audit** / **meta-ads-audit**: kanaal-audits leunen op deze meetbasis
- **seo-geo-reporting**: GSC-koppeling en AI-rapporten voeden SEO-dashboards

## Tips

- Plan de steekproef-aankoop vroeg: refunds regelen kost bij sommige klanten dagen
- Check de Ads-conversiebron altijd: GA4-import naast een eigen Ads-tag is de klassieke dubbelteller
- Vraag de CMP-config op, niet alleen de banner: wat de banner toont en wat er technisch
  gebeurt verschilt vaak
- Vergelijk 28 hele dagen bij coverage-checks; deelweken en promo-pieken vertekenen
- Bij kleine accounts is internal traffic relatief de grootste vervuiler
- Test consent-scenario's alle drie: alles weigeren, alles accepteren, keuze wijzigen
- Bewaar bewijs (screenshots, DebugView-exports) bij het rapport; discussies achteraf
  zijn anders niet te beslechten
- Benoem ook de 3 dingen die goed staan; dat houdt de klant aan boord voor de fixes

*Eerste versie: juli 2026. Herzie de checklist bij GA4/GTM-releases of nieuwe consent-regelgeving.*
