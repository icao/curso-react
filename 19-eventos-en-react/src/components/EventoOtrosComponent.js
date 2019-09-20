import React, { Component } from "react";

class EventoOtrosComponent extends Component {
  state = {
    distanceX: 0,
    distanceY: 0
  };

  constructor() {
    super()
    // Este enlace es necesario para hacer que `this` funcione en el callback
    this.calculatePosition = this.calculatePosition.bind(this);
  }

  /**
   * [Ejemplo 100]
   * Si nosotros intentaramos capturar el evento de la misma forma que hemos hecho desde siempre
   * calculatePosition(evento) { // Codigo  } y deseamos modificar el estado.
   * Al momento de llamar this.setState() será indefinido, por lo que no podremos acceder al método.
   * Ya que las clases no crean/ligan ninguna conexión por defecto.
   */

  calculatePosition(evento) {
    // Destructuramos el evento que se captura y accedemos a clientX y clientY
    const { clientX, clientY } = evento;
    console.log(`ClientX ${clientX}, ClientY ${clientY}`);
    this.setState(() => { // setState = undefined
      return {
        distanceX: clientX,
        distanceY: clientY
      };
    });
  }

  

  render() {
    return (
      <section className="App-container-component">
        <h2>Soy un evento Otro</h2>
        <p
          className="App-contenedor-parrafo"
          // Si pasamos this.calculatePosition sin (),
          // this será undefined al momento de llamarlo en la función
          onMouseMove={this.calculatePosition}
          // Ejemplo[1]
          // onMouseMove={this.calculatePosition.bind(this)}
          // Ejemplo[3.2]
          // onMouseMove={(e) =>{this.calculatePosition(e)}}
        >
          {this.state.distanceX},{this.state.distanceY}
        </p>
      </section>
    );
  }
}

export default EventoOtrosComponent;

/**
 * Eventos soportados
 *
 * Revisar la documentación en : https://es.reactjs.org/docs/events.html#supported-events
 *
 * Aparte de onClick, tenemos mas eventos que son capturados en react.
 * Uno de ellos es onMouseMove, que podemos ver en el ejemplo: EventoOtrosComponent.js
 * 
 * ----------------------------------------------------------------------------------
 * 
 * Tenemos que tener cuidado en cuanto al significado de THIS en los callbacks de JSX. 
 * En JavaScript, "los métodos de clase no están ligados por defecto". 
 * Si se olvida ligar 'this.calculatePosition' y se pasa a 'onMouseMove', THIS será UNDEFINED cuando se llame la función. [Ejemplo 100]
 * 
 * Esto no es un comportamineto de React; esto hace parte de como operan las funciones en JavaScript. 
 * Generalmente, si se refiere un método sin usar () después de este, tal como onMouseMove={this.calculatePosition},
 * se debería ligar ese método.
 * 
 * Cuando invocamos una función como lo hicimos anteriormente onMouseMove={this.calculatePosition},
 * this, normalmente tendría un valor 'undefined', ya que las clases no crean ninguna conexion(bind)
 * por defecto.
 * 
 * Para solucionar este problema, tenemos que ligar a this, para esto existen 3 formas para resolverlo:
 * 
 * 1.- Ligar/conectar a this usando el método bind() dentro del método render()
 * ``` Ejemplo[1]
 *    onMouseMove={this.calculatePosition.bind(this)}
 * ```
 * Lo que hacemos es devolver el mismo método pero con el contexto correcto.
 * Esta opción es clara, el problema es que afecta al rendimiento, ya que la función es reasignada
 * cada vez que se renderiza el componente.
 * 
 * 2.- Ligar/conectar a this usando el método bind() dentro del método constructor()
 * ``` Ejemplo[2]
 *  constructor() {
 *   super()
 *   this.calculatePosition = this.calculatePosition.bind(this);
 *  }
 * ```
 * Hacemos lo mismo de bindear a this, pero incluyendo la función desde el método constructor.
 * Sacrificamos la claridad pero mejoramos el rendimiento. Apesar de ser una buena opción,
 * a largo plazo si usamos muchas funciones, tendremos varias lineas donde bindeamos a this.
 * 
 * 3.- Uso de las arrow function(Campos publicos de clase, arrow function en el render)
 *  - Campos publicos de clase:
 * ```Ejemplo[3.1]
 *  calculatePosition = (evento) => { // Codigo }
 * ```
 * Esta sintaxis nos asegura que 'this' está ligado dentro de calculatePosition.
 * Esta opción es la mas recomendada dada su claridad y sintesis en cuanto a código.
 * Pero en la documentación de react especifican que es una sintaxis experimental.
 * 
 * Si es molesto usar varias veces bind, es la mejor opción(despues del ejemplo[2]) para ligar a this
 * aun siendo experimental.
 * 
 * - Función flecha en el render
 * ```Ejemplo[3.2]
 *  onMouseMove={(e) =>{this.calculatePosition(e)}}
 * ```
 * El problema con esta sintaxis es que el callback es creado cada vez que el componente es renderizado.
 * El mismo problema que en el ejemplo[1]
 * En la mayoría de los casos, esto está bien. Sin embargo, si este callback se pasa como una propiedad
 * a componentes mas bajos, estos ocmponentes podrían renderizarse nuevamente.
 * Generalmente, se recomienda ligar en el constructor o usar la sintaxis de campos de clases(Ejemplo[2])
 * para evitar esta clase de problemas de rendimiento.
 * 
 * ---------------------------------------------------------------------------------------------------
 * 
 * En Resumen:
 * La mejor opción para ligar a this al contexto de nuestras funciónes es:
 *  * Bindear la función en el método contructor(Ejemplo[2])
 *  * Hacer uso de los campos de clase(Arrow function - Ejemplo[3.1])
 *  Depende de nosotros la decisión.
 */
