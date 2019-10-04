import React from 'react';
import logo from './logo.svg';
import './App.css';
import CiclosDeVida from './components/CiclosDeVida';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="App-components">
        <CiclosDeVida />
      </section>
    </div>
  );
}

export default App;
