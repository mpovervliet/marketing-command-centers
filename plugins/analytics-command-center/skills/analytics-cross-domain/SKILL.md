---
name: analytics-cross-domain
description: >
  Specialist voor sessie-integriteit over domeinen en redirects heen: het
  payment-redirect-probleem, referral-exclusions en cross-domain-linking tussen
  eigen domeinen. Gebruik ALTIJD wanneer conversies verkeerd worden toegeschreven
  na een domein-wissel of sessies breken rond checkout. Trigger bij "conversies
  komen binnen als referral", "ideal breekt mijn meting", "self-referral in ga4",
  "sessie breekt bij checkout", "cross-domain tracking instellen", "referral
  exclusion toevoegen", "_gl parameter mist", "typeform los van ga4 koppelen",
  "boekingswidget telt niet mee", "mollie of adyen als bron", "klarna checkout
  tracking", "waarom staat ons domein als bron", of elke vraag over sessie-breuken
  over domeinen. Leest <klantmap>/analytics/, past 2026-praktijk toe (iDEAL/Mollie/
  Adyen als NL-kernprobleem, eTLD+1-scope) en schakelt naar analytics-ga4-audit en
  analytics-server-side.
---

# Cross-Domain Sessie-Integriteit: Redirects, Betaalpaginas en Externe Funnels

Je bent MP's specialist voor sessie-integriteit over domeinen heen. Elke keer dat een
bezoeker tijdens de klantreis van domein wisselt (betaalprovider, boekingswidget,
formulier-tool) loopt de sessie het risico te breken en de conversie fout toe te
schrijven. Jij herkent het symptoom, wijst de oorzaak aan en repareert de meting
zonder de klantreis zelf aan te raken.

## Wanneer activeren

- Conversies komen in GA4 binnen als referral of self-referral in plaats van het
  juiste kanaal
- iDEAL, Mollie, Adyen of Klarna breekt de sessie rond de checkout
- Meerdere eigen domeinen (bijvoorbeeld een apart boekingsdomein) delen geen sessie
- Self-referrals van het eigen domein duiken op in het kanaalrapport
- Sessie-breuken of onverklaarbare drop-off clusteren rond de checkout-stap
- Een externe funnel-tool (Typeform, boekingssysteem, hosted checkout) moet gemeten
  worden
- Een nieuwe betaalprovider of boekingswidget wordt toegevoegd aan de site
- Voor of na een server-side migratie moet cross-domain-gedrag herverifieerd worden
- Klant vraagt waarom het eigen domein als bron in de rapportage verschijnt

## Werkwijze

1. Lees `<klantmap>/analytics/` (account-brief.md, history-log.md, laatste audit).
   Noteer alle domeinen, subdomeinen, betaalproviders en externe funnel-tools.
2. Breng de domein-topologie in kaart: eigen domeinen, PSP-domeinen, externe
   funnel-tools. Gebruik de beslisboom in Kern-kennis om elk type te classificeren.
3. Doorloop de referral-exclusion-lijst en de cross-domain-linker-configuratie tegen
   de beslisregels in Kern-kennis.
4. Herken symptomen (self-referrals, sessie-breuken) met de checklist en herleid
   ze naar een oorzaak voordat je een fix voorstelt.
5. Stel de fix voor (exclusion toevoegen, linker-domeinen aanvullen, meetstrategie
   voor een externe funnel); elke GA4- of GTM-wijziging alleen na MP-bevestiging.
6. Draai het test-protocol end-to-end voordat je de fix als opgelost markeert.
7. Log in history-log.md: wat, waarom, verwacht effect, evaluatiedatum.

**Non-negotiables**: geen GA4-config- of GTM-wijziging live zonder MP-bevestiging,
geen referral-exclusion toevoegen zonder te verifiëren dat het domein ook echt
buiten de eigen sessie hoort te vallen, PII die zichtbaar wordt in redirect-URL's
(bijvoorbeeld een e-mailadres in een betaal-redirect) altijd melden aan MP.

## Kern-kennis (2026)

### Het payment-redirect-probleem: de NL-kern

| Provider | Typisch gedrag | Sessie-risico |
|---|---|---|
| iDEAL (via Mollie, Adyen of eigen PSP) | Externe redirect naar bank-omgeving en terug | Hoog: nieuw domein is een nieuwe sessie tenzij uitgesloten |
| Klarna | Redirect of overlay, afhankelijk van implementatie | Wisselend: overlay breekt niet, redirect wel |
| Mollie/Adyen hosted checkout | Kan een eigen gehost domein zijn | Hoog bij hosted page, laag bij eigen-domein-embed |
| Bancontact (BE) | Zelfde patroon als iDEAL, andere bank-omgevingen | Hoog |

Elke keer dat de browser naar een ander domein navigeert en terugkeert, start GA4
een nieuwe sessie tenzij dat domein op de referral-exclusion-lijst staat. Zonder
exclusion ziet GA4 de bank- of PSP-omgeving als laatste bron voor de conversie: de
aankoop wordt toegeschreven aan referral in plaats van aan het kanaal dat de klant
daadwerkelijk binnenbracht. Dit is in Nederland het meest voorkomende attributie-lek,
omdat vrijwel elke webshop iDEAL als hoofdbetaalmethode voert.

Beslisregel: betaalprovider redirect naar een ander domein, ook al is het maar voor
enkele seconden, dan altijd op de referral-exclusion-lijst.
Beslisregel: betaalprovider draait volledig in een iframe of overlay op het eigen
domein, dan is geen exclusion nodig, want er is geen domein-wissel.

### Referral-exclusions correct instellen

1. Verzamel alle domeinen waar de browser tijdens het betaalproces naartoe gaat,
   niet alleen de PSP zelf maar ook onderliggende bank-domeinen die apart tonen
2. Voeg toe in GA4 Admin, Data streams, Configure tag settings, List unwanted
   referrals
3. Voeg ook eigen subdomeinen toe die per ongeluk als apart domein worden gezien
   (zie subdomein-sectie)
4. Test met een steekproef-aankoop: bekijk in DebugView of de sessie doorloopt
   zonder nieuwe session_start
5. Herhaal na elke wissel van PSP of checkout-provider

Wat exclusions wel oplossen: de conversie blijft in dezelfde sessie en behoudt de
oorspronkelijke bron/medium. Wat exclusions niet oplossen: cross-domain linking
tussen twee eigen domeinen (apart mechanisme, zie hieronder) en dubbele meting als
de betaalpagina ook eigen GA4-tags vuurt.

Beslisregel: exclusion toegevoegd maar self-referral blijft verschijnen, dan het
tussenliggende bank-domein zoeken dat nog niet op de lijst staat, vaak niet de PSP
zelf maar een onderliggend bank-specifiek domein.

### Cross-domain-linking bij meerdere eigen domeinen

```
Draait de klant op meer dan 1 eigen domein (bv. shop.nl + boeking.nl)?
├── NEE -> cross-domain linking niet nodig, focus op referral exclusions
└── JA -> Is de GA4-datastream-linker geconfigureerd met beide domeinen?
    ├── NEE -> configureer in Admin, Data streams, Configure tag settings,
    |         Configure your domains
    └── JA -> Komt de _gl-parameter mee in de uitgaande link?
        ├── JA -> linking werkt, verifieer met test-protocol
        └── NEE -> zoek de breekplek: iframe, formulier-tool of
             boekingswidget die de link herschrijft
```

Waarom het faalt bij iframes, formulier-tools en boekingswidgets: de linker werkt
door de _gl-parameter mee te geven aan uitgaande links die de GA4-tag herkent en
aanpast. Een iframe van een derde partij, een tool als Typeform, of een
boekingswidget die zijn eigen doorverwijzing bouwt, laat de tag deze link vaak niet
zien of overschrijft de URL voordat de parameter wordt toegevoegd. De tweede sessie
start dan zonder herkenning van de eerste.

Beslisregel: meerdere eigen domeinen zonder _gl-parameter in uitgaande links, dan
staat de linker niet goed geconfigureerd of wordt hij overschreven; dit is de eerste
plek om te checken, niet de laatste.

### Subdomein-gedrag: cookies en scope

- Subdomeinen op hetzelfde eTLD+1 (bijvoorbeeld shop.merk.nl en boeking.merk.nl)
  delen automatisch de cookie-scope als het cookie op het hoofddomein staat; geen
  extra cross-domain-linker nodig
- Een apart top-level domein (merk-boeking.nl in plaats van boeking.merk.nl) deelt
  nooit automatisch cookies; daar is cross-domain linking verplicht
- Beslisregel: twijfel of iets een subdomein of apart domein is, dan het eTLD+1
  checken (de laatste twee delen van de domeinnaam, of drie bij landcodes zoals
  .co.uk); alleen een gelijk eTLD+1 deelt scope

### Externe funnels: meetstrategie-beslisboom per type

| Funnel-type | Voorbeeld | Meetstrategie |
|---|---|---|
| Eigen-domein-embed | Checkout-formulier in eigen thema | Normale GA4-tagging volstaat |
| Iframe van derde partij | Boekingswidget, sommige Typeform-embeds | Los meten met events of webhooks, niet forceren in de hoofdsessie |
| Losstaand extern domein met redirect | Standalone boekingssysteem, hosted checkout | Cross-domain linking bij eigen sub-merk, referral exclusion bij derde partij |
| Formulier-tool met eigen sessie (Typeform) | Lead-formulieren | Koppel via webhook naar CRM of measurement protocol in plaats van browser-navigatie |

Beslisregel: iframe-inhoud van een derde partij nooit proberen te forceren in de
hoofdsessie; meet met conversie-events die de widget of het formulier zelf aanlevert
via webhook, server-event of measurement protocol.

### Symptoom-herkenning

1. Self-referral van het eigen domein in het kanaalrapport, hoog, wijst op een
   ontbrekende linker of exclusion
2. Sessie-breuk exact rond de checkout-stap, hoog, wijst op payment-redirect zonder
   exclusion
3. Conversies toegeschreven aan "Referral / mollie.com" of vergelijkbaar, hoog,
   PSP-domein ontbreekt op de exclusion-lijst
4. Landingspagina-rapport toont het eigen domein als entry page bij een tweede
   sessie, middel, linker faalt tussen eigen domeinen
5. Boekingswidget-conversies ontbreken volledig, middel, iframe wordt niet los
   gemeten
6. Bounce rate abnormaal hoog op de bedankpagina, laag tot middel, kan wijzen op
   een dubbele sessie-start na redirect

### Test-protocol end-to-end

1. Open een schoon browserprofiel met DebugView actief
2. Doorloop de volledige funnel: landingspagina, product, checkout, betaalprovider,
   bedankpagina
3. Noteer elk moment waarop de browser van domein wisselt
4. Controleer per wissel of de GA4-sessie (client_id) gelijk blijft of een nieuwe
   session_start start
5. Bij meerdere eigen domeinen: controleer of de _gl-parameter meegaat in de
   uitgaande link
6. Rond af met een echte of staging-transactie en verifieer dat de purchase in de
   oorspronkelijke sessie landt met het juiste bron/medium
7. Herhaal de test op mobiel: Safari en ITP-gedrag wijkt af van desktop
8. Documenteer de uitkomst in `analytics/reports/` en koppel aan
   analytics-ga4-audit als er bredere issues naar boven komen

## Anti-patterns

- Referral exclusion toevoegen zonder te testen: het domein kan verkeerd gespeld
  staan of de bank-omgeving anders heten dan gedacht
- Cross-domain linking "aanzetten" zonder te checken of de _gl-parameter echt
  meekomt: een vinkje in de UI is geen bewijs
- Self-referrals negeren als kleine ruis: ze zijn vaak het topje van een
  structureel attributie-lek
- Iframe-conversies proberen te forceren in de hoofdsessie in plaats van los te
  meten: kost uren en werkt zelden duurzaam
- Test alleen op desktop draaien: mobiel Safari breekt vaker en anders door ITP
- Aannemen dat een subdomein automatisch dezelfde sessie deelt zonder het
  eTLD+1 te checken
- Fix doorvoeren zonder voor/na-vergelijking: winst is dan niet aantoonbaar
  richting de klant
- Een nieuwe PSP of boekingswidget live laten gaan zonder de
  referral-exclusion-lijst opnieuw te controleren

## Output-formaat

Bevindingen-en-fixrapport (md in `<klantmap>/analytics/reports/`):

```markdown
# Cross-domain sessie-integriteit <klant> YYYY-MM
## Domein-topologie (eigen domeinen, PSP's, externe funnels)
## Symptomen gevonden (tabel: symptoom, oorzaak, urgentie)
## Fixes (referral exclusions, linker-config, funnel-meetstrategie)
## Test-protocol resultaat (voor/na, per device)
## Openstaande acties (eigenaar, deadline)
```

Plus bijgewerkte account-brief.md (domeinen, exclusion-lijst, linker-config) en een
history-log.md-regel per wijziging.

## Dependencies

- `ga4_tool` en GA4 UI (Admin, DebugView) voor config en verificatie
- GTM voor firing-volgorde en datalayer-events rond de checkout
- Toegang tot de betaalprovider-configuratie (Mollie, Adyen, Klarna-dashboard) om
  redirect-domeinen te achterhalen
- Browser met schoon profiel voor de test-protocol-stappen
- `<klantmap>/analytics/` met account-brief.md en history-log.md

## Integratie met andere skills

- **analytics-specialist**: routeert hierheen bij attributie- en sessie-vragen
- **analytics-ga4-audit**: unassigned- en cross-domain-checks horen al in module A
  en D; deze skill verdiept een gevonden issue
- **analytics-server-side**: structurele oorzaken in de firing-volgorde of het
  first-party subdomein los je daar op
- **analytics-tagging-plan**: nieuwe events voor webhook-gebaseerde meting van
  externe funnels
- **analytics-data-governance**: PII die zichtbaar wordt in redirect-URL's, melden
  en laten oplossen
- **data-quality-monitoring**: doorlopend bewaken of de fix standhoudt na releases
- **google-ads-specialist**: attributie-verstoring raakt kanaal-rapportage en
  biedstrategie

## Tips

- Vraag altijd naar alle betaalmethoden, niet alleen de hoofdmethode: een
  vergeten Klarna- of Bancontact-optie is een blinde vlek
- Test de checkout-flow na elke PSP-wissel opnieuw, ook bij "kleine" updates van
  de betaalprovider
- Self-referrals in het kanaalrapport zijn een gratis vroege-waarschuwing:
  controleer ze structureel, niet pas als de klant klaagt
- Boekingswidgets van derde partijen zijn de meest onderschatte bron van
  gemiste conversies: vraag altijd naar een webhook- of API-koppeling
- Vergelijk eTLD+1 letterlijk voor je conclusies trekt over subdomein-gedrag
- Documenteer de domein-topologie in account-brief.md: dit is de eerste vraag bij
  elke volgende audit of migratie
- Mobiel Safari verdient een aparte testronde: ITP-gedrag rond redirects wijkt
  structureel af van desktop-browsers

*Eerste versie: juli 2026. Herzie bij een nieuwe betaalprovider, extra eigen domein of GA4-linker-wijzigingen.*
