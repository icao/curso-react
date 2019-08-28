import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PropFunction from "./components/PropFunction";

function App() {
  const series = [5, 2, 6, 8, 10, 4];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App-components">
        <PropFunction
          title="Soy un componente recibiendo una función como propiedad 😮"
          arreglo={series}
          // Podemos crear una función que se pueda usar en el componente
          potenciaX={element => Math.pow(element, 2)}
        />
      </div>
    </div>
  );
}

export default App;
