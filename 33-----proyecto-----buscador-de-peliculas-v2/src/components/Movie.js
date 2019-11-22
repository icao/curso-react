import React from "react";

export const Movie = ({ title, poster, type, year }) => {
  return (
    <div className="card">
      <div className="card-image">
        <div
          className="card-image-background filtered"
          style={{ backgroundImage: `url(${poster})` }}
        ></div>
        <div className="card-image-layer">
          <figure className="sub-image">
            <img src={poster} alt={title} />
          </figure>
        </div>
      </div>
      <div className="card-content">
        <div className="content">
          <h2 className="subtitle is-6">{title}</h2>
          <div className="tags has-addons is-right">
            <span className="tag">
              <strong>{year}</strong>
            </span>
            <span className="tag is-warning">
              <strong>{type}</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
