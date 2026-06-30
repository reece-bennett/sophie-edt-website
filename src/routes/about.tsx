import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import sophieHorse from "@/assets/sophie-with-horse.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Sophie — Sophie Bennett Equine Dentistry" },
      { name: "description", content: "Meet Sophie Bennett — BAEDT and BEVA/BVDA qualified equine dentist working across Gloucestershire." },
      { property: "og:title", content: "About Sophie Bennett" },
      { property: "og:description", content: "BAEDT & BEVA/BVDA qualified equine dentist. Calm, sympathetic approach." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="border-b border-border bg-cream">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <p className="text-xs uppercase tracking-[0.22em] text-accent">About</p>
          <h1 className="mt-3 font-display text-5xl text-primary md:text-7xl text-balance">
            Meet Sophie.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            A fully qualified and registered equine dentist with a calm, considered approach — bringing modern dental care to horses and ponies across Gloucestershire and surrounding counties.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pt-16">
        <img
          src={sophieHorse}
          alt="Sophie Bennett with a horse outside a stone manor house"
          className="w-full rounded-md object-cover"
          loading="lazy"
        />
      </section>

      <section className="mx-auto grid max-w-3xl gap-16 px-6 py-20">
        <div>
          <h2 className="font-display text-3xl text-primary md:text-4xl">A lifelong passion, a professional calling.</h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Sophie has had a lifelong passion for horses and decided to turn that passion into a career when she studied Equine Science BSc (Hons) at Hartpury University. During her studies, she undertook a dissertation focused on equine teeth, which sparked a keen interest in equine dentistry and inspired her to pursue it professionally.
            </p>
            <p>
              Following graduation, Sophie gained valuable experience working alongside Jonny Keen and Bobby Le Feaux. Bobby later took Sophie on as his student, mentoring her and sharing his extensive expertise within the industry. Sophie went on to successfully pass her BEVA/BVDA examination and became a full member of the BAEDT.
            </p>
            <p>
              Dedicated to providing the highest standard of care, Sophie continues to expand her professional knowledge and practical skills through ongoing education and regular collaboration with other equine dentists and veterinarians.
            </p>
          </div>

          <div className="mt-10 rounded-md border border-border bg-card p-6">
            <p className="text-xs uppercase tracking-[0.22em] text-accent">Credentials</p>
            <ul className="mt-4 space-y-3 text-sm text-primary">
              {[
                "BAEDT — British Association of Equine Dental Technicians",
                "BEVA/BVDA qualified examination",
                "Fully insured for private practice",
                "Gloucestershire based — covering all surrounding counties",
              ].map((c) => (
                <li key={c} className="flex items-start gap-3"><Check size={18} className="mt-0.5 text-accent" />{c}</li>
              ))}
            </ul>
          </div>

          <Link to="/book" className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">
            Book with Sophie
          </Link>
        </div>
      </section>
    </>
  );
}
