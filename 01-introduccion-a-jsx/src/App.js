import React from "react";
import "./App.css";

const persona = {
  nombre: "Billy",
  apellido: "Rupertillo",
  edad: 50,
  jubilacion: 60,
  foto: "http://cort.as/-MTaG"
};

function App() {
  return (
    <div className="App">
      <img src={persona.foto} alt="foto" />
      <h1>{`${persona.nombre} ${persona.apellido}`}</h1>
      <p>{persona.edad} años</p>
      <p>Tiempo para jubilarse {persona.jubilacion - persona.edad} años 😱</p>
      <p>{persona.edad === 60 ? <strong>✅Listo para jubilarse </strong> : <strong>😥Trabajale como esclavo😫</strong>}</p>
    </div>
  );
}

export default App;
