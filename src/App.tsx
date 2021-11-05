import React, { useRef, forwardRef } from "react";
import "./App.css";
import NavBar from "./components/nav/NavBar";
import Main from "./components/main/main";
import About from "./components/about/about";

function App() {
  const homeRef = useRef<null | HTMLDivElement>(null);
  const aboutRef = useRef<null | HTMLDivElement>(null);
  const projectsRef = useRef<null | HTMLDivElement>(null);
  const contactRef = useRef<null | HTMLDivElement>(null);

  // function handleScrollClickHome() {
  //   homeRef?.current?.scrollIntoView({ behavior: "smooth" });
  // }
  function handleScrollClickAbout() {
    aboutRef?.current?.scrollIntoView({ behavior: "smooth" });
  }
  function handleScrollClickProjects() {
    projectsRef?.current?.scrollIntoView({ behavior: "smooth" });
  }
  function handleScrollClickContact() {
    contactRef?.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section id="main">
      <NavBar
        handleScrollClickAbout={handleScrollClickAbout}
        handleScrollClickProjects={handleScrollClickProjects}
        handleScrollClickContact={handleScrollClickContact}
      />
      <section ref={homeRef}>
        <Main />
      </section>
      <section ref={aboutRef}>
        <About />
      </section>
      <section ref={projectsRef}>
        <Main />
      </section>
      <section ref={contactRef}>
        <Main />
      </section>
    </section>
  );
}

export default App;
