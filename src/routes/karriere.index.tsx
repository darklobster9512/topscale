import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Clock, GraduationCap, Heart, MapPin } from "lucide-react";
import { useState } from "react";

import careerImg from "@/assets/career.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { jobs } from "@/data/jobs";

export const Route = createFileRoute("/karriere/")({
  head: () => ({
    meta: [
      { title: "Karriere – Stellenangebote bei der Topscale GmbH" },
      {
        name: "description",
        content:
          "Offene Stellen bei der Topscale GmbH in Hamburg: IT-Consulting, Softwareentwicklung, Projektmanagement und Werkstudium im Qualitätsmanagement.",
      },
      { property: "og:title", content: "Karriere bei der Topscale GmbH" },
      {
        property: "og:description",
        content: "Offene Stellen in Hamburg – hybrid, unbefristet und mit echter Verantwortung.",
      },
    ],
  }),
  component: Karriere,
});

const benefits = [
  { icon: Clock, title: "Flexibel arbeiten", text: "Gleitzeit und bis zu drei Tage Homeoffice pro Woche." },
  { icon: GraduationCap, title: "Weiterbildung", text: "Eigenes Budget für Schulungen, Zertifikate und Konferenzen." },
  { icon: Heart, title: "Team statt Bodyleasing", text: "Langfristige Projekte, feste Kolleginnen und Kollegen." },
  { icon: MapPin, title: "Bestes Büro", text: "Zirkusweg 1, direkt an den Landungsbrücken in Hamburg." },
];

const applicationSteps = [
  { step: "01", title: "Bewerbung", text: "Kurzbewerbung über das Formular – Zeugnisse später." },
  { step: "02", title: "Kennenlernen", text: "30 Minuten Video-Gespräch mit Fachbereich und Geschäftsführung." },
  { step: "03", title: "Fachgespräch", text: "Ein realistisches Fallbeispiel, kein Rätselraten." },
  { step: "04", title: "Entscheidung", text: "Rückmeldung innerhalb einer Woche, Angebot mit allen Zahlen." },
];

function Karriere() {
  const areas = ["Alle", ...Array.from(new Set(jobs.map((job) => job.team)))];
  const [area, setArea] = useState("Alle");
  const visible = area === "Alle" ? jobs : jobs.filter((job) => job.team === area);

  return (
    <>
      <PageHero
        eyebrow="Karriere"
        title="Arbeiten bei Topscale"
        intro="Wir wachsen ruhig und bewusst. Wer bei uns anfängt, übernimmt schnell Verantwortung – und wird dabei nicht allein gelassen."
      />

      <section className="section">
        <div className="container-page grid gap-4 md:grid-cols-4">
          <Reveal className="tile overflow-hidden md:col-span-2 md:row-span-2">
            <img
              src={careerImg}
              alt="Team arbeitet gemeinsam an einem Tisch mit Laptops"
              width={1600}
              height={1050}
              loading="lazy"
              className="h-full min-h-48 w-full md:min-h-64 object-cover"
            />
          </Reveal>
          {benefits.map((benefit, i) => (
            <Reveal key={benefit.title} delay={i * 70} className="tile p-7">
              <div className="flex size-10 items-center justify-center rounded-xl bg-brand-soft text-brand">
                <benefit.icon className="size-5" />
              </div>
              <h2 className="mt-5 font-display text-base">{benefit.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{benefit.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-hairline bg-surface/60 py-12 md:py-20">
        <div className="container-page">
          <Reveal>
            <p className="eyebrow">Bewerbungsprozess</p>
            <h2 className="mt-4 text-2xl md:text-4xl">Vier Schritte, klare Rückmeldung</h2>
          </Reveal>
          <div className="mt-8 grid md:mt-12 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-4">
            {applicationSteps.map((step, i) => (
              <Reveal key={step.step} delay={i * 70} className="bg-card p-6 md:p-7">
                <p className="font-display text-sm text-brand">{step.step}</p>
                <h3 className="mt-3 font-display text-base">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Offene Stellen</p>
              <h2 className="mt-4 text-2xl md:text-4xl">{jobs.length} Positionen in Hamburg</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {areas.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setArea(item)}
                  className={`min-h-10 rounded-full border px-4 text-sm transition-colors ${
                    area === item
                      ? "border-brand bg-brand-soft text-brand"
                      : "border-hairline text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </Reveal>

          <ul className="mt-7 space-y-3 md:mt-10 md:space-y-4">
            {visible.map((job, i) => (
              <Reveal key={job.slug} delay={i * 50} as="li">
                <Link
                  to="/karriere/$slug"
                  params={{ slug: job.slug }}
                  className="tile group flex flex-col gap-4 p-5 md:flex-row md:items-center md:justify-between md:gap-5 md:p-8"
                >
                  <div>
                    <h3 className="font-display text-lg md:text-xl">{job.title}</h3>
                    <p className="mt-2.5 max-w-2xl text-sm text-muted-foreground">{job.summary}</p>
                    <div className="mt-4 flex flex-wrap gap-2 text-xs text-muted-foreground">
                      <span className="rounded-full bg-surface px-3 py-1">{job.team}</span>
                      <span className="rounded-full bg-surface px-3 py-1">{job.location}</span>
                      <span className="rounded-full bg-surface px-3 py-1">{job.model}</span>
                      {job.salary && (
                        <span className="rounded-full bg-brand-soft px-3 py-1 text-brand">
                          {job.salary}
                        </span>
                      )}
                    </div>

                  </div>
                  <span className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-brand">
                    Stelle ansehen
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">
              Keine passende Stelle dabei? Bewerben Sie sich gern initiativ – oder schreiben Sie an{" "}
              <a href="mailto:kontakt@topscale.gmbh" className="text-brand hover:underline">
                kontakt@topscale.gmbh
              </a>
              .
            </p>
            <Link
              to="/karriere/bewerbung"
              search={{ stelle: "Initiativbewerbung" }}
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-brand px-6 text-sm font-semibold text-brand-foreground transition-transform hover:-translate-y-0.5"
            >
              Initiativ bewerben <ArrowRight className="size-4" />
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
