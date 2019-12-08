import React from "react";

export const Consultation = () => {
  return (
    <div className="card box__shadow">
      <div className="card-header text-capitalize">
        <h5 className="card-title text-capitalize margin--none">
          <span role="img" aria-label="jsx-a11y/aria-proptypes">
            🐹{"  "}
          </span>
          billy
        </h5>
      </div>
      <div className="card-body">
        <p className="card-text label__strong text-capitalize">
          Dueño: <span>ramon valdez</span>
        </p>

        <p className="card-text label__strong">
          Fecha: <span>12/15/15</span>
        </p>
        <p className="card-text label__strong">
          Hora: <span>10:40</span>
        </p>
        <p className="card-text label__strong">
          Telefono: <span>55 22 22 33 55</span>
        </p>
        <button className="btn btn-danger text-capitalize">cancelar</button>
      </div>
    </div>
  );
};

