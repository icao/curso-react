import React, { Component } from 'react';
import ChildOne from "./ChildOne";

class ParentOne extends Component {
  state = { counter: 0 } //Inicializamos el estado de nuestro contador

  handleSubmit = () => { // Método para incrementar el contador
    this.setState((state) => {
      return {
        counter: state.counter + 1
      }
    })
  }
  
  render() { 
    console.log("⏱️ Render Counter: ", this.state.counter);
    return (
      <section className="App-container-component">
        <h3>Padre</h3>
        <p>
          Contador: <strong>{this.state.counter}</strong>
        </p>
        {/* Con el botón, mandamos a llamar el método que incrementará nuestro contador */}
        <button onClick={this.handleSubmit}>Incrementar</button>
        {/* La forma de comunicarnos con el componente hijo es pasar el valor del contador atravez de la prop 'count' */}
        <ChildOne count={this.state.counter} />
      </section>
    );
  }
}
 
export default ParentOne;

/** 
 * ----------------------------------------------
 * Comunicar componentes de 👨Padre ➡ 👦Hijo
 * ----------------------------------------------
 * 
 * Comunicar un componente padre a un hijo es fácil,
 * unicamente le pasamos el valor al hijo mediante las props. 
 * Como vimos en el capitulo de propagación de estado, aplica el mismo principio.
 * 
 * La forma de propagar información a tra vez de los componentes hijos es mediante el uso de las props. 
 * Es en la props donde podremos enviar cualquier dato o función al hijo.
 * 
*/