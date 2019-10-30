import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ComponentDidCatch from "./components/ComponentDidCatch";
import GetDerivedStateFromError from "./components/GetDerivedStateFromError";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="App-components">
        <h1>Manejo de errores</h1>
        <p>
          Estos métodos se invocan cuando hay un error durante la renderización,
          en un método en el ciclo de vida o en el constructor de cualquier
          componente hijo.
        </p>
        <GetDerivedStateFromError />
        <ComponentDidCatch />
      </section>
    </div>
  );
}

export default App;

/**
 * ------------------------------
 * Límites de error
 * ------------------------------
 * Los límites de error son componentes de React que detectan errores de JavaScriptr en cualquier
 * parte de árbol de componentes secundarios, registran esos erroes y muestran una UI alternativa
 * en lugar del árbol de componentes que se colgó. Los límites de error capturan errores durante la representación, en métodos de ciclo de vida y en constructores de todo árbol debajo de ellos.
 *
 * Un componente definido a través de una clase se convierte en un límite de error si se define uno o ambos
 * métodos de ciclo de vida 'static getDerivedStateFromerror()' o componentDidCatch().
 * Actualizar el estado desde estos ciclos de vida te permite capturar eventos no controlados desde JavaScript
 * en el árbol inferior, y mostrarlo como respuesta en la interfaz de usuario.
 *
 * Usa los límites de error para recuperar excepciones iunesperadas; NO INTENTES USARLOS PARA CONTROLAR EL FLUJO.
 *
 * Funcionan como un bloque catch{} de JavaScript, pero para componentes. Solo los componentes de clase(class component) pueden ser límites de errores.
 * En la paractica, la mayor parte del tiempo declararás un límite de errores una vez y lo usaras a lo largo de tu aplicación.
 *
 * NOTA: Los límites de error solo capturan errores en los componentes DEBAJO DE ELLOS en el árbol.
 * Un límite de error no puede capturar un error dentro de él mismo.
 * Si un límite de errores falla tratando de renderizar el mensaje de error, el error se propagará al límite de errores más cercano por encima de él.
 * Esto tambien es similar a los bloques catch{} en JavaScript.
 * 
 * ------------------------------------
 * Dónde poner Límites de Errores
 * ------------------------------------
 * La granularidad de los límites de errores depende de tí. Puedes envolver los componentes de enrutado
 * de alto nivel para mostrar un mensaje de “Algo ha ido mal” al usuario, tal como a menudo gestionan 
 * los errores los frameworks del lado del servidor. También puedes envolver widgets aisladas en
 * un límite de error para evitar que hagan fallar el resto de la aplicación.
 * 
 */
