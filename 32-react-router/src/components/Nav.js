import React from "react";
import { Link, NavLink } from "react-router-dom";
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
          {/* Usando Link */}
          {/* <Link to="/" className="navbar__item">Home</Link>
          <Link to="/about" className="navbar__item">About</Link>
          <Link to="/blog" className="navbar__item">Blog</Link> */}

          <NavLink
            to="/"
            exact
            activeStyle={{ color: "#0199f9" }}
            className="navbar__item"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            exact
            activeStyle={{ color: "#0199f9" }}
            className="navbar__item"
          >
            About
          </NavLink>
          <NavLink
            to="/blog/"
            exact
            activeStyle={{ color: "#0199f9" }}
            className="navbar__item"
          >
            Blog
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

/**
 * 1.- Link
 * Con el componente <Link>, establecemos  los links que serviran como entrada para indicar a dónde
 * se dirige el usuario si hace click en algún enlace.
 *
 * 1.1. To
 * Link contiene una propiedad llamada 'to' que recibe un string con la url a donde se enviara al usuario
 * cuando se haga click en el enlace.
 *
 *
 * 2.- NavLink
 * Con el componente <NavLink> aseguramos el comportamiento de un componente de navegación, es escencial si se quieren
 * manejar estilos al momento que un enlace este activo.
 *
 * 2.1 activeStyle
 * Esta propiedad recibe un objeto de estilos Css, en el cual especificamos la personalización dle link una vez activo.
 * Esta propiedad pertenece al componente NavLink, por lo que es escencial declararlo dentro de él.
 *
 * NOTA: Tenemos que hacer uso de la propiedad 'exact' para asegurar
 * que las activaciones sean correctas cuando se active el link correspondiente
 */
