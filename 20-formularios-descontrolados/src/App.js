import React from "react";
import logo from "./logo.svg";
import "./App.css";
import FormsReactComponents from './components/FormsReactComponents'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="App-componentd">
        <h2>Formularios 'Descontrolados'</h2>
        <FormsReactComponents />
      </section>
    </div>
  );
}

export default App;
