import React, { Component, Fragment } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

// Componente Padre que hace la toma de desiciones para
// mostrar un componente a la vez.
class ParentRenderComponent extends Component {
  state = {
    componenteA: true
  };

  /**
   * Esta funcion toma la desición de que componente mostrar,
   * dependiendo del valor del estado componenteA.
   */
  useConditionalRendering(componente) {
    if (componente) {
      return <ComponentA />;
    } else {
      return <ComponentB />;
    }
  }

  render() {
    // [1] Con esto sabemos que las variables pueden almacenar componentes de react
    const conditionalComponent = this.useConditionalRendering(
      this.state.componenteA
    );
    // [2] Guardamos en una ternaria el componente y hacemos aqui la toma de desiciones
    const conditionalRenderingTernary = this.state.componenteA ? (
      <ComponentA />
    ) : (
      <ComponentB />
    );
    return (
      <Fragment>
        <section className="App-container-component">
          <h2>Conditional Rendering</h2>
          {/* ----------------------------------------LLAMANDO A UNA FUNCION ---------------------------------------- */}
          {/* Una forma de hacer renderizdo condicional es hacer la toma de desición atravez de uan función. */}
          {this.useConditionalRendering(this.state.componenteA)}
          <small>function</small>
          {/* --------------------------------------GUARDANDO EN UNA VARIABLE---------------------------------------- */}
          {/* Al llamar a la función anterior, nos retornará un componente como resultado, el cual será mostrado, por lo que podemos guardar ese retorno en una variable y usarla en las llaves, como acontinuacion se muestra: [1]*/}
          <br />
          {conditionalComponent}
          <small>variable</small>
          {/* -----------------------------------------TERNARIA CON VAIABLE------------------------------------------ */}
          {/* Podemos hacer uso de la operación ternaria y guardar tambien el resultado en una variable: [2] */}
          <br />
          {conditionalRenderingTernary}
          <small>ternary</small>
          {/* ------------------------------------------TERNARIA EN EL JSX------------------------------------------ */}
          {/* En vez de guardar el resultado de la ternaria en una constante, podriamos hacerlo directamente dentro del return
          en el JSX, dentro de las {}:*/}
          <br />
          {this.state.componenteA ? <ComponentA /> : <ComponentB />}
          <small>ternary JSX</small>
          {/*IMPORTANTE: Este patrón es el más usado al momento de hacer conditional rendering en react, por lo que se recomienda hacer uso de el cada vez que se nos presente un caso */}
        </section>
      </Fragment>
    );
  }
}

export default ParentRenderComponent;
