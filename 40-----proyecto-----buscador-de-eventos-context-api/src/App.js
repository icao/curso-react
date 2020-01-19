import React, {Fragment} from 'react';
import './App.css';
import Header from './components/Header'
import HeroBanner from './components/HeroBanner'

function App() {
  return (
    <Fragment>
      <header className="container__header">
        <Header />
      </header>
      <section className="container__hero__banner">
        <HeroBanner>
          <h1>¿Qué estás buscando?</h1>
        </HeroBanner>
      </section>
    </Fragment>
  );
}

export default App;
