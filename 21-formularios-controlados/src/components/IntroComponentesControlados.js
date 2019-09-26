import React, { Component } from "react";

class IntroComponentesControlados extends Component {
  constructor(props) {
    super(props);
    this.entradaNombreRef = React.createRef();
    this.entradaSocialRef = React.createRef();
  }

  handleOnSubmit = e => {
    e.preventDefault();
    const nombre = this.entradaNombreRef.current.value;
    const social = this.entradaSocialRef.current.value;

    console.log("nombre ", nombre);
    console.log("social ", social);
  };

  handleOnChange(e) {
    console.log('Activado: ', e.target.checked);
  }

 
  render() {
    return (
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
    );
  }
}

export default IntroComponentesControlados;

/**
 * La forma en que nosotros usamos los formularios como en HTML, se lec onoce como
 * 'Componentes Descontrolados', se le llama asi ya que no tenemos ningun control
 * sobre el valor del componente y para recuperarlos tenemos que acceder al arbol de elementos del DOM.
 *
 * Los elementos de formularios en HTML funcionan un poco diferente a otros elementos del DOM en React,
 * debido a que los elementos de formularios conservan naturalmente algún 'estado interno'.
 * Por ejemplo, en el sig. formulario:
 * <form>
 *  <label>
 *   Name:
 *   <input type="text" name="name" />
 *  </label>
 *  <input type="submit" value="Submit" />
 * </form>
 *
 * Este formulario tiene el comportamiento predeterminado en el HTML que consiste en navegar
 * a una nueva página cuando el usuario envía el formulario. Si deseas este comportamiento en
 * React, es conveniente tener una función en JavaScript que se encargue del envío del formulario,
 * y que tenga acceso a los datos que el usuario introdujo en el formulario. La forma
 * predeterminada para conseguir esto es una técnica llamada:
 * "Componentes Controlados"
 *
 * --------------------------------
 * Componentes Controlados
 * --------------------------------
 * En HTML, los elementos de formularios como los <input>,<textarea> y el <select> normalmente
 * 'mantienen sus propios estados' y 'los actualizan de acuerdo a la interacción del usuario'.
 * En React, el estado mutable es mantenido normalmente en la propiedad estado de los componentes,
 * y solo se actualiza con setState() como ya hemos visto.
 *
 * Podemos combinar ambos haciendo que el estado de React sea la 'única fuente de la verdad', De esta
 * manera, los componentes React que rendericen un formulario también controlan lo que pasa en ese
 * formulario con las subsecuentes entradas del usuario. "Un campo de formulario cuyos valores son
 * controlados por React" de esta forma es denominado "componente controlado".
 *
 * TODO: Terminar el ejemplo convirtiendolo en componente controlado, hacer otro ejercicio como en la documentacion
 * y seguir con los demas de textarea, select, inputs multiples y valor null
 */
