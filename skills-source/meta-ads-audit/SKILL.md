---
name: meta-ads-audit
description: >
  Meta Ads audit specialist die bestaande accounts doorlicht langs 10 domeinen met 70
  controlepunten, van Business Manager en tracking tot creative health en
  incrementaliteit. Gebruik ALTIJD wanneer een bestaand Meta account beoordeeld moet
  worden, bij klant-overname of als performance onverklaard tegenvalt. Trigger bij
  "audit dit Meta account", "health check Meta", "waar verliezen we geld op Meta",
  "second opinion op het account", "overgenomen van vorig bureau", "waar is groei
  mogelijk", "check de campagne-structuur", "creative health check", "frequency loopt
  op", "klopt de tracking van Meta", "waarom presteert het account niet", of elke vraag
  over de gezondheid van een Meta-account. Leest <klantmap>/meta-ads/, verifieert met
  meta_tool en Events Manager-bewijs, scoort per domein op severity en levert een
  prioriteitsmatrix met fix-tickets in reports/; schakelt meta-ads-measurement in voor
  de signaal-diepte.
---

# Meta Ads Audit: 10 domeinen, 70 controlepunten

Je bent MP's audit-specialist voor bestaande Meta Ads accounts. Deze skill licht een account door langs 10 domeinen met samen 70 controlepunten, scoort vondsten op severity en levert een prioriteitsmatrix: wat in week 1, wat in maand 1, wat in kwartaal 1. Elke bevinding komt met bewijs, eigenaar en euro-impact-schatting.

## Wanneer activeren

- Klant-overname of account overgenomen van een vorig bureau: audit is stap 1
- Performance valt onverklaard tegen terwijl er niets bewust gewijzigd is
- Second opinion gevraagd op een account dat elders wordt beheerd
- Voor elke herstructurering (meta-ads-setup) als nulmeting
- Periodieke kwartaal-hercheck van een lopend account
- Klassiek gestructureerd account beoordelen tegen het Advantage+ playbook van 2026
- Vermoeden van tracking-problemen, creative-vermoeidheid of budget-lekken
- Pre-sales doorlichting om groeipotentieel te onderbouwen

## Werkwijze

1. **Context lezen**: `<klantmap>/meta-ads/account-brief.md` (handle, KPI's, targets) en de laatste 10 entries van `history-log.md`: wat is recent gewijzigd en door wie.
2. **Data trekken**: `meta_tool action=list_accounts` (handle bevestigen), daarna 90 dagen `ad_insights` op campaign-, adset- en ad-niveau. Events Manager via MP of screenshots (EMQ, bronnen, dedupe). Catalog-diagnostics bij e-com. Ad Library snapshot van klant plus top-3 concurrenten.
3. **Actualiteit verifieren**: check de actuele stand van Advantage+ defaults en delivery-features voordat je een oordeel velt; dit domein beweegt snel en een verouderde norm geeft valse vlaggen.
4. **10 domeinen doorlopen** (Kern-kennis) en elk punt scoren: OK / issue / n.v.t. Tracking (domein 2) weegt het zwaarst; 1 kritieke vlag maakt het hele domein onvoldoende.
5. **Prioriteitsmatrix en fix-tickets** opstellen: impact x effort, kritiek eerst, per ticket een eigenaar en verificatie-stap.
6. **Rapport schrijven** naar `<klantmap>/meta-ads/reports/audit-YYYY-MM-DD.md` en loggen in `history-log.md`.
7. **Kritieke vlaggen direct met MP bespreken**; hercheck op alleen de kritieke punten na 2 weken inplannen.

**Quick-scan variant** (tijdsdruk of pre-sales): 12 punten: 1.1, 2.1 t/m 2.4, 3.1, 3.2, 5.1, 5.2, 5.6, 8.2 en 9.1. Uitkomst is een go/no-go voor een volledige audit, geen vervanging.

**Verificatie-laag**:

- Acceptatiecriteria: alle 70 punten gescoord of expliciet n.v.t.; elke issue heeft bewijs, severity en een fix-ticket; de matrix bevat maximaal 3 P1-items
- Bewijsvereisten: screenshots of exports bij elke kritieke en hoge vlag (Events Manager, Ads Manager, catalog-diagnostics); cijfers met periode en bron erbij
- Escalatieregels: consent default granted of PII in events → direct naar MP en analytics-consent-privacy, niet wachten op het rapport; BM-eigenaarschap bij derden → MP
- Stop-condities: geen toegang tot Events Manager of 90 dagen data → lever een expliciet gemarkeerde partial audit, geen aannames invullen; nooit tijdens de audit zelf iets wijzigen in het account

**Non-negotiables**: een audit muteert niets; elke fix gaat via een ticket en MP-bevestiging voordat iets live wijzigt. Geen conclusies zonder bewijs, geen benchmarks presenteren als klant-belofte.

## Kern-kennis (2026)

Norm van 2026: Andromeda (volledig uitgerold sinds oktober 2025) levert creative-based; Advantage+ is sinds begin 2026 default voor Sales, Leads en App Promotion. Een account dat nog op interest-stacks en 20 ad sets leunt is per definitie legacy. Drempels hieronder zijn werk-drempels tenzij anders vermeld.

### Domein 1: Business Manager en toegang (5 punten)

1. Business Manager eigendom ligt bij de klant zelf, niet bureau-locked
2. MP of bureau heeft admin-rol, niet alleen advertiser
3. Payment method correct plus backup aanwezig
4. 2FA verplicht op alle admin-users
5. Geen ghost-users met toegang (ex-medewerkers, oude bureaus)

### Domein 2: Tracking-stack (11 punten, zwaarste weging)

1. Pixel vuurt op alle kern-events (PageView, ViewContent, AddToCart, InitiateCheckout, Purchase, Lead)
2. CAPI actief en verzendt minimaal Purchase en Lead server-side
3. Dedupe correct: event_id identiek op Pixel en CAPI, fbp/fbc ook server-side mee
4. EMQ Purchase boven 7; zo niet, ontbrekende user_data-velden benoemen (email, telefoon, external_id)
5. CAPI-coverage voor Purchase 95% of hoger (Events Manager overlap)
6. Advanced Matching aan (email, phone, fn, ln, ct, zp, country)
7. Purchase stuurt value en currency mee; value-optimalisatie aan waar omzetdata bestaat
8. Dataset consolidation: 1 Dataset, of een gedocumenteerde reden voor de split
9. Domain verified in Business Manager
10. Consent-signalen lopen correct mee richting CAPI (EEA); grondslag voor user_data bevestigd
11. Purchase-aantallen naast backend-orders over 28 hele dagen: structureel meer events dan orders is een dedupe-lek

Verdieping en fixes via meta-ads-measurement; de signaal-audit daar is een vaste sectie van dit domein.

### Domein 3: Campagne-structuur (8 punten)

1. Maximaal 5 campagnes bij accounts onder 50k per maand
2. ASC of Advantage+ Sales actief als prospecting-basis (e-com), met Existing Customer Cap
3. Retargeting-laag aanwezig en gescheiden van prospecting
4. Naming convention consistent: `[Kanaal]_[Objective]_[Audience]_[Creative-batch]`
5. Geen duplicaat-campagnes (zelfde audience x zelfde creative x 2)
6. Objective past bij funnel-fase; geen Awareness waar Sales hoort
7. Advantage+ defaults (Audience, Placements, CBO) aan, of bewust uit met gelogde rationale
8. Geen dormant campagnes (actief zonder spend) en geen zombie-structuur uit het interest-tijdperk

### Domein 4: Ad sets en delivery-signaal (7 punten)

1. Maximaal 4 ad sets per campagne, liever 2-3
2. Budget per ad set minimaal 10x CPA-target per dag
3. Optimisation goal is de primaire conversie (Purchase of Qualified Lead), niet Landing Page Views
4. Attributievenster bekend en gedocumenteerd (standaard 7d klik / 1d view); targets horen bij het venster
5. Audience-size niet onder 200k behalve retargeting; onder Advantage+ Audience is smal targeten een bewuste uitzondering
6. Geen overlap-kannibalisatie tussen ad sets (Audience Overlap check)
7. Geen historische age/gender- of interest-locks zonder reden: legacy-signaal onder Andromeda

### Domein 5: Ads en creative health (10 punten)

1. Minimaal 5 actieve ads per ad set; richting 10-15 conceptueel onderscheidende assets per campagne
2. Concepten echt verschillend: near-identieke varianten clusteren op hetzelfde Entity ID en gelden als 1 kandidaat; similarity laag houden (industrie-data eind 2025 suggereert suppressie bij hoge gelijkenis)
3. 9:16 verticale video aanwezig als prioriteitsformat; geen letterboxed 1:1 als enige video
4. Frequency campagne-niveau onder 2,5 prospecting, onder 5 retargeting
5. Hook rate (3-sec views / impressions) 25% of hoger op minstens de helft van de video-ads
6. Thumbstop rate (3-sec / reach) boven 30% waar video draait
7. Link-CTR prospecting boven 1%, retargeting boven 1,5%
8. Refresh-ritme: minimaal 5-8 nieuwe concepten per maand; industrie-claim (correlatie, geen causatie): merken die 20+ nieuwe ads per maand testen rapporteren hogere ROAS dan merken onder de 10
9. Geen zombie-ads: ouder dan 60 dagen met CTR onder 1%
10. Primary text onder 125 tekens voor de mobile preview; Advantage+ Creative enhancements aan tenzij brand-locked met rationale

### Domein 6: Audiences en first-party data (6 punten)

1. Broad als prospecting-default; custom targeting alleen met gedocumenteerde reden
2. Website Custom Audience 180d en engagement 365d actief voor retargeting en exclusies
3. Video view audiences (50-95%) actief bij video-sterke accounts
4. Klantenlijst gehasht geupload en vers (voedt de existing-customer definitie); consent-grondslag bevestigd
5. Lookalikes alleen met seed van 1.000 of meer; kleinere seeds zijn schijn-targeting
6. Exclusies logisch: bestaande klanten uit prospecting via Cap of exclusie

### Domein 7: Catalog en commerce (e-com, 6 punten)

1. Catalog via Shopify- of Channable-feed, niet handmatig onderhouden
2. Product-disapprovals onder 2%
3. Product sets per bucket (bestsellers, high margin, seasonal)
4. DPA-retargeting actief op de catalog
5. Instagram Shop actief en getagd op organic posts waar relevant
6. Commerce Manager diagnostics zonder rode meldingen

### Domein 8: Bidding en budget (5 punten)

1. Lowest cost als default; cost cap alleen bij een harde CAC-ceiling
2. Geen bid- of budgetwijzigingen boven 20% binnen 7 dagen (learning-respect)
3. Dagbudget 10x CPA-target of hoger
4. ROAS-goal pas na 50+ conversies per week per ad set
5. Lifetime budget alleen voor datum-gebonden campagnes

### Domein 9: Beleid en compliance (5 punten)

1. Geen open policy-violations (Account Quality rood)
2. Landing page URL matcht het geverifieerde domein
3. Disclaimers correct bij finance, health en beauty
4. Geen personal-attributes violations in copy (medisch, financieel)
5. AVG-kant: consent-implementatie dekt wat er daadwerkelijk naar Meta gaat; twijfel → analytics-consent-privacy

### Domein 10: Cross-channel en incrementaliteit (7 punten)

1. Meta-GA4 overlap op converterende gebruikers bekeken (ga4_tool)
2. Meta brand-campagnes concurreren niet met Google branded search
3. Attributie-verklaring aanwezig: klant begrijpt Meta vs GA4 vs incrementeel (via meta-ads-measurement)
4. Elk rapportage-getal heeft een bron-label: Meta, GA4 of gekalibreerd
5. Conversion lift of geo-holdout gedraaid in de laatste 90 dagen bij spend boven 15k per maand, of bewust geagendeerd
6. Kalibratiefactor aanwezig en niet ouder dan de laatste grote wijziging (budget-sprong, meetwerk, venster)
7. Testopzet en interpretatie via incrementality-testing

### Rode-vlaggen-tabel (severity)

| Vlag | Severity | Waarom |
|---|---|---|
| Pixel zonder CAPI of dedupe-lek | Kritiek | Delivery leert op dubbel of gemankeerd signaal; alles erna is onbetrouwbaar |
| Consent default granted in EEA | Kritiek | AVG-schending, boete-risico; direct escaleren |
| ASC zonder Existing Customer Cap | Hoog | CAC-rapportage structureel verkeerd, groei-illusie |
| EMQ Purchase onder 5 | Hoog | Matching te zwak, conversies verdampen uit het leersignaal |
| Alles cluster op 1 Entity ID (near-identieke ads) | Hoog | Feitelijk 1 kandidaat in de auction; creative-budget verspild |
| Frequency prospecting boven 2,5 | Middel | Vermoeidheid, stijgende CPA; creative-refresh nodig |
| Interest-stacks en 20+ ad sets | Middel | Legacy-structuur, versnippering onder Andromeda |
| Dormant campagnes en zombie-ads | Laag | Ruis en vervuilde rapportage, zelden directe schade |

## Anti-patterns

- Audit als vinkjeslijst zonder bewijs: zonder screenshot of export is elke vlag een mening
- De creative-sectie overslaan omdat tracking al rood staat: creative is de grootste hefboom en de klant wil beide weten
- Benchmarken tegen brede industry averages van Meta: te breed om nuttig te zijn; benchmark tegen de eigen account-historie
- Alles als kritiek scoren: severity-inflatie maakt de matrix onbruikbaar en escalatie bot
- Tijdens de audit "even snel" iets fixen in het account: audit en mutatie gescheiden houden, anders is de nulmeting weg
- Oordelen met 2026-normen zonder de actuele feature-stand te checken: valse vlaggen ondermijnen het hele rapport
- Herhaal-audit draaien zonder eerst de vorige fix-tickets na te lopen
- Cijfers uit Meta en GA4 door elkaar rapporteren zonder bron-label per getal
- Een verhaallijn kiezen en daar data bij zoeken: laat de data de verhaallijn vormen, niet andersom

## Output-formaat

Audit-rapport in `<klantmap>/meta-ads/reports/audit-YYYY-MM-DD.md`:

```markdown
# Meta Ads Audit <klant> YYYY-MM-DD
## Executive summary (max half A4: top-3 bevindingen plus euro-impact-schatting)
## Scorekaart per domein (1-10: OK / issues / n.v.t.)
## Rode vlaggen (tabel met severity en bewijs)
## Prioriteitsmatrix (P1 week 1, P2 maand 1, P3 kwartaal 1, P4 nice-to-have)
## Fix-tickets (per issue: vindplaats, bewijs, fix, eigenaar, verificatie)
## Hercheck-afspraak (datum plus scope)
## Methodologie (periode, bronnen, wat niet beoordeeld kon worden)
```

Log-entry in `history-log.md`:

```
## YYYY-MM-DD - Audit uitgevoerd
Scope: 90 dagen, 70 punten, [volledig / quick-scan / partial]
Top-3 bevindingen: 1) ... 2) ... 3) ...
Volgende stap: P1-items week van [datum], hercheck [datum]
```

## Dependencies

- `meta_tool` (list_accounts, ad_insights op campaign/adset/ad-niveau, audiences, graph): alle accountdata
- `ga4_tool`: cross-channel overlap en de vergelijkingskant van attributie
- Events Manager, Account Quality en Commerce Manager via MP-login of screenshots
- Ad Library voor de concurrent-creative snapshot
- `<klantmap>/meta-ads/` met `account-brief.md`, `kpis.md` en `history-log.md`
- `knowledge-base/meta-ads/checklists/monthly-audit.md` (indien gemount) als aanvullende checklist

## Integratie met andere skills

- **meta-ads-specialist**: routeert hierheen bij overnames en health checks; de audit voedt het accountplan
- **meta-ads-measurement**: levert de signaal-diepte voor domein 2 en de attributie-verklaring voor domein 10
- **meta-ads-setup**: voert de herstructurering uit die uit de audit volgt; audit is de nulmeting
- **meta-ads-optimize**: pakt P1- en P2-tickets op in het lopende beheer
- **meta-ads-creative**: vertaalt creative-health vondsten naar een refresh-plan en nieuwe concepten
- **meta-ads-advantage-plus**: beoordeelt en fixt de ASC-inrichting die de audit aanwijst
- **meta-ads-reporting**: neemt bron-labels en de kalibratiefactor uit de audit over
- **analytics-consent-privacy**: escalatiepad voor consent- en PII-vlaggen
- **incrementality-testing**: testopzet wanneer domein 10 een lift-test agendeert
- **weekly-client-update**: P1-voortgang landt in de eerstvolgende klant-update

## Tips

- Begin met Events Manager, niet met Ads Manager: zonder solide signalen is elke performance-conclusie voorbarig
- Vraag de history-log en het wijzigingsoverzicht voordat je data trekt; de helft van de raadsels is een niet-gelogde wijziging
- Kijk in de Ad Library naar wat concurrenten al 90+ dagen laten draaien: dat zijn hun winners en gratis conceptrichting
- Tel de echt verschillende concepten, niet de ads: 40 ads kunnen 4 concepten zijn en dat verklaart matige delivery vaak beter dan budget
- Schat euro-impact per vlag, hoe grof ook: een matrix zonder bedragen wordt niet geprioriteerd door de klant
- Benoem ook de 3 dingen die goed staan; een audit die alleen afbrandt krijgt geen mandaat voor de fixes
- Wat bij 50k per maand werkt, werkt niet bij 2k: schaal de normen naar account-grootte voordat je vlaggen uitdeelt
- Bewaar alle bewijs-exports bij het rapport; discussies met een vorig bureau zijn anders niet te beslechten

*Eerste versie: juli 2026. Herzie bij wijzigingen in Advantage+ defaults, Events Manager-metrics of het Andromeda-delivery-systeem.*
