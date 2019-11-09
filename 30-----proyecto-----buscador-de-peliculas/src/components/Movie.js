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
        <div className="content is-small">
          <h2 className="title">{title}</h2>
          <p className="subtitle">
            <small>
              {type} - {year}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};
