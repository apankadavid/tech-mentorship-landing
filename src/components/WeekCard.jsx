import { Link } from "react-router-dom";

export default function WeekCard({ week }) {
  return (
    <article className="flex flex-col rounded-lg border border-slate/20 bg-white p-6">
      <p className="text-sm font-semibold text-teal-dark">Week {week.id}</p>
      <h3 className="mt-2 font-heading text-xl font-bold text-navy">
        {week.title}
      </h3>
      <p className="mt-3 flex-1 text-slate">{week.summary}</p>
      <Link
        to={`/curriculum/${week.id}`}
        className="mt-5 font-semibold text-brand underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
      >
        View week {week.id}
        <span className="sr-only">: {week.title}</span>
      </Link>
    </article>
  );
}