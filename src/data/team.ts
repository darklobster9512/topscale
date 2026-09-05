export type TeamMember = {
  name: string;
  role: string;
  group: string;
};

export const teamGroups = [
  "Geschäftsführung",
  "Beratung & Projekte",
  "Softwareentwicklung",
  "Qualität & Prozesse",
  "Interne Organisation",
] as const;

export const team: TeamMember[] = [
  { name: "Sebastian Yrjö Küpper", role: "Geschäftsführer", group: "Geschäftsführung" },
  { name: "Katrin Ahlers", role: "Leitung Beratung", group: "Beratung & Projekte" },
  { name: "Michael Brandt", role: "Senior Consultant Prozessmanagement", group: "Beratung & Projekte" },
  { name: "Christoph Baumann", role: "Projektleiter", group: "Beratung & Projekte" },
  { name: "Sarah Lindemann", role: "Projektleiterin", group: "Beratung & Projekte" },
  { name: "Tobias Reinhardt", role: "Leitung Softwareentwicklung", group: "Softwareentwicklung" },
  { name: "Nils Petersen", role: "Senior Softwareentwickler", group: "Softwareentwicklung" },
  { name: "Lena Hoffmann", role: "Softwareentwicklerin Frontend", group: "Softwareentwicklung" },
  { name: "Daniel Krüger", role: "Softwareentwickler Backend", group: "Softwareentwicklung" },
  { name: "Miriam Sandner", role: "Cloud- und Plattform-Engineering", group: "Softwareentwicklung" },
  { name: "Jana Vosskühler", role: "Consultant Qualitätsmanagement", group: "Qualität & Prozesse" },
  { name: "Andreas Thiele", role: "Testmanagement und Testautomatisierung", group: "Qualität & Prozesse" },
  { name: "Annika Wolters", role: "Recruiting und Personalgewinnung", group: "Interne Organisation" },
  { name: "Fabian Ostermann", role: "Einarbeitung und Wissenstransfer", group: "Interne Organisation" },
  { name: "Petra Sieveking", role: "Kaufmännische Leitung", group: "Interne Organisation" },
];
