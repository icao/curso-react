import React, { Component } from "react";

class EventoSinteticoComponent extends Component {
  onClickEvent(e) {
    console.log(`Hola soy un evento click 👆`);
    alert(`Hola soy un evento click 👆`);
    console.log(e);
    console.log(e.nativeEvent);
    /**
     * Este evento sintetico 'e', envuelve el avento nativo para que sea compatible con
     * todos los navegadores que soporta react.
     * Este evento ofrece los eventos y propiedades mas usados en el nativo.button-primarySi por alguna razón se desea acceder a los eventos originales del navegador, se puede acceder mediante la propiedade 'nativeEvent'
     */
  }
  render() {
    return (
      <section className="App-container-component">
        <h2>Soy un evento Sintetico</h2>
        <button
          className="button button-primary"
          // Notación para hacer llamado a la función.
          onClick={this.onClickEvent}
        >
          Dame un click
          <span role="img" aria-label="sheep">
            👆
          </span>
        </button>
      </section>
    );
  }
}

export default EventoSinteticoComponent;

/**
 * SyntheticEvent
 *
 * A tus manejadores de eventos se les pasarán instancias de SyntheticEvent, un contenedor agnóstico al navegador
 * alrededor del evento nativo del navegador. Tiene la misma interfaz que el evento nativo del navegador,
 * incluyendo stopPropagation() y preventDefault(), excepto que los eventos funcionan de manera idéntica en todos los navegadores.
 *
 * Si encuentras que necesitas el evento del navegador subyacente por alguna razón,
 * simplemente use el atributo nativeEvent para obtenerlo.
 */
