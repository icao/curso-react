import React, {Component} from "react";

/**
 * Functional Component - Arrow Function
 */
// const PropsDefault = ({message}) => {
//   return (
//     <h1>{message}</h1>
//   )
// }

/**
 * Functional Component
 */
// function PropsDefault({message}) {
//   return <h1>{message}</h1>;
// }

/**
 * Class Component
 */
class PropsDefault extends Component {
  render() { 
    const { message } = this.props;
    return <h1>{message}</h1>;
  }
}

/** 
 * 
 * Asi se establecen las propiedades por default,
 * haciendo uso de un método "defaultProps" que constituye un objeto con las propiedades.
*/
PropsDefault.defaultProps = {
  message: "Mensaje por default" // Propiedad por default por si no se establece en la instancia donde es llamado
}

export default PropsDefault;
