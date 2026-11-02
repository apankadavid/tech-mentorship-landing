import { mentors } from "../data/mentors";
import MentorCard from "./MentorCard";

export default function Mentors() {
  return (
    <section id="mentors" className="scroll-mt-4 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="font-heading text-3xl font-bold text-navy">Mentors</h2>
        <p className="mt-3 max-w-2xl text-slate">
          Meet the people who guide you through each track. (Placeholder
          profiles for now.)
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mentors.map((m) => (
            <MentorCard key={m.id} mentor={m} />
          ))}
        </div>
      </div>
    </section>
  );
}