# Meta Pixel auf der Bewerbungsseite + Lead-Ereignis

Bisher ist gar kein Tracking-Code auf dieser Seite – deshalb wird nichts an Meta gemeldet. Im Referenzprojekt „vendis" liegt der Pixel-Code unverändert im Seitenkopf und beim erfolgreichen Absenden der Bewerbung wird `fbq('track', 'Lead')` ausgelöst. Genau dasselbe Verhalten kommt hier – auf Ihren Wunsch nur auf der Seite `/karriere/bewerbung`.

## Was passiert
- Ihr Pixel-Code (ID 1041951465362957) wird 1:1 übernommen, aber nur auf der Bewerbungsseite geladen; alle anderen Seiten bleiben ohne Tracking.
- Beim Öffnen der Bewerbungsseite wird ein Seitenaufruf ("PageView") gemeldet.
- Beim **erfolgreichen** Absenden der Bewerbung wird "Lead" gemeldet – genau wie im Referenzprojekt, ohne Zusatzdaten. Bei Fehlern oder unvollständigem Formular passiert nichts.
- Das unsichtbare Zählbild für Besucher ohne JavaScript wird auf dieser Seite mit eingesetzt.
- Titel, Beschreibungen und Favicon bleiben unverändert.

## Hinweis zum Datenschutz
Der Pixel setzt Cookies und überträgt Daten an Meta. Ein passender Absatz in den Datenschutzhinweisen wäre sinnvoll; im Referenzprojekt steht dazu nichts. Sagen Sie Bescheid, ob ich ihn ergänzen soll – im aktuellen Plan ist er nicht enthalten.

## Technische Details
- Anders als im Referenzprojekt gibt es hier keine `index.html`; der Seitenkopf wird pro Route gesetzt. Das Snippet wandert daher unverändert als `scripts`-Eintrag (`children: "..."`) in das bestehende `head()` von `src/routes/karriere.bewerbung.tsx` – so lädt es ausschließlich auf dieser Route.
- Das `<noscript><img height="1" width="1" …/></noscript>` wird im JSX der Bewerbungsseite gerendert.
- Im Submit-Handler direkt nach `if (!data.success) throw …`, vor dem Erfolgs-Toast: `(window as unknown as { fbq?: (...a: unknown[]) => void }).fbq?.("track", "Lead")` — identisch zur Referenz, nur typsicher formuliert.
- Keine Pakete, kein Backend, keine Änderung an der Übermittlung, `__root.tsx` bleibt unangetastet.
- Nach dem Einbau Prüfung im Browser: Netzwerkanfragen an `connect.facebook.net/en_US/fbevents.js` und `facebook.com/tr?...ev=PageView` bzw. `ev=Lead`.
