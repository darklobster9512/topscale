# Bilder und Textanzeige auf dem eigenen Server

Zwei Ursachen, beide werden behoben.

## 1. Bilder erscheinen nicht

- Das Logo (Kopfzeile und Fußzeile) wird derzeit nicht aus dem Projekt geladen, sondern von einem externen Bild-Speicher von Lovable. Auf Ihrem Server ist diese Adresse nicht erreichbar, deshalb fehlt das Logo. Das Logo wird als echte Bilddatei in den Ordner `public` gelegt und von dort geladen.
- Alle Fotos (Büro, Software, Hamburg, Karriere, Branchen, Beratung, Team, Vorgehen) wandern ebenfalls in den Ordner `public` und werden über feste Adressen wie `/images/office.jpg` eingebunden. Damit sind sie unabhängig vom Bau-Vorgang und liegen sicher mit ausgeliefert.
- Zuschnitt, Größenangaben und Bildbeschreibungen bleiben unverändert.

## 2. Texte erscheinen verzögert

Alle Abschnitte sind zunächst unsichtbar und werden erst eingeblendet, sobald die Seite im Browser vollständig gestartet ist. Auf einem langsameren Server fällt das als „Nachladen" auf. Künftig sind die Texte sofort sichtbar: Die Einblendung bleibt als feine Bewegung erhalten, aber nur wenn sie ohne Verzögerung möglich ist – ist sie es nicht, steht der Inhalt einfach direkt da. Zusätzlich wird der erste Bildschirm (Kopfbereich der Startseite) ohne Einblendeffekt ausgeliefert, damit Überschrift und Buttons unmittelbar erscheinen.

Ergänzend: Die Schriften werden von Google geladen; das kann auf Ihrem Server ebenfalls kurz haken. Die Texte werden so eingestellt, dass sie sofort in einer Ersatzschrift lesbar sind und danach umgestellt werden.

## Technische Hinweise

- `src/assets/*.jpg` nach `public/images/` verschieben, Importe in `index.tsx`, `leistungen.tsx`, `ueber-uns.tsx`, `branchen.tsx`, `vorgehen.tsx`, `karriere.index.tsx`, `kontakt.tsx` durch String-Pfade (`/images/…`) ersetzen.
- Logo: Datei aus dem Asset-Pointer (`src/assets/topscale-logo.png.asset.json`) herunterladen, als `public/topscale-logo.png` ablegen, `Header.tsx` und `Footer.tsx` auf `/topscale-logo.png` umstellen, Pointer-Datei entfernen.
- `Reveal.tsx`: Startzustand sichtbar (`reveal-in` per Default bzw. nur nach Hydration deaktivieren), Beobachter nur noch für die Bewegung; `src/styles.css` `.reveal` so anpassen, dass ohne JS keine `opacity: 0` bleibt. Hero-Block der Startseite ohne `Reveal`.
- Schriftlink bereits mit `display=swap`; zusätzlich Fallback-Stack in `@theme` prüfen.
- Prüfen: Produktionsbau, danach alle Seiten mit Statuscode 200 und Bild-Anfragen 200 im Netzwerk-Log.
