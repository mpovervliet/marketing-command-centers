# Checklist: Wekelijkse Meta Optimize (ma/di)

Doorloop deze in 30-45 minuten per actief account.

## 1. State of the account (5 min)

- [ ] `meta_tool action=ad_insights` 7d vs vorige 7d, campaign + adset + ad
- [ ] KPIs op target? (ROAS / CPA / CPL — uit `kpis.md`)
- [ ] Frequency prospecting <2.5? Retargeting <5?
- [ ] Tracking-health: EMQ ≥7.0, CAPI coverage ≥95%?
- [ ] Open experiments / changes nog in evaluatie-window?

## 2. Kill-actions (10 min)

Per actieve ad — kill als:

- [ ] >300 impr én CTR (link) <0.5% (prospecting)
- [ ] 3-sec VV rate <15% na 500 impr (video)
- [ ] CPA >2× target na 50 clicks
- [ ] Frequency >6 op prospecting + dalende CTR
- [ ] Retargeting: CTR <1% én 0 purchases na 200 clicks

Per ad-set:
- [ ] >€500 spend zonder enige conversie → pauseren + diagnose

## 3. Scale-actions (10 min)

Per actieve ad — scale als:

- [ ] CPA <0.7× target én volume → +20-30% ad-set budget OF duplicate naar hogere tier
- [ ] CTR link >2% + CVR LP stabiel → kandidaat-winnaar (aanleg variaties via creative skill)
- [ ] Hook rate >40% + watch-through >25% → maak hook-varianten

Per campagne:
- [ ] ROAS/CPA 30% beter dan target 14d → +15-25% budget
- [ ] ROAS/CPA 30% slechter 7d → -15% budget + ad-level diagnose

**Respecteer learning phase**: ad-sets in "Learning" laat je 7d ongemoeid qua budget tenzij acute bloeding.

## 4. Audience refresh (5 min)

- [ ] Custom audiences updaten nog (auto)
- [ ] Customer Match >1 maand niet ververst? → flag voor wekelijkse upload
- [ ] Lookalikes >6 maanden niet refreshed? → schedule
- [ ] Exclusions actueel? Recent purchasers eraf?

## 5. Creative pipeline (5 min)

- [ ] Concepten >14 dagen live: scale, variaties, of kill
- [ ] Concepten >30 dagen sterk: pitch voor brand-uitrol of nieuwe iteratie
- [ ] Backlog in `creative/queue.md`: <3 klaar = alarm — trigger creative skill
- [ ] Nieuwe brief deze week? (bv. seizoen-content of test-hypothese)

## 6. Tracking-health quick check (5 min)

- [ ] Events Manager → EMQ Purchase ≥7.0
- [ ] CAPI coverage Purchase ≥95%
- [ ] Geen "Duplicate events without Event ID" >2%
- [ ] AEM Purchase op prio 1
- [ ] Catalog disapprovals <2%

## 7. Log + next steps (5 min)

In `<klantmap>/meta-ads/history-log.md`:
```
## YYYY-MM-DD — Wekelijkse optimize
**Killed**: [aantal ads + welke campagne]
**Scaled**: [winners + nieuwe budgetten]
**Creative queue**: [nieuwe concepten live + IDs]
**Alerts**:
- frequency [X] op campagne [Y] — fresh creative binnen 10d
- EMQ Purchase = [X.X] (acceptabel/onder par)
**Volgende week focus**:
1. ...
2. ...
```

## 8. Communicatie

- [ ] Slack/email update naar klant indien wekelijkse rapport-cadans
- [ ] Anders: kort intern memo voor MP-eigen referentie
