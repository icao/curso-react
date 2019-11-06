import React from "react";
import { usePalette } from "react-palette";

export const Movie = ({ title, poster, type, year }) => {
  const { data, loading, error } = usePalette(poster);

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
        <div className="media">
          <div className="media-content">
            <h2 className="title is-4">{title}</h2>
            <p className="subtitle is-6">
              {type} - {year}
            </p>
            {/* <p style={{ backgroundColor: data.darkMuted }}>
              Text with the darkMuted color
            </p>
            <p style={{ backgroundColor: data.darkVibrant }}>
              Text with the darkVibrant color
            </p>
            <p style={{ backgroundColor: data.lightMuted }}>
              Text with the lightMuted color
            </p>
            <p style={{ backgroundColor: data.lightVibrant }}>
              Text with the lightVibrant color
            </p>
            <p style={{ backgroundColor: data.muted }}>
              Text with the muted color
            </p>
            <p style={{ backgroundColor: data.vibrant }}>
              Text with the vibrant color
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};
