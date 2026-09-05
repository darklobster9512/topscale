import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Cpu, GaugeCircle, ShieldCheck, Workflow } from "lucide-react";

import officeImg from "@/assets/office.jpg";
import softwareImg from "@/assets/software.jpg";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/site/Reveal";
import { Stat } from "@/components/site/Stat";
import { industries, insights, process, references } from "@/data/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Topscale GmbH – IT-Consulting & Softwareentwicklung Hamburg" },
      {
        name: "description",
        content:
          "Topscale GmbH aus Hamburg: IT-Consulting, individuelle Softwareentwicklung und Beratung in Projekt-, Prozess- und Qualitätsmanagement – seit 2009.",
      },
      { property: "og:title", content: "Topscale GmbH – IT-Consulting & Softwareentwicklung" },
      {
        property: "og:description",
        content:
          "Seit 2009 begleiten wir Unternehmen bei Digitalisierung, Softwareentwicklung und Prozessqualität. Aus Hamburg.",
      },
    ],
  }),
  component: Home,
});

const services = [
  {
    icon: Cpu,
    title: "IT-Consulting",
    text: "Architektur, Systemauswahl und Digitalisierungsstrategie – belastbar bis zur Umsetzung gedacht.",
  },
  {
    icon: Workflow,
    title: "Softwareentwicklung",
    text: "Individuelle Anwendungen, Schnittstellen und Automatisierung mit modernem Stack.",
  },
  {
    icon: GaugeCircle,
    title: "Projektmanagement",
    text: "Steuerung klassisch, agil oder hybrid – mit Berichten, die Entscheidungen zulassen.",
  },
  {
    icon: ShieldCheck,
    title: "Prozess & Qualität",
    text: "Standards, Audits und Kennzahlen, die im Alltag gelebt werden statt im Ordner zu stehen.",
  },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-hairline">
        <div className="grid-texture pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="container-page relative pb-16 pt-20 md:pb-24 md:pt-28">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-hairline bg-card px-4 py-1.5 text-xs text-muted-foreground">
              <span className="size-1.5 rounded-full bg-brand" />
              Beratungshaus aus Hamburg · seit 2009
            </p>
            <h1 className="mt-8 max-w-4xl text-[2.6rem] leading-[1.02] md:text-7xl">
              Beratung, die bis zur laufenden Software denkt.
            </h1>
            <p className="mt-7 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Wir verbinden IT-Consulting, Softwareentwicklung und Qualitätsmanagement in einem Team
              – damit aus Konzepten Systeme werden, die im Betrieb tragen.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-brand-foreground transition-transform hover:-translate-y-0.5"
              >
                Erstgespräch vereinbaren <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/referenzen"
                className="inline-flex items-center gap-2 rounded-full border border-hairline bg-card px-7 py-3.5 text-sm font-semibold transition-colors hover:border-brand/50"
              >
                Projektbeispiele ansehen
              </Link>
            </div>
          </Reveal>

          {/* Kennzahlen */}
          <div className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
            <Reveal delay={80} className="tile flex h-full min-h-40 flex-col justify-between p-6">
              <p className="eyebrow">Erfahrung</p>
              <Stat value={15} suffix="+" label="Jahre am Markt" />
            </Reveal>

            <Reveal delay={140} className="tile flex h-full min-h-40 flex-col justify-between p-6">
              <p className="eyebrow">Projekte</p>
              <Stat value={120} suffix="+" label="umgesetzte Vorhaben" />
            </Reveal>

            <Reveal delay={200} className="tile flex h-full min-h-40 flex-col justify-between p-6">
              <p className="eyebrow">Bindung</p>
              <Stat value={94} suffix=" %" label="Anteil Folgeaufträge" />
            </Reveal>

            <Reveal delay={260} className="tile flex h-full min-h-40 flex-col justify-between p-6">
              <p className="eyebrow">Standort</p>
              <div>
                <p className="font-display text-2xl">Hamburg</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Zirkusweg 1, an den Landungsbrücken
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Leistungen</p>
            <h2 className="mt-4 text-3xl md:text-5xl">Vier Disziplinen, ein Team</h2>
            <p className="mt-5 text-muted-foreground">
              Weil Strategie, Umsetzung und Qualität bei uns zusammenliegen, entfallen Übergaben,
              die andernorts Wochen kosten.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 70} className="tile flex flex-col p-7">
                <div className="flex size-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <service.icon className="size-5" />
                </div>
                <h3 className="mt-6 font-display text-lg">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm text-muted-foreground">{service.text}</p>
                <Link
                  to="/leistungen"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand"
                >
                  Mehr <ArrowUpRight className="size-4" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries strip */}
      <section className="border-y border-hairline bg-surface/60 py-14">
        <div className="container-page flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <p className="eyebrow shrink-0">Branchen</p>
          <div className="flex flex-wrap gap-2">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                to="/branchen"
                className="rounded-full border border-hairline bg-card px-5 py-2.5 text-sm text-muted-foreground transition-colors hover:border-brand/50 hover:text-foreground"
              >
                {industry.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Vorgehen</p>
            <h2 className="mt-4 text-3xl md:text-5xl">Vier Schritte, keine Blackbox</h2>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <Reveal key={step.step} delay={i * 70} className="bg-card p-8">
                <p className="font-display text-sm text-brand">{step.step}</p>
                <h3 className="mt-4 font-display text-lg">{step.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{step.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reference highlight */}
      <section className="border-y border-hairline bg-surface/60 py-20">
        <div className="container-page grid gap-5 lg:grid-cols-3">
          {references.slice(0, 2).map((ref, i) => (
            <Reveal key={ref.slug} delay={i * 80} className="tile flex flex-col justify-between p-8">
              <div>
                <p className="eyebrow">{ref.client}</p>
                <h3 className="mt-4 font-display text-xl">{ref.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{ref.result}</p>
              </div>
              <p className="mt-8 font-display text-3xl text-brand">{ref.metric}</p>
            </Reveal>
          ))}
          <Reveal delay={160} className="tile overflow-hidden">
            <img
              src={softwareImg}
              alt="Zwei Entwickler prüfen gemeinsam Code am Bildschirm"
              width={1600}
              height={1067}
              loading="lazy"
              className="h-full min-h-56 w-full object-cover"
            />
          </Reveal>
          <Reveal delay={220} className="lg:col-span-3">
            <Link
              to="/referenzen"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand"
            >
              Alle Projektbeispiele <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Insights + office */}
      <section className="section">
        <div className="container-page grid gap-5 lg:grid-cols-3">
          <Reveal className="tile overflow-hidden lg:row-span-3">
            <img
              src={officeImg}
              alt="Helles, modernes Büro mit Arbeitsplätzen"
              width={1600}
              height={1067}
              loading="lazy"
              className="h-full min-h-64 w-full object-cover"
            />
          </Reveal>
          <Reveal delay={60} className="lg:col-span-2">
            <p className="eyebrow">Insights</p>
            <h2 className="mt-4 text-3xl md:text-4xl">Was wir aus Projekten mitnehmen</h2>
          </Reveal>
          {insights.slice(0, 2).map((post, i) => (
            <Reveal key={post.slug} delay={120 + i * 70}>
              <Link to="/insights/$slug" params={{ slug: post.slug }} className="tile group block h-full p-7">
                <p className="text-xs text-muted-foreground">
                  {post.category} · {post.readingTime}
                </p>
                <h3 className="mt-4 font-display text-lg">{post.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{post.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
                  Lesen
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
