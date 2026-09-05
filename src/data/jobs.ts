export type Job = {
  slug: string;
  title: string;
  type: string;
  location: string;
  team: string;
  summary: string;
  tasks: string[];
  profile: string[];
  offer: string[];
};

export const jobs: Job[] = [
  {
    slug: "it-consultant",
    title: "IT-Consultant (m/w/d)",
    type: "Vollzeit",
    location: "Hamburg / hybrid",
    team: "Consulting",
    summary:
      "Sie beraten unsere Kunden bei der Digitalisierung ihrer Geschäftsprozesse – von der Analyse bis zur erfolgreichen Umsetzung.",
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
    summary:
      "Sie entwickeln individuelle Anwendungen für mittelständische und große Kunden – mit modernem Stack und echter Verantwortung.",
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
    summary:
      "Sie führen IT- und Organisationsprojekte zum Ziel – klassisch, agil oder hybrid, immer mit Blick auf Menschen und Ergebnisse.",
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
    summary:
      "Sie unterstützen unser Qualitätsmanagement bei Prozessdokumentation, Audits und Kennzahlen – ein guter Einstieg in die Beratung.",
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
