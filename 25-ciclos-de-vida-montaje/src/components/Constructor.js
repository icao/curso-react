import React, { Component } from "react";
import imagen01 from '../imagen01.jpeg';
import imagen02 from '../imagen02.jpeg';

class Constructor extends Component {
  // Por defecto al crear nuestro componente, por ser una clase, tiene una metodo constructor por default
  // este método constructor es el mismo que tenemos en la clase Component, por lo que
  // tener dos veces el mismo constructor no sirve de nada
  // Con el método super podemos acceder al constructor y a los parametros de la clase Component.
  // constructor(...args) {
  //   super(...args)
  //   this.state = {
  //     hola: 0
  //   }
  // }

  constructor(props) {
    console.log('Constructor Listo ✅');
    super(props); // Este constructor es necesario para mandar a llamar al constructor de Componet
    this.state = {
      //Inicializamos el state de nuestro componente
      imagen: imagen01 //Inicializamos con imagen01 por defaul 
    };
    // En el constructor podemos bindear el contexto de this de los handles / o usar arrow functions en la declaración del método
    this.handleClick = this.handleClick.bind(this);
    // No llames this.setState() aquí! Llamalo en un ciclo de vida o metodo posterior.
  }

  // NOTA: Si no inicializas el estado y no enlazas los métodos, no necesitas implementar un constructor para tu componente React.

  handleClick() {
    this.setState({
      imagen: imagen02 //Actualizamos el estado con imagen02
    });
  }
  render() {
    console.log("Render Listo ✅");
    return (
      <section className="App-container-component">
        <h2>constructor()</h2>
        <img src={this.state.imagen} className="image" alt="imagen"/>
        <hr />
        <button onClick={this.handleClick}>Cambiar imagen</button>
      </section>
    );
  }
}

export default Constructor;

/** 
 * Consturctor()
 * 
 * El constructor para un componente React es llamado antes de ser montado.
 * Al implementar el constructor para una subclase React.Component, deberías llamar
 * a super(props) antes de cualquier otra instrucción. De otra forma this.props no estrá definido 
 * en el constructor, lo que puede ocacionar errores. 
 * 
 * Normalmente, los constructores de React sólo de utilizan para:
 *  Inicializar un estado asignado un objeto this.state 
 *  Enlazar manejadores de eventos a una instancia 
 * 
 * IMPORTANTE: NO DEBES LLAMAR 'setState()´ en el constructor(). En su lugar, si su componente
 * necesitra usar el estado local, asigna directamente el estado inicial al this.state directamente en el constructor.
 * 
 * El constructor es el único lugar donde debes asignar 'this.state' directamente. En todos
 * los demas métodos, debes usar this.setState() en su lugar. 
 * Evita introducir cualquier efecto secundario en el constructor. Pára estos casos de uso,
 * se componentDidMount() en su lugar.
 *  
*/