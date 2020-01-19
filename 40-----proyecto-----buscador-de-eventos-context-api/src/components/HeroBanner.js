import React, { Component } from "react";

class HeroBanner extends Component {
  state = {};
  render() {

    const hero__banner = {
      
    };

    return (
      <div className="hero__banner" style={hero__banner}>
        <div className="container">
          {this.props.children}
        </div> 
      </div>
    );
  }
}

export default HeroBanner;
