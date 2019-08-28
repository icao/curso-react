import React from "react";

/** 
 * Destructuring Props in functional component
 * A diferencia del class component, podemos hacer la destructuración
 * pasandola a la función.
 * No tenemos que igualar a nada el objeto nuevo.
 * Y Solo usamos los nombres de las llaves para poder tenerlos
 * disoinibles.
 * Es necesario que las propiedades se llamen como
 * las props que se pasan desde la instancia del componente.
*/
function RightComponent({
  titleSection,
  userName: { title, first, last },
  location: {
    street,
    city,
    state,
    postcode,
    coordinates: { latitude, longitude }
  },
  email,
  phone,
  photo: { large }
}) {
  return (
    <section className="Container-component-right">
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
      <p>
        <em>{email}</em>
      </p>
      <p className="App-paragraph">{phone}</p>
      <ul>
        Map coordinates:
        <li>{latitude}</li>
        <li>{longitude}</li>
      </ul>
    </section>
  );
}

export default RightComponent;
