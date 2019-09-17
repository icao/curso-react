import React, { Component } from "react";
import LoginComponent from "./LoginComponent";
import LogoutComponent from "./LogoutComponent";

class ConditionalRenderingComponent extends Component {
  state = {
    isUserLogged: true
  };
  render() {
    return (
      <section className="App-container-component">
        <h2>Conditional rendering example</h2>
        {this.state.isUserLogged ? <LoginComponent /> : <LogoutComponent />}
      </section>
    );
  }
}

export default ConditionalRenderingComponent;
