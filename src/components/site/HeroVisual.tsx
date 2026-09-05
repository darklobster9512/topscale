const stations = [
  { step: "01", title: "Verstehen", note: "Prozesse, Systeme, Daten" },
  { step: "02", title: "Entscheiden", note: "Zielbild mit Aufwand & Risiko" },
  { step: "03", title: "Umsetzen", note: "Releases im 2-Wochen-Takt" },
  { step: "04", title: "Verankern", note: "Übergabe, Betrieb, Schulung" },
];

const metrics = [
  { label: "Release-Zyklus", value: "2 Wochen" },
  { label: "Reviews", value: "100 %" },
];

export function HeroVisual() {
  return (
    <div className="tile relative overflow-hidden p-5 sm:p-7 md:p-9">
      <div className="grid-texture pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />

      <div className="relative">
        <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <p className="eyebrow">Vom Konzept zum laufenden System</p>
          <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-hairline bg-card px-3 py-1 text-[0.6875rem] whitespace-nowrap text-muted-foreground">
            <span className="size-1.5 rounded-full bg-brand" />
            laufender Betrieb
          </span>
        </div>


        <ol className="relative mt-6 space-y-4 md:mt-7 md:space-y-5">
          <span
            className="absolute left-[13px] top-2 bottom-2 w-px bg-hairline"
            aria-hidden="true"
          />
          <span className="hero-spark absolute left-[9px] size-2.5 rounded-full bg-brand" aria-hidden="true" />

          {stations.map((station, i) => (
            <li
              key={station.step}
              className="hero-node relative flex items-start gap-4"
              style={{ animationDelay: `${140 + i * 130}ms` }}
            >
              <span className="relative z-1 mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full border border-hairline bg-card font-display text-[0.625rem] text-brand">
                {station.step}
              </span>
              <span className="min-w-0">
                <span className="block font-display text-base leading-tight">{station.title}</span>
                <span className="mt-1 block text-sm text-muted-foreground">{station.note}</span>
              </span>
            </li>
          ))}
        </ol>

        <div className="mt-6 grid grid-cols-2 gap-3 border-t border-hairline pt-5 md:mt-8 md:pt-6">
          {metrics.map((metric, i) => (
            <div
              key={metric.label}
              className="hero-node rounded-xl border border-hairline bg-surface/70 px-4 py-3"
              style={{ animationDelay: `${700 + i * 120}ms` }}
            >
              <p className="text-[0.6875rem] uppercase tracking-[0.16em] text-muted-foreground">
                {metric.label}
              </p>
              <p className="mt-1.5 font-display text-lg text-brand">{metric.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
