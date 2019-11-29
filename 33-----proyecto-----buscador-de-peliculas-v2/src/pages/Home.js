import React, { Component } from "react";
import "bulma/css/bulma.css";
import "../App.css";
import { Title } from "../components/Title";
import { Search } from "../components/Search";
import * as serviceApi from "../services/serviceOmdbAPI";
import { ListMovies } from "../components/ListMovies";

export class Home extends Component {
  state = {
    query: "",
    movies: [],
    totalResults: "",
    page: "",
    totalPages: "",
    usedSearch: false,
    prevDisabled: false,
    nextDisabled: false
  };

  previousPage = () => {
    console.log("⏮ Página Anterior...");
    let page = this.state.page;
    if (page === 1) {
      return null;
    }
    page -= 1;
    this.setState(
      {
        page,
        nextDisabled: false
      },
      () => {
        this.consultarApi();
        localStorage.setItem("page", page);
      }
    );
  };

  nextPage = () => {
    console.log("⏭ Página Siguiente...");
    let { page, totalPages } = this.state;
    if (page === totalPages) {
      return null;
    }
    page += 1;
    this.setState(
      {
        page,
        prevDisabled: false
      },
      () => {
        this.consultarApi();
        localStorage.setItem("page", page);
      }
    );
  };

  validatePagination = () => {
    let { page, totalPages } = this.state;
    if (page === 1) {
      this.setState({ prevDisabled: true });
    }
    if (page === totalPages) {
      this.setState({nextDisabled: true})
    }
  };

  searchMovie = query => {
    this.setState(
      {
        query: query,
        page: 1,
        prevDisabled: false,
        nextDisabled: false
      },
      () => {
        this.consultarApi();
        localStorage.setItem("page", 1);
      }
    );
  };

  getPages = total => Math.ceil(total / 10);

  consultarApi = () => {
    let { query, page } = this.state;
    serviceApi
      .searchMovies(query, page)
      .then(({ Search = [], totalResults }) => {
        let pages = this.getPages(totalResults);
        this.setState({
          movies: Search,
          usedSearch: true,
          totalResults,
          totalPages: pages
        });
      })
      .then(() => {
        this.validatePagination();
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
          <br />
          Intenta con otra busqueda{" "}
          <span role="img" aria-label="emoji">
            😊
          </span>
        </p>
      </span>
    ) : (
      <ListMovies
        movies={this.state.movies}
        previousPage={this.previousPage}
        nextPage={this.nextPage}
        prevDisabled={this.state.prevDisabled}
        nextDisabled={this.state.nextDisabled}
      />
    );
  };

  componentDidMount() {
    if (localStorage.query && localStorage.page) {
      // Si existe en el localStorage, query  y paginación.
      // entonces actualiza el estado
      this.setState(
        {
          query: localStorage.query,
          page: JSON.parse(localStorage.page)
        },
        () => {
          this.consultarApi();
        }
      );
    }
  }

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
                  Buscador de películas
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
