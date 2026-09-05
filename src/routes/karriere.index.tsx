import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Clock, GraduationCap, Heart, MapPin } from "lucide-react";

import careerImg from "@/assets/career.jpg";
import { PageHero } from "@/components/site/PageHero";
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

function Karriere() {
  return (
    <>
      <PageHero
        eyebrow="Karriere"
        title="Arbeiten bei Topscale"
        intro="Wir wachsen ruhig und bewusst. Wer bei uns anfängt, übernimmt schnell Verantwortung – und wird dabei nicht allein gelassen."
      />

      <section className="section">
        <div className="container-page grid items-center gap-12 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-border">
            <img
              src={careerImg}
              alt="Neue Kollegin wird vom Team im Büro begrüßt"
              width={1600}
              height={1008}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-2xl border border-border bg-card p-6">
                <div className="flex size-10 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <b.icon className="size-5" />
                </div>
                <h3 className="mt-4 font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/40 py-20">
        <div className="container-page">
          <h2 className="text-3xl font-bold">Offene Stellen</h2>
          <p className="mt-3 text-muted-foreground">
            Keine passende Stelle dabei? Bewerben Sie sich gern initiativ unter{" "}
            <a href="mailto:kontakt@topscale.gmbh" className="text-brand hover:underline">
              kontakt@topscale.gmbh
            </a>
            .
          </p>

          <ul className="mt-10 space-y-4">
            {jobs.map((job) => (
              <li key={job.slug}>
                <Link
                  to="/karriere/$slug"
                  params={{ slug: job.slug }}
                  className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-brand md:flex-row md:items-center md:justify-between"
                >
                  <div>
                    <h3 className="text-lg font-semibold">{job.title}</h3>
                    <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{job.summary}</p>
                    <div className="mt-3 flex flex-wrap gap-2 text-xs text-muted-foreground">
                      <span className="rounded-full bg-secondary px-3 py-1">{job.team}</span>
                      <span className="rounded-full bg-secondary px-3 py-1">{job.location}</span>
                      <span className="rounded-full bg-secondary px-3 py-1">{job.type}</span>
                    </div>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-brand">
                    Stelle ansehen <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
