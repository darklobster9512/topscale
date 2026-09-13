# Meta-Tracking: Abweichungen zum Referenzprojekt beheben

Kurze Antwort: **nein, es ist nicht 1:1 wie im Referenzprojekt.** Pixel-Code und Lead-Ereignis sind eingebaut, aber an drei Punkten anders – und jeder davon kann erklären, warum im Ads Manager 0 Leads stehen.

## Die drei Unterschiede

1. **Andere Pixel-Nummer.** Referenzprojekt: `1055052437112922`. Ihre Seite: `1041951465362957`. Wenn Ihre Anzeigen auf die Nummer des Referenzprojekts optimieren, landen Ihre Ereignisse in einem anderen Konto und tauchen dort nie auf.
2. **Lead wird zu spät gemeldet.** Im Referenzprojekt wird „Lead" direkt beim Klick auf „Bewerbung senden" gemeldet (nach der Pflichtfeldprüfung), unabhängig davon, ob die Übermittlung klappt. Bei Ihnen erst nach erfolgreicher Antwort der Schnittstelle – schlägt die fehl, gibt es nie ein Lead.
3. **Tracking nur auf einer Seite.** Im Referenzprojekt läuft der Pixel auf allen Seiten und meldet bei jedem Seitenwechsel einen Seitenaufruf. Bei Ihnen ausschließlich auf `/karriere/bewerbung` (das war Ihr ausdrücklicher Wunsch).

## Was ich ändere

- Lead-Meldung an dieselbe Stelle wie im Referenzprojekt: direkt beim Absenden nach der Pflichtfeldprüfung.
- Der Pixel wird auch dann korrekt geladen, wenn man innerhalb der Website auf die Bewerbungsseite klickt (nicht nur beim direkten Aufruf aus der Anzeige) – ohne doppelte Zählung.
- Die Pixel-Nummer lasse ich zunächst wie bisher. Sagen Sie mir, welche Nummer im Ads Manager als Ihre geführt wird; wenn es `1055052437112922` ist, tausche ich sie mit.

## Wichtig

Tracking wirkt erst in der neu veröffentlichten bzw. auf Ihren Server ausgelieferten Fassung. Wurde seit dem Einbau des Pixels nicht neu ausgeliefert, läuft dort noch die Version ohne Tracking – das allein wären 0 Leads.

## Technische Details

- `src/routes/karriere.bewerbung.tsx`: `fbq('track','Lead')` von nach der Erfolgsprüfung nach oben in den Submit-Handler direkt hinter die Pflichtfeldprüfung verschieben (wie `src/pages/Bewerbung.tsx:44` im Referenzprojekt).
- Ergänzend `useEffect` in der Komponente: bei fehlendem `window.fbq` `https://connect.facebook.net/en_US/fbevents.js` nachladen, `fbq('init', …)` und einmalig `PageView` senden; Modul-Flag als Guard gegen doppelten PageView beim direkten Aufruf (das Snippet im `head()` bleibt).
- Verifikation per Playwright unter `/tmp/browser/pix2/`: Anfragen an `facebook.com/tr` mitschneiden – `ev=PageView` bei direktem Aufruf und nach internem Klick, `ev=Lead` beim Absenden (Schnittstellen-Aufruf im Test abgefangen, damit keine echte Bewerbung entsteht).
