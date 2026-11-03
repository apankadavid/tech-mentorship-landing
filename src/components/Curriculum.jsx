import { Trophy } from "lucide-react";
import { weeks } from "../data/weeks";
import WeekCard from "./WeekCard";

export default function Curriculum() {
  return (
    <section id="curriculum" className="scroll-mt-28 bg-ice">
      {/* Banner */}
      <div className="relative isolate overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-0 hidden w-1/2 lg:block"
        >
          <img
            src="/images/curriculum-banner.webp"
            alt=""
            width="1600"
            height="1067"
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ice to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-8 lg:py-24">
          <div className="max-w-xl lg:max-w-md xl:max-w-xl">
            <p className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-teal-dark">
              Learning journey
              <span aria-hidden="true" className="h-px w-16 bg-teal-dark/40" />
            </p>

            <h2 className="mt-4 font-heading text-4xl font-bold leading-tight text-navy lg:text-5xl">
              Learn with purpose.
              <span className="block text-teal-dark">
                Build with confidence.
              </span>
            </h2>

            <p className="mt-6 text-lg text-slate">
              Explore examples of the skills, topics and milestones
              participants may work towards during the programme.
            </p>

            <a
              href="#milestones"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-navy px-6 py-3 font-semibold text-white hover:bg-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              Explore the milestones
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </div>

      {/* Milestones */}
      <div
        id="milestones"
        className="mx-auto max-w-7xl scroll-mt-28 px-4 pb-20 pt-4 sm:px-8"
      >
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-teal-dark">
              Sample learning milestones
            </p>
            <h3 className="mt-3 font-heading text-3xl font-bold text-navy">
              A structured journey,
              <span className="block text-teal-dark">real-world skills.</span>
            </h3>
          </div>
          <p className="text-slate lg:border-l lg:border-navy/15 lg:pl-8">
            From foundational concepts to hands-on projects, each milestone
            builds your skills step by step.
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {weeks.map((week) => (
            <WeekCard key={week.id} week={week} />
          ))}
        </div>

        <p className="mt-6 text-sm text-slate">
          Note: These are illustrative learning topics, not a confirmed
          programme timetable.
        </p>

        {/* Closing bar */}
        <div className="mt-10 flex flex-col gap-4 rounded-xl bg-navy p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="flex items-center gap-4">
            <Trophy
              aria-hidden="true"
              className="h-8 w-8 shrink-0 text-teal-300"
            />
            <p className="font-heading text-xl font-bold sm:text-2xl">
              Finish with a{" "}
              <span className="text-teal-300">project you can show.</span>
            </p>
          </div>
          <a
            href="#signup"
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white px-5 py-2.5 font-semibold text-white hover:bg-white hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Join the program
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}