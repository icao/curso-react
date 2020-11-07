import React from 'react'

const TipsUsingEffects = () => {
  return (
    <>
      <h3>Usar varios efectos para separar conceptos</h3>
      <p>
        Si unimos ambos componentes anteriores(contador mostrado en el titulo y
        resize del window) en un class component tendriamos demasiada
        lógica(independiente en los ciclos de vida) mezclada en nuestro
        componente. Usando los hooks nos quedaria una manera mas simple de
        estructurar nuestra lógica evitando tener mucho código repetido. De la
        misma manera que podemos usar el hook useState multiples veces, podemos
        usar varios efectos. Esto nos permite separar la lógica que no está
        relacionada en diferentes efectos:
      </p>
      <pre>{`
        const [count, setCount] = useState(0)

        useEffect(() => {
          document.title = 'Has clikeado ' + count + 'veces'
        })
      
        const [anchoVentana, setAnchoVetana] = useState(0)
        const [largoVentana, setLargoVetana] = useState(0)

        const getResize = () => {
          setAnchoVetana(document.body.clientWidth)
          setLargoVetana(document.body.clientHeight)
        }
        useEffect(function () {
          window.addEventListener('resize', getResize)
          return function () {
            window.removeEventListener('resize', getResize)
          }
        // ...
      `}</pre>
      <p>
        <strong>
          Los <i>Hooks </i> nos permiten separar el código en función de lo que
          hacen
        </strong>{' '}
        en vez de en función de un método de ciclo de vida. React aplicará cada
        efecto del componente en el orden en el que han sido especificados.
      </p>
      <br />
      <h3>Omite efectos para optimizar el rendimiento</h3>
      <p>
        En algunos casos, sanear o aplicar el efecto después de cada renderizado
        puede crear problemas de rendimiento. En los componentes de clase
        podemos solucionarlos escribiendo una comparación extra con 'prevProps'
        o 'prevState' dentro de 'componentDidUpdate.
      </p>
      <pre>{`
      componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
          document.title = 'Tu has clickeado' + this.state.count + 'veces';
        }
      }
      `}</pre>
      <br />
      <p>
        Este requerimiento es tan común que está incorporado en la API del Hook
        'useEffect'. Puedes indicarle a React que omita aplicar un efecto si
        ciertos valores no han cambiado entre renderizados. Para hacerlo, pasa
        un array como el segundo argumento opcional a 'useEffect'.
      </p>
      <pre>{`
      useEffect(() => {
        document.title = 'Tu has clickeado' + count + 'veces';
      }, [count]); // Solo se vuelve a ejecutar si count cambia
      `}</pre>
      <p>En el ejemplo anterior pasamos [count] como segundo argumento</p>
      <p>
        ¿Qué significa esto? <br /> si 'count' es 5, y cuando nuestro componente
        se vuelve a renderizar 'count' continua siendo igual a 5, React
        comparará el [5] del renderizado anterior con el [5] del siguiente
        renderizado. dado que todos los elementos en el array(5 === 5), react
        omitirá el efecto. Esa es nuestra optimización.
      </p>
      <p>
        Cuando renderizamos con 'count' actualizando a 5, React comparará los
        elementos en el array [5] del renderizado anterior con los elementos del
        array [6] del siguiente renderizado. En esta ocasión, React volverá a
        aplicar el efecto dado que 5 !== 6. Si el array contiene varios
        elementos, React volverá a ejecutar el efecto si cualquiera de los
        elementos es diferente{' '}
      </p>
      <p>
        <strong>NOTA:</strong> Esto también funciona para efectos que tienen
        fase de saneamiento.
      </p>
      <hr />
      <p>
        <strong>NOTA: </strong> Si usas esta optimización, asegúrate de que
        incluyes{' '}
        <strong>
          todos los valores del ámbito del componente(como props o estado) que
          cambien a lo largo del tiempo y que sean usados por el efecto.
        </strong>
      </p>
      <br />
      <h3>Ejecutando un efecto solamente uan vez(al montar y desmontar)</h3>
      <p>
        Si quieres ejecutar un efecto solamente una vez, puedes pasar un array
        vacío <strong>[]</strong> como segundo argumento del hook 'useEffect'.
        Esto le indica a React que{' '}
        <em>
          el efecto no depende de ningún valor proveniente de las props o el
          estado
        </em>
        , de modo que <em>no necesita vovler a ejecutarse</em>. Esto no se
        gestiona como un caso especial, obedece directamente al modo en el que
        siempre funciona el array de dependencias.
      </p>
      <p>
        Si pasas un array vacío ([]), las props y el estado dentro del efecto
        siempre tendrán sus valores iniciales. Si bien pasar ([]) como segundo
        argumento se acerca al conocido modelo mental de 'componenrDidMount' y
        'componentwillUnmount', amenudo hay mejores soluciones para evitar
        vlover a ejecutar los efectos de 'useEffect' hasta que el navegador
        finaliza el trazado, de modo que hacer algún trabajo extra no es tan
        problematico.
      </p>
      <p>
        <strong>IMPORTANTE:</strong> El conjunto vacío de dependencias,{' '}
        <strong>[]</strong>,{' '}
        <strong>
          <em>significa</em>
        </strong>{' '}
        que el{' '}
        <strong>
          <em>efecto solo se ejecutará cuando el componente se monte</em>
        </strong>
        , y no en cada rerenderizado.{' '}
      </p>
    </>
  )
}

export default TipsUsingEffects
