# Tech Mentorship Program 2026: Landing Page

**Chosen option:** C (Landing page for a mentorship or community program)

A responsive landing page for the Tech Mentorship Program 2026. Visitors can read about the program, browse the curriculum week by week, see mentors, read the FAQ and sign up through an accessible form. It is built with React, React Router and Tailwind CSS. It is a frontend-only project, so the sign-up uses a mock submit.

- **Live site:** https://tech-mentorship-landing.vercel.app/
- **GitHub:** https://github.com/apankadavid/tech-mentorship-landing

## Features
- Sections: Hero, About, Curriculum, Mentors, Testimonials, FAQ and Sign-up
- Curriculum cards built from a data array and passed to components with props
- Dynamic route `/curriculum/:weekId`, a `/thank-you` route and a 404 page
- Accessible FAQ accordion that works fully with the keyboard
- Sign-up form with controlled inputs (text, select, radio group, checkbox), validation and four states: idle, submitting, success and error
- Skip link, visible focus outlines and a layout that works from 375px up

## Tech stack
React (Vite), React Router, Tailwind CSS v3, deployed on Vercel.
Theme colours and fonts are defined in `tailwind.config.js`.

## Setup
```bash
git clone https://github.com/apankadavid/tech-mentorship-landing.git
cd tech-mentorship-landing
npm install
npm run dev      # run locally
npm run build    # production build
```

## Screenshots
| Mobile (375px) | Desktop (1280px) |
|---|---|
| ![Mobile](screenshots/home-mobile-375.png) | ![Desktop](screenshots/home-desktop-1280.png) |

## Lighthouse scores (live site)

| | Performance | Accessibility | Best Practices | SEO |
|---|---|---|---|---|
| Mobile before | 90 | 100 | 100 | 82 |
| Mobile after | 95 | 100 | 100 | 100 |
| Desktop before | 93 | 100 | 100 | 82 |
| Desktop after | 94 | 100 | 100 | 100 |

**Issues fixed**
- SEO: added a meta description and a clear page title
- SEO: added `public/robots.txt` (the route rewrite was returning the home page for it)
- Performance: lazy-loaded the week detail and thank-you routes so they load only when visited

**Accessibility features built in from the start:** skip link, visible focus styles, labelled form fields with error messages linked to inputs, keyboard-operable accordion with `aria-expanded`, and text colours chosen to meet WCAG AA contrast.

## Known limitations
- The sign-up form is a mock: nothing is stored or emailed. An email ending in `@fail.test` triggers the error state for testing.
- Mentor and testimonial content is placeholder text.
- Curriculum weeks are sample content **[change this if you replaced them with your real syllabus]**.

## What I would build next
- Connect the form to a real backend or form service
- Add real mentor profiles with photos and real testimonials
- Add a dark mode toggle and more tests for the form