# Kennung für Bewerbungen austauschen

Die Bewerbungsseite sendet bei jeder Übermittlung eine feste Kennung mit. Diese Kennung wird auf den neuen Wert geändert.

- Alt: `56aa260c-f3bc-44d3-a37b-ceb3ba01d2d9`
- Neu: `6446b53e-e265-4c1d-ba85-293d92c281ac`

## Technisch

- `src/routes/karriere.bewerbung.tsx`, Zeile 18: Konstante `BRANDING_ID` auf den neuen Wert setzen. Sonst keine Änderungen (Formularfelder, Endpunkt, Pixel bleiben unverändert).
