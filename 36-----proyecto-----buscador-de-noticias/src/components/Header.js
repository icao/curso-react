import React from "react";

const Header = ({ title }) => {
  return (
    <div className="header__content">
      <h1 className="header__title__newspaper">{title}</h1>
      <p className="header__subtitle__newspaper">the modern newspaper</p>
    </div>
  );
};

export default Header;
