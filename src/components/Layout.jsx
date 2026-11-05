import { useEffect, useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  ["About", "/#about"],
  ["Curriculum", "/#curriculum"],
  ["Mentors", "/#mentors"],
  ["FAQ", "/#faq"],
];

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

export default function Layout() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);

  function closeMenu() {
    setOpen(false);
  }

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape" && open) {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="bg-ice">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-40 px-4 pt-4 sm:px-6">
        <nav
          aria-label="Main"
          className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-3 lg:gap-x-6 rounded-2xl border border-navy/10 bg-white/85 px-4 py-3 text-navy shadow-sm backdrop-blur-md lg:rounded-full lg:px-6"
        >
          <Link
            to="/"
            onClick={closeMenu}
            className={`flex items-center gap-3 rounded-lg ${focusRing}`}
          >
            <span
              aria-hidden="true"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-navy/30 font-heading text-sm font-bold"
            >
              TM
            </span>
            <span
              aria-hidden="true"
              className="hidden h-6 w-px bg-navy/20 sm:block"
            />
            <span className="font-heading text-base font-bold sm:text-lg">
              Tech Mentorship 2026
            </span>
          </Link>

          <button
            ref={buttonRef}
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label="Main menu"
            className={`flex h-11 w-11 items-center justify-center rounded-lg border border-navy/20 lg:hidden ${focusRing}`}
          >
            {open ? (
              <X aria-hidden="true" className="h-6 w-6" />
            ) : (
              <Menu aria-hidden="true" className="h-6 w-6" />
            )}
          </button>

          <div
            id="site-menu"
            className={`${
              open ? "flex" : "hidden"
            } mt-3 w-full flex-col gap-4 border-t border-navy/10 pt-3 lg:mt-0 lg:flex lg:w-auto lg:flex-row lg:items-center lg:gap-6 lg:border-0 lg:pt-0`}
          >
            <ul className="flex flex-col text-base font-semibold lg:flex-row lg:gap-5 lg:text-sm">
              {links.map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={closeMenu}
                    className={`block rounded py-3 hover:underline lg:py-0 ${focusRing}`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="/#signup"
              onClick={closeMenu}
              className={`inline-flex items-center justify-center gap-2 rounded-full bg-teal-dark px-5 py-3 text-sm font-semibold text-white hover:bg-brand lg:py-2 ${focusRing}`}
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
    </div>
  );
}