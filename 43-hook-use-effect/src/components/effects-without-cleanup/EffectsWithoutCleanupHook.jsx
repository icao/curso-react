import React, { useState, useEffect } from 'react'

const EffectsWithoutCleanupHook = () => {
  const [count, setCount] = useState(0)

  // De forma similar a componentDidMount y componentDidUpdate
  useEffect(() => {
    // LA función que recibe el hook useEffect es nuestro efecto
    // Actualiza el título del documento(pestaña) usando la API del navegador
    document.title = `Has clikeado ${count} veces`
    console.log(`Has clikeado ${count} veces`)
  })
  // IMPORTANTE: useEffect, se ejecuta despues de cada renderizado y despues de cada actualización

  return (
    <div>
      <p>
        Tu has clickeado <strong>{count}</strong> veces
      </p>
      <button onClick={() => setCount(count + 1)}>Dame click</button>
    </div>
  )
}

export default EffectsWithoutCleanupHook
/*
  Declaramos la variable de estado count y le indicamos a React que necesitamos usar un efecto. Le pasamos una función al Hook useEffect. Esta función que pasamos es nuestro efecto. Dentro de nuestro efecto actualizamos el título del documento usando la API del navegador document.title. Podemos leer el valor más reciente de count dentro del efecto porque se encuentra en el ámbito de nuestra función. Cuando React renderiza nuestro componente, recordará este efecto y lo ejecutará después de actualizar el DOM. Esto sucede en cada renderizado, incluyendo el primero.
*/

/**
 * Qué hace useEffect?
 * Al usar este Hook, le estamos indicando  a React que el componente tienen que hacer algo después de renderizarse. React recordará la función que le hemos pasafo(nos referimos a ella como nuestro "efecto"), y la llamará más tarde despues de actualizar el DOM. En este efecto, actualizamos el título del documento, pero tambien podríamos hacer peticiones de datos o incocar alguna API imperativa.
 */

/**
 * ¿Por qué se llama a useEffect dentro dle componente?
 * useEffect dentro del componente nos permite acceder a la variable de estado 'count'(o cualquier tipo) directamente desde el efecto.
 * No necesitamos una API especial para acceder a ella, ya que se encuentra en el ámbito de la función . Los Hooks aprovechan los clousures de JavaScript y proporciona una solución.
 */

/**
 * ¿Se ejecuta useEffect después de cada renderizado?
 * ¡Sí!
 * Por defecto se ejecuta después del primer renderizado y después de cada actualización, Cabe mencionar que se puede modificar este comportamiento somo se veraá mas adelante.
 *
 * En vez de pensar en terminos de "montar" y "actualizar", puede resultar más fácil pensar en efectos que ocurren DESPUES DEL RENDERIZADO. React se asefura d que el DOM se ha actualizado antes de llevar a cabo el efecto.
 */
