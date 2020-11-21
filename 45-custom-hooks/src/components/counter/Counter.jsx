import React from 'react'
import './Counter.css'
import { useCounter } from '../../hooks/useCounter'

/**
 * Componente SIN uso del Custom hook
 */
/*
const Counter = () => {
  const [counter, setCounter] = useState(0) //Tenemos que importar el useState para que funcione este ejemplo

  function handleIncrement() {
    setCounter(counter + 1)
  }

  function handleReset() {
    setCounter(0)
  }

  return (
    <>
      <h2>Contador: {counter}</h2>
      <button onClick={handleIncrement}>Incrementar</button>
      <button onClick={handleReset}>Resetear</button>
    </>
  )
}
*/

/**
 * Componente CON uso del Custom hook - useCounter
 */
const Counter = () => {
  const [contador, incrementar, resetear] = useCounter(0) // [1]

  return (
    <>
      <h2>Contador: {contador}</h2>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={resetear}>Resetear</button>
    </>
  )
}

export default Counter

/**
 * [1] Hacemos uso de nuestro custom hook useCounter, recibimos un arreglo con 3 propiedades:
 *    1.- contador: que sera la variable que nos devuelve el contador con el valor mas actual.
 *    2.- incrementare: Función que incrementa el valor al hacer click en el botón de incrementar
 *    3.- Función que devuelve el contador a su valor original
 */
