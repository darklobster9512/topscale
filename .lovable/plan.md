# Team-Seite neu gestalten

## Ziel
Die Seite "Unser Team" wirkt hochwertiger und ruhiger: pro Person eine Karte mit Initialen-Kreis, Bereichs-Label, Name, Rolle und einem kurzen Schwerpunkt-Satz.

## Was sich ändert

**Kopfbereich**
- Bleibt inhaltlich, ergänzt um eine schmale Zeile mit Team-Kennzahlen (15 Kolleginnen und Kollegen, 5 Bereiche, seit 2009).

**Personenkarten**
- Kreis mit den Initialen in der Akzentfarbe, darunter Name, Rolle und ein kurzer Schwerpunkt-Satz.
- Kleines Bereichs-Label oben in der Karte.
- Sanfter Hover: Rahmen nimmt die Akzentfarbe an, Karte hebt sich leicht.

**Aufbau der Seite**
- Statt fünf einzelner Abschnitte mit wechselndem Hintergrund: ein durchgehendes, gleichmäßiges Raster (drei Karten pro Reihe auf Desktop, zwei auf Tablet, eine auf Handy), gruppiert nach Bereich mit einer klaren Zwischenüberschrift je Gruppe.
- Alle Karten einer Reihe gleich hoch, keine einzelne Karte allein in einer letzten Reihe: Gruppen mit unpassender Personenzahl werden über die Kartenbreite ausgeglichen.
- Geschäftsführung wird als erste Gruppe etwas breiter dargestellt, damit die einzelne Karte nicht verloren wirkt.

**Abschluss**
- Der Hinweis zur Einarbeitung und der Link zu den offenen Stellen bleiben, bekommen aber die gleiche Kachel-Optik wie die übrigen Seiten.

## Inhalte
- Für alle 15 Personen schreibe ich je einen kurzen Schwerpunkt-Satz (Platzhalter, jederzeit austauschbar), z. B. "Prozessanalyse und Zielbilder" oder "Onboarding und Wissenstransfer".
- Namen und Rollen bleiben unverändert.

## Technische Umsetzung
- `src/data/team.ts`: Feld `focus: string` zum Typ `TeamMember` ergänzen und für alle Einträge füllen; Initialen werden im Frontend aus dem Namen berechnet.
- `src/routes/team.tsx`: neue Struktur mit einheitlichem Raster, Gruppen-Zwischenüberschriften, Kennzahlenzeile im Kopf; weiter `PageHero`, `Reveal`, `CtaBand` und ausschließlich die Tokens aus `src/styles.css` (kein Hardcoding von Farben).
- Keine neuen Bilder, keine Datenanbindung; Metadaten der Route bleiben bestehen.
- Prüfung über Screenshot in Desktop-Breite und Statuscode-Check für `/team`.
