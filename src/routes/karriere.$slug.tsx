import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowRight, Briefcase, Clock, Euro, MapPin } from "lucide-react";

import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/site/Reveal";
import { getJob } from "@/data/jobs";

export const Route = createFileRoute("/karriere/$slug")({
  loader: ({ params }) => {
    const job = getJob(params.slug);
    if (!job) throw notFound();
    return { job };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Stelle nicht gefunden – Topscale GmbH" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { job } = loaderData;
    return {
      meta: [
        { title: `${job.title} – Karriere bei Topscale` },
        { name: "description", content: job.summary },
        { property: "og:title", content: `${job.title} – Topscale GmbH` },
        { property: "og:description", content: job.summary },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/karriere/${job.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/karriere/${job.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "JobPosting",
            title: job.title,
            description: `${job.description} Aufgaben: ${job.tasks.join("; ")}. Profil: ${job.profile.join("; ")}.`,
            employmentType: job.type,
            hiringOrganization: {
              "@type": "Organization",
              name: "Topscale GmbH",
              sameAs: "https://topscale.gmbh",
            },
            jobLocation: {
              "@type": "Place",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Zirkusweg 1",
                postalCode: "20359",
                addressLocality: "Hamburg",
                addressCountry: "DE",
              },
            },
            ...(job.salary ? { estimatedSalary: job.salary } : {}),
          }),
        },
      ],
    };
  },
  component: JobDetail,
});

function JobDetail() {
  const { job } = Route.useLoaderData();

  const sections = [
    { title: "Ihre Aufgaben", items: job.tasks },
    { title: "Ihr Profil", items: job.profile },
    { title: "Was wir bieten", items: job.offer },
  ];

  const facts = [
    { icon: MapPin, label: "Standort", value: job.location },
    { icon: Briefcase, label: "Modell", value: job.model },
    ...(job.workingHours
      ? [{ icon: Clock, label: "Arbeitszeit", value: job.workingHours }]
      : []),
    ...(job.salary ? [{ icon: Euro, label: "Vergütung", value: job.salary }] : []),
  ];

  return (
    <>
      <section className="relative overflow-hidden border-b border-hairline bg-surface/60">
        <div className="grid-texture pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="container-page relative py-10 md:py-20">
          <Breadcrumbs
            items={[
              { label: "Startseite", to: "/" },
              { label: "Karriere", to: "/karriere" },
              { label: job.title },
            ]}
          />
          <p className="eyebrow mt-6 md:mt-8">Karriere · {job.team}</p>
          <h1 className="mt-4 max-w-3xl text-[1.75rem] leading-tight sm:text-3xl md:text-5xl">{job.title}</h1>
          <div className="mt-5 flex flex-wrap gap-2 md:mt-6 text-xs text-muted-foreground">
            <span className="rounded-full border border-hairline bg-card px-3 py-1">{job.location}</span>
            <span className="rounded-full border border-hairline bg-card px-3 py-1">{job.type}</span>
            {job.status && (
              <span className="rounded-full border border-brand/30 bg-brand-soft px-3 py-1 text-brand">
                {job.status}
              </span>
            )}
          </div>
          <p className="mt-5 max-w-2xl text-base text-muted-foreground md:mt-7 md:text-lg">{job.summary}</p>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-4 lg:grid-cols-12">
          <Reveal className="tile order-2 space-y-8 p-6 sm:space-y-10 sm:p-9 lg:order-1 lg:col-span-8">
            <div>
              <p className="eyebrow">Über die Position</p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{job.description}</p>
            </div>
            {sections.map((section, i) => (
              <div key={section.title} className="border-t border-hairline pt-8">
                <p className="eyebrow">{`0${i + 1}`}</p>
                <h2 className="mt-3 font-display text-2xl">{section.title}</h2>
                <ul className="mt-6 space-y-3">
                  {section.items.map((item, j) => (
                    <li key={item} className="flex gap-4 text-sm leading-relaxed text-muted-foreground">
                      <span className="pt-0.5 font-mono text-[11px] text-brand">
                        — {String(j + 1).padStart(2, "0")}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Reveal>

          <aside className="order-1 lg:order-2 lg:col-span-4">
            <div className="tile space-y-5 p-6 md:p-7 lg:sticky lg:top-28">
              <p className="eyebrow">Eckdaten</p>
              <ul className="space-y-4 text-sm">
                {facts.map((fact) => (
                  <li key={fact.label} className="flex items-start gap-3">
                    <fact.icon className="mt-0.5 size-4 text-muted-foreground" />
                    <span>
                      <span className="block text-[11px] uppercase tracking-widest text-muted-foreground">
                        {fact.label}
                      </span>
                      <span>{fact.value}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                to="/karriere/bewerbung"
                search={{ stelle: job.title }}
                className="mt-2 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-brand px-5 text-sm font-semibold text-brand-foreground transition-transform hover:-translate-y-0.5"
              >
                Jetzt bewerben <ArrowRight className="size-4" />
              </Link>
              <p className="text-xs text-muted-foreground">
                Direkter Ansprechpartner:{" "}
                <a href="mailto:kontakt@topscale.gmbh" className="text-brand hover:underline">
                  kontakt@topscale.gmbh
                </a>
              </p>
            </div>
          </aside>
        </div>
      </section>

      <div className="sticky bottom-0 z-40 border-t border-hairline bg-background/95 px-5 py-3 backdrop-blur-xl lg:hidden">
        <Link
          to="/karriere/bewerbung"
          search={{ stelle: job.title }}
          className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand text-sm font-semibold text-brand-foreground"
        >
          Jetzt bewerben <ArrowRight className="size-4" />
        </Link>
      </div>

      <CtaBand
        title="Noch Fragen zur Rolle?"
        text="Schreiben Sie uns direkt – wir antworten innerhalb von 48 Stunden."
        actions={
          <>
            <Link
              to="/karriere/bewerbung"
              search={{ stelle: job.title }}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand px-6 text-sm font-semibold text-brand-foreground transition-transform hover:-translate-y-0.5"
            >
              Jetzt bewerben <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/karriere"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-semibold transition-colors hover:bg-white/10"
            >
              Andere Stellen
            </Link>
          </>
        }
      />
    </>
  );
}
