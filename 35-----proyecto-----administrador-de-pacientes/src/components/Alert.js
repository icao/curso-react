import React from 'react';

export const Alert = () => {
  return (
    <div className="alert alert-danger" role="alert">
      <span role="img" aria-label="jsx-a11y/aria-proptypes">
        🛑{"  "}
      </span>
      Por favor, rellena todos los campos
    </div>
  );
}
