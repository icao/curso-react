import React, { Component } from "react";

class ChildTwo extends Component {
  state = { counter: 0 }; //Inicializamos contador hijo

  handleClick = () => { //Método para incrementar el contador del hijo y lanzar el método para incrementar en el padre
    this.setState(state => {
      return {
        counter: state.counter + 1
      };
    });

    this.props.increment(); // Lanzamos el evento que es pasado desde el padre, atra vez de las props.
  };

  render() {
    return (
      <section className="App-container-component-3">
        <h3>Hijo</h3>
        <p>
          Contador: <strong>{this.state.counter}</strong>
        </p>
        {/* Mandamos a llamar a lmétodo que incrementará los contadores */}
        <button onClick={this.handleClick}>Incrementar</button>
        {/* Otra forma mas simple es teniendo el botón y solo diparar el evento para que se incrmente el contador en el padre */}
        {/* <button onClick={this.props.increment}>Incrementar</button> */}
      </section>
    );
  }
}

export default ChildTwo;

/** 
 * En este caso el hijo tendra su propio contador,
 * cuando este incremente, emitira el evento al padre, haciendo que
 * su contador incremente tambien.
*/