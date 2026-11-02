import { Link, useLocation } from "react-router-dom";

export default function ThankYou() {
  const { state } = useLocation();
  const name = state?.name;

  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-heading text-4xl font-bold text-navy">
        {name ? `Thank you, ${name}!` : "Thank you!"}
      </h1>
      <p className="mt-4 text-lg text-slate">
        Your sign-up has been received. We will be in touch with next steps.
      </p>
      <Link
        to="/"
        className="mt-8 inline-block font-semibold text-brand underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
      >
        Back to home
      </Link>
    </section>
  );
}