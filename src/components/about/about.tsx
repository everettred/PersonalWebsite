import React, { useState, useEffect } from "react";
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
      <section className="about-background">
        <h1>
          {quoteDisplayed.quote}
          <span>{quoteDisplayed.author}</span>
        </h1>
        <section className="logo-container">
          <section>
            <img
              className="logo-size-4 logo-correction-1"
              src="https://res.cloudinary.com/garagesellers/image/upload/v1635816568/html5-with-wordmark-color_yn4eem.svg"
              alt="HTML5"
            />
          </section>
          <section>
            <img
              className="logo-size-1 logo-correction-1"
              src="https://res.cloudinary.com/garagesellers/image/upload/v1635816570/CSS3_logo_and_wordmark_hdro5n.svg"
              alt="CSS3"
            />
          </section>

          <section>
            <img
              className="logo-size-2"
              src="https://res.cloudinary.com/garagesellers/image/upload/v1635816570/sass-seeklogo.com_macago.svg"
              alt="Sass"
            />
          </section>

          <section>
            <img
              className="logo-size-1"
              src="https://res.cloudinary.com/garagesellers/image/upload/v1635816568/javascript-js-seeklogo.com_bptbkb.svg"
              alt="Javascript"
            />
          </section>

          <section>
            <img
              className="logo-size-1"
              src="https://res.cloudinary.com/garagesellers/image/upload/v1635816570/typescript-seeklogo.com_zifraa.svg"
              alt="Typescript"
            />
          </section>

          <section>
            <img
              className="logo-size-1"
              src="https://res.cloudinary.com/garagesellers/image/upload/v1635816570/react-seeklogo.com_syoqyo.svg"
              alt="React"
            />
          </section>

          <section>
            <img
              className="logo-size-2"
              src="https://res.cloudinary.com/garagesellers/image/upload/v1635816568/node-node-js-seeklogo.com_l5tmpb.svg"
              alt="Node.JS"
            />
          </section>

          <section>
            <img
              className="logo-size-1 logo-correction-2"
              src="https://res.cloudinary.com/garagesellers/image/upload/v1635816568/postgresql-seeklogo.com_hpfbr0.svg"
              alt="PostgreSQL"
            />
          </section>

          <section>
            <img
              className="logo-size-2"
              src="https://res.cloudinary.com/garagesellers/image/upload/v1635816568/git-seeklogo.com_lfxgzm.svg"
              alt="Git"
            />
          </section>
          <section>
            <img
              className="logo-size-3"
              src="https://res.cloudinary.com/garagesellers/image/upload/v1635816568/mongodb-seeklogo.com_agnfio.svg"
              alt="MongoDB"
            />
          </section>
        </section>
      </section>
    </div>
  );
};
export default About;
