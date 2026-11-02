export default function MentorCard({ mentor }) {
  return (
    <article className="rounded-lg border border-slate/20 bg-white p-6">
      <div
        aria-hidden="true"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-brand font-heading text-xl font-bold text-white"
      >
        {mentor.name.charAt(0)}
      </div>
      <h3 className="mt-4 font-heading text-xl font-bold text-navy">
        {mentor.name}
      </h3>
      <p className="text-sm font-semibold text-teal-dark">{mentor.track}</p>
      <p className="mt-3 text-slate">{mentor.bio}</p>
    </article>
  );
}