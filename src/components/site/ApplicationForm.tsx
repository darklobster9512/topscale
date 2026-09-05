import { CheckCircle2 } from "lucide-react";
import { useState, type FormEvent } from "react";

export function ApplicationForm({ jobTitle }: { jobTitle: string }) {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="h-fit rounded-2xl border border-brand/40 bg-brand-soft p-8">
        <CheckCircle2 className="size-8 text-brand" />
        <h2 className="mt-4 text-xl font-bold">Vielen Dank für Ihre Bewerbung!</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Wir haben Ihre Angaben für die Stelle „{jobTitle}" erhalten und melden uns innerhalb von
          fünf Werktagen. Hinweis: Dies ist eine Demo-Ansicht, es werden keine Daten gespeichert
          oder versendet.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 text-sm font-semibold text-brand hover:underline"
        >
          Neues Formular öffnen
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="h-fit rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8"
    >
      <h2 className="text-xl font-bold">Jetzt bewerben</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Kurzbewerbung genügt – Zeugnisse können wir später besprechen.
      </p>

      <div className="mt-6 space-y-4">
        <Field label="Stelle">
          <input
            readOnly
            value={jobTitle}
            className="w-full rounded-lg border border-border bg-secondary px-3 py-2.5 text-sm text-muted-foreground"
          />
        </Field>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Vorname">
            <Input name="firstName" required autoComplete="given-name" />
          </Field>
          <Field label="Nachname">
            <Input name="lastName" required autoComplete="family-name" />
          </Field>
        </div>
        <Field label="E-Mail">
          <Input name="email" type="email" required autoComplete="email" />
        </Field>
        <Field label="Telefon (optional)">
          <Input name="phone" type="tel" autoComplete="tel" />
        </Field>
        <Field label="Frühester Starttermin">
          <Input name="start" type="date" />
        </Field>
        <Field label="Anschreiben">
          <textarea
            name="message"
            rows={5}
            required
            placeholder="Was interessiert Sie an dieser Aufgabe?"
            className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/25"
          />
        </Field>
        <Field label="Lebenslauf (PDF)">
          <input
            name="cv"
            type="file"
            accept=".pdf,.doc,.docx"
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm file:mr-3 file:rounded-md file:border-0 file:bg-brand-soft file:px-3 file:py-1.5 file:text-sm file:font-medium file:text-brand"
          />
        </Field>
        <label className="flex items-start gap-3 text-xs text-muted-foreground">
          <input type="checkbox" required className="mt-0.5 size-4 accent-[var(--brand)]" />
          <span>
            Ich habe die Datenschutzhinweise gelesen und bin mit der Verarbeitung meiner Daten zum
            Zweck der Bewerbung einverstanden.
          </span>
        </label>
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90"
      >
        Bewerbung absenden
      </button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Demo-Formular – es werden keine Daten gespeichert.
      </p>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium">{label}</span>
      {children}
    </label>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/25"
    />
  );
}
