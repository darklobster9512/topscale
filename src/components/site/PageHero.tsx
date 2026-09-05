import type { ReactNode } from "react";

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
    <section className="border-b border-border bg-gradient-to-b from-accent/60 to-background">
      <div className="container-page py-16 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold md:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{intro}</p>
        {children}
      </div>
    </section>
  );
}
