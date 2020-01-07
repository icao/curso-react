import React from 'react';
import ContextType from './ContextType';

const ContextProvider = () => {
  return <span>Context.Provider</span>;
};
 
export default ContextProvider;

/** 
 * ***********************
 * ContextType.Provider
 * ***********************
*/

 // <MiContexto.Provider value={/*algún valor*/}> 

/*
  Cada objeto Context viene con un componente 'Provider' de React que permite que los componentes que lo consumen se suscriban a los cambios del contexto.

  Acepta un prop 'value' que se pasará a los componentes consumidores que son descendientes de este 'Provider'. 
  Un 'Provider' puede estar conectado a muchos consumidores.
  Los 'Providers' pueden estar anidados PARA SOBREESCRIBIR los valores más profundos dentro del árbol.

  TODOS LOS CONSUMIDORES que son descendientes de un 'Provider' SE VUELVEN A RENDERIZAR cada vez que CAMBIA EL PROP VALUE del PROVIDER. 

  La propagación del 'Provider' a sus consumidores descendientes(incluyendo .contextType y useContext) no está sujeta al método shouldComponentUpdate, por lo que EL CONSUMIDOR SE ACTUALIZA INCLUSO CUANDO UN COMPONENTE PADRE EVITA LA ACTUALIZACIÓN. 

  Los cambios se determinan comparando los valores nuevos y antigupos utilizando el mismo algoritmo que Object.is

  NOTA: La forma en que se detemrinan los cambios puede causar algunos problemas al pasar objetos como value: mira las advertencias
*/

/** 
 * ☢ ADVERTENCIAS ☢
*/
/*
  Debido a que 'Context' usa la identidad por referencia para detemrinar cuándo se debe volver a renderizar, hay algunos errores que podrían provocar renderizados involuntarios en los consumidores cuando se vuelven a renderizar en el padre del proveedor. Por ejemplo, el coódigo a continuación volverá a renderizar a todos los ocnsumidores cada vez que el 'Proveedor' se vuelva a renderizar porque siempre se crea un nuevo objeto 'value':

  class App extends React.Component {
    render() {
      return (
        <Provider value={{something: 'something'}}>
          <Toolbar />
        </Provider>
      );
    }
  }

  Para evitar esto, LEVANTA EL VALOR AL ESTADO DEL PADRE:

  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: {something: 'something'}, //declaramos el objeto en el state
      };
    }

    render() {
      return (
        <Provider value={this.state.value}> //le pasamos el objeto desde el state
          <Toolbar />
        </Provider>
      );
    }
  }
*/