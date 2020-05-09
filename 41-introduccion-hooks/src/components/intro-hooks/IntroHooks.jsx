import React from 'react';

const IntroHooks = () => {
  return <div>
    <h1>Introducción a los hooks</h1>
    <h2>Que son los Hooks??</h2>
    <p>Los Hooks son una nueva incorporación en React 16.8. Te permiten usar estado y otras características de React sin escribir una clase.
 </p>
    <p>Los Hooks son funciones que te permiten “enganchar” el estado de React y el ciclo de vida desde componentes funcionales.
 </p>
    <p>Los hooks no funcionan dentro de las clases — te permiten usar React sin clases. (No recomendamos reescribir tus componentes existentes de la noche a la mañana, pero puedes comenzar a usar Hooks en los nuevos si quieres.)</p>
    <p>Ver mas acerca de explicacion detallada de hooks: <a href="https://es.reactjs.org/docs/hooks-overview.html">Hooks Documentación</a></p>
    <hr />
    <h2>Reglas de los hooks</h2>
    <p>
      Hooks son funciones de JavaScript, pero imponen dos reglas adicionales:
    </p>

    <p>✅ Solo llamar Hooks en el nivel superior(antes del return). No llames Hooks dentro de loops, condiciones o funciones anidadas.</p>

    <p>✅ Solo llamar Hooks desde componentes funcionales de React. No llames Hooks desde las funciones regulares de JavaScript. (Solo hay otro lugar válido para llamar Hooks: tus propios Hooks personalizados).</p>
    <p>
      Siguiendo esta regla, te aseguras de que toda la lógica del estado de un componente sea claramente visible desde tu código fuente.</p>
    <hr />
    <h2>¿Debería usar Hooks, clases, o una mezcla de ambos?</h2>
    <p>Cuando estés listo, te recomendamos empezar a usar Hooks en los nuevos componentes que escribas. Asegúrate que todo tu equipo esté de acuerdo en usarlos, y que estén familiarizados con esta documentación. No recomendamos reescribir tus clases existentes a menos de que hayas planeado reescribirlas de cualquier manera (por ejemplo para arreglar bugs).</p>

    <p>No puedes usar Hooks dentro de un componente de clase, pero definitivamente puedes mezclar componentes de clase y componentes de función con Hooks en un mismo árbol. Si un componente es una clase, o una función que utiliza Hooks es un detalle de implementación del Componente. A largo plazo, experamos que los Hooks sean la manera más usada de escribir Componentes de React.</p>
    <hr />
    <h2>¿Cubren los Hooks todos los casos de uso de las clases?</h2>
    <p>Nuestra meta es que los Hooks cubran todos los casos de uso de las clases lo más pronto posible. En este momento no existen equivalentes de los ciclos de vida poco comunes <em>getSnapshotBeforeUpdate</em>, <em>getDerivedStateFromError</em> y <em>componentDidCatch</em>, pero planeamos añadirlos pronto.</p>
    <p>Los Hooks aún son jóvenes, y algunas librerías de terceros podrían no ser compatibles con Hooks de momento.</p>
    <hr />
    <p>Ver mas preguntas en la documentación oficial en: <a href="https://es.reactjs.org/docs/hooks-faq.html#what-can-i-do-with-hooks-that-i-couldnt-with-classes">Preguntas frecuentes sobre react hooks</a></p>
  </div>
}

export default IntroHooks;
