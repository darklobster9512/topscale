# Navigation, Vorgehen-Seite und Unser Team

## 1. Startseite in der Navigation

Die Navigation beginnt künftig mit "Startseite", danach Leistungen, Branchen, Referenzen, Vorgehen, Über uns, Unser Team, Karriere. Das Logo bleibt zusätzlich ein Link zur Startseite. Im Menü auf dem Handy erscheint "Startseite" ebenfalls als erster Punkt.

## 2. Insights wird zu "Vorgehen"

Die Insights-Seite und die drei Artikelseiten entfallen. An ihrer Stelle entsteht eine Seite "Vorgehen" unter `/vorgehen` mit:

- Kurzer Einleitung zur Arbeitsweise
- Den vier Projektphasen (Analyse, Konzept, Umsetzung, Betrieb) als große Kacheln mit Nummer, Ziel, Ergebnis und Dauer
- Einem Abschnitt "Wie wir zusammenarbeiten": feste Ansprechpartner, transparente Aufwände, Dokumentation, Wissenstransfer
- Einem Abschnitt zu Qualität und Sicherheit (Reviews, Testautomatisierung, Datenschutz)
- Abschluss mit dem bestehenden Kontakt-Band

Alle Verweise auf Insights (Startseite, Footer, Verlinkungen) zeigen dann auf die Vorgehen-Seite.

## 3. Neue Seite "Unser Team"

Neue Seite unter `/team`, ohne Fotos. Kurze Einleitung, dann eine Kachel-Übersicht mit 14 Personen: Name, Rolle, Bereich. Gruppiert in Geschäftsführung, Beratung & Projekte, Softwareentwicklung, Qualität & Prozesse sowie Interne Organisation – darin ausdrücklich eine Person für Recruiting und eine für Einarbeitung/Onboarding. Abschließend ein kurzer Hinweis mit Link zur Karriere-Seite.

Namen und Rollen sind erfunden und dienen als Platzhalter – sagen Sie mir gern die echten Namen, dann tausche ich sie aus.

Beispielhafte Besetzung:

- Sebastian Yrjö Küpper – Geschäftsführer
- Katrin Ahlers – Leitung Beratung
- Michael Brandt – Senior Consultant Prozessmanagement
- Jana Vosskühler – Consultant Qualitätsmanagement
- Tobias Reinhardt – Leitung Softwareentwicklung
- Nils Petersen – Senior Softwareentwickler
- Lena Hoffmann – Softwareentwicklerin Frontend
- Daniel Krüger – Softwareentwickler Backend
- Miriam Sandner – Cloud- und Plattform-Engineering
- Christoph Baumann – Projektleiter
- Sarah Lindemann – Projektleiterin
- Annika Wolters – Recruiting und Personalgewinnung
- Fabian Ostermann – Einarbeitung und Wissenstransfer
- Petra Sieveking – Kaufmännische Leitung

## Technische Hinweise

- Neue Routen `src/routes/vorgehen.tsx` und `src/routes/team.tsx`, jeweils mit eigenem `head()` (Title, Description, og:title, og:description).
- `src/routes/insights.index.tsx` und `src/routes/insights.$slug.tsx` werden gelöscht, das `insights`-Array in `src/data/content.ts` entfernt; `process` wird für die Vorgehen-Seite erweitert (Ergebnis/Dauer je Phase).
- Neues `src/data/team.ts` mit Typ `TeamMember` (name, role, group) und Gruppenreihenfolge.
- `nav`-Array in `src/components/site/Header.tsx` und die Spalten in `Footer.tsx` anpassen; Insights-Teaser auf `src/routes/index.tsx` wird zu einem Vorgehen-Teaser.
- Bestehende Bausteine (`PageHero`, `Reveal`, `tile`, `CtaBand`, `grid-texture`) werden weiterverwendet, keine neuen Farben.
- Verifikation: Statuscodes aller Routen sowie `tsgo --noEmit`.
