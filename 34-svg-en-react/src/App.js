import React from 'react';
import logo from './logo.svg';
import './App.css';
import {SpinnerLoader} from './components/SpinnerLoader'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SpinnerLoader />
      </header>
    </div>
  );
}

export default App;
