import {
  Laptop,
  Users,
  Trophy,
  PenTool,
  LayoutDashboard,
  Code,
  Database,
  BarChart3,
  ShieldCheck,
} from "lucide-react";
import { tracks } from "../data/tracks";

const points = [
  {
    icon: Laptop,
    title: "Learn by building",
    text: "Practise your skills through hands-on projects.",
  },
  {
    icon: Users,
    title: "Guided by mentors",
    text: "Get feedback and direction from mentors in your track.",
  },
  {
    icon: Trophy,
    title: "Finish with a showcase",
    text: "Present your project at the end of the project sprint.",
  },
];

const trackIcons = {
  "Graphic Design": PenTool,
  "UI/UX Design": LayoutDashboard,
  "Frontend Development": Code,
  "Backend Development": Database,
  "Data Science": BarChart3,
  Cybersecurity: ShieldCheck,
};

export default function About() {
  return (
    <section id="about" className="scroll-mt-28 bg-ice">
      {/* Banner */}
      <div className="relative isolate overflow-hidden bg-navy">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-0 hidden w-1/2 lg:block"
        >
          <img
            src="/images/about-banner.webp"
            alt=""
            width="1600"
            height="1067"
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy to-transparent" />
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-1/2 hidden w-3 -translate-x-1/2 -skew-x-12 bg-teal-dark lg:block"
        />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-8 lg:py-24">
          <div className="max-w-xl lg:max-w-md xl:max-w-xl">
            <p className="text-sm font-bold uppercase tracking-widest text-teal-300">
              About the program
            </p>
            <h2 className="mt-4 font-heading text-4xl font-bold leading-tight text-white lg:text-5xl">
              More than learning.
              <span className="block text-teal-300">A chance to grow.</span>
            </h2>
            <p className="mt-6 text-lg text-white/85">
              The Tech Mentorship Program 2026 helps learners develop practical
              technology skills, work on projects and present what they have
              learned.
            </p>
            <a
              href="#signup"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-teal-300 px-6 py-3 font-semibold text-navy hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Join the program
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Benefit cards */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-8">
        <ul className="grid gap-5 md:grid-cols-3">
          {points.map(({ icon: Icon, title, text }) => (
            <li
              key={title}
              className="flex items-start gap-4 rounded-xl border border-navy/10 bg-white p-6"
            >
              <span
                aria-hidden="true"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ice text-teal-dark"
              >
                <Icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-heading text-lg font-bold text-navy">
                  {title}
                </h3>
                <p className="mt-1 text-slate">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Tracks */}
      <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-20 sm:px-8 lg:grid-cols-3 lg:items-center">
        <div className="lg:col-span-1">
          <p className="text-sm font-bold uppercase tracking-widest text-teal-dark">
            Explore your path
          </p>
          <h3 className="mt-3 font-heading text-3xl font-bold text-navy">
            Six technology <span className="text-brand">tracks</span>
          </h3>
          <p className="mt-4 text-slate">
            Choose from six tracks and find the area you want to focus on.
          </p>
          <a
            href="#signup"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-navy px-6 py-3 font-semibold text-white hover:bg-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            Choose your track
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 lg:col-span-2">
          {tracks.map((track) => {
            const Icon = trackIcons[track];
            return (
              <li
                key={track}
                className="flex items-center gap-3 rounded-xl border border-navy/10 bg-white p-4"
              >
                {Icon && (
                  <Icon aria-hidden="true" className="h-6 w-6 shrink-0 text-brand" />
                )}
                <span className="font-semibold text-navy">{track}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
