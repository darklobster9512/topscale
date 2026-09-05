import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { initialsOf, team, teamGroups } from "@/data/team";


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

const teamFacts = [
  { value: `${team.length}`, label: "Kolleginnen und Kollegen" },
  { value: `${teamGroups.length}`, label: "Fachbereiche" },
  { value: "2009", label: "gegründet in Hamburg" },
];

function spanFor(n: number, i: number) {
  if (n === 1) return "lg:col-span-6";
  if (n === 2 || n === 4) return "lg:col-span-3";
  if (n === 3) return "lg:col-span-2";
  if (n === 5) return i < 3 ? "lg:col-span-2" : "lg:col-span-3";
  return "lg:col-span-2";
}

function Team() {
  return (
    <>
      <PageHero
        eyebrow="Unser Team"
        title="Die Menschen, mit denen Sie arbeiten"
        intro="Bei uns arbeiten Beratung, Entwicklung und Qualitätsmanagement in einem Haus. Sie behalten vom Erstgespräch bis zur Übergabe dieselben Ansprechpartner."
      />

      <section className="border-b border-hairline bg-surface/60">
        <div className="container-page grid grid-cols-3 divide-x divide-hairline">
          {teamFacts.map((fact) => (
            <div key={fact.label} className="px-1.5 py-5 text-center first:pl-0 last:pr-0 md:px-2 md:py-6">
              <p className="font-display text-xl md:text-3xl">{fact.value}</p>
              <p className="mt-1 text-xs text-muted-foreground md:text-sm">{fact.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container-page space-y-10 md:space-y-14">
          {teamGroups.map((group) => {
            const members = team.filter((m) => m.group === group);
            const n = members.length;
            return (
              <div key={group}>
                <Reveal className="flex flex-wrap items-baseline justify-between gap-3 border-b border-hairline pb-4">
                  <h2 className="font-display text-xl md:text-2xl">{group}</h2>
                  <p className="text-sm text-muted-foreground">
                    {n} {n === 1 ? "Person" : "Personen"}
                  </p>
                </Reveal>

                <div className="mt-6 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-6">
                  {members.map((member, i) => (
                    <Reveal
                      key={member.name}
                      delay={40 + i * 45}
                      className={`tile group flex h-full gap-4 p-5 md:p-6 ${spanFor(n, i)}`}
                    >
                      <span
                        aria-hidden="true"
                        className="grid size-12 shrink-0 place-items-center rounded-full bg-brand/10 font-display text-sm text-brand transition-colors group-hover:bg-brand group-hover:text-primary-foreground"
                      >
                        {initialsOf(member.name)}
                      </span>
                      <div className="min-w-0">
                        <h3 className="font-display text-base leading-snug">{member.name}</h3>
                        <p className="mt-1 text-sm text-brand">{member.role}</p>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{member.focus}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section border-t border-hairline bg-surface/60">
        <div className="container-page">
          <Reveal className="tile p-6 md:p-10">
            <h2 className="max-w-2xl text-2xl md:text-3xl">Wir wachsen weiter – ruhig und bewusst</h2>
            <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
              Neue Kolleginnen und Kollegen werden bei uns strukturiert eingearbeitet: fester Pate, klarer Plan für die
              ersten Wochen, echte Projektverantwortung erst danach.
            </p>
            <Link to="/karriere" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand">
              Offene Stellen ansehen <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

