import Hero from "../components/Hero";
import About from "../components/About";
import Curriculum from "../components/Curriculum";
import Mentors from "../components/Mentors";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import SignupForm from "../components/SignupForm";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Curriculum />
      <Mentors />
      <Testimonials />
      <Faq />
      <SignupForm />
    </>
  );
}