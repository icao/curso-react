import React, { Component } from 'react';
import {
  AppContextConsumer
} from "../contexts/AppContext"; 

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
        <AppContextConsumer>
          {value => {
            //La funsión dentro del consumer nos permite accesar a toda las propiedades del contexto
            return (
              <ol>
                {value.usuarios.map((usuario, index) => (
                  <li key={index}>{usuario}</li>
                ))}
              </ol>
            );
          }}
        </AppContextConsumer>
      </div>
    );
  }
}

export default Lista;