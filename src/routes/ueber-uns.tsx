import { createFileRoute } from "@tanstack/react-router";

import hamburgImg from "@/assets/hamburg.jpg";
import officeImg from "@/assets/office.jpg";
import teamImg from "@/assets/hero-team.jpg";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Stat } from "@/components/site/Stat";

export const Route = createFileRoute("/ueber-uns")({
  head: () => ({
    meta: [
      { title: "Über uns – Topscale GmbH aus Hamburg" },
      {
        name: "description",
        content:
          "Die Topscale GmbH berät seit 2009 aus Hamburg in IT, Software und Management. Geschäftsführer: Sebastian Yrjö Küpper.",
      },
      { property: "og:title", content: "Über die Topscale GmbH" },
      {
        property: "og:description",
        content: "Seit 2009 am Hamburger Standort: Werte, Arbeitsweise und Team der Topscale GmbH.",
      },
    ],
  }),
  component: UeberUns,
});

const values = [
  {
    title: "Verbindlich",
    text: "Zusagen halten wir ein – bei Terminen, Budgets und beim ehrlichen Wort, wenn etwas nicht funktioniert.",
  },
  {
    title: "Verständlich",
    text: "Wir erklären technische Entscheidungen so, dass Fachbereich und Geschäftsführung mitentscheiden können.",
  },
  {
    title: "Nachhaltig",
    text: "Lösungen müssen auch nach unserem Projektende wartbar bleiben. Dokumentation gehört dazu.",
  },
];

const milestones = [
  { year: "2009", text: "Gründung der Topscale GmbH in Hamburg." },
  { year: "2013", text: "Aufbau des eigenen Entwicklungsteams für individuelle Fachanwendungen." },
  { year: "2018", text: "Erweiterung um Prozess- und Qualitätsmanagement-Beratung." },
  { year: "2024", text: "Fokus auf Automatisierung, Datenintegration und moderne Web-Architekturen." },
];

function UeberUns() {
  return (
    <>
      <PageHero
        eyebrow="Über uns"
        title="Ein Hamburger Beratungshaus mit langem Atem"
        intro="Seit 2009 arbeiten wir an Themen, die selten in einem Sprint gelöst sind. Was uns trägt: Handwerk, Klarheit und Verlässlichkeit."
      />

      <section className="section">
        <div className="container-page grid gap-4 md:grid-cols-3">
          <Reveal className="tile overflow-hidden md:col-span-2 md:row-span-2 md:max-h-96">
            <img
              src={teamImg}
              alt="Team in einem Workshop vor einer Wand mit Notizzetteln"
              width={1600}
              height={1067}
              loading="lazy"
              className="h-full min-h-64 w-full object-cover"
            />
          </Reveal>
          {values.map((value, i) => (
            <Reveal key={value.title} delay={i * 70} className="tile flex h-full flex-col justify-center p-7">
              <h2 className="font-display text-lg">{value.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{value.text}</p>
            </Reveal>
          ))}
          <Reveal delay={210} className="tile flex items-center justify-around gap-6 p-7 md:col-span-2">
            <Stat value={15} suffix="+" label="Jahre Erfahrung" />
            <Stat value={120} suffix="+" label="Projekte" />
            <Stat value={94} suffix=" %" label="Folgeaufträge" />
          </Reveal>
        </div>
      </section>

      <section className="border-y border-hairline bg-surface/60 py-20">
        <div className="container-page">
          <Reveal>
            <p className="eyebrow">Unser Weg</p>
            <h2 className="mt-4 text-3xl md:text-4xl">Gewachsen statt hochskaliert</h2>
          </Reveal>
          <ol className="mt-12 grid gap-8 md:grid-cols-4">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={i * 70} as="li" className="border-t border-brand/70 pt-5">
                <p className="font-display text-2xl text-brand">{m.year}</p>
                <p className="mt-3 text-sm text-muted-foreground">{m.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-4 lg:grid-cols-3">
          <Reveal className="tile p-8">
            <p className="eyebrow">Geschäftsführung</p>
            <p className="mt-4 font-display text-xl">Sebastian Yrjö Küpper</p>
            <p className="mt-3 text-sm text-muted-foreground">
              Verantwortlich für Beratung, Projektportfolio und die fachliche Entwicklung des Teams.
            </p>
            <p className="mt-6 text-xs uppercase tracking-wider text-muted-foreground">
              Amtsgericht Hamburg · HRB 133665
            </p>
          </Reveal>
          <Reveal delay={70} className="tile overflow-hidden lg:col-span-2">
            <img
              src={officeImg}
              alt="Helles, modernes Bürogebäude von innen"
              width={1600}
              height={1067}
              loading="lazy"
              className="h-full min-h-56 w-full object-cover"
            />
          </Reveal>
          <Reveal delay={140} className="tile overflow-hidden lg:col-span-2">
            <img
              src={hamburgImg}
              alt="Elbphilharmonie und Hamburger Hafen"
              width={1600}
              height={900}
              loading="lazy"
              className="h-full min-h-56 w-full object-cover"
            />
          </Reveal>
          <Reveal delay={210} className="tile p-8">
            <p className="eyebrow">Standort</p>
            <p className="mt-4 font-display text-xl">Hamburg, Zirkusweg 1</p>
            <p className="mt-3 text-sm text-muted-foreground">
              Wenige Schritte von den Landungsbrücken. Kurze Wege zu Kunden in der Hansestadt, gute
              Anbindung für alles andere.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
