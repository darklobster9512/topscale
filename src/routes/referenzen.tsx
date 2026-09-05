import { createFileRoute } from "@tanstack/react-router";

import { CtaBand } from "@/components/site/CtaBand";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { references } from "@/data/content";

export const Route = createFileRoute("/referenzen")({
  head: () => ({
    meta: [
      { title: "Referenzen – Projektbeispiele der Topscale GmbH" },
      {
        name: "description",
        content:
          "Anonymisierte Projektbeispiele der Topscale GmbH aus Handel, Logistik, Industrie und Versorgung – mit Ausgangslage, Vorgehen und Ergebnis.",
      },
      { property: "og:title", content: "Referenzen – Topscale GmbH" },
      {
        property: "og:description",
        content: "Projektbeispiele mit Ausgangslage, Vorgehen, Ergebnis und Kennzahl.",
      },
    ],
  }),
  component: Referenzen,
});

function Referenzen() {
  return (
    <>
      <PageHero
        eyebrow="Referenzen"
        title="Ergebnisse, keine Logo-Wand"
        intro="Viele unserer Projekte sind vertraulich. Deshalb zeigen wir sie anonymisiert – dafür mit dem, was zählt: Ausgangslage, Vorgehen und Wirkung."
      />

      <section className="section">
        <div className="container-page space-y-6">
          {references.map((ref, i) => (
            <Reveal key={ref.slug} delay={i * 60} className="tile p-8 md:p-10">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto]">
                <div>
                  <p className="eyebrow">{ref.client}</p>
                  <h2 className="mt-4 font-display text-2xl md:text-3xl">{ref.title}</h2>
                  <dl className="mt-7 grid gap-6 md:grid-cols-3">
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Ausgangslage
                      </dt>
                      <dd className="mt-2 text-sm text-muted-foreground">{ref.situation}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Vorgehen
                      </dt>
                      <dd className="mt-2 text-sm text-muted-foreground">{ref.approach}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Ergebnis
                      </dt>
                      <dd className="mt-2 text-sm text-muted-foreground">{ref.result}</dd>
                    </div>
                  </dl>
                </div>
                <div className="flex flex-col justify-center rounded-xl bg-surface px-8 py-6 text-center lg:min-w-52">
                  <p className="font-display text-4xl text-brand">{ref.metric}</p>
                  <p className="mt-2 text-xs text-muted-foreground">{ref.metricLabel}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        title="Ein ähnlicher Fall bei Ihnen?"
        text="Erzählen Sie uns kurz die Ausgangslage – wir sagen Ihnen offen, ob und wie wir helfen können."
      />
    </>
  );
}
