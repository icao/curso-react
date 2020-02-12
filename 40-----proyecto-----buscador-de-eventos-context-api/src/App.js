import React, { Component, Fragment } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import Form from "./components/Form";
import AllImages from "./images/all_images.jpg";
import ListImages from './components/ListImages'

export const CategoryContext = React.createContext({
  categories: []
});

export const SearchContext = React.createContext({
  getEvents: () => { },
  results: []
});
class App extends Component {
  state = {
    categories: [],
    results: [],
    useSearch: false
  };
  componentDidMount() {
    this.getCategories();
  }

  getCategories() {
    let categories = [
      {
        image_type: "all",
        name_value: "todo",
        image: AllImages
      },
      {
        image_type: "photo",
        name_value: "foto"
      },
      {
        image_type: "illustration",
        name_value: "ilustración"
      },
      {
        image_type: "vector",
        name_value: "vector"
      }
    ];
    this.setState({
      categories
    }, () => {
        console.log("ACTUALIZANDO CATALOGO");
    });
  }

  getEvents = (inputQuery, inputCategory) => {
    console.log(`Buscar ${inputQuery.trim()} en ${inputCategory}`);
    let key = "15213903-aeaa964c328dd346aacbb7cfb";
    let url = `https://pixabay.com/api/?key=${key}&q=${inputQuery.trim()}&image_type=${inputCategory}`;
    axios(url).then(res => {
      console.log("RESPUESTA: ", res.data.hits);
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
    const { categories, results, useSearch } = this.state;
    return (
      <Fragment>
        <CategoryContext.Provider value={categories}>
          <SearchContext.Provider value={this.getEvents}>
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
        </CategoryContext.Provider>
      </Fragment>
    );
  }
}

export default App;
