import React, { Component } from "react";
import axios from "axios";
import ListImages from "../components/ListImages";

export const SearchContext = React.createContext({
  getEvents: () => {},
  results: []
});

export class SearchContextProvider extends Component {
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
  };

  render() {
    const value = {
      results: this.state.results,
      getEvents: this.getEvents,
      useSearch: this.state.useSearch,
      showResults: this.showResults
    };
    return (
      <SearchContext.Provider value={value}>
        {this.props.children}
      </SearchContext.Provider>
    );
  }
}

export const SearchContextConsumer = SearchContext.Consumer;
