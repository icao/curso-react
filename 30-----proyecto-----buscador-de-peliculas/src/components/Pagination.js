import React from 'react';

export const Pagination = () => {
  return (
    <nav
      className="pagination is-centered"
      role="navigation"
      aria-label="pagination"
    >
      <div className="pagination-list">
        <button className="pagination-previous">Anterior</button>
        <button className="pagination-next">Siguiente</button>
      </div>
    </nav>
  );
}