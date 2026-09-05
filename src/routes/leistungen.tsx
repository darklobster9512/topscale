import { createFileRoute } from "@tanstack/react-router";

import consultingImg from "@/assets/consulting.jpg";
import teamImg from "@/assets/hero-team.jpg";
import softwareImg from "@/assets/software.jpg";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/leistungen")({
  head: () => ({
    meta: [
      { title: "Leistungen – Consulting, Software & Qualität | Topscale GmbH" },
      {
        name: "description",
        content:
          "IT-Consulting, individuelle Softwareentwicklung, Projekt-, Prozess- und Qualitätsmanagement: unsere Leistungen für Mittelstand und Konzerne.",
      },
      { property: "og:title", content: "Leistungen der Topscale GmbH" },
      {
        property: "og:description",
        content:
          "Von der Analyse bis zum Betrieb: Consulting, Softwareentwicklung und Managementberatung aus einer Hand.",
      },
    ],
  }),
  component: Leistungen,
});

const blocks = [
  {
    id: "it-consulting",
    title: "IT-Consulting",
    image: consultingImg,
    text: "Wir bewerten Ihre Systemlandschaft, priorisieren Handlungsfelder und entwerfen eine Roadmap, die zu Budget, Team und Organisation passt.",
    deliverables: [
      "IST-Analyse mit Risikobewertung",
      "Zielarchitektur und Technologieentscheidung",
      "Make-or-Buy und Anbieterauswahl",
      "Roadmap mit Aufwands- und Nutzenschätzung",
    ],
    questions: [
      "Welche Systeme bremsen uns wirklich?",
      "Kaufen oder selbst entwickeln?",
      "Was zuerst, was später?",
    ],
    tools: ["Architektur-Reviews", "TCO-Analysen", "Zielbild-Workshops"],
  },
  {
    id: "softwareentwicklung",
    title: "Softwareentwicklung",
    image: softwareImg,
    text: "Individuelle Anwendungen, Schnittstellen und Automatisierung – entwickelt in kleinen Teams mit Tests, Reviews und nachvollziehbarer Dokumentation.",
    deliverables: [
      "Web-Anwendungen und Fachverfahren",
      "API- und Integrationsentwicklung",
      "Datenmigration und Altsystem-Ablösung",
      "Wartung, Support und Weiterentwicklung",
    ],
    questions: [
      "Wie lösen wir das Altsystem ohne Stillstand ab?",
      "Wie binden wir Partner sauber an?",
      "Wer kann die Software später betreuen?",
    ],
    tools: ["TypeScript & React", "Node.js & PostgreSQL", "CI/CD & automatisierte Tests"],
  },
  {
    id: "projekt-prozess-qualitaet",
    title: "Projekt-, Prozess- & Qualitätsmanagement",
    image: teamImg,
    text: "Wir übernehmen Projektleitung, richten Prozesse neu aus und etablieren Qualitätssicherung, die im Alltag tatsächlich gelebt wird.",
    deliverables: [
      "Projektleitung klassisch, agil oder hybrid",
      "Prozessaufnahme, -modellierung und -optimierung",
      "Qualitätsstandards, Reviews und interne Audits",
      "Kennzahlen und Reporting für die Geschäftsführung",
    ],
    questions: [
      "Warum dauert alles länger als geplant?",
      "Welche drei Kennzahlen brauchen wir wirklich?",
      "Wie bestehen wir das nächste Audit ruhig?",
    ],
    tools: ["Scrum & PRINCE2", "BPMN-Modellierung", "Audit- und Reviewverfahren"],
  },
];

function Leistungen() {
  return (
    <>
      <PageHero
        eyebrow="Leistungen"
        title="Beratung und Umsetzung aus einer Hand"
        intro="Wir arbeiten dort, wo Strategie, Technik und Organisation zusammentreffen. Das spart Übergaben, Reibung und Zeit."
      />

      <div className="section">
        <div className="container-page space-y-6">
          {blocks.map((block, i) => (
            <Reveal key={block.id} delay={i * 60} className="tile overflow-hidden">
              <div className="grid lg:grid-cols-[1.05fr_1fr]">
                <div className="p-6 md:p-12">
                  <p className="eyebrow">0{i + 1}</p>
                  <h2 className="mt-4 font-display text-2xl md:text-4xl">{block.title}</h2>
                  <p className="mt-5 text-muted-foreground">{block.text}</p>

                  <div className="mt-7 grid gap-6 sm:grid-cols-2 md:mt-9 md:gap-8">
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Ergebnisse
                      </h3>
                      <ul className="mt-4 space-y-2.5 text-sm">
                        {block.deliverables.map((d) => (
                          <li key={d} className="flex gap-3 text-muted-foreground">
                            <span className="mt-2 size-1 shrink-0 rounded-full bg-brand" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Typische Fragen
                      </h3>
                      <ul className="mt-4 space-y-3 text-sm italic text-muted-foreground">
                        {block.questions.map((q) => (
                          <li key={q}>„{q}"</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-9 flex flex-wrap gap-2">
                    {block.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-hairline bg-surface px-3.5 py-1.5 text-xs text-muted-foreground"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="min-h-48 border-t border-hairline md:min-h-64 lg:border-l lg:border-t-0">
                  <img
                    src={block.image}
                    alt={block.title}
                    width={1600}
                    height={1067}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <CtaBand
        title="Passt eine dieser Leistungen zu Ihrem Vorhaben?"
        text="Schreiben Sie uns kurz, worum es geht – wir melden uns mit einer ersten Einschätzung."
      />
    </>
  );
}
