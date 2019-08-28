import React from "react";

/* _____________________________MARCO TEORICO__________________________ */
/**
 * Funciones Puras
 */
/**
 * 1.- Siempre devuelve el mismo resultado para los parametros de entrada,
 *     sin modificarlos. Solo suma dos valores siempre.
 * 2.- La lógica de la función no produce efectos colaterales
 *     fuera de ella.
 */
function sumaPura(a, b) {
  return a + b;
}

/**
 * Funciones Impuras
 */
/**
 * Esta función suma pero no regresa siempre el mismo resultado.
 * No es pura porque adiciona un número aleatorio.
 */
function sumaImpura(a, b) {
  return a + b + Math.random();
}
/**
 * Esta funcion suma pero al hacer uso de una variable externa,
 * modifica el valor de ella misma al retornar el resultado, afectando
 * asi su exterior, en cada ejecusion.
 */
let b = 10;
function otraSumaImpura(a) {
  b = a + b;
  return b;
}

/* __________________________________________________________________ */

const ImmutableComponent = props => {
  //props.title = "Alterando el titulo"; //Error: TypeError: "title" is read-only
  //No se pueden modificar las props en los componentes.
  return (
    <section className="App-content">
      <h2>{props.title}</h2>
      <p>Numero: {props.number}</p>
    </section>
  );
};

/**
 * NOTA IMPORTANMTE:
 * Todos los componentes que hagamos en react, tienen que comportarse
 * y tratarse como una funciòn pura.
 */
export default ImmutableComponent;
