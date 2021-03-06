import React, { Component } from "react";
import "bulma/css/bulma.css";
import "./App.css";
import { Home } from "./pages/Home";
import { DetailMovie } from "./pages/DetailMovie";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/detail/:id" exact component={DetailMovie} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
