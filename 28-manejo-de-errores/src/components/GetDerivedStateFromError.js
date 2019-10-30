import React, { Component } from "react";

class ButtonLaunchError extends Component {
  //Inicializamos el estado de lanzamiento de error, como falso(sin error)
  state = { throwError: false };

  handleClick = () => {
    this.setState({
      throwError: true //Actualizamos el estado a true, para lanzar el error cuando se renderice de nuevo el componente
    });
  };

  render() {
    // Si existe un error, entonces mostramos en pantalla el error generado
    if (this.state.throwError) {
      throw new Error("🚀 Error lanzado desde el botón");
    }
    // De otra manera mostramos el componente (botón que origina el error).
    return <button onClick={this.handleClick}>Lanzar error</button>;
  }
}

class GetDerivedStateFromError extends Component {
  state = { hasError: false, errorMsg: "" };

  static getDerivedStateFromError(error) {
    console.warn("👉 -> getDerivedStateFromError()");
    console.warn("👉 -> Error:", error);
    // Actualiza el state, así el sig, renderizado lo mostrará en la UI
    return { hasError: true };
  }

  /**
   * error: Objeto con el error
   * info: Stack dodne se origino el error
   */
  componentDidCatch(error, info) {
    // podemos mandar a un servicio externo esta info
  }

  handleClick = () => {
    this.setState({
      hasError: false
    });
  };

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
        <h2>getDerivedStateFromError()</h2>
        <ButtonLaunchError />
        {/* AL lanzar el error nos muestra una UI con el nombre del error y la traza, si cerramos el error, nos desmontara los componentes. Este error solo se muestra en el entorno de desarrollo */}
        {/* Para solucionar el problema del desmontaje, lo capturamos con el metodo componentDidCatch() */}
      </section>
    );
  }
}

export default GetDerivedStateFromError;

/**
 * ----------------------------------
 * getDerivedStateFromError()
 * ----------------------------------
 *
 * Este ciclo de vida se invoca después de que un error haya sido lanzado por un componente descendiente.
 * Recibe el error que fue lanzado como parámetro y debe devolver un valor para actualizar el estado.
 *
 * NOTA: getDerivedStateFromError() SE LLAMA DURANTE LA FASE 'RENDER', por lo que los efectos
 * secundarios no estan permitidos. Para estos casos de uso, use componentDidMount() en su lugar.
 */
