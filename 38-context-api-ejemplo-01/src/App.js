import React, { Component } from "react";
import "./App.css";

const AppContext = React.createContext({
  usuarios: [],
  titulo: "titulo default"
});

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
          {value => {
            return (
              <ul>
                {value.usuarios.map(usuario => (
                  <li>{usuario}</li>
                ))}
              </ul>
            );
          }}
        </AppContext.Consumer>
      </div>
    );
  }
}

// export default Lista;
