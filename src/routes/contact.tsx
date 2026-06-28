import { createFileRoute } from "@tanstack/react-router";
import { site, whatsappUrl } from "@/lib/site";
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Sophie Bennett Equine Dentistry" },
      { name: "description", content: "Get in touch with Sophie Bennett Equine Dentistry — WhatsApp, phone or email. Forest of Dean and surrounding counties." },
      { property: "og:title", content: "Contact Sophie Bennett Equine Dentistry" },
      { property: "og:description", content: "Get in touch by WhatsApp, phone or email." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const items = [
    { icon: MessageCircle, label: "WhatsApp", value: "Message Sophie directly", href: whatsappUrl("Hi Sophie, I'd like to enquire about an appointment."), external: true },
    { icon: Phone, label: "Phone / Text", value: site.phoneDisplay, href: `tel:${site.phone}` },
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: MapPin, label: "Service area", value: site.area },
  ];
  return (
    <>
      <section className="border-b border-border bg-cream">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
          <p className="text-xs uppercase tracking-[0.22em] text-accent">Get in touch</p>
          <h1 className="mt-3 font-display text-5xl text-primary md:text-7xl text-balance">
            Have a question? <em className="not-italic text-accent">Just ask.</em>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Located in Hartpury, Gloucestershire, covering all surrounding counties. Trips further afield can be arranged for larger numbers. Please use the following details to book your horse's dental appointment, or for any queries about our services.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid gap-4 md:grid-cols-2">
          {items.map(({ icon: Icon, label, value, href, external }) => {
            const inner = (
              <div className="group flex items-start gap-4 rounded-md border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-xl">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Icon size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
                  <p className="mt-1 font-display text-xl text-primary break-all">{value}</p>
                </div>
              </div>
            );
            return href ? (
              <a key={label} href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>{inner}</a>
            ) : (
              <div key={label}>{inner}</div>
            );
          })}
        </div>

        <div className="mt-12 overflow-hidden rounded-md border border-border bg-card">
          <div className="border-b border-border p-6">
            <p className="text-xs uppercase tracking-[0.22em] text-accent">Based in</p>
            <h2 className="mt-2 font-display text-2xl text-primary md:text-3xl">Hartpury, Gloucestershire</h2>
            <p className="mt-2 text-sm text-muted-foreground">Covering the Forest of Dean and surrounding counties.</p>
          </div>
          <iframe
            title="Map of Hartpury, Gloucestershire"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-2.3700%2C51.8850%2C-2.2300%2C51.9650&layer=mapnik&marker=51.9250%2C-2.3000"
            className="block h-[420px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="border-t border-border p-3 text-center text-xs text-muted-foreground">
            <a href="https://www.openstreetmap.org/?mlat=51.9250&mlon=-2.3000#map=12/51.9250/-2.3000" target="_blank" rel="noreferrer" className="underline hover:text-accent">
              View larger map
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
