import React from "react";
import PropTypes from 'prop-types';

const Header = ({ title }) => {
  return (
    <div className="header__content">
      <h1 className="header__title__newspaper">{title}</h1>
      <p className="header__subtitle__newspaper">the modern newspaper</p>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired
}
export default Header;
