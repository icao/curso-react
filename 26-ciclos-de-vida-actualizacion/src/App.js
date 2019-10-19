import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Father from "./components/ShouldComponentUpdate";

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
        <Father />
        {/* render() method  */}
        {/* Este componente se puede ver en el proyecto de ciclos de vida fase de montaje */}
        {/* getSnapshotBeforeUpdate() method  */}
        {/* TODO: es el siguiente a implementar */}
        {/* componentDidUpdate() method */}
      </section>
    </div>
  );
}

export default App;
