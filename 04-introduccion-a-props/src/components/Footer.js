import React from 'react';

const Footer = (props) => {
    
    return (
      <div className="App-footer">
        <small>All Rights Reserved &copy; Copyright {props.date}</small>
      </div>
    );
}
 
export default Footer;