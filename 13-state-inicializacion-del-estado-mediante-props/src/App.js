import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListPlayers from './components/ListPlayers'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="App-components">
        <ListPlayers />
      </section>
    </div>
  );
}

export default App;
