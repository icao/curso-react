import React, { Component } from 'react'

class EffectsWithCleanupClass extends Component {
  state = {
    anchoVentana: 0,
    largoVentana: 0,
  }

  componentDidMount() {
    console.log(
      `%c El componente EffectsWithCleanupClass se ha MONTADO, suscripción eventListener Resize`,
      `color: #98fb98`
    )
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
    console.log(
      `%c El listener resize se ha DESMONTADO, haciendo saneamiento(cleanup)`,
      `color: #98fb98; font-weight: bold; font-size: 14px`
    )
  }

  handleResize = () => {
    console.log(
      `%c El tamaño de la ventana es de ${this.state.anchoVentana}px x ${this.state.largoVentana}px`,
      `color: #98fb98`
    )
    this.setState({
      anchoVentana: document.body.clientWidth,
      largoVentana: document.body.clientHeight,
    })
  }

  render() {
    return (
      <div className='card'>
        <p>
          El ancho de la ventana es <strong>{this.state.anchoVentana}px</strong>
        </p>
        <p>
          El largo de la ventana es <strong>{this.state.largoVentana}px</strong>
        </p>
      </div>
    )
  }
}

export default EffectsWithCleanupClass

/*
  En una clase de React, normalmente se establece una suscripcion en 'componentDidMount', y se cancela la suscripcion en 'componentWillUnmount'. Por ejemplo, digamos que tenemos una suscripcion que lee el tamano de nuestro contenedor de la aplicacion.
  Establecemos nuestra suscripcion en el ciclo de vida 'componentDidMount', observamos que es necesario usar 'componentWillUnmount '.Estan vinculados los dos metodos. 
  Fíjate en cómo componentDidMount y componentWillUnmount necesitan ser un reflejo el uno del otro. Los métodos del ciclo de vida nos obligan a separar esta lógica incluso cuando, conceptualmente, el código de ambos está relacionado con el mismo efecto.
*/

/*
Nota

Tambien te puedes percatar de que este ejemplo necesita también un método componentDidUpdate para ser completamente correcto. De momento vamos a ignorar este hecho*/
