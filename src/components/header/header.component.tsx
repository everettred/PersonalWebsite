import React from "react";
import "./header.styles.scss";

const Header: React.FC<{ name: string }> = ({ name }) => {
  return (
    <section>
      <section className="name-container">
        <h1>{name}</h1>
      </section>
    </section>
  );
};

export default Header;
