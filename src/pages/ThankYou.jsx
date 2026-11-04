import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

export default function ThankYou() {
  const { state } = useLocation();
  const name = state?.name;
  const headingRef = useRef(null);

  useEffect(() => {
    document.title = "Thank you | Tech Mentorship Program 2026";
    headingRef.current?.focus();
  }, []);

  return (
    <section className="flex min-h-[75vh] items-center justify-center bg-ice px-4 py-20">
      <div className="w-full max-w-2xl rounded-2xl border border-navy/10 bg-white px-6 py-12 text-center sm:px-12 sm:py-16">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-teal/10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-10 w-10 text-teal-dark"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m5 12 4 4L19 6"
            />
          </svg>
        </div>

        <p className="mt-8 text-sm font-bold uppercase tracking-widest text-teal-dark">
          Tech Mentorship Program 2026
        </p>

        <h1
          ref={headingRef}
          tabIndex={-1}
          className="mt-4 font-heading text-3xl font-bold leading-tight text-navy focus:outline-none sm:text-4xl"
        >
          {name ? `Thank you, ${name}!` : "Thank you!"}
        </h1>

        <p className="mx-auto mt-5 max-w-lg leading-7 text-slate">
          You have completed the demonstration sign-up for the Tech Mentorship
          Program 2026.
        </p>

        <div className="mt-8 rounded-xl border border-navy/10 bg-ice p-5 text-left">
          <h2 className="font-semibold text-navy">What happens next?</h2>

          <p className="mt-2 text-sm leading-6 text-slate">
            This is a frontend project demonstration. Your details have not
            been sent to program organisers or saved in a database.
          </p>
        </div>

        <Link
          to="/"
          className="mt-9 inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-7 py-3 font-semibold text-white hover:bg-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
        >
          Back to home
          <span aria-hidden="true">→</span>
        </Link>

        <p className="mt-8 text-xs text-slate">Learn. Build. Grow.</p>
      </div>
    </section>
  );
}