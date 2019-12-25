import React, { Component } from "react";
// import 'normalize.css'
import * as serviceApi from "./services/serviceNewsAPI";
import "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import "./styles/App.css";
import Header from "./components/Header";
import Headband from "./components/Headband";
import ListNews from "./components/ListNews";

class App extends Component {
  state = {
    articles: []
  };

  searchNews = category => {
    console.log("BUSCAR NOTICIAS DE: ", category);
    serviceApi.getNews(category, "mx").then(response => {
      console.log(response);
      this.setState({
        articles: response.articles
      });
    });
  };

  componentDidMount() {
    this.searchNews()
  }

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
        <div className="container">
          <ListNews news={this.state.articles}/>
        </div>
      </div>
    );
  }
}

export default App;
