# Meta-Tracking auf der Bewerbungsseite korrigieren

Kurze Antwort auf Ihre Frage: **nein, es war nicht 1:1 wie im Referenzprojekt.** Pixel und Lead-Ereignis sind vorhanden, aber „Lead" wurde erst nach erfolgreicher Übermittlung gemeldet – schlägt die Schnittstelle fehl, entsteht nie ein Lead. Das wird jetzt angeglichen.

## Was geändert wird

- **Pixel-Nummer** wird auf `3066494063553815` gesetzt (bisher `1041951465362957`) – im Seitenkopf und im unsichtbaren Zählbild.
- **„Lead" wird direkt beim Klick auf „Bewerbung senden"** gemeldet, sobald die Pflichtfelder ausgefüllt sind – genau wie im Referenzprojekt, unabhängig vom Ergebnis der Übermittlung.
- Der Pixel wird auch dann geladen, wenn man innerhalb der Website auf die Bewerbungsseite klickt (nicht nur beim direkten Aufruf aus der Anzeige), ohne doppelte Zählung.
- Tracking bleibt wie gewünscht ausschließlich auf `/karriere/bewerbung`.

## Wichtig

Die Änderung wirkt erst in der neu veröffentlichten bzw. auf Ihren Server ausgelieferten Fassung. Bitte danach neu ausliefern und im Ads Manager prüfen, dass die Kampagne auf ein Lead-Ereignis genau dieses Pixels optimiert.

## Technische Details

- `src/routes/karriere.bewerbung.tsx`:
  - Pixel-ID in `fbq('init', …)` im `scripts`-Eintrag des `head()` und in der `noscript`-Bild-URL auf `3066494063553815`.
  - `fbq('track','Lead')` aus dem Erfolgspfad entfernen und direkt hinter die Pflichtfeldprüfung im Submit-Handler setzen (analog `src/pages/Bewerbung.tsx:44` im Referenzprojekt), vor `setSubmitting(true)`.
  - Zusätzlicher `useEffect`: fehlt `window.fbq`, `https://connect.facebook.net/en_US/fbevents.js` nachladen, `fbq('init','3066494063553815')` und einmalig `PageView` senden; Modul-Flag als Guard gegen doppelten PageView.
- Verifikation per Playwright unter `/tmp/browser/pix2/`: Anfragen an `facebook.com/tr` mitschneiden – `ev=PageView` bei direktem Aufruf und nach internem Klick, `ev=Lead` beim Absenden (Schnittstellen-Aufruf im Test abgefangen, damit keine echte Bewerbung entsteht).
