import React, { Component } from "react";

/** 
 * Destructuring Props in Class component
 * Como habiamos visto, en los class compents, las propiedades
 * son pasadas atravez de la propiedad "this", por lo que al momento
 * de aplicar la Destructuración tenemos que igualarlo a "this.props"
 * 
 * Esto dentro del método "render", que se encarga de pintar en
 * la interfaz lo que regrese el "return".
 * Al momento de aplicar la destructuración, usamos los calores
 * acccediendo solo con la llave(nombres), como se muestra en el ejemplo.
*/
class LeftComponent extends Component {
  render() {
    const {
      email,
      userName: { title, first, last },
      location: {
        street,
        city,
        state,
        postcode,
        coordinates: { latitude, longitude }
      },
      phone,
      photo: { large },
      titleSection
    } = this.props;  // this.props = donde se almacenan las props,
    // que son pasadas atravez de la instancia del componente.

    return (
      <section className="Container-component-left">
        <h2>{titleSection}</h2>
        <img src={large} className="App-image" alt="screen user" />
        <h4 className="App-paragraph">
          {title} {first} {last}
        </h4>
        <ul>
          Address:
          <li>{street}</li>
          <li>{city}</li>
          <li>{state}</li>
          <li>{postcode}</li>
        </ul>
        <p><em>{email}</em></p>
        <p className="App-paragraph">{phone}</p>
        <ul>
          Map coordinates:
          <li>{latitude}</li>
          <li>{longitude}</li>
        </ul>
      </section>
    );
  }
}

export default LeftComponent;
