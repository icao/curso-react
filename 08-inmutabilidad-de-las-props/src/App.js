import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ImmutableComponent from "./components/ImmutableComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="App-components">
        <ImmutableComponent
          title="Immutabilidad de las Props"
          number={500}
        />
      </section>
    </div>
  );
}

export default App;
