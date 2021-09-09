import React from "react";
import "./App.css";
import NavBar from "./components/nav/NavBar";
import Routes from "./routes";

function App() {
  return (
    <section id="main">
      <NavBar />
      <section>{Routes}</section>
    </section>
  );
}

export default App;
