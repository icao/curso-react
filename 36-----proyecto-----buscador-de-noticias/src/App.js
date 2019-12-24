import React, { Component } from 'react';
// import 'normalize.css'
import "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import "./styles/App.css";
import Header from './components/Header'
import Headband from "./components/Headband";


class App extends Component {
  state = {};

  searchNews = categorie => {
    console.log("BUSCAR NOTICIAS DE: ", categorie);
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
