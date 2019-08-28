import React from "react";

const PropFunction = ({
  title, // Cadena de texto
  arreglo, // Array
  potenciaX // Función para elevar a la potencia x
  //Donde x: cualquier número
}) => {
  // Podemos transformar los valores antes de usarlos
  const doble = arreglo.map(element => element * 2); 
  // Igual podemos usar una función pasada como una prop.
  const potencia = arreglo.map(potenciaX);
  return (
    <section>
      <h2>{title}</h2>
      <br />
      <p>
        Arreglo -> <strong>{arreglo.join(", ")}</strong>
      </p>
      <br />
      <p>
        Multiplicado x 2 -> <strong>{doble.join(", ")}</strong>
      </p>
      <br />
      <p>
        Potencia al cuadrado -> <strong>{potencia.join(", ")}</strong>
      </p>
    </section>
  );
};

export default PropFunction;
