import React, { Component } from "react";

class UNSAFEComponentWillMount extends Component {
  constructor(props) {
    console.log("Constructor Listo ✅");
    super(props);
    this.state = {
      mensaje: "Mensaje inicial"
    };
    console.log('Estado en el constructor: ', this.state.mensaje);
  }

  UNSAFE_componentWillMount() {
    this.setState({
      mensaje: 'el mensaje fue actualizado antes del render'
    })
    console.log("Ejecutando ciclo UNSAFE_componentWillMount");
  }

  render() {
    console.log("Render Listo ✅");
    return (
      <section className="App-container-component-deprecated">
        <h2>UNSAFE_componentWillMount()</h2>
        <p className="paragraph">{this.state.mensaje}</p>
      </section>
    );
  }
}

export default UNSAFEComponentWillMount;

/** 
 * ------------------------------------------
 * UNSAFE_componentWillMount()
 * ------------------------------------------
 * 
 * Este ciclo de vida anteriormente se llamaba 'componentWillMount()'. 
 * Este nombre seguira funcionando hasta la veriosn 17. 
 * 
 * UNSAFE_componentWillMount() se invoca justo antes de que el montaje ocurra. Es llamado antes
 * del método render(), por lo tanto, al llamar a setStare() de forma SÍNCRONA en este método
 * no se activará una representación adicional. En general, se recomienda usar el constructor() en 
 * lugar de inicializar el estado. 
 * 
 * Se tiene que evitar introducir datos secunndarios o suscripciones en esté método. Para estos
 * casos de uso, se recomienda el uso de componentDidMount() en su lugar. 
 * 
 * Este cicl ode vida es el unico método que se llama en el renderizado en el lado del servidor.
 * 
 * La principal funciónn que tiene éste método es inicializar el estado y tener todos los datos preparados, 
 * para psoteriormente ser renderizados, pero esto se puede hacer en el constructor.
 * 
*/