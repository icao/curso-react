import React from 'react';
import './App.css';
import UseState from './components/use-state/UseState'
import StateClassComponent from './components/state-class-component/StateClassComponent'

function App() {
  return (
    <div className="App">
      <StateClassComponent />
      <UseState />
    </div>
  );
}

export default App;
