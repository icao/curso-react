import React from "react";
import logo from "../logo.svg";
import "../App.css";
import PropsClass from './PropsClass';
import PropsFunction from './PropsFunction'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="App-components">
        {/* Class Component Con Propiedades */}
        <PropsClass />
        {/* Functional Component Con Propiedades */}
        <PropsFunction />
      </section>
    </div>
  );
}

export default App;
