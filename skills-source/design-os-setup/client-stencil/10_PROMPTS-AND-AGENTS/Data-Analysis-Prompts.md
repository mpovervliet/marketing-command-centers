# Data-Analysis-Prompts
Versie: 0.2 (stencil)
Status: TEMPLATE, invullen bij intake

Herbruikbare queries voor de baseline en diagnose. De metric-namen hangen af van de
meet-stack (P2) en het conversie-model (P1) uit `01_CONTEXT/Client-Profile.md`; de
**vragen** zijn voor elke klant hetzelfde.

Vul eerst de identifiers in: [MEETBRON_ID], [ZOEKBRON_ID], [ADVERTENTIEBRON_ID], [PROFILE].

## Vaste parameters van deze klant

| Veld | Waarde |
|------|--------|
| Gedragsbron plus identifier | |
| Zoekbron plus identifier | |
| Advertentiebron plus identifier | |
| Valuta van de advertentie- en omzetdata | |
| Standaardperiode | 90 dagen, tenzij anders vastgelegd in het Data-Contract |
| Funnel-metrics (uit het Data-Contract) | |

## Gedragsdata: de vijf vaste vragen

Vervang [FUNNEL-METRICS] door de metric-namen uit het Data-Contract van deze klant.

- **Device-split plus funnel:** dimensie device, metrics `sessies, [FUNNEL-METRICS], [waarde-metric]`, standaardperiode.
- **Kanaal:** dimensie kanaalgroepering, zelfde metrics.
- **Nieuw tegenover terugkerend:** dimensie nieuw/terugkerend, zelfde metrics.
- **Top instappagina's:** dimensie landingspagina, zelfde metrics, gesorteerd op sessies aflopend.
- **Event-taxonomie (QA):** dimensie event-naam, metrics event-aantal en key events. Bij grote output eerst naar een bestand exporteren en daar parsen.

Twee regels die voor elke stack gelden:

1. Draai de event-taxonomie **voordat** je de funnel trekt. Tien minuten QA vooraf voorkomt een middag analyses op een ruis-event.
2. Verifieer per klant of het intentie-event echte intentie meet of interactie-ruis. Een event dat vaker vuurt dan er sessies zijn, meet interactie. Degradeer het dan in het Data-Contract en gebruik het dichtstbijzijnde betrouwbare intentie-event als funnel-anker.

## Zoekdata

- **Intentie:** zoekopdrachten, top 30 op volume.
- **Device:** dezelfde data uitgesplitst naar device.
- **Pagina's:** dezelfde data uitgesplitst naar pagina.
- Trek de periode gelijk met de gedragsdata om mismatch te vermijden.

Is er geen zoekconsole beschikbaar voor de dominante zoekmachine in deze markt, noteer dat dan als beperking in het Data-Contract in plaats van de sectie leeg te laten.

## Advertentiedata

- **Campagne-performance:** campagnenaam, kanaaltype, klikken, kosten, conversies, conversiewaarde, over de standaardperiode, gesorteerd op kosten aflopend.
- Gebruik expliciete begin- en einddatums in plaats van relatieve periode-literals; die worden per platform anders geïnterpreteerd.
- Kosten worden door sommige platforms in micro-eenheden geleverd: deel dan door 1.000.000. **Haal de accountvaluta op en noteer die**; de eenheid rolt door in elke latere business case.
- Conversies uit het advertentieplatform en uit de gedragsbron nooit optellen of als gelijk vergelijken (andere attributie, zie Data-Contract).

Heeft deze klant geen betaalde advertenties, noteer dan "niet van toepassing" in het klantprofiel en sla deze sectie over. Dat is geen ontbrekende toegang.

## Performance (fase 3)

- Meet de kern-templates uit `03_SITE-STRUCTURE/Template-Registry.md` op mobiel; noteer de Core Web Vitals in `03_DIAGNOSIS/CWV-Status.md`.
- Bij quota-fouten: later opnieuw proberen en de blokkade in het decision-log noteren.

## Tegenboeking voor de dedupe-check

De primaire conversie moet naast een onafhankelijke bron gelegd worden. Welke dat is,
hangt van het conversie-model af:

| Conversie-model | Tegenboeking |
|-----------------|--------------|
| transactie | ordersysteem of backend-transacties |
| lead | CRM-records over dezelfde periode |
| abonnement | signup- of billingdatabase |
| offerte-configurator | offerte-administratie |

Vergelijk over 28 hele dagen. Een afwijking boven ongeveer 10 procent zonder verklaring
is eerst uitzoeken, dan pas baseline bouwen.
