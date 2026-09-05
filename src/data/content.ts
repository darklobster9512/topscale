export const industries = [
  {
    slug: "handel",
    title: "Handel & E-Commerce",
    text: "Vom Warenwirtschafts-Interface bis zum Kundenportal: Wir verbinden Shop, ERP und Logistik zu einem belastbaren Ganzen.",
    points: ["Shop- und ERP-Integration", "Produktdaten-Pipelines", "Retouren- und Serviceprozesse"],
  },
  {
    slug: "logistik",
    title: "Transport & Logistik",
    text: "Transparenz in Sendungsketten, saubere Schnittstellen zu Partnern und automatisierte Statusmeldungen.",
    points: ["Track-and-Trace-Portale", "EDI- und API-Anbindungen", "Tourenplanung und Auswertung"],
  },
  {
    slug: "industrie",
    title: "Industrie & Fertigung",
    text: "Digitale Fertigungsbegleitung: Maschinendaten nutzbar machen, Qualitätsdaten auswerten, Papier ersetzen.",
    points: ["Shopfloor-Anwendungen", "Qualitätsdatenerfassung", "Wartungs- und Prüfprozesse"],
  },
  {
    slug: "oeffentlicher-sektor",
    title: "Öffentlicher Sektor",
    text: "Fachverfahren und Antragsprozesse, die Anforderungen an Barrierefreiheit, Nachweisführung und Datenschutz erfüllen.",
    points: ["Antrags- und Fachverfahren", "Barrierefreiheit nach BITV", "Dokumentierte Nachweisführung"],
  },
  {
    slug: "finanzdienstleistung",
    title: "Finanzdienstleistung",
    text: "Prozesse mit hoher Prüf- und Dokumentationslast – strukturiert, nachvollziehbar und revisionsfest umgesetzt.",
    points: ["Revisionsfeste Prozesse", "Reporting und Kennzahlen", "Auslagerungs- und Risikothemen"],
  },
];

export const references = [
  {
    slug: "handelsgruppe-portal",
    client: "Handelsgruppe, 1.400 Mitarbeitende",
    title: "Ein Portal statt fünf Excel-Welten",
    situation:
      "Filialdaten wurden in mehreren Tabellen gepflegt, Auswertungen entstanden manuell und waren oft veraltet.",
    approach:
      "Prozessaufnahme in allen Bereichen, Datenmodell konsolidiert, danach ein zentrales Portal mit Rollen- und Rechtekonzept entwickelt.",
    result: "Auswertungen tagesaktuell, manuelle Nacharbeit weitgehend entfallen.",
    metric: "−70 %",
    metricLabel: "manueller Aufwand im Reporting",
  },
  {
    slug: "logistik-schnittstellen",
    client: "Logistikdienstleister, Norddeutschland",
    title: "Schnittstellen, die nicht mehr nachts anrufen",
    situation:
      "Partneranbindungen liefen über gewachsene Skripte ohne Monitoring; Fehler fielen erst beim Kunden auf.",
    approach:
      "Neue Integrationsschicht mit klaren Verträgen, automatisierten Tests und Alarmierung, schrittweise Ablösung im Parallelbetrieb.",
    result: "Störungen werden erkannt, bevor Sendungen betroffen sind.",
    metric: "99,9 %",
    metricLabel: "erfolgreiche Übertragungen",
  },
  {
    slug: "industrie-qualitaet",
    client: "Industriezulieferer, 300 Mitarbeitende",
    title: "Qualitätsdaten ohne Papier",
    situation:
      "Prüfprotokolle wurden auf Papier erfasst und später abgetippt – Auswertungen dauerten Wochen.",
    approach:
      "Digitale Prüfmasken für Tablets, Anbindung an das Qualitätsmanagement und Kennzahlen-Dashboards für die Werksleitung.",
    result: "Abweichungen sind am selben Tag sichtbar, Audits deutlich einfacher.",
    metric: "3 Tage",
    metricLabel: "statt 3 Wochen bis zur Auswertung",
  },
  {
    slug: "pmo-aufbau",
    client: "Versorgungsunternehmen",
    title: "Projektsteuerung, die Entscheidungen ermöglicht",
    situation: "Projekte liefen parallel ohne einheitliche Statusbasis, Priorisierung war Bauchgefühl.",
    approach:
      "Aufbau eines schlanken PMO mit einheitlichen Statusberichten, Risikoregister und Quartalsplanung.",
    result: "Die Geschäftsführung entscheidet auf einer Datenbasis statt auf Zurufen.",
    metric: "18",
    metricLabel: "Projekte in einem Portfolio gesteuert",
  },
];

export const insights = [
  {
    slug: "legacy-ablösen-ohne-stillstand",
    title: "Legacy ablösen, ohne den Betrieb anzuhalten",
    excerpt:
      "Big-Bang-Migrationen scheitern selten an der Technik, sondern am Kalender. Wie ein Parallelbetrieb realistisch geplant wird.",
    category: "Modernisierung",
    readingTime: "6 Min.",
    date: "März 2026",
    body: [
      "Der Wunsch ist verständlich: Altsystem aus, Neusystem an, fertig. In der Praxis kollidiert dieser Plan mit Jahresabschlüssen, Saisonspitzen und Urlaubszeiten. Wer die Ablösung als Ereignis plant, plant ein Risiko.",
      "Wir gehen anders vor: Zuerst wird der Datenfluss zwischen Alt und Neu entkoppelt, meist über eine Integrationsschicht. Danach wandern fachliche Bereiche einzeln – beginnend dort, wo der Nutzen sichtbar und das Risiko klein ist.",
      "Wichtig ist ein ehrliches Rückfallszenario für jeden Schritt. Wenn ein Bereich zurückgedreht werden kann, sinkt der Druck auf das Team und die Qualität der Entscheidungen steigt.",
      "Der Preis dieses Vorgehens ist ein längerer Parallelbetrieb. Der Gewinn ist ein Projekt, das keine Nachtschichten und keine Notfallmeldungen an Kunden braucht.",
    ],
  },
  {
    slug: "prozesse-messbar-machen",
    title: "Prozesse messbar machen – mit drei Kennzahlen statt dreißig",
    excerpt:
      "Kennzahlensysteme ersticken oft an ihrer eigenen Größe. Ein pragmatischer Zuschnitt, der im Alltag überlebt.",
    category: "Prozessmanagement",
    readingTime: "5 Min.",
    date: "Februar 2026",
    body: [
      "Viele Organisationen messen alles und steuern nichts. Dashboards füllen sich, Entscheidungen bleiben trotzdem Bauchgefühl, weil niemand weiß, welche Zahl gerade wichtig ist.",
      "Unsere Empfehlung: pro Prozess drei Kennzahlen – Durchlaufzeit, Fehlerquote, Auslastung. Erst wenn diese drei stabil erhoben werden, lohnt sich Erweiterung.",
      "Entscheidend ist die Erhebung an der Quelle. Zahlen, die jemand monatlich zusammensucht, sind teuer und veraltet. Zahlen, die im Prozess entstehen, sind billig und aktuell.",
      "Was folgt, ist unbequem, aber wirksam: Ziele festlegen, Abweichungen besprechen, Maßnahmen dokumentieren. Qualitätsmanagement ist weniger Werkzeug als Gewohnheit.",
    ],
  },
  {
    slug: "individualsoftware-wann-lohnt-sie",
    title: "Individualsoftware: wann sie sich lohnt – und wann nicht",
    excerpt:
      "Standard ist günstiger, bis er teuer wird. Ein Entscheidungsraster für Make-or-Buy jenseits von Lizenzpreisen.",
    category: "IT-Strategie",
    readingTime: "7 Min.",
    date: "Januar 2026",
    body: [
      "Der Vergleich Standard gegen Individual wird meist über Lizenzkosten geführt. Das ist der kleinste Teil der Rechnung. Entscheidend sind Anpassungsaufwand, Prozessbrüche und die Kosten, wenn ein Wettbewerbsvorteil nicht abgebildet werden kann.",
      "Unser Raster: Was ist Ihr Kerngeschäft, was ist Beiwerk? Beiwerk kauft man ein. Im Kern lohnt sich individuelle Entwicklung, weil dort Differenzierung entsteht.",
      "Ein zweiter Blick gilt der Halbwertszeit. Prozesse, die sich jährlich ändern, verlangen Software, die man selbst weiterentwickeln kann.",
      "Und ein dritter: Wer bleibt handlungsfähig, wenn der Anbieter die Preise verdoppelt oder das Produkt einstellt? Diese Frage entscheidet häufiger als jede Feature-Liste.",
    ],
  },
];

export const process = [
  {
    step: "01",
    title: "Verstehen",
    text: "Interviews, Systemsichtung und Datenanalyse. Wir wollen wissen, wie es wirklich läuft – nicht, wie es dokumentiert ist.",
  },
  {
    step: "02",
    title: "Entscheiden",
    text: "Optionen mit Aufwand, Risiko und Nutzen. Sie entscheiden auf einer Grundlage, die auch im Aufsichtsgremium trägt.",
  },
  {
    step: "03",
    title: "Umsetzen",
    text: "Kleine Releases, automatisierte Tests, sichtbare Zwischenergebnisse. Kein Monatsbericht ohne lauffähige Software.",
  },
  {
    step: "04",
    title: "Verankern",
    text: "Schulung, Dokumentation, Übergabe oder Betreuung. Der Erfolg misst sich daran, was nach uns funktioniert.",
  },
];
