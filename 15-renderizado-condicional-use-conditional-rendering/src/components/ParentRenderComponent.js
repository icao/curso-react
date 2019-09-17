import React, { Component } from 'react';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';

class ParentRenderComponent extends Component{
  render() {
    return (
      <section className="App-container-component">
        <h1>Conditional Rendering</h1>
        <ComponentA />
        <ComponentB />
      </section>
    )
  }
}

export default ParentRenderComponent;