import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Projects from "./components/Projects";

export default function App() {
  const [activeProjectId, setActiveProjectId] = useState(null);

  return (
    <>
      <a className="skip-link" href="#maincontent">
        Naar inhoud
      </a>
      <Nav />
      <Hero />
      <About />
      <Projects
        activeId={activeProjectId}
        onOpen={setActiveProjectId}
        onClose={() => setActiveProjectId(null)}
      />
      <Contact />
    </>
  );
}
