import React from "react";
import { Movie } from "./Movie";

export const ListMovies = ({ movies }) => {
  console.log("MOVIES:", movies);
  return (
    <section className="columns is-multiline">
      {movies.map(movie => {
        return (
          <div
            key={movie.imdbID}
            className="column is-one-quarter-widescreen is-one-third-desktop is-half-tablet is-full-mobile"
          >
            <Movie
              title={movie.Title}
              poster={movie.Poster}
              type={movie.Type}
              year={movie.Year}
            />
          </div>
        );
      })}
    </section>
  );
};
