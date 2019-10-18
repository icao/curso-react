import React from "react";
import logo from "./logo.svg";
import "./App.css";
import FetchAPI from './components/FetchAPI'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="App-components">
        <FetchAPI />
      </section>
    </div>
  );
}

export default App;
