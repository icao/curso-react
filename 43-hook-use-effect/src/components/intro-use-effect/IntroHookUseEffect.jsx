import React from 'react'

const IntroHookUseEffect = () => {
  return (
    <div>
      <h1>
        <span role='img' aria-label='jsx-a11y/accessible-emoji'>
          ⚓
        </span>{' '}
        Hook useEffect
      </h1>
      {/* TODO: Comentar para que caso equicale el componentDidMount, componentDidUpdate, componentWillUnmount */}
    </div>
  )
}

export default IntroHookUseEffect

/*
    HOOK useEffect
    El Hook de efecto (use effect) permite llevar a cabo efectos secundarios en componentes funcionales.
    
    Peticiones de datos, establecimiento de suscripciones y actualizaciones manuales del DOM en componentes de React serian ejemplos de EFECTOS SECUNDARIOS. Tanto si estás acostumbrado a llamar a estas operaciones "efectos secundarios" (o simplemente 2efectos2) como sino, probablemente loas has llevado a cabo en tus componentes con anterioridad.

    IMPORTANTE: Si estás familiarizaco con el ciclo de vida de las clases de React y sus métodos , el HOOK useEffect equivale a COMPONENTDIDMOUNT, COMPONENTDIDUPDATE y COMPONENTWILLUNMOUNT combinados.

    Hay DOS tipos de EFECTOS SECUNDARIOS en los componentes de react: 
    - Aquellos que no necesitan una operacion de saneamiento (cleanup(limpieza))
    - Los que necesitan saneamiento (cleanup(limpieza))
    
*/
