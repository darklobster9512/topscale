import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutz – Topscale GmbH" },
      {
        name: "description",
        content:
          "Datenschutzhinweise der Topscale GmbH: Verantwortlicher, Zwecke der Verarbeitung und Rechte der betroffenen Personen.",
      },
      { property: "og:title", content: "Datenschutz – Topscale GmbH" },
      {
        property: "og:description",
        content: "Informationen zur Verarbeitung personenbezogener Daten auf topscale.gmbh.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/datenschutz" },
    ],
    links: [{ rel: "canonical", href: "/datenschutz" }],
  }),
  component: Datenschutz,
});


function Datenschutz() {
  return (
    <>
      <PageHero
        eyebrow="Rechtliches"
        title="Datenschutzhinweise"
        intro="Wir informieren Sie über die Verarbeitung personenbezogener Daten auf dieser Website."
      />
      <section className="section">
        <div className="container-page max-w-2xl space-y-7 text-sm leading-relaxed text-muted-foreground md:space-y-8">
          <p className="rounded-xl border border-border bg-secondary/60 p-4">
            Hinweis: Dieser Text ist ein allgemeines Grundgerüst und sollte vor Veröffentlichung
            juristisch geprüft und an die tatsächlichen Verarbeitungen angepasst werden.
          </p>
          <div>
            <h2 className="text-lg font-semibold text-foreground">Verantwortlicher</h2>
            <p className="mt-2">
              Topscale GmbH, Zirkusweg 1, 20359 Hamburg, E-Mail: kontakt@topscale.gmbh
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground">Zugriffsdaten</h2>
            <p className="mt-2">
              Beim Besuch dieser Website werden technisch notwendige Daten (z. B. IP-Adresse,
              Zeitpunkt, aufgerufene Seite) verarbeitet, um den Betrieb und die Sicherheit der Seite
              zu gewährleisten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground">Kontakt- und Bewerbungsformulare</h2>
            <p className="mt-2">
              Wenn Sie uns über ein Formular kontaktieren oder sich bewerben, verarbeiten wir Ihre
              Angaben ausschließlich zur Bearbeitung Ihrer Anfrage bzw. Bewerbung (Art. 6 Abs. 1
              lit. b DSGVO, § 26 BDSG).
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground">Speicherdauer</h2>
            <p className="mt-2">
              Wir speichern personenbezogene Daten nur so lange, wie es für die genannten Zwecke
              erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground">Ihre Rechte</h2>
            <p className="mt-2">
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
              Verarbeitung, Datenübertragbarkeit und Widerspruch. Zudem können Sie sich bei einer
              Datenschutzaufsichtsbehörde beschweren – zuständig ist der Hamburgische Beauftragte
              für Datenschutz und Informationsfreiheit.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
