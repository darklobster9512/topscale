import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Cpu, GaugeCircle, ShieldCheck, Workflow } from "lucide-react";

import consultingImg from "@/assets/consulting.jpg";
import heroImg from "@/assets/hero-team.jpg";
import softwareImg from "@/assets/software.jpg";

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
    text: "Architektur, Systemauswahl und Digitalisierungsstrategie – pragmatisch und umsetzbar.",
  },
  {
    icon: Workflow,
    title: "Softwareentwicklung",
    text: "Individuelle Anwendungen und Schnittstellen, entwickelt mit modernem Stack.",
  },
  {
    icon: GaugeCircle,
    title: "Projekt- & Prozessmanagement",
    text: "Klare Steuerung, transparente Kennzahlen und schlanke Abläufe.",
  },
  {
    icon: ShieldCheck,
    title: "Qualitätsmanagement",
    text: "Standards, Reviews und Audits, die Ergebnisse messbar besser machen.",
  },
];

function Home() {
  return (
    <>
      <section className="border-b border-border bg-gradient-to-b from-accent/70 via-background to-background">
        <div className="container-page grid items-center gap-12 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="inline-flex rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand">
              Seit 2009 in Hamburg
            </p>
            <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
              IT-Beratung, die bis zur laufenden Software denkt.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Wir verbinden Consulting, Softwareentwicklung und Qualitätsmanagement – damit aus
              Konzepten Systeme werden, die im Alltag tragen.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90"
              >
                Projekt besprechen <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/leistungen"
                className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
              >
                Leistungen ansehen
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border shadow-xl shadow-brand/10">
            <img
              src={heroImg}
              alt="Beratungsteam der Topscale GmbH im Gespräch in einem Hamburger Büro"
              width={1600}
              height={1008}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <h2 className="text-3xl font-bold md:text-4xl">Was wir für Sie tun</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Vier Disziplinen, ein Team: Wir begleiten Vorhaben von der ersten Analyse bis zum
            stabilen Betrieb.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.title} className="rounded-2xl border border-border bg-card p-6">
                <div className="flex size-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <s.icon className="size-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40 py-20">
        <div className="container-page grid items-center gap-12 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-border">
            <img
              src={softwareImg}
              alt="Zwei Entwickler arbeiten gemeinsam an einer Softwarelösung"
              width={1408}
              height={1008}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Software, die zu Ihren Prozessen passt</h2>
            <p className="mt-5 text-muted-foreground">
              Statt Standard mit Kompromissen entwickeln wir dort individuell, wo es Ihren
              Wettbewerbsvorteil ausmacht – und integrieren dort, wo Standard genügt.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Fachliche Analyse gemeinsam mit Ihren Teams",
                "Nachvollziehbare Architektur und Dokumentation",
                "Automatisierte Tests und sichere Releases",
                "Übergabe oder langfristige Betreuung – Sie entscheiden",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Erfahrung, auf die man bauen kann</h2>
            <p className="mt-5 text-muted-foreground">
              Seit 2009 arbeiten wir für Mittelstand und Konzerne – oft über Jahre hinweg, weil
              Ergebnisse und Zusammenarbeit stimmen.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[
                { value: "15+", label: "Jahre am Markt" },
                { value: "120+", label: "Projekte umgesetzt" },
                { value: "94 %", label: "Folgeaufträge" },
              ].map((k) => (
                <div key={k.label}>
                  <p className="font-display text-3xl font-bold text-brand">{k.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{k.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border">
            <img
              src={consultingImg}
              alt="Beraterin erläutert einen Prozessablauf am Whiteboard"
              width={1408}
              height={1008}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-ink py-16 text-primary-foreground">
        <div className="container-page flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Lassen Sie uns über Ihr Vorhaben sprechen.</h2>
            <p className="mt-2 text-sm opacity-80">
              Erstgespräch unverbindlich – meist reichen 30 Minuten für eine klare Einschätzung.
            </p>
          </div>
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground"
          >
            Kontakt aufnehmen <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
