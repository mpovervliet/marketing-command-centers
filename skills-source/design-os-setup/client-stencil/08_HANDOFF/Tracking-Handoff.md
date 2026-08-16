# Tracking-Handoff [KLANT]
Versie: 0.1 (stencil)
Status: TEMPLATE, invullen in fase 9

Doel: elk nieuw of gewijzigd event dat een DDR of experiment voedt, dev-ready specificeren.
Bron: `01_CONTEXT/Technical-Constraints.md` (vraag 6: hoe is tracking opgezet) bepaalt welke
route hieronder van toepassing is.

## Route A — met devteam en GTM/dataLayer

Per nieuw of gewijzigd event:

```
Event: [naam, conform bestaande taxonomie]
Trigger: [welke gebruikersactie]
Parameters: [welke velden, met type]
DataLayer-push: [structuur]
Voedt: [welk experiment of welke KPI uit het Data-Contract]
Consent-mechanisme: [conform rechtsregime P5]
```

## Route B — zonder devteam en zonder GTM/dataLayer-toegang

Een klant zonder devteam heeft vaak ook geen technische toegang tot een GTM-container of
dataLayer-implementatie. Dat is geen reden om tracking helemaal te laten vallen, maar wel
om de eis te verlagen naar wat een niet-technische bouwer of de klant zelf kan opzetten:

- Gebruik het native trackingpaneel van het platform (bijv. formulier-inzendingen in een
  WordPress-formulierplugin, of een simpele klik-tracking-plugin) in plaats van een
  custom dataLayer.
- Definieer per beslismoment 1 telbare actie die zonder ontwikkelaar te meten is (bijv.
  "formulier verzonden", "telefoonnummer geklikt") in plaats van een volledige
  event-taxonomie.
- Waar zelfs dat niet lukt: val terug op een periodieke handmatige telling (bijv.
  wekelijks het aantal binnengekomen aanvragen in de mailbox/CRM) als guardrail-vervanger.
  Dit is een bewuste degradatie van de meetkwaliteit; leg vast in
  `09_DECISION-LOG/Decision-Log.md` dat dit de gekozen route is en waarom, zodat een
  lezer later niet denkt dat hier een fout is gemaakt.
- Consent blijft verplicht ongeacht de route: ook een simpele contactformulier-plugin
  valt onder het consent-mechanisme van het geldende rechtsregime (P5).

## Voorbeeld (fictief, generiek — Route B)

```
Beslismoment: BM-2 (offerteformulier durven starten en afmaken)
Telbare actie: formulier "Offerteaanvraag" verzonden (native plugin-teller)
Meetfrequentie: wekelijks handmatig gecontroleerd tegen CRM-aantal binnengekomen leads
Consent: cookieless plugin, geen persoonsgegevens vóór expliciete toestemming
```

## Definition of Done

Elk beslismoment dat een guardrail of KPI nodig heeft, heeft een meetroute (A of B) die
past bij de technische mogelijkheden van [KLANT]; de gekozen route staat gemotiveerd in
het Decision-Log.
