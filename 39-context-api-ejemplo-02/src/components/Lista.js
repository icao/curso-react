import React, { Component } from 'react';
import {
  AppContext,
  AppContextConsumer
} from "../contexts/AppContext"; 

/**
 * Forma accediendo con el consumer
 */

// class Lista extends Component {
//   render() {
//     return (
//       <div className="children">
//         <h2>
//           <span role="img" aria-label="sheep">
//             👦
//           </span>
//           Hijo
//         </h2>
//         <p className="italic">Suscripción al Provider con el Consumer</p>
//         <AppContextConsumer>
//           {value => {
//             //La funsión dentro del consumer nos permite accesar a toda las propiedades del contexto
//             return (
//               <ol>
//                 {value.usuarios.map((usuario, index) => (
//                   <li key={index}>{usuario}</li>
//                 ))}
//               </ol>
//             );
//           }}
//         </AppContextConsumer>
//       </div>
//     );
//   }
// }

// Usando la propietad contextType, podemos simplificar la suscripcion y consumo del cintexto


/**
 * Forma accediendo con contextType
 */
class Lista extends Component {
  // static contextType = AppContext; //Forma experimental: Propiedad estatica de la clase
  render() {
    //this.context.usuarios -> Podemos acceder con this al context
    // const { context } = this; -> Podemos destructurar a this o a this.context
    const { usuarios } = this.context;
    return (
      <div className="children">
        <h2>
          <span role="img" aria-label="sheep">
            👦
          </span>
          Hijo
        </h2>
        <p className="italic">Suscripción al Provider con el Consumer</p>
        <ol>
          {usuarios.map((usuario, index) => (
            <li key={index}>{usuario}</li>
          ))}
        </ol>
      </div>
      // NOTA: al hacerlo de esta forma ya no hacemos uso de una arrow function que acceda al argumento 'value' que es la propiedad pasada atravez del provider a sus hijos.
      //Como asignamos el contexto 'AppContext' a la propiedad contextType de nuestra clase, solo hacemos referencia a los valores de las propiedades por medio del uso de 'this'
    );
  }
}

Lista.contextType = AppContext; //Forma clasica de usar contextType


export default Lista;