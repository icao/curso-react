import React from 'react';

const DisplayName = () => {
  return <span>Context.displayName</span>;
}
 
export default DisplayName;

/** 
 * ***********************
 * Context.displayName
 * ***********************
*/

/*
  El objeto Context acepta una propiedad de cadena de texto 'displayName'. Las herramientas de desarrollo de React utilizan esta cadena de texto para determinar que mostrar para el Context. 

  Por ejemplo, el componente a continuación aparecerá como "NombreAMostrar" en las herramientas de desarrollo: 
  
  const MiContexto = React.createContext('AlgunValor)

  MiContexto.displayName = "NombreAMostrar";

  <MiContexto.Provide> //"NombreAMostrar.Provider" en las herramientas de desarrollo

  <MiContexto.Consumer> //"NombreAMostrar.Consumer" en las herramientas de desarrollo
    
*/
