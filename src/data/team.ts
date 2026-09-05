export type TeamMember = {
  name: string;
  role: string;
  group: string;
  focus: string;
};

export const teamGroups = [
  "Geschäftsführung",
  "Beratung & Projekte",
  "Softwareentwicklung",
  "Qualität & Prozesse",
  "Interne Organisation",
] as const;

export const team: TeamMember[] = [
  {
    name: "Sebastian Yrjö Küpper",
    role: "Geschäftsführer",
    group: "Geschäftsführung",
    focus: "Strategie, Kundenbeziehungen und Verantwortung für jedes Angebot.",
  },
  {
    name: "Katrin Ahlers",
    role: "Leitung Beratung",
    group: "Beratung & Projekte",
    focus: "Prozessanalysen und Zielbilder für gewachsene Systemlandschaften.",
  },
  {
    name: "Michael Brandt",
    role: "Senior Consultant Prozessmanagement",
    group: "Beratung & Projekte",
    focus: "Abläufe messbar machen und Schwachstellen priorisieren.",
  },
  {
    name: "Christoph Baumann",
    role: "Projektleiter",
    group: "Beratung & Projekte",
    focus: "Steuerung größerer Vorhaben mit mehreren Beteiligten.",
  },
  {
    name: "Sarah Lindemann",
    role: "Projektleiterin",
    group: "Beratung & Projekte",
    focus: "Einführungsprojekte, Zeitpläne und Kommunikation mit Fachbereichen.",
  },
  {
    name: "Tobias Reinhardt",
    role: "Leitung Softwareentwicklung",
    group: "Softwareentwicklung",
    focus: "Architekturentscheidungen und technische Qualität im Team.",
  },
  {
    name: "Nils Petersen",
    role: "Senior Softwareentwickler",
    group: "Softwareentwicklung",
    focus: "Ablösung von Altsystemen ohne Stillstand im Betrieb.",
  },
  {
    name: "Lena Hoffmann",
    role: "Softwareentwicklerin Frontend",
    group: "Softwareentwicklung",
    focus: "Bedienbare Oberflächen für Fachanwendungen und Portale.",
  },
  {
    name: "Daniel Krüger",
    role: "Softwareentwickler Backend",
    group: "Softwareentwicklung",
    focus: "Schnittstellen, Datenmigration und stabile Services.",
  },
  {
    name: "Miriam Sandner",
    role: "Cloud- und Plattform-Engineering",
    group: "Softwareentwicklung",
    focus: "Automatisierte Auslieferung und verlässlicher Betrieb.",
  },
  {
    name: "Jana Vosskühler",
    role: "Consultant Qualitätsmanagement",
    group: "Qualität & Prozesse",
    focus: "Nachweisbare Qualität, Audits und schlanke Dokumentation.",
  },
  {
    name: "Andreas Thiele",
    role: "Testmanagement und Testautomatisierung",
    group: "Qualität & Prozesse",
    focus: "Testkonzepte, die Fehler früh und wiederholbar finden.",
  },
  {
    name: "Jonas Wolters",
    role: "Recruiting und Personalgewinnung",
    group: "Interne Organisation",
    focus: "Erste Ansprechpartnerin für alle Bewerbungen.",
  },
  {
    name: "Fabian Ostermann",
    role: "Einarbeitung und Wissenstransfer",
    group: "Interne Organisation",
    focus: "Onboarding-Pläne, Patenmodell und internes Wissen.",
  },
  {
    name: "Petra Sieveking",
    role: "Kaufmännische Leitung",
    group: "Interne Organisation",
    focus: "Verträge, Abrechnung und kaufmännische Klarheit.",
  },
];

export function initialsOf(name: string) {
  const parts = name.split(" ").filter(Boolean);
  const first = parts[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1]! : "";
  return `${first.charAt(0)}${last.charAt(0)}`.toUpperCase();
}
