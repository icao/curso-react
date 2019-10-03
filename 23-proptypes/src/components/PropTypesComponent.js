import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PropTypesComponent extends Component {
  // Forma 1 mas recomendada
  static propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  }

  render() {
    const { title, author, date } = this.props;
    return (
      <section className="App-container-component-2">
        <h2>{title}</h2>
        <h5>Autor: {author}</h5>
        <p>
          <small>{date}</small>
        </p>
        <div className="App-contenedor-parrafo">{this.props.children}</div>
      </section>
    );
  }
}

// Forma 2
// PropTypesComponent.propTypes = {
//   title: PropTypes.string.isRequired,
//   date: PropTypes.string.isRequired,
//   author: PropTypes.string.isRequired 
// };

export default PropTypesComponent;

/** 
 * habra caso en los que nuestra app crezca demasiado que ncesitaremos saber
 * que tipo de propiedades son las que tienen que llegar al componente, el tipo de dato y
 * si son obligatorias o no, para esto en react existen las PropTypes. 
 * Las PropTypes son una propiedad que le agregamos al componente donde validamos las propiedades. 
 * Este objeto acepta una key(prop) y valores(tipo y si es requerida o no), que son
 * el nombre de la propiedad, el tipo y si es requerida obligatoriamente o no.  
 * 
 * Para esto, desde React 15.5, las PropTypes se movieron a una libreria externa, por lo cual
 * tenemos que instalarla y consiguiente importarla al componente: 
 * 
 * Repositorio: https://www.npmjs.com/package/prop-types
 * Instalamos: npm install --save prop-types
 * 
 * import PropTypes from 'prop-types';
 * 
 * //Adicionamos PropTypes a nuestro componente
 * PropTypesComponent.propTypes = {   <-- Es importante que la propiedad sea con minuscula. 
 *  title: PropTypes.string.isRequired,
 *  date: PropTypes.string.isRequired,
 *  author: PropTypes.string.isRequired
 * };
 * 
 * De esta manera ya tendremos vlaidando el tipo de entrada y si son requeridas nuestras props. 
 * 
 * Existe otra forma y es la mas recomendada y es tener la propiedad estatica al componente.
 * Es recomendada porque la clase queda mas recogida. 
 * 
 * Por convención es bueno agregarla al inicio como primera propiedad del Class component. 
 * 
 * static propTypes = {
 *  title: PropTypes.string.isRequired,
 *  date: PropTypes.string.isRequired,
 *  author: PropTypes.string.isRequired
 * }
 * 
 * NOTA: si no se cumplen estas condiciones, como por ejemplo no pasar al autor, mostrara un mensaje React en la consola
 * Warning: Failed prop type: The prop `author` is marked as required in `PropTypesComponent`, but its value is `undefined`.
 * 
 * Cabe destacar que solo los mensajes se ven en el modo de desarrollo.
 * 
*/