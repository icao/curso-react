import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import { Title } from "./components/Title";
import { Search } from "./components/Search";
import * as serviceApi from "./services/serviceOmdbAPI";
import { ListMovies } from "./components/ListMovies";

class App extends Component {
  state = {
    movies: []
  };

  searchMovie = query => {
    serviceApi.searchMovies(query).then(({ Search = [] }) => {
      console.log({ Search });
      this.setState({
        movies: Search
      });
    });
  };

  showResults = () => {
    return this.state.movies.length === 0 ? (
      <p>Lo sentimos, no se encontraron resultados</p>
    ) : (
      <ListMovies movies={this.state.movies} />
    );
  };

  render() {
    return (
      <main className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-full">
              <Title>
                <span role="img" aria-label="jsx-a11y/aria-proptypes">
                  🍿📽
                </span>
                Buscador de películas
              </Title>
            </div>
          </div>
          <div className="columns">
            <div className="column is-full">
              <Search search={this.searchMovie} />
            </div>
          </div>
          {/* meter en una funcion evaluando results */}
          <div className="columns">
            <div className="column is-full">{this.showResults()}</div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
