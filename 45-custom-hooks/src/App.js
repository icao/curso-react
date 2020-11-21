import './App.css'

function App() {
  return (
    <div>
      <h1>Custom Hooks</h1>
      {/* TODO: explicar aqui en el app, todo acerca de los custom hooks */}

      <p>
        No existe una normatividad de como debemos construir nuestros propios
        hooks, asi que podemos construirlos como consideremos correcto,
        respetando las reglas ya vistas de los hooks, hacer un buen uso de el{' '}
        <em>useState</em> o el <em>useEffect</em> dentro de ellos.
      </p>

      <p>
        Al momento de nombrar a nuestros hooks personalizados(
        <em>custom hooks</em>) hemos de usar la convencion del nombramiento de
        nuestros Hooks usar como preposición la palabra <strong>use</strong>,
        asi react y los desarrolladores podran hacer la fácil identificacion del
        hook.
      </p>
      <p>
        Los <em>custom hooks</em> los se diseñar para que devuelvan un tipo de
        dato o regresar una estructura como un objeto o arreglo, que
        posteriormente en su consumo, podremos destructurar y hacer uso de los
        valores de nuestro hook personalizado.
      </p>
      <p>
        Podemos tener acceso dentro de nuestro <em>custom hook</em> a más como
        el <em>useState</em> o <em>useEffect</em> y hacer nuestra logica
        encapsulada que al final retornará un valor o una función para despues
        sea usada a petición de otros componentes.
      </p>

      <p>
        Con los <em>custom hooks</em> podemos elminar lógica repetida en nuestro
        proyecto, asi podemos darle mas versatilidad a un fragmento que haga
        multiples acciones como pueden ser las peticiones http a distintas apis
        en el desarrollo de nuestro proyecto.
      </p>
      <p>
        Acontinuación se muestran tres distintos ejemplos de como se puede sacar
        provecho a los <em>custom hooks</em>.
      </p>
      <ol>
        <li>Ejemplo del contador</li>
        <li>Ejemplo de resolución de la ventana</li>
        <li>Ejemplo de petición http - consumo de una API</li>
      </ol>
    </div>
  )
}

export default App
