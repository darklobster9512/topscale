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

export const process = [
  {
    step: "01",
    title: "Verstehen",
    text: "Interviews, Systemsichtung und Datenanalyse. Wir wollen wissen, wie es wirklich läuft – nicht, wie es dokumentiert ist.",
    outcome: "Prozessbild, Systemlandkarte und eine priorisierte Liste der Schwachstellen.",
    duration: "1 bis 3 Wochen",
  },
  {
    step: "02",
    title: "Entscheiden",
    text: "Optionen mit Aufwand, Risiko und Nutzen. Sie entscheiden auf einer Grundlage, die auch im Aufsichtsgremium trägt.",
    outcome: "Zielbild, Umsetzungsschnitt und belastbare Aufwandsschätzung je Schritt.",
    duration: "1 bis 2 Wochen",
  },
  {
    step: "03",
    title: "Umsetzen",
    text: "Kleine Releases, automatisierte Tests, sichtbare Zwischenergebnisse. Kein Monatsbericht ohne lauffähige Software.",
    outcome: "Lauffähige Software in kurzen Abständen, jederzeit vorführbarer Stand.",
    duration: "Zyklen von 2 Wochen",
  },
  {
    step: "04",
    title: "Verankern",
    text: "Schulung, Dokumentation, Übergabe oder Betreuung. Der Erfolg misst sich daran, was nach uns funktioniert.",
    outcome: "Eingearbeitetes Team, dokumentierter Betrieb, klare Zuständigkeiten.",
    duration: "Laufend nach Bedarf",
  },
];

export const collaboration = [
  {
    title: "Feste Ansprechpartner",
    text: "Sie arbeiten mit denselben Menschen vom Erstgespräch bis zur Übergabe – kein wechselndes Besetzungskarussell.",
  },
  {
    title: "Transparente Aufwände",
    text: "Aufwände werden vor jedem Zyklus geschätzt und danach abgeglichen. Abweichungen besprechen wir, bevor sie zur Rechnung werden.",
  },
  {
    title: "Dokumentation im Takt",
    text: "Entscheidungen, Schnittstellen und Betriebsthemen werden fortlaufend festgehalten, nicht am Projektende rekonstruiert.",
  },
  {
    title: "Wissenstransfer",
    text: "Ihre Fachleute arbeiten mit im Projekt. Am Ende soll Ihr Team weiterentwickeln können – auch ohne uns.",
  },
];

export const quality = [
  {
    title: "Reviews als Standard",
    text: "Jede Änderung wird von einer zweiten Person geprüft. Vier-Augen-Prinzip gilt für Code, Konzepte und Datenmodelle.",
  },
  {
    title: "Automatisierte Tests",
    text: "Fachlich kritische Abläufe sind durch Tests abgesichert und laufen bei jeder Änderung automatisch mit.",
  },
  {
    title: "Nachvollziehbare Releases",
    text: "Jeder Stand ist versioniert, jede Auslieferung wiederholbar und jederzeit auf einen früheren Stand zurückdrehbar.",
  },
  {
    title: "Datenschutz von Anfang an",
    text: "Rollen, Rechte, Protokollierung und Löschkonzepte gehören zum Entwurf, nicht zur Nachrüstung.",
  },
];
