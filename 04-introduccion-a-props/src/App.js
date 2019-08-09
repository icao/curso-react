import React from "react";
import "./App.css";
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

const hero = {
  name: {
    title: "Mr",
    first: "Bruce",
    last: "Wayne"
  },
  identity: "Batman",
  photo: "https://cutt.ly/mwyobH9",
  resume: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
};

function App() {
  let date = new Date().getFullYear();
  return (
    <div className="App">
      <Header
        superhero={hero.identity}
      />
      <Content
        array={[1,2,3,4,5,6]}
        photo={hero.photo}
        name={`${hero.name.title} ${hero.name.first} ${hero.name.last}`}
        resume={hero.resume}
      />
      <Footer
        date={date}
      />
    </div>
  )
}

export default App;

/**
 * Props:
 * Las props son elementos que pasan información al componente, estos son enviados 
 * desde el tag del componente como atributos, igualandoles el valor a enviar.
 * Haciendo uso de la interpolación con los "{ valor }", se pueden enviar valores numéricos,
 * cadenas de texto, boleanos, arreglos y objetos.
 * Las Props son la única manera de enviar información del componente padre a los hijos.
 * No puede ocurrir al contrario. 
 * Siempre la información se propaga del nodo padre a los nodos hijos.
 */
