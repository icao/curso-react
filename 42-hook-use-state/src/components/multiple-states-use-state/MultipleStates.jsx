import React, { useState } from 'react'

const MultipleStates = () => {
  // Separamos el estado
  const [contrast, setContrast] = useState(0) // Usamos un hook useState para contrast
  const [color, setColor] = useState('green') // usamos un hook useState para color

  function decrement() {
    setContrast(contrast - 1)
    setColor('blue')
  }

  function increment() {
    setContrast(contrast + 1)
    setColor('pink')
  }

  return (
    <div>
      <h2>Manejo de multiples estados - hook useState</h2>
      <span>
        <button onClick={decrement}>-</button>
        <span>
          {contrast} - {color}
        </span>
        <button onClick={increment}>+</button>
      </span>
    </div>
  )
}

export default MultipleStates

/* 
Observamos que es mas legible y mas facil actualizar el estado, ya que cada elemento tiene su propia funcion
actualizadora que modificara el valor del estado.

Hay que tener en cuenta que podemos nombrar a nuestros hooks de useState con nombres que hagan referencia a nuestro estado.

como por ejemplo:
const [fruta, setFruta] = useState('banana)

NOTA: Si deseas obtener mas ejemplos o aclaraciones acerca del uso de multiples estados, conslta la documentacion oficial en:
https://es.reactjs.org/docs/hooks-state.html#tip-using-multiple-state-variables
*/
