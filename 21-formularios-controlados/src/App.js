import React from 'react';
import logo from './logo.svg';
import './App.css';
import IntroComponentesControlados from './components/IntroComponentesControlados';
import ComponentesControlados from './components/ComponentesControlados';
import TextareaComponent from './components/TextareaComponent';
import SelectComponent from './components/SelectComponent';
import MultipleInputsComponent from "./components/MultipleInputsComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="App-components">
        <h1>Componntes Controlados</h1>
        {/* Introducción a los componentes controlados */}
        <IntroComponentesControlados />
        {/* Ejemplo 2 de componentes controlados */}
        <ComponentesControlados />
        {/* Ejemplo de comportamiento de textarea */}
        <TextareaComponent />
        {/* Ejemplo de comportamiento de select */}
        <SelectComponent />
        {/* Ejemplo de comportamiento de multiples selects */}
        <MultipleInputsComponent  />
      </section>
    </div>
  );
}

export default App;
