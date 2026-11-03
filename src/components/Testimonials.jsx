import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt- bg-ice">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="font-heading text-3xl font-bold text-navy">
          What mentees say
        </h2>
        <p className="mt-3 max-w-2xl text-slate">
          Placeholder content until real feedback is added.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure key={t.id} className="rounded-lg bg-white p-6">
              <blockquote className="text-slate">{t.quote}</blockquote>
              <figcaption className="mt-4 font-semibold text-navy">
                {t.name}
                <span className="block text-sm font-medium text-teal-dark">
                  {t.track}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}