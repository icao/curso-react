import React from 'react';

export const Pagination = ({previous, next}) => {
  return (
    <nav
      className="pagination is-centered"
      role="navigation"
      aria-label="pagination"
    >
      <div className="pagination-list">
        <button onClick={previous} className="pagination-previous">Anterior</button>
        <button onClick={next} className="pagination-next">Siguiente</button>
      </div>
    </nav>
  );
}