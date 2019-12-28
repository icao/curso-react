import React, { Component } from 'react';

class ArticleCard extends Component {
  state = {  }
  render() { 
    const {
      source: name,
      title,
      description,
      publishedAt,
      urlToImage
    } = this.props.article;
    return (
      <div className="item card-container test__container">
        <div className="card__image__container">
          <img
            className="card__image"
            src={urlToImage}
            alt="imagen de la noticia"
          />
        </div>
        <div className="card__text__container">
          <h2 className="card__title">{title}</h2>
          <p className="card__date">{publishedAt}</p>
          <p className="card__description">{description}</p>
        </div>
      </div>
    );
  }
}
 
export default ArticleCard;