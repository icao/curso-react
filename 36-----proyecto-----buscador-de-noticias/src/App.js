import React from 'react';
import "./styles/App.css";
import Header from './components/Header'
import Headband from "./components/Headband";


function App() {
  return (
    <div>
      <Header title="the world times" />
      <Headband />
    </div>
  );
}

export default App;
