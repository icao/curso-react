import React, { Component } from 'react';

export const AppContext = React.createContext({
  usuarios: [],
  titulo: "titulo default"
});

export class AppContextProvider extends Component {
  render() {
    return (
      <div className="App">
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
            {/* componente dinámico hijo */}
            {this.props.children}
          </AppContext.Provider>
        </div>
      </div>
    );
  }
}

export const AppContextConsumer = AppContext.Consumer;