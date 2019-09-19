import React, { Component } from "react";

class EventoOnClickComponent extends Component {
  onClickEvent() {
    console.log(`Hola soy un evento click 👆`);
    alert(`Hola soy un evento click 👆`);
  }

  render() {
    return (
      <section className="App-container-component">
        <h2>Soy un evento Onclick</h2>
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

export default EventoOnClickComponent;

/** 
 * Eventos en React - onClick
 * 
 * Para lanzar eventos en react, tenemos que hacer uso de un atributo en JSX llamado onClick,
 * este es un método exclusivo de JSX, no es el 'onclick' de HTML, nósete la diferencia que está
 * escrito en notación camel case. 
 * Al atributo entre "{}" le pasamos la función que será ejecutada, haciendo referencia a ella con "this":
 * onClick={this.onClickEvent}
 * 
*/