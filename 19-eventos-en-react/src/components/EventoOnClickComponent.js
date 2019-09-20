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
 * Manejar eventos en elementos de React es muy similar a manejar eventos con elementos del DOM. 
 * Hay algunas diferencias de sintaxis:
 * 
 * Los eventos de React se nombran usando camelCase, en vez de minúsculas.
 * Con JSX pasas una función como el manejador del evento, en vez de un string.
 * Por ejemplo, el HTML:
 * 
 * <button onclick="activateLasers()">
 *    Activate Lasers
 * </button>
 * 
 * En React es algo diferente:
 * <button onClick={activateLasers}>
 *    Activate Lasers
 * </button>
 * 
*/

// Otra diferencia es que en React no puedes retornar false para prevenir el comportamiento por defecto. Debes, explícitamente, llamar preventDefault. Por ejemplo, en un HTML plano, para prevenir el comportamiento por defecto de un enlace de abrir una nueva página, puedes escribir:

// <a href="#" onclick="console.log('The link was clicked.'); return false">
//   Click me
// </a>
// En cambio en React, esto podría ser:

// function ActionLink() {
//   function handleClick(e) {
//     e.preventDefault();
//     console.log('The link was clicked.');
//   }

//   return (
//     <a href="#" onClick={handleClick}>
//       Click me
//     </a>
//   );
// }