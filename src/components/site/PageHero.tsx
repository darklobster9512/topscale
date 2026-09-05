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
      <div className="container-page relative py-20 md:py-28">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-5 max-w-4xl text-4xl leading-[1.05] md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">{intro}</p>
          {children}
        </Reveal>
      </div>
    </section>
  );
}
