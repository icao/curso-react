import React, { Component } from "react";
import imagen01 from "../imagen01.jpeg";
import imagen02 from "../imagen02.jpeg";
import imagen03 from "../imagen03.jpeg";
import imagen04 from "../imagen04.jpeg";
import imagen05 from "../imagen05.jpeg";

class Father extends Component {
  constructor(props) {
    super(props);
    this.images = [imagen01, imagen02, imagen03, imagen04, imagen05];
    this.indexImages = 0;
    this.state = {
      srcImage: this.images[this.indexImages] //Inicializamos el state con una imagen por default
    };
  }

  handleClick = () => { //Método para cambiar la imagen y actualizarla en el estado
    this.indexImages += 1;
    let currentImage = this.images[this.indexImages];
    if (!currentImage) {
      this.indexImages = 0;
      currentImage = this.images[this.indexImages];
    }
    this.setState({
      srcImage: currentImage
    });
  };

  render() {
    return (
      <section className="App-container-componen-2">
        {/* Llamamos a una instancia de nuestro componente hijo y le pasamos por medio de una prop, la imagen actual que esta en el estado */}
        <GetDerivedStateFromProps srcImage={this.state.srcImage} />
        <button onClick={this.handleClick}>Cambiar imagen</button>
      </section>
    );
  }
}

class GetDerivedStateFromProps extends Component {
  constructor(props) {
    console.log("Constructor Listo ✅");
    super(props);
    // Inicializamos el estado que se renderizará con la prop que envia el componente padre
    this.state = {
      imagen: this.props.srcImage
    };
  }

  // Método que nos dira si la prop asignada al estado ha cambiado
  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.imagen !== nextProps.srcImage) {
      console.log(
        "Actualizando estado con la nueva prop 💫: ",
        nextProps.srcImage
      );
      // Se regresa un objeto obligatoriamente
      return {
        imagen: nextProps.srcImage
      };
      
    }
    // Si no se actualiza la prop que inicializa al estado entonces se regresa null,
    // para notificar que no hay actualización  en la prop
     return null;
  }

  render() {
    console.log("Render Listo ✅");
    return (
      <section className="App-container-component">
        <h2>getDerivedStateFromProps()</h2>
        <img src={this.state.imagen} className="image" alt="imagen" />
      </section>
    );
  }
}

export default Father;

/**
 * ---------------------------------
 * getDerivedStateFromProps()
 * ---------------------------------
 * 
 * 'getDerivedStateFromProps' se invoca justo antes de llamar al método render(). tanto en la montura inicial, como en posteriores. 
 * Debe devolver un objeto para actualizar el estado, o nulo para actualizar nada.
 * 
 * Este método existe para casos de uso raros donde el estado depende de los cambios de las props con el tiempo. 
 * Ver en: https://es.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#when-to-use-derived-state
 * 
 * Existen casos dependiendo del problema que se requiera resolver, la aplicacion de soluciones altrernativas: 
 * https://es.reactjs.org/docs/react-component.html#static-getderivedstatefromprops
 * Lee la documenytación para verificar las mejores soluciones a tu problema.
 * 
 * Este método es estatico, sí, debe de tener el modificador 'static' que indica que este método
 * no esta enlazado a la instancia del componente, si no más bien a su clase. Se invoca despues de
 * instanciar un componente y también cuando el componente recibe cambios en las propiedades.
 * 
 */


/** 
 * ------------------------------------
 * IMPORTANTE!
 * ------------------------------------
 * Recordemos que para renderear información, podemos hacer uso de 
 * statless functional components, o en un class component solo usar las propiedades. 
 * Podemos garantizar el muestreo de la información como se muestra a continuación:
*/
/*
class GetDerivedStateFromProps extends Component {
  constructor(props) {
    console.log("Constructor Listo ✅");
    super(props);
  }
  render() {
    console.log("Render Listo ✅");
    return (
      <section className="App-container-component">
        <h2>getDerivedStateFromProps()</h2>
        <img src={this.props.srcImage} className="image" alt="imagen" />
      </section>
    );
  }
}
*/
/** 
 * Recordemos que solo estamos agregando un estado inicial con las props, para 
 * realizar el ejemplo del método del ciclo de vida getDerivedStateFromProps 
 * El ejemplo es exclusivamente para ese fin, no estamos garantizando la manera mas optima, en dado caso seria hacer un componente funcional sin estado y que solo muestre lo que le llegan en las props.
*/
