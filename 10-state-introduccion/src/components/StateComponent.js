import React, { Component } from "react";

class StateComponent extends Component {
  // Tambien podemos declarar al state como una propiedad de la clase,
  // es la mas recomendada por su simpleza.
  state = {
    contador: 10 //Inicializamos el valor de contador
  };
  render() {
    // State es un objeto
    console.log('State', this.state);
    return (
      <section>
        <h5>Soy un componente con state inicializado, como propiedad de clase</h5>
        <p>Otro Contador: {this.state.contador}</p>
      </section>
    );
  }
}

export default StateComponent;
