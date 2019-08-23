import React from "react";

function PropsFunction(props) {
  console.log(props);
  let existencia = props.boleano ? "Existe" : "No Existe";
  return (
    <div className="Container-function">
      <h1>Hola Props desde Functional Component</h1>
      <section>
        <ol>
          <li>Cadena: {props.cadena}</li>
          <li>Número: {props.numero}</li>
          <li>Arreglo: {props.areglo}</li>
          <li>Objeto Tarea: {props.objeto.tarea}</li>
          <li>Objeto Prioridad: {props.objeto.prioridad}</li>
          <li>Objeto Categoría: {props.objeto.categoria}</li>
          <li>Booleano: {existencia}</li>
          TODO: Agregar los demas valores en duro y hacer todo esto con en class
          component
        </ol>
      </section>
    </div>
  );
}

export default PropsFunction;
