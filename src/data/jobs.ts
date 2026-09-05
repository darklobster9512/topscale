export type Job = {
  slug: string;
  title: string;
  type: string;
  location: string;
  team: string;
  model: string;
  workingHours?: string;
  salary?: string;
  status?: "Sofort verfügbar" | "Bald verfügbar";
  summary: string;
  description: string;
  tasks: string[];
  profile: string[];
  offer: string[];
};

export const jobs: Job[] = [
  {
    slug: "online-prozesstester",
    title: "Online-Prozesstester:in für digitale Anwendungen (m/w/d)",
    type: "Minijob / Teilzeit",
    location: "Remote (Deutschland)",
    team: "Quality Management",
    model: "Minijob · Teilzeit · flexibel",
    workingHours: "5–25 Std./Woche, freie Einteilung",
    salary: "29 € / Stunde",
    status: "Sofort verfügbar",
    summary:
      "Sie prüfen Webanwendungen und Prozesse aus Nutzersicht und liefern strukturiertes Feedback – ortsunabhängig, in Ihrem Tempo, ohne Vorkenntnisse.",
    description:
      "Für ausgewählte Kundenprojekte suchen wir Menschen, die digitale Anwendungen und Geschäftsprozesse mit wachem Blick durchgehen und ihre Beobachtungen sauber dokumentieren. Sie erhalten von uns klare Testanleitungen und arbeiten die Aufgaben selbstständig ab – wann und wo Sie mögen. Ideal als Nebentätigkeit neben Studium, Familie oder Hauptjob.",
    tasks: [
      "Durchlaufen definierter Testszenarien in Webanwendungen und mobilen Apps",
      "Bewertung von Nutzerführung, Verständlichkeit und Bedienbarkeit",
      "Nachvollziehbare Dokumentation von Fehlern, Auffälligkeiten und Eindrücken",
      "Formulieren konkreter Verbesserungsvorschläge für die Projektteams",
    ],
    profile: [
      "Sorgfältige, verlässliche Arbeitsweise und ein Auge fürs Detail",
      "Sicherer Umgang mit Smartphone, Tablet oder PC",
      "Stabile Internetverbindung und ein eigenes Testgerät",
      "Deutschkenntnisse mindestens B2 – keine formale Ausbildung nötig",
    ],
    offer: [
      "Vollständig remote, Zeiten frei wählbar (auch abends und am Wochenende)",
      "Kurze, verständliche Einarbeitung mit Beispiel-Tests",
      "Feste Stundenvergütung – transparent und zuverlässig",
      "Unkomplizierte Zusammenarbeit, direkter Draht zum Projektteam",
    ],
  },
  {
    slug: "it-consultant",
    title: "IT-Consultant (m/w/d)",
    type: "Vollzeit",
    location: "Hamburg / hybrid",
    team: "Consulting",
    model: "Festanstellung · Vollzeit",
    workingHours: "40 Std./Woche · Gleitzeit",
    salary: "65.000 – 85.000 € / Jahr",
    status: "Sofort verfügbar",
    summary:
      "Sie beraten unsere Kunden bei der Digitalisierung ihrer Geschäftsprozesse – von der Analyse bis zur erfolgreichen Umsetzung.",
    description:
      "Als IT-Consultant sind Sie das Gesicht der Topscale GmbH beim Kunden. Sie führen Analysephasen, moderieren Workshops mit Geschäftsführung und IT und übersetzen zwischen Fachlichkeit und Technik – gemeinsam mit unseren Entwicklungsteams bis in den laufenden Betrieb.",
    tasks: [
      "Analyse von Geschäftsprozessen und IT-Landschaften unserer Kunden",
      "Entwicklung von Lösungskonzepten und Roadmaps",
      "Begleitung der Umsetzung gemeinsam mit unseren Entwicklungsteams",
      "Workshops und Präsentationen auf Fach- und Managementebene",
    ],
    profile: [
      "Abgeschlossenes Studium der (Wirtschafts-)Informatik oder vergleichbare Qualifikation",
      "Mindestens 2 Jahre Erfahrung in Beratung oder IT-Projekten",
      "Analytisches Denken und ein sicheres Auftreten beim Kunden",
      "Sehr gute Deutschkenntnisse, gutes Englisch",
    ],
    offer: [
      "Unbefristete Festanstellung mit attraktiver Vergütung",
      "Flexible Arbeitszeiten und bis zu drei Tage Homeoffice",
      "Individuelles Weiterbildungsbudget und Zertifizierungen",
      "Modernes Büro an den Landungsbrücken",
    ],
  },
  {
    slug: "softwareentwickler-fullstack",
    title: "Softwareentwickler Fullstack (m/w/d)",
    type: "Vollzeit",
    location: "Hamburg / remote möglich",
    team: "Software Engineering",
    model: "Festanstellung · Vollzeit",
    workingHours: "40 Std./Woche · flexibel",
    salary: "70.000 – 90.000 € / Jahr",
    status: "Sofort verfügbar",
    summary:
      "Sie entwickeln individuelle Anwendungen für mittelständische und große Kunden – mit modernem Stack und echter Verantwortung.",
    description:
      "Sie arbeiten in kleinen, verantwortlichen Teams direkt an Kundenprojekten: Sie treffen technische Entscheidungen, schreiben Code, den Sie in fünf Jahren noch mit Freude lesen, und begleiten Ihre Lösungen bis in den Betrieb.",
    tasks: [
      "Konzeption und Entwicklung von Web-Anwendungen (TypeScript, React, Node.js)",
      "Design von APIs und Datenmodellen",
      "Code Reviews, automatisierte Tests und CI/CD",
      "Enge Zusammenarbeit mit Consulting und Fachbereichen",
    ],
    profile: [
      "Mehrjährige Erfahrung in der Webentwicklung",
      "Sicherer Umgang mit TypeScript sowie relationalen Datenbanken",
      "Interesse an Clean Code, Architektur und Qualitätssicherung",
      "Gute Deutschkenntnisse",
    ],
    offer: [
      "Projekte mit langfristiger Perspektive statt Bodyleasing",
      "Hardware nach Wahl und moderne Entwicklungsumgebung",
      "Regelmäßige Tech-Talks und Konferenzbesuche",
      "30 Tage Urlaub",
    ],
  },
  {
    slug: "projektmanager",
    title: "Projektmanager (m/w/d)",
    type: "Vollzeit",
    location: "Hamburg / hybrid",
    team: "Project Management",
    model: "Festanstellung · Voll- oder Teilzeit",
    workingHours: "32–40 Std./Woche",
    salary: "65.000 – 85.000 € / Jahr",
    status: "Sofort verfügbar",
    summary:
      "Sie führen IT- und Organisationsprojekte zum Ziel – klassisch, agil oder hybrid, immer mit Blick auf Menschen und Ergebnisse.",
    description:
      "Sie übernehmen die Verantwortung für Kundenprojekte von der Planung bis zur Abnahme: Sie steuern Termine, Budget und Qualität, halten Stakeholder auf einem Stand und entwickeln unsere Projektmethodik weiter.",
    tasks: [
      "Planung, Steuerung und Controlling von Kundenprojekten",
      "Stakeholder-Management und transparente Berichterstattung",
      "Risiko- und Qualitätsmanagement im Projektverlauf",
      "Weiterentwicklung unserer Projektmethodik",
    ],
    profile: [
      "Erfahrung in der Leitung von IT-Projekten",
      "Kenntnisse in Scrum, PRINCE2 oder PMI (Zertifizierung von Vorteil)",
      "Strukturierte, verbindliche Arbeitsweise",
      "Sehr gute Kommunikationsfähigkeiten in Deutsch",
    ],
    offer: [
      "Verantwortung ab dem ersten Tag",
      "Coaching durch erfahrene Kolleginnen und Kollegen",
      "Deutschlandticket und Mobilitätszuschuss",
      "Flache Hierarchien und kurze Entscheidungswege",
    ],
  },
  {
    slug: "werkstudent-qualitaetsmanagement",
    title: "Werkstudent Qualitätsmanagement (m/w/d)",
    type: "Werkstudium, 15–20 h/Woche",
    location: "Hamburg / hybrid",
    team: "Quality Management",
    model: "Werkstudium · 15–20 Std./Woche",
    workingHours: "15–20 Std./Woche",
    salary: "16 – 20 € / Stunde",
    status: "Sofort verfügbar",
    summary:
      "Sie unterstützen unser Qualitätsmanagement bei Prozessdokumentation, Audits und Kennzahlen – ein guter Einstieg in die Beratung.",
    description:
      "Sie arbeiten eng mit unserem Qualitätsmanagement zusammen, pflegen Prozessdokumentationen, bereiten Audits vor und werten Kennzahlen aus. Nach der Einarbeitung übernehmen Sie eigene Aufgaben in Kundenprojekten.",
    tasks: [
      "Pflege und Weiterentwicklung unserer Prozessdokumentation",
      "Vorbereitung interner Audits und Reviews",
      "Auswertung von Qualitätskennzahlen",
      "Mitarbeit in Kundenprojekten nach Einarbeitung",
    ],
    profile: [
      "Laufendes Studium mit Bezug zu Wirtschaft, Informatik oder Ingenieurwesen",
      "Sorgfältige Arbeitsweise und Freude an Strukturen",
      "Sicherer Umgang mit Office-Werkzeugen",
      "Gute Deutschkenntnisse",
    ],
    offer: [
      "Faire Vergütung und flexible Zeiten rund um Vorlesungen",
      "Persönliche Betreuung und Perspektive auf Festanstellung",
      "Einblick in echte Kundenprojekte",
      "Team-Events und kostenlose Getränke",
    ],
  },
];

export const getJob = (slug: string) => jobs.find((job) => job.slug === slug);
