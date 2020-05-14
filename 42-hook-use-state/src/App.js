import React from 'react'
import './App.css'
import UseState from './components/use-state/UseState'
import StateClassComponent from './components/state-class-component/StateClassComponent'
import ManyStates from './components/many-states-use-state/ManyStates'
import MultipleStates from './components/multiple-states-use-state/MultipleStates'

function App() {
  return (
    <div className='App'>
      <StateClassComponent />
      <UseState />
      <hr />
      <ManyStates />
      <MultipleStates />
    </div>
  )
}

export default App
