import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home/home";
import Randomiz from "./components/minis/randomiz";

export default (
  <Switch>
    {<Route exact path="/" component={Home} />}
    {<Route exact path="/mini" component={Randomiz} />}
  </Switch>
);
