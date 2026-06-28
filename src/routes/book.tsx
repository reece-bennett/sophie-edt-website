import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { site, whatsappUrl } from "@/lib/site";
import { MessageCircle, Mail, Phone, Check } from "lucide-react";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book an Appointment — Sophie Bennett Equine Dentistry" },
      { name: "description", content: "Request your horse's dental appointment with Sophie — send your details and she'll confirm a time personally." },
      { property: "og:title", content: "Book an Equine Dental Appointment" },
      { property: "og:description", content: "Send a request and Sophie will confirm a time personally." },
    ],
  }),
  component: Book,
});

function Book() {
  const [form, setForm] = useState({ name: "", horse: "", yard: "", preferred: "", notes: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg = [
      `Hi Sophie, I'd like to book a dental appointment:`,
      ``,
      `Name: ${form.name}`,
      `Horse: ${form.horse}`,
      `Yard / postcode: ${form.yard}`,
      form.preferred ? `Preferred dates/times: ${form.preferred}` : null,
      form.notes ? `Notes: ${form.notes}` : null,
    ].filter(Boolean).join("\n");
    window.open(whatsappUrl(msg), "_blank");
    setSent(true);
  }

  return (
    <>
      <section className="border-b border-border bg-cream">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <p className="text-xs uppercase tracking-[0.22em] text-accent">Booking</p>
          <h1 className="mt-3 font-display text-5xl text-primary md:text-6xl text-balance">
            Request an appointment.
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Send your details below and Sophie will be in touch personally to arrange a time that suits. Prefer to message directly? <a href={whatsappUrl("Hi Sophie, I'd like to book a dental appointment.")} target="_blank" rel="noreferrer" className="text-primary underline underline-offset-4 hover:text-accent">Open WhatsApp</a>.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="rounded-md border border-border bg-card p-6 md:p-8">
          {!sent ? (
            <form onSubmit={handleSubmit} className="space-y-3">
              <Field label="Your name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
              <Field label="Horse's name" value={form.horse} onChange={(v) => setForm({ ...form, horse: v })} required />
              <Field label="Yard / postcode" value={form.yard} onChange={(v) => setForm({ ...form, yard: v })} required />
              
              <div>
                <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Notes (optional)</label>
                <textarea
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  rows={3}
                  className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
                />
              </div>
              <button
                type="submit"
                disabled={!form.name || !form.horse || !form.yard}
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 disabled:opacity-40"
              >
                <MessageCircle size={16} /> Send request via WhatsApp
              </button>
              <p className="text-center text-xs text-muted-foreground">
                Your details open in WhatsApp — Sophie confirms personally.
              </p>
            </form>
          ) : (
            <div className="flex h-full min-h-[260px] flex-col items-center justify-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/20 text-accent">
                <Check size={28} />
              </div>
              <div className="mt-4 font-display text-2xl text-primary">Request sent</div>
              <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                WhatsApp should be open with your appointment details. Sophie will confirm shortly.
              </p>
              <button onClick={() => { setSent(false); setForm({ name: "", horse: "", yard: "", preferred: "", notes: "" }); }} className="mt-6 text-sm text-primary underline underline-offset-4 hover:text-accent">
                Send another request
              </button>
            </div>
          )}
        </div>

        {/* Alt contact */}
        <div className="mt-12 grid gap-4 rounded-md border border-border bg-cream p-6 md:grid-cols-3">
          <a href={`tel:${site.phone}`} className="flex items-center gap-3 rounded-md p-3 hover:bg-background">
            <Phone size={18} className="text-accent" /><span className="text-sm font-medium text-primary">{site.phoneDisplay}</span>
          </a>
          <a href={`mailto:${site.email}`} className="flex items-center gap-3 rounded-md p-3 hover:bg-background">
            <Mail size={18} className="text-accent" /><span className="text-sm font-medium text-primary break-all">{site.email}</span>
          </a>
          <a href={whatsappUrl("Hi Sophie, I'd like to book a dental appointment.")} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-md p-3 hover:bg-background">
            <MessageCircle size={18} className="text-accent" /><span className="text-sm font-medium text-primary">WhatsApp Sophie</span>
          </a>
        </div>
      </section>
    </>
  );
}

function Field({ label, value, onChange, required }: { label: string; value: string; onChange: (v: string) => void; required?: boolean }) {
  return (
    <div>
      <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}{required && " *"}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
      />
    </div>
  );
}
