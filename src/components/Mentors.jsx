import { mentors } from "../data/mentors";
import MentorCard from "./MentorCard";

export default function Mentors() {
  return (
    <section id="mentors" className="scroll-mt-28 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-teal-dark">
            Learn with guidance
          </p>

          <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-navy sm:text-4xl">
            Guidance that moves you forward.
          </h2>

          <p className="mt-5 text-lg text-slate">
            Learning becomes more meaningful when you have guidance along the
            way. Explore the areas where mentors will support your development
            and practical learning.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mentors.map((mentor) => (
            <MentorCard key={mentor.id} mentor={mentor} />
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-slate">
          Mentor names and profiles will be announced soon. The illustrated
          avatars are placeholders.
        </p>
      </div>
    </section>
  );
}