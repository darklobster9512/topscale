import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "Wie startet eine Zusammenarbeit typischerweise?",
    a: "Mit einem 30-minütigen Erstgespräch. Danach erhalten Sie eine kurze Einschätzung mit möglichem Vorgehen, Aufwandsrahmen und Zeitplan – ohne Verpflichtung.",
  },
  {
    q: "Arbeiten Sie nach Festpreis oder Aufwand?",
    a: "Beides. Klar abgegrenzte Vorhaben rechnen wir gern zum Festpreis ab, laufende Weiterentwicklung nach Aufwand mit vereinbartem Budgetrahmen und monatlichem Reporting.",
  },
  {
    q: "Übernehmen Sie auch bestehende Systeme?",
    a: "Ja. Wir führen zuerst eine Bestandsaufnahme durch, dokumentieren Architektur und Risiken und übernehmen anschließend Wartung und Weiterentwicklung.",
  },
  {
    q: "Wie halten Sie es mit Datenschutz und Betriebsrat?",
    a: "Wir arbeiten DSGVO-konform, schließen Auftragsverarbeitungsverträge ab und begleiten bei Bedarf die Abstimmung mit Datenschutzbeauftragten und Mitbestimmungsgremien.",
  },
  {
    q: "Arbeiten Sie vor Ort oder remote?",
    a: "Beides ist möglich. In der Regel starten wir vor Ort bei Ihnen, arbeiten danach überwiegend remote und kommen zu Workshops und Meilensteinen persönlich vorbei.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-hairline border-y border-hairline">
      {faqs.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-display text-base font-medium md:text-lg">{item.q}</span>
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-hairline text-brand">
                {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
              <p className="overflow-hidden pr-12 text-sm text-muted-foreground">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
