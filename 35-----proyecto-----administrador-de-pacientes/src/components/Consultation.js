import React from "react";

export const Consultation = ({
  consultation: {
           id,
           nombreMascota,
           nombreDueno,
           fecha,
           hora,
           telefono,
           sintomas
         },
         deleteConsultation
}) => {
         return (
           <div className="card box__shadow my-3">
             <div className="card-header text-capitalize">
               <h5 className="card-title text-capitalize margin--none">
                 <span role="img" aria-label="jsx-a11y/aria-proptypes">
                   🐹{"  "}
                 </span>
                 {nombreMascota}
               </h5>
             </div>
             <div className="card-body">
               <p className="card-text label__strong text-capitalize">
                 Dueño: <span>{nombreDueno}</span>
               </p>

               <p className="card-text label__strong">
                 Fecha: <span>{fecha}</span>
               </p>
               <p className="card-text label__strong">
                 Hora: <span>{hora}</span>
               </p>
               <p className="card-text label__strong">
                 Telefono: <span>{telefono}</span>
               </p>
               <p className="card-text label__strong">
                 Síntomas: <span>{sintomas}</span>
               </p>
               <div className="d-flex justify-content-end">
                 <button
                   className="btn btn-danger text-capitalize"
                   onClick={() => deleteConsultation(id)} // importante pasar aquí con arrow function, ya que de otra manera se ejecuta instantaneamente al momenot de ser renderizado
                 >
                   cancelar
                 </button>
               </div>
             </div>
           </div>
         );
       };
