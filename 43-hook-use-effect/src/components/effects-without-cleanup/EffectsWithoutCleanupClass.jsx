import React, { Component } from 'react'

class EffectsWithoutCleanupClass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  /*
    En los componentes de React con clases, el método render no debería causar efectos secundarios por sí mismo. Sería prematuro. Normalmente queremos llevar a cabo nuestros efectos después de que React haya actualizado el DOM.

    Y es por eso que en las clases de React ponemos los efectos secundarios en componentDidMount y componentDidUpdate. Volviendo a nuestro ejemplo, aquí tenemos el componente clase contador de React que actualiza el título del documento justo después de que React haga cambios en el DOM:
    */

  componentDidMount() {
    // Hacemos un efecto sin saneamiento(que no tenemos que borrar o limpiar porque no es una sucripcion a un event listener)
    document.title = `Has clikeado ${this.state.count} veces` // Este código se repite dos veces
  }
  componentDidUpdate() {
    // Hacemos un efecto sin saneamiento(que no tenemos que borrar o limpiar porque no es una sucripcion a un event listener)
    document.title = `Has clikeado ${this.state.count} veces` // Este código se repite dos veces
  }

  render() {
    return (
      <div>
        <p>
          Has clikeado <strong>{this.state.count}</strong> veces
        </p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Dame Click
        </button>
      </div>
    )
  }
}

export default EffectsWithoutCleanupClass

/*
    Se puede observar cómo se duplica el código en los métodos del ciclo de vida del class component.

    Es to es porque en muchas ocasiones queremos llevar a cabo el mismo efecto secundario sin importar si el componente acaba de montarse o si se ha actualizado.
    Conceptualmente, queremos que ocurra después de cada renderizado, pero las clases de React NO TIENE UN MÉTODO QUE HAGA ESO PODRÍAMOS EXTRAER UN MÉTODO, PERO AÚN ASÍ TENDRÍAMOS QUE LLAMARLO EN LOS DOS SITIOS.
    En cambio con el Hook de useEffect, no pasa esto.
*/
