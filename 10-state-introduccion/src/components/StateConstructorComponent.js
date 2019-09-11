import React, { Component } from "react";

class StateConstructorComponent extends Component {
  /**
   * Para tener propiedades dinamicas(que sean reactivos y se rendericen en la interfaz) en react, 
   * se hace el uso del state.
   */

  // Para usar el state necesitamos invocar al metodo constructor
  constructor() {
    // Llamamos a super() para acceder a los metodos de la clase
    super(); //Super ejecutara el metodo constructor de la clase que extendemos de Component
    // Apuntamos a la propiedad state que es un objeto que aloja a las propiuedades
    this.state = {
      contador: 1 //Inicializamos contador en el estado <- Nuestra propiedad
    };
  }
  render() {
    // this.state aloja un objeto con las propiedades
    console.log('State', this.state);
    return (
      <section>
        <h5>Soy un componente con state inicializado, como propiedad del constructor</h5>
        {/* Ahora leemos el state que aloja nuestra propiedad dinamica*/}
        <p>Contador: {this.state.contador}</p>
      </section>
    );
  }
}

export default StateConstructorComponent;
