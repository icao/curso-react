import React from 'react';
import logo from './logo.svg';
import './App.css';
import IntroComponentesControlados from './components/IntroComponentesControlados'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="App-components">
        <h1>Componentes Controlados</h1>
        <IntroComponentesControlados />
      </section>
    </div>
  );
}

export default App;
