import React, { Component, Fragment } from "react";

class RenderListComponent extends Component {
  render() {
    const numeros = [5, 6, 8, 4, 6, 6, 6];
    const playeras = [
      {id: 'de45f4dfs7fa8a88adf', marca:'levis', talla:'mediana'},
      {id: 'ds45f4dd98d65a88adf', marca:'american eagle', talla:'mediana'},
      {id: '98sdf56sd7fa8a88adf', marca:'zara', talla:'mediana'},
      {id: 'r9w8a9df8dfdfa88adf', marca:'H&M', talla:'mediana'}
    ]
    return (
      <Fragment>
        <section className="App-container-list-players">
          <h2>Renderizacion de listas - arreglo</h2>
          {/* {numeros.map(numero => {
          // Esto nos renderiza la lista, pero nos provoca un
          // Warning: Each child in a list should have a unique "key" prop.
          return <p>Soy el numero: {numero}</p>;
        })} */}
          {/* ---------------------------------------------------------------------- */}
          {/* Para que React renderice de la forma correcta, nos pide una llave
        unica para cada elemento, en este caso hacemos uso del index del
        array, y se lo pasamos como propiedad al parrafo. */}
          {numeros.map((numero, index) => {
            // Pasamos como parametro a index y lo usamos como parametro de la key
            return <p key={index}>Soy el numero: {numero}</p>;
            // Es importante tener una llave porque asi react sabe identificar cada elemento en la UI
          })}
        </section>
        <section className="App-container-list-players">
          <h2>Renderizacion de listas - objetos</h2>
          {/* En el caso de los objetos se aplica la misma condicion con la key unica */}
          <ul>
            {playeras.map(playera => {
              return (
                <li key={playera.id}>
                  Playera {playera.marca} - {playera.talla}
                </li>
              );
            })}
          </ul>
        </section>
      </Fragment>
    );
  }
}

export default RenderListComponent;

/** 
 * En React no se cuenta con alguna directiva o método que nos brinde propiamente,
 * esto lo hacemos via ES6.
 * En la renderización de listas en react se usa el método map(), para recorrer cada elemento y 
 * renderizar la lista.
 * Es importante siempre incluir una key como propiedad en cada elemento.
*/
