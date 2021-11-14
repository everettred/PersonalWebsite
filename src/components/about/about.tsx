import React, { useState, useEffect } from "react";
import Header from "../header/header.component";
import "./about.scss";

const About: React.FC = () => {
  const [quoteDisplayed, setQuote] = useState({
    quote:
      "“Happiness is not in the mere possession of money; it lies in the joy of achievement, in the thrill of creative effort.”",
    author: "Franklin D. Roosevelt",
  });
  //code to be worked with later
  // function quoteChanger() {}
  // useEffect(() => {
  //   quoteChanger();
  // }, [quoteDisplayed]);

  return (
    <div>
      <section id="header-container">
        <Header name={"about"} />
      </section>
      <section className="about-background">
        <h1>
          {quoteDisplayed.quote}
          <span>{quoteDisplayed.author}</span>
        </h1>
      </section>
    </div>
  );
};
export default About;
