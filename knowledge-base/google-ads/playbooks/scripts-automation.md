# Google Ads Scripts & Automation — publieke bronnen

*Scripts zijn gratis tenzij anders aangegeven. Ze draaien in Google Ads zelf (Tools → Bulk Actions → Scripts).*

---

## Primaire bron

### Nils Rooijmans
**Wie**: NL PPC-consultant, 20+ jaar ervaring, specialist in Google Ads automation
**Site**: https://nilsrooijmans.com/
**Free scripts library**: https://nilsrooijmans.com/free-google-ads-scripts-the-ultimate-list/

**Waarom volgen**: Heeft **350+ gratis scripts** verzameld en getest. Zelf ook maker van top-scripts. Schrijft gedetailleerde blogposts met code + gebruiksinstructies.

### Must-have scripts uit Nils' library

| Script | Wat doet het | Wanneer inzetten |
|---|---|---|
| **Enhanced Anomaly Detection** | Monitort account elk uur, alarm bij afwijkingen | Alle klanten (default) |
| **Negative Keyword Suggestions** | Analyseert search terms, suggereert negatives | Wekelijkse optimize |
| **Pmax Brand vs Non-Brand Split** | Visualiseert brand-traffic in Pmax | Pmax audits |
| **Search Query Performance** | Search terms + costs + conversions in overzicht | Weekly review |
| **Account Anomaly** | Standaard Google's script + enhanced versie | Alle accounts |
| **Disapproval Alert** | Mail bij disapproved ads | Alle accounts |
| **Budget Pacing** | Waarschuwt bij budget-depletion vóór maand-einde | Budget-constrained campagnes |
| **Low Quality Score** | Lijst keywords met QS < 5 | QS optimalisatie projecten |

### Blog archive — waardevol voor research
- Year-reviews: "Best Google Ads Scripts of [Year]"
- Updates op bestaande scripts
- Script-tutorials en use-cases

---

## Mike Rhodes (WebSavvy)
**Site**: https://websavvy.com.au/
**Expertise**: Pmax scripts, advanced automation

**Gratis**: Basisversies van Pmax-scripts via zijn blog en community posts. Paid versies met extra features via cursussen.

**Wanneer inzetten**: Geavanceerde Pmax-monitoring (channel distribution, asset performance)

---

## Frederick Vallaeys / Optmyzr Scripts-content
**Site**: https://www.optmyzr.com/blog/
**Ook**: https://developers.google.com/google-ads/scripts

**Waardevol**: Frameworks voor custom scripts + geavanceerde API-integraties.

**Wanneer inzetten**: Bij klanten die externe data willen verwerken (bijv. weather API → bid modifiers, inventory → Pmax bid caps)

---

## Google's Official Scripts
**URL**: https://developers.google.com/google-ads/scripts/docs/solutions

**Wat**: Google's eigen library met **battle-tested** scripts voor common tasks:
- Performance monitoring
- Disapproval alerts
- Keyword expansion
- Auction insights

**Wanneer inzetten**: Altijd als eerste bron — deze scripts zijn gegarandeerd API-compatibel en onderhouden.

---

## Andere publieke repositories

### ppc.io Scripts-artikelen
- https://ppc.io/blog/google-ads-scripts
- https://ppc.io/blog/performance-max-scripts-google-ads

### Shopstory.ai
- https://www.shopstory.ai/blog/best-google-ads-scripts-no-code-alternatives

### Lunio.ai Scripts
- https://www.lunio.ai/blog/google-ads-scripts-2024

### Synapse SEM
- https://www.synapsesem.com/blog/best-google-ads-scripts/

Allemaal hebben ze curaties van actuele scripts + uitleg.

---

## 🛠️ Standaard script-stack per klant

**Bij elke nieuwe klant installeren (dag 1)**:

1. **Account Anomaly Script** (Google officieel of Nils' enhanced versie)
   - Bron: Google Docs of Nils Rooijmans
   - Doel: wekelijkse alert bij >15% afwijking op key metrics

2. **Disapproval Alert**
   - Bron: Google officieel
   - Doel: e-mail bij disapproved assets (binnen 24u fix)

3. **Negative Keyword Suggestions**
   - Bron: Nils Rooijmans
   - Doel: weekly draft-lijst met voorgestelde negatives

4. **Budget Pacing Monitor**
   - Bron: diverse (Nils, Optmyzr blog)
   - Doel: waarschuw bij dagelijks verbruik >120% of <80% van verwacht

**Optioneel (Pmax-heavy klanten)**:
5. **Pmax Brand vs Non-Brand** (Nils Rooijmans)
6. **Pmax Channel Distribution** (Mike Rhodes versie of custom)

**Optioneel (B2B/leads)**:
7. **Offline Conversion Upload** via Google Scripts (als alternatief voor Zapier)

---

## 📜 Hoe skills scripts aanbevelen

Skills kunnen voorstellen:
- *"Om dit te automatiseren, installeer Nils Rooijmans' 'Negative Keyword Suggestions' script — run 1×/week. Link: …"*
- *"De CPA spike van afgelopen dagen had opgevangen kunnen worden door het Account Anomaly script. Zal ik uitleggen hoe je het installeert?"*

Bewaar per-klant welke scripts draaien in `<klantmap>/google-ads/campaigns.md` onder een "Scripts actief" sectie.

---

## 🗂️ Script-setup template (in te vullen per klant)

```markdown
## Scripts actief

| Script | Bron | Frequentie | Installatie-datum |
|---|---|---|---|
| Account Anomaly | Nils Rooijmans | Hourly | 2026-04-14 |
| Disapproval Alert | Google official | Daily | 2026-04-14 |
| Negative Kw Suggestions | Nils Rooijmans | Weekly | 2026-04-14 |
| Budget Pacing | Optmyzr blog | Daily | 2026-04-14 |
```
