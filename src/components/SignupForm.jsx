import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { tracks } from "../data/tracks";

const initialValues = {
  name: "",
  email: "",
  track: "",
  level: "",
  agree: false,
};

const levels = ["Beginner", "Intermediate", "Advanced"];


function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Enter your full name.";
  if (!values.email.trim()) {
    errors.email = "Enter your email address.";
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = "Enter a valid email address, like name@example.com.";
  }
  if (!values.track) errors.track = "Choose a track.";
  if (!values.level) errors.level = "Choose your experience level.";
  if (!values.agree) errors.agree = "Please confirm to continue.";
  return errors;
}

const inputClass =
  "mt-1 w-full rounded-md border border-slate bg-white px-3 py-2 text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

function ErrorText({ id, message }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1 text-sm font-medium text-red-700">
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
    setValues((v) => ({ ...v, [name]: type === "checkbox" ? checked : value }));
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
      navigate("/thank-you", { state: { name: values.name } });
    }, 1200);
  } catch {
    setStatus("error");
  }
}

  return (
    <section id="signup" className="scroll-mt-4 bg-ice">
      <div className="mx-auto max-w-xl px-4 py-16">
        <h2 className="font-heading text-3xl font-bold text-navy">
          Join the program
        </h2>
        <p className="mt-3 text-slate">
          Fill in the form to sign up. All fields are required.
        </p>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="mt-8 space-y-6 rounded-lg bg-white p-6"
        >
          <div>
            <label htmlFor="name" className="font-semibold text-navy">
              Full name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              value={values.name}
              onChange={handleChange}
              aria-invalid={errors.name ? "true" : "false"}
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
              value={values.email}
              onChange={handleChange}
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={inputClass}
            />
            <ErrorText id="email-error" message={errors.email} />
          </div>

          <div>
            <label htmlFor="track" className="font-semibold text-navy">
              Track
            </label>
            <select
              id="track"
              name="track"
              value={values.track}
              onChange={handleChange}
              aria-invalid={errors.track ? "true" : "false"}
              aria-describedby={errors.track ? "track-error" : undefined}
              className={inputClass}
            >
              <option value="">Choose a track</option>
              {tracks.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            <ErrorText id="track-error" message={errors.track} />
          </div>

          <fieldset
            aria-describedby={errors.level ? "level-error" : undefined}
          >
            <legend className="font-semibold text-navy">
              Experience level
            </legend>
            <div className="mt-2 space-y-2">
              {levels.map((lvl, i) => (
                <label key={lvl} className="flex items-center gap-2 text-slate">
                  <input
                    id={i === 0 ? "level" : undefined}
                    type="radio"
                    name="level"
                    value={lvl}
                    checked={values.level === lvl}
                    onChange={handleChange}
                    className="h-4 w-4 accent-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                  />
                  {lvl}
                </label>
              ))}
            </div>
            <ErrorText id="level-error" message={errors.level} />
          </fieldset>

          <div>
            <label className="flex items-start gap-2 text-slate">
              <input
                id="agree"
                name="agree"
                type="checkbox"
                checked={values.agree}
                onChange={handleChange}
                aria-invalid={errors.agree ? "true" : "false"}
                aria-describedby={errors.agree ? "agree-error" : undefined}
                className="mt-1 h-4 w-4 accent-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              />
              I confirm that the details above are correct.
            </label>
            <ErrorText id="agree-error" message={errors.agree} />
          </div>

            <button
            type="submit"
            disabled={status === "submitting" || status === "success"}
            className="rounded-md bg-brand px-6 py-3 font-semibold text-white hover:bg-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:cursor-not-allowed disabled:opacity-70"
            >
            {status === "submitting" ? "Signing up..." : "Sign up"}
            </button>

            <div aria-live="polite">
            {status === "success" && (
                <p className="rounded-md bg-green-50 p-3 font-medium text-green-800">
                You are signed up. Taking you to the next page...
                </p>
            )}
            {status === "error" && (
                <p
                role="alert"
                className="rounded-md bg-red-50 p-3 font-medium text-red-800"
                >
                Something went wrong and your sign-up was not sent. Please try again.
                </p>
            )}
            </div>
        </form>
      </div>
    </section>
  );
}