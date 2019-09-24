import React, { Component, Fragment } from "react";

class FormEventsComponent extends Component {
  handleOnSubmit(e) {
    e.preventDefault();
    console.log("Enviando...");
  }

  handleOnChange(e) {
    console.log("TARGET: ", e.target.checked);
  }

  render() {
    return (
      <Fragment>
        <h3>Eventos en formulario</h3>
        <section className="App-container-component">
          <form onSubmit={this.handleOnSubmit}>
            <p>
              <label htmlFor="id__name">Nombre:</label>
              <input
                id="id__name"
                name="userName"
                placeholder="name"
                type="text"
                ref={inputName => (this.entradaNombre = inputName)}
              />
            </p>
            <p>
              <label htmlFor="id__twitter">Twitter:</label>
              <input
                id="id__twitter"
                name="twitterAccount"
                placeholder="@Twitter"
                type="text"
                ref={inputSocial => (this.entradaSocial = inputSocial)}
              />
            </p>
            <p>
              <label htmlFor="id__active">
                Activado:
                <input
                  onChange={this.handleOnChange}
                  id="id__active"
                  type="checkbox"
                />
              </label>
            </p>
            <button className="button button-primary">Enviar</button>
          </form>
        </section>
      </Fragment>
    );
  }
}

export default FormEventsComponent;

/**
 * Para tratar formulario tenemos expecificamente al hacer submit con el boton,
 * en vez de usar onClick, tenemos un evento personalizado para este evento llamado onSubmit.
 * Recibe una funcion la cual sera ejecutada al hacer click en el ultimo boton dentro del form.
 *
 * En este ejemplo colocamos en handle y hacemos uso del preventdefaul para anular el comportamiento por defecto
 * de los navegadores.
 *
 * Adicional otro evento que usaremos mucho en los formularios es el evento onChange, que esta escuchando
 * cualquier cambio que nosotros hagamos en nuestros campos.
 * 
 * onChange={this.handleOnChange}
 * 
 * El ejemplo se ve con el checkbox activar.
 *
 */
