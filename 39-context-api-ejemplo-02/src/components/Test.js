import React, { Component } from 'react';
import Lista from './Lista'

class Test extends Component {
  render() {
    return (
      <div className="father">
        <h2>
          <span role="img" aria-label="sheep">
            👨
          </span>
          Papá
        </h2>
        <Lista />
      </div>
    );
  }
}

export default Test;
