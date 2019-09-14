import React, { Component } from "react";

class SetStateAsynchronous extends Component {
  state = {
    contador1: 0,
    contador2: 0
  };

  /**
   * ¿Por qué setState me está dando el valor incorrecto?
   * Las llamadas a setState() son asíncronas; no te fíes de que 'this.state' refleje el nuevo valor inmediatamente
   * después de llamar a setState. Pasa una función de actualización en lugar de un objeto
   * si necesitas calcular valores en función del estado actual
   * (revisa a continuación para más detalles).
   */

  incrementarCont() {
    // Nota: esto *no* funcionará como se espera.
    // Aunque es la forma en como hemos venido actualizando el state,
    // no garantiza que el estado se actualice
    this.setState({
      contador1: this.state.contador1 + 1
    });
    // Continuacion en [1]
  }

  incrementarCont2() {
    this.setState(state => {
      // Importante: lee `state` en vez de `this.state` al actualizar.
      return {
        contador2: state.contador2 + 1
      };
      // Se le pasa una funcion porque despues se ejecuta y vuelve a renderizar la UI
    });
    // Continuacion en [2]
  }

  componentDidMount() {
    // [1]
    // Contador1 inicia en 0
    this.incrementarCont();
    this.incrementarCont();
    this.incrementarCont();
    // Cuando React rerenderiza el componente, `this.state.contador1` será 1, pero tu esperabas 3.

    // Esto es porque la función anterior `incrementarCont()` lee de `this.state.contador1`,
    // pero React no actualiza `this.state.contador1` hasta que el componente se vuelve a renderizar.
    // Entonces `incrementarCont()` termina leyendo `this.state.contador1` como 0 cada vez, y lo establece a 1.

    //------------------------------------------ SOLUCION ------------------------------------------------
    // Pasa una función en lugar de un objeto a setState() para asegurarte de que la llamada
    // siempre use la versión más actualizada del estado(ver más abajo).

    // [2]
    // Contador2 inicia en 0
    this.incrementarCont2();
    this.incrementarCont2();
    this.incrementarCont2();
    // Si lees `this.state.contador2` ahora, aún sería 0.
    // Pero cuando React vuelva a renderizar el componente, será 3.
  }

  /**
   * ------------------------------------------------------------------------
   * Cuál es la diferencia entre pasar un objeto o una función en setState?
   * ------------------------------------------------------------------------
   * 
   * Pasar una función de actualización te permite "acceder al valor del estado actual dentro del actualizador". 
   * Dado que las llamadas a setState() son por lotes, esto te permite encadenar actualizaciones y 
   * asegurarte de que se construyan una encima de otra en lugar de generar conflictos: [2]
   * 
   */

  render() {
    return (
      <section className="App-container-component">
        <hr />
        <h2>Forma correcta de manipular el estado</h2>
        <p>Contador 1: {this.state.contador1}</p>
        <p>Contador 2: {this.state.contador2}</p>
      </section>
    );
  }
}

export default SetStateAsynchronous;

/**
 * --------------------------------- 
 * ¿Cuándo setState es asíncrono?
 * ---------------------------------
 * 
 * Actualmente, setState es asíncrono dentro de los controladores de eventos.
 * 
 * Esto garantiza, por ejemplo, que si Parent y Child llaman a setState durante un evento de click, 
 * Child no se renderiza dos veces. En su lugar, React “vacía” las actualizaciones del estado al final del evento del navegador. 
 * Esto se traduce en mejoras significativas de rendimiento en aplicaciones más grandes.
 * 
 * Este es un detalle de implementación, así que evita confiar en él directamente.En las versiones futuras, 
 * React realizará actualizaciones por lotes por defecto en más casos.
 * 
 * ------------------------------------------------------------
 * ¿Por qué React no actualiza this.state de forma sincrónica?
 * ------------------------------------------------------------
 * 
 * Como se explicó en la sección anterior, React intencionalmente “espera” hasta que todos los componentes llamen a 
 * setState() en sus controladores de eventos antes de comenzar a rerenderizar. 
 * Esto aumenta el rendimiento al evitar rerenderizados innecesarios.
 * 
 * Sin embargo, es posible que aún te estés preguntando por qué React no solo actualiza ‘this.state’ 
 * inmediatamente sin volver a renderizar.
 * 
 * Hay dos razones principales:
 * Esto rompería la consistencia entre props y state, causando problemas que son muy difíciles de depurar.
 * Esto haría que algunas de las nuevas funcionalidades en las que estamos trabajando sean imposibles de implementar.
 * 
*/