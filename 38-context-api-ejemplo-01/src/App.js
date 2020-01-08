import React, { Component } from "react";
import "./App.css";

// 1.- CREAMO EL CONTEXTO
const AppContext = React.createContext({
  usuarios: [],
  titulo: "titulo default"
});

//2.- PROVEEMOS LAS PROPIEDADES MEDIANTE EL COMPONENTE PROVIDER QUE EXTIENDE DEL OBJETO CONTEXT
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Context API</h1>
        <div className="grandpa">
          <h2>
            <span role="img" aria-label="sheep">
              👴
            </span>
            Abuelo
          </h2>
          <p className="italic">Creando Context y disponiendo el Provider</p>
          <AppContext.Provider
            value={{
              usuarios: ["ramona", "billy", "rufus"],
              titulo: "Ejemplo Context API"
            }}
          >
            {/* componente hijo */}
            <Test />
          </AppContext.Provider>
        </div>
      </div>
    );
  }
}

export default App;

class Test extends Component {
  render() {
    return (
      <div className="father">
        <h2>
          <span role="img" aria-label="sheep">
            👨
          </span>
          Papá
        </h2>
        <Lista />
      </div>
    );
  }
}

//3.- NOS SUSCRIBIMOS AL CONTEXTO POR MEDIO DEL COMPONENTE CONSUMER, Y ACCEDEMOS A LOS DATOS
class Lista extends Component {
  render() {
    return (
      <div className="children">
        <h2>
          <span role="img" aria-label="sheep">
            👦
          </span>
          Hijo
        </h2>
        <p className="italic">Suscripción al Provider con el Consumer</p>
        <AppContext.Consumer>
          {value => { //La funsión dentro del consumer nos permite accesar a toda las propiedades del contexto
            return (
              <ol>
                {value.usuarios.map((usuario, index) => (
                  <li key={index}>{usuario}</li>
                ))}
              </ol>
            );
          }}
        </AppContext.Consumer>
      </div>
    );
  }
}
