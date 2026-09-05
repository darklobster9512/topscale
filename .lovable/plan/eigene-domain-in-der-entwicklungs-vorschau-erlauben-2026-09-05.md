# Eigene Domain in der Entwicklungs-Vorschau erlauben

Die Vorschau soll auch unter `topscale.gmbh` erreichbar sein, ohne dass sie den Zugriff mit einer Host-Warnung blockiert.

## Technisch

- `vite.config.ts`: dem bestehenden `defineConfig` einen `vite`-Block hinzufügen:

```ts
vite: {
  server: {
    allowedHosts: ["topscale.gmbh", ".topscale.gmbh"],
  },
},
```

- Die vorhandene `tanstackStart`-Konfiguration bleibt unverändert; Port/Host der Sandbox werden vom Preset weiterhin gesetzt.
- Danach Dev-Server neu starten und prüfen, dass die Vorschau weiterhin auf `localhost:8080` antwortet.

Hinweis: Für die tatsächliche Nutzung der Domain auf der veröffentlichten Seite ist zusätzlich das Verbinden der Domain in den Projekteinstellungen nötig — das ist von dieser Änderung unabhängig.
