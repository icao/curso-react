import React from 'react';
// import 'normalize.css'
import "./styles/App.css";
import Header from './components/Header'
import Headband from "./components/Headband";


function App() {
  return (
    <div>
      <Header title="the world times" />
      <Headband />
      <p>TODO: Revisar si borrar normalize de el proyecto</p>
    </div>
  );
}

export default App;
