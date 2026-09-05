# Echte Stockfotos und neue Hero-Kennzahlen

## Hero-Bereich der Startseite
- Das große Teambild aus dem Hero entfernen.
- Die Kennzahlen darunter als vier gleich große, gleich breite Karten in einer Reihe anordnen (auf dem Handy zwei pro Reihe, auf dem Tablet zwei, auf dem Desktop vier).
- Inhalte der vier Karten: 15+ Jahre am Markt, 120+ umgesetzte Projekte, 94 % Folgeaufträge, Standort Hamburg. Die mitzählende Zahlen-Animation bleibt erhalten.
- Der Hero wird dadurch ruhiger und textbetont: Kurzhinweis, Überschrift, Einleitung, zwei Buttons, darunter die Kennzahlenreihe.

## Echte Stockfotos statt generierter Bilder
Alle acht generierten Bilder werden durch echte, kostenlos und kommerziell nutzbare Stockfotos (Unsplash-Lizenz) ersetzt. Die Bilder werden heruntergeladen, auf einheitliche Breite gebracht und unter denselben Dateinamen abgelegt, damit alle Seiten unverändert weiterlaufen:

| Verwendung | Motiv |
| --- | --- |
| Leistungen, Über uns | Besprechung im hellen Büro |
| Leistungen | Beratungssituation am Tisch |
| Leistungen | Entwicklerarbeitsplatz mit Code |
| Über uns | Modernes, helles Büro |
| Kontakt, Über uns | Hamburger Hafen / Elbphilharmonie |
| Karriere | Team im Gespräch |
| Branchen | Industrie- bzw. Logistikumfeld |
| Insights | Schreibtischsituation mit Notizen |

Auswahlkriterien: helle, sachliche, europäisch wirkende Aufnahmen ohne Farbstiche, passend zur ruhigen Bildsprache der Seite.

## Technische Hinweise
- Bilder per `curl` von Unsplash (direkte Bild-URLs, feste Breite ~1600 px) nach `src/assets/` laden; bestehende Dateinamen beibehalten, sodass die Importe in `index.tsx`, `leistungen.tsx`, `ueber-uns.tsx`, `branchen.tsx`, `insights.index.tsx`, `karriere.index.tsx` und `kontakt.tsx` gleich bleiben.
- `width`/`height`-Attribute an die echten Seitenverhältnisse anpassen, damit kein Layout-Sprung entsteht.
- Auf der Startseite den Bild-Import `hero-team.jpg` entfernen und das Kennzahlen-Grid auf `grid-cols-2 lg:grid-cols-4` mit gleichen Kartenhöhen umstellen.
- Alt-Texte an die neuen Motive anpassen.
- Prüfen: Build sowie Aufruf aller Seiten mit Statuscode 200.

## Nicht Teil dieser Änderung
- Texte, Farben, Typografie und Seitenstruktur bleiben unverändert.
- Das Logo bleibt wie es ist.
