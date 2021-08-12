import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/Home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />

      <Route exact path="/about">
        <div>Bye</div>
      </Route>
      <Route exact path="/dashboard/">
        <div>Dashboard</div>
      </Route>

      <Route path="/dashboard/:id">
        <div>lala</div>
      </Route>
      <Route path="*">
        <div>No match</div>
      </Route>
    </Switch>
  );
};

export default Routes;
