# Topscale GmbH – Website

Helle, moderne und seriöse Mehrseiten-Website mit Ihrem Logo, Akzentfarbe #01b0f1 und KI-generierten Bildern für die Sektionen. Alles ohne Datenbank – das Bewerbungsformular ist ein Mock-up.

## Seiten

1. **Startseite** – Hero mit Logo, Kernaussage ("IT-Consulting und Softwareentwicklung seit 2009"), Leistungsüberblick, Zahlen/Vertrauenselemente, Call-to-Action zum Kontakt.
2. **Leistungen** – IT-Consulting, Softwareentwicklung, Projektmanagement, Prozessmanagement, Qualitätsmanagement; jeweils mit kurzer Beschreibung und Bild.
3. **Über uns** – Firmengeschichte seit 2009, Werte, Standort Hamburg, Geschäftsführer Sebastian Yrjö Küpper.
4. **Karriere** – Warum Topscale, Benefits, Liste passender Stellenanzeigen mit Detailansicht je Stelle (Aufgaben, Profil, Angebot) und Bewerbungsformular (Name, E-Mail, Telefon, Stelle, Anschreiben, Datei-Upload-Feld) mit Erfolgsmeldung – ohne Speicherung.
5. **Kontakt** – Adresse Zirkusweg 1, 20359 Hamburg, kontakt@topscale.gmbh, Kontaktformular (Mock-up), Hinweise zur Erreichbarkeit.
6. **Impressum** – Topscale GmbH, Adresse, Amtsgericht Hamburg HRB 133665, Geschäftsführer, E-Mail.
7. **Datenschutz** – Standardtext-Grundgerüst (allgemein, bitte juristisch prüfen lassen).

Geplante Stellenanzeigen: IT-Consultant (m/w/d), Softwareentwickler Fullstack (m/w/d), Projektmanager (m/w/d), Werkstudent Qualitätsmanagement (m/w/d) – jeweils Hamburg/hybrid.

## Design

- Helles Layout, viel Weißraum, klare Typografie, Akzentfarbe #01b0f1 für Buttons, Links und Details.
- Ihr Logo in Kopfzeile und Fußzeile, zusätzlich als Favicon.
- Kopfzeile mit Navigation (mobil als Menü), Fußzeile mit Kontakt- und Rechtslinks.
- Für jede Hauptsektion ein KI-generiertes Bild: Team/Büro-Situation, Softwareentwicklung, Beratung, Hamburg-Bezug, Karriere.

## Technische Hinweise

- Eigene TanStack-Routen pro Seite plus Stellen-Detailroute mit Slug-Parameter; Stellendaten in einer lokalen TypeScript-Datei.
- Designtokens (Akzentfarbe, Radien, Schatten) in `src/styles.css`; Komponenten nutzen nur semantische Tokens.
- Logo über Lovable Assets eingebunden, Favicon als Datei in `public/`.
- Formulare validieren clientseitig und zeigen eine Bestätigung – kein Backend, kein E-Mail-Versand.
- Pro Seite eigene Titel- und Beschreibungs-Metadaten für Suchmaschinen und Social-Previews.

## Offen

Texte werden von mir plausibel formuliert (inkl. Stellenanzeigen und Benefits); Sie können sie danach jederzeit anpassen. Telefonnummer fehlt mir – sagen Sie sie mir, dann trage ich sie ein.
