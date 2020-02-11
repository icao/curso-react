import React, { Component, Fragment } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import Form from "./components/Form";
import AllImages from "./images/all_images.jpg";

export const AppContext = React.createContext({
  categories: []
});

export const SearchContext = React.createContext({
  getEvents: () => {}
});
class App extends Component {
  state = {
    categories: [],
    results: []
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
    });
  }

  getEvents = (inputQuery, inputCategory) => {
    console.log(`Buscar ${inputQuery} en ${inputCategory}`);
    let key = "15213903-aeaa964c328dd346aacbb7cfb";
    let url = `https://pixabay.com/api/?key=${key}&q=${inputQuery}&image_type=${inputCategory}`;
    axios(url).then(res => {
      console.log("RESPUESTA: ", res.data.hits);
      let results = res.data.hits;
      this.setState({
        results
      });
    });
  };

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
