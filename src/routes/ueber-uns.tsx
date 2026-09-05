import { createFileRoute } from "@tanstack/react-router";

import hamburgImg from "@/assets/hamburg.jpg";
import teamImg from "@/assets/hero-team.jpg";
import { PageHero } from "@/components/site/PageHero";

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
    text: "Lösungen sollen auch nach unserem Projektende wartbar bleiben. Dokumentation gehört dazu.",
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
        title="Ein Hamburger Team mit langem Atem"
        intro="Seit 2009 begleiten wir Unternehmen bei Themen, die selten in einem Sprint gelöst sind. Was uns trägt: Handwerk, Klarheit und Verlässlichkeit."
      />

      <section className="section">
        <div className="container-page grid items-center gap-12 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-border">
            <img
              src={teamImg}
              alt="Team der Topscale GmbH bei einer Besprechung"
              width={1600}
              height={1008}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold">Wofür wir stehen</h2>
            <div className="mt-8 space-y-6">
              {values.map((v) => (
                <div key={v.title}>
                  <h3 className="text-lg font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40 py-20">
        <div className="container-page">
          <h2 className="text-3xl font-bold">Unser Weg</h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-4">
            {milestones.map((m) => (
              <li key={m.year} className="border-t-2 border-brand pt-4">
                <p className="font-display text-2xl font-bold text-brand">{m.year}</p>
                <p className="mt-2 text-sm text-muted-foreground">{m.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">Standort Hamburg</h2>
            <p className="mt-5 text-muted-foreground">
              Unser Büro liegt am Zirkusweg 1, wenige Schritte von den Landungsbrücken. Kurze Wege
              zu Kunden in der Hansestadt, gute Anbindung für alles andere.
            </p>
            <div className="mt-8 rounded-2xl border border-border bg-card p-6">
              <p className="text-sm font-semibold">Geschäftsführung</p>
              <p className="mt-1 text-muted-foreground">Sebastian Yrjö Küpper</p>
              <p className="mt-4 text-sm font-semibold">Anschrift</p>
              <p className="mt-1 text-muted-foreground">
                Topscale GmbH · Zirkusweg 1 · 20359 Hamburg
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border">
            <img
              src={hamburgImg}
              alt="Hamburger Hafen mit Elbphilharmonie bei Tageslicht"
              width={1600}
              height={912}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
