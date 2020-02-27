import React, { Component, Fragment } from "react";
// import AllImages from '../images/all_images.jpg'
// import Photo from '../images/photo.jpg'
// import Illustration from "../images/illustration.jpg";
// import Vector from "../images/vector.png";

class HeroBanner extends Component {
  state = {};
  render() {
    const hero__banner = {
      // backgroundImage: `URL(${AllImages})`
      // backgroundImage: `URL(${Photo})`
      // backgroundImage: `URL(${Vector})`
      // backgroundImage: `URL(${Illustration})`
    };

    const hero__title = {};

    return (
      <Fragment>
        <div className="hero__banner" style={hero__banner}></div>
        <div className="hero__banner__layer__content">
          <div className="container flex__center">
            <h1 className="hero__banner__title" style={hero__title}>
              Descubre miles de imágenes
            </h1>
            {this.props.children}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default HeroBanner;
