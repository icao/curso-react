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
    serviceApi.getNews(category, "mx").then(response => {
      console.log(response);
      this.setState({
        articles: response.articles
      });
    });
  };

  componentDidMount() {
    this.searchNews();
  }

  showResults = () => {
    return this.state.articles.length !== 0 ? (<ListNews news={this.state.articles} />) : (<h2>Loading...</h2>);
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
          <div className="container ">{this.showResults()}</div>
        </div>
        
      </div>
    );
  }
}

export default App;
