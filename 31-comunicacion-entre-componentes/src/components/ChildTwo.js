import React, { Component } from "react";

class ChildTwo extends Component {
  state = { counter: 0 };

  handleClick = () => {
    this.setState(state => {
      return {
        counter: state.counter + 1
      };
    });

    this.props.increment();
  };

  render() {
    return (
      <section className="App-container-component-3">
        <h3>Hijo</h3>
        <p>
          Contador: <strong>{this.state.counter}</strong>
        </p>
        <button onClick={this.handleClick}>Incrementar</button>
        {/* Otra forma mas simple es teniendo el botón y solo diparar el evento para que se incrmente el contador en el padre */}
        {/* <button onClick={this.props.increment}>Incrementar</button> */}
      </section>
    );
  }
}

export default ChildTwo;
