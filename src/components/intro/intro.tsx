import React from "react";
import Typewriter from "typewriter-effect";
import "./intro.scss";

const Intro: React.FC = (props) => {
  return (
    <div className="typewriter">
      <Typewriter
        options={{
          wrapperClassName: "type-content",
          delay: 50,
          loop: true,
        }}
        onInit={(typewriter) => {
          typewriter
            .pauseFor(1000)
            .typeString("Full stack Web Developer.")
            .pauseFor(1000)
            .deleteAll()
            .typeString(`Welcome to "Everett Software Engineering and Design"`)
            .pauseFor(1000)
            .start();
        }}
      />
    </div>
  );
};
export default Intro;
