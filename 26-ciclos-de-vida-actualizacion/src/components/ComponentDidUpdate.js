import React, { Component } from "react";

class componentDidUpdate extends Component {
  constructor(props) {
    console.log("Constructor Listo ✅");
    super(props);
    this.boxRef = React.createRef();
    this.state = {
      scrollY: 0
    };
  }

  componentDidMount() {
    console.log("-> ComponentDidMount() ✅");
    this.boxRef.current.addEventListener("scroll", () => {
      console.log("Box scroll Listener 🦻:", this.boxRef.current.scrollTop);
      this.setState({
        scrollY: this.boxRef.current.scrollTop
      });
    });
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (condition) {
  //     return false; // No renderices de nuevo - no se ejecuta componentDidUpdate()
  //   } else {
  //     return true; // Renderiza de nuevo el componente - si se ejecuta componentDidUpdate()
  //   }
  // }

  // Se ejecuta DESPUES del render()
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(
      "-> getSnapshotBeforeUpdate() 📤 prevState:",
      prevState.scrollY
    );
    return { hola: "Saludos!", dom: this.boxRef.current };
  }

  // Se ejecuta despues de getSnapshotBeforeUpdate()
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot !== null) {
      console.log("snapshot: ", snapshot);
      console.log(
        `-> componentDidUpdate() 📨 prevState: ${prevState.scrollY} | snapshot hola: ${snapshot.hola} | snapshot dom width:${snapshot.dom.scrollWidth}`
      );
      console.log("__________________________________________________");
    }
    return null;
  }

  render() {
    console.log("-> Render() ✅");
    return (
      <section className="App-container-component">
        <h2>componentDidUpdate()</h2>
        <p className="paragraph">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo ab
          laborum sint ducimus consequatur est animi, beatae illo perferendis,
          praesentium impedit necessitatibus eum. Officiis possimus, quibusdam
          eius id ut corrupti.
        </p>
        <h3>Scroll Top: {this.state.scrollY}px</h3>
        <article className="box" ref={this.boxRef}>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
            nostrum cumque consectetur excepturi nam officia accusantium saepe
            facere aut minima repellendus necessitatibus libero aliquid
            similique odit hic, dignissimos nobis temporibus.
          </p>
          <p className="paragraph">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente,
            natus. Nihil, aperiam nam neque accusamus omnis sapiente odio et
            magnam consequatur deleniti. Sit reiciendis exercitationem odit
            enim? Placeat, quo quia.
          </p>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus hic
            ipsam sunt laudantium expedita officia dolor dolorem consequatur non
            vel quisquam alias nostrum accusantium maxime rerum omnis,
            architecto veritatis. Consequuntur!
          </p>
        </article>
      </section>
    );
  }
}

export default componentDidUpdate;

/**
 * --------------------------------------
 * componentDidUpdate()
 * --------------------------------------
 *
 * componentDidUpdate() se invoca inmediatamente después de que la actualización ocurra.
 * Este método no es llamado para el renderizador inicial.
 *
 * Use esto como una oportunidad para operar en DOM cuando el componente se haya
 * actualizado. Este es también un buen lugar para hacer solicitudes de red siempre y cuando
 * compare los accesorios actuales con los anteriores(por ejemplo, una solicitud
 * de red puede no ser necesaria si los props no han cambiado).
 *
 * componentDidUpdate(prevProps) {
 * // Uso tipico (no olvides de comparar los props):
 *  if (this.props.userID !== prevProps.userID) {
 *    this.fetchData(this.props.userID);
 *  }
 * }
 *
 * PUEDES LLAMAR setSate() INMEDIATAMENTE en componentDidUpdate() pero ten en cuenta
 * que DEBE SER ENVUELTO EN UNA CONDICIÓN como en el ejemplo anterior, o causará
 * un bucle infinito.
 * Tambien causaría una renderización adicional que, aunque no sea visible para el usuario,
 * puede afectar el rendimieto del componente. Si estás intentando crear un 'espejo'
 * desde un estado a un 'prop' directamente en su lugar. Lee más sobre por qué copiar props
 * en el estado causa errores(https://es.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html)
 *
 * Si tu componente implementa el ciclo de vida getSnapshotBeforeUpdate() (QUE ES RARO),
 * el valor que devuelve se parará como un tercer parámetro 'snapshot' a componentDidUpdate()
 * De lo contrario, esté parámetro será indefinido.
 *
 * NOTA: componentDidUpdate() no será invocado si shouldComponentUpdate() devuelve falso. (este método dicta si se quiere denredizar un componente de nuevo si cambiaron los accesorios o no)
 *
 */
