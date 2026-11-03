import { useState } from "react";
import { faqs } from "../data/faqs";
import FaqItem from "./FaqItem";

export default function Faq() {
  const [openId, setOpenId] = useState(null);

  return (
    <section id="faq" className=" bg-white">
      <div className="mx-auto max-w-3xl px-4 py-16">
        <h2 className="font-heading text-3xl font-bold text-navy">
          Frequently asked questions
        </h2>
        <div className="mt-8 border-t border-slate/20">
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
    </section>
  );
}