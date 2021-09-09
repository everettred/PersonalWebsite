import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

const NavBar: React.FC = () => {
  const [menu, setMenu] = useState();

  return (
    <div id="nav-background">
      <section className="nav-links">
        <Link to="/home" className="nav-link">
          <img />
          <h1>home</h1>
        </Link>
        <Link to="/about" className="nav-link">
          <img />
          <h1>about</h1>
        </Link>
        <Link to="/projects" className="nav-link">
          <img />
          <h1>projects</h1>
        </Link>
        <Link to="/stacks" className="nav-link">
          <img />
          <h1>stacks</h1>
        </Link>
        <Link to="/contact" className="nav-link">
          <img />
          <h1>contact</h1>
        </Link>
      </section>
    </div>
  );
};

export default NavBar;
