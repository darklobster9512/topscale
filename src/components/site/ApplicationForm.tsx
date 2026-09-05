import { ArrowLeft, ArrowRight, Check, CheckCircle2 } from "lucide-react";
import { useState, type FormEvent, type InputHTMLAttributes, type ReactNode } from "react";

const steps = ["Angaben", "Unterlagen", "Prüfen"] as const;

const inputClass =
  "w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20";

export function ApplicationForm({ jobTitle }: { jobTitle: string }) {
  const [step, setStep] = useState(0);
  const [sent, setSent] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    start: "",
    salary: "",
    message: "",
    cv: "",
    consent: false,
  });

  const set = (key: keyof typeof data, value: string | boolean) =>
    setData((prev) => ({ ...prev, [key]: value }));

  const stepValid =
    step === 0
      ? data.firstName && data.lastName && data.email
      : step === 1
        ? data.message.length > 10
        : data.consent;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!stepValid) return;
    if (step < steps.length - 1) {
      setStep(step + 1);
      return;
    }
    setSent(true);
  };

  if (sent) {
    return (
      <div className="tile h-fit p-8 md:p-10">
        <CheckCircle2 className="size-9 text-brand" />
        <h2 className="mt-5 font-display text-xl">Vielen Dank für Ihre Bewerbung</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Wir haben Ihre Angaben zur Stelle „{jobTitle}" erfasst und melden uns innerhalb von fünf
          Werktagen. Hinweis: Dies ist eine Demo-Ansicht – es werden keine Daten gespeichert oder
          versendet.
        </p>
        <button
          type="button"
          onClick={() => {
            setSent(false);
            setStep(0);
          }}
          className="mt-7 text-sm font-medium text-brand hover:underline"
        >
          Formular erneut öffnen
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="tile h-fit p-7 md:p-9">
      <p className="eyebrow">Bewerbung</p>
      <h2 className="mt-3 font-display text-xl">{jobTitle}</h2>

      <ol className="mt-7 flex items-center gap-2">
        {steps.map((label, i) => (
          <li key={label} className="flex flex-1 items-center gap-2">
            <span
              className={`flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                i < step
                  ? "bg-brand text-brand-foreground"
                  : i === step
                    ? "border border-brand text-brand"
                    : "border border-hairline text-muted-foreground"
              }`}
            >
              {i < step ? <Check className="size-3.5" /> : i + 1}
            </span>
            <span className={`text-xs ${i === step ? "text-foreground" : "text-muted-foreground"}`}>
              {label}
            </span>
            {i < steps.length - 1 && <span className="h-px flex-1 bg-hairline" />}
          </li>
        ))}
      </ol>

      <div className="mt-8 space-y-4">
        {step === 0 && (
          <>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Vorname">
                <Input
                  value={data.firstName}
                  onChange={(e) => set("firstName", e.target.value)}
                  autoComplete="given-name"
                />
              </Field>
              <Field label="Nachname">
                <Input
                  value={data.lastName}
                  onChange={(e) => set("lastName", e.target.value)}
                  autoComplete="family-name"
                />
              </Field>
            </div>
            <Field label="E-Mail">
              <Input
                type="email"
                value={data.email}
                onChange={(e) => set("email", e.target.value)}
                autoComplete="email"
              />
            </Field>
            <Field label="Telefon (optional)">
              <Input
                type="tel"
                value={data.phone}
                onChange={(e) => set("phone", e.target.value)}
                autoComplete="tel"
              />
            </Field>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Frühester Start">
                <Input type="date" value={data.start} onChange={(e) => set("start", e.target.value)} />
              </Field>
              <Field label="Gehaltsvorstellung (optional)">
                <Input
                  placeholder="z. B. 70.000 €"
                  value={data.salary}
                  onChange={(e) => set("salary", e.target.value)}
                />
              </Field>
            </div>
          </>
        )}

        {step === 1 && (
          <>
            <Field label="Anschreiben">
              <textarea
                rows={7}
                value={data.message}
                onChange={(e) => set("message", e.target.value)}
                placeholder="Was interessiert Sie an dieser Aufgabe?"
                className={inputClass}
              />
            </Field>
            <Field label="Lebenslauf (PDF)">
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) => set("cv", e.target.files?.[0]?.name ?? "")}
                className="w-full rounded-lg border border-input bg-background px-3.5 py-2 text-sm file:mr-3 file:rounded-md file:border-0 file:bg-brand-soft file:px-3 file:py-1.5 file:text-sm file:font-medium file:text-brand"
              />
            </Field>
            <p className="text-xs text-muted-foreground">
              Zeugnisse können wir später besprechen – eine Kurzbewerbung genügt zum Start.
            </p>
          </>
        )}

        {step === 2 && (
          <>
            <dl className="divide-y divide-hairline overflow-hidden rounded-xl border border-hairline text-sm">
              {[
                ["Stelle", jobTitle],
                ["Name", `${data.firstName} ${data.lastName}`.trim()],
                ["E-Mail", data.email],
                ["Telefon", data.phone || "—"],
                ["Start", data.start || "—"],
                ["Gehalt", data.salary || "—"],
                ["Lebenslauf", data.cv || "keine Datei"],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between gap-4 px-4 py-3">
                  <dt className="text-muted-foreground">{label}</dt>
                  <dd className="text-right">{value}</dd>
                </div>
              ))}
            </dl>
            <label className="flex items-start gap-3 text-xs text-muted-foreground">
              <input
                type="checkbox"
                checked={data.consent}
                onChange={(e) => set("consent", e.target.checked)}
                className="mt-0.5 size-4 accent-[var(--brand)]"
              />
              <span>
                Ich habe die Datenschutzhinweise gelesen und bin mit der Verarbeitung meiner Daten
                zum Zweck der Bewerbung einverstanden.
              </span>
            </label>
          </>
        )}
      </div>

      <div className="mt-8 flex items-center gap-3">
        {step > 0 && (
          <button
            type="button"
            onClick={() => setStep(step - 1)}
            className="inline-flex items-center gap-2 rounded-full border border-hairline px-5 py-2.5 text-sm font-medium"
          >
            <ArrowLeft className="size-4" /> Zurück
          </button>
        )}
        <button
          type="submit"
          disabled={!stepValid}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground transition-opacity disabled:cursor-not-allowed disabled:opacity-40"
        >
          {step === steps.length - 1 ? "Bewerbung absenden" : "Weiter"}
          <ArrowRight className="size-4" />
        </button>
      </div>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Demo-Formular – es werden keine Daten gespeichert.
      </p>
    </form>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium">{label}</span>
      {children}
    </label>
  );
}

function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={inputClass} />;
}
