---
name: retention-lifecycle-deliverability
description: >
  Email deliverability & sender authentication specialist. Gebruik ALTIJD bij vragen over DMARC, SPF, DKIM, BIMI, sender reputation, IP warmup, dedicated sending, custom tracking domain, blacklist-issues, Google Postmaster Tools, Microsoft SNDS, inbox placement, spam complaints, bounce management, list hygiene, sunset flows voor deliverability, of elke vraag over waarom emails niet in inbox landen. Trigger bij "DMARC setup", "DMARC p=reject", "SPF record", "DKIM configuratie", "BIMI logo", "sender reputation", "domain warmup", "dedicated IP warmup", "inbox placement daalt", "Gmail bounces", "Outlook spam", "Postmaster Tools", "deliverability audit", "blacklist check", "spam rate te hoog", "one-click unsubscribe header", "RFC 8058", "Yahoo Google sender requirements", "feb 2024 rules", of elke deliverability-vraag. Past 2026 best practices toe (DMARC verplicht sinds feb 2024, BIMI met VMC voor merkherkenning, dedicated subdomain, list hygiene via sunset-flows, complaint <0.1%).
---

# Email Deliverability: Sender Authentication, Reputation & Inbox Placement

Deliverability is het fundament. Alle overige retention-werk is waardeloos als emails in spam of bulk belanden. Deze skill dekt de volledige technische + operationele deliverability-discipline.

## Wanneer activeer je deze skill

- Nieuwe klant setup DMARC/SPF/DKIM
- Deliverability dropt (open rate plotse daling)
- Spam complaints stijgen
- Blacklist-signaal (SpamHaus, Barracuda)
- Migratie naar dedicated sending / eigen subdomain
- BIMI-implementatie
- IP / domain warmup van scratch
- MP zegt: "DMARC setup", "waarom land ik in spam", "deliverability audit", "BIMI aanzetten"

---

## De Feb 2024 Google/Yahoo Rules (nog steeds leidend in 2026)

Sinds februari 2024 eisen Google, Yahoo (en sindsdien Microsoft grotendeels overgenomen):

1. **SPF + DKIM**: beide moeten aligned zijn met het zichtbare From-domein
2. **DMARC**: minimaal `p=none` (policy unenforced, monitoring active)
3. **One-click unsubscribe**: `List-Unsubscribe` + `List-Unsubscribe-Post: List-Unsubscribe=One-Click` headers (RFC 8058)
4. **Spam complaint rate <0.3%**: streef <0.1%
5. **Branded sending domain**: niet direct @merk.nl maar @mail.merk.nl (subdomain)
6. **Accepted encoding**: utf-8 properly declared

**Niet-compliance = hard bounces of spam-folder, niet inbox.** Dit is in 2026 onveranderlijk.

---

## De deliverability-piramide

```
5. BIMI (merkherkenning)
4. Reputation monitoring (Postmaster, SNDS)
3. DMARC enforcement (p=none → quarantine → reject)
2. DKIM + SPF (auth-fundament)
1. Dedicated sending + tracking subdomain
```

Werk altijd van onder naar boven.

---

## Stap 1: Dedicated sending + tracking subdomein

**Waarom**: elke brand heeft zijn eigen reputation. Als je direct @merk.nl stuurt, vervuil je de hele domein-reputation (inclusief transactionele mail, support, sales).

**Setup**:

- Sending subdomein: `mail.merk.nl` (of `email.merk.nl`, `send.merk.nl`: convention only)
- Tracking subdomein: `track.merk.nl` (of `e.merk.nl`)

In **Klaviyo** → Account → Domains and Sending:
1. Add sending domain → voer `mail.merk.nl` in
2. Klaviyo genereert 3 CNAME-records: 1 voor SPF-alias, 2 voor DKIM
3. Voeg CNAMEs toe in DNS (Cloudflare / registrar)
4. Custom tracking domain: apart record voor `track.merk.nl`
5. Wacht 24-48u propagatie
6. Verify in Klaviyo: moet groen zijn

**Nooit** klaviyo.com of klaviyomail.com als visible from-domain gebruiken: dat is een amateuristisch signaal.

---

## Stap 2: SPF (Sender Policy Framework)

SPF is een TXT-record op je sending-domein dat lists welke mail-servers gemachtigd zijn te verzenden namens jou.

**Klaviyo SPF**:
```
mail.merk.nl.  TXT  "v=spf1 include:_spf.klaviyo.com ~all"
```

**Alignment**: SPF moet aligned zijn met het zichtbare From-domein. Dat betekent: als je stuurt vanuit `mail.merk.nl`, moet het SPF-record op `mail.merk.nl` staan, niet alleen op `merk.nl`.

**~all vs. -all**:
- `~all` (soft fail): email waar geen match is wordt mogelijk gemarkeerd, niet gedropped
- `-all` (hard fail): email wordt gedropped bij geen match

Start met `~all`, na 2 maanden zonder issues naar `-all`. Gebruik geen `+all` ooit (open relay).

**Multiple ESPs**: als je zowel Klaviyo als Shopify-mail (orderconfirmations) stuurt via hetzelfde sending-subdomain, combineer includes:
```
v=spf1 include:_spf.klaviyo.com include:shops.shopify.com ~all
```

**Max 10 DNS-lookups** in SPF (RFC-limit): overschrijd nooit. Check via mxtoolbox.com/spf.aspx.

---

## Stap 3: DKIM (DomainKeys Identified Mail)

DKIM ondertekent elke email met een private key; de public key staat in DNS. Ontvanger-servers verifiëren de handtekening.

**Klaviyo DKIM**: 2 CNAME-records:
```
klaviyo1._domainkey.mail.merk.nl  CNAME  dkim-a.klaviyo.com
klaviyo2._domainkey.mail.merk.nl  CNAME  dkim-b.klaviyo.com
```

**Verify**: `dig TXT klaviyo1._domainkey.mail.merk.nl` → moet key returneren.

**Rotation**: Klaviyo rotteert keys automatisch (2024+). Geen actie nodig, maar check maandelijks of CNAMEs nog actief zijn (soms onverklaarbare DNS-uitval).

---

## Stap 4: DMARC (Domain-based Message Authentication, Reporting & Conformance)

DMARC bundelt SPF + DKIM en definieert wat ontvangers doen met niet-geauthenticeerde mail. **DMARC is sinds feb 2024 verplicht voor senders >5k/dag naar Gmail/Yahoo**.

### De 3 policies

- **p=none**: monitoring only, niemand wordt tegengehouden. Gebruik voor start + eerste 4-8 weken.
- **p=quarantine**: non-compliant mail gaat naar spam. Gebruik na 4-8 weken clean rapport.
- **p=reject**: non-compliant mail wordt gedropped. Gebruik na 3-6 maanden consistente cleanness (voorkomt zero-tolerance mis-configs).

### DMARC-record format

```
_dmarc.merk.nl.  TXT  "v=DMARC1; p=none; rua=mailto:dmarc-reports@merk.nl; ruf=mailto:dmarc-forensic@merk.nl; pct=100; adkim=r; aspf=r; fo=1;"
```

Velden:
- `v=DMARC1`: versie
- `p=none|quarantine|reject`: policy voor ontvanger
- `rua=`: aggregate reports (dagelijks, XML, per domein-send)
- `ruf=`: forensic reports (per failure, kan volume zijn)
- `pct=100`: op 100% van mail enforcement toepassen (kan tussenstap op 10/50/100)
- `adkim=r|s`: DKIM alignment (relaxed / strict)
- `aspf=r|s`: SPF alignment
- `fo=1`: wat triggert forensic reports (1=any fail, 0=all fail)

### DMARC monitoring (essentieel)

Gebruik een DMARC-reporting tool: **Valimail Monitor (gratis)**, **Postmark DMARC (gratis)**, **dmarcian (free tier)**, of **easydmarc**. Deze parsen de XML-rapporten en tonen:
- Welke bronnen namens je domein sturen
- Welke passen/falen DMARC
- Welke je moet authenticeren vs. blokkeren

**Typische vondst**: 3rd-party tools die niet SPF/DKIM-correct zijn (boekhoudtool, support-platform, marketing-tool). Fix of whitelist voor je naar `p=quarantine` springt.

### DMARC-migratie-plan

```
Week 1:    Deploy p=none + rua monitoring
Week 1-4:  Collect + analyze reports, identify alle legitimate senders
Week 5-8:  Fix non-compliant legitimate senders
Week 9:    Migrate to p=quarantine; pct=25
Week 10:   pct=50
Week 12:   pct=100
Maand 6:   Migrate to p=reject; pct=25 (voorzichtig!)
Maand 7-8: pct=100
```

**Nooit** direct van `p=none` naar `p=reject`: daar gaan email-streams kapot.

---

## Stap 5: One-click unsubscribe (RFC 8058)

Sinds feb 2024 verplicht voor Google/Yahoo senders >5k/dag. Klaviyo doet dit automatisch via:

```
List-Unsubscribe: <https://manage.kmail-lists.com/unsubscribe?...>, <mailto:unsub@klaviyo.com>
List-Unsubscribe-Post: List-Unsubscribe=One-Click
```

**Verify** in Klaviyo → verzend test → check email source / headers. Beide headers moeten er zijn.

**Klant-verzoek "verwijder unsubscribe knop" = weigeren**. Wettelijk verplicht + deliverability-killer.

---

## Stap 6: BIMI (Brand Indicators for Message Identification)

BIMI toont je merk-logo in Gmail/Apple Mail inbox naast de afzender. Vereist:

1. DMARC op `p=quarantine` of `p=reject` minimum
2. SVG-logo (conformant aan BIMI 1.2 spec): vierkant, transparent, geen animatie
3. **VMC (Verified Mark Certificate)**: €1500-2500/jaar via DigiCert of Entrust
4. DNS BIMI-record:
```
default._bimi.merk.nl.  TXT  "v=BIMI1; l=https://merk.nl/bimi/logo.svg; a=https://merk.nl/bimi/vmc.pem;"
```

**ROI**: 10-15% open-lift in support-cases, brand-trust boost. Vooral waardevol voor gevestigde merken. Niet essentieel voor startups met beperkt budget.

---

## Stap 7: Reputation monitoring

### Google Postmaster Tools (gratis)

1. Ga naar postmaster.google.com
2. Add domain `merk.nl` (en `mail.merk.nl` apart)
3. Verify via DNS TXT-record
4. Wacht 48u voor data
5. Monitor **daily**:
   - **IP reputation** (High / Medium / Low / Bad): streef High
   - **Domain reputation** (zelfde schaal)
   - **Spam rate**: <0.1% optimaal, >0.3% waarschuwing
   - **Feedback loop**: gebruikers die "Report spam" drukken
   - **Authentication**: SPF/DKIM/DMARC % geauthenticeerd

### Microsoft SNDS (Smart Network Data Services)

Voor Hotmail/Outlook/Live-deliverability. Registreer op sendersupport.olc.protection.outlook.com. Biedt IP-reputation data.

### Overige tools

- **mxtoolbox blacklist check**: wekelijks, per sending-IP en -domein
- **GlockApps**: inbox placement test naar echte mailboxes (Gmail/Outlook/Yahoo)
- **Mail-Tester.com**: spam-score per email (gratis, gebruik per nieuwe flow/template)
- **Litmus Spam Testing**: enterprise, integreert met Klaviyo

---

## Stap 8: List hygiene & complaint management

### Bounce categorieën

- **Soft bounce** (temporary): retry automatisch, na 4-5 fails → suppress
- **Hard bounce** (permanent): immediate suppress. Nooit retry.

Klaviyo doet dit automatisch via bounce-codes. Verify maandelijks: `Account > Analytics > Bounces`.

### Spam complaints (cruciaal)

Elke spam-klacht stuurt negatief signaal naar Gmail/Yahoo. **Target <0.1% per send**, **nooit boven 0.3%**.

Bij >0.3% opeenvolgend:
1. Stop alle sends 24-72u
2. Analyseer welke segment + campaign-type de klachten drijft
3. Tighten sunset-policy (niet-engaged 60d → suppress, niet 90d)
4. Check of signups mogelijk list-gekocht zijn (GDPR-no-go)
5. Verhoog opt-in-kwaliteit (double-opt-in overwegen)

### Sunset-flow

Automatische list-hygiene via **retention-lifecycle-flows** → Sunset flow. Niet-engaged 90d → 1 re-engagement-vraag → na 7d auto-suppress. Dit beschermt reputation.

**Strenge sunset** (60d) bij high-volume B2C senders; **ruime sunset** (180d) bij fashion/luxury met lange buycycle.

---

## Stap 9: IP / Domain warmup (nieuwe ESP of dedicated IP)

### Nieuwe Klaviyo-account (shared IP)
Klaviyo auto-warmt shared IPs. Beperkt risico, maar: **start niet met 50k-send**. Begin met flows (welcome, cart): organisch lage volumes eerst.

### Dedicated IP (alleen voor >100k-sends/maand)
Dedicated IP heeft geen reputation bij start. Warmup-schema (4 weken):

| Week | Dag | Max send volume | Segment |
|---|---|---|---|
| 1 | ma/wo/vr | 1.000 | Top engaged 30d |
| 2 | ma/wo/vr | 5.000 | Engaged 30d |
| 3 | ma/wo/vr | 15.000 | Engaged 60d |
| 4 | alle dagen | 50.000 | Engaged 90d + overige |

Na 4 weken kun je full-send. Tijdens warmup: **geen bulk unengaged**, geen discount-seeker-only sends, alleen hoog-quality traffic.

### Nieuwe sending-subdomain (domain warmup)
Idem schema, maar korter (2 weken). Start klein, stijg geleidelijk.

---

## Stap 10: Troubleshooting deliverability-drops

Checklist bij plotse open-rate daling:

1. **SPF/DKIM/DMARC verify**: nog alle CNAMEs actief?
2. **Postmaster Tools**: reputation change? Spam rate spike?
3. **Recent campaigns**: wat werd gestuurd in de 48u vóór de drop? Naar welk segment?
4. **Spam complaints**: aggregaat per campaign checken
5. **Blacklist**: mxtoolbox check op sending-IP en domein
6. **Content**: recent spam-trigger woorden? Missing plain-text alternative? Te veel images?
7. **Engagement-trend**: was er een uptick in unsubs afgelopen 30d?

Als alles OK: reputation-recovery via 4-6 weken van alleen-engaged-30d sends, geen bulk. Sunset-policy aanscherpen.

---

## Monthly deliverability health-check (template)

```markdown
## Deliverability Health: YYYY-MM

### Authentication
- SPF: [OK / broken]
- DKIM: [OK / broken]
- DMARC policy: [none / quarantine / reject]
- DMARC pct: __%
- BIMI: [active / none]

### Reputation
- Gmail Postmaster domain rep: [High / Medium / Low]
- Gmail IP rep: [High / Medium / Low]
- Microsoft SNDS: [Green / Yellow / Red]
- Blacklist hits: [none / list names]

### Send metrics (30d)
- Total sent: ___
- Inbox placement (GlockApps test): __%
- Bounce rate: __% (target <2%)
- Spam complaint rate: __% (target <0.1%)
- Unsubscribe rate: __% (per send; target <0.5%)

### Actions
1. 
2. 
```

Log per maand in `<klantmap>/retention-lifecycle/deliverability.md`.

---

## Non-negotiables

- **Nooit** DMARC van `p=none` naar `p=reject` zonder minimum 8 weken monitoring + clean rapport
- **Nooit** direct @merk.nl als from-domein voor marketing-mail
- **Nooit** unsubscribe-mechanisme verbergen of verzwakken
- **Nooit** gekochte of gescrapete lijsten uploaden
- **Nooit** een klant met <0.1% complaint rate laten verslechteren zonder escalatie
- **Altijd** DMARC-reports monitoren (min 4 weken na elke policy-change)
- **Altijd** bounce-thresholds respecteren (soft→suppress na 5 fails, hard→immediate)
