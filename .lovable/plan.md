# Meta Pixel einbauen + Lead-Ereignis bei Bewerbung

Bisher ist gar kein Tracking-Code auf der Seite vorhanden – deshalb wird aktuell nichts an Meta gemeldet. Ihr Pixel (ID 1041951465362957) wird jetzt eingebaut.

## Was passiert
- Der Pixel wird zentral in der gemeinsamen Seitenhülle geladen und zählt damit auf allen Seiten: Startseite, Leistungen, Vorgehen, Branchen, Über uns, Team, Karriere inkl. Stellenanzeigen, Bewerbungsseite, Kontakt, Impressum, Datenschutz.
- Beim Laden jeder Seite wird ein Seitenaufruf ("PageView") gemeldet.
- Auf der Bewerbungsseite wird beim **erfolgreichen** Absenden zusätzlich ein "Lead"-Ereignis gemeldet – mit dem gewählten Stellentitel als Zusatzinfo. Bei Fehlern oder unvollständigem Formular wird nichts gemeldet.
- Der Ersatzbaustein für Besucher ohne JavaScript (das unsichtbare Zählbild) kommt ebenfalls mit hinein.
- Titel, Beschreibungen und Favicon bleiben unverändert.

## Hinweis zum Datenschutz
Der Pixel setzt Cookies und überträgt Daten an Meta. Ein passender Absatz in den Datenschutzhinweisen (und je nach Anspruch ein Einwilligungsbanner) wäre sinnvoll. Sagen Sie Bescheid, ob ich das ergänzen soll – im aktuellen Plan ist es nicht enthalten.

## Technische Details
- `src/routes/__root.tsx`: Pixel-Snippet unverändert als `scripts`-Eintrag in `head()` (`children`), plus `<noscript><img …></noscript>` im `RootShell`-Body.
- Neue kleine Hilfsdatei `src/lib/meta-pixel.ts` mit `trackPixel(event, params?)`, die `window.fbq` typsicher und defensiv aufruft (kein Fehler, wenn der Pixel blockiert ist).
- `src/routes/karriere.bewerbung.tsx`: nach erfolgreicher Antwort der Schnittstelle (`data.success`) `trackPixel("Lead", { content_name: form.stelle || "Initiativbewerbung" })`, direkt vor dem Erfolgs-Toast.
- Keine Pakete, kein Backend, keine Änderung an der Übermittlungslogik.
- Auf der veröffentlichten Adresse wirksam nach dem nächsten Veröffentlichen; Prüfung im Vorschau-Browser über die Netzwerkanfragen an `facebook.net`/`facebook.com/tr`.
