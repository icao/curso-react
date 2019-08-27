import React from "react";
import logo from "./logo.svg";
import imageDestructuring from './image_component.jpeg';
import "./App.css";
import RightComponent from "./components/RightComponent";
import LeftComponent from "./components/LeftComponent";
import TopComponent from "./components/TopComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="App-components">
        <TopComponent
          title="Component - Destructuring Props"
          urlImage={imageDestructuring}
          number={3}
        />
      </section>
      <section className="App-components">
        <LeftComponent />
        <RightComponent />
      </section>
    </div>
  );
}

export default App;
