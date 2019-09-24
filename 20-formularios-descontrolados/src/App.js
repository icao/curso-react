import React from "react";
import logo from "./logo.svg";
import "./App.css";
import FormsReactComponents from './components/FormsReactComponents';
import FormReactRefsComponent from './components/FormReactRefsComponent';
import FormEventsComponent from "./components/FormEventsComponent";

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
        <hr />
        <FormEventsComponent />
      </section>
    </div>
  );
}

export default App;
