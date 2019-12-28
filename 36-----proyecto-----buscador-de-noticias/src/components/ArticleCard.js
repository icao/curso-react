import React, { Component } from "react";

class ArticleCard extends Component {
  state = {};

  getFormattedDate() {
    const { publishedAt } = this.props.article;
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
      "dic"
    ];
    
    let date = new Date("2019-12-28T04:38:00Z");
    let formattedDate = `${
      months[date.getUTCMonth()]
      } ${date.getUTCDate()}, ${date.getUTCFullYear()}`;
    
    return formattedDate;
  }

  render() {
    const {
      source: { name },
      title,
      description,
      publishedAt,
      urlToImage
    } = this.props.article;
    return (
      <div className="item card__container test__container">
        <div className="card__image__container">
          <img
            className="card__image"
            src={urlToImage}
            alt="imagen de la noticia"
          />
          <div className="card__image__tag__container">
            <span className="card__image__tag__text">{name}</span>
          </div>
        </div>
        <div className="card__text__container">
          <h2 className="card__title">{title}</h2>
          <p className="card__date">{this.getFormattedDate()}</p>
          <p className="card__description">{description}</p>
        </div>
      </div>
    );
  }
}

export default ArticleCard;
