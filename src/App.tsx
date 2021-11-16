import React, { useRef, forwardRef } from "react";
import "./App.css";
import NavBar from "./components/nav/NavBar";
import Main from "./components/main/main";
import About from "./components/about/about";
import PlaceHolder from "./components/placeholder/placeholder";

function App() {
  const homeRef = useRef<null | HTMLDivElement>(null);
  const aboutRef = useRef<null | HTMLDivElement>(null);
  const projectsRef = useRef<null | HTMLDivElement>(null);
  //write a switch case that swaps betweens these functions
  //the switchhas to take in the reference

  function handleScrollClickHome() {
    homeRef?.current?.scrollIntoView({ behavior: "smooth" });
  }
  function handleScrollClickAbout() {
    aboutRef?.current?.scrollIntoView({ behavior: "smooth" });
  }
  function handleScrollClickProjects() {
    projectsRef?.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section id="main">
      <section ref={homeRef}>
        <NavBar
          handleScrollClickHome={handleScrollClickHome}
          handleScrollClickAbout={handleScrollClickAbout}
          handleScrollClickProjects={handleScrollClickProjects}
        />
      </section>

      <section className="main-child">
        <Main />
      </section>

      <section className="main-child" ref={aboutRef}>
        <About />
      </section>

      <section className="main-child" ref={projectsRef}>
        <PlaceHolder />
      </section>

      {/* <section ref={contactRef}>
        <Main />
      </section> */}
    </section>
  );
}

export default App;
