import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="container">
        <Home />
        <About />
      </div>
    </div>
  );
}

export default App;
