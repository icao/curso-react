import React from 'react';
import logo from './logo.svg';
import './App.css';

/**
 * Componente con React.createelement
 */
// function App() {
//   return (
//     React.createElement(
//       'div',
//       {className:'App'},
//       React.createElement(
//         'img',
//         { src: logo , className: 'App-logo', alt:'logo'}
//       ),
//       React.createElement(
//         'h1',
//         { id: 'name', className: 'name' },
//         'Hola Mundo con createElement'
//       )
//     )
//   );
// }

/**
 * Componente con JSX
 */
function App() {
  return (
    <div className="App">
      <img src={logo}
      className="App-logo" alt="logo"/>
      <h1>Hola mundo</h1>
    </div>
  );
}

export default App;

/**
 * Con React podemos hacer uso de un método para ir creando los 
 * elementos o hacer uso de la sintaxis de JSX.
 * Tenemos los dos casos, usando el método createElement()
 * que se compone de 3 parametros(ejemplo basico), los cuales son:
 * el tipo de elemento, atributos del elemento y el contenido del elemento.
 * React.createElement(
 *      'h1', <-- Tipo de Tag ==> String
 *      { id: 'name', className: 'name' }, <-- Atributos ==> Objeto
 *     'Hola Mundo con createElement' <-- Contenido ==> String, u 
 *      otro elemento React.createElement
 *    )
*/