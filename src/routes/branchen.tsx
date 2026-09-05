import { createFileRoute } from "@tanstack/react-router";

import industriesImg from "@/assets/industries.jpg";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { industries } from "@/data/content";

export const Route = createFileRoute("/branchen")({
  head: () => ({
    meta: [
      { title: "Branchen – Handel, Logistik, Industrie & Verwaltung | Topscale GmbH" },
      {
        name: "description",
        content:
          "Branchenerfahrung der Topscale GmbH: Handel und E-Commerce, Transport und Logistik, Industrie, öffentlicher Sektor und Finanzdienstleistung.",
      },
      { property: "og:title", content: "Branchen – Topscale GmbH" },
      {
        property: "og:description",
        content: "Wo wir zu Hause sind: Handel, Logistik, Industrie, Verwaltung und Finanzdienstleistung.",
      },
    ],
  }),
  component: Branchen;
});

function Branchen() {
  return (
    <>
      <PageHero
        eyebrow="Branchen"
        title="Wir kennen die Regeln Ihres Feldes"
        intro="Technik ist übertragbar, Fachlichkeit nicht. In diesen Branchen arbeiten wir seit Jahren und kennen die typischen Stolperstellen."
      />

      <section className="section">
        <div className="container-page grid gap-5 lg:grid-cols-3">
          <Reveal className="tile relative overflow-hidden lg:col-span-2 lg:row-span-2">
            <img
              src={industriesImg}
              alt="Helle, automatisierte Logistikhalle"
              width={1408}
              height={912}
              loading="lazy"
              className="h-full min-h-72 w-full object-cover"
            />
          </Reveal>
          {industries.map((industry, i) => (
            <Reveal key={industry.slug} delay={i * 70} className="tile p-8">
              <h2 className="font-display text-xl">{industry.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{industry.text}</p>
              <ul className="mt-5 space-y-2 text-sm">
                {industry.points.map((point) => (
                  <li key={point} className="flex gap-3 text-muted-foreground">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-brand" />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        title="Ihre Branche fehlt?"
        text="Auch dann lohnt das Gespräch: Unsere Methodik ist übertragbar, Fachlichkeit erarbeiten wir gemeinsam mit Ihren Teams."
      />
    </>
  );
}
