import React from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypesComponent from './components/PropTypesComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="App-components">
        <PropTypesComponent
          title="Validando las props"
          author="rruffuss"
          date={new Date().toLocaleDateString()}
        >
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sapiente maiores doloribus debitis distinctio voluptatem, id nisi deleniti officiis quas tempora consectetur iste quod porro sed maxime aut placeat natus.</p>
        </PropTypesComponent>
        {/* Otro componente  */}
        <PropTypesComponent
          title="Validando las props con PropTypes"
          author="Fredulais"   //Si no le mandamos el valor este tirara un erro en consola
          date={new Date().toLocaleDateString()}
        >
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum ad vero iusto magnam rem exercitationem excepturi accusamus ab? Tempora consequatur aspernatur quasi officia minus omnis ipsam similique atque quaerat cumque.</p>
        </PropTypesComponent>
      </section>
    </div>
  );
}

export default App;
