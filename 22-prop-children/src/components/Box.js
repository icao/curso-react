import React, { Component } from 'react';

class Box extends Component{
  render() {
    return (
      <section
        className="App-container-component"
        style={{
          border: '2px solid #a3c',
          padding: '0.8em',
          margin: '0.4em'
        }}
      >
        {/* // Nuestro titulo es el unico elemento dinamico que es pasado a travez de la instancia del componente que sera recibido por la prop children */}
        {this.props.children} 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla neque sed voluptas, odit, eligendi beatae ab eum quibusdam vitae laudantium aspernatur maiores dolore dolorem. Dicta ipsa eos inventore reiciendis at!</p>
      </section>
    )
  }
}

export default Box;

/** 
 * Nuestro componente box esta actuando como una plantilla
 * que espera su contenido a tra vez de la propiedad children.
 * Esto es similar a los slots de vuejs. 
 * 
 * Nosotros podemos tener un componente plantilla personalizado que solo espere
 * algun otro elemento que deba renderear.
*/