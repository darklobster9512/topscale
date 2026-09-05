# Enterprise-Upgrade der Topscale-Website

Ziel: ein Auftritt, der wie ein etabliertes Beratungshaus wirkt – ruhig, hell, präzise, mit Tiefe im Inhalt und feiner Bewegung. Ihre Auswahl ist gesetzt: helle Cloud-White-Basis, Akzent #01b0f1, Schriftpaar Space Grotesk (Überschriften) und DM Sans (Text), Bento-Grid-Struktur.

## Visuelles Fundament

- Neue Farb- und Typo-Token: sehr helles Grundweiß, feine Graustufen für Flächen und Linien, Cyan nur als gezielter Akzent (Buttons, Marker, Zahlen, Hover).
- Feinere Details: 1px-Rahmen statt Schatten-Kästen, größere Abstände, größere Überschriften mit engem Zeichenabstand, konsistente Eckenradien.
- Bento-Grid als Leitmotiv: Startseite und Übersichtsseiten bestehen aus Kacheln unterschiedlicher Größe (Kennzahlen, Leistung, Zitat, Bild, Branchen) statt gleichförmiger Karten-Reihen.
- Kopfzeile schlanker mit Untermenü für Leistungen; Fußzeile mehrspaltig mit Kontakt, Leistungen, Karriere, Rechtliches.
- Zusätzliche generierte Bilder in einheitlicher heller Bildsprache, plus ein dezentes Raster-/Gradient-Muster als Hintergrundtextur.

## Neue Inhalte

- **Startseite**: Aussagekräftiger Hero mit Kernversprechen, Bento-Block mit Kennzahlen und Leistungshighlights, Branchen-Leiste, Vorgehensmodell in 4 Schritten, Referenz-Zitate (anonymisierte Beispielprojekte), Insights-Anriss, Abschluss-CTA.
- **Leistungen**: Übersichtsseite mit Bento-Kacheln plus je Leistung ein eigener Abschnitt mit Ergebnissen, Vorgehen, typischen Fragestellungen und Technologien.
- **Branchen** (neu): Handel, Logistik, Industrie, öffentlicher Sektor, Finanzdienstleistung – je kurzer Nutzenblock.
- **Referenzen** (neu): drei bis vier anonymisierte Projektbeispiele mit Ausgangslage, Vorgehen, Ergebnis und Kennzahl.
- **Über uns**: Zeitleiste seit 2009, Werte, Geschäftsführung, Zahlen, Standortblock Hamburg.
- **Insights** (neu): Übersicht mit 3–4 Fachbeiträgen und Detailseiten (Beispieltexte, klar als Beispiel gekennzeichnet).
- **Karriere**: stärkerer Einstieg, Benefits als Bento, Bewerbungsprozess in Schritten, Stellenliste mit Filter nach Bereich, Detailseiten mit mehrstufigem Bewerbungsformular (Angaben, Unterlagen, Bestätigung) – weiter reines Mock-up.
- **Kontakt**: Ansprechweg-Kacheln, strukturiertes Formular mit Budget-/Zeitrahmen-Feldern, Erwartungsmanagement, Standortkarte als Abbildung.
- **FAQ** (neu, auf Kontakt integriert): häufige Fragen zu Zusammenarbeit, Vertragsmodellen, Datenschutz.
- Impressum und Datenschutz bleiben inhaltlich, werden optisch angepasst.

## Bewegung

- Sanftes Einblenden von Abschnitten beim Scrollen, gestaffelt für Kacheln.
- Zählanimation für Kennzahlen, feine Hover-Zustände auf Kacheln und Links.
- Bewegung bleibt zurückhaltend und respektiert die Systemeinstellung „weniger Bewegung".

## Technische Hinweise

- Designtokens komplett in `src/styles.css` neu gesetzt (Farben in oklch, Font-Token, Radien, Schatten, Grid-Hilfsklassen); Komponenten nutzen ausschließlich semantische Token.
- Wiederverwendbare Bausteine unter `src/components/site/`: Section, BentoGrid, StatCounter, Reveal (Scroll-Animation via IntersectionObserver), Pill, QuoteCard, ProcessSteps, Accordion für FAQ.
- Neue Routen: `/branchen`, `/referenzen`, `/insights`, `/insights/$slug`; Mock-Daten unter `src/data/`.
- Filter auf der Karriereseite und das mehrstufige Bewerbungsformular arbeiten rein clientseitig, ohne Datenbank oder Versand.
- Pro Seite eigene Titel-, Beschreibungs- und Social-Metadaten; strukturierte Daten (Organisation, Stellenanzeigen) für Suchmaschinen.
