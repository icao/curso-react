import React from "react";

/*
function FunctionalComponent() {
    return (
        <h2>
            I am a Functional Component 
            <span role="img" aria-label="cool face"> 😎 </span>
        </h2>
  )
}
*/

/**
 * Un Functional component tambien es conocido como Statless Functional Component.
 * Acontinuación pasamos el conponente FunctionalComponent a otra sintaxis.
 * Un statless functional component no tiene estados.
 */

const FunctionalComponent = () => {
    // NOTA: Sin importar si impotamos el archivo de estilos, el compenente se vera afectado,
    // Ya que es hijo de un componente padre que si contiene esos estilos.
    return (
        <div className="App-header"> 
            <h2>
                I am a Functional Component / Statless Functional Component
            <span role="img" aria-label="cool face"> 😎 </span>
            </h2>
        </div>
     )
 }



export default FunctionalComponent;
