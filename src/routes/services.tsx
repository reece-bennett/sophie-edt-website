import { createFileRoute } from "@tanstack/react-router";
import dentalWork1 from "@/assets/dental-work-1.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Sophie Bennett Equine Dentistry" },
      { name: "description", content: "Every equine, every year. Annual dental examinations are essential for every horse, pony and donkey's health and welfare." },
      { property: "og:title", content: "Every equine, every year — Equine Dental Care" },
      { property: "og:description", content: "Why every horse, pony and donkey needs a yearly dental examination." },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <section className="border-b border-border bg-cream">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
          <p className="text-xs uppercase tracking-[0.22em] text-accent">Services</p>
          <h1 className="mt-3 font-display text-5xl text-primary md:text-7xl text-balance">
            Every equine, every year.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20">
        <div className="space-y-7 text-lg leading-relaxed text-primary/85">
          <p>
            Every horse, pony, or donkey — regardless of its age, discipline, whether it's retired or even just a companion — needs a dental examination at least once a year. This is paramount for the horse's overall health and welfare.
          </p>

          <div className="my-10 h-px gold-line" />

          <img src={dentalWork1} alt="Equine dental examination in progress" className="w-full rounded-md object-cover shadow-xl" />

          <p>
            This is because horses' teeth continually erupt throughout their life, leaving behind sharp points and uneven wear which can cause ulceration, pain manifesting in different forms of discomfort, behavioural issues, weight loss, quidding, performance issues, and further dental problems if left untreated.
          </p>

          <p>
            Sometimes equines do not show any sign of a dental problem due to their stoic nature, meaning they are very skilled when it comes to hiding pain — especially with their teeth. This all comes down to their evolutionary traits as a survival technique to protect them from predators in the wild. Even though our horses are safe in our hands now, and don't have any real predators, our modern horses, ponies and donkeys still carry this trait.
          </p>

          <blockquote className="my-10 border-l-2 border-accent pl-6 font-display text-2xl italic text-primary md:text-3xl">
            Regular dental care helps the horse's overall health and welfare by allowing them to chew and digest food efficiently, optimising performance, improving comfort, and avoiding future dental disease.
          </blockquote>
        </div>
      </section>
    </>
  );
}
