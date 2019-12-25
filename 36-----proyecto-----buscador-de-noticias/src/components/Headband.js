import React from "react";
import Select from './Select'
const Headband = ({ searchNews }) => {

  const getCurrentDate = () => {
    let months = ["ene","feb","mar","abr","may","jun","jul","ago","sep","act","nov","dic"]
    let days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
    let currentDate = new Date();
    let longDate = `${days[currentDate.getDay()]}, ${
      months[currentDate.getMonth()]
      } ${currentDate.getDate()}, ${currentDate.getFullYear()}`;
    
    return longDate;
  }

  return (
      <div className="headband__grid">
        <div id="version" className="headband__item__container">
          <p className="headband__text">VOL. I VERSION 1.0.0</p>
        </div>
        <div id="select">
          <div className="select__border">
            <Select searchNews={searchNews} />
          </div>
        </div>
        <div id="date" className="headband__item__container">
        <p className="headband__text">{getCurrentDate()}</p>
        </div>
      </div>
  );
};

export default Headband;
