// Importamos el HOOK  'useState'
import React, { useState } from 'react';

const UseState = () => {
  // Destructuramos el hook 'useState' en el tope de nuestra funcion
  const [count, setCount] = useState(0)
  // En count guardaremos el valor de neustro estado
  // Con setCount, actualizaremos el valor de nuestro estado
  // Como inicializamos nuestro estado? Con useState(0), al pasarle el argumento, este le asignara el valora nuestro 'count'

  function increment() {
    console.log(`Incrementando el contador a ${count + 1}`)
    setCount(count + 1) // Actualizamos el estado con nuestra funcion declarada 'setCount' como segundo argumento de useState
  }

  return <div>
    <h1>useState Hook</h1>
    {/* Para acceder a nuestro estado, unicamente mandamos a llamar nuestra variable, sin necesidad de usar 'this' */}
    <h3>{count}</h3>
    {/* De la misma forma no necesitamos usar una referencia ni bindear 'this' en el constructor, ya que el hook nos provee de una funcion con la cual estaremos actualizando nuestro estado. En este ejemplo se encuentra dentro de la funciuon increment*/}
    <button onClick={increment}>Incrementar</button>
  </div>

  /*
  En resumen en nuestro componente:

  1: Importamos el Hook useState desde React que nos permite mantener un estado local en un componente funcional.

  2: Dentro del componente Example declaramos una nueva variable de estado llamando al Hook useState. Este nos devuelve un par de valores, a los que damos un nombre. Llamamos count a nuestra variable porque guarda el número de clicks en el botón. La inicializamos a cero pasando 0 como único argumento a useState. El segundo elemento retornado es una función que nos permite actualizar count, por lo que le llamamos setCount.

  3: Cuando el usuario hace click, llamamos a increment que ejecuta la funcion setCount con un nuevo valor. React actualizará entonces el componente Example pasandole el nuevo valor de count.

  */
}
 
export default UseState;


/**
 * HOOK - useState
 * 
 * useState es un hook que te permite añadir el estado de React a un componente funcional. 
 * 
 * ¿Cuándo debería usar un Hook? 
 * Si creas un componente funcional y descubres que necesitas añadirle estado, antes había
 * que crear una clase. Ahora puedes usar un Hook dentro de un componente funcional existente.
 * 
 * El hook(como todos)tiene que estar declarado en el topde de el componente
 * useState() -> no tiene que estar anidado en ningun bloque de codigo / no se puede llamar dentro de un bloque de codigo
 */

 
  // Diferencias entre un class component y un componente funcional con hooks
  
  /* 
  En una clase, inicializamos el estado count a 0 estableciendo this.state a { count: 0 } en el constructor:
  class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  En un componente funcional no existe 'this' por lo que no podemos leer o asignar un this.state. En su lugar, usamos el Hook useState directamente dentro de nuestro componente funcional

  import React, { useState } from 'react';

function Example() {
  // Declaración de una variable de estado que llamaremos "count"
  const [count, setCount] = useState(0);

  NOTA: Al declarar el hook use state tenemos que tener en cuenta que:
  const [nombre_de_la_variable_con_estado, nombre_funcion_para_actualizar_el_estado] = useState(valor_inicial_de_nuestro_estado)

  nombre_de_la_variable_con_estado: Puede ser cualquier nombre que haga referencia a lo que queremos gestionar en el estado. Podemos nombrarla como sea.

  nombre_funcion_para_actualizar_el_estado: Es la funciopn que nos ayudara a actualizar nuestro estado. De la misma forma puede tener cualquier nombre que haga referencia a nuestor estado.  Por convencion el equipo de react sugiere que siempre se le anteponga la ppalabra 'set' (en minusculas), seguido del nombre del metodo  que actualizara nuestro estado, ejemplo: setContador

  valor_inicial_de_nuestro_estado: Es el valor inicial que tomara nuestro estado, este solo se ejecuta una vez cuando carga el componente, puede ser  cualquier tipo de variable, incluyendo un objeto (que no es recomendable si se quiere gestionar varios estados)

  Volviendo a nuestro codigo: const [count, setCount] = useState(0);

  ¿Qué hace la llamada a useState? 
  
  Declara una “variable de estado”. Nuestra variable se llama count, pero podemos llamarla como queramos, por ejemplo banana. Esta es una forma de “preservar” algunos valores entre las llamadas de la función - useState es una nueva forma de usar exactamente las mismas funciones que this.state nos da en una clase. Normalmente, las variables “desaparecen” cuando se sale de la función, pero las variables de estado son conservadas por React

  ¿Qué pasamos a useState como argumento? El único argumento para el Hook useState() es el estado inicial. Al contrario que en las clases, el estado no tiene porque ser un objeto. Podemos usar números o strings si es todo lo que necesitamos. En nuestro ejemplo, solamente queremos un número para contar el número de clicks del usuario, por eso pasamos 0 como estado inicial a nuestra variable. 

  IMPORTANTE: Si queremos guardar dos valores distintos en el estado, llamariamos a useState() dos veces

  ¿Qué devuelve useState?
  Devuelve una pareja de valores: el estado actual y una función que lo actualiza. Por eso escribimos const [count, setCount] = useState(). Esto es similar a this.state.count y this.setState en una clase, excepto que se obtienen juntos.

  Declaramos una variable de estado llamada count y le asignamos a 0. React recordará su valor actual entre re-renderizados, y devolverá el valor más reciente a nuestra función. Si se quiere actualizar el valor de count actual, podemos llamar a setCount
  */

  /*
  Leyendo el estado
  Cuando queremos mostrar el valor actual de count en una clase lo obtenemos de this.state.count:
    <p>You clicked {this.state.count} times</p>

  En una función podemos usar count directamente:
    <p>You clicked {count} times</p>
  */

  /*
  Actualizando el estado
  En una clase, necesitamos llamar a this.setState() para actualizar el estado count:

    <button onClick={() => this.setState({ count: this.state.count + 1 })}>
      Click me
    </button>
  En una función ya tenemos setCount y count como variables, así que no necesitamos this:

    <button onClick={() => setCount(count + 1)}>
      Click me
    </button>
  */
  
/**
 * PARA UN MEJOR DETALLE CONSULTA LA DOCUMENTACION DE REACT EN:
 * https://es.reactjs.org/docs/hooks-state.html
*/