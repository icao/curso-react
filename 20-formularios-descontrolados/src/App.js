import React from "react";
import logo from "./logo.svg";
import "./App.css";
import FormsReactComponents from './components/FormsReactComponents';
import FormReactRefsComponent from './components/FormReactRefsComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="App-componentd">
        <h2>Formularios 'Descontrolados'</h2>
        <FormsReactComponents />
        <hr />
        <FormReactRefsComponent />
      </section>
    </div>
  );
}

export default App;
