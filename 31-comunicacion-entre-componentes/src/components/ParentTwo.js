import React, { Component } from "react";
import ChildTwo from "./ChildTwo";

class ParentTwo extends Component {
  state = { counter: 0 };

  handleSubmit = () => {
    this.setState(state => {
      return {
        counter: state.counter + 1
      };
    });
  };

  render() {
    console.log("⏱️ Render Counter: ", this.state.counter);
    return (
      <section className="App-container-component">
        <h3>Padre</h3>
        <p>
          Contador: <strong>{this.state.counter}</strong>
        </p>
        <ChildTwo increment={this.handleSubmit} />
      </section>
    );
  }
}

export default ParentTwo;
