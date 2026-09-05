import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import insightsImg from "@/assets/insights.jpg";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { insights } from "@/data/content";

export const Route = createFileRoute("/insights/")({
  head: () => ({
    meta: [
      { title: "Insights – Fachbeiträge der Topscale GmbH" },
      {
        name: "description",
        content:
          "Fachbeiträge zu Modernisierung, Prozessmanagement und IT-Strategie – aus der Projektpraxis der Topscale GmbH.",
      },
      { property: "og:title", content: "Insights – Topscale GmbH" },
      {
        property: "og:description",
        content: "Gedanken aus der Projektpraxis: Legacy-Ablösung, Kennzahlen, Make-or-Buy.",
      },
    ],
  }),
  component: Insights,
});

function Insights() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Erfahrungen, die wir gern teilen"
        intro="Kurze Texte aus der Projektpraxis – ohne Buzzword-Bingo. Die Beiträge dienen als inhaltliche Beispiele für diese Website."
      />

      <section className="section">
        <div className="container-page grid gap-5 lg:grid-cols-3">
          <Reveal className="tile overflow-hidden lg:col-span-1 lg:row-span-2">
            <img
              src={insightsImg}
              alt="Heller Arbeitsplatz am Fenster mit Laptop und Notizen"
              width={1600}
              height={1068}
              loading="lazy"
              className="h-full min-h-64 w-full object-cover"
            />
          </Reveal>
          {insights.map((post, i) => (
            <Reveal key={post.slug} delay={i * 70} className="lg:col-span-2">
              <Link
                to="/insights/$slug"
                params={{ slug: post.slug }}
                className="tile group flex h-full flex-col p-8"
              >
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="rounded-full bg-surface px-3 py-1">{post.category}</span>
                  <span>{post.date}</span>
                  <span>· {post.readingTime}</span>
                </div>
                <h2 className="mt-5 font-display text-xl md:text-2xl">{post.title}</h2>
                <p className="mt-3 text-sm text-muted-foreground">{post.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand">
                  Beitrag lesen
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
