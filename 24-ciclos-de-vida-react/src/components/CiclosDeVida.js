import React, { Component } from "react";
import diagrama from "../ciclos_de_vida.jpg";

class CiclosDeVida extends Component {
  render() {
    return (
      <section className="App-container-component-2">
        <h1>Ciclos de vida</h1>
        <p>
          Los ciclos de vida son diferentes fases de ejecución por las que pasa
          un componente de React.
        </p>
        <br />
        <p>El ciclo de vida de los componentes se divide en 3 fases:</p>
        <ol>
          <li>Montaje</li>
          <li>Actualización</li>
          <li>Desmontaje</li>
        </ol>
        <br />
        <h2>Montaje</h2>
        <ul>
          <li>Es la primera que se ejecuta</li>
          <li>Se ejecuta siempre y solo lo hace una vez</li>
          <li>Construye el componente con su estado inicial</li>
          <li>Obtiene las props</li>
          <li>Bindeamos métodos de clase(bind de los handles)</li>
          <li>
            Primera ejecución del método render() -> una vez ejecutado ya
            podremos visualizarlo en el DOM
          </li>
          <li>
            Métodos en la fase de montaje:
            <ul>
              <li>constructor()</li>
              <li>ComponentWillMount -> static getDerivedStateFromProps()</li>
              <li>render()</li>
              <li>componentDidMount()</li>
            </ul>
          </li>
          <p>
            <strong>Nota:</strong> Estos métodos están considerados legacy
            (deprecados) y debes evitarlos en código nuevo:
            <ul>
              <li>UNSAFE_componentWillMount()</li>
            </ul>
          </p>
          <p>A los metodos deprecados se les antepone la palabra UNSAFE</p>
        </ul>
        <br />
        <h2>Actualización</h2>
        <ul>
          <li>
            Por defecto se ejecuta cada vez que recibe props o se actualiza su
            estado
          </li>
          <li>
            Podemos controlar cuando el componente necesita renderizarse de
            nuevo para reflejar los cambios
          </li>
          <li>Si no lo hacemos el componente se rendizará de nuevo</li>
          <li>
            Métodos en la fase de Actualización
            <ul>
              <li>
                ComponentWillReceiveProps -> static getDerivedStateFromProps()
              </li>
              <li>shouldComponentUpdate()</li>
              <li>render()</li>
              <li>ComponentWillUpdate -> getSnapshotBeforeUpdate()</li>
              <li>componentDidUpdate()</li>
            </ul>
          </li>
          <p>
            <strong>Nota:</strong> Estos métodos están considerados legacy
            (deprecados) y debes evitarlos en código nuevo:
            <ul>
              <li>UNSAFE_componentWillUpdate()</li>
              <li>UNSAFE_componentWillReceiveProps()</li>
            </ul>
          </p>
        </ul>

        <br />
        <h2>Desmontaje</h2>
        <ul>
          <li>Eliminamos listeners</li>
          <li>Eliminamos referencias al DOM</li>
          <li>
            Método en la fase de Desmontaje
            <ul>
              <li>componentWillUnmount()</li>
            </ul>
          </li>
        </ul>
        <br />
        <hr />
        <p>
          NOTA: Cada una de estas fases se compone por diferentes métodos que se
          autoejecutan, los cuales nos permitiran llevar a cabo ciertas
          actividades que querramos llevar a cabo. <br /> Adicional existen
          métodos para el manejo de errores llamados:
          <strong>
            <ul>
              <li>static getDerivedStateFromError()</li>
              <li>componentDidCatch()</li>
            </ul>
          </strong>
          Estos métodos se invocan cuando hay un error durante la renderización,
          en un método en el ciclo de vida o en el constructor de cualquier
          componente hijo.
        </p>
        <section>
          <h2>
            Puedes ver el diagrama con los ciclos de vida de react en:
            <a href="http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/">
              Ciclos de vida react
            </a>
            <img
              src={diagrama}
              alt="diagrama de los ciclos de vida de react"
            />
          </h2>
        </section>
      </section>
    );
  }
}

export default CiclosDeVida;
