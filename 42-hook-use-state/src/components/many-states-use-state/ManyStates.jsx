import React, { useState } from 'react'

const ManyStates = () => {
  const [theme, setTheme] = useState({
    contrast: 0,
    color: 'blue',
  })

  function increment() {
    // setTheme(() => {
    //   return {contrast: theme.contrast + 1} // Se modifica todo el contenido de nuestro objeto (estado) theme
    // })

    // Solucion
    setTheme(() => {
      return {
        ...theme, // Creamos una copia y combinamos con el nuevo state modificado. Nos aseguramos asi te prevalecer intacto el estado con lso nuevos valores.
        contrast: theme.contrast + 1,
      }
    })
  }

  function decrement() {
    setTheme(() => ({ ...theme, contrast: theme.contrast - 1 }))
  }

  return (
    <div>
      <h2>Gestion de varios estados con el hook useState</h2>
      <span>
        <button onClick={decrement}>-</button>
        <span>
          {theme.contrast} - {theme.color}
        </span>
        <button onClick={increment}>+</button>
      </span>
    </div>
  )
}
export default ManyStates

/*
  Al actualizar un objeto, hemos de tener cuidado si estamos afectando al estado,
  en el ejemplo tenemos un pbjet o theme con la propiedad color y contraste,
  observamos que si queremos incrmentar o decrementar el contraste, se modifica nuestro estado, vease en:
  setTheme(() => {
      return {contrast: theme.contrast + 1} -> AQUI, AL MOMENTO DE INCREMENTAR EL CONTRASTE, SE ELIMINA EL PARAMETRO COLOR
    })

  En nuestra interfaz, observamos que el valor del color se elimina, esto lo podemos observar tambien el las developer tools de react.
  Se observa que se agrega al objeto solo la propiedad de contraste con el nuevo valor incrementado.

  Una solucion es hacer una copia primero del estado y despues hacer el incremento del contraste, unimos el estado anterio conel nuevo.
  como se muestra a continuacion

  setTheme(() => {
      return {
        ...theme, -> Creamos copia del estado actual
        contrast: theme.contrast + 1, -> Se sobre escribe con el estado modificado
      }
    })

    Como vemos, sino hacemos la copia del estado, se sobreescribe con el nuevo valor, por ello recurrimos a hacer primero una copia del estado actual y
    despues la modificacion de los valores, al final tendremos como resultado el estado solo con los elementos modificados y no nos sobre escribira los valores
    por el unico valor modificado.
    Es asi como garantizamos la integridad de el estado. 

    IMPORTANTE:
    Podemos solucionar esto creando una funcion que copie el estado anterio y mezcle el estado actual(ya con los nuevos valores), para simplificar 
    nuestra implementaciom, PERO el equipo de react, nos sugiere que si queremos tener mas de un estado, osea, multiples estados,
    usemos mejor varios hooks useState por cada elemento que queremos tener en nuestro state. 

    Ver el ejemplo en el componente MultipleStates
*/
