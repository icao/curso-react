import React, { Component } from "react";

class FormsReact extends Component {
  handleOnClick(e) {
    e.preventDefault() // Neutralizamos el comportamiento por defecto

    // Podemos capturar el valor de nuestro formulario como comunmente lo hariamos en JavaScript vanilla
    const name = document.querySelector('#id-name').value;
    const twitter = document.querySelector('#id-twitter').value;
    // Pero no es la forma adecuada

    console.log({name, twitter});
  }

  render() {
    return (
      <section className="App-container-component">
        <form>
          <p>
            <label htmlFor="id-name">Nombre:</label>
            <input
              id="id-name"
              name="userName"
              placeholder="name"
              type="text"
            />
          </p>
          <p>
            <label htmlFor="id-twitter">Twitter:</label>
            <input
              id="id-twitter"
              name="twitterAccount"
              placeholder="@Twitter"
              type="text"
            />
          </p>
          {/* <p>
            <label htmlFor="id-active">Activado:</label>
            <input id="id-active" name="active" type="checkbox" />
          </p> */}
          <button
            className="button button-primary"
            onClick={this.handleOnClick}
          >
            Enviar
          </button>
        </form>
      </section>
    );
  }
}

export default FormsReact;

/**
 * Form - ligando widgets
 * En HTML5 la forma en como se ligaban el label con su correspondiente input
 * es atra vez de el atributo 'for', sin embargo en react si queremos usar el atributo 'for',
 * no podriamos ya que al ser JSX y este a la vez JavaScript, tendriamos conflicto con la palabra
 * reservada 'for' que usamos para los ciclos.
 * Es por ello que en su lugar se sustituye por 'htmlFor'. Ejemplo:
 *
 * HTML5
 * ----------------------------------------------------------------------------
 * <form>
 *  <p>
 *    <label for="id-escudo"> Escudo </label>
 *    <input type="checkbox" id="id-escudo" name="escudo" value="1">
 *  </p>
 *  <!-- INPUT ANIDADO COMO BUENA PRACTICA -->
 *  <p>
 *    <label for="id-espada">
 *      <input type="checkbox" id="id-espada" name="espada" value="1"> Espada
 *    </label>
 *  </p>
 * </form>
 * ----------------------------------------------------------------------------
 *
 * JSX
 * ----------------------------------------------------------------------------
 * <form>
 *  <p>
 *    <label htmlFor="id-escudo"> Escudo </label>
 *    <input type="checkbox" id="id-escudo" name="escudo" value="1">
 *  </p>
 *  {INPUT ANIDADO COMO BUENA PRACTICA}
 *  <p>
 *    <label htmlFor="id-espada">
 *      <input type="checkbox" id="id-espada" name="espada" value="1"> Espada
 *    </label>
 *  </p>
 * </form>
 * ----------------------------------------------------------------------------
 *
 * Para algunas tecnologías asistentes, manejar múltiples etiquetas para un mismo control,
 * puede suponer un problema. Por ello, es recomendable anidar el control dentro de su correspondiente elemento
 * con el fin de construir formularios accesibles.
 *
 */
