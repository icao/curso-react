import React, { Component } from 'react';
// import 'normalize.css'
import * as serviceApi from './services/serviceNewsAPI'
import "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import "./styles/App.css";
import Header from './components/Header';
import Headband from "./components/Headband";



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
      })
    });
  };

  render() {
    return (
      <div>
        <Header title="the world times" />
        <Headband searchNews={this.searchNews} />
      </div>
    );
  }
}

export default App;
