import React, { Component, Fragment } from "react";

class FormEvents extends Component {
  constructor(props) {
    super(props);
    //Almanecanos la entrada een this.entradaNombre, inicializamos en el constructor
    this.entradaNombreRef = React.createRef();
    this.entradaSocialRef = React.createRef();
    //Esto me da acceso al objeto de referencia que me da React, y luego lo asigno a mi propiedade
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    const name = this.entradaNombreRef.current.value;
    const twitter = this.entradaSocialRef.current.value;
    // const name = this.entradaNombreRef.current.focus();
    // const twitter = this.entradaSocialRef.current.focus();
    console.log("Enviando nombre ...", name);
    console.log("Enviando twitter ...", twitter);
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
                ref={this.entradaNombreRef}
              />
            </p>
            <p>
              <label htmlFor="id__twitter">Twitter:</label>
              <input
                id="id__twitter"
                name="twitterAccount"
                placeholder="@Twitter"
                type="text"
                ref={this.entradaSocialRef}
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

export default FormEvents;

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
