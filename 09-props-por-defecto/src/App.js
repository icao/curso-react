import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PropsDefault from "./components/PropsDefault";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="App-components">
        {/* <PropsDefault message="Mensaje pasado por Prop 😁" /> */}
        <PropsDefault />
      </section>
    </div>
  );
}

export default App;
