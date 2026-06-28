import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Sophie Bennett Equine Dentistry" },
      { name: "description", content: "Booking and payment terms for Sophie Bennett Equine Dentistry, including cancellation and payment policies." },
      { property: "og:title", content: "Terms & Conditions — Sophie Bennett Equine Dentistry" },
      { property: "og:description", content: "Booking and payment terms, including cancellation and payment policies." },
    ],
  }),
  component: Terms,
});

function Terms() {
  return (
    <>
      <section className="border-b border-border bg-cream">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-24">
          <p className="text-xs uppercase tracking-[0.22em] text-accent">The fine print</p>
          <h1 className="mt-3 font-display text-5xl text-primary md:text-7xl text-balance">
            Booking & <em className="not-italic text-accent">payment terms</em>
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20">
        <div className="space-y-12">
          <article>
            <h2 className="font-display text-3xl text-primary md:text-4xl">Cancellations</h2>
            <div className="mt-3 h-px w-16 bg-accent" />
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              We value your business and ask that you respect our business scheduling policies. Please notify us at least 24 hours in advance if you wish to cancel or reschedule your appointment. Any cancellations with less than 24 hours of notice are subject to a cancellation fee of £10.
            </p>
          </article>

          <article>
            <h2 className="font-display text-3xl text-primary md:text-4xl">Payment</h2>
            <div className="mt-3 h-px w-16 bg-accent" />
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              We currently accept cash or bank transfer at the time of the appointment. If there are any problems with payment please contact me within this time frame to arrange alternatives. Overdue payments of 7 days will incur a late payment charge of 10%.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              These charges are due to the additional admin required by a small business. I would much rather be spending my time treating your horses.
            </p>
          </article>

          <p className="text-lg font-display italic text-primary">Thank you for understanding.</p>
        </div>
      </section>
    </>
  );
}
