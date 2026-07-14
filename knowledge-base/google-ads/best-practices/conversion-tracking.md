# Conversion Tracking Stack — 2026

## De volledige stack (verplicht per klant)

```
Browser
├── GTM (client-side) of GTM server-side
├── Consent Mode v2 (Advanced) via gecertificeerde CMP
├── GA4 event stream
├── Google Ads conversion tags (+ Enhanced Conversions)
└── Server-side GTM container (bij volume >€10k/mnd)

Server / CRM
├── Offline Conversion Upload (OCI) — B2B / leads
├── ProfitMetrics / Elevar — POAS naar Ads (e-com)
└── Customer Match sync (Klaviyo, HubSpot, etc.)
```

## 1. GA4 → Google Ads link

- Goals → Conversions in GA4
- Import naar Google Ads via **Ads account linking** (alleen de events die je écht als conversie telt)
- **Niet dubbel tellen** met native Ads-tag: kies één bron per event
- Attribution: data-driven

## 2. Enhanced Conversions (EC)

Hashed first-party data (email/phone/address) naast conversion event. Google matcht tegen logged-in users. **Typisch +5-15% gerapporteerde conversies**.

**Setup checklist**:
- [ ] Enhanced Conversions AAN in Ads → Goals → Conversions → Diagnostics
- [ ] Implementatie via GTM (aanbevolen) of gtag.js
- [ ] User data velden (email minstens, telefoon/adres bonus)
- [ ] Diagnostics tab: "Enhanced conversions: Active"
- [ ] Doel: >50% conversies "enhanced"

**Voor leads (EC for Leads)**: lees email uit lead-form → hash client-side → stuur met conversie.

## 3. Consent Mode v2

**Legal verplicht** voor EEA/UK adverteerders.

- **Basic Consent Mode**: blokkeert tags bij reject → 100% data-verlies
- **Advanced Consent Mode**: stuurt cookieloze signalen → Google modelleert 70%+ terug

**Setup**:
- [ ] Gecertificeerde CMP (Cookiebot, Usercentrics, OneTrust, Cookiescript, etc.)
- [ ] GTM implementatie met `consent` trigger
- [ ] 700+ clicks/dag voor 7 dagen = modelleringsgrens
- [ ] Test met Tag Assistant + real-time GA4
- [ ] Conversion modeling zichtbaar in Ads (binnen 2 weken)

## 4. Offline Conversion Upload (B2B / leads)

Bij lead-gen: leads worden later qualified → je wilt **qualified leads** als conversie, niet alleen formulier-submissions.

**Opties**:
- Zapier integratie (CRM → Ads)
- Direct API (via n8n, Google Ads API)
- Salesforce/HubSpot native connectors

**Principes**:
- Upload binnen 30 dagen van klik
- GCLID mee-capturen bij lead (verborgen veld)
- Conversion action "Qualified Lead" of "SQL" apart van "Lead"
- Primary conversie = qualified, secondary = raw lead

## 5. POAS / Profit tracking (e-com)

- **ProfitMetrics** of **Elevar** voor automatische profit-push
- Kost ±€100-300/mnd — schaalt rap terug via betere biedingen
- Push naar Google Ads als custom conversion value
- tROAS wordt effectief tPOAS

## 6. Attribution & modeling

- **Data-driven attribution** is standaard sinds 2023
- View-through conversion window: 1 dag (default)
- Click-through conversion window: 30 dagen (e-com) / 90 dagen (B2B)

## Veelvoorkomende bugs

| Symptoom | Oorzaak | Fix |
|---|---|---|
| Conversie-volume halveerde overnight | Consent banner geüpdatet, bind breken | CMP check, Consent Mode v2 verify |
| Enhanced Conv % = 0 | User data niet doorgegeven | GTM DataLayer check, hash-validatie |
| Dubbele conversies | GA4 import + native tag | Deduplicatie, één bron kiezen |
| GCLID niet doorgegeven aan CRM | Formulier-config | Hidden field, URL auto-capture |
| View-through opgeblazen | Display-impressies tellen mee | View-through windows verlagen, exclude Display |

## Test protocol na elke wijziging

1. Tag Assistant Companion in Chrome
2. Real-time rapport GA4
3. Google Ads → Conversions → Diagnostics
4. Test lead/purchase flow zelf (incognito)
5. Check na 24u of Enhanced Conv % klopt

## Referenties
- [Google Ads Help — Enhanced Conversions](https://support.google.com/google-ads/answer/9888656)
- [Google Ads Help — Consent Mode](https://support.google.com/google-ads/answer/10000067)
- [Consent Mode v2 Implementation Guide](https://yeezypay.io/blog/google-consent-mode-v2-complete-2026-implementatio)
