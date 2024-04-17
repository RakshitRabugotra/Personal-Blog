// Internal Dependencies
import About from "@/components/About/About";
import Connect from "@/components/Connect/Connect";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";

export default function Index() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Connect />
    </>
  );
}
