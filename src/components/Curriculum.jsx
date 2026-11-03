import { weeks } from "../data/weeks";
import WeekCard from "./WeekCard";

export default function Curriculum() {
  return (
    <section id="curriculum" className="scroll-mt-28 bg-ice">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="font-heading text-3xl font-bold text-navy">
          Curriculum
        </h2>
        <p className="mt-3 max-w-2xl text-slate">
          Follow the track week by week and finish with a project you can show.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {weeks.map((week) => (
            <WeekCard key={week.id} week={week} />
          ))}
        </div>
      </div>
    </section>
  );
}