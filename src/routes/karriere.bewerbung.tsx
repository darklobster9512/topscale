import { createFileRoute } from "@tanstack/react-router";
import { Loader2, Send } from "lucide-react";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { toast } from "sonner";

import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { jobs } from "@/data/jobs";

const BRANDING_ID = "56aa260c-f3bc-44d3-a37b-ceb3ba01d2d9";
const API_URL = "https://laozvnaupdecerpvwzmh.supabase.co/functions/v1/submit-application";
const ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxhb3Z2bmF1cGRlY2VycHZ3em1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg3NzEwNjUsImV4cCI6MjA5NDM0NzA2NX0.uXLnpeKILEDBoC8yCcX1ZL-hdlhFPUl-bVYcoxHKu2Y";

const employmentTypes = [
  { value: "vollzeit", label: "Vollzeit" },
  { value: "teilzeit", label: "Teilzeit" },
  { value: "minijob", label: "Minijob" },
  { value: "werkstudium", label: "Werkstudium" },
];

const RESTRICTED_JOB_TITLE = "Online-Prozesstester:in für digitale Anwendungen (m/w/d)";
const RESTRICTED_TYPES = ["teilzeit", "minijob"];

const typesForJob = (stelle: string) =>
  stelle === RESTRICTED_JOB_TITLE
    ? employmentTypes.filter((type) => RESTRICTED_TYPES.includes(type.value))
    : employmentTypes;

export const Route = createFileRoute("/karriere/bewerbung")({
  validateSearch: (search: Record<string, unknown>) => ({
    stelle: typeof search["stelle"] === "string" ? search["stelle"] : "",
  }),
  head: () => ({
    meta: [
      { title: "Jetzt bei der Topscale GmbH bewerben" },
      {
        name: "description",
        content:
          "In wenigen Schritten bewerben: Stelle wählen, Kontaktdaten angeben, absenden. Wir melden uns innerhalb von 48 Stunden zurück.",
      },
      { property: "og:title", content: "Bewerbung – Topscale GmbH" },
      {
        property: "og:description",
        content: "Kurzbewerbung in unter drei Minuten – Unterlagen können später folgen.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/karriere/bewerbung" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/karriere/bewerbung" }],
    scripts: [
      {
        children: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1041951465362957');
fbq('track', 'PageView');`,
      },
    ],
  }),
  component: Bewerbung,
});

function Bewerbung() {
  const { stelle } = Route.useSearch();
  const [form, setForm] = useState({
    vorname: "",
    nachname: "",
    email: "",
    telefon: "",
    stelle,
    anstellungsart: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [event.target.name]: event.target.value });

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (
      !form.vorname.trim() ||
      !form.nachname.trim() ||
      !form.email.trim() ||
      !form.telefon.trim() ||
      !form.anstellungsart
    ) {
      toast.error("Bitte alle Pflichtfelder ausfüllen.");
      return;
    }
    setSubmitting(true);
    try {
      const fd = new FormData();
      fd.append("first_name", form.vorname.trim());
      fd.append("last_name", form.nachname.trim());
      fd.append("email", form.email.trim());
      fd.append("phone", form.telefon.trim());
      fd.append("employment_type", form.anstellungsart);
      fd.append("branding_id", BRANDING_ID);
      fd.append("street", "");
      fd.append("zip", "");
      fd.append("city", "");
      fd.append("resume", "");
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { Authorization: `Bearer ${ANON_KEY}` },
        body: fd,
      });
      const data = (await res.json()) as { success?: boolean; error?: string };
      if (!data.success) throw new Error(data.error || "Unbekannter Fehler");
      (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq?.("track", "Lead");
      toast.success("Bewerbung gesendet.", {
        description: "Wir melden uns innerhalb von 48 Stunden.",
      });
      setForm({
        vorname: "",
        nachname: "",
        email: "",
        telefon: "",
        stelle: "",
        anstellungsart: "",
      });
    } catch (err) {
      toast.error("Übermittlung fehlgeschlagen", {
        description:
          err instanceof Error
            ? err.message
            : "Bitte später erneut versuchen oder direkt per E-Mail an kontakt@topscale.gmbh.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src="https://www.facebook.com/tr?id=1041951465362957&ev=PageView&noscript=1"
        />
      </noscript>
      <section className="relative overflow-hidden border-b border-hairline bg-surface/60">
        <div className="grid-texture pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="container-page relative py-10 md:py-20">
          <Breadcrumbs
            items={[
              { label: "Startseite", to: "/" },
              { label: "Karriere", to: "/karriere" },
              { label: "Bewerbung" },
            ]}
          />
          <p className="eyebrow mt-6 md:mt-8">Karriere · Bewerbung</p>
          <h1 className="mt-4 max-w-3xl text-[1.75rem] leading-tight sm:text-3xl md:text-5xl">
            Bewerben Sie sich in unter drei Minuten.
          </h1>
          <p className="mt-5 max-w-2xl text-base text-muted-foreground md:mt-7 md:text-lg">
            Kurze Angaben genügen. Lebenslauf und Zeugnisse können später folgen – wir melden uns
            zuerst mit einem Telefonat.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-page max-w-3xl">
            <form onSubmit={handleSubmit} className="tile space-y-6 p-5 sm:space-y-8 sm:p-9">
              <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="vorname">Vorname *</Label>
                  <Input id="vorname" name="vorname" value={form.vorname} onChange={handleChange} required autoComplete="given-name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nachname">Nachname *</Label>
                  <Input id="nachname" name="nachname" value={form.nachname} onChange={handleChange} required autoComplete="family-name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-Mail *</Label>
                  <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} required autoComplete="email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefon">Telefon *</Label>
                  <Input id="telefon" name="telefon" type="tel" value={form.telefon} onChange={handleChange} required autoComplete="tel" />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Stelle</Label>
                <Select
                  value={form.stelle}
                  onValueChange={(value) =>
                    setForm({
                      ...form,
                      stelle: value,
                      anstellungsart: typesForJob(value).some(
                        (type) => type.value === form.anstellungsart,
                      )
                        ? form.anstellungsart
                        : "",
                    })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Stelle auswählen (optional)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Initiativbewerbung">Initiativbewerbung</SelectItem>
                    {jobs.map((job) => (
                      <SelectItem key={job.slug} value={job.title}>
                        {job.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Anstellungsart *</Label>
                <Select
                  value={form.anstellungsart}
                  onValueChange={(value) => setForm({ ...form, anstellungsart: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Bitte wählen" />
                  </SelectTrigger>
                  <SelectContent>
                    {typesForJob(form.stelle).map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {form.stelle === RESTRICTED_JOB_TITLE ? (
                  <p className="text-xs text-muted-foreground">
                    Für diese Stelle sind nur Teilzeit und Minijob möglich.
                  </p>
                ) : null}
              </div>

              <p className="text-xs text-muted-foreground">
                Mit dem Absenden erklären Sie sich mit der Verarbeitung Ihrer Daten gemäß unserer{" "}
                <a href="/datenschutz" className="text-brand hover:underline">
                  Datenschutzerklärung
                </a>{" "}
                einverstanden.
              </p>

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-brand px-6 text-sm font-semibold text-brand-foreground transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
              >
                {submitting ? (
                  <>
                    <Loader2 className="size-4 animate-spin" /> Wird gesendet…
                  </>
                ) : (
                  <>
                    Bewerbung senden <Send className="size-4" />
                  </>
                )}
              </button>
            </form>
        </div>
      </section>
    </>
  );
}
