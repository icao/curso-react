import React, { Component } from 'react';

class ComponentDidUpdate extends Component {
  state = {}
  
  render() { 
    return (<section className="App-container-component">
      <h2>componentDidUpdate()</h2>
    </section> );
  }
}
 
export default ComponentDidUpdate;