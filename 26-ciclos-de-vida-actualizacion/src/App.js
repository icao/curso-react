import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="App-components">
        {/* getDerivedStateFromProps() method  */}
        {/* Este compomponente se puede ver en el proyecto anterior de ciclos de vida fase de montaje, consultar para mas información */}
        {/* shouldComponentUpdate() method */}
        {/* render() method  */}
        {/* getSnapshotBeforeUpdate() method  */}
        {/* componentDidUpdate() method */}
      </section>
    </div>
  );
}

export default App;
