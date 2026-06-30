import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-dentistry.jpg";
import logo from "@/assets/logo.png";
import { site, whatsappUrl } from "@/lib/site";
import { Testimonials } from "@/components/Testimonials";
import { Check, Heart, ShieldCheck, MapPin, MessageCircle, ArrowRight, Stethoscope, Sparkles, Droplets, FileText, Smile } from "lucide-react";
import dentalWork2 from "@/assets/dental-work-2.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sophie Bennett Equine Dentistry" },
      { name: "description", content: "Equine dentist based in Hartpury, Gloucester. Fully qualified with the BEVA/BVDA and BAEDT." },
      { property: "og:title", content: "Sophie Bennett Equine Dentistry" },
      { property: "og:description", content: "Equine dentist based in Hartpury, Gloucester. Fully qualified with the BEVA/BVDA and BAEDT." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden hero-grad text-primary-foreground">
        <div className="absolute inset-0 opacity-30">
          <img src={heroImg} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/40" />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-[1.2fr_1fr] md:py-32">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Now taking new clients
            </div>
            <h1 className="mt-6 font-display text-4xl leading-[1.08] text-balance sm:text-5xl md:text-7xl">
              Caring professional<br className="hidden sm:block" /> dental care for<br /><em className="text-accent not-italic">your horse.</em>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
              Equine dentist based in Hartpury, Gloucester. Fully qualified with the BEVA/BVDA, and a full member of the British Association of Equine Dental Technicians. Dedicated to supporting your horse's welfare, comfort, and performance through calm, compassionate, and professional dental care tailored to each individual horse.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/book" className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-primary transition-all hover:bg-accent/90 hover:shadow-2xl">
                Book an appointment
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a href={whatsappUrl("Hi Sophie, I'd like to enquire about booking a dental check for my horse.")} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-7 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10">
                <MessageCircle size={16} /> WhatsApp Sophie
              </a>
            </div>
          </div>
          <div className="hidden items-center justify-center md:flex">
            <div className="relative aspect-square w-full max-w-sm">
              <div className="absolute inset-0 rounded-full bg-cream/95 shadow-2xl" />
              <img src={logo} alt="Sophie Bennett Equine Dentistry logo" className="relative h-full w-full rounded-full object-cover p-6" />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-border bg-cream">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 sm:grid-cols-2 md:grid-cols-4">
          {[
            { icon: Heart, label: "Calm, sympathetic approach" },
            { icon: ShieldCheck, label: "Fully qualified & insured" },
            { icon: MapPin, label: "Gloucestershire & beyond" },
            { icon: Check, label: "BAEDT • BEVA/BVDA" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3">
              <Icon size={20} className="text-accent" />
              <span className="text-sm font-medium text-primary">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.22em] text-accent">Your appointment</p>
          <h2 className="mt-3 font-display text-4xl text-primary md:text-5xl text-balance">
            What to Expect From a Dental Appointment
          </h2>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Stethoscope,
              title: "Thorough examination",
              desc: "A full external and internal examination of your horse's head and dental cavity, so any abnormalities can be identified at the very start of treatment.",
            },
            {
              icon: Sparkles,
              title: "Floating & rasping",
              desc: "All sharp enamel points and any dental overgrowths are reduced appropriately to help create a more balanced mouth. Helping to maximise the efficiency, and comfort when chewing and helping to prevent future problems.",
            },
            {
              icon: Droplets,
              title: "Flushing of diastemata",
              desc: "Gaps between teeth create the perfect environment for food to become trapped. When present, these are flushed as part of the treatment plan to help prevent future dental disease.",
            },
            {
              icon: FileText,
              title: "Full electronic chart",
              desc: "A detailed chart is sent to you by email after every visit, highlighting everything found during treatment and outlining the ongoing treatment plan.",
            },
            {
              icon: Smile,
              title: "Stress-free service",
              desc: "A tailored calm experience for you and your horse, leaving you with peace of mind that your horse's dental health is being taken care of.",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <article key={title} className="group flex flex-col rounded-lg border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent transition-colors group-hover:bg-accent group-hover:text-primary">
                <Icon size={22} strokeWidth={1.5} />
              </div>
              <h3 className="mt-6 font-display text-2xl text-primary">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* ABOUT SNIPPET */}
      <section className="bg-primary/5">
        <div className="mx-auto max-w-7xl grid gap-16 px-6 py-24 md:grid-cols-2 md:items-center">
          <div className="relative">
            <img src={dentalWork2} alt="Sophie examining a horse in the stable" className="aspect-[4/5] w-full rounded-md object-cover shadow-xl" />
            <div className="absolute -bottom-6 -right-6 hidden h-36 w-36 rounded-full border-4 border-cream bg-accent md:flex items-center justify-center text-center font-display text-primary px-3 text-sm leading-tight">
              BEVA/BVDA<br />Qualified,<br />BAEDT Registered
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-accent">About Sophie</p>
            <h2 className="mt-3 font-display text-4xl text-primary md:text-5xl text-balance">
              A lifelong passion, a professional calling.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Fully qualified BEVA/BVDA and BAEDT registered, Sophie brings calm, considered dental care to horses and ponies across Gloucestershire and beyond.
            </p>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:text-accent hover:underline">
              Read more about Sophie <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>



      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <p className="text-xs uppercase tracking-[0.22em] text-accent">Is your horse due a check?</p>
        <h2 className="mt-4 font-display text-4xl text-primary md:text-6xl text-balance">
          Book your horse's<br /> next dental appointment.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
          Send a request and Sophie will confirm a time personally, or message directly on WhatsApp.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link to="/book" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-xl">
            Book an appointment <ArrowRight size={16} />
          </Link>
          <a href={whatsappUrl("Hi Sophie, I'd like to book a dental appointment.")} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-7 py-3.5 text-sm font-medium text-primary hover:bg-primary/5">
            <MessageCircle size={16} /> Message on WhatsApp
          </a>
        </div>
        <p className="mt-6 text-xs text-muted-foreground">Call or text {site.phoneDisplay} · {site.email}</p>
      </section>
    </>
  );
}
