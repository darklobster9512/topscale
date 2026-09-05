import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import { CtaBand } from "@/components/site/CtaBand";
import { insights } from "@/data/content";

export const Route = createFileRoute("/insights/$slug")({
  loader: ({ params }) => {
    const post = insights.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Beitrag nicht gefunden – Topscale GmbH" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} – Insights | Topscale GmbH` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: InsightDetail,
});

function InsightDetail() {
  const { post } = Route.useLoaderData();

  return (
    <>
      <section className="border-b border-hairline bg-surface/60">
        <div className="container-page py-16 md:py-20">
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="size-4" /> Alle Beiträge
          </Link>
          <p className="eyebrow mt-8">{post.category}</p>
          <h1 className="mt-4 max-w-3xl text-3xl leading-tight md:text-5xl">{post.title}</h1>
          <p className="mt-5 text-sm text-muted-foreground">
            {post.date} · {post.readingTime} Lesezeit
          </p>
        </div>
      </section>

      <article className="section">
        <div className="container-page max-w-3xl">
          <p className="font-display text-xl leading-relaxed md:text-2xl">{post.excerpt}</p>
          <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground">
            {post.body.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-12 rounded-xl border border-hairline bg-surface p-5 text-sm text-muted-foreground">
            Hinweis: Dieser Beitrag ist ein Beispieltext für diese Website.
          </p>
        </div>
      </article>

      <CtaBand
        title="Passt das Thema zu Ihrer Situation?"
        text="Wir besprechen gern, wie sich das auf Ihre Systemlandschaft übertragen lässt."
      />
    </>
  );
}
