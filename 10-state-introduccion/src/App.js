import React from 'react';
import logo from './logo.svg';
import './App.css';
import StateConstructorComponent from "./components/StateConstructorComponent";
import StateComponent from "./components/StateComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="App-components">
        <StateConstructorComponent />
        <StateComponent />
      </section>
    </div>
  );
}

export default App;
