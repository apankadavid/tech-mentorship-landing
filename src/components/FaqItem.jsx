export default function FaqItem({ faq, isOpen, onToggle }) {
  const buttonId = `faq-button-${faq.id}`;
  const panelId = `faq-panel-${faq.id}`;

  return (
    <div className="border-b border-slate/20">
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 py-4 text-left font-heading text-lg font-semibold text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          {faq.question}
          <span aria-hidden="true" className="text-2xl text-brand">
            {isOpen ? "−" : "+"}
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!isOpen}
        className="pb-4 text-slate"
      >
        {faq.answer}
      </div>
    </div>
  );
}