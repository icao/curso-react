import React, { useState, useEffect } from 'react'

const EffectsWithCleanupHook = () => {
  const [anchoVentana, setAnchoVetana] = useState(0)
  const [largoVentana, setLargoVetana] = useState(0)

  const getResize = () => {
    console.log(
      `%c El tamaño de la ventana es de ${anchoVentana}px x ${largoVentana}px`,
      `color: #ff46ff`
    )
    setAnchoVetana(document.body.clientWidth)
    setLargoVetana(document.body.clientHeight)
  }
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(function () {
    // Función que será nuestro efecto
    window.addEventListener('resize', getResize)
    console.log(
      `%c El componente EffectsWithCleanupHook se ha MONTADO, suscripción eventListener Resize`,
      `color: #ffA1ff`
    )
    // Similar a componentWillUnmount, Especifica cómo sanear este efecto:
    return function () {
      // Funcion que saneara nuestro efecto, se ejecuta al momento de desmontarlo
      window.removeEventListener('resize', getResize)
      console.log(
        `%c El listener resize se ha DESMONTADO, haciendo saneamiento(cleanup)`,
        `color: #ff46ff; font-weight: bold; font-size: 14px`
      )
    }
  })

  return (
    <div className='card__hook'>
      <p>
        El ancho de la ventana es <strong>{anchoVentana}px</strong>
      </p>
      <p>
        El largo de la ventana es <strong>{largoVentana}px</strong>
      </p>
    </div>
  )
}

export default EffectsWithCleanupHook

/*
  ¿Qué hace useEffect?
  Al usar este Hook, le estamos indicando a react que el componente tiene que hacer algo después de renderizarse. React recordará la función que le hemos pasado(NOS REFERIMOS A ELLA COMO EL EFECTO), y la llamará más tarde despues de actualizar el DOM. 
  En este efecto, actualizamos las dimensiones del tamaño de la ventana(contenedor de neustra app), pero tambien se pueden hacer peticiones de datos o invocar API imperativa. 
*/

/*
  El hook useEffect acepta dos parametros, un efecto y una lista(array)
  useEffect([funcion_efecto], [lista_dependencias])
  Donde: 
    funcion_efecto: Funcion anónima o tipo flecha, que funciona como nuestro efecto al comento de actualizarse el DOM
    lista_dependencias: Arreglo que contiene una lista de dependencias la cual estará escuchando useEffect. Puede ser vacio o con elementos.
*/

/*
  ¿Por qué se llama a useEffect dentro del componente? 
  useEffect dentro dle ocmponente nos permite acceder a la variable de estado 'anchoVentana'(ocualquier prop) directamente desde el efecto. 
  No necesitamos una API especial para acceder a ella, ya que se encuentra en el 'ámbito de la función'(nuestro componente).
  Los Hooks aprovechan los 'clousures' de Javascript y evitan intriducir APIs especificas de React donde JS ya proporciona una solución.
*/

/*
  ¿Se usa useEffect después de cada renderizado?
  sí, por defecto useeffect se ejecuta después del primer renderizado y después de cada actualización.(sustituyendo asi a los ciclos de vida componentdidMount, componentDidUUpdate y componentWillUnmount)
  SE PUEDE MODIFICAR EL ESE COMPORTAMIENTO pasandole un segundo argumento al hook useEffect. 

  Tenemos que tener en cuenta que en vez de pensar en "montar" y "actualizar", puede ser más fácil pensar en efector que ocurren "DESPUES DEL RENDERIZADO"

  React se asegura que el DOM se ha actualizado antes de llevar a cabo el efecto.

  Cada vez que renderizamos, planificamos un efecto diferente, reemplazando el anterior. En ecierta manera, esto hace que los efectos funcionen más como parte del resultado del renderizado. Cada efecto pertenece a su correspondiente renderizado.
*/

/*
  ¿Por qué hemos devuelto una función en nuestro efecto?
   Este es un mecanismo opcional de los efectos. Todos los efectos pueden devolver una función que los sanea más tarde. Esto nos permite mantener la lógica de añadir y eliminar suscripciones cerca la una de la otra. ¡Son parte del mismo efecto!
*/

/*
  ¿Cuando sanea React el efecto exactmente?
  React sanea el efecto cuando el componente es desmontado. Sin embargo, como hemos aprendido anteriormente, los efectos nose ejecutan solo una vez, sino en cada renderizado.
  He aquí el motivo por el cual React también sanea los efectos de renderizado anteriores antes de ejecutar los efectos del renderizado actual. 
*/
