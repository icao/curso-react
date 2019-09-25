import React, { Component, Fragment } from "react";

class FormReactRefs160 extends Component {
  handleOnClick = e => {
    e.preventDefault();
    // A primera forma nosotros intentariamos acceder al valor de los elementos mediante el DOM
    // const name = document.querySelector('#name').value;
    // const twitter = document.querySelector('#twitter').value;
    //Accediendo con refs
    const name = this.entradaNombre.value;
    const twitter = this.entradaSocial.value;
    console.log("Enviando...", { name, twitter });
  };

  render() {
    return (
      <Fragment>
        <h3>Refs en formulario  v 16 </h3>
        <section className="App-container-component">
          <form>
            <p>
              <label htmlFor="name">Nombre:</label>
              <input
                id="name"
                name="userName"
                placeholder="name"
                type="text"
                ref={element => (this.entradaNombre = element)} // Funciona en versiones anteriores a React 16.3
              />
            </p>
            <p>
              <label htmlFor="twitter">Twitter:</label>
              <input
                id="twitter"
                name="twitterAccount"
                placeholder="@Twitter"
                type="text"
                ref={element => (this.entradaSocial = element)} // Funciona en versiones anteriores a React 16.3
              />
            </p>
            <button
              className="button button-primary"
              onClick={this.handleOnClick}
            >
              Enviar
            </button>
          </form>
        </section>
      </Fragment>
    );
  }
}

export default FormReactRefs160;

/**
 * Obtener información por referencias
 *
 * En react otra forma de obtener el valor de los campos input es el uso de las referencias,
 * esto lo hacemos agregando el atributo ref. Ref acepta una función que tiene como parametro la referencia del elemento.
 * El elemento de guarda en el contexto de la clase(se guarda en la clase como un parametro mas).
 * EJEMPLO 1:
 * <input
 *  id="twitter"
 *  name="twitterAccount"
 *  placeholder="@Twitter"
 *  type="text"
 *  ref={inputSocial => this.entradaSocial = inputSocial}
 * />
 *
 * Dentro del método donde lo usaremos (en el handle), lo asignamos a una variable
 * const twitter = this.entradaSocial.value;
 * Esto nos guardara el valor como lo haciamos accediendo al DOM y capturando el value.
 *
 * Las referencias son usadas cuando se implementan librerias externas, ajenas a react.
 * No se recomienda hacer uso de ellas, para esto hay mas formas que nos aconseja react,
 * asi procuramos tratar de la mejor manera loa datos de nuestro formulario.
 *
 *
 */
