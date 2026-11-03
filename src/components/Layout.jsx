import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>

      <header className="bg-ice px-4 pt-4 sm:px-6">
        <nav
          aria-label="Main"
          className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-3 rounded-2xl bg-navy px-4 py-3 text-white sm:rounded-full sm:px-6"
        >
          <Link
            to="/"
            className="flex items-center gap-3 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <span
              aria-hidden="true"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/30 font-heading text-sm font-bold"
            >
              TM
            </span>
            <span
              aria-hidden="true"
              className="hidden h-6 w-px bg-white/30 sm:block"
            />
            <span className="font-heading text-lg font-bold">
              Tech Mentorship 2026
            </span>
          </Link>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
              {[
                ["About", "/#about"],
                ["Curriculum", "/#curriculum"],
                ["Mentors", "/#mentors"],
                ["FAQ", "/#faq"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="rounded hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="/#signup"
              className="inline-flex items-center gap-2 rounded-full bg-teal-dark px-5 py-2 text-sm font-semibold text-white hover:bg-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Join the Program
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </nav>
      </header>

      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>

      <footer className="bg-navy px-4 py-6 text-center text-sm text-white">
        Tech Mentorship Program 2026
      </footer>
    </>
  );
}