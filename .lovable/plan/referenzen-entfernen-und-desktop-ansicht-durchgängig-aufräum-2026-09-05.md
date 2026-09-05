# Referenzen entfernen und Desktop-Ansicht durchgängig aufräumen

## 1. Referenzen-Seite entfernen

- Seite `Referenzen` samt Route löschen.
- Verweise entfernen: Navigation (Kopfbereich), Fußzeile, Startseite (zweiter Button im Kopfbereich, Abschnitt „Projektbeispiele", Link „Alle Projektbeispiele").
- Der Abschnitt auf der Startseite, der bisher zwei Projektbeispiele zeigte, wird durch einen Abschnitt „Unser Team" ersetzt (Kurztext + Link zur Team-Seite) mit zwei gleich großen Kacheln und einem Bild, damit die Zeile vollständig gefüllt ist.

## 2. „Startseite" aus der Menüleiste entfernen

Das Logo bleibt der Weg zurück zur Startseite. Die Navigation beginnt danach mit „Leistungen".

## 3. Desktop-Layout korrigieren (alle Seiten)

Grundregel für alle Seiten: Eine Kachelreihe ist entweder vollständig gefüllt oder eine bewusst gesetzte große Kachel füllt den Rest. Keine einzelne Karte, die allein in einer letzten Reihe steht. Alle Karten einer Reihe gleich hoch.

Konkret pro Seite:

- **Vorgehen**: die vier Phasen stehen aktuell 3 + 1. Neu als 2 x 2 in gleich großen Kacheln, Bild darüber über die volle Breite. „Qualität & Sicherheit" bleibt vierspaltig mit gleich hohen Karten.
- **Branchen**: fünf Branchen plus großes Bild ergeben Lücken. Neu: Bild über die volle Breite, darunter die Branchen in einem gleichmäßigen Raster ohne Restlücke.
- **Über uns**: Wertekacheln, Bild und Kennzahlenblock so ordnen, dass jede Reihe geschlossen ist; Kennzahlen gleichmäßig verteilt.
- **Startseite**: Kennzahlenreihe, Leistungsraster und Vorgehensraster auf gleiche Höhen und Abstände bringen; der untere Vorgehens-/Bürobereich wird zu einer geschlossenen Reihe.
- **Unser Team**: Gruppen mit ungerader Personenzahl füllen die letzte Reihe sauber (gleiche Kartenhöhe, linksbündig ohne wirkende Lücke).
- **Leistungen, Karriere (Liste und Detail), Kontakt, Impressum, Datenschutz**: gleiche Textbreiten, gleiche Abschnittsabstände, gleich hohe Karten, Formularfelder in geraden Zweierreihen.

## Technisches

- Datei `src/routes/referenzen.tsx` löschen, `references` aus `src/data/content.ts` entfernen, Importe in `src/routes/index.tsx` anpassen; `src/routeTree.gen.ts` regeneriert sich.
- Navigationseintrag `/` aus `navItems` in `src/components/site/Header.tsx` und `/referenzen` in `Footer.tsx` entfernen.
- Rasterklassen angleichen: 4er-Sets `md:grid-cols-2 lg:grid-cols-4` oder `md:grid-cols-2`, 3er/6er-Sets `lg:grid-cols-3`; `h-full` und `flex flex-col` auf allen Kacheln, damit Höhen in einer Reihe gleich sind.
- Kontrolle: alle Routen per Statuscode prüfen (`/referenzen` muss 404 liefern), Desktop-Screenshots (1440 px) je Seite, `tsgo --noEmit` ohne neue Fehler.
