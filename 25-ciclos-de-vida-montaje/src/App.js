import React from 'react';
import logo from './logo.svg';
import './App.css';
import Constructor from "./components/Constructor";
import UNSAFEComponentWillMount from "./components/UNSAFEComponentWillMount";
import Father from "./components/GetDerivedStateFromProps";
import Render from "./components/Render";
import ComponentDidMount from "./components/ComponentDidMount";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="App-components">
        <h1>Fase de Montaje</h1>
        {/* Constructor Method */}
        <Constructor />
        {/* UNSAFE_componentWillMount */}
        <UNSAFEComponentWillMount />
        {/* GetDerivedStateFromProps Method */}
        <Father />
        {/* Render method */}
        <Render />
        {/* ComponentDidMount method */}
        <ComponentDidMount />
      </section>
    </div>
  );
}

export default App;
