import React, { Component, Fragment } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import Form from "./components/Form";
import ListImages from './components/ListImages'
import { CategoryContextProvider } from './context/CategoryContext'



export const SearchContext = React.createContext({
  getEvents: () => { },
  results: []
});
class App extends Component {
  state = {
    results: [],
    useSearch: false
  };
 
  getEvents = (inputQuery, inputCategory) => {
    let key = "15213903-aeaa964c328dd346aacbb7cfb";
    let url = `https://pixabay.com/api/?key=${key}&q=${inputQuery.trim()}&image_type=${inputCategory}`;
    axios(url).then(res => {
      let results = res.data.hits;
      this.setState({
        results,
        useSearch: true
      });
    });
  };

  showResults = () => {
    return this.state.results.length === 0 ? (
      <div className="container flex__center">
        <p className="text--center">
          Lo sentimos, no se encontraron resultados.
          <span role="img" aria-label="jsx-a11y/aria-proptypes">
            {" "}
            😥
          </span>
          <br />
          Intenta con otra busqueda.
        </p>
      </div>
    ) : (
      <ListImages />
    );
    
  }
 
  render() {
    const { results, useSearch } = this.state;
    const value = {
      results,
      getEvents: this.getEvents
    }
    return (
      <Fragment>
        <CategoryContextProvider>
          <SearchContext.Provider value={value}>
            <header className="container__header">
              <Header />
            </header>
            <section className="container__hero__banner">
              <HeroBanner>
                <Form />
              </HeroBanner>
            </section>
            <section className="container__results">
              {useSearch ? (
                this.showResults()
              ) : (
                <div className="container">
                  <p className="text--center">
                    Nuestro banco de imágenes tiene más de 1.599228 millones de
                    imágenes gracias a <strong>PIXABAY</strong>.
                  </p>
                  <p className="text--center">
                    Usa el buscador para encontrar tu favorita.
                  </p>
                </div>
              )}
            </section>
          </SearchContext.Provider>
        </CategoryContextProvider>
      </Fragment>
    );
  }
}

export default App;
