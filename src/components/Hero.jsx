export default function Hero() {
  return (
    <section className="bg-ice">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <p className="inline-block rounded-md bg-brand px-3 py-1 text-sm font-semibold text-white">
          Tech Mentorship Program 2026
        </p>
        <h1 className="mt-6 max-w-3xl font-heading text-4xl font-bold leading-tight text-navy sm:text-5xl">
          Learn tech skills. Build real projects. Grow with mentors.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate">
          A mentorship program for designers, developers, data scientists and
          security learners, with guidance from mentors every step of the way.
        </p>
        <a
          href="#signup"
          className="mt-8 inline-block rounded-md bg-brand px-6 py-3 font-semibold text-white hover:bg-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          Join the program
        </a>
      </div>
    </section>
  );
}