import React, { useState } from "react";
import Intro from "../intro/intro";
import "../intro/intro.scss";

const Main: React.FC = (props) => {
  return (
    <div className="home-body">
      <section className="intro-home">
        <h1>Kelsey Dickerman</h1>
        <Intro />
      </section>
    </div>
  );
};
export default Main;
