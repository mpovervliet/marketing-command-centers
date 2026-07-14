# Meta Audience Strategies — 2026

## Het paradigma is verschoven

Pre-iOS 14.5: **interest-stacking + lookalike-precision** was de hefboom.
Post-iOS 14.5 + Advantage+ (2024-2026): **broad targeting + creative-first** wint.

Waarom: Pixel-loss + Meta's verbeterde algorithme + Advantage+ Audience verslaan handmatige targeting in 80%+ van A/B-tests.

## De audience-piramide (in volgorde van importantie)

```
1. CUSTOMER LIST (Customer Match)        ← cruciale seed voor LAL & exclusion
2. WEBSITE VISITORS (Pixel)              ← retargeting + LAL-bron
3. INSTAGRAM ENGAGERS                    ← warme audience, LAL-waardig
4. VIDEO VIEWERS                         ← engagement-laag (ladder per %)
5. LOOKALIKES                            ← prospecting (vooral 1-3% range)
6. ADVANTAGE+ AUDIENCE (broad)           ← prospecting default in 2026
7. INTEREST AUDIENCES                    ← signal voor Advantage+, niet hard-locked
```

## 1. Customer Match (Customer Lists)

Upload via CSV / direct sync (Klaviyo, HubSpot, Shopify).

**Best practices**:
- **Min 1.000 records** per audience om bruikbaar te zijn voor LAL
- **Hash op klant-zijde** of laat Meta dat doen — beide werkt
- **Segmenteer** (geen mega-lijst): all-buyers, high-LTV, recent-90d, lapsed-180d, newsletter-engaged
- **Refresh maandelijks** — anders verloopt kwaliteit
- **Exclusion-gebruik**: bestaande klanten uit prospecting-campagnes (behalve in retention-campagne)

**Sync-tools**:
- Shopify → Meta direct (Shopify-app)
- Klaviyo → Meta sync (native integratie)
- HubSpot → Meta sync (native + Zapier)
- Manual CSV via Audiences UI (last resort)

## 2. Website Custom Audiences (WCA)

Gebaseerd op Pixel-events.

**Default audiences voor élke account**:
- All website visitors 30d
- All website visitors 90d
- All website visitors 180d
- ATC last 14d
- ATC last 30d (excl. Purchase 30d)
- IC last 14d (excl. Purchase 14d)
- ViewContent last 7d (warm, voor cross-sell)
- Purchasers 90d (retention)
- Purchasers 180d (LAL-seed + winback)

**Belangrijk**: WCA-pools zijn sinds iOS kleiner. Combineer met server-side-events (CAPI) voor zo veel mogelijk dekking.

## 3. Engagement Audiences (FB + IG)

Gebaseerd op organic + ad interactie.

**Default**:
- IG account engagers 365d
- FB Page engagers 365d
- IG profile visits 365d
- IG saves/shares 90d (premium-warmte signaal)
- Video viewers 25/50/75/95% (per video-creative of overall)

**Power-tip**: video-viewer ladder. 95%-viewers zijn bijna purchase-klaar; 25%-viewers zijn awareness-laag → respectievelijk in BOF en MOF.

## 4. Lookalike Audiences (LAL)

LAL = synthetische audience op basis van een seed.

**Best practices**:
- **Seed ≥ 1.000 records** (idealiter 5.000+)
- **Beste seeds** (in volgorde): high-LTV buyers > all-buyers > IG-engagers > video-viewers 75% > website visitors
- **% LAL keuze**:
  - **1%** = meest similar (kleinste pool, hoogste precision)
  - **1-3%** = ideaal voor scale
  - **3-5%** = brede prospecting (meer als signal)
  - **5-10%** = bijna broad — vaak overbodig sinds Advantage+
- **Per markt** (LAL is land-specifiek)
- **Refresh seed elk kwartaal** voor consistent quality

**Wanneer LAL als signal voor Advantage+ Audience**: gebruik 1% LAL purchasers als suggestion in Advantage+ Audience — geeft Meta richting zonder hard te beperken.

## 5. Advantage+ Audience (de nieuwe default)

Sinds 2023 default voor Sales/Conversion campagnes (en verplicht voor ASC).

**Hoe het werkt**:
- Je geeft "audience suggestions" (interests, custom audiences, LAL)
- Meta gebruikt ze als **signal** maar serveert breder als algorithme dat beter vindt
- Geen hard age/gender (tenzij legal-reden)
- Plaats: Advantage+ Placements default

**Wanneer "Original Audience Options" (oude mode) aan**:
- Special Ad Categories (employment/housing/credit/social) — verplicht
- B2B met smalle target (job-titles, employer)
- Wettelijk verplichte targeting-restricties (alcohol, gambling)

## 6. Interest Audiences

In 2026: interests zijn **signal**, geen target.

**Hoe gebruik je ze nog?**
- Als suggestion in Advantage+ Audience
- Als detailed targeting in een **gesloten** test (oude mode) tegen Advantage+ broad — voor 1-2 weken
- **Niet stacken** van 20+ interests — dat is in 2024 al irrelevant geworden

**Welke interests blijven krachtig?**
- "Interested in [merk-categorie]" (ipv "Interested in [single-merk]" — Meta denigreert single-brand stacks)
- "Engaged shoppers" (high purchase intent indicator)
- Industry-specific job titles (B2B)
- Behaviors > Interests (purchase behavior > stated interest)

## 7. Exclusions

Vergeet exclusions niet — ze bewaken je CAC.

**Standaard exclusions in elke prospecting-ad-set**:
- Recent purchasers (30d / 90d, klant-afhankelijk)
- Bestaande klanten (Customer Match all-buyers)
- Recent leads (B2B — om 1-week-old MQL niet als prospect te targeten)
- Eigen werknemers (Customer Match employee-list)

## Audience overlap

Te hoge overlap (>25%) tussen ad-sets = ze concurreren met elkaar binnen Meta's auction = duurder voor jou.

**Tool**: Ads Manager → Audiences → selecteer 2-5 → "Show Audience Overlap"

**Fix**: bredere audience kiezen (omdat Advantage+ er alsnog narrower kan gaan), of consolideer twee ad-sets.

## Audience refresh cadans

| Audience | Refresh cadans |
|---|---|
| Customer Match | Maandelijks (full re-upload of incremental) |
| Lookalikes | Kwartaal (na Customer Match-refresh) |
| WCA | Auto (Meta houdt rolling 180d window) |
| Engagement | Auto (Meta houdt rolling) |
| Interests | Test 1-2 keer per kwartaal — dom om vast te houden zonder validatie |

## B2B audiences (extra)

- **Custom audience uploaded company-list** (matchen op email-domain → vaak <30% match-rate)
- **Job titles** stack (5-10 senior titles)
- **Industry** + **Job title** combo
- **LinkedIn-style targeting** is in Meta beperkt — vaak beter via LinkedIn Ads als budget toelaat

## Veelgemaakte fouten

- **Te smalle audiences** (<200k) → Meta-algoritme heeft te weinig ruimte
- **Te veel ad-sets met overlapping audiences** → onderling concurreren
- **Customer Match nooit geüpload** → verlies van je sterkste seed + exclusion
- **Lookalikes uit te kleine seed** (<1.000) → eigenlijk broad zonder voordeel
- **Interest-stacking van 20+ interests** in 2026 — dit is een 2018-tactiek

## Referenties
- [Meta — Audience targeting best practices](https://www.facebook.com/business/help)
- [Foxwell Digital — Audience strategies post-iOS](https://foxwelldigital.com/)
- [Common Thread Collective — Audience pyramid](https://commonthreadco.com/)
