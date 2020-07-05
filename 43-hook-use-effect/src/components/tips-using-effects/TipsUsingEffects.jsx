import React from 'react'

const TipsUsingEffects = () => {
  return (
    <div>
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
          Los <i>Hooks </i> nos permiten separar el ccódigo en función de lo que
          hacen
        </strong>{' '}
        en vez de en función de un método de ciclo de vida. React aplicará cada
        efecto del componente en el orden en el que han sido especificados.
      </p>
    </div>
  )
}

export default TipsUsingEffects
