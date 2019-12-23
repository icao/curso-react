import React from "react";
import Select from './Select'
const Headband = () => {
  return (
    <div className="container">
      <div className="headband__grid">
        <div id="version" className="headband__item__container">
          <p className="headband__text">VOL. I VERSION 1.0.0</p>
        </div>
        <div id="select">
          <div className="select__border">
            <Select />
          </div>
        </div>
        <div id="date" className="headband__item__container">
          <p className="headband__text">martes, ene 29, 2020</p>
        </div>
      </div>
    </div>
  );
};

export default Headband;
