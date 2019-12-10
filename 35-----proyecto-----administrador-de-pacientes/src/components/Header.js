import React from "react";
import PropTypes from "prop-types";

export const Header = ({ title }) => {
  return (
    <header className="header">
      <h1 className="bd-title text-center">
        {title}
        <span role="img" aria-label="jsx-a11y/aria-proptypes">
          {" "}
          🐶
        </span>
      </h1>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};
