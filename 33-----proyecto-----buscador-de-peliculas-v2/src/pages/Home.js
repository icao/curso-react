import React, { Component, Fragment } from "react";
import "bulma/css/bulma.css";
import "../App.css";
import { Title } from "../components/Title";
import { Search } from "../components/Search";
import * as serviceApi from "../services/serviceOmdbAPI";
import { ListMovies } from "../components/ListMovies";

export class Home extends Component {
  constructor() {
    super();
    this.topRef = React.createRef();
  }
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
        this.scrollToTop();
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
        this.scrollToTop();
      }
    );
  };

  validatePagination = () => {
    let { page, totalPages } = this.state;
    if (page === 1) {
      this.setState({ prevDisabled: true });
    }
    if (page === totalPages) {
      this.setState({ nextDisabled: true });
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

  scrollToTop = () =>
    window.scrollTo({
      top: 0,
      left: this.topRef.current.offsetTop,
      behavior: "smooth"
    });

  showResults = () => {
    return this.state.movies.length === 0 ? (
      <span>
        <p className="has-text-centered">
          Sorry, no results were found{" "}
          <span role="img" aria-label="emoji">
            😔
          </span>
          <br />
          Try another movie{" "}
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
      <Fragment>
        <main>
          <section className="section">
            <div className="container">
              <div className="columns">
                <div className="column is-full">
                  <Title>
                    <span role="img" aria-label="jsx-a11y/aria-proptypes">
                      🍿
                    </span>{" "}
                    Browser Movies
                    <span role="img" aria-label="jsx-a11y/aria-proptypes">
                      {" "}
                      🍿
                    </span>
                  </Title>
                </div>
              </div>
              <div className="columns" ref={this.topRef}>
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
                      Use the browser to a search movie
                    </p>
                  )}
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="footer footer__bg">
          <div className="content has-text-centered">
            <p>
              <strong className="subtitle__card">Browser Movie</strong> by{" "}
              <a href="https://github.com/icao">
                César Aparicio - <strong>icao</strong>.
              </a>
            </p>
            <p>
              This website is made with{" "}
              <a href="https://es.reactjs.org" target="_blank" rel="noopener noreferrer">react.js</a>,{" "}
              <a href="https://bulma.io" target="_blank" rel="noopener noreferrer">bulma.css</a> and{" "}
              <a href="http://www.omdbapi.com" target="_blank" rel="noopener noreferrer">OMDb API</a>{" "}
            </p>
          </div>
        </footer>
      </Fragment>
    );
  }
}
