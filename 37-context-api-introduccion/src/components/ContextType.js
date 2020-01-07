import React from 'react'

const ContextType = () => {
  return <span>Class.contextType</span>;
}

export default ContextType;

/** 
 * ***********************
 * Class.contextType
 * ***********************
*/

/*
  class MiClase extends React.Component {
    componentDidMount() {
      let value = this.context;
      // realiza un efecto secundario en el montaje utilizando el valor de MiContexto 
    }

    componentDidUpdate() {
      let value = this.context;
      // *** our code 
    }

    componentWillUnmount() {
      let value = this.context;
      // our code
    }

    render() {
      let value = this.context;
      // renderiza algo basado en el valor de MiContexto 
    }

  }

  MiClase.contextType = MiContexto;


  A la propiedad 'contextType' en una clase se le puede asignar un objeto Context creado por 'React.createContext(). 
  Esto te permite consumir el valor actual más cercano de ese Context utilizando 'this.context'.
  Puedes hacer referencia a esto en cualquiera de los métodos del ciclo de vida, incluida la función de renderizado.

  NOTA: Solo puedes suscribirte a un solo Context usando esta API. Si necesitas leer más de una, lee Consumir múltiples Context("https://es.reactjs.org/docs/context.html#consuming-multiple-contexts")

  Si estas usando la sintaxis experimental de campos de clase pública puedes usar un campo de clase 'static' para inicializar tu 'contextType'

  class MiClase extends React.Component {
    static contextType = MiContexto; // declaramos con static como una propiedad de la clase
    render() {
      let value = this.context;
      // renderiza algo basado en el valor
    }
  }

*/
