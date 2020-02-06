import React, { Fragment } from "react";
import "./App.css";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import Form from "./components/Form";

function App() {
  return (
    <Fragment>
      <header className="container__header">
        <Header />
      </header>
      <section className="container__hero__banner">
        <HeroBanner>
          <Form />
        </HeroBanner>
      </section>
    </Fragment>
  );
}

export default App;
