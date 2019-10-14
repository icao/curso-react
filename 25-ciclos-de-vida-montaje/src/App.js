import React from 'react';
import logo from './logo.svg';
import './App.css';
import Constructor from "./components/Constructor";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="App-components">
        <h1>Fase de Montaje</h1>
        <Constructor/>
      </section>
    </div>
  );
}

export default App;
