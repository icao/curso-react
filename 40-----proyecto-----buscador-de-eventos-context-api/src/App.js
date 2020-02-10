import React, { Component, Fragment } from "react";
import axios from 'axios'
import "./App.css";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import Form from "./components/Form";

export const AppContext = React.createContext({
  categories: []
})

export const SearchContext = React.createContext({
  getEvents: () => {}
})
class App extends Component {
  state = {
    categories: []
  }
  componentDidMount() {
    // hacer peticion al servicio para obtener las categorias
    // una vez obtenida las categorias, enviar al estado
    this.getCategories()
  }

  getCategories() {
    let options = {
      headers: {'Authorization': 'Bearer L55VEZFPSOTQKDJLRYJG'}
    }
    axios("https://www.eventbriteapi.com/v3/categories/?locale=es_ES", options)
      .then(res => {
        console.log(
          "RESPONSE: ",
          res.data.categories.map(cat => cat.name_localized)
        );
        this.setState({
          categories: res.data.categories
        });
      })
  }

  getEvents(e) {
    // e.preventDefault()
    let options = {
      headers: { Authorization: "Bearer L55VEZFPSOTQKDJLRYJG" }
    }
    console.log("obteniendo los eventos", e);
    // axios("url", options)
  }

  render() {
    // const categories = this.state
    return (
      <Fragment>
        <AppContext.Provider value={this.state.categories}>
          <SearchContext.Provider value={this.getEvents}>
            <header className="container__header">
              <Header />
            </header>
            <section className="container__hero__banner">
              <HeroBanner>
                <Form />
              </HeroBanner>
            </section>
          </SearchContext.Provider>
        </AppContext.Provider>
      </Fragment>
    );
  }
}

export default App;
