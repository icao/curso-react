import React, { Component } from 'react';

class IntroComponentesControlados extends Component{
  render() {
    return (
      <section className="App-container-component">
        <h1>Componentes controlados</h1>
      </section>
    )
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
 * En HTML, los elementos de formularios como los <input>,<textarea> y el <select> normalmente 'mantienen sus propios estados' y 'los actualizan de acuerdo a la interacción del usuario'. 
 * En React, el estado mutable es mantenido normalmente en la propiedad estado de los componentes,
 * y solo se actualiza con setState() como ya hemos visto. 
 * 
 * Podemos combinar ambos haciendo que el estado de React sea la 'única fuente de la verdad', De esta
 * manera, los componentes React que rendericen un formulario también controlan lo que pasa en ese formulario con las subsecuentes entradas del usuario. "Un campo de formulario cuyos valores son controlados por React" de esta forma es denominado "componente controlado". 
 * 
*/