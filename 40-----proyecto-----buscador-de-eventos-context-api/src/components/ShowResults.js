import React, { Component } from "react";
import { SearchContextConsumer } from "../context/SearchContext";

class ShowResults extends Component {
  render() {
    return (
      <SearchContextConsumer>
        {({ useSearch, showResults }) => {
          return useSearch ? (
            showResults()
          ) : (
            <div className="container">
              <p className="text--center">
                Nuestro banco de imágenes tiene más de 1.599228 millones de
                imágenes gracias a <strong>PIXABAY</strong>.
              </p>
              <p className="text--center">
                Usa el buscador para encontrar tu favorita.
              </p>
            </div>
          );
        }}
      </SearchContextConsumer>
    );
  }
}

export default ShowResults;
