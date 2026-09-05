# Hero-Bereich zweispaltig mit Visualisierung

## Was sich ändert

- Der Kopfbereich der Startseite wird auf Desktop in zwei gleich breite Hälften geteilt (50/50), vertikal mittig ausgerichtet.
- Linke Hälfte: unveränderter Text – Hinweiszeile „Beratungshaus aus Hamburg · seit 2009", Überschrift, Absatz und die beiden Schaltflächen.
- Rechte Hälfte: eine neue, ruhige Visualisierung anstelle eines Fotos.
- Die vier Kennzahlen-Karten darunter bleiben exakt wie sie sind.
- Auf Tablet und Handy stehen die beiden Hälften untereinander, Text zuerst; die Visualisierung wird flacher und bleibt lesbar.

## Die Visualisierung

Ein abstraktes „Vom Konzept zum laufenden System"-Diagramm, passend zur bestehenden Bildsprache (helle Fläche, feine 1px-Linien, Cyan nur als Akzent):

- Gerahmte Kachel im gleichen Stil wie die übrigen Kacheln, mit feinem Raster im Hintergrund.
- Darin vier verbundene Stationen (Verstehen → Entscheiden → Umsetzen → Verankern) als kleine Knoten mit Verbindungslinien, dazu zwei kleine Kennwert-Chips (z. B. „Release-Zyklus 2 Wochen", „Reviews 100 %").
- Dezente Bewegung: Linien und Knoten blenden beim Laden gestaffelt ein, ein feiner Lichtpunkt läuft langsam entlang der Verbindung. Bei aktivierter Systemeinstellung „weniger Bewegung" steht alles still.

## Technische Hinweise

- Nur `src/routes/index.tsx` (Hero-Abschnitt) und ggf. eine neue Komponente `src/components/site/HeroVisual.tsx`; Animation als Inline-SVG plus Tailwind/CSS-Keyframes in `src/styles.css`.
- Ausschließlich vorhandene semantische Tokens (`brand`, `hairline`, `card`, `surface`, `muted-foreground`), keine festen Farbwerte.
- Kein neues Bildmaterial, keine Datenanbindung, keine Änderungen an den Kennzahlen-Karten oder anderen Seiten.
