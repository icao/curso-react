import React, {Component, Fragment } from "react";
import "./App.css";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import Form from "./components/Form";


export const AppContext = React.createContext({
  categories: []
})
class App extends Component {
  componentDidMount() {
    // hacer peticion al servicio para obtener las categorias
    // una vez obtenida las categorias, enviar al estado

  }

  render() {
    return (
      <Fragment>
        {/* una vez obtenido las categorias, pasarlo como value al provider */}
        <AppContext.Provider> 
          <header className="container__header">
            <Header />
          </header>
          <section className="container__hero__banner">
            <HeroBanner>
              <Form />
            </HeroBanner>
          </section>
        </AppContext.Provider>
      </Fragment>
    );
  }
}

export default App;
