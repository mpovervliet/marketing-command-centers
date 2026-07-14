# Weekly Optimization Checklist

**Doel**: elke week per klant 20-30 min routinewerk. Zoek lekkages, versterk winnaars, log alles.

## Triage (10 min)

- [ ] Alerts / disapprovals gecheckt
- [ ] Budget pacing: verbruik in lijn met maand-verwachting (% van dag-in-maand)
- [ ] Top-line metrics (7d vs vorige 7d): omzet, conv, CPA/ROAS
- [ ] Uitschieters genoteerd (positief en negatief)

## Search terms review (10-15 min)

- [ ] GAQL query uitgevoerd (zie google-ads-optimize skill)
- [ ] Top 20 spend-zonder-conversie termen geclassificeerd
- [ ] Nieuwe negatives toegevoegd aan shared list
- [ ] Relevante termen naar juiste ad group gemoved (of nieuwe ad group)
- [ ] AI Max / Pmax search terms apart gecheckt (vaker monitoring nodig)

## Negatives hygiene (5 min)

- [ ] Nieuwe negatives deze week: aantal, lijst
- [ ] Cross-check: niet per ongeluk legitiem verkeer geblokkeerd
- [ ] Shared list up-to-date en gekoppeld aan alle relevante campagnes

## Bid & budget tuning (5 min)

- [ ] tCPA/tROAS realistisch (geen learning limited als vermijdbaar)
- [ ] Budget-gelimiteerde campagnes: overwegen budget +20% als ROAS houdt
- [ ] Budget-zwakke campagnes: 20% verlagen en herverdelen
- [ ] Geen bid-strategy-change als er <14 dagen geleden al een was

## Creative / Ad Strength (5 min)

- [ ] Ad Strength per Search ad group — alle Good/Excellent?
- [ ] Pmax asset groups: strength + asset performance
- [ ] RSA's ouder dan 60d met ondergemiddelde CTR → nieuwe variant gepland
- [ ] Disapproved assets? → fix

## Feed & Pmax (e-com, 5 min)

- [ ] Merchant Center disapprovals <1%?
- [ ] Out-of-stock producten uit Pmax
- [ ] Nieuwe producten toegevoegd aan relevante asset groups
- [ ] Supplemental feed (marge) up-to-date

## Audiences (2 min)

- [ ] Customer Match refresh deze week?
- [ ] Nieuwe converters synced naar CM lookalike list

## Experimenten (2 min)

- [ ] Lopende experimenten gecheckt (geen voortijdige conclusies)
- [ ] Afgeronde experiments: winner ingevoerd?

## Logging (5 min)

- [ ] `history-log.md` bijgewerkt met alle wijzigingen:
  - Wat
  - Waarom (data-onderbouwing)
  - Verwacht effect
  - Wanneer evalueren
- [ ] Volgende week-check gepland

## Escalatie-check

- [ ] Zijn er zaken die naar MP/klant moeten?
  - CPA/ROAS -30% week-over-week
  - Tracking broken (>48u zero conv)
  - Policy violation
  - Disapproved campaign
  - Budget exhaustion vóór 12:00 op belangrijke dagen
  - Klant-kritiek op specifieke ad-content

## Tijd-richtlijn per klant (per week)

| Klantgrootte | Tijd |
|---|---|
| Small (<€3k/mnd spend) | 15-20 min |
| Mid (€3-15k/mnd) | 25-35 min |
| Large (>€15k/mnd) | 45-60 min + dagelijkse triage |
