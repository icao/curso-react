import { useState } from 'react'

// 1.- exportamos nuestro Hook y nombramos con el estandar que nos indica react, useCounter
export function useCounter(initialValue) {
  // 2.- Implementamos la lógica necesaria
  const [counter, setCounter] = useState(initialValue)

  function increment() {
    setCounter(counter + 1)
  }

  function reset() {
    setCounter(initialValue)
  }

  // 3.- Retornamos loa recursos como variables y funciones
  return [counter, increment, reset]
}
