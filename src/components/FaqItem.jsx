export default function FaqItem({ faq, isOpen, onToggle }) {
  const buttonId = `faq-button-${faq.id}`;
  const panelId = `faq-panel-${faq.id}`;

  return (
    <div
      className={`rounded-xl border ${
        isOpen ? "border-brand/40 bg-ice" : "border-navy/10 bg-white"
      }`}
    >
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-5 rounded-xl p-5 text-left font-heading text-base font-semibold text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:p-6"
        >
          <span>{faq.question}</span>
          <span
            aria-hidden="true"
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xl ${
              isOpen ? "bg-brand text-white" : "bg-ice text-brand"
            }`}
          >
            {isOpen ? "−" : "+"}
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!isOpen}
        className="px-5 pb-5 leading-relaxed text-slate sm:px-6 sm:pb-6"
      >
        {faq.answer}
      </div>
    </div>
  );
}