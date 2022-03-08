import React, { Component } from "react";
import * as serviceApi from "./services/serviceNewsAPI";
import "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import "./styles/App.css";
import Header from "./components/Header";
import Headband from "./components/Headband";
import ListNews from "./components/ListNews";
import Spinner from "./components/Spinner";
import { DateTime } from "luxon";

class App extends Component {
  state = {
    articles: [],
    totalResults: null,
  };

  searchNews = (category) => {
    let date = new Date();
    let formattedDate = `${date.getUTCFullYear()}-${
      date.getMonth() + 1
    }-${date.getUTCDate()}`;

    console.log("DATE:" + date);
    console.log(
      new Date().toLocaleString("es-MX", { timeZone: "Mexico/General" }),
      "\n",
      new Date().toLocaleString("es-MX", { timeZone: "America/Mexico_City" }),
      "\n",
      "\n"
    );

    console.log(
      "%cFECHA Mexico/General: %o",
      "color: red ;",
      DateTime.now().setZone("Mexico/General")
    );
    console.log(
      "%cFECHA America/Mexico_City: %o",
      "color: green ;",
      DateTime.now().setZone("America/Mexico_City")
    );

    console.log("%cFECHA UTC: %o", "color: pink ;", DateTime.utc());
    console.log(
      "%cFECHA NOW to UTC: %o",
      "color: pink ;",
      DateTime.now().toUTC()
    );
    console.log(
      "%cFECHA UTC to LOCAL: %o",
      "color: pink ;",
      DateTime.utc().toLocal()
    );

    serviceApi.getNews(category, "mx", formattedDate).then((response) => {
      this.setState({
        articles: response.data,
        totalResults: response.pagination.total,
      });
    });
  };

  componentDidMount() {
    this.searchNews();
  }

  showResults = () => {
    return this.state.articles.length !== 0 ? (
      <ListNews news={this.state.articles} results={this.state.results} />
    ) : (
      <Spinner />
    );
  };

  render() {
    return (
      <div>
        <header className="header">
          <div className="container">
            <Header title="the world times" />
          </div>
        </header>
        <div className="container">
          <Headband searchNews={this.searchNews} />
        </div>
        <div className="list__news__container">
          <div className="container ">
            {this.state.totalResults === 0 && (
              <div>
                <h2>No se encontraron resultados</h2>
                <h3>Intenta con otra categoría</h3>
              </div>
            )}
            {this.showResults()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
