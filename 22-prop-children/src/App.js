import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Box from "./components/Box";
import Article from "./components/Article";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="App-components">
        <h1>Propiedad Children</h1>
        {/* Mandamos a llamar unas instancias del componente box,
        le pasamos un encabezado que tomara el componente Box y lo usara para rellenarse */}
        <Box>
          <h3>Hola soy un componente</h3>
        </Box>
        <Box>
          <h5>Hola soy otro componente reusable</h5>
        </Box>
        {/* Llamamos al componente Article  y le pasamos el contenido con propiedades y dentro de la etiqueta que seran usados en la propiedad children */}
        <Article
          title="Slots como en Vuejs"
          author="Cesar icao"
          date={new Date().toLocaleDateString()}
        >
          {/* Los elementos que queremos pasar los anidamos dentro del componente */}
          <p>
            El contenido que envolvemos dentro del componente 'Article' será
            enviado al componente como this.props.children
          </p>
          <p>
            <strong>
              <small>
                Y mantiene el contenido y componentes que haya dentro
              </small>
            </strong>
          </p>
        </Article>
        <Article
          title="Electrone Vue"
          author="Ruffuss"
          date={new Date().toLocaleDateString()}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            dolorem sequi doloribus aut laboriosam ipsa vitae omnis atque!
            Doloremque nam nulla officia dignissimos a. Reprehenderit, nemo
            sunt. Id, dolore cumque.
          </p>
        </Article>
      </section>
    </div>
  );
}

export default App;

/**
 * Las props children
 * Nos devuelve el contenido que envuelve nuestro componente,
 * Sirve para crear componentes reusable, layouts o pequeñas plantillas.
 *
 * Es algo similar a los SLOTs en Vuejs, se manejan de la misma forma,
 * podemos establecer el componente y estaticamente una estructura que se rellenara con el contenido que le pasaremos
 * desde el componente padre, envuelta en las mismas tags del componente, veamos el ejemplo.
 * 
 * NOTA: Tanto Box como Atricle funcionan como componentes layout 
 */
