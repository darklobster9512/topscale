import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Clock, Mail, MapPin } from "lucide-react";
import { useState, type FormEvent } from "react";

import hamburgImg from "@/assets/hamburg.jpg";
import { Faq } from "@/components/site/Faq";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt – Topscale GmbH, Hamburg" },
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
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/kontakt" },
    ],
    links: [{ rel: "canonical", href: "/kontakt" }],
  }),
  component: Kontakt,
});


const inputClass =
  "w-full rounded-lg border border-input bg-background px-3.5 py-3 text-base md:py-2.5 md:text-sm outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20";

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
        <div className="container-page grid gap-5 lg:grid-cols-[1fr_1.15fr]">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <Reveal className="tile p-6 md:p-7">
              <div className="flex size-10 items-center justify-center rounded-xl bg-brand-soft text-brand">
                <MapPin className="size-5" />
              </div>
              <h2 className="mt-5 font-display text-base">Büro Hamburg</h2>
              <address className="mt-2 text-sm not-italic text-muted-foreground">
                Topscale GmbH
                <br />
                Zirkusweg 1<br />
                20359 Hamburg
              </address>
            </Reveal>
            <Reveal delay={70} className="tile p-6 md:p-7">
              <div className="flex size-10 items-center justify-center rounded-xl bg-brand-soft text-brand">
                <Mail className="size-5" />
              </div>
              <h2 className="mt-5 font-display text-base">E-Mail</h2>
              <p className="mt-2 text-sm">
                <a href="mailto:kontakt@topscale.gmbh" className="text-brand hover:underline">
                  kontakt@topscale.gmbh
                </a>
              </p>
            </Reveal>
            <Reveal delay={140} className="tile p-6 md:p-7">
              <div className="flex size-10 items-center justify-center rounded-xl bg-brand-soft text-brand">
                <Clock className="size-5" />
              </div>
              <h2 className="mt-5 font-display text-base">Erreichbarkeit</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Montags bis freitags, 9 bis 18 Uhr. Antwort in der Regel innerhalb eines Werktags.
              </p>
            </Reveal>
            <Reveal delay={210} className="tile overflow-hidden sm:col-span-2 lg:col-span-1">
              <img
                src={hamburgImg}
                alt="Elbphilharmonie und Hamburger Hafen"
                width={1600}
                height={900}
                loading="lazy"
                className="h-44 w-full object-cover"
              />
            </Reveal>
          </div>

          {sent ? (
            <Reveal className="tile h-fit p-6 md:p-10">
              <CheckCircle2 className="size-9 text-brand" />
              <h2 className="mt-5 font-display text-xl">Nachricht gesendet</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Vielen Dank für Ihre Anfrage. Wir melden uns in der Regel am nächsten Werktag.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-7 text-sm font-medium text-brand hover:underline"
              >
                Formular erneut öffnen
              </button>
            </Reveal>
          ) : (
            <Reveal>
              <form onSubmit={handleSubmit} className="tile h-fit p-5 md:p-9">
                <p className="eyebrow">Anfrage</p>
                <h2 className="mt-3 font-display text-xl">Erzählen Sie uns von Ihrem Projekt</h2>
                <div className="mt-7 space-y-4">
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
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-1.5 block text-sm font-medium">E-Mail</span>
                      <input required type="email" name="email" className={inputClass} autoComplete="email" />
                    </label>
                    <label className="block">
                      <span className="mb-1.5 block text-sm font-medium">Telefon (optional)</span>
                      <input name="phone" type="tel" className={inputClass} autoComplete="tel" />
                    </label>
                  </div>
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
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-1.5 block text-sm font-medium">Budgetrahmen</span>
                      <select name="budget" className={inputClass} defaultValue="noch offen">
                        <option>noch offen</option>
                        <option>bis 25.000 €</option>
                        <option>25.000 – 100.000 €</option>
                        <option>über 100.000 €</option>
                      </select>
                    </label>
                    <label className="block">
                      <span className="mb-1.5 block text-sm font-medium">Zeitrahmen</span>
                      <select name="timing" className={inputClass} defaultValue="in den nächsten Wochen">
                        <option>so schnell wie möglich</option>
                        <option>in den nächsten Wochen</option>
                        <option>im nächsten Quartal</option>
                        <option>noch in Planung</option>
                      </select>
                    </label>
                  </div>
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
                  className="mt-7 min-h-12 w-full rounded-full bg-brand px-6 text-sm font-semibold text-brand-foreground transition-transform hover:-translate-y-0.5"
                >
                  Anfrage senden
                </button>
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  Wir antworten in der Regel innerhalb eines Werktags.
                </p>
              </form>
            </Reveal>
          )}
        </div>
      </section>

      <section className="border-t border-hairline bg-surface/60 py-12 md:py-20">
        <div className="container-page grid gap-8 md:gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="eyebrow">Häufige Fragen</p>
            <h2 className="mt-4 text-2xl md:text-4xl">Bevor Sie fragen</h2>
            <p className="mt-4 text-sm text-muted-foreground">
              Die Punkte, die in Erstgesprächen am häufigsten aufkommen.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <Faq />
          </Reveal>
        </div>
      </section>
    </>
  );
}
