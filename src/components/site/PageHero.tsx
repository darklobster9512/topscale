import type { ReactNode } from "react";

import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-hairline bg-surface/60">
      <div className="grid-texture pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="container-page relative py-12 md:py-24 lg:py-28">
        <Reveal className="grid gap-5 md:gap-8 lg:grid-cols-[1.15fr_1fr] lg:items-end lg:gap-12">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="mt-4 text-[2rem] leading-[1.08] sm:text-4xl md:mt-5 md:leading-[1.05] md:text-5xl lg:text-6xl">
              {title}
            </h1>
          </div>
          <p className="text-base text-muted-foreground md:text-lg lg:pb-2">{intro}</p>
        </Reveal>
        {children}
      </div>

    </section>
  );
}
