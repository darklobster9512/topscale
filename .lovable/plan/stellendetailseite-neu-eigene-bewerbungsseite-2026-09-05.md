# Stellendetailseite neu + eigene Bewerbungsseite

## Was entsteht

**1. Stellendetailseite im Referenz-Aufbau**
- Kopfbereich mit Bereichs-Label, Titel, Kurzbeschreibung und Brotkrümel-Navigation (Startseite › Karriere › Stellentitel).
- Zweispaltiger Inhalt: links breiter Textblock mit "Über die Position" und den drei numerierten Abschnitten (Ihre Aufgaben, Ihr Profil, Was wir bieten), rechts eine mitlaufende Eckdaten-Karte (Standort, Modell, Arbeitszeit, Gehalt) mit Schaltfläche „Jetzt bewerben" und E-Mail-Kontakt.
- Abschluss-Band „Noch Fragen zur Rolle?" mit den Schaltflächen „Jetzt bewerben" und „Andere Stellen".
- Das bisherige dreistufige Formular verschwindet von der Detailseite und wird durch die neue Bewerbungsseite ersetzt.

**2. Neue Seite `/karriere/bewerbung`**
- Eigene Seite mit Kopfbereich und Brotkrümel-Navigation, ein kompaktes Formular: Vorname, Nachname, E-Mail, Telefon (alle Pflicht), Stelle (Auswahl, inkl. „Initiativbewerbung", per Link vorbelegt) und Anstellungsart (Teilzeit / Minijob).
- Absenden übermittelt die Angaben an dieselbe Schnittstelle wie im Referenzprojekt; Erfolgs- und Fehlermeldung als Hinweis-Einblendung, Ladezustand auf der Schaltfläche.
- Datenschutzhinweis mit Link zur Datenschutzerklärung über der Schaltfläche.

**3. Stellenangebote**
- Neue Stelle „Online-Prozesstester:in für digitale Anwendungen (m/w/d)" wird als erste Stelle aufgenommen (remote, Minijob/Teilzeit, 5–25 Std./Woche, 29 €/Stunde, Bereich Qualitätsmanagement) — Text aus dem Referenzprojekt, auf Topscale angepasst.
- Die bestehenden vier Stellen bleiben und werden um die neuen Angaben (Modell, Arbeitszeit, Gehaltsband, Status) ergänzt, damit die Eckdaten-Karte überall gefüllt ist.
- Die Karriere-Übersicht zeigt zusätzlich die Eckdaten und einen zweiten Weg direkt zur Bewerbung.

**4. Auffindbarkeit**
- Jede Stellenseite behält ihren eigenen Seitentitel und Beschreibungstext; die Bewerbungsseite bekommt eigene Angaben plus „nicht indexieren", damit sie Suchergebnisse nicht verwässert.
- Auf den Stellenseiten kommt eine strukturierte Job-Auszeichnung dazu, damit die Stellen in Google für Jobs erscheinen können.

## Technische Details

- `src/data/jobs.ts`: Typ `Job` um `model`, `workingHours?`, `salary?`, `status?`, `description` (Langtext) erweitern; neuer Eintrag `online-prozesstester` an erster Position; bestehende vier Einträge um die neuen Felder ergänzen.
- `src/routes/karriere.$slug.tsx`: neu aufgebaut nach `KarriereDetail.tsx` des Referenzprojekts, aber mit den Tokens dieses Projekts (`tile`, `hairline`, `brand`, `muted-foreground`, Space Grotesk) statt Hex-Werten. Grid `lg:grid-cols-12` (8/4), Sidebar `lg:sticky lg:top-28`. `ApplicationForm` wird hier nicht mehr eingebunden; `CtaBand` erhält optionale Props für Titel/Text/Ziele.
- Neue Route `src/routes/karriere.bewerbung.tsx` mit `createFileRoute("/karriere/bewerbung")`. Sie muss vor `karriere.$slug` greifen — statische Segmente haben in TanStack Router Vorrang, kein Sonderfall nötig. Vorbelegung über Suchparameter `?stelle=` mit `validateSearch`.
- Formularfelder mit vorhandenen shadcn-Bausteinen (`input`, `label`, `select`); Rückmeldungen über `sonner` (Toaster ist in `__root.tsx` zu mounten, falls noch nicht vorhanden).
- Übermittlung: `fetch` per `FormData` an `https://laozvnaupdecerpvwzmh.supabase.co/functions/v1/submit-application` mit `Authorization: Bearer <anon key>` und Feldern `first_name`, `last_name`, `email`, `phone`, `employment_type`, `branding_id`, `street`, `zip`, `city`, `resume` — identisch zum Referenzprojekt. Der Anon-Key ist ein veröffentlichbarer Schlüssel und darf im Code stehen. Kein Lovable Cloud, keine eigene Datenbank.
- `head()` je Route: Stellenseite mit Titel/Beschreibung/`og:*` plus `application/ld+json` `JobPosting`; Bewerbungsseite mit eigenem Titel, Beschreibung und `robots: noindex`. Brotkrümel als eigene kleine Komponente `src/components/site/Breadcrumbs.tsx` (semantisches `nav`/`ol`, `Link`).
- `src/components/site/ApplicationForm.tsx` wird nicht mehr verwendet und entfernt.
- Prüfung mit Playwright (`/tmp/browser/karriere/shot.py`, Viewport 1440×1800) auf `/karriere`, `/karriere/online-prozesstester` und `/karriere/bewerbung`.
