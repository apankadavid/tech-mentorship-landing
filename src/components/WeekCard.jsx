import { Link } from "react-router-dom";
import {
  Code,
  Paintbrush,
  Braces,
  GitBranch,
  Atom,
  Rocket,
  BookOpen,
} from "lucide-react";

const icons = {
  1: Code,
  2: Paintbrush,
  3: Braces,
  7: GitBranch,
  10: Atom,
  13: Rocket,
};

export default function WeekCard({ week }) {
  const milestone = String(week.id).padStart(2, "0");
  const Icon = icons[week.id] ?? BookOpen;

  return (
    <article className="flex flex-col rounded-xl border border-navy/10 bg-white p-6">
      <div className="flex items-start gap-4">
        <span
          aria-hidden="true"
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-ice text-brand"
        >
          <Icon className="h-7 w-7" />
        </span>
        <div>
          <p className="text-sm font-semibold text-teal-dark">
            Milestone {milestone}
          </p>
          <h3 className="mt-1 font-heading text-xl font-bold text-navy">
            {week.title}
          </h3>
        </div>
      </div>

      <p className="mt-4 flex-1 leading-relaxed text-slate">{week.summary}</p>

      <Link
        to={`/curriculum/${week.id}`}
        className="mt-5 inline-flex items-center gap-2 font-semibold text-brand hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
      >
        Explore milestone
        <span aria-hidden="true">→</span>
        <span className="sr-only">: {week.title}</span>
      </Link>
    </article>
  );
}