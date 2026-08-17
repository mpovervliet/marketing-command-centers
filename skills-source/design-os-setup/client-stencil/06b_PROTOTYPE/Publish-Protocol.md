# Publish-Protocol [KLANT]
Versie: 0.1 (stencil)
Status: TEMPLATE, invullen bij de eerste publicatie

Publiceren is een beslissing, geen handeling. Dit document legt vast in welke modus het
prototype staat, wie het mag zien en wat er moet gebeuren voordat die kring groeit.

## Huidige stand

| Veld | Waarde |
|---|---|
| Account / organisatie | [eigen / bureau: naam / klant: naam] |
| Reden voor dit account | [contractpartij, plus eventuele afwijking met akkoord] |
| Modus | [open / beveiligd] |
| URL | [AANVULLEN] |
| Repo | [AANVULLEN, neutrale naam zonder klantmerk bij open] |
| Commit-identiteit in deze repo | [AANVULLEN, e-mailadres dat bij dit account hoort] |
| Toegestane kring | [AANVULLEN] |
| Vervaldatum van de link | [AANVULLEN] |
| Bij einde opdracht | [overdragen aan / archiveren] |
| Besluit gelogd in Decision-Log | [D-nummer] |

## Stap 1: onder wiens account

Het account volgt de contractpartij, niet het gemak. Wie de opdracht factureert, bezit de
repo. Drie routes:

| Route | Wanneer | Let op |
|---|---|---|
| Eigen account | Eigen project, eigen prospect, pitchmateriaal of methodedemo zonder klantnaam | Zit er toch klantmateriaal in, dan is dit niet de route |
| Bureau-organisatie | Klantwerk via een bureau, het bureau is contractpartij | Mag je daar zelf een repo aanmaken of loopt dat via een beheerder? Vraag dit in de intake |
| Klant-organisatie | De klant wil het eindresultaat in eigen beheer of heeft eigen governance | Vaak strengere instellingen: publieke repos of publicatie kunnen op organisatieniveau uitstaan |

Drie vragen, in deze volgorde:

1. Wie is de contractpartij? Dat account is de standaard.
2. Mag daar publiek gepubliceerd worden en mag jij zelf een repo aanmaken? Zo nee: aanvraag
   indienen en de doorlooptijd inplannen, niet omzeilen.
3. Staat er klantmateriaal in (merknaam, foto's, cijfers)? Zo ja: nooit een persoonlijk
   account, ook niet tijdelijk.

Werkregels bij meerdere accounts naast elkaar:

- Zet de commit-identiteit per repo, niet globaal, anders staat je privé-adres in de
  historie van een bureau-repo.
- Wissel expliciet van ingelogd account voordat je de repo aanmaakt. Een repo onder het
  verkeerde account is later een overdracht, geen hernoeming.
- Een repo verplaatsen naar een andere organisatie behoudt de historie maar verandert de
  publicatie-URL: elke eerder gedeelde link breekt. Kies daarom vooraf.

## Stap 2: de twee modi

| Modus | Wanneer | Harde eisen |
|---|---|---|
| Open (statische hosting op publieke repo) | Alleen intern: de lead, het projectteam, de bouwers | Neutrale repo-naam zonder klantmerk; `robots.txt` met `Disallow: /`; `<meta name="robots" content="noindex,nofollow">` op elke pagina; canonical wijst niet naar het klantdomein zonder noindex; `.nojekyll` in de root |
| Beveiligd (toegangslaag of Basic Auth) | Elk deelmoment met de opdrachtgever, een bredere kring of externe partijen | Wachtwoord of toegangslijst; link met vervaldatum; framing-tekst in het deelbericht; QA-oordeel DELEN |

Een open link is niet vindbaar via zoekmachines zolang niemand ernaar linkt, maar wel
toegankelijk voor iedereen die hem doorgestuurd krijgt. Doorsturen is precies wat er met
een goed prototype gebeurt. De overstap naar beveiligd gebeurt vóór het eerste
klant-deelmoment, niet erna.

## Verplichte framing bij elk deelmoment

Deze drie zinnen staan in het bericht zelf, niet alleen mondeling:

1. Dit is een prototype ter toetsing van beslissingen, geen opgeleverde website.
2. De inhoud is deels demonstratief; teksten, cijfers en beelden zijn nog niet definitief.
3. Wat wel en niet vaststaat leest u in de begeleidende samenvatting.

Zet daarnaast een klein vast label in het prototype zelf (linksboven, altijd zichtbaar)
dat zegt dat dit een prototype is. Dat label reist mee als de link wordt doorgestuurd.

## Deploy-ritme

1. Wijzigingen lokaal, dan `deploy.ps1` (Windows) of `deploy.sh`: toevoegen, vastleggen
   met tijdstempel, pushen in 1 commando.
2. De hostingroute bouwt na elke push naar de hoofdbranch automatisch, in de orde van een
   minuut.
3. Statuscheck op vijf vaste URL's vóór elk deelmoment: startpagina, een gegenereerde
   detailpagina, een formulierpagina, een pagina met zoekfunctie, en één diep genest pad.
   Alle vijf 200, anders niet delen.
4. Noteer de commit-hash bij de QA-scorekaart in `Prototype-Register.md`.

Sessie-beperking om vooraf in te plannen: een cloud-sessie kan doorgaans geen bulk-content
pushen. De eerste publicatie en grote content-pushes doet de lead lokaal met het
deploy-script; de sessie levert de bestanden en de exacte commando's.

## Intrekken

Bij einde traject of bij een verlopen link: repo op privé of de publicatie uitzetten,
datum en reden in het Decision-Log, en de laatste versie archiveren met commit-hash zodat
een deelmoment achteraf reproduceerbaar blijft.
