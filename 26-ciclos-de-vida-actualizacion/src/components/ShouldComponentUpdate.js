import React, { Component } from "react";
import imagen01 from "../imagen01.jpeg";
import imagen02 from "../imagen02.jpeg";
import imagen03 from "../imagen03.jpeg";
import imagen04 from "../imagen04.jpeg";
import imagen05 from "../imagen05.jpeg";

class Father extends Component {
  constructor(props) {
    super(props);
    this.images = [
      imagen01,
      imagen01,
      imagen01,
      imagen01,
      imagen02,
      imagen03,
      imagen04,
      imagen05
    ];
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
      <section className="App-container-component-2">
        {/* Llamamos a una instancia de nuestro componente hijo y le pasamos por medio de una prop, la imagen actual que esta en el estado */}
        <ShouldComponentUpdate srcImage={this.state.srcImage} />
        <button onClick={this.handleClick}>Cambiar imagen</button>
      </section>
    );
  }
}


class ShouldComponentUpdate extends Component {
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
        "Actualizando estado con la nueva prop 💫 ",
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
  /**
   * @params Object nextProps Listado de las nuevas props.
   * @params Object nextState Listado de de los nuevos estados.
   */
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate() nextProps -> ", nextProps);
    console.log("shouldComponentUpdate() nextState -> ", nextState);
    
    if (nextState.imagen === this.state.imagen) {
      // Si el siguiente estado es igual al actual
      console.log("No cambio el estado, no render 🛑");
      return false; // No renderices de nuevo
    } else {
      // Si son diferentes
      console.log("El sig estado es diferente al actual, renderizando... ♻");
      return true; // Renderiza de nuevo el componente
    }

    /*
    // En este caso igual podemos evaluar las props, peor no es necesario porque es lo mismo que el state
    if (nextProps.srcImage === this.props.srcImage) {
      // Si el siguiente estado es igual al actual
      console.log("No cambio la prop, no render 🛑");
      return false; // No renderices de nuevo
    } else {
      // Si son diferentes
      console.log("La sig prop es diferente al actual, renderizando... ♻");
      return true; // Renderiza de nuevo el componente
    }
    */
  }

  /**
   * Siguiendo el ejemplo donde pasabamos del componente <Father />, props al state de
   * <ShouldComponentUpdate/>, para renderizar la imagen.
   * Implementamos el método shouldComponentUpdate()
   * En este caso sabemos que a nuestro método le llegan dos parametros(nextProps, nextState),
   * en este caso optamos solo por validar el estado, no las propiedades ya que el ejemplo no lo requiere.
   *
   * Si nuestro estado no cambia entonces no rendereamos de nuevo, caso contrario volvemos a renderizar.
   *
   * NOTA: No validamos nextProps porque no es necesario, ya que siempre va a cambiar nuestras props, si fuese el caso podremos hacer igual la validacion. Nos centramos en el ejemplo solo en el state, ya que el estado y las props son las mismas en este componente.
   *
   * Cabe mencionar que si tenemos un hijo dentro del componente <ShouldComponentUpdate />,
   * este tendria una alta posibilidad de que deje de funcionar. 
   * Por eso no es buena idea usar este componente siemrpe que querramis prevenir un render,
   * solo en casos dodne sea indispensable una optimización. En este caso es mas aconsejable
   * usar el PureComponent en vez de Component, ya que este esta optimizado para este tipo de
   * situaciones.
   * 
   */

  render() {
    console.log("Render Listo ✅");
    return (
      <section className="App-container-component">
        <h2>shouldComponentUpdate()</h2>
        <img src={this.state.imagen} className="image" alt="imagen" />
      </section>
    );
  }
}

export default Father;

/** 
 * -----------------------------
 * shouldComponentUpdate()
 * -----------------------------
 * 
 * Este mmétodo se ejecuta para decidir si los cambios en las PROPS o STATE merecen que se 
 * vuelva a renderizar el componente con los nuevos datos. 
 *  
 * Usa shouldComponentUpdate() para avisar a React si la salida de un componente no se ve afectada
 * por el cambio actual en el estado o las props. 
 * El comportamiento predeterminado es volver a procesar cada cambio de estado y, en la gran
 * mayoria de los casos, debe confiar en el comportamiento predeterminado.
 * 
 * shouldComponentUpdate() es incocado antes de renderizar cuando las nuevas props o estado
 * están siendo recibídos. Por defecto es TRUE.
 * Esre método no es llamado para el renderizado inicial o cuando forceUpdate() es usado. 
 * 
 * NOTA: Este método solo existe como OPTIMIZACIÓN DE RENDIMIENTO. No confíes en él para "prevenir"
 * un renderizado, ya que esto puede conducir a errores. CONSIDERE USAR EL COMPONENTE INTEGRADO
 * PURECOMPONENT(https://es.reactjs.org/docs/react-api.html#reactpurecomponent) en lugar de escribir
 * shouldComponentUpdate() a mano. 
 * IMPORTANTE: PureComponent realiza una comparación superficial de props y estado, y reduce la posibilidad
 * de saltar una actualización necesaria.
 * 
 * Si estás seguro de querer escribirlo a mano, puedes comparar 'this.ptops' con 'nextProps' y
 * 'this.state' con 'nextState' y devolver 'false' para indicar a React que se puede omitir la
 * actualización. 
 * Devolver 'false' no previene a los componentes hijos de volverse a renderizar cuando su estado cambia. 
 * 
 * NO RECOMENDAMOS realizar comprobaciones de igualdad profundas ni utilizar 'JSON.stringify()' en shouldComponentUpdate(). Es muy ineficiente y dañará el rendimiento. 
 * 
 * Actualmente, si shouldComponentUpdate() devuelve 'false' entonces compoentWillUpdate(), render(), y componentdidUpdate() no serán invocados. Ten en cuenta que en el furuto 
 * REACT PUEDE TRATAR A shouldComponentUpdate() como una sugerencia en lugar de una directiva estricta, 
 * y devolver 'false' puede aun dar como resultado una nueva renderización del compoente.
 * 
*/

