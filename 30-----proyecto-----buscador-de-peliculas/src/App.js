import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import { Title } from "./components/Title";
import { Search } from "./components/Search";
import * as serviceApi from "./services/serviceOmdbAPI";
import { ListMovies } from "./components/ListMovies";

class App extends Component {
  state = {
    movies: [],
    usedSearch: false
  };

  searchMovie = query => {
    serviceApi.searchMovies(query).then(({ Search = [] }) => {
      console.log({ Search });
      this.setState({
        movies: Search,
        usedSearch: true
      });
    });
  };

  showResults = () => {
    return this.state.movies.length === 0 ? (
      <span>
        <p className="has-text-centered">
          Lo sentimos, no se encontraron resultados{" "}
          <span role="img" aria-label="emoji">
            😔
          </span>
        </p>
        <p className="has-text-centered">
          Intenta con otra busqueda{" "}
          <span role="img" aria-label="emoji">
            😊
          </span>
        </p>
      </span>
    ) : (
      <ListMovies movies={this.state.movies} />
    );
  };

  render() {
    return (
      <main>
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-full">
                <Title>
                  <span role="img" aria-label="jsx-a11y/aria-proptypes">
                    🍿
                  </span>{" "}
                  Buscador de películas{" "}
                  <span role="img" aria-label="jsx-a11y/aria-proptypes">
                    📽
                  </span>
                </Title>
              </div>
            </div>
            <div className="columns">
              <div className="column is-full">
                <Search search={this.searchMovie} />
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-full">
                {this.state.usedSearch ? (
                  this.showResults()
                ) : (
                  <p className="has-text-centered">
                    Usa el buscador para encontrar una pelicula
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default App;
