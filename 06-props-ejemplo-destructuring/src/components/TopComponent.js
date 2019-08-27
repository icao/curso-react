import React from "react";

/**
 * Como se hace comunmente en la forma normal,
 * esta bien si se deja así, pero tambien se puede usar
 * o manejar de otra forma las propiedades.
 * Esto es con el uso del Destructuring de ES6.
 * Destructurar las propiedades.
 */
/*
// Paso de propiedades de forma normal
const TopComponent = (props) => {
  return (
    <section className="Container-component-center">
      <h2>{props.title}</h2>
      <img
        src={props.urlImage}
        className="App-image"
        alt="batman_image"
      />
      <p>Numer of components: {props.number}</p>
    </section>
  );
};
*/

// Pasando propiedades destructurando el objeto props.
const TopComponent = ({ title, urlImage, number }) => {
  return (
    <section className="Container-component-center">
      <h2>{title}</h2>
      <img src={urlImage} className="App-image" alt="destructuring_image" />
      <br />
      <br />
      <p>Number of components: {number}</p>
    </section>
  );
};

export default TopComponent;

/**
 * Destructuring Props
 * Al usar las propiedades que entran al componente,
 * podemos simplificar la manera de usarlos, pasandolos
 * como un objeto destructurado en la función.
 * Así tenemos un componente mas claro de leer.
 *
 * Nota: Es importante recordar que con la Destructuración,
 * accedemos/extraemos los valores del objeto por medio de su key.
 * No se asignan nombres para cada elemento como se aplica en los
 * arreglos.
 */
