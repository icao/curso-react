import React, { Component } from "react";

class CardImage extends Component {

  resize() {
    const grid = document.querySelector(".grid");

    const rowHeight = parseInt(
      window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
    );
    const rowGap = parseInt(
      window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
    );

    grid.style.gridAutoRows = "auto";
    grid.style.alignItems = "self-start";

    grid.querySelectorAll(".item").forEach(item => {
      item.style.gridRowEnd = `span ${Math.ceil(
        (item.clientHeight + rowGap) / (rowHeight + rowGap)
      )}`;
    });

    grid.removeAttribute("style");
  }

  componentDidMount() {
    window.addEventListener("load", this.resize);
    window.addEventListener("resize", this.resize);
  }

  launchResize = () => {
    this.resize();
  };

  componentWillUnmount() {
    window.removeEventListener("load", this.resize);
    window.removeEventListener("resize", this.resize);
  }

  render() {
    const {
      data: { webformatURL, pageURL }
    } = this.props;
    return (
      <div className="card__container">
        <a href={pageURL} target="_blank" rel="noopener noreferrer">
          {/* <a target="_blank" rel="noopener noreferrer"> */}
          <div className="card__image__container">
            <img
              className="card__image"
              src={webformatURL}
              alt="imagen de la noticia"
              // onError={this.addDefaultImage}
              onLoad={this.launchResize}
              // resize={this.launchResize}
            />
          </div>
          {/* <div className="card__text__container">
            <p>ver imagen</p>
          </div> */}
        </a>
      </div>
    );
  }
}

export default CardImage;
