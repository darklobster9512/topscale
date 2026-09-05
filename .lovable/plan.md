# Demo- und Mockup-Hinweise entfernen

Die Hinweise stehen an genau drei Stellen; sie werden entfernt bzw. neutral formuliert. Am Formular selbst wird technisch nichts geändert.

## Kontaktseite
- Unter dem Absenden-Knopf entfällt die Zeile „Demo-Formular – es werden keine Daten gespeichert.“
- In der Bestätigung nach dem Absenden steht künftig nur noch der Dank samt Rückmeldezusage („Vielen Dank für Ihre Anfrage. Wir melden uns in der Regel am nächsten Werktag.“) statt des Demo-Hinweises. Überschrift wird zu „Nachricht gesendet“.

## Datenschutzseite
- Der Abschnitt „Kontakt- und Bewerbungsformulare“ nennt keine Demonstration mehr, sondern beschreibt die Verarbeitung der Angaben zur Bearbeitung von Anfragen und Bewerbungen (Art. 6 Abs. 1 lit. b DSGVO, § 26 BDSG).

## Hinweis
Das Kontaktformular übermittelt weiterhin nichts – es zeigt nur die Bestätigung. Wenn Anfragen tatsächlich ankommen sollen, sage ich das gern in einem zweiten Schritt an.

## Technische Details
- `src/routes/kontakt.tsx`: Text im Erfolgs-Block (Zeilen ~98–102) und der Hinweistext unter dem Submit-Button (Zeile ~188).
- `src/routes/datenschutz.tsx`: Absatz im Abschnitt „Kontakt- und Bewerbungsformulare“ (Zeilen 58–63).
- Der allgemeine Prüfhinweis am Anfang der Datenschutzseite bleibt unverändert, da er keine Demo-Aussage ist.
