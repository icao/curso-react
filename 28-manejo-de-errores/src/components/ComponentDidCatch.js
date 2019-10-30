import React, { Component } from "react";

class ButtonLaunchError extends Component {
  //Inicializamos el estado de lanzamiento de error, como falso(sin error)
  state = { throwError: false }

  handleClick = () => {
    this.setState({
      throwError: true //Actualizamos el estado a true, para lanzar el error cuando se renderice de nuevo el componente
    })
  }

  render() { 
    // Si existe un error, entonces mostramos en pantalla el error generado
    if (this.state.throwError) {
      throw new Error('🚀 Error lanzado desde el botón');
    }
    // De otra manera mostramos el componente (botón que origina el error).
    return ( 
      <button onClick={this.handleClick}>
        Lanzar error 
      </button>
     )
  }
}

class ComponentDidCatch extends Component {
  state = { hasError: false, errorMsg: '' }

  /** 
   * error: Objeto con el error
   * info: Stack dodne se origino el error
  */
  componentDidCatch(error, info) {
    console.log('👉-> Error: ', error);
    console.log("👉 -> Info: ", info);
    this.setState({
      hasError: true,
      errorMsg: error.toString()
    })
  }

  handleClick = () => {
    //Actualizamos el estado
    this.setState({
      hasError: false
    })
    // importante: SI QUEREMOS ACTUALIZAR EL ESTADO, es mejor hacer uso de getDerivedStateFromError()
  }

  render() {
    // Si existe un error, avisamos al usuario
    if (this.state.hasError) {
      return (
        <section className="App-container-component-error">
          <h3>Algo salio mal</h3>
          <p>{this.state.errorMsg}</p>
          <button onClick={this.handleClick}>Volver a la aplicación</button>
        </section>
      );
    }
    
    return (
      <section className="App-container-component">
        <h2>componentDidCatch()</h2>
        <ButtonLaunchError />
        {/* AL lanzar el error nos muestra una UI con el nombre del error y la traza, si cerramos el error, nos desmontara los componentes. Este error solo se muestra en el entorno de desarrollo */}
        {/* Para solucionar el problema del desmontaje, lo capturamos con el metodo componentDidCatch() */}
      </section>
    );
  }
}

export default ComponentDidCatch;

/**
 * -----------------------------------
 * componentDidCatch()
 * -----------------------------------
 * Este ciclo de vida se invoca después de que un error haya sido lanzado por un componente descendiente. 
 * Recibe dos parámetros:
 * 1.- error: Es un error que ha sido lanzado.
 * 2.- info: Un objeto con una clave componentStack contiene información sobre que componente ha devuelto un error. 
 * 
 * componentDidCatch() se llama durante la fase 'commit', por lo tanto, LOS EFECTOS SECUNDARIOS SE PERMITEN. Debería utilizarse para cosas como errores de registro.
 * 
 * NOTA: en el evento de un error, puedes renderizar una interfaz de usuario con componentDidCath() 
 * llamando a setState(), pero esto estará obsoleto en una versión futura. Usa static getDerivedStateFromError() para controlar el plan de renderizado.
 * 
 * USA A getDerivedStateFromError PARA ACTUALIZAR EL ESTADO Y NO componentDidCatch
 * 
 */