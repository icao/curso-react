import React, { Fragment } from "react";
import { Movie } from "./Movie";
import { Pagination } from "./Pagination";

export const ListMovies = ({ movies, previousPage, nextPage }) => {
  return (
    <Fragment>
      <section className="columns is-multiline">
        {movies.map(movie => {
          return (
            <div
              key={movie.imdbID}
              className="column is-one-fifth-fullhd is-one-quarter-widescreen  is-one-third-desktop is-half-tablet is-full-mobile"
            >
              <Movie
                imdbID={movie.imdbID}
                title={movie.Title}
                poster={movie.Poster}
                type={movie.Type}
                year={movie.Year}
              />
            </div>
          );
        })}
      </section>
      <div className="column is-full">
        <Pagination previous={previousPage} next={nextPage} />
      </div>
    </Fragment>
  );
};
