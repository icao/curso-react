import React from 'react';

const Consumer = () => {
  return <span>Context.Consumer</span>;
}
 
export default Consumer;

/** 
 * ***********************
 * Context.Consumer
 * ***********************
*/

/*
  Un componente de React que se suscribe a cambios de contexto.

  <MiContexto.Consumer>
    {
      value => {//Renderiza algo basado en el valor dle contexto}
    }
  <MiContexto.Consumer />

  
  Esto le permite suscribirse a un contexto dentro de un componente de función. 
  Requiere una función como hijo. La función recibe el valor de contexto actual y devuelve un nodo de React. El argumento 'value' pasado a la función será igual al prop 'value' del 'Provider' MAS CERCANO para este contexto e el árbol. 
  Si no hay un 'Proveedor' superior para este contexto, el argumento 'value' será igual al 'defaultValue' que se pasó a createContext();

*/
