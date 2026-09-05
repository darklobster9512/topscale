import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import { ApplicationForm } from "@/components/site/ApplicationForm";
import { getJob } from "@/data/jobs";

export const Route = createFileRoute("/karriere/$slug")({
  loader: ({ params }) => {
    const job = getJob(params.slug);
    if (!job) throw notFound();
    return { job };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Stelle nicht gefunden – Topscale GmbH" }, { name: "robots", content: "noindex" }] };
    }
    const { job } = loaderData;
    return {
      meta: [
        { title: `${job.title} – Karriere bei der Topscale GmbH` },
        { name: "description", content: job.summary },
        { property: "og:title", content: `${job.title} – Topscale GmbH` },
        { property: "og:description", content: job.summary },
      ],
    };
  },
  component: JobDetail,
});

function JobDetail() {
  const { job } = Route.useLoaderData();

  return (
    <>
      <section className="border-b border-border bg-gradient-to-b from-accent/60 to-background">
        <div className="container-page py-14">
          <Link
            to="/karriere"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="size-4" /> Alle Stellen
          </Link>
          <h1 className="mt-6 max-w-3xl text-3xl font-bold md:text-5xl">{job.title}</h1>
          <div className="mt-5 flex flex-wrap gap-2 text-xs text-muted-foreground">
            <span className="rounded-full bg-card px-3 py-1">{job.team}</span>
            <span className="rounded-full bg-card px-3 py-1">{job.location}</span>
            <span className="rounded-full bg-card px-3 py-1">{job.type}</span>
          </div>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{job.summary}</p>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-10">
            <Block title="Ihre Aufgaben" items={job.tasks} />
            <Block title="Ihr Profil" items={job.profile} />
            <Block title="Unser Angebot" items={job.offer} />
          </div>
          <ApplicationForm jobTitle={job.title} />
        </div>
      </section>
    </>
  );
}

function Block({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h2 className="text-2xl font-bold">{title}</h2>
      <ul className="mt-5 space-y-3 text-sm">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
            <span className="text-muted-foreground">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
