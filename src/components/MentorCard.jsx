export default function MentorCard({ mentor }) {
  return (
    <article className="overflow-hidden rounded-xl border border-navy/10 bg-white">
      <div className="flex items-center gap-5 bg-ice p-6">
        <img
          src={mentor.image}
          alt=""
          width="96"
          height="96"
          loading="lazy"
          className="h-24 w-24 shrink-0 rounded-full border border-navy/10 bg-white object-cover object-top"
        />
        <div>
          <h3 className="font-heading text-lg font-bold text-navy">
            {mentor.track}
          </h3>
          <p className="mt-1 text-sm font-semibold text-slate">
            Mentor to be announced
          </p>
        </div>
      </div>

      <div className="p-6">
        <p className="leading-relaxed text-slate">{mentor.bio}</p>
      </div>
    </article>
  );
}