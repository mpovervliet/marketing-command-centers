# Cowork-Master-Prompt
Versie: 0.1 (stencil)
Status: TEMPLATE, invullen bij intake

Herbruikbare prompts voor Cowork als regisseur/strateeg/analist. Vervang [PAD], [KLANT], [GA4_PROPERTY_ID], [GSC_SITE], [ADS_CUSTOMER_ID], [PROFILE], [PRODUCT].

## Master-instructie (start van een redesigntraject)

```
Werk in de map [PAD]\[KLANT]\REDESIGN.
Doel: bouw een data-gedreven UX/CRO-redesigntraject voor de volledige [KLANT]-site,
waarbij elke ontwerpbeslissing herleidbaar is naar data, klantintentie,
commerciele impact of UX-frictie.

Werkwijze:
1. Verzamel en indexeer bestaande context in 01_CONTEXT.
2. Verifieer live databronnen via de MCP Gateway en documenteer beschikbaarheid,
   beperkingen en datakwaliteit in 02_DATA-BASELINE.
3. Maak eerst een Measurement-QA voordat je conclusies trekt uit GA4-events.
4. Segmenteer alle funnel- en performancedata minimaal op device, kanaal,
   landingspagina, producttype, brand/non-brand en new/returning waar beschikbaar.
5. Maak een CRO/UX-diagnose per belangrijkste flow.
6. Vertaal inzichten naar een hypothese-backlog (bewijs, impact, KPI, risico, testvorm).
7. Maak een conversion architecture en pas daarna pas wireframes.
8. Gebruik Claude Design alleen voor visuele conceptverkenning, niet als source of truth.
9. Gebruik Figma MCP voor design system en redesign-frames.
10. Leg elke belangrijke keuze vast in 09_DECISION-LOG.

Output: per fase concrete markdown-documenten in de juiste map.
Geen losse conclusies in chat. Elke claim gekoppeld aan brondata, observatie of aanname.
```

## Fase-prompts

- **Data-baseline:** "Trek voor GA4-property [GA4_PROPERTY_ID] (profile [PROFILE]) de baseline (90d): device-split, kanaal, new/returning, top landingspagina's met conversie, en de funnel met betrouwbare events. Doe eerst Measurement-QA en flag onbetrouwbare events in het Data-Contract."
- **Diagnose:** "Maak per kern-flow (homepage, [PRODUCT], configurator/keuzeflow, checkout) een audit met bewijs (data plus heuristiek). Koppel elk probleem aan een KPI en segment en registreer bevindingen als Evidence Items."
- **Hypotheses:** "Zet de diagnose om in een hypothese-backlog met het vaste format en prioriteer via ICE."
- **Strategie:** "Bouw de Conversion Architecture en Decision-Moment-Map: benoem de beslismomenten (BM-X) en koppel elk aan bewijs en een hypothese."
- **Design:** "Start per template een Agent 1-sessie (Design Decision Compiler), laat de DDRs door Agent 2 (Red Team) keuren en bouw daarna via Agent 3 in Figma."
- **Validatie:** "Maak per experiment een testplan met primary KPI, guardrails, MDE, sample-size en trackingspecificatie; QA voor livegang."

## Vaste parameters ([KLANT])

- GA4: `profile=[PROFILE]`, `property_id=[GA4_PROPERTY_ID]`.
- GSC: `profile=[PROFILE]`, `site_url=[GSC_SITE]`.
- Ads: `profile=[PROFILE]`, `customer_id=[ADS_CUSTOMER_ID]`.
