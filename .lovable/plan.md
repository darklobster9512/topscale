# Meta Pixel nur auf der Bewerbungsseite + Lead-Ereignis

Bisher ist gar kein Tracking-Code auf der Seite vorhanden – deshalb wird aktuell nichts an Meta gemeldet. Ihr Pixel (ID 1041951465362957) wird ausschließlich auf der Bewerbungsseite `/karriere/bewerbung` eingebaut.

## Was passiert
- Der Pixel lädt nur auf der Bewerbungsseite; alle anderen Seiten bleiben ohne Tracking.
- Beim Öffnen der Bewerbungsseite wird ein Seitenaufruf ("PageView") gemeldet.
- Beim **erfolgreichen** Absenden der Bewerbung wird zusätzlich ein "Lead"-Ereignis gemeldet, mit dem gewählten Stellentitel als Zusatzinfo. Bei Fehlern oder unvollständigem Formular wird nichts gemeldet.
- Der Ersatzbaustein für Besucher ohne JavaScript (das unsichtbare Zählbild) wird auf dieser Seite mit eingesetzt.
- Titel, Beschreibungen und Favicon bleiben unverändert.

## Hinweis zum Datenschutz
Der Pixel setzt Cookies und überträgt Daten an Meta. Ein passender Absatz in den Datenschutzhinweisen (und je nach Anspruch ein Einwilligungsbanner) wäre sinnvoll. Sagen Sie Bescheid, ob ich das ergänzen soll – im aktuellen Plan ist es nicht enthalten.

## Technische Details
- `src/routes/karriere.bewerbung.tsx`: Pixel-Snippet unverändert als `scripts`-Eintrag im vorhandenen `head()` der Route (`children`), damit es nur auf dieser Route ausgeliefert wird. Das `<noscript><img …>` wird im Seiten-JSX gerendert.
- Neue kleine Hilfsdatei `src/lib/meta-pixel.ts` mit `trackPixel(event, params?)`, die `window.fbq` typsicher und defensiv aufruft (kein Fehler, wenn der Pixel blockiert ist).
- Im Submit-Handler nach `data.success`: `trackPixel("Lead", { content_name: form.stelle || "Initiativbewerbung" })`, direkt vor dem Erfolgs-Toast.
- Keine Pakete, kein Backend, keine Änderung an der Übermittlungslogik, `__root.tsx` bleibt unangetastet.
- Auf der veröffentlichten Adresse wirksam nach dem nächsten Veröffentlichen; Prüfung im Vorschau-Browser über die Netzwerkanfragen an `facebook.net`/`facebook.com/tr`.
