import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Mail, MapPin } from "lucide-react";
import { useState, type FormEvent } from "react";

import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt – Topscale GmbH Hamburg" },
      {
        name: "description",
        content:
          "Kontakt zur Topscale GmbH: Zirkusweg 1, 20359 Hamburg, kontakt@topscale.gmbh. Wir antworten in der Regel am nächsten Werktag.",
      },
      { property: "og:title", content: "Kontakt – Topscale GmbH" },
      {
        property: "og:description",
        content: "Sprechen wir über Ihr Projekt: Topscale GmbH, Zirkusweg 1, 20359 Hamburg.",
      },
    ],
  }),
  component: Kontakt,
});

function Kontakt() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Sprechen wir über Ihr Vorhaben"
        intro="Ob konkrete Anfrage oder erste Idee: Schreiben Sie uns kurz, worum es geht. Wir melden uns in der Regel am nächsten Werktag."
      />

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex size-10 items-center justify-center rounded-xl bg-brand-soft text-brand">
                <MapPin className="size-5" />
              </div>
              <h2 className="mt-4 font-semibold">Büro Hamburg</h2>
              <address className="mt-2 text-sm not-italic text-muted-foreground">
                Topscale GmbH
                <br />
                Zirkusweg 1<br />
                20359 Hamburg
              </address>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex size-10 items-center justify-center rounded-xl bg-brand-soft text-brand">
                <Mail className="size-5" />
              </div>
              <h2 className="mt-4 font-semibold">E-Mail</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                <a href="mailto:kontakt@topscale.gmbh" className="text-brand hover:underline">
                  kontakt@topscale.gmbh
                </a>
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                Erreichbarkeit: montags bis freitags, 9 bis 18 Uhr.
              </p>
            </div>
          </div>

          {sent ? (
            <div className="h-fit rounded-2xl border border-brand/40 bg-brand-soft p-8">
              <CheckCircle2 className="size-8 text-brand" />
              <h2 className="mt-4 text-xl font-bold">Nachricht erfasst</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Vielen Dank für Ihre Anfrage. Hinweis: Dies ist eine Demo-Ansicht, es werden keine
                Daten gespeichert oder versendet.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-6 text-sm font-semibold text-brand hover:underline"
              >
                Neues Formular öffnen
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="h-fit rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8"
            >
              <h2 className="text-xl font-bold">Anfrage senden</h2>
              <div className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block text-sm font-medium">Name</span>
                    <input required name="name" className={inputClass} autoComplete="name" />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-sm font-medium">Unternehmen</span>
                    <input name="company" className={inputClass} autoComplete="organization" />
                  </label>
                </div>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium">E-Mail</span>
                  <input required type="email" name="email" className={inputClass} autoComplete="email" />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium">Thema</span>
                  <select name="topic" className={inputClass} defaultValue="IT-Consulting">
                    <option>IT-Consulting</option>
                    <option>Softwareentwicklung</option>
                    <option>Projektmanagement</option>
                    <option>Prozess- & Qualitätsmanagement</option>
                    <option>Sonstiges</option>
                  </select>
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium">Ihre Nachricht</span>
                  <textarea
                    required
                    name="message"
                    rows={6}
                    className={inputClass}
                    placeholder="Worum geht es in Ihrem Projekt?"
                  />
                </label>
                <label className="flex items-start gap-3 text-xs text-muted-foreground">
                  <input type="checkbox" required className="mt-0.5 size-4 accent-[var(--brand)]" />
                  <span>Ich habe die Datenschutzhinweise gelesen und bin damit einverstanden.</span>
                </label>
              </div>
              <button
                type="submit"
                className="mt-6 w-full rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90"
              >
                Nachricht senden
              </button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Demo-Formular – es werden keine Daten gespeichert.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

const inputClass =
  "w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/25";
