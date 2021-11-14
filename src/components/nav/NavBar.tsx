import React from "react";
import Elogo from "../../assets/Elogo.svg";
import "./NavBar.scss";

interface Props {
  handleScrollClickHome: () => void;
  handleScrollClickAbout: () => void;
  handleScrollClickProjects: () => void;
  handleScrollClickContact: () => void;
}

const NavBar: React.FC<Props> = (props) => {
  // const [menu, setMenu] = useState();

  return (
    <section id="idk">
      <section id="nav-background">
        <h1 id="logo"></h1>
        <section className="nav-links">
          <section onClick={props.handleScrollClickHome} className="nav-link">
            <h1>home</h1>
          </section>
          <section onClick={props.handleScrollClickAbout} className="nav-link">
            <h1>about</h1>
          </section>
          <section
            onClick={props.handleScrollClickProjects}
            className="nav-link"
          >
            <h1>projects</h1>
          </section>
          <section
            onClick={props.handleScrollClickProjects}
            className="nav-link"
          >
            <h1>contact</h1>
          </section>
        </section>
      </section>
    </section>
  );
};

export default NavBar;
