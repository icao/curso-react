import React, { Component, Fragment } from 'react';
import image from '../imagen01.jpeg'

class OtherComponent extends Component{
  render() {
    return (
      <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nihil natus aut obcaecati ratione iste, provident reiciendis neque laboriosam, delectus nulla hic eveniet eius aliquid nesciunt officiis. Architecto, vero labore?</p>
    )
  }
}

class Render extends Component{
  constructor(props) {
    console.log('Constructor Listo ✅');
    super(props)
    this.state = {
      mensaje: 'Mensaje cambiado'
    }
  }

  render() {
    console.log("Render Listo ✅");
    return (
      // Podemos hacer uso de un <Fragment> para renderear varios elementos sin un envoltorio
      // que se refleje en el DOM
      <Fragment>
        <section className="App-container-component">
          <h2>render()</h2>
          {/* Pasar propiedades, variables o estados */}
          <h4>{this.state.mensaje}</h4>
          <img src={image} className="image" alt="imagen" />
          {/* //Podemos instanciar otros componentes */}
          <OtherComponent />
        </section>
        {/* Podemos hacer uso del renderizado condicional, en este caso devuelve null */}
        {this.state.mensaje === 'Mensaje inicial' ? <p>Si es el mensaje</p> : null}
      </Fragment>
    );
    // return null // Podemos no regresar nada, esto tiene otros usos en algunas implementaciones, por lo que tiene sentido
  }
}

export default Render;

/**
 * El método render() es el único elemento obligatorio requerido en la clase
 * para que nuestro componente pueda funcionar.
 * 
 * Cundo se llama, debe examinar a this.props y this.state y devolver uno de los siguientes  tipos:
 * 
 *  - Elementos de React: Normalmente creados atravez de JSX. Por ejemplo,
 * <div /> y <MyComponent /> son elementos de react que enseñan a react a renderizar
 * un nodo DOM, u otro componente definido por el usuario respectivamente.
 *  - Array y Fragmentos: Permiten que se pueda devolver multioples elementos desde el render.
 * -  Portales: Permiten renderizarhijos en otro subárbol del DOM.
 * -  Strings y Números: Son renderizados como nodos de texto em el DOM.
 * -  Boleanos o Nulos: No renderizan nada. (Principalmente existen para admitir el patrón return test && <Child />, donde test es booleano).
 *    Tambien es usado para renderizado condicional. Regresar un null indica que no renderizará nada.
 * 
 * El método render() Se debe de encargar solo de trnasformar nuestro state o props en una 
 * representación visual en la aplicación, evitar operaciones y transformaciones en este método,
 * ya que perjudicara a la performance de nuestra aplicación.
 * 
 * La función render() DEBE SER PURA , lo que significa que no modifica el estado del componente,
 * devuelve el mismo resultado cada vez que se invoca y no interactua directamente con el navegador.
 * 
 * Si se necesita interactuar con el DOM, se tiene que realizar ese trabajo en otro método de ciclo de vida como componentDidMount(). 
 * Mantener render() puro, hace que los componentes sean mas fáciles de considerar.
 * 
 * IMPORTANTE: render() no será invocado si shouldComponentUpdate() devuelve falso.
 * 
*/