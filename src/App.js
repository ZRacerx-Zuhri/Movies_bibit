import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MovieDetails from "./Container/DetailsMovie";
import Home from "./Container/Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/MovieDetails">
          <MovieDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
