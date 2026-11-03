import { GraduationCap, UserCheck, Laptop, Users } from "lucide-react";

const benefits = [
  {
    icon: GraduationCap,
    title: "Six tracks",
    text: "Design, development, data and security",
  },
  {
    icon: UserCheck,
    title: "Mentor guidance",
    text: "Feedback from mentors in your track",
  },
  {
    icon: Laptop,
    title: "Real projects",
    text: "Finish with a project you can present",
  },
  {
    icon: Users,
    title: "Community",
    text: "Stay connected after graduation",
  },
];

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

export default function Hero() {
  return (
    <section className="bg-ice">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-8 lg:grid-cols-2 lg:py-20">
        <div>
            <p className="inline-block rounded-md bg-brand px-3 py-1 text-sm font-semibold text-white">
            Tech Mentorship Program 2026
            </p>

          <h1 className="mt-6 font-heading text-4xl font-bold leading-tight text-navy sm:text-5xl lg:text-6xl">
            Your next step in tech{" "}
            <span className="text-teal-dark">starts here.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-slate">
            Learn practical skills, build real projects and grow with guidance
            from mentors as you develop your place in technology.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#signup"
              className={`inline-flex items-center gap-2 rounded-lg bg-navy px-6 py-3 font-semibold text-white hover:bg-brand ${focusRing}`}
            >
              Join the program
              <span aria-hidden="true">→</span>
            </a>
            <a
              href="#curriculum"
              className={`rounded-lg border-2 border-navy px-6 py-3 font-semibold text-navy hover:bg-white ${focusRing}`}
            >
              Explore curriculum
            </a>
          </div>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -right-4 -top-4 hidden h-64 w-64 rounded-full bg-teal/20 sm:block"
          />
          <img
            src="/images/mentorship-team.webp"
            alt="young people collaborating around a laptop"
            width="1200"
            height="900"
            className="relative aspect-[4/3] w-full rounded-2xl object-cover"
          />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-8">
        <ul className="grid gap-5 rounded-2xl border border-navy/10 bg-white p-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex items-start gap-3">
              <Icon
                aria-hidden="true"
                className="mt-1 h-6 w-6 shrink-0 text-brand"
              />
              <div>
                <p className="font-heading font-bold text-navy">{title}</p>
                <p className="text-sm text-slate">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}