import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import AlbumDetail from "./components/AlbumDetail"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Roter> Es el componente que elvolvrá nuestr app */}
      <Router>
        <Nav />
        <div className="container">
          <Switch>
            <Route path="/" exact component={Home} />
            {/* Pasamos id que se adicionara como una propiedad mas en la url, que usaremos en el componente AlbumDetail */}
            <Route path="/about" exact component={About} />
            <Route path="/about/:id" exact component={AlbumDetail} />
            <Route
              path="/blog"
              exact
              strict
              render={() => {
                return (
                  <h1>
                    <span role="img" aria-label="emoji">
                      📰
                    </span>{" "}
                    Blog Page
                  </h1>
                );
              }}
            />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

/**
 * React Router
 * ------------------------------
 * React router es una libreria que nos ayuda a hacer la navegación entre paginas, en nuestra app de react.
 * Para la creación de single page application.
 *
 * 1.- BrowserRouter
 * Para hacer uso de React Router, tenemos que envolver nuestra app o parte de ella en un omponente llamado BrowseRouter,
 * o como la hayas llamado, en nuestro caso <Router>
 *
 * 2.- Route
 * El componente route, nos permite establecer las "paginas" de nuestra web y especificar que componente se deberá mostrar
 * dada cierta ruta(url) en nuestra aplicación, entre otras propiedades en especifico.
 * NOTA: Con route se establecen rutas absolutas que solo se acceden atra vez de la especificación de la url en el navegador.
 *
 * 2.1 path
 * Con path, establecemos la ruta personalizada, como un string.
 * 
 * 2.1.1 ':parametro_dinamico'
 * Con los ':' especificamos que pasarémos un elemento adicional a la url, el cual pasaremos de forma dinamica en el componente declarado en component.
 *
 * 2.2 render
 * Recibe una funcion con elementos a renderizar en JSX, recibe una función que retorna algo.
 *
 * 2.3 component
 * Recibe el nombre de uncomponente que se desea mostrar
 *
 * 2.4 exact
 * Especifica que la ruta sea mostrada respetando exactamente el string de 'path'
 * Si no espeficicamos esta propiedad, se mostraran todos los componentes que cumplan con 'path',
 * dado que 'path' evalua como una expresión regular.
 * Ejemplo: Si path="/"  --> Entonces se mostraran todos los componentes que su ruta inicien con "/"
 *
 * 2.5 strict
 * Fuerza a evaluar la expresión regular en path, de tal manera que si se cumple la condición exacta, se muestra el componente,
 * caso contrario no se muesta. 
 * ejemplo: si path="/about/" -> podemos acceder con /about/ o /about y nos llevara al mismo componente. 
 * Si adicionamos la propiedad strict,  path="/about/" strict -> podemos acceder con /about/ pero NO con /about
 * NOTA: Solo funciona si se antecede la propiedad exact
 *
 * 3.- Switch
 * Un Switch mira a través de sus rutas secundarias y representa el primero que coincide con la URL actual
 * 
 * 
 * 4.- Link
 * Ver en el componente Nav, ahi esta documentado. 
 * Basicamente nos sirve para establecer los links en ves de usar "a con href"
 */
