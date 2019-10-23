import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Father from './components/ComponentWillUnmount'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="App-components">
        {/* Enrealidad llama al componente Father que contiene a
        ComponentWillUnmount */}
        <Father />
      </section>
    </div>
  );
}

export default App;
