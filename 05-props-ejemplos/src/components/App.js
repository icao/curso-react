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
          cadenaOtro={"Soy una cadena"}
          numero={valores.numero}
          numeroOtro={4500}
          arreglo={valores.arreglo}
          arregloOtro={[5, 9, 45, 336, "cadena", true]}
          objeto={valores.objeto}
          objetoOtro={{ key: "Soy una llave de un objeto", numero: 500 }}
          boleano={valores.evaluado}
          boleanoOtro={valores.evaluado}
        />
        {/* Functional Component Con Propiedades */}
        <PropsFunction
          cadena={valores.cadena}
          cadenaOtro={"Soy una cadena"}
          numero={valores.numero}
          numeroOtro={4500}
          arreglo={valores.arreglo}
          arregloOtro={[5, 9, 45, 336, "cadena", true]}
          objeto={valores.objeto}
          objetoOtro={{ key: "Soy una llave de un objeto", numero: 500 }}
          boleano={valores.evaluado}
          boleanoOtro={valores.evaluado}
        />
      </section>
    </div>
  );
}

export default App;

/** 
 * En ambos casos(Class Component & Funcitonal Component)
 * las propiedades se pasan por igual, no hay ninguna diferencia.
 * Solo al momento de usarlas cambia en cada una, revisar cadacomponente para ver como son llamadas.
*/
