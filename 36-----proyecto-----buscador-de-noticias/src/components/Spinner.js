import React from 'react';
import '../styles/Spinner.css'

const Spinner = () => {
  return (
    <div className="container">
      <div className="flex__container">
        <div className="lds-facebook">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
 
export default Spinner;