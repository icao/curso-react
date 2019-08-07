// import React, { Component } from "react"; //For Class Component
import React from "react"; //For Functional Component
import "./App.css";

/**
 * Class Component
 */
// class App extends Component { // Eetends from the component class
//   render() { // The render method is mandatory
//     return ( // And the return
//       <div className="App">
//         <h1>Class Component vs Functional Component</h1>
//       </div>
//     );
//   }
// }

/**
 * Functional Component
 */
function App() { // It is only declared as a function or function expression
  return ( // Use the return method
    <div className="App">
      <h1>Class Component vs Functional Component</h1>
    </div>
  );
}

export default App; // In both cases they are exported by name
