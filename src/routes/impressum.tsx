import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum – Topscale GmbH, Hamburg" },
      {
        name: "description",
        content:
          "Impressum der Topscale GmbH, Zirkusweg 1, 20359 Hamburg. Amtsgericht Hamburg HRB 133665, Geschäftsführer Sebastian Yrjö Küpper.",
      },
      { property: "og:title", content: "Impressum – Topscale GmbH" },
      { property: "og:description", content: "Angaben gemäß § 5 DDG der Topscale GmbH, Hamburg." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/impressum" },
    ],
    links: [{ rel: "canonical", href: "/impressum" }],
  }),
  component: Impressum,
});


function Impressum() {
  return (
    <>
      <PageHero eyebrow="Rechtliches" title="Impressum" intro="Angaben gemäß § 5 DDG." />
      <section className="section">
        <div className="container-page max-w-2xl space-y-7 text-sm leading-relaxed text-muted-foreground md:space-y-8">
          <div>
            <h2 className="text-lg font-semibold text-foreground">Anbieter</h2>
            <p className="mt-2">
              Topscale GmbH
              <br />
              Zirkusweg 1<br />
              20359 Hamburg
              <br />
              Deutschland
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground">Kontakt</h2>
            <p className="mt-2">
              E-Mail:{" "}
              <a href="mailto:kontakt@topscale.gmbh" className="text-brand hover:underline">
                kontakt@topscale.gmbh
              </a>
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground">Vertreten durch</h2>
            <p className="mt-2">Geschäftsführer: Sebastian Yrjö Küpper</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground">Registereintrag</h2>
            <p className="mt-2">
              Registergericht: Amtsgericht Hamburg
              <br />
              Registernummer: HRB 133665
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground">
              Umsatzsteuer-Identifikationsnummer
            </h2>
            <p className="mt-2">USt-IdNr. gemäß § 27 a UStG: DE175401054</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">
              Verantwortlich für den Inhalt
            </h2>
            <p className="mt-2">Sebastian Yrjö Küpper, Adresse wie oben.</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground">Haftung für Inhalte und Links</h2>
            <p className="mt-2">
              Die Inhalte dieser Seiten wurden mit Sorgfalt erstellt. Für die Richtigkeit,
              Vollständigkeit und Aktualität können wir jedoch keine Gewähr übernehmen. Für Inhalte
              verlinkter externer Seiten sind ausschließlich deren Betreiber verantwortlich.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
