import React, { Component } from "react";

class UpdateState extends Component {
  // Usando el estado en el método Contructor:
  /*
  constructor() {
    super();
    this.state = {
      contador: 1
    };

    setInterval(() => {
      this.setState({ contador: this.state.contador + 1 });
    }, 1000);
  }
  */

  //Usando el estado como Class Field

  state = {
    contador: 1
  };

  constructor() {
    super();
    setInterval(() => {
      this.setState({ contador: this.state.contador + 1 });
      //TODO: Mas adelante veremos porque no esta bien declararlo asi, y tenemos que usar a state como objeto
      //Todo: En una sección donde exploraremos bien que es setState()
    }, 1000);
  }

  // El setInterval no se puede dejar suelto, no puedes ponerlo ahí.
  // Por ello, en ese ejemplo, se necesita el uso del constructor y super de forma obligatoria.
  // setInterval(() => {
  //     this.setState({ contador: this.state.contador + 1 });
  //   }, 1000);

  // O en su defecto dentro de un método que le pertenezca a la clase Component
  // como un ciclo de vida:

  // UNSAFE_componentWillMount() {
  //   setInterval(() => {
  //     this.setState({ contador: this.state.contador + 1 });
  //   }, 1000);
  // }

  render() {
    console.log("CONTADOR: ", this.state.contador);
    return (
      <section className="App-container-component">
        <h2>Actualizacion del estado de un componente</h2>
        <p>Contador: {this.state.contador}</p>
      </section>
    );
  }
}

export default UpdateState;

/**
 * No se tiene quye mutar el estado directamente, recordemos que un componente
 * tiene que comportarse como una funcion pura.
 */
// this.state = this.state.contador + 1;
// ERROR: In Console:
// Line 10:  Do not mutate state directly. Use setState()  react/no-direct-mutation-state

/**
 * Si queremos modificar el estado en React, desgraciadamente no se puede, ya que
 * no es reactivo como lo es Vue o Angular, no asegura el databinding, no existe.
 * Para eso nosotros tenemos que hacer uso de un metodo setState()
 * Que hace cambios al estado del componente y le dice a React que este componente y sus elementos
 * secundarios deben volverse a procesar con el estado actualizado,
 * solo y unicamente asi garantizamos la reactividad en react.
 *
 * setState() Acepta solo un parametro que es el objeto con el NUEVO estado.
 */

/**
 * Para que nuestro componente pueda hacer ver un cambio reflejado en nuestra UI,
 * tenemos que gesionar el state mandando una petición solicitando que se actualice
 * el estado de nuestro componente. Esto se hace con el método setState()
 *
 * El state(estado) en react es:
 * 1.- INMUTABLE
 * 2.- Solo se actualiza con setState()
 * 3.- Es asincrono.
 */
