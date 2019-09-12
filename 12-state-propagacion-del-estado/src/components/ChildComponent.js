import React, { Component } from 'react';

class ChildComponent extends Component {
  render() {
    const {
      status,
      counter
    } = this.props;

    // Imprime en cosola cada vez que el estado del componente PADRE cambia.
    console.log(`Renderizandome ${counter}`);
    // Un componente pasa su estado hacia abajo cada vez que el estado es actualizado,
    // provocando que sus componentes hijos se vuelvan a renderizar.
    // En este caso como lo hace ChildComponent.

    return (
      <section className="App-container-child">
        <h2>{status}</h2>
        <p>Counter: {counter}</p>
      </section>
    )
  }
}

export default ChildComponent;