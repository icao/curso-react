import React from 'react';
import logo from './logo.svg';
import './App.css';
import EventoOnClickComponent from "./components/EventoOnClickComponent";
import EventoSinteticoComponent from "./components/EventoSinteticoComponent";
import EventoOtrosComponent from './components/EventoOtrosComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="App-components">
        <EventoOnClickComponent />
        <EventoSinteticoComponent />
        <EventoOtrosComponent />
      </section>
    </div>
  );
}

export default App;
