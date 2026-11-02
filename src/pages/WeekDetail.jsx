import { Link, useParams } from "react-router-dom";
import { weeks } from "../data/weeks";
import NotFound from "./NotFound";

export default function WeekDetail() {
  const { weekId } = useParams();
  const week = weeks.find((w) => w.id === weekId);

  if (!week) return <NotFound />;

  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <Link
        to="/#curriculum"
        className="font-semibold text-brand underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
      >
        Back to curriculum
      </Link>

      <p className="mt-8 text-sm font-semibold text-teal-dark">
        Week {week.id}
      </p>
      <h1 className="mt-2 font-heading text-4xl font-bold text-navy">
        {week.title}
      </h1>
      <p className="mt-4 text-lg text-slate">{week.summary}</p>

      <h2 className="mt-10 font-heading text-2xl font-bold text-navy">
        Topics covered
      </h2>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-slate">
        {week.topics.map((topic) => (
          <li key={topic}>{topic}</li>
        ))}
      </ul>

      <h2 className="mt-10 font-heading text-2xl font-bold text-navy">
        What you will achieve
      </h2>
      <p className="mt-4 text-slate">{week.outcome}</p>
    </section>
  );
}