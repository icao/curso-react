import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SetStateComponent from "./components/SetStateComponent";
import SetStateAsynchronous from "./components/SetStateAsynchronous";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="App-components">
        {/* Qué es setState() */}
        <SetStateComponent />
        {/* Ejemplo con setState() y asincronía */}
        <SetStateAsynchronous />
      </section>
    </div>
  );
}

export default App;
