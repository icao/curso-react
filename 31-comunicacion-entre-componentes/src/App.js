import React from 'react';
import logo from './logo.svg';
import './App.css';
import ParentOne from './components/ParentOne'
import ParentTwo from "./components/ParentTwo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="App-components">
        <h1>Comunicación entre componentes</h1>
        <br />
        {/* _____________________________________________ */}
        <h2>👨Padre ➡ 👦Hijo</h2>
        <ParentOne />
        <br />
        <br />
        {/* _____________________________________________ */}
        <h2>👦Hijo ➡ 👨Padre</h2>
        <ParentTwo />
      </section>
    </div>
  );
}

export default App;
