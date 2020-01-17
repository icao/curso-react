import React from 'react';
import LogoLight from '../images/evently_light.svg'

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="logo__container">
          <img  className="image__logo" src={LogoLight} alt="Logo evently app" />
        </div>
      </div>
    </div>
  );
}
 
export default Header;