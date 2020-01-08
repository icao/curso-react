import React from 'react';
import './App.css';
import {
  AppContextProvider
} from "./contexts/AppContext";

import Test from './components/Test'

function App() {
  return (
    <div className="App">
      <h1>Ejemplo 2 Context API - Arquitectura Context como Componente</h1>
      <AppContextProvider>
        <Test />
      </AppContextProvider>
    </div>
  );
}

export default App;
