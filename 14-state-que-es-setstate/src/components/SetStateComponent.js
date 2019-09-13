import React, { Component } from "react";

class SetStateComponent extends Component {
  // Objeto state como Class field (campo de clase)
  state = {
    contador: 0
  };

  constructor() {
    super();
    setInterval(() => {
      // Modificando el state con el métoso setState()
      this.setState({
        contador: this.state.contador + 1
      });
    }, 1000);
  }

  render() {
    // Imprime en consola el objeto state
    console.log('Contador: ', this.state.contador);
    return (
      <section className="App-container-component">
        <h1>Counter: {this.state.contador}</h1>
      </section>
    );
  }
}

export default SetStateComponent;

/** 
 * NOTA: 
 * Para garantizamos la reactividad en nuestra UI o dicho en otras palabras
 * que cambien las propiedades que alimentan a nuestro componente y se vea reflejado en nuestra UI, 
 * tenemos que hacer uso de una "propiedad dinámica" llamada estado.
 * Pero esto no basta para garantizar la reactividad, si queremos actualizar el estado tenemos que
 * hacer uso del método setState().
 * 
 * 
 * ----------------------------------------
 * QUÉ ES setState()?
 * ----------------------------------------
 * 
 * setState() es un método que programa una actualización al 'objeto state(estado)' de un componente. 
 * Cuando el estado cambia, el componente responde volviendo a renderizar.
 * 
 * setState() hace cambios al estado del componente y le dice a React que este componente 
 * y sus elementos secundarios deben volverse a procesar con el estado actualizado. 
 * Este es el método principal que utiliza para actualizar la interfaz de usuario en
 * respuesta a los manejadores de eventos y las respuestas del servidor.
 * 
 * 
 * ----------------------------------------
 * DIFERENCIA ENTRE 'state' Y 'props'
 * ----------------------------------------
 * 
 * En React, tanto 'this.props' como 'this.state' representan los valores renderizados, 
 * es decir, lo que hay actualmente en la pantalla.
 * 
 * 'props' y 'state' son OBJETOS PLANOS de JavsScript. Mientras ambos contienen
 * información que influye en el resultado del render, son diferentes debido a 
 * una importante razón:
 * 
 *  * 'props':
 *    - Se pasa al componente(similar a los parámetros de una función).
 *    - Son usados para pasar datos de componentes padres a subcomponentes(hijos).
 *    - Son inmutables(no deben cambiar).
 *  * 'state':
 *    - Se administra dentro del componente(similar a las variables declaradas dentro de una función).
 *    - Son usados para datos cambiantes(dinámicos).
 *    - Los componentes vuelven a llamar al render cuando este objeto cambia.
 * 
 * Otras comparaciones son:
 * __________________________________________________________________________________________
 *                                                                          | props | state |
 * ¿Se puede obtener el valor inicial del componente principal?             |   Sí  |   Sí  |
 * ¿Se puede cambiar por el componente principal?                           |   Si  |   No  |
 * ¿Se pueden establecer valores predeterminados dentro de Componente?      |   Sí  |   Sí  |
 * ¿Se Puede cambiar dentro del componente?                                 |   No  |   Sí  | 
 * ¿Se puede establecer el valor inicial para los componentes secundarios?  |   Sí  |   Sí  |
 * ¿Se Puede cambiar en componentes secundarios?                            |   Si  |   No  |
 * __________________________________________________________________________________________
 * 
*/
