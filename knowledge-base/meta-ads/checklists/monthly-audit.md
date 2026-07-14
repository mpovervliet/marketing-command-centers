# Checklist: Maandelijkse Meta Audit (1e van de maand)

Lichter dan een full audit (zie `meta-ads-audit` skill voor 80-punts), maar dieper dan een wekelijkse check. Doorloop in 60-90 minuten.

## 1. Performance trend (15 min)

- [ ] 30d vs vorige 30d vs zelfde maand vorig jaar (YoY)
- [ ] ROAS / CPA / CPL trend per campagne
- [ ] Spend-allocatie per campagne — past het bij de doelen?
- [ ] Per kanaal: Reels vs Feed vs Stories vs Audience Network
- [ ] Mobile vs Desktop split

## 2. Creative-rapport (15 min)

- [ ] Top 5 winning ads van de maand
- [ ] Bottom 3 losers (waarom?)
- [ ] Hook rate / CTR / Frequency trend
- [ ] Welke concept-types dominant? (UGC vs brand-static vs DPA)
- [ ] Welke hook-categorieën winnen? (PAS / question / number / etc.)
- [ ] Iteratie-ratio: % nieuwe concepten dit maand vs winners-survival

## 3. Audience performance (10 min)

- [ ] Welke audience-lagen leveren % volume?
- [ ] Customer Match: refreshed dit maand?
- [ ] Lookalike refresh nodig?
- [ ] Audience Overlap check (>25% = consolidate)

## 4. Catalog / Commerce (10 min — e-com only)

- [ ] Disapprovals trend (target <2%)
- [ ] Top 20 producten — leveren bestsellers nog?
- [ ] Out-of-stock % (target <5%)
- [ ] Custom labels nog actueel?
- [ ] Nieuwe producten in catalog deze maand
- [ ] Instagram Shop diagnostics groen?

## 5. Tracking & data-health (10 min)

- [ ] EMQ Purchase ≥7.0 (trend over maand)
- [ ] CAPI coverage Purchase ≥95% (trend)
- [ ] Pixel-only events <5%
- [ ] AEM prioriteit nog logisch?
- [ ] Special Ad Categories status?
- [ ] Domain verification still active

## 6. Bidding-config review (5 min)

- [ ] Strategy per campagne nog passend bij volume?
- [ ] Cost Cap nog haalbaar (niet 0 spend)?
- [ ] ROAS Goal volume-houdend?
- [ ] Bid-shifts vorige maand: rationale klopte?

## 7. Concurrent-snapshot (5 min)

- [ ] Top 3 concurrenten in Meta Ad Library — wat draaien ze?
- [ ] Welke creative-thema's zien we terugkomen?
- [ ] Nieuwe spelers in markt?
- [ ] (Optioneel via `apify_tool`: scrape IG-profiles voor extra context)

## 8. Cross-channel sanity (5 min)

- [ ] Meta Purchases vs GA4 Meta-source Purchases — gap acceptabel?
- [ ] Brand-search lift via GSC (Meta-spend correleert met branded queries?)
- [ ] Google Ads + Meta overlap — concurreren we met onszelf?

## 9. Open experiments / lift-tests

- [ ] Experimenten in evaluatie-window: lessen documenteren
- [ ] Lift-test deze maand gepland? (1×/kwartaal bij >€15k/mnd)
- [ ] Kwartaal-test cadans on schedule?

## 10. Strategische vragen (10 min)

Voor elk significant aandacht-punt:
- Wat is de hypothese voor komende maand?
- Welke 3 acties komen op de lijst?
- Welke risico's zijn er?
- Welke ondersteuning nodig (creative-batch, klant-input, dev)?

## Output

- [ ] Maand-rapport schrijven via `meta-ads-reporting` skill
- [ ] Action-items in `history-log.md`
- [ ] Verstuurd naar klant per voorkeurs-kanaal
- [ ] Volgende maand-cadans gepland
