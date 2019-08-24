import React from "react";

function PropsFunction(propiedades) {
  console.log(propiedades);
  let existencia = propiedades.boleano ? "Existe" : "No Existe";
  let existenciaOtro = propiedades.boleanoOtro ? "Verdadero" : "Falso";
  return (
    <div className="Container-function">
      <section className="Section-props">
        <h1>Functional Component</h1>
        <ul>
          <li>Cadena: {propiedades.cadena}</li>
          <li>
            <strong>Cadena: {propiedades.cadenaOtro}</strong>
          </li>
          <li>Número: {propiedades.numero}</li>
          <li>
            <strong>Número: {propiedades.numeroOtro}</strong>
          </li>
          <li>Arreglo: {propiedades.arreglo.join(", ")}</li>
          <li>
            <strong>Arreglo: {propiedades.arregloOtro.join(",  ")}</strong>
          </li>
          <li>Objeto Tarea: {propiedades.objeto.tarea}</li>
          <li>Objeto Prioridad: {propiedades.objeto.prioridad}</li>
          <li>Objeto Categoría: {propiedades.objeto.categoria}</li>
          <li>
            <strong>Objeto Tarea: {propiedades.objetoOtro.key}</strong>
          </li>
          <li>Booleano: {existencia}</li>
          <li>
            <strong>Booleano: {existenciaOtro}</strong>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default PropsFunction;

/** 
 * En un Functional Component
 * Las propiedades se pasan con un parametro a nustro componente,
 * este traera consigo a un objeto con las propiedades, y que podemos 
 * acceder a los valores, haciendo uso de la notación punto.
 * Previamente tenemos que saber que propiedades estan siendo pasadas,
 * ya sea viendo la instancia del componente y que parametros son enviados,
 * o en su defecto imprimir el objeto de entrada y verificar que datos vienen.
 * para ser nombrados de la manera correcta.
 * 
 * El objeto con las propiedades que es pasado como argumento,
 * se puede llamar con cualquier nombre, en este caso se llama 'propiedades',
 * aunque por convención es mejor usar la palabra 'props'.
*/