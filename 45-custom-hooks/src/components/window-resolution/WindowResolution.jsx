import React from 'react'
import { useSizeResolution } from '../../hooks/useSizeResolution'

const WindowResolution = () => {
  const { width, height } = useSizeResolution() // [1]
  console.info(width, height)
  return (
    <>
      <h3>↔ Ancho: {width}px</h3>
      <h3>↕ Alto: {height}px</h3>
    </>
  )
}

export default WindowResolution

/**
 * [1] Llamamos a nuestro custom hook que nos devuelve las medidas de la ventana en px
 *
 * IMPORTANTE: Recordemos que al destructurar un objeto, no podemos renombrar las variables, a diferencia de los arreglos que si podemos renombrar cada valor devuelto al destructurarlos.
 * es por eso que en este caso, se usan los nombres de las variables de como fueron retornados en el custom hook useSizeResolution
 */
