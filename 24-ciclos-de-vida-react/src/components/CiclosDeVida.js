import React, { Component } from 'react';

class CiclosDeVida extends Component{
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
            Primera ejecución del método render() ,' una vez ejecutado ya
            podremos visualizarlo en el DOM
          </li>
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
        </ul>
        <br />
        <h2>Desmontaje</h2>
        <ul>
          <li>Eliminamos listeners</li>
          <li>Eliminamos referencias al DOM</li>
        </ul>
        <br />
        <hr/>
        <p>NOTA: Cada una de estas fases se compone por diferentes métodos que se autoejecutan, los cuales nos permitiran llevar a cabo ciertas actividades que querramos llevar a cabo.</p>
      </section>
    );
  }
}

export default CiclosDeVida;  