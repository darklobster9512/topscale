import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { team, teamGroups } from "@/data/team";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Unser Team – Beratung, Entwicklung und Qualität | Topscale GmbH" },
      {
        name: "description",
        content:
          "Die Menschen hinter der Topscale GmbH: Geschäftsführung, Beratung und Projekte, Softwareentwicklung, Qualität und Prozesse sowie interne Organisation.",
      },
      { property: "og:title", content: "Unser Team – Topscale GmbH" },
      {
        property: "og:description",
        content: "Feste Ansprechpartner statt wechselnder Besetzung – das Team der Topscale GmbH.",
      },
    ],
  }),
  component: Team,
});

function Team() {
  return (
    <>
      <PageHero
        eyebrow="Unser Team"
        title="Die Menschen, mit denen Sie arbeiten"
        intro="Bei uns arbeiten Beratung, Entwicklung und Qualitätsmanagement in einem Haus. Sie behalten vom Erstgespräch bis zur Übergabe dieselben Ansprechpartner."
      />

      {teamGroups.map((group, gi) => {
        const members = team.filter((m) => m.group === group);
        return (
          <section
            key={group}
            className={
              gi % 2 === 1 ? "section border-t border-hairline bg-surface/60" : "section border-t border-hairline"
            }
          >
            <div className="container-page">
              <Reveal>
                <p className="eyebrow">{group}</p>
                <p className="mt-3 text-sm text-muted-foreground">
                  {members.length} {members.length === 1 ? "Person" : "Personen"}
                </p>
              </Reveal>
              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {members.map((member, i) => (
                  <Reveal key={member.name} delay={60 + i * 50} className="tile p-7">
                    <h2 className="font-display text-lg">{member.name}</h2>
                    <p className="mt-2 text-sm text-muted-foreground">{member.role}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="section border-t border-hairline">
        <div className="container-page">
          <Reveal className="tile p-8 md:p-10">
            <h2 className="max-w-2xl text-2xl md:text-3xl">Wir wachsen weiter – ruhig und bewusst</h2>
            <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
              Neue Kolleginnen und Kollegen werden bei uns strukturiert eingearbeitet: fester Pate, klarer Plan für die
              ersten Wochen, echte Projektverantwortung erst danach.
            </p>
            <Link
              to="/karriere"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand"
            >
              Offene Stellen ansehen <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
