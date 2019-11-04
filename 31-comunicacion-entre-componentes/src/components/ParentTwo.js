import React, { Component } from "react";
import ChildTwo from "./ChildTwo";

class ParentTwo extends Component {
  state = { counter: 0 };//Inicializamos contador padre

  handleSubmit = () => { //Método que es ejecutado en el padre para incrementar el contador
    this.setState(state => {
      return {
        counter: state.counter + 1
      };
    });
  };

  render() {
    console.log("⏱️ Render Counter: ", this.state.counter);
    return (
      <section className="App-container-component">
        <h3>Padre</h3>
        <p>
          Contador: <strong>{this.state.counter}</strong>
        </p>
        {/* Para comunicarnos con el hijo, pasamos la función del padre atravez de una prop al hijo, que será ejecutada en un futuro desde el hijo */}
        <ChildTwo increment={this.handleSubmit} />
      </section>
    );
  }
}

export default ParentTwo;

/** 
 * ----------------------------------------------
 * Comunicar componentes de 👦Hijo ➡ 👨Padre
 * ----------------------------------------------
 * Para comunicar un hijo a un padre, tenemos que crear un enlace del hijo al padre. Esto lo hacemos haciendo uso de una función que sera pasada a travez de una prop del padre al hijo. 
 * 
 * El hijo cuando quiera comunicarse con el padre, hará uso de esta función pasada por el padre. 
 * Esta funcion llega al hijo mediante una prop. Por lo que para ejecutarla
 * solo mandaremos a llamar a la prop, ya sea ejecutandola capturada en un evento por ejemplo OnClick, o mandandola a ejecutar mediante el uso de () en otro método del componente hijo, como se muestra en el ejemplo. 
 * 
 * 
*/