import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GraduationCap, UserCheck, Laptop } from "lucide-react";
import { tracks } from "../data/tracks";

const initialValues = {
  name: "",
  email: "",
  track: "",
  level: "",
  agree: false,
};

const levels = ["Beginner", "Intermediate", "Advanced"];

const highlights = [
  {
    icon: GraduationCap,
    title: "Six learning tracks",
    text: "Explore a technology area that interests you.",
  },
  {
    icon: UserCheck,
    title: "Mentor guidance",
    text: "Learn with direction and constructive feedback.",
  },
  {
    icon: Laptop,
    title: "Practical projects",
    text: "Put your knowledge into practice.",
  },
];

function validate(values) {
  const errors = {};

  if (!values.name.trim()) errors.name = "Enter your full name.";

  if (!values.email.trim()) {
    errors.email = "Enter your email address.";
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.track) errors.track = "Choose a track.";
  if (!values.level) errors.level = "Choose your experience level.";
  if (!values.agree) errors.agree = "Please confirm to continue.";

  return errors;
}

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

const inputClass = `mt-2 w-full rounded-lg border border-slate/70 bg-white px-4 py-3 text-navy ${focusRing}`;

function ErrorText({ id, message }) {
  if (!message) return null;

  return (
    <p id={id} className="mt-2 text-sm font-medium text-red-700">
      {message}
    </p>
  );
}

function mockSubmit(values) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (values.email.endsWith("@fail.test")) {
        reject(new Error("Mock server error"));
      } else {
        resolve({ ok: true });
      }
    }, 1000);
  });
}

export default function SignupForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, type, value, checked } = e.target;

    setValues((v) => ({
      ...v,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const found = validate(values);
    setErrors(found);

    const firstInvalid = Object.keys(found)[0];

    if (firstInvalid) {
      document.getElementById(firstInvalid)?.focus();
      return;
    }

    setStatus("submitting");

    try {
      await mockSubmit(values);
      setStatus("success");

      setTimeout(() => {
        navigate("/thank-you", {
          state: { name: values.name },
        });
      }, 1200);
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="signup" className="scroll-mt-28 bg-ice">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:py-24">
        <div className="overflow-hidden rounded-2xl border border-navy/10 bg-white lg:grid lg:grid-cols-2">
          {/* Program information */}
          <div className="flex flex-col justify-between bg-navy p-8 text-white sm:p-10 lg:p-12">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-teal-300">
                Tech Mentorship Program 2026
              </p>

              <h2 className="mt-8 font-heading text-3xl font-bold leading-tight sm:text-4xl">
                Your next chapter in tech starts here.
              </h2>

              <p className="mt-5 leading-7 text-white/85">
                Take the next step towards developing practical skills,
                building meaningful projects and growing with guidance.
              </p>

              <ul className="mt-10 space-y-7">
                {highlights.map(({ icon: Icon, title, text }) => (
                  <li key={title} className="flex gap-4">
                    <span
                      aria-hidden="true"
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-teal-300"
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-semibold">{title}</p>
                      <p className="mt-1 text-sm leading-6 text-white/80">
                        {text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-12 border-t border-white/10 pt-6 text-sm text-white/80">
              Learn. Build. Grow.
            </p>
          </div>

          {/* Registration form */}
          <div className="p-8 sm:p-10 lg:p-12">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-teal-dark">
                Get started
              </p>

              <h3 className="mt-3 font-heading text-2xl font-bold text-navy sm:text-3xl">
                Join the program
              </h3>

              <p className="mt-3 text-slate">
                Complete the details below. All fields are required.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-6">
              <div>
                <label htmlFor="name" className="font-semibold text-navy">
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Enter your full name"
                  value={values.name}
                  onChange={handleChange}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={inputClass}
                />
                <ErrorText id="name-error" message={errors.name} />
              </div>

              <div>
                <label htmlFor="email" className="font-semibold text-navy">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={values.email}
                  onChange={handleChange}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={inputClass}
                />
                <ErrorText id="email-error" message={errors.email} />
              </div>

              <div>
                <label htmlFor="track" className="font-semibold text-navy">
                  Preferred learning track
                </label>
                <select
                  id="track"
                  name="track"
                  value={values.track}
                  onChange={handleChange}
                  aria-invalid={!!errors.track}
                  aria-describedby={errors.track ? "track-error" : undefined}
                  className={inputClass}
                >
                  <option value="">Choose a track</option>
                  {tracks.map((track) => (
                    <option key={track} value={track}>
                      {track}
                    </option>
                  ))}
                </select>
                <ErrorText id="track-error" message={errors.track} />
              </div>

              <fieldset
                aria-describedby={errors.level ? "level-error" : undefined}
              >
                <legend className="font-semibold text-navy">
                  Your experience level
                </legend>

                <div className="mt-3 grid gap-3 sm:grid-cols-3">
                  {levels.map((level, index) => (
                    <label
                      key={level}
                      className="flex items-center gap-2 rounded-lg border border-navy/20 px-3 py-3 text-sm text-slate hover:border-brand"
                    >
                      <input
                        id={index === 0 ? "level" : undefined}
                        type="radio"
                        name="level"
                        value={level}
                        checked={values.level === level}
                        onChange={handleChange}
                        className={`h-4 w-4 accent-brand ${focusRing}`}
                      />
                      {level}
                    </label>
                  ))}
                </div>

                <ErrorText id="level-error" message={errors.level} />
              </fieldset>

              <div>
                <label className="flex items-start gap-3 text-slate">
                  <input
                    id="agree"
                    name="agree"
                    type="checkbox"
                    checked={values.agree}
                    onChange={handleChange}
                    aria-invalid={!!errors.agree}
                    aria-describedby={errors.agree ? "agree-error" : undefined}
                    className={`mt-1 h-4 w-4 accent-brand ${focusRing}`}
                  />
                  I confirm that the details above are correct.
                </label>

                <ErrorText id="agree-error" message={errors.agree} />
              </div>

              <button
                type="submit"
                disabled={status === "submitting" || status === "success"}
                className={`w-full rounded-lg bg-brand px-6 py-4 font-semibold text-white hover:bg-navy disabled:cursor-not-allowed disabled:opacity-70 ${focusRing}`}
              >
                {status === "submitting"
                  ? "Processing..."
                  : status === "success"
                    ? "Completed"
                    : "Complete registration"}
              </button>

              <div aria-live="polite">
                {status === "success" && (
                  <p className="rounded-lg bg-green-50 p-3 text-sm font-medium text-green-800">
                    You are signed up. Taking you to the next page...
                  </p>
                )}
                {status === "error" && (
                  <p
                    role="alert"
                    className="rounded-lg bg-red-50 p-3 text-sm font-medium text-red-800"
                  >
                    Something went wrong and your sign-up was not sent. Please
                    try again.
                  </p>
                )}
              </div>

              <p className="text-sm text-slate">
                Demonstration form: submissions are not stored or sent to
                program organisers.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}