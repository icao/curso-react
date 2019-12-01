import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
      <main className="contianer__center">
        <div>
          <h1 className="tittle__404">404</h1>
          <h2 className="subtitle__404">Page Not Found</h2>
          <div className="container">
            <div className="columns">
              <div
                className="column container__row__404"
              >
                <Link to="/">
                  <button className="button is-outlined is-white">
                    &#8592; Back To Home
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
  );
};

export default NotFound;
