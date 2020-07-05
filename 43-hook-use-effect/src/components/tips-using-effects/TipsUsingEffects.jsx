import React from 'react'

const TipsUsingEffects = () => {
  return (
    <div>
      <h3>Usar varios efectos para separar conceptos</h3>
      <p>
        Si unimos ambos componentes anteriores(contador mostrado en el titulo y
        resize del window), en un class component tendriamos demasiada
        lógica(independiente) mezclada en nuestro componente. Usando los hooks
        nos quedaria una manera mas simple de estructurar nuestra lógica,
        evitando tener mucho código repetido. Otra bondad donde resalta
        useEffect es que podemos seccionar en diferentes partes nuestro efecto,
        asi podemos hacer uso de varios useEffect, permitiendonos separar lógica
        que no este relacionada.
      </p>
    </div>
  )
}

export default TipsUsingEffects
