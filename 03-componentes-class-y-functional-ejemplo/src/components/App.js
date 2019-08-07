import React, { Fragment } from 'react';
import logo from '../logo.svg';
import './App.css';
import ClassComponent from './ClassComponent';
import FunctionalComponent from './FunctionalComponent';

function App() {
  return (
     // Fragment is not rendered in the DOM
    <Fragment>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Class Component VS Functional Component</h1>
        </header>
      </div>
      <ClassComponent />
      <FunctionalComponent />
    </Fragment>
  );
}

export default App;
