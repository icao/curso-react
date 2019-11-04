import React from 'react';

const ChildOne = ({ count }) => { //Destructuramos la prop 'count'
  return (
    <section className="App-container-component-2">
      <h4>Hijo</h4>
      <p>
        Contador: <strong>{count}</strong>
      </p>
    </section>
  );
};
 
export default ChildOne;

/** 
 * En el hijo, usamos un stateless functional component,
 * ya que no requerimos de ningún estado, solo pintamos la información que nos llega en nuestro componente
*/