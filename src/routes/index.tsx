import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Cpu, GaugeCircle, ShieldCheck, Workflow } from "lucide-react";

import officeImg from "@/assets/office.jpg";
import softwareImg from "@/assets/software.jpg";
import { CtaBand } from "@/components/site/CtaBand";
import { HeroVisual } from "@/components/site/HeroVisual";
import { Reveal } from "@/components/site/Reveal";
import { Stat } from "@/components/site/Stat";
import { industries, process } from "@/data/content";
import { team, teamGroups } from "@/data/team";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IT-Consulting & Softwareentwicklung Hamburg | Topscale" },
      {
        name: "description",
        content:
          "Topscale GmbH aus Hamburg: IT-Consulting, individuelle Softwareentwicklung sowie Projekt-, Prozess- und Qualitätsmanagement – seit 2009.",
      },
      { property: "og:title", content: "IT-Consulting & Softwareentwicklung Hamburg | Topscale" },
      {
        property: "og:description",
        content:
          "Seit 2009 begleiten wir Unternehmen bei Digitalisierung, Softwareentwicklung und Prozessqualität. Aus Hamburg.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Topscale GmbH",
          foundingDate: "2009",
          email: "kontakt@topscale.gmbh",
          telephone: "+49 40 573078440",
          url: "/",
          logo: "/favicon.png",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Zirkusweg 1",
            postalCode: "20359",
            addressLocality: "Hamburg",
            addressCountry: "DE",
          },
        }),
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
        <div className="container-page relative pb-12 pt-10 md:pb-24 md:pt-28">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-hairline bg-card px-4 py-1.5 text-xs text-muted-foreground">
                <span className="size-1.5 rounded-full bg-brand" />
                Beratungshaus aus Hamburg · seit 2009
              </p>
              <h1 className="mt-6 text-[2.1rem] leading-[1.08] sm:text-[2.6rem] sm:leading-[1.02] md:mt-8 md:text-6xl">
                Beratung, die bis zur laufenden Software denkt.
              </h1>
              <p className="mt-5 max-w-xl text-base text-muted-foreground md:mt-7 md:text-lg">
                Wir verbinden IT-Consulting, Softwareentwicklung und Qualitätsmanagement in einem
                Team – damit aus Konzepten Systeme werden, die im Betrieb tragen.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:mt-9">
                <Link
                  to="/kontakt"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand px-7 text-sm font-semibold text-brand-foreground transition-transform hover:-translate-y-0.5"
                >
                  Erstgespräch vereinbaren <ArrowRight className="size-4" />
                </Link>
                <Link
                  to="/leistungen"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-hairline bg-card px-7 text-sm font-semibold transition-colors hover:border-brand/50"
                >
                  Leistungen ansehen
                </Link>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <HeroVisual />
            </Reveal>
          </div>


          {/* Kennzahlen */}
          <div className="mt-7 grid md:mt-10 grid-cols-2 gap-3 md:mt-16 md:gap-4 lg:grid-cols-4">
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
            <h2 className="mt-4 text-2xl md:text-5xl">Vier Disziplinen, ein Team</h2>
            <p className="mt-5 text-muted-foreground">
              Weil Strategie, Umsetzung und Qualität bei uns zusammenliegen, entfallen Übergaben,
              die andernorts Wochen kosten.
            </p>
          </Reveal>

          <div className="mt-8 grid md:mt-12 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 70} className="tile flex flex-col p-6 md:p-7">
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
      <section className="border-y border-hairline bg-surface/60 py-10 md:py-14">
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
            <h2 className="mt-4 text-2xl md:text-5xl">Vier Schritte, keine Blackbox</h2>
          </Reveal>
          <div className="mt-8 grid md:mt-12 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-4">
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

      {/* Team highlight */}
      <section className="border-y border-hairline bg-surface/60 py-12 md:py-20">
        <div className="container-page grid items-stretch gap-5 lg:grid-cols-3">
          <Reveal className="tile flex h-full flex-col justify-between p-6 md:p-8">
            <div>
              <p className="eyebrow">Unser Team</p>
              <h2 className="mt-4 font-display text-2xl">Feste Ansprechpartner statt wechselnder Besetzung</h2>
              <p className="mt-4 text-sm text-muted-foreground">
                Beratung, Entwicklung und Qualitätsmanagement sitzen bei uns in einem Haus – vom
                Erstgespräch bis zur Übergabe bleiben die Gesichter dieselben.
              </p>
            </div>
            <Link
              to="/team"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-brand"
            >
              Team ansehen <ArrowRight className="size-4" />
            </Link>
          </Reveal>

          <Reveal delay={80} className="tile flex h-full flex-col justify-between p-6 md:p-8">
            <div>
              <p className="eyebrow">Aufstellung</p>
              <p className="mt-4 font-display text-4xl text-brand">{team.length}</p>
              <p className="mt-2 text-sm text-muted-foreground">Kolleginnen und Kollegen in Hamburg</p>
            </div>
            <ul className="mt-8 space-y-2 text-sm text-muted-foreground">
              {teamGroups.slice(1).map((group) => (
                <li key={group} className="flex gap-3">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-brand" />
                  {group}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={160} className="tile overflow-hidden">
            <img
              src={softwareImg}
              alt="Aufgeräumter Arbeitsplatz mit Laptop, auf dem Quellcode zu sehen ist"
              width={1600}
              height={1067}
              loading="lazy"
              className="h-full min-h-44 w-full md:min-h-56 object-cover"
            />
          </Reveal>
        </div>
      </section>


      {/* Vorgehen + office */}
      <section className="section">
        <div className="container-page grid items-stretch gap-5 lg:grid-cols-3">
          <Reveal className="tile overflow-hidden lg:row-span-2">
            <img
              src={officeImg}
              alt="Helles, modernes Büro mit Arbeitsplätzen"
              width={1600}
              height={1067}
              loading="lazy"
              className="h-full min-h-48 w-full md:min-h-64 object-cover"
            />
          </Reveal>
          <Reveal delay={60} className="flex flex-col justify-center lg:col-span-2">
            <p className="eyebrow">Vorgehen</p>
            <h2 className="mt-4 text-2xl md:text-4xl">Wie ein Projekt bei uns abläuft</h2>
            <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
              Kurze Schritte, sichtbare Ergebnisse: Sie wissen jederzeit, wo das Projekt steht und
              was als Nächstes ansteht.
            </p>
          </Reveal>
          {process.slice(0, 2).map((phase, i) => (
            <Reveal key={phase.step} delay={120 + i * 70}>
              <Link to="/vorgehen" className="tile group block h-full p-7">
                <p className="font-display text-sm text-brand">{phase.step}</p>
                <h3 className="mt-4 font-display text-lg">{phase.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{phase.outcome}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
                  Vorgehen ansehen
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
