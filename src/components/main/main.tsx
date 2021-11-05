import React, { useState } from "react";
import Intro from "../intro/intro";
import "../intro/intro.scss";

const Main: React.FC = (props) => {
  return (
    <div className="home-body">
      <section className="home-sect1">
        <section className="intro-home">
          <section>
            <h1>Hello I'm Kelsey Dickerman.</h1>
            <Intro />
          </section>
          <img
            src="https://res.cloudinary.com/garagesellers/image/upload/v1634090474/profile_lojo9o.jpg"
            alt="photo of me"
          />
        </section>
      </section>
    </div>
  );
};
export default Main;
