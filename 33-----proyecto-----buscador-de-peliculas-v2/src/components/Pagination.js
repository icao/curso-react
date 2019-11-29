import React from "react";

export const Pagination = ({ previous, next, prevDisabled, nextDisabled }) => {
  return (
    <nav
      className="pagination is-centered"
      role="navigation"
      aria-label="pagination"
    >
      <div className="pagination-list">
        <button
          onClick={previous}
          className="button is-link pagination-previous"
          disabled={prevDisabled}
        >
          &#8592; Previous
        </button>
        <button
          onClick={next}
          className="button is-link pagination-next"
          disabled={nextDisabled}
        >
          Next &#8594;
        </button>
      </div>
    </nav>
  );
};
