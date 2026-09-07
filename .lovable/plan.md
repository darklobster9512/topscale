# Bewerbungen an das neue System senden

Die Bewerbungsseite `/karriere/bewerbung` sendet ihre Angaben künftig an das neue Referenzsystem und nutzt die neue Kennung.

- Neue Übermittlungsadresse: `https://gzgfyuftjvezqjkosntu.supabase.co/functions/v1/submit-application`
- Passender öffentlicher Zugangsschlüssel wird auf den des neuen Systems getauscht (der alte gehört zum alten Projekt und würde abgewiesen).
- Neue Kennung: `f8cc2f90-9b89-41d6-ba41-94597773285b`

Formularfelder, Texte, Gestaltung und das Meta-Pixel bleiben unverändert.

## Technisch

- `src/routes/karriere.bewerbung.tsx`:
  - Zeile 18: `BRANDING_ID` = `f8cc2f90-9b89-41d6-ba41-94597773285b`
  - Zeile 19: `API_URL` = `https://gzgfyuftjvezqjkosntu.supabase.co/functions/v1/submit-application`
  - Zeilen 20–21: `ANON_KEY` auf den publishable Anon-Key des Projekts `gzgfyuftjvezqjkosntu` setzen (aus dem Referenzprojekt „vic-automation"; publishable, darf im Code stehen).
- Fehlerbehandlung anpassen an die Antwort des neuen Endpunkts: Erfolg über `res.ok` prüfen (statt nur `data.success`), Fehlertext aus `result.error`. Sonst keine Änderungen am Ablauf.
- Keine weiteren Dateien betroffen; keine Datenbank, kein Lovable Cloud.
