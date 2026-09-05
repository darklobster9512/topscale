# Anstellungsart bei der Prozesstester-Stelle einschränken

## Was sich ändert

Auf der Bewerbungsseite gibt es die Auswahl "Anstellungsart" mit vier Möglichkeiten (Vollzeit, Teilzeit, Minijob, Werkstudium).

Sobald als Stelle "Online-Prozesstester:in für digitale Anwendungen (m/w/d)" gewählt ist — auch wenn sie über den Link von der Stellenseite vorbelegt wird — stehen nur noch **Teilzeit** und **Minijob** zur Auswahl. Unter dem Feld erscheint ein kurzer Hinweis: "Für diese Stelle sind nur Teilzeit und Minijob möglich."

War vorher Vollzeit oder Werkstudium ausgewählt und wechselt man dann auf diese Stelle, wird die Auswahl geleert, damit nichts Unzulässiges abgeschickt werden kann. Beim Wechsel auf eine andere Stelle sind wieder alle vier Möglichkeiten verfügbar.

Alles andere auf der Seite bleibt unverändert.

## Technische Details

- `src/routes/karriere.bewerbung.tsx`: Konstante mit dem Titel/Slug der Prozesstester-Stelle; abgeleitete Liste `availableEmploymentTypes` (gefiltert auf `teilzeit`/`minijob`, wenn `form.stelle` dieser Stelle entspricht).
- Im `onValueChange` des Stellen-Selects: `anstellungsart` zurücksetzen, wenn der bisherige Wert in der neuen Liste nicht mehr enthalten ist.
- Hinweistext als `<p className="text-xs text-muted-foreground">` unter dem Anstellungsart-Select, nur bei dieser Stelle sichtbar.
- Übermittlung, Felder und Schnittstelle bleiben unverändert.
