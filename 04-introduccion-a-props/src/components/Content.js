import React from "react";

const Content = props => {
  console.log(props); // props es un objeto de propiedades
  console.log(props.array);
  return (
    <div className="App-content">
      <img src={props.photo} alt="batman_image" />
      <h2>{props.name}</h2>
      <p className="App-content-resume">{props.resume}</p>
    </div>
  );
};

export default Content;

/**
 * El componente recibe las props mediante un parámetro que se le pasa
 * a la funcion.
 * Este parametro puede ser nombrado de cualquier forma, pero de preferencia
 * se identifica con el nombre de "props", y se accede a este via notación punto, 
 * porque el parámetro es un objeto que contiene todas las propiedades.
 * De igual forma que siempre en react los valores se interpolan con {}
 */
