import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="font-heading text-4xl font-bold text-navy">
        Page not found
      </h1>
      <p className="mt-4 text-slate">That page does not exist.</p>
      <Link to="/" className="mt-6 inline-block font-semibold text-brand underline">
        Back to home
      </Link>
    </section>
  );
}