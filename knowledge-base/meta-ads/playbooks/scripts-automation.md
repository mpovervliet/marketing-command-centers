# Scripts & Automation — Meta Ads

Meta heeft (anders dan Google Ads) **geen native scripting-laag**. Automation gebeurt via:
- Meta's eigen "Automated Rules" in Ads Manager
- Third-party platforms (Revealbot, Madgicx, Triple Whale, etc.)
- Custom scripts via Marketing API + cron / Cloud Functions

## Meta's eigen Automated Rules

**Locatie**: Ads Manager → Rules → Custom Rule

**Wat kan**:
- Pause/start ads/ad-sets/campaigns op metrics
- Adjust budgets (±%) op condities
- Notify (email/Messenger) bij triggers
- Schedule on/off

**Beperkingen**:
- Geen complexe logica (geen multi-condition met OR-groepen)
- Trigger-frequentie minimum 30 min
- Geen creative-rotatie
- Geen catalog-acties

**Use cases waar Native Rules werkt**:
- Pause ad als CPA >2× target én spend >€100
- Increase budget +20% als CPA <0.7× target én volume >X
- Notify bij frequency >5
- Pause ad als geen conversies in 7d met >€500 spend

## Revealbot

- **URL**: https://revealbot.com/
- **Wat**: Best-in-class third-party automation voor Meta + Google Ads
- **Sterkten**: Multi-condition rules, AI-rules, alerts via Slack
- **Cost**: ~$83/mnd voor Meta-only, hoger voor multi-platform
- **Wanneer**: voor klanten met >€10k/mnd waar je hours-saving wil

## Madgicx

- **URL**: https://madgicx.com/
- **Wat**: All-in-one automation + creative + audience-tools
- **Sterkten**: Auto-pause, AI-recommendations, creative insights
- **Cost**: $39-$149+/mnd
- **Wanneer**: voor SME-klanten die zelf hands-on willen

## Triple Whale

- **URL**: https://triplewhale.com/
- **Wat**: DTC-attributie-platform met automation features
- **Sterkten**: First-party attribution, creative insights, multi-channel view
- **Cost**: $129+/mnd
- **Wanneer**: voor Shopify DTC-merken die accurate cross-channel attributie willen

## Motion (creative reporting)

- **URL**: https://motionapp.com/
- **Wat**: Creative-tagged reporting, asset library
- **Sterkten**: Creative-rotatie planning, performance per concept-tag
- **Cost**: $349+/mnd (mid-market)
- **Wanneer**: voor accounts >€20k/mnd waar creative-strategie centraal staat

## Marketing API custom scripts

Voor meer geavanceerde automation: schrijf eigen scripts via Meta Marketing API.

**Use cases**:
- Custom alerting (Slack/email) bij specifieke conditions
- Bulk pause/launch ops (bv. seasonale switches)
- Cross-data joins (Meta + Shopify + GA4 → eigen attributie)
- Daily report-generation in Sheets

**Tools**:
- **Python**: `facebook-business` SDK
- **Node.js**: `facebook-nodejs-business-sdk`
- **No-code**: n8n, Make.com, Zapier voor lichte integraties

**Voor MP**: gebruik `meta_tool` (de Cowork-tool) voor ad-hoc operaties. Custom scripts schrijven alleen wanneer recurrente ops echt frequent zijn.

## Conversions API Gateway

- **URL**: https://www.facebook.com/business/help/conversions-api-gateway
- **Wat**: Meta's eigen managed CAPI-service
- **Sterkten**: No-code CAPI implementatie voor common platforms
- **Cost**: Gratis (Meta-supported)
- **Wanneer**: voor klanten zonder dev-resources die snelle CAPI willen

## Server-side Google Tag Manager (sGTM)

- **URL**: https://www.google.com/tagmanager/
- **Wat**: Server-side container voor first-party tracking
- **Sterkten**: Volledige controle CAPI parameters, dedup-correctheid, betere EMQ
- **Cost**: Server-hosting (~$50-200/mnd via Google Cloud Run / Stape.io)
- **Wanneer**: voor accounts >€20k/mnd waar tracking-quality kritiek is

### Stape.io (sGTM hosting)
- **URL**: https://stape.io/
- **Wat**: Managed sGTM-hosting, Meta-CAPI templates
- **Cost**: $20+/mnd
- **Wanneer**: snelste route naar sGTM voor non-dev teams

## n8n / Make.com / Zapier

Voor lichte automation:
- Customer Match auto-upload uit CRM/Klaviyo
- Slack-alerts uit Meta-data
- Daily KPI-export naar Sheets

## Audience-sync tools

| Tool | Voor wie |
|---|---|
| **Klaviyo (native Meta integration)** | E-com / DTC |
| **HubSpot** | B2B / Sales-cycle klanten |
| **Salesforce Marketing Cloud** | Enterprise |
| **Zapier / Make** | Multi-source CSV → Meta Custom Audience |
| **Octane AI / Recart** | Shopify chat / quiz → Meta audiences |

## Voor MP: aanbevolen automation-stack per klant-grootte

| Klant-grootte | Stack |
|---|---|
| <€5k/mnd | Meta native rules + handmatige weekly check |
| €5-15k/mnd | Meta native + Triple Whale of Madgicx (lite tier) |
| €15-50k/mnd | Revealbot + Triple Whale + Motion (creative ops) |
| >€50k/mnd | Revealbot + Triple Whale + Motion + sGTM via Stape + custom scripts |

## Veelgemaakte fouten

- **Te veel automation rules** → conflicten + onverwachte pauses
- **Rules zonder dagelijkse review** → automation kan nieuwe winners killen
- **No alerts** → automation pauseert iets, niemand merkt het 5 dagen later
- **Custom scripts zonder logging** → debugging onmogelijk
- **CAPI-Gateway naast eigen sGTM** → dubbel tracken zonder dedup → ROAS opgepompt
