import React from "react";
import "./NavBar.scss";

interface Props {
  handleScrollClickAbout: () => void;
  handleScrollClickProjects: () => void;
  handleScrollClickContact: () => void;
}

const NavBar: React.FC<Props> = (props) => {
  // const [menu, setMenu] = useState();

  return (
    <div id="nav-background">
      <section className="nav-links">
        <section className="nav-link">
          <h1>home</h1>
        </section>
        <section onClick={props.handleScrollClickAbout} className="nav-link">
          <h1>about</h1>
        </section>
        <section onClick={props.handleScrollClickProjects} className="nav-link">
          <h1>projects</h1>
        </section>
        <section onClick={props.handleScrollClickProjects} className="nav-link">
          <h1>contact</h1>
        </section>
      </section>
    </div>
  );
};

export default NavBar;
