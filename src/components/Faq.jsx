import { useState } from "react";
import { faqs } from "../data/faqs";
import FaqItem from "./FaqItem";

export default function Faq() {
  const [openId, setOpenId] = useState(null);

  return (
    <section id="faq" className="scroll-mt-28 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Introduction */}
          <div className="lg:col-span-2">
            <p className="text-sm font-bold uppercase tracking-widest text-teal-dark">
              Need some clarity?
            </p>

            <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-navy sm:text-4xl">
              Frequently asked
              <span className="block text-teal-dark">questions.</span>
            </h2>

            <p className="mt-5 text-slate">
              Find answers to common questions about the Tech Mentorship
              Program 2026, its learning tracks and what to expect.
            </p>

            <div className="mt-8 rounded-xl border border-navy/10 bg-ice p-6">
              <p className="font-heading text-lg font-bold text-navy">
                Ready to join?
              </p>
              <p className="mt-2 text-slate">
                Choose your track and sign up to take the next step.
              </p>
              <a
                href="#signup"
                className="mt-5 inline-flex items-center gap-2 font-semibold text-brand hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
              >
                Go to sign up
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* Questions */}
          <div className="space-y-4 lg:col-span-3">
            {faqs.map((faq) => (
              <FaqItem
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}