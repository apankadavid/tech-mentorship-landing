import { Quote } from "lucide-react";
import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-28 bg-ice">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-widest text-teal-dark">
            What mentees say
          </p>

          <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-navy sm:text-4xl">
            Voices from
            <span className="block text-teal-dark">the program.</span>
          </h2>

          <p className="mt-5 text-lg text-slate">
            Feedback from participants will be added here as it is collected.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure
              key={item.id}
              className="flex flex-col rounded-xl border border-navy/10 bg-white p-6"
            >
              <Quote aria-hidden="true" className="h-8 w-8 text-brand" />
              <blockquote className="mt-4 flex-1 text-slate">
                {item.quote}
              </blockquote>
              <figcaption className="mt-5 border-t border-navy/10 pt-4">
                <p className="font-semibold text-navy">{item.name}</p>
                <p className="text-sm text-slate">{item.track}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-6 text-sm text-slate">
          These are placeholders until real participant feedback is available.
        </p>
      </div>
    </section>
  );
}