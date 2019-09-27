import React, { Component } from "react";

class IntroComponentesControlados extends Component {
  //  NOTA: Al ser ya un componente controlado no necesitamos le método constructor ni las referencias
  // constructor(props) {
  //   super(props);
  //   this.entradaNombreRef = React.createRef();
  //   this.entradaSocialRef = React.createRef();
  // }

  state = {
    nameValue: '',
    socialValue: '@',
    checkboxValue: true
  }


  handleOnSubmit = e => {
    // Prevenimos el comportamineto por default del navegador
    e.preventDefault();
    // Imprimimos en consola el valor del estado
    console.log("ENVIANDO... 📩 ");
    console.log("Nombre ", this.state.nameValue);
    console.log("Social ", this.state.socialValue);
    console.log("Activado ", this.state.checkboxValue);
  };

  handleOnChange = (e) => {
    this.setState({ checkboxValue: e.target.checked })
    /** 
     * NOTA:  Aquí podriamos hacer todas las asignaciones de loa valores nuevos al estado.
     * En este ejemplo lo hacemos de las dos formas, en el checkbox se hace dentro de este método handle y en los inputs
     * se hace atravez de pasar el evento capturado como una función flecha desde el evento onChange en el input
    */
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
              // ref={this.entradaNombreRef} // Referencia eliminada
              value={this.state.nameValue}
              //Ya se a que pasemos una funcion como parametro, o enviemos el evento handle
              onChange={e => this.setState({ nameValue: e.target.value })}
            />
          </p>
          <p>
            <label htmlFor="id__twitter">Twitter:</label>
            <input
              id="id__twitter"
              name="twitterAccount"
              placeholder="@Twitter"
              type="text"
              // ref={this.entradaSocialRef} // Referencia eliminada
              value={this.state.socialValue}
              // Enviamos la captura del evento al estado
              onChange={e => this.setState({ socialValue: e.target.value })}
            />
          </p>
          <p>
            <label htmlFor="id__active">
              Activado:
              <input
                //Enlazamo el valor del checkbox ocn el actual en el estado
                checked={this.state.checkboxValue}
                // Encaso dle cgeckbox  llamamos al handle asociado, donde hacemo la asignacion del nuevo valor
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
 * TODO: hacer otro ejercicio como en la documentacion y seguir con los demas de textarea, select, inputs multiples y valor null
 */
