# Meta Bidding Strategies — 2026

## De 4 strategieën, kort

| Strategy | Wat het doet | Wanneer |
|---|---|---|
| **Lowest Cost (Highest Volume)** | Maximaliseer conv binnen budget | Default. Start hier. |
| **Cost Cap** | Conv onder een max-CPA waar mogelijk | Gevorderd. Na 50+ conv/7d per ad-set, als CAC-ceiling kritiek is. |
| **Bid Cap** | Hard biedplafond per auction | Bijna nooit — alleen volume-arbitrage |
| **ROAS Goal (Minimum ROAS)** | Conv-value maximaliseren bij minimum-ROAS | Mature accounts met value-tracking + conv-volume ≥50/wk |

## Default flow per nieuw ad-set

```
Week 1-2:   Lowest Cost            → laat algoritme leren, geen restricties
Week 3-4:   Lowest Cost            → meet baseline CPA + Std-Dev
Week 5+:    overweeg Cost Cap of ROAS Goal
              IF avg CPA stabiel én volume ≥50/wk
```

**Niet aanraden**: direct beginnen met Cost Cap. Algoritme heeft geen referentie en zal volume halveren.

## Lowest Cost — wat ik moet weten

- Geen cap = Meta probeert max volume binnen budget
- Werkt het beste bij voldoende creative-variatie (8-15 ads bij ASC)
- CPA-volatility tijdens learning is normaal — ±30% week-over-week eerste 2 weken
- Na learning: stabiliseer rond een gemiddelde

## Cost Cap — wanneer en hoe

**Wanneer aanzetten**:
- Account heeft 50+ conv/7d per ad-set
- Lowest Cost laat zien dat avg CPA al onder een werkbare ceiling zit
- Klant heeft echt een maximum CPA dat niet overschreden mag worden (bv. unit economics)

**Hoe instellen**:
- Cap = avg CPA last 14d × 1.10 tot 1.15 (geef ruimte!)
- Te krappe cap → ad-set serveert niet, geen volume
- Stap-voor-stap omlaag (1.10 → 1.05 → 1.00 over 4 weken) als volume gehouden wordt

**Risico**: te krap zetten → algoritme kan geen conv vinden → geen impressies → 0 spend.

## ROAS Goal — wanneer en hoe

**Wanneer**:
- E-com met value-optimisation aan
- 50+ conv/wk per ad-set
- Klant-KPI is ROAS, niet CPA
- Marges zijn stabiel (anders: gebruik POAS via supplemental data)

**Hoe instellen**:
- ROAS Goal = avg ROAS last 14d × 0.85 tot 0.95 (start onder, niet boven)
- Boven historische ROAS zetten → algoritme kan niet vinden → 0 spend
- Geleidelijk verhogen als volume gehouden

**Notitie**: ROAS Goal werkt slecht voor accounts <€20k/mnd — onvoldoende value-signal.

## Bid Cap — bijna nooit

- Hard biedplafond per auction
- Use case: arbitrage, very specific audiences, mature accounts met diepe data
- Voor de meeste klanten: skip dit

## CBO vs ABO (budget-allocatie)

| Modus | Wat | Wanneer |
|---|---|---|
| **CBO** (Campaign Budget Optimization) | Meta verdeelt budget over ad-sets | **Default**. Vooral als ad-sets vergelijkbaar zijn. |
| **ABO** (Ad-set Budget Optimization) | Jij geeft elk ad-set eigen budget | Test van duidelijk verschillende audiences (Interest A vs B vs Broad) waarbij je elk ad-set wilt zien onafhankelijk. |

ASC is altijd CBO (geen keuze). Conversion-campagnes default CBO; ABO als je een audience-test draait.

## Budget-grootte regels

- **Daily budget per ad-set ≥ 10× CPA target**
- **Daily budget per ASC ≥ 50× CPA target** (heeft meer signaal nodig)
- **Onder 5× CPA**: ad-set verlaat learning phase nooit volledig

## Wijzigingen tijdens learning

Meta's "Learning Phase" eindigt na ~50 optimisation events (bv. Purchases) in 7 dagen.

**Tijdens learning**:
- **Geen budget-shifts >20%**
- **Geen audience-wijzigingen**
- **Geen creative-toevoegingen behalve nieuwe ads die testbaar zijn**
- **Geen bid-strategy switch**

Doe je het wel? → resets learning, je verliest tijd + spend.

## Wanneer schakelen tussen strategieën

```
Lowest Cost → Cost Cap     IF stabiele CPA én ceiling-eis
Lowest Cost → ROAS Goal    IF e-com én klant-KPI = ROAS én ≥50 conv/wk
Cost Cap → Lowest Cost     IF cap te krap, 0 spend
ROAS Goal → Cost Cap       IF value-tracking onstabiel
```

Elke switch = 7 dagen learning opnieuw. Plan dus.

## Special cases

### B2B / Lead-gen
- Lowest Cost default
- Cost Cap pas mogelijk na 50+ Qualified Leads in 7d (vaak weken/maanden later in B2B)
- Offline conversion sync moet draaien voor accurate cost-per-qualified

### Subscription / SaaS
- Bid op StartTrial (niet Subscribe) — sneller signaal
- Switch naar Subscribe na 50+ subs/week

### Branded reach (awareness)
- Reach-objective met **frequency cap** (3 in 7d) — niet conversion-bidding
- Cost per 1k Reach is hier de KPI

### Hoogseizoen / promoperiodes (BFCM, sales)
- **Verhoog budgets vooraf** (1-2 weken voor) — Meta heeft tijd nodig om bid-curve te leren
- Switch naar Lowest Cost (ipv Cost Cap) — promo-periodes hebben ander conversion-gedrag, cap-references zijn niet meer accuraat
- Plan creative-batch voor de piek (UGC, scarcity, social proof)

## Diagnose: bid-strategie issues

| Symptoom | Diagnose | Fix |
|---|---|---|
| Cost Cap ad-set 0 spend | Cap te krap of audience te smal | Cap +15-20% of audience verbreden |
| ROAS Goal ad-set 50% van budget | ROAS te hoog gezet | ROAS -10% en monitor |
| CPA hoger dan target ondanks Cost Cap | Cap technisch een **gemiddelde** target, niet hard plafond | Realistisch: Cost Cap geeft ±20% afwijking |
| Lowest Cost CPA ineens 2× target | Creative fatigue / audience saturation | Refresh creative, check freq |

## Referenties
- [Meta — Bidding strategies overview](https://www.facebook.com/business/help/1619591734742116)
- [Foxwell Digital — Bid strategy framework](https://foxwelldigital.com/)
- [Performance Marketing Lab podcast — TSS bidding deep-dives](https://www.thesocialsavannah.com/)
