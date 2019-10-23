import React, { Component } from "react";

class Father extends Component {
  state = { showChild: true }

  showComponent = () => {
    this.setState({
      showChild: false
    });
  }

  render() { 
    return (
      <section className="App-container-component-2">
        <h1>Ciclos de vida Desmontaje</h1>
        <button onClick={this.showComponent}>Desmontar Componente</button>
        {this.state.showChild === true ? <ComponentWillUnmount /> : 'Componente desmontado'}
      </section>
    )
  }
}

class ComponentWillUnmount extends Component {
  constructor(props) {
    console.log("Constructor Listo ✅");
    super(props);
    this.boxRef = React.createRef();
    this.state = {
      scrollY: 0,
      resizeWidth: 0
    };
  }

  scrollFunction = () => {
    console.log("↕ Box scroll Listener 🦻:", this.boxRef.current.scrollTop);
    this.setState({
      scrollY: this.boxRef.current.scrollTop
    });
  };

  widthFunction = () => {
    console.log("↔ Width Resize Listener 🦻:", document.body.clientWidth);
    this.setState({
      resizeWidth: document.body.clientWidth
    })
  }

  componentDidMount() {
    console.log("-> ComponentDidMount() ✅");
    this.boxRef.current.addEventListener("scroll", this.scrollFunction);
    // listener para medir wl width de la ventana
    this.widthFunction() //Inicializamos para obtener el width inicial
    window.addEventListener("resize", this.widthFunction);
  }

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

  componentWillUnmount() {
    console.log("-> componentWillUnmount() 🚮");
    this.boxRef.current.removeEventListener("scroll", this.scrollFunction);
    window.removeEventListener("resize", this.widthFunction);
    /** 
     * IMPORTANTE: Necesitamos remover los listeners, en caso contrario, el listener estaria activo aunque el componente 
     * se haya removido de la UI. Nos marcara un error en consola si no lo hemos desactivado. 
    */
  }

  render() {
    console.log("-> Render() ✅");
    return (
      <section className="App-container-component">
        <h2>componentWillUnmount()</h2>
        <h3>Resize Width: {this.state.resizeWidth}px</h3>
        <p className="paragraph">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo ab
          laborum sint ducimus consequatur est animi, beatae illo perferendis,
          praesentium impedit necessitatibus eum. Officiis possimus, quibusdam
          eius id ut corrupti.
        </p>
        <h3>Scroll Top: {this.state.scrollY}px</h3>
        <article className="box" ref={this.boxRef}>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique error atque deleniti cupiditate cum eos repellat ad vero tempora distinctio magni natus et aliquam nesciunt nihil molestias, fuga veniam ut. <br/>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident quisquam ex cupiditate atque aperiam autem ipsum aliquam animi quas recusandae. Architecto, vero nisi placeat corrupti deleniti a magnam voluptates nihil. <br/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus hic
            ipsam sunt laudantium expedita officia dolor dolorem consequatur non
            vel quisquam alias nostrum accusantium maxime rerum omnis,
            architecto veritatis. Consequuntur! <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, amet corrupti facilis consequuntur voluptate quos eum reprehenderit laboriosam modi magni labore aliquid, harum porro cum delectus! Impedit quas ducimus modi? <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate, quasi esse sapiente assumenda molestiae delectus maiores illo, temporibus vel quae. Provident repellendus modi ullam optio. Voluptas est labore incidunt.
          </p>
        </article>
      </section>
    );
  }
}



export default Father;

/**
 * --------------------------------------
 * componentWillUnmount()
 * --------------------------------------
 * 
 * componentWillUnmount() se invoca inmediatamente antes de desmontar y destruir un componente. 
 * Realiza las tareas de limpieza necesarias en este método, como la invalidación de temporizadores,
 * la cancelación de solicitudes de red o la eliminación de las suscripciones que se crearon en 
 * componentdidMount(). 
 * 
 * NO DEBES LLAMAR A setState() en componentwillUnmount() porque el componente nunca será vuelto a renderizar. Una vez que una instancia de componente sea desmontada, nunca será montada de nuevo.
 * 
 */
