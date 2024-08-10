import Hero from "./components/hero";
import About from "./components/about/index";
import { MainProjects } from "./components/main-projects";
import OtherProjects from "./components/other-projects";
import Contact from "./components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <MainProjects />
      <OtherProjects />
      <Contact />
    </>
  );
}
