# Telefonnummer 040 573078440 ergänzen

## Ziel
Die Telefonnummer erscheint an drei Stellen und ist überall antippbar (Wählen per Klick).

## Änderungen
- **Impressum**: im Abschnitt "Kontakt" unter der E-Mail-Adresse eine Zeile "Telefon: 040 573078440".
- **Kontakt-Seite**: die E-Mail-Kachel erhält zusätzlich die Telefonnummer als zweite Zeile (gleiche Gestaltung, Akzentfarbe, Klick zum Anrufen).
- **Footer**: in der Adressblock-Spalte eine Zeile mit der Telefonnummer über bzw. unter der E-Mail-Adresse.
- Zusätzlich wird die Nummer in der Kontakt-Seitenbeschreibung für Suchmaschinen und in den Firmenangaben der Startseite (strukturierte Daten) mitgeführt.

## Technisch
- Dateien: `src/routes/impressum.tsx`, `src/routes/kontakt.tsx`, `src/components/site/Footer.tsx`, `src/routes/index.tsx` (JSON-LD `telephone`).
- Links als `tel:+4940573078440`, Anzeige als `040 573078440`.
