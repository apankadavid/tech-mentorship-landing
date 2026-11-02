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

      <header className="bg-navy text-white">
        <nav
          aria-label="Main"
          className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <Link
            to="/"
            className="font-heading text-lg font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Tech Mentorship 2026
          </Link>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
            {[
              ["About", "/#about"],
              ["Curriculum", "/#curriculum"],
              ["Mentors", "/#mentors"],
              ["FAQ", "/#faq"],
              ["Join", "/#signup"],
            ].map(([label, href]) => (
              <li key={label}>
                <a
                  href={href}
                  className="hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
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