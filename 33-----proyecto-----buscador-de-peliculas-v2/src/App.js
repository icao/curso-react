import React, { Component } from "react";
import "bulma/css/bulma.css";
import "./App.css";
import { Home } from "./pages/Home";
import { DetailMovie } from "./pages/DetailMovie";

class App extends Component {
  render() {
    return <Home />;
  }
}

export default App;
