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
          className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4"
        >
          <Link to="/" className="font-heading text-lg font-bold">
            Tech Mentorship 2026
          </Link>
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