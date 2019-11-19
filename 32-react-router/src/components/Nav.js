import React from 'react';
import { Link } from 'react-router-dom';
const imagen = "https://f-scope.net/images/shark-logo-png-4.png";

const Nav = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar__brand">
        <div className="navbar__item">
          <img src={imagen} className="imagen__brand" alt="logo" />
          <p className="logo">React Router</p>
        </div>
      </div>
      <div className="navbar__menu">
        <div className="navbar__start">
          <Link to="/" className="navbar__item">Home</Link>
          <Link to="/about" className="navbar__item">About</Link>
          <Link to="/blog" className="navbar__item">Blog</Link>
        </div>
      </div>
    </nav>
  )
}
 
export default Nav;