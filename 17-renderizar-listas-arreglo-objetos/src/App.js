import React from "react";
import logo from "./logo.svg";
import "./App.css";
import RenderListComponent from './components/RenderListComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="App-components">
        <RenderListComponent />
      </section>
    </div>
  );
}

export default App;
