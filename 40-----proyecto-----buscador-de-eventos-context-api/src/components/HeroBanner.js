import React, { Component, Fragment } from "react";

class HeroBanner extends Component {
  state = {};
  render() {

    const hero__banner = {
      
    };

    const hero__title = {
      
    };

    return (
      <Fragment>
        <div className="hero__banner" style={hero__banner}></div>
        <div className="hero__banner__layer__content">
          <div className="container flex__center">
            <h1 className="hero__banner__title" style={hero__title}>
              ¿Qué estás buscando?
            </h1>
            {this.props.children}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default HeroBanner;
