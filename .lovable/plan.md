# Warum 0 Leads im Meta Ads Manager – Prüfung und Absicherung

Der Pixel-Code (ID 1041951465362957) und das Lead-Ereignis sind auf `/karriere/bewerbung` vorhanden: das Snippet steckt im Seitenkopf dieser Seite, das Zählbild für Besucher ohne JavaScript ist im Seiteninhalt, und beim erfolgreichen Absenden wird `Lead` gemeldet. Es fehlt also nichts – trotzdem kommt bei Meta nichts an. Dafür gibt es drei realistische Ursachen, die der Reihe nach geprüft und behoben werden.

## Was geprüft wird

1. **Kommt eine Bewerbung überhaupt durch?** `Lead` wird nur bei erfolgreicher Übermittlung gemeldet. Die Übermittlungsadresse wurde zuletzt auf das neue System umgestellt. Ich sende eine Testbewerbung im Browser und schaue, ob die Antwort in Ordnung ist. Schlägt sie fehl, gibt es auch nie ein Lead – dann ist das die Ursache.
2. **Feuert das Ereignis technisch?** Im Browser wird kontrolliert, ob beim Absenden ein Aufruf an `facebook.com/tr?...ev=Lead` rausgeht.
3. **Kommt der Besucher über einen internen Klick auf die Seite?** Wechselt jemand innerhalb der Website auf die Bewerbungsseite (z. B. über „Jetzt bewerben"), kann der Pixel-Code je nach Ablauf nicht neu geladen werden. Dann fehlt sowohl Seitenaufruf als auch Lead. Das wird nachgemessen.

## Was gebaut wird

- Der Pixel wird zusätzlich fest in der Bewerbungsseite initialisiert, sobald sie angezeigt wird – also auch bei internen Seitenwechseln, nicht nur beim direkten Aufruf aus der Anzeige. Doppeltes Zählen wird verhindert.
- `Lead` wird zuverlässig genau einmal pro erfolgreicher Bewerbung gemeldet.
- Falls die Übermittlung scheitert, bekommen Sie die genaue Fehlermeldung genannt, damit die Ursache klar ist.

## Wichtig zum Livegang

Änderungen am Tracking wirken erst in der veröffentlichten bzw. auf Ihren Server ausgelieferten Fassung. Wenn die Seite auf Ihrem Server seit dem Einbau des Pixels nicht neu ausgeliefert wurde, läuft dort noch die alte Version ohne Tracking – das allein würde 0 Leads erklären. Bitte nach dieser Anpassung neu ausliefern.

Zusätzlich in Ihrem Meta-Konto zu prüfen (kann ich nicht von hier sehen): dass die Bewerbungsseite im Pixel-Test „Testereignisse" auftaucht und dass die Kampagne auf ein Lead-Ereignis dieses Pixels optimiert.

## Technische Details

- `src/routes/karriere.bewerbung.tsx`: Pixel-Snippet bleibt als `scripts`-Eintrag im `head()`; ergänzend ein `useEffect` in der Komponente, das bei fehlendem `window.fbq` das Skript `https://connect.facebook.net/en_US/fbevents.js` nachlädt, `fbq('init', '1041951465362957')` ausführt und einmalig `PageView` sendet (Guard über ein Modul-Flag, damit bei direktem Aufruf kein zweiter PageView entsteht).
- Lead-Aufruf bleibt im Submit-Handler nach erfolgreicher Antwort; Absicherung gegen Mehrfachversand über einen `useRef`.
- Fehlerpfad: Statuscode und Antworttext des Endpunkts in die Fehlermeldung aufnehmen.
- Verifikation per Playwright unter `/tmp/browser/pix2/`: Netzwerkanfragen `ev=PageView` und `ev=Lead` mitschneiden, einmal bei direktem Aufruf und einmal nach internem Klick von `/karriere/online-prozesstester`.
