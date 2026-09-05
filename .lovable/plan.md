# Alle Seiten für die Handy-Ansicht feinschleifen

Ich habe jede Seite bei Handybreite (390 px) geprüft: nichts läuft aus dem Bild heraus, es gibt kein seitliches Scrollen. Was fehlt, ist der Feinschliff – Schriftgrößen, Abstände, Bedienbarkeit mit dem Daumen.

## 1. Kopfbereiche aller Seiten
- Überschriften auf dem Handy eine Stufe kleiner, damit Zeilen nicht so oft brechen.
- Weniger Luft über und unter dem Kopfbereich (aktuell wirkt viel Leerraum, bevor der Inhalt kommt).
- Startseite: die beiden Schaltflächen „Erstgespräch vereinbaren" und „Leistungen ansehen" auf dem Handy über die ganze Breite und gleich breit, mittig beschriftet.
- Startseite: die Ablauf-Grafik rechts wird auf dem Handy kompakter; die kleine Marke „laufender Betrieb" sitzt künftig unter der Überschrift statt daneben, damit sie sich nicht überlagert.

## 2. Inhaltsbereiche
- Kacheln bekommen auf dem Handy etwas weniger Innenabstand, damit mehr Text pro Bildschirm passt.
- Abschnittsabstände einheitlich etwas kleiner als auf dem Desktop.
- Bilder auf dem Handy niedriger, damit sie nicht den halben Bildschirm einnehmen.
- Über uns: der Kennzahlenblock (15+ / 120+ / 94 %) wird auf dem Handy zu drei gleichmäßigen Spalten ohne Quetschen.
- Unser Team: die Zahlenzeile oben (15 / 5 / 2009) mit kleineren Zahlen und Zeilenumbruch-Schutz.
- Vorgehen und Branchen: Kacheln einspaltig mit gleichmäßigem Abstand.

## 3. Karriere und Formulare
- Stellenkarten und Detailseite: Eckdaten-Box wandert auf dem Handy über die Beschreibung, „Jetzt bewerben" als volle Breite und zusätzlich als am unteren Rand haftende Schaltfläche, damit sie immer erreichbar ist.
- Bewerbungsformular: Felder bleiben einspaltig, Beschriftungen und Felder mit größerer Tipp-Fläche; Absenden-Schaltfläche über die ganze Breite.
- Kontaktformular ebenso.

## 4. Menü und Fußzeile
- Menüfläche oben rechts vergrößern (bequemere Tipp-Fläche).
- Offenes Menü: Einträge mit mehr Höhe, „Kontakt" als hervorgehobene Schaltfläche am Ende.
- Fußzeile: Spalten untereinander mit klaren Trennlinien, Links mit ausreichender Tipp-Höhe.

## Technisches
- Reine Darstellungsänderungen: mobile-first Tailwind-Klassen, Desktop-Verhalten bleibt über `md:`/`lg:` unverändert. Kein Umbau der Inhalte oder Logik.
- Betroffen: `src/components/site/PageHero.tsx`, `Header.tsx`, `Footer.tsx`, `HeroVisual.tsx`, `CtaBand.tsx`, `Stat.tsx` und alle Routen unter `src/routes/`.
- Ggf. eine mobile Variante der `.section`- und `.tile`-Abstände in `src/styles.css`.
- Kontrolle: Playwright-Aufnahmen aller 12 Seiten bei 390 px und 430 px Breite, Prüfung auf seitliches Überlaufen und Tipp-Flächen ≥ 44 px; anschließend Desktop-Kontrolle bei 1440 px, damit dort nichts kippt.
