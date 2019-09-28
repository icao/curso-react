import React from 'react';
import logo from './logo.svg';
import './App.css';
import IntroComponentesControlados from './components/IntroComponentesControlados';
import ComponentesControlados from './components/ComponentesControlados';
import TextareaComponent from './components/TextareaComponent';
import SelectComponent from './components/SelectComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="App-components">
        <h1>Componntes Controlados</h1>
        <IntroComponentesControlados />
        <ComponentesControlados />
        <TextareaComponent />
        <SelectComponent />
      </section>
    </div>
  );
}

export default App;
