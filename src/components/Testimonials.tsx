import { useEffect, useState } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  "Sophie has been brilliant treating my horses, she's patient, kind, and really fantastic with them. She does a brilliant job and they've always left feeling more comfortable, I can't recommend her enough.",
  "Sophie has been absolutely amazing with both of my horses. Neither is the easiest to do but she's always so patient and flexible with them which makes the whole process so much less stressful (for them and me!). I honestly cannot recommend her enough.",
  "Soph was absolutely brilliant with my youngster! Especially when he got bored a few minutes into the appointment!! Wouldn't trust anyone else with doing my horses teeth ☺️",
  "Sophie did an amazing job with my horse's teeth. Even my vet commented on how well balanced they were and asked who had done them! She's incredibly patient, kind, and lovely to deal with, and makes the whole experience stress free. Highly recommend Sophie to anyone looking for a knowledgeable and professional equine dentist.",
];

export function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setI((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-cream/60 border-y border-border/60">
      <div className="mx-auto max-w-5xl px-6 py-24 text-center">
        <p className="text-xs uppercase tracking-[0.22em] text-accent">Kind words</p>
        <h2 className="mt-3 font-display text-4xl text-primary md:text-5xl">Client experiences</h2>

        <div className="relative mt-14">
          <Quote
            size={56}
            strokeWidth={1.25}
            className="mx-auto text-accent/40"
            aria-hidden="true"
          />

          <div className="relative mt-6 min-h-[220px] sm:min-h-[200px] md:min-h-[180px]">
            {testimonials.map((t, idx) => (
              <blockquote
                key={idx}
                aria-hidden={idx !== i}
                className={`absolute inset-0 mx-auto max-w-3xl px-2 transition-opacity duration-1000 ease-in-out ${
                  idx === i ? "opacity-100" : "pointer-events-none opacity-0"
                }`}
              >
                <p className="font-display text-xl leading-relaxed text-primary sm:text-2xl md:text-[1.6rem] md:leading-[1.5]">
                  &ldquo;{t}&rdquo;
                </p>
              </blockquote>
            ))}
          </div>

          <div className="mt-10 flex justify-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Show testimonial ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  idx === i ? "w-8 bg-accent" : "w-2 bg-primary/20 hover:bg-primary/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
