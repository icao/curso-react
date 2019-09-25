import React from "react";
import logo from "./logo.svg";
import "./App.css";
import FormsReact from './components/FormsReact';
import FormReactRefs160 from './components/FormReactRefs160';
import FormEvents from "./components/FormEvents";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="App-componentd">
        <h2>Formularios 'Descontrolados'</h2>
        <FormsReact />
        <hr />
        <FormReactRefs160 />
        <hr />
        <FormEvents />
      </section>
    </div>
  );
}

export default App;
