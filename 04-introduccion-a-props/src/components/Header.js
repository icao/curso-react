import React from 'react';

const Header = (props) => {
    return (
      <div className="App-header">
        <h1>{props.superhero}</h1>
      </div>
    );
}
 
export default Header;