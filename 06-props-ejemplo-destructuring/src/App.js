import React from 'react';
import logo from './logo.svg';
import './App.css';
import RightComponent from './components/RightComponent';
import LeftComponent from './components/LeftComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="App-components">
        <LeftComponent />
        <RightComponent />
      </section>
    </div>
  );
}

export default App;
