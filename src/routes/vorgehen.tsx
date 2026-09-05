import { createFileRoute } from "@tanstack/react-router";

const insightsImg = "/images/insights.jpg";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { collaboration, process, quality } from "@/data/content";

export const Route = createFileRoute("/vorgehen")({
  head: () => ({
    meta: [
      { title: "Vorgehen in Projekten | Topscale GmbH" },
      {
        name: "description",
        content:
          "Unsere Arbeitsweise in vier Phasen: verstehen, entscheiden, umsetzen, verankern – mit festen Ansprechpartnern und transparenten Aufwänden.",
      },
      { property: "og:title", content: "Vorgehen – Topscale GmbH" },
      {
        property: "og:description",
        content: "Vier Phasen, klare Ergebnisse: wie Projekte bei der Topscale GmbH ablaufen.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/vorgehen" },
    ],
    links: [{ rel: "canonical", href: "/vorgehen" }],
  }),
  component: Vorgehen,
});


function Vorgehen() {
  return (
    <>
      <PageHero
        eyebrow="Vorgehen"
        title="Nachvollziehbar von der Analyse bis zum Betrieb"
        intro="Wir arbeiten in kurzen Schritten mit sichtbaren Ergebnissen. Sie wissen jederzeit, wo das Projekt steht, was es kostet und was als Nächstes ansteht."
      />

      <section className="section">
        <div className="container-page grid items-stretch gap-5 md:grid-cols-2">
          <Reveal className="tile overflow-hidden md:col-span-2">
            <img
              src={insightsImg}
              alt="Projektteam bespricht Zwischenergebnisse an einem Whiteboard"
              width={1600}
              height={1068}
              className="h-44 w-full object-cover sm:h-64 md:h-80"
            />
          </Reveal>

          {process.map((phase, i) => (
            <Reveal key={phase.step} delay={80 + i * 70} className="tile flex h-full flex-col p-6 md:p-8">
              <p className="font-display text-sm text-brand">{phase.step}</p>
              <h2 className="mt-4 font-display text-xl">{phase.title}</h2>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">{phase.text}</p>
              <dl className="mt-6 space-y-3 border-t border-hairline pt-5 text-sm">
                <div>
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground">Ergebnis</dt>
                  <dd className="mt-1">{phase.outcome}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground">Typische Dauer</dt>
                  <dd className="mt-1">{phase.duration}</dd>
                </div>
              </dl>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section border-t border-hairline bg-surface/60">
        <div className="container-page">
          <Reveal>
            <p className="eyebrow">Zusammenarbeit</p>
            <h2 className="mt-4 max-w-2xl text-2xl md:text-4xl">Wie wir zusammenarbeiten</h2>
          </Reveal>
          <div className="mt-7 grid md:mt-10 gap-5 md:grid-cols-2">
            {collaboration.map((item, i) => (
              <Reveal key={item.title} delay={80 + i * 70} className="tile flex h-full flex-col p-6 md:p-7">
                <h3 className="font-display text-lg">{item.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <Reveal>
            <p className="eyebrow">Qualität & Sicherheit</p>
            <h2 className="mt-4 max-w-2xl text-2xl md:text-4xl">Standards, die nicht verhandelt werden</h2>
          </Reveal>
          <div className="mt-7 grid md:mt-10 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {quality.map((item, i) => (
              <Reveal key={item.title} delay={80 + i * 60} className="tile flex h-full flex-col p-6 md:p-7">
                <h3 className="font-display text-base">{item.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
