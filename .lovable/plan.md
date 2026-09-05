# Seitentitel, Beschreibungen und neues Favicon

## Neues Favicon
- Das angehängte Bild (blaue Treppen-Marke) wird als quadratisches Symbol in `public/favicon.png` abgelegt, zusätzlich in 32 px als `public/favicon.ico`, damit Google und ältere Browser es zuverlässig finden.
- Der Verweis im Seitenkopf wird auf die neuen Dateien gesetzt (inkl. `apple-touch-icon` für Lesezeichen auf dem Handy).
- Hinweis: Google zeigt Favicons erst nach dem nächsten Besuch des Crawlers an – und nur für eine veröffentlichte Adresse.

## Titel und Beschreibungen
Jede Seite bekommt einen eigenen, kurzen Titel (unter 60 Zeichen) und eine Beschreibung (unter 160 Zeichen), jeweils mit passendem Social-Text:

| Seite | Titel |
| --- | --- |
| Startseite | IT-Consulting & Softwareentwicklung Hamburg | Topscale |
| Leistungen | Leistungen: Consulting, Software, Qualität | Topscale |
| Vorgehen | Vorgehen in Projekten | Topscale GmbH |
| Branchen | Branchen: Handel, Logistik, Industrie | Topscale |
| Über uns | Über uns – Beratungshaus aus Hamburg | Topscale |
| Unser Team | Unser Team – 15 Fachleute | Topscale GmbH |
| Karriere | Karriere & Stellenangebote in Hamburg | Topscale |
| Stellenanzeigen | Stellentitel + „Karriere bei Topscale“ |
| Bewerbung | Jetzt bewerben (bleibt von der Suche ausgenommen) |
| Kontakt | Kontakt – Topscale GmbH, Hamburg |
| Impressum / Datenschutz | wie bisher, kürzer gefasst |

Zu lange Titel werden gekürzt, doppelte Formulierungen entfernt.

## Damit Google die Seiten findet
- Auf jeder Seite eine „Kanonische Adresse“ (sagt Google, welche Adresse zählt).
- Eine Firmen-Angabe (Organisation mit Name, Adresse, E-Mail, Logo) im Seitenkopf der Startseite, damit Google Firmendaten sauber erkennt.
- Die Seitenübersicht (`sitemap.xml`) und der Eintrag in `robots.txt` folgen, sobald die Seite unter ihrer endgültigen Adresse veröffentlicht ist; vorher würde dort eine falsche Adresse stehen.

## Technische Details
- Titel/Beschreibungen liegen jeweils in `head()` der Route-Datei unter `src/routes/`; `og:title`/`og:description` mitziehen, `canonical` nur auf den Blattseiten als relativer Pfad.
- Favicon: `magick` auf das Upload anwenden (64 px PNG + ICO), `links` in `src/routes/__root.tsx` anpassen, alte `public/favicon.png` ersetzen.
- JSON-LD `Organization` als `scripts`-Eintrag in `src/routes/index.tsx`.
- Kein `og:image`, solange es kein passendes Bild in Freigabegröße unter fester Adresse gibt.
