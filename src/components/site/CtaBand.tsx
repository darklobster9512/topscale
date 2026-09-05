import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

export function CtaBand({
  title = "Lassen Sie uns über Ihr Vorhaben sprechen.",
  text = "Ein Erstgespräch dauert 30 Minuten und endet mit einer ehrlichen Einschätzung – nicht mit einem Angebot, das Sie nicht bestellt haben.",
  actions,
}: {
  title?: string;
  text?: string;
  actions?: ReactNode;
}) {

  return (
    <section className="border-t border-hairline bg-ink text-ink-foreground">
      <div className="container-page flex flex-col gap-8 py-20 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl">{title}</h2>
          <p className="mt-4 text-sm opacity-70 md:text-base">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {actions ?? (
            <>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground transition-transform hover:-translate-y-0.5"
              >
                Gespräch vereinbaren <ArrowRight className="size-4" />
              </Link>
              <a
                href="mailto:kontakt@topscale.gmbh"
                className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold transition-colors hover:bg-white/10"
              >
                kontakt@topscale.gmbh
              </a>
            </>
          )}
        </div>

      </div>
    </section>
  );
}
