import React from 'react';
import ContextType from './ContextType';
const CreateContext = () => {
  return <span>React.createContext</span>;
}
 
export default CreateContext;


/** 
 * ***********************
 * React.createContext
 * ***********************
*/

/*
const MiContexto = React.createContext(defaultValue) // Crea un Objeto Context

Cuando React renderiza un componente que se suscribe a este objeto Context, este leerá el valor de contexto actual del "Provider" más cercano a el árbol. 

El argumento 'defaultValue' es usado ÚNICAMENTE CUANDO UN COMPONENTE NO TIENE UN 'PROVIDER' superior a él en el árbol.Esto puede ser útil para probar componentes de forma aislada sin contenerlos. 

NOTA: Pasar 'undefinded' como valor al 'Provider' no hace que los componentes que lo consumen utilicen 'defaultValue'. Por lo que tenemos que pasar un valor al 'Provider' o no pasarle nada.
*/