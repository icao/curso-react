import React from 'react';

export const Pagination = ({previous, next}) => {
  return (
    <nav
      className="pagination is-centered"
      role="navigation"
      aria-label="pagination"
    >
      <div className="pagination-list">
        <button  onClick={previous} className="button is-link pagination-previous">Anterior</button>
        <button  onClick={next} className="button is-link pagination-next">Siguiente</button>
      </div>
    </nav>
  );
}