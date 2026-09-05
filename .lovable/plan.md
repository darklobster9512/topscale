# Meta Pixel von Facebook einbauen

Aktuell ist kein Tracking-Code auf der Seite vorhanden. Ihr Meta-Pixel-Code (ID 1041951465362957) wird einmal zentral eingebaut, damit er auf allen Seiten zählt – Startseite, Leistungen, Vorgehen, Branchen, Über uns, Team, Karriere inkl. Stellenanzeigen und Bewerbung, Kontakt, Impressum, Datenschutz.

## Was passiert
- Der Pixel wird zentral in der gemeinsamen Seitenhülle eingesetzt, nicht auf jeder Seite einzeln.
- Ein Seitenaufruf ("PageView") wird beim Laden gemeldet, wie in Ihrem Code vorgesehen.
- Der Ersatzbaustein für Besucher ohne JavaScript (das unsichtbare Bild) kommt ebenfalls mit hinein.
- Die bestehenden Seitentitel, Beschreibungen und das Favicon bleiben unverändert.

## Hinweis zum Datenschutz
Der Pixel setzt Cookies und überträgt Daten an Meta. Sinnvoll wäre ein Satz dazu in Ihren Datenschutzhinweisen (und je nach Anspruch ein Einwilligungsbanner). Sagen Sie Bescheid, ob ich den Absatz ergänzen soll – im aktuellen Plan ist er nicht enthalten.

## Technische Details
- `src/routes/__root.tsx`: Pixel-Loader als `scripts`-Eintrag in `head()` (`children` mit dem Original-Snippet), plus `<noscript><img …></noscript>` im `RootShell`-Body.
- Kein Paket, kein Backend, keine weiteren Dateien betroffen.
- Wirksam auf der veröffentlichten Adresse erst nach dem nächsten Veröffentlichen.
