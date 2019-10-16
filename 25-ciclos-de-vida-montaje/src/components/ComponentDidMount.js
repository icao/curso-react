import React, { Component } from "react";

class ComponentDidMount extends Component {
  constructor(props) {
    console.log("Constructor Listo ✅");
    super(props);
    this.boxRef = React.createRef(); // Creamos una referencia para acceder a nuestro elemento 
    this.state = { // Inicializamos el estado
      scrollY: 0
    };
  }

  UNSAFE_componentWillMount() {
    console.log("UNSAFE_componentWillMount Listo ✅");
  }

  componentDidMount() {
    console.log("ComponentDidMount Listo ✅");
    this.boxRef.current.addEventListener("scroll", () => { // Greamos un listener para escuchar el scroll denuestro elemento box
      console.log("Box scroll:", this.boxRef.current.scrollTop);
      this.setState({ //Actualizamos el estado con el valor de scroll recorrido del top de el elemento box
        scrollY: this.boxRef.current.scrollTop
      });
    });

    // IMPORTANTE: Cada vez que levantamos un event listener / suscripción, 
    // Tenemos que tener en mente darlo de baja en el metodo de ciclo de vida componentWillUnmount()
  }

  render() {
    console.log('Render Listo ✅');
    return (
      <section className="App-container-component">
        <h2>componentDidMount()</h2>
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

export default ComponentDidMount;

/**
 * ------------------------------------
 * componentDidMount()
 * ------------------------------------
 *
 * componentDidMount() se invoca inmediatamente después de que un componente se monte(se inserte en el árbol del DOM).
 * La inicialización que requiere nodos DOM debería ir aquí.
 * Aquí es el momento dodne si se necesitan obtener o cargar datos de otro lugar remoto, es el instante de
 * hacer la solicitud de red.
 *
 * Este método es un buen lugar para establecer cualquier suscripción. Si lo haces,
 * no olvides darle de baja en el ciclode vida componentWillUnmount()
 *
 * Puedes llamar setState() inmediatamente en componentDidMount(). Se activará un renderizado extra, pero
 * sucederá antes de que el navegador actualice la pantalla. Esto garantiza, que aunque en este caso
 * se invocará dos veces el render(), el usuario no verá el estado intermedio.
 * La mayoría de casos deberías ser capaz de asignar el estado inicial en el constructor() en lugar de componentDidMount().
 * Sin embargo, puede ser necesario para casos como modales y tooltips cuando se necesita medir un nodo DOM
 * antes de representar algo que depende se su tamaño o posición.
 *
 */
