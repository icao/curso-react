import React, { Component } from 'react';

class GetSnapshotBeforeUpdate extends Component {
  constructor(props) {
    console.log("Constructor Listo ✅");
    super(props);
    this.boxRef = React.createRef(); // Creamos una referencia para acceder a nuestro elemento
    this.state = {
      scrollY: 0
    };
  }

  componentDidMount() {
    //Aqui ya podemos hacer uso de peticiones ajax y manipular los datos del componente
    console.log("-> ComponentDidMount() ✅");
    this.boxRef.current.addEventListener("scroll", () => {
      // Greamos un listener para escuchar el scroll denuestro elemento box
      console.log("Box scroll Listener 🦻:", this.boxRef.current.scrollTop);
      this.setState({
        //Actualizamos el estado con el valor de scroll recorrido del top de el elemento box
        scrollY: this.boxRef.current.scrollTop
      });
    });
  }

  // Se ejecuta DESPUES del render()
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // Puedes usar las props o state para evaluar o enviar un valor.
    console.log('-> getSnapshotBeforeUpdate() 📤 prevState:', prevState.scrollY);
    //Regresamos el vlaor a envial a componentDidUpdate() o null si no queremos enviar nada
    return { hola: "Saludos!", dom: this.boxRef.current };
    //Si enviamos varios valores podemos enviar un objeto con ellos
  }

  // Se ejecuta despues de getSnapshotBeforeUpdate()
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('snapshot: ', snapshot);
    console.log(
      `-> componentDidUpdate() 📨 prevState: ${prevState.scrollY} | snapshot hola: ${snapshot.hola} | snapshot dom width:${snapshot.dom.scrollWidth}`
    );
    console.log("__________________________________________________");

    // esta condición podemos hacerla si el método recibe a snapshot
    // if (snapshot !== null) {
    //   /* Código */
    // }
  }

  render() {
    console.log("-> Render() ✅");
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

export default GetSnapshotBeforeUpdate; 

/** 
 * --------------------------------------
 * getSnapshotBeforeUpdate()
 * --------------------------------------
 * 
 * getSnapshotBeforeUpdate() se invoca antes de que la salida renderizada más reciente se entregue, 
 * por ejemplo, al DOM. Permite al componente capturar cierta información del DOM(por ejemplo, la posición del scroll)
 * antes de que se cambie potencialmente.
 * Cualquier valor que se devuelva en este ciclo de vida se pasará como parametro al método()
 * 
 * Este caso de uso no es común, pero puede ourrir en IUs como un hilo de chat que necesita manejar
 * la posición del scroll de manera especial.
 * 
 * Debe devolverse un valor instantáneo(o null). 
 * 
 * Este método se ejecuta después de render() y antes de componentDidUpdate(), el valor que regresa la
 * ejecución de este método se convierte en el tercer parámetro llamado snapshot de 
 * componentDidUpdate(prevProps, prevState, snapshot), este método debe regresar algún valor o null.
 * 
*/