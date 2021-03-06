import React, { Component, Fragment } from "react";

class FormReactRefs163 extends Component {
  constructor(props) {
    super(props);
    //Almanceanos la entrada en this.entradaNombre, inicializamos en el constructor
    this.entradaNombreRef = React.createRef();
    this.entradaSocialRef = React.createRef();
    //Esto me da acceso al objeto de referencia que me da React, y luego lo asigno a mi propiedade
  }

  handleOnSubmit = e => {
    e.preventDefault();
    const name = this.entradaNombreRef.current.value;
    const twitter = this.entradaSocialRef.current.value;
    // const name = this.entradaNombreRef.current.focus();
    // const twitter = this.entradaSocialRef.current.focus();
    console.log("Enviando nombre ...", name);
    console.log("Enviando twitter ...", twitter);
  };

  handleOnChange(e) {
    console.log("TARGET: ", e.target.checked);
  }

  render() {
    return (
      <Fragment>
        <h3>Refs en formulario v 16.3 </h3>
        <section className="App-container-component">
          <form onSubmit={this.handleOnSubmit}>
            <p>
              <label htmlFor="id__name">Nombre:</label>
              <input
                id="id__name"
                name="userName"
                placeholder="name"
                type="text"
                ref={this.entradaNombreRef} // Refs apartir de React 16.3
              />
            </p>
            <p>
              <label htmlFor="id__twitter">Twitter:</label>
              <input
                id="id__twitter"
                name="twitterAccount"
                placeholder="@Twitter"
                type="text"
                ref={this.entradaSocialRef} // Refs apartir de React 16.3
              />
            </p>
            <button className="button button-primary">Enviar</button>
          </form>
        </section>
      </Fragment>
    );
  }
}

export default FormReactRefs163;

/**
 * Referencias y el DOM >=16.3
 *
 * * Las referencias proporcionan una forma de acceder a los nodos del DOM o a elementos React creados en el método de renderizado.
 * Cuando usar referencias?
 * -------------------------
 * Existen unos cuantos buenos casos de uso para referencias:
 *  * Controlar enfoques, selección de texto, o reproducción de medios.
 *  * Activar animaciones imperativas.
 *  *Integración con bibliotecas DOM de terceros.
 *  NOTA: Evita usar referencias en cualquier cosa que pueda ser hecha declarativamente.
 *
 *  Creando referencias
 * ---------------------
 * Las referencias son creadas usando React.createRef() y agregándolas a elementos de React mediante el atributo ref.
 * Las referencias son asignadas comúnmente a una propiedad de instancia cuando un componente es construido,
 * así pueden ser referenciadas por el componente.
 *
 *class MyComponent extends React.Component {
 * constructor(props) { <- ES IMPORTANTE INICIALIZAR LA PROPIEDAD DENTRO DEL CONSTRUCTOR.
 *   super(props); <- LLAMANOS A SUPER PARA PODER AGREGAR UNA PROPIEDAD NUEVA AL CONSTRUCTOR
 *   this.myRef = React.createRef();    <- AQUÍ INICIALIZAMOS LA PROPIEDAD CON EL MÉTODO QUE NOS DA REACT
 * }
 * render() {
 *   return <div ref={this.myRef} />;  <- LO USAMOS PASANDO LA REFERENCIA USANDO EL PARAMETRO CREADO
 * }
 *}
 *
 * NOTA: Como se agrega a la clase como una nueva propiedad, solo pueden ser usados en Class component,
 * no en functional component.
 * 
 * ---------------------------------------
 * En la documentación en react nos hace un ejemplo con las referencias, haciendo uso del método focus()
 * El método focus() nos ayuda a tener acceso al elemento referenciado, o visto de una manera paractica,
 * hacer focus al input asociado.
 * 
 * const name = this.entradaNombreRef.current.focus();
 *
 */
