import React, { Component } from 'react';
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
  state = {
    counter: 1,
    status: 'Parent'
  }

  constructor() {
    super()
    setInterval(() => {
      this.setState({counter: this.state.counter + 1});
    }, 1000);
  }

  render() {
    return (
      <section className="App-container-parent">
        <h2>{this.state.status}</h2>
        <p>Counter: {this.state.counter}</p>

        {/* React tiene un flujo de datos unidireccional de padre a hijos */}
        {/* En el ejemplo el padre hace que cada vez que cambie su estado, se vuelvan a renderizar */}
        <ChildComponent
          status={"child"}
          counter={this.state.counter}
        />
      </section>
    );
  }
}

export default ParentComponent;

