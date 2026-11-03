import { tracks } from "../data/tracks";

const points = [
  {
    title: "Learn by building",
    text: "Practise your skills on real projects, not only theory.",
  },
  {
    title: "Guided by mentors",
    text: "Get feedback and direction from experienced people in your track.",
  },
  {
    title: "Finish with a showcase",
    text: "End with a project sprint, a presentation and a graduation session.",
  },
];

export default function About() {
  return (
    <section id="about" className=" bg-ice">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="font-heading text-3xl font-bold text-navy">
          About the program
        </h2>
        <p className="mt-3 max-w-2xl text-slate">
          The Tech Mentorship Program 2026 helps learners build practical
          skills and present real work.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {points.map((p) => (
            <div key={p.title} className="rounded-lg bg-white p-6">
              <h3 className="font-heading text-xl font-bold text-navy">
                {p.title}
              </h3>
              <p className="mt-3 text-slate">{p.text}</p>
            </div>
          ))}
        </div>

        <h3 className="mt-12 font-heading text-xl font-bold text-navy">
          Six tracks
        </h3>
        <ul className="mt-4 flex flex-wrap gap-3">
          {tracks.map((t) => (
            <li
              key={t}
              className="rounded-md bg-navy px-3 py-1 text-sm font-medium text-white"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}