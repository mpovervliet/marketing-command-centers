# Prototype-starterkit

Werkende basis voor het klikbare prototype. Kopieer deze map naar de plek waar je bouwt
(bijvoorbeeld `06b_PROTOTYPE/prototype/`) en werk daar verder. Alles is platte HTML, CSS
en JS plus Python-generators zonder externe packages: geen build-stap, geen framework,
draait direct als statische hosting.

## Inhoud

| Bestand | Rol |
|---|---|
| `index.html` | Basispagina met noindex, prototype-label en tokenverwijzing. Startpunt voor elk handmatig scherm |
| `css/theme.css` | Tokenlaag. Vul de waarden uit `07_DESIGN-SYSTEM/Design-Tokens.md`; gebruik nergens anders losse kleurwaarden |
| `js/app.js` | Kleine hulplaag: prototype-label, formulier-onderschepping, reduced-motion |
| `_data/items.json` | Voorbeelddata voor een gegenereerde set |
| `_gen_items.py` | Voorbeeldgenerator: JSON in, pagina's uit |
| `_gen_searchindex.py` | Bouwt de zoekindex over de definitieve bestandsset. Draait altijd als laatste |
| `deploy.ps1` / `deploy.sh` | Toevoegen, vastleggen met tijdstempel, pushen in 1 commando |
| `robots.txt` | `Disallow: /` voor de hele publicatie |
| `.nojekyll` | Voorkomt dat de hostinglaag mappen met een underscore negeert |

## Eerste keer opzetten

Bepaal eerst onder welk account of welke organisatie deze repo komt: zie stap 1 van
`../Publish-Protocol.md`. Controleer dat je met dat account bent ingelogd voordat je de
repo aanmaakt, en zet de commit-identiteit per repo in plaats van globaal:

```
git config user.name "<naam>"
git config user.email "<adres dat bij dit account hoort>"
```

Daarna:

```
git init
git add .
git commit -m "Prototype baseline"
git branch -M main
git remote add origin <repo-url>
git push -u origin main
```

Zet daarna de statische publicatie aan op de hoofdbranch, root van de repo. Bij een open
publicatie: neutrale repo-naam zonder klantmerk, en `robots.txt` plus de noindex-meta
laten staan. Zie `../Publish-Protocol.md`.

## Dagelijks ritme

```
python _gen_items.py
python _gen_searchindex.py
./deploy.ps1        # of: bash deploy.sh
```

Daarna de statuscheck op vijf URL's uit `../Prototype-QA-Checklist.md`, en de QA-scorekaart
in `../Prototype-Register.md`.

## Regels die niet onderhandelbaar zijn

- Geen echte persoonsgegevens of klantdata in de bestanden of de JSON
- Geen analytics-, advertentie- of consent-plichtige tags van de opdrachtgever
- Geen formulier dat werkelijk iets verstuurt: `app.js` onderschept elke submit
- Kleuren en spacing alleen via de tokens in `theme.css`
- Gegenereerde bestanden nooit met de hand editen: pas de JSON of de generator aan
