import React, { Component } from "react";
import imageDefault from "../images/default_news_img.jpg";
import PropTypes from "prop-types";
class ArticleCard extends Component {
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

    grid.querySelectorAll(".item").forEach((item) => {
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

  getFormattedDate() {
    const { published_at } = this.props.article;
    let months = [
      "ene",
      "feb",
      "mar",
      "abr",
      "may",
      "jun",
      "jul",
      "ago",
      "sep",
      "act",
      "nov",
      "dic",
    ];

    let date = new Date(published_at);
    let formattedDate = `${
      months[date.getUTCMonth()]
    } ${date.getUTCDate()}, ${date.getUTCFullYear()}`;

    return formattedDate;
  }

  addDefaultImage = (event) => {
    event.target.src = imageDefault;
  };

  launchResize = () => {
    // Provocando evento resize para renderizar imagenes
    // window.dispatchEvent(new Event("resize"));
    this.resize();
  };

  render() {
    const { source, title, description, image, url } = this.props.article;
    return (
      <div className="card__container">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <div className="card__image__container">
            <img
              className="card__image"
              src={image === null ? imageDefault : image}
              alt="imagen de la noticia"
              onError={this.addDefaultImage}
              onLoad={this.launchResize}
            />
            <div className="card__image__tag__container">
              <span className="card__image__tag__text">{source}</span>
            </div>
          </div>
          <div className="card__text__container">
            <h2 className="card__title">{title}</h2>
            <p className="card__date">{this.getFormattedDate()}</p>
            <p className="card__description">{description}</p>
          </div>
        </a>
      </div>
    );
  }
}

ArticleCard.propTypes = {
  article: PropTypes.object.isRequired,
};

export default ArticleCard;
