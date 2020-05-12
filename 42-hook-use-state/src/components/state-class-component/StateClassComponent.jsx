import React, { Component } from 'react';

class StateClassComponent extends Component{
  state = {
    count: 0
  }

  increment = () => {
    this.setState(state => {
      return {
        count: state.count + 1
      }
    })
  }

  render() {
    return <div>
      <h1>Estado Class component</h1>
      <h3>{this.state.count}</h3>
      <button onClick={this.increment}>Incrementar</button>
    </div>
  }
}

export default StateClassComponent

/** 
 * Este el el modo en el que siempre hemos trabajado con el estado.absVer en el componente UseState, el informa detallado de como usar estados en componentes funcionales.
*/