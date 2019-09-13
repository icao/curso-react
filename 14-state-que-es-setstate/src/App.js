import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SetStateComponent from "./components/SetStateComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="App-components">
        {/* Qué es setState() */}
        <SetStateComponent />
        {/* Ejemplo con setState y asincronía */}
        
      </section>
    </div>
  );
}

export default App;
