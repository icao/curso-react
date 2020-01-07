import React from "react";
import "./App.css";
import CreateContext from './components/CreateContext'
import ContextProvider from "./components/Provider";
import ContextType from "./components/ContextType";
import Consumer from "./components/Consumer";
import DisplayName from "./components/DisplayName";

function App() {
  return (
    <div className="App">
      <div className="flex__center">
        <h1>Context API</h1>
        <p>
          Context provee una forma de pasar datos a través del árbol de
          componentes sin tener que pasar props manualmente en cada nivel.
        </p>
        <ul>
          API
          <li><CreateContext /></li>
          <li><ContextProvider /></li>
          <li><ContextType /></li>
          <li><Consumer /></li>
          <li><DisplayName /></li>
        </ul>
      </div>
    </div>
  );
}

export default App;

/**
 * Context API
 * ________________________________________
 */

/*
  Context provee una forma de pasar datos a través del árbol de componentes sin tener que pasar props manualmente en cada nivel.

  En una aplicación típica de React, los datos se pasan de arriba hacia abajo (de padre a hijo) a través de props, pero esto puede ser complicado para ciertos tipos de props (por ejemplo, localización, el tema de la interfaz) que son necesarios para muchos componentes dentro de una aplicación. Context proporciona una forma de compartir valores como estos entre componentes sin tener que pasar explícitamente un prop a través de cada nivel del árbol.
*/

/**
 * Cuándo usar Context?
 */
/*
  Context está diseñado para compartir datos que pueden considerarse “globales” para un árbol de componentes en React, como el usuario autenticado actual, el tema o el idioma preferido. Por ejemplo, en el código a continuación, pasamos manualmente un prop de “tema” para darle estilo al componente Button:
  class App extends React.Component {
    render() {
      return <Toolbar theme="dark" />;
    }
  }

  function Toolbar(props) {
    // El componente Toolbar debe tener un prop adicional "theme"
    // y pasarlo a ThemedButton. Esto puede llegar a ser trabajoso
    // si cada botón en la aplicación necesita saber el tema,
    // porque tendría que pasar a través de todos los componentes.
    return (
      <div>
        <ThemedButton theme={props.theme} />
      </div>
    );
  }

  class ThemedButton extends React.Component {
    render() {
      return <Button theme={this.props.theme} />;
    }
  }
 */

/*
  Usando Context podemos evitar pasar props a través de elementos intermedios:

  // Context nos permite pasar un valor a lo profundo del árbol de componentes
  // sin pasarlo explícitamente a través de cada componente.
  // Crear un Context para el tema actual (con "light" como valor predeterminado).
  const ThemeContext = React.createContext('light'); 

  class App extends React.Component {
    render() {
      // Usa un Provider para pasar el tema actual al árbol de abajo.
      // Cualquier componente puede leerlo, sin importar qué tan profundo se encuentre.
      // En este ejemplo, estamos pasando "dark" como valor actual.
      return (
        <ThemeContext.Provider value="dark">
          <Toolbar />
        </ThemeContext.Provider>
      );
    }
  }

  // Un componente en el medio no tiene que
  // pasar el tema hacia abajo explícitamente.
  function Toolbar(props) {
    return (
      <div>
        <ThemedButton />
      </div>
    );
  }

  class ThemedButton extends React.Component {
    // Asigna un contextType para leer el contexto del tema actual.
    // React encontrará el Provider superior más cercano y usará su valor.
    // En este ejemplo, el tema actual es "dark".
    static contextType = ThemeContext;
    render() {
      return <Button theme={this.context} />;
    }
  }
 */

/**
 * Con Context nos ahorramos varias lineas de código y evitamos pasar las propiedades manualmente a cada componente padre anidado del ultimo hijo que las usara.
 *
 * La desventaja de usar Context es que es mas complicado y a la larga puede el proyecto ser mas enredado, mas confuso.
 * Por lo que si tenemos componentes de 3 anidaciones podemos seguir usando las propiedades como se han venido manejando.
 */
