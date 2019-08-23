import React from "react";
import logo from "../logo.svg";
import "../App.css";
import PropsClass from "./PropsClass";
import PropsFunction from "./PropsFunction";

function App() {
  const valores = {
    cadena: "Soy un String",
    numero: 45,
    arreglo: [15, 5, "Hola", 9, "Noritza"],
    objeto: {
      tarea: "Terminar sección de props",
      prioridad: "Urgente",
      categoria: 4
    },
    evaluado: true
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="App-components">
        {/* Class Component Con Propiedades */}
        <PropsClass
          cadena={valores.cadena}
          cadenaOtro={valores.cadena}
          numero={valores.numero}
          numeroOtro={valores.numero}
          arreglo={valores.arreglo}
          arregloOtro={valores.arreglo}
          objeto={valores.objeto}
          objetoOtro={valores.objeto}
          boleano={valores.evaluado}
          boleanoOtro={valores.evaluado}
        />
        {/* Functional Component Con Propiedades */}
        <PropsFunction
          cadena={valores.cadena}
          cadenaOtro={valores.cadena}
          numero={valores.numero}
          numeroOtro={valores.numero}
          arreglo={valores.arreglo}
          arregloOtro={valores.arreglo}
          objeto={valores.objeto}
          objetoOtro={valores.objeto}
          boleano={valores.evaluado}
          boleanoOtro={valores.evaluado}
        />
      </section>
    </div>
  );
}

export default App;
