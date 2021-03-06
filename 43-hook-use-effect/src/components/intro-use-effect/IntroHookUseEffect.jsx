import React, { useState } from 'react'
import EffectsWithoutCleanupClass from '../effects-without-cleanup/EffectsWithoutCleanupClass'
import EffectsWithoutCleanupHook from '../effects-without-cleanup/EffectsWithoutCleanupHook'
import EffectsWithCleanupClass from '../effects-with-cleanup/EffectsWithCleanupClass'
import EffectsWithCleanupHook from '../effects-with-cleanup/EffectsWithCleanupHook'
import TipsUsingEffects from '../tips-using-effects/TipsUsingEffects'
import ExampleUseEffect from '../example-use-effect/ExampleUseEffect'

const IntroHookUseEffect = () => {
  const [showCC, setShowCC] = useState(true)
  const [showHC, setShowHC] = useState(true)

  return (
    <div>
      <h1>
        <span role='img' aria-label='jsx-a11y/accessible-emoji'>
          ⚓
        </span>{' '}
        Hook useEffect
      </h1>
      <p className='text--center'>
        El Hook de efecto te permite llevar a cabo efectos secundarios en
        componentes funcionales
      </p>
      <section className='container'>
        <div className='column'>
          <h2>Efecto Sin Saneamiento</h2>
          <p>
            En ciertas ocasiones, queremos{' '}
            <strong>
              ejecutar código adicional después de que React haya actualizado el
              DOM
            </strong>
            . Peticiones de red, mutaciones manuales del DOM y registros, son
            ejemplos comunes de efectos que no requieren acción de saneamiento.
            Decimos esto porque podemos ejecutarlos y olvidarnos de ellos
            inmediatamente.
          </p>
          <p>
            Vamos a comparar cómo las clases y los Hooks permiten expresar
            dichos efectos. (Ver en el código de los sig componentes)
          </p>
          <h3>Efecto con clases</h3>
          <EffectsWithoutCleanupClass />
          <h3>Efecto con hooks</h3>
          <EffectsWithoutCleanupHook />
        </div>
        <div className='column'>
          <h2>Efecto Con Saneamiento</h2>
          <p>
            En el apartado anterior hemos visto cómo expresar efectos
            secundarios que no necesitan ningún saneamiento. Sin embargo,
            algunos efectos lo necesitan. Por ejemplo,{' '}
            <strong>si queremos establecer una suscripción</strong> a alguna
            fuente de datos externa. En ese caso, ¡es importante sanear el
            efecto para no introducir una fuga de memoria! Comparemos cómo se
            puede hacer esto con clases y con Hooks. (Ver en el código de los
            sig componentes)
          </p>
          <h3>Efecto con clases</h3>
          {showCC && <EffectsWithCleanupClass />}
          <button onClick={() => setShowCC(!showCC)}>
            {showCC ? `Desmontar` : `Montar`}
          </button>
          <h3>Efecto con hooks</h3>
          {showHC && <EffectsWithCleanupHook />}
          <button onClick={() => setShowHC(!showHC)}>
            {showHC ? `Desmontar` : `Montar`}
          </button>
        </div>
      </section>
      <div className='section'>
        <div className='container'>
          <div className='column'>
            <h2>Recapitulación</h2>
            <p>
              En los ejemplos anteriores, hemos aprendido que useEffect nos
              permite expresar diferentes tipos de efectos secundarios despues
              de que un componente se renderice.
            </p>
            <p>
              Algunos efectos pueden devolver una función cuando requieran
              saneamiento
            </p>
            <pre>
              {`
               useEffect(() => { // FUNCIÓN EFECTO

                // Código suscripción, peticiones API, etc.

                return () => { // FUNCIÓN PARA SANEAR EL EFECTO
                  // Código removiendo la suscripción
                };
              })
             `}
            </pre>
            <p>
              Otros códigos pueden no tener fase de saneamiento y no devolver
              nada
            </p>
            <pre>{`
              useEffect(() => {
                document.title = 'Example text';
              });
            `}</pre>
            <p>El Hook de efecto unifica ambos casos en una única API.</p>
          </div>
        </div>
      </div>
      <div className='section'>
        <div className='container'>
          <div className='column'>
            <h2>Consejos para usar efectos</h2>
            <TipsUsingEffects />
          </div>
        </div>
      </div>
      <div className='section'>
        <div className='container'>
          <div className='column'>
            <ExampleUseEffect />
          </div>
        </div>
      </div>
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
