import React, { Component, Fragment } from "react";
import "./App.css";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import Form from "./components/Form";
import { CategoryContextProvider } from "./context/CategoryContext";
import { SearchContextProvider } from "./context/SearchContext";
import ShowResults from "./components/ShowResults";

class App extends Component {
  render() {
    return (
      <Fragment>
        <CategoryContextProvider>
          <SearchContextProvider>
            <header className="container__header">
              <Header />
            </header>
            <section className="container__hero__banner">
              <HeroBanner>
                <Form />
              </HeroBanner>
            </section>
            <section className="container__results">
              <ShowResults />
            </section>
          </SearchContextProvider>
        </CategoryContextProvider>
      </Fragment>
    );
  }
}

export default App;
