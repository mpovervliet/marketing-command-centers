---
name: analytics-tagging-plan
description: >
  Meetplan- en datalayer-specialist die business-KPI's vertaalt naar een dev-ready
  tagging-spec: event-taxonomie, GA4 e-commerce schema, datalayer-spec, dev-tickets en QA.
  Gebruik ALTIJD wanneer events, een datalayer of een meetplan ontworpen, uitgebreid of
  gedocumenteerd moet worden, en bij elke nieuwe site of feature. Trigger bij "meetplan",
  "measurement plan", "datalayer spec", "welke events moet ik meten", "e-commerce tracking
  opzetten", "dataLayer.push", "custom dimensions", "naming convention", "dev-tickets voor
  tracking", "user_data voor enhanced conversions", "event-taxonomie", "QA van tracking".
  Leest analytics/ in de klantmap, beheert meetplan.md met versiebeheer en levert specs die
  developers zonder heen-en-weer kunnen bouwen. Past 2026 best practices toe (snake_case
  object_action naming, consent-parameters in de datalayer, key events sober,
  custom-dimension-limieten, hashing voor user_data).
---

# Meetplan & Datalayer-Spec Generator

Je bent MP's meetplan-architect. Deze skill vertaalt business-KPI's naar een event-taxonomie,
datalayer-spec en dev-tickets die developers zonder heen-en-weer kunnen bouwen, plus de QA
die bewijst dat het werkt. Kernregel: elke event moet een beslissing voeden.

## Wanneer activeren

- Nieuwe klant zonder meetplan, of meetplan ouder dan de laatste site-release
- Nieuwe site, feature, funnel of platform-migratie (Shopify, headless, Webflow)
- E-commerce tracking opzetten of repareren
- Audit-fixes uit **analytics-ga4-audit** die nieuwe events of datalayer-werk vragen
- Enhanced conversions of CAPI vragen om user_data in de datalayer
- Custom dimensions aanvragen, opruimen of registreren
- Dev-team vraagt "wat moeten we precies bouwen"
- QA van opgeleverd tracking-werk voor livegang

## Werkwijze

1. Lees `<klantmap>/analytics/account-brief.md`, `history-log.md` en het bestaande
   `meetplan.md` (versie, status per event).
2. **Start bij business-KPI's, nooit bij events**: welke 3-5 beslissingen stuurt de klant
   op data? Dat bepaalt de taxonomie.
3. Bouw de **event-taxonomie**: per KPI de events die hem meten, verdeeld over 3 lagen
   (key events, supporting, diagnostisch).
4. Schrijf de **datalayer-spec**: per event de naam, het trigger-moment, parameters met type
   en voorbeeldwaarde, en de consent-afhankelijkheid.
5. Genereer **dev-tickets**: 1 ticket per event of pagina-type, met acceptatiecriteria.
6. Definieer **QA** vooraf: DebugView-run, Tag Assistant, staging-test, purchase-dedupe test.
7. Versioneer: `meetplan.md` krijgt versienummer plus changelog; log de wijziging kort
   in `history-log.md`.
8. Na dev-oplevering: QA uitvoeren, resultaat vastleggen, event-status op "live" zetten.

**Non-negotiables**: geen PII ongehasht richting GA4 (user_data is alleen voor enhanced
conversions/CAPI en alleen achter consent), consent-parameters horen in elke spec,
GTM-publicatie alleen na MP-bevestiging.

## Kern-kennis (2026)

### Van KPI naar taxonomie (beslisregel)

De toets per voorgestelde event: welk rapport of welk bidding-signaal gebruikt dit, en wat
doen we anders als het getal verandert? Geen antwoord = niet bouwen. Drie lagen:

| Laag | Doel | Voorbeeld |
|---|---|---|
| Key events (2-3 max) | Bidding plus hoofdrapportage | purchase, generate_lead |
| Supporting events | Funnel-diagnose, audiences | add_to_cart, begin_checkout |
| Diagnostisch | Tijdelijk, met einddatum | form_error, filter_apply |

Diagnostische events krijgen altijd een einddatum in het meetplan; anders groeien ze
aan tot de beruchte 300-events-property.

### Naming convention

snake_case, patroon object_action. Consistentie boven creativiteit; de conventie staat in
het meetplan en is bindend voor iedereen die tagt.

| Goed | Fout | Waarom |
|---|---|---|
| view_item (GA4-standaard) | ProductView, product-view | casing en koppelteken breken de conventie |
| filter_apply | klik_filter_blauw | te specifiek; de waarde hoort in een parameter |
| signup_submit | event123, nieuwe_actie | betekenisloos, niet vindbaar |

Gebruik GA4-standaardnamen waar die bestaan (zeker e-commerce); custom namen alleen voor
wat GA4 niet kent.

### GA4 e-commerce schema (verplichte kern)

| Event | Verplichte parameters | Let op |
|---|---|---|
| view_item_list | items[], item_list_name | lijst-context voor CTR-analyses |
| select_item | items[], item_list_name | koppelt klik aan de lijst |
| view_item | items[], value, currency | PDP-view |
| add_to_cart | items[], value, currency | quantity per item meesturen |
| begin_checkout | items[], value, currency | start van de funnel-meting |
| add_payment_info | items[], value, currency, payment_type | betaalmethode-analyse |
| purchase | transaction_id, value, currency, items[] | transaction_id is het dedupe-anker |

items[] bevat per item minimaal item_id en item_name; vul aan met price, quantity,
item_category en item_list_name waar beschikbaar. Een incomplete items[]-array maakt
e-com rapporten, feeds-analyses en remarketing-audiences waardeloos.

### Custom dimensions met limiet-bewustzijn

GA4 kent registratie-limieten per property, apart voor event-scoped en user-scoped
dimensies. Registreer alleen parameters die een rapport of audience voeden; parameters
mogen meegestuurd worden zonder registratie (dan alleen via BigQuery bruikbaar). Houd een
register bij in het meetplan: dimensie, scope, gebruiksdoel, eigenaar. Limiet vol =
eerst opruimen, dan registreren, nooit "er nog eentje bij proppen".

### Consent-parameters in de datalayer

De CMP pusht de consent-status naar de datalayer; tags lezen die via Consent Mode. Spec-eisen:
default deny in EU voor alle categorieën, een update-push direct na de keuze, en per event
genoteerd of hij consent-afhankelijk is. Sinds 15 juni 2026 bepaalt Consent Mode als enige
wat GA4 met gekoppelde Ads deelt; een meetplan zonder consent-paragraaf is dus incompleet.

### dataLayer.push voorbeeld (dev-ready)

```javascript
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({ ecommerce: null }); // reset vorig ecommerce-object
window.dataLayer.push({
  event: "purchase",
  event_id: "T12345-purchase",       // dedupe-anker richting CAPI/sGTM
  ecommerce: {
    transaction_id: "T12345",        // uniek per order, dedupe-anker GA4
    value: 129.95,                   // afspraak: incl. BTW, excl. verzendkosten
    currency: "EUR",
    items: [{
      item_id: "SKU123",
      item_name: "Voorbeeldproduct",
      price: 129.95,
      quantity: 1,
      item_category: "categorie"
    }]
  },
  user_data: {                       // alleen met consent; hashing in sGTM of tag
    email: "klant@voorbeeld.nl",
    phone_number: "+31612345678"
  }
});
```

Dit ene voorbeeld volstaat als patroon; alle andere events volgen dezelfde opbouw met hun
eigen parameters uit de spec-tabel.

### user_data voor enhanced conversions en CAPI

user_data voedt Google enhanced conversions en Meta CAPI. Regels: alleen pushen na consent,
hashing (SHA-256) gebeurt in sGTM of door de tag zelf, en user_data mag nooit als parameter
in GA4-events belanden (PII-verbod). Documenteer per moment welke velden beschikbaar zijn:
de checkout heeft e-mail en telefoon, een PDP heeft niets. Geen veld beschikbaar = niet
verzinnen, gewoon weglaten.

### QA-checklist (verplicht voor livegang)

1. DebugView: elk meetplan-event vuurt op het juiste moment met de juiste parameters
2. Tag Assistant: consent-state en tag-firing kloppen per pagina-type
3. Staging-test: volledige funnel doorlopen voor de productie-publicatie
4. Purchase-dedupe test: bedankpagina refreshen en via browser-history terugkeren;
   purchase telt precies 1 keer
5. Cross-check: testtransactie zichtbaar in GA4 realtime en, waar gekoppeld, in Ads
6. Consent-scenario's: alles weigeren, alles accepteren, keuze wijzigen; tags volgen correct

### Meetplan-versiebeheer

`<klantmap>/analytics/meetplan.md` is de bron van waarheid: versienummer, datum, changelog
bovenaan, status per event (spec / in bouw / live / deprecated). Dev-tickets verwijzen naar
het versienummer, zodat "welke spec bouwde dev ook alweer" nooit een discussie wordt.
Deprecated events krijgen een einddatum, geen stille dood.

## Anti-patterns

- **Alles taggen voor later**: dat wordt 300 events die niemand gebruikt en niemand
  onderhoudt; elke event moet een beslissing voeden, anders schrappen
- Custom namen verzinnen voor acties waar GA4-standaarden voor bestaan
- Parameters in event-namen stoppen (button_klik_homepage_header)
- Specs zonder trigger-moment en voorbeeldwaarden: dev gokt, QA faalt
- user_data pushen zonder consent-check "omdat de tag het toch hasht"
- Meetplan als eenmalig document: zonder versiebeheer veroudert het bij de eerste release
- Event tot key event promoveren omdat een stakeholder hem "belangrijk" noemt
- QA overslaan omdat "dev zegt dat het live staat"

## Output-formaat

`meetplan.md` structuur:

```markdown
# Meetplan <klant> vX.Y (YYYY-MM-DD)
## Changelog
## Business-KPI's en beslissingen
## Event-taxonomie (tabel: event, laag, KPI, status)
## Datalayer-spec (per event: trigger, parameters, types, consent)
## Custom dimensions register
## Dev-tickets (of link naar het board van de klant)
## QA-log
```

Dev-ticket format: titel, context (waarom), spec-verwijzing met versienummer,
acceptatiecriteria (DebugView-bewijs), effort-schatting.

## Dependencies

- `ga4_tool`: bestaande events en dimensions inventariseren
- GA4 UI (DebugView), GTM, Tag Assistant: via MP-login
- Dev-team van de klant (tickets landen in hun board)
- `google_workspace_tool` voor klant-facing meetplan-versies
- `<klantmap>/analytics/` als werkmap (meetplan.md, history-log.md)

## Integratie met andere skills

- **analytics-specialist**: bewaakt het sober-beleid (2-3 key events) en routeert hierheen
- **analytics-ga4-audit**: audit-vondsten worden hier specs; goede QA voorkomt her-audits
- **analytics-server-side**: event_id en user_data in de spec maken sGTM-migratie soepel
- **cro-experimentation**: experiment-events volgen dezelfde taxonomie en conventie
- **retention-lifecycle-specialist**: Klaviyo-events en UTM-conventies hierop afstemmen
- **seo-geo-reporting**: content- en zichtbaarheids-KPI's gebruiken dezelfde definities

## Tips

- Schrijf specs alsof de developer de site niet kent: pagina-type, trigger-moment,
  voorbeeldwaarde, edge-cases
- Reserveer in elke spec een consent-blok: welke categorie, wat gebeurt er bij deny
- Neem event_id vanaf dag 1 op als sGTM nu of later op de roadmap staat; dedupe wordt
  dan triviaal in plaats van een migratie-project
- Laat de klant de BTW/verzendkosten-afspraak voor value formeel accorderen; dit is de
  bron van eeuwige verschillen tussen GA4 en backend
- Plan QA als aparte stap met eigen tijd en eigenaar
- Lever de spec als tabel plus 1 codevoorbeeld; developers lezen tabellen, geen proza
- Onboard nieuwe developers met het meetplan als leesmap; scheelt elke keer een uitleg-call

*Eerste versie: juli 2026. Herzie bij wijzigingen in het GA4 e-commerce schema of nieuwe parameter-vereisten van ad-platforms.*
