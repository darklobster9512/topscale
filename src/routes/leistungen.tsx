import { Link, createFileRoute } from "@tanstack/react-router";

import consultingImg from "@/assets/consulting.jpg";
import softwareImg from "@/assets/software.jpg";
import teamImg from "@/assets/hero-team.jpg";
import { PageHero } from "@/components/site/PageHero";

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
    title: "IT-Consulting",
    image: consultingImg,
    text: "Wir bewerten Ihre IT-Landschaft, priorisieren Handlungsfelder und entwerfen eine Roadmap, die zu Budget und Organisation passt.",
    points: [
      "IST-Analyse und Systembewertung",
      "Architektur- und Technologieentscheidungen",
      "Make-or-Buy und Anbieterauswahl",
      "Digitalisierungs-Roadmap mit Aufwandsschätzung",
    ],
  },
  {
    title: "Softwareentwicklung",
    image: softwareImg,
    text: "Individuelle Anwendungen, Schnittstellen und Automatisierungen – entwickelt in kleinen Teams mit klaren Qualitätsstandards.",
    points: [
      "Web-Anwendungen und Fachverfahren",
      "API- und Integrationsentwicklung",
      "Datenmigration und Altsystem-Ablösung",
      "Wartung, Support und Weiterentwicklung",
    ],
  },
  {
    title: "Projekt-, Prozess- & Qualitätsmanagement",
    image: teamImg,
    text: "Wir übernehmen Projektleitung, richten Prozesse neu aus und etablieren Qualitätssicherung, die im Alltag wirklich gelebt wird.",
    points: [
      "Projektleitung klassisch, agil oder hybrid",
      "Prozessaufnahme, -modellierung und -optimierung",
      "Qualitätsstandards, Reviews und interne Audits",
      "Kennzahlen und Reporting für die Geschäftsführung",
    ],
  },
];

function Leistungen() {
  return (
    <>
      <PageHero
        eyebrow="Leistungen"
        title="Beratung und Umsetzung – aus einer Hand"
        intro="Wir arbeiten dort, wo Strategie, Technik und Organisation zusammentreffen. Das spart Übergaben, Reibung und Zeit."
      />

      <div className="section">
        <div className="container-page space-y-20">
          {blocks.map((block, i) => (
            <section
              key={block.title}
              className={`grid items-center gap-10 md:grid-cols-2 ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="overflow-hidden rounded-2xl border border-border">
                <img
                  src={block.image}
                  alt={block.title}
                  width={1408}
                  height={1008}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold md:text-3xl">{block.title}</h2>
                <p className="mt-4 text-muted-foreground">{block.text}</p>
                <ul className="mt-6 space-y-3 text-sm">
                  {block.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                      <span className="text-muted-foreground">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>
      </div>

      <section className="border-t border-border bg-secondary/40 py-16">
        <div className="container-page text-center">
          <h2 className="text-2xl font-bold md:text-3xl">Passt eine dieser Leistungen zu Ihrem Vorhaben?</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Schreiben Sie uns kurz, worum es geht – wir melden uns mit einer ersten Einschätzung.
          </p>
          <Link
            to="/kontakt"
            className="mt-8 inline-flex rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </>
  );
}
