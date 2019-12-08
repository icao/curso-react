import React, { Component } from "react";

export class ConsultationForm extends Component {
         state = {
           cita: {
             nombreMascota: "",
             nombreDueno: "",
             fecha: "",
             hora: "",
             telefono: "",
             sintomas: ""
           }
         };
         handleSubmit = e => {
           e.preventDefault();
           const {
             nombreMascota,
             nombreDueno,
             fecha,
             hora,
             telefono,
             sintomas
           } = this.state.cita;

           if (nombreMascota === '' || nombreDueno === ''|| fecha === ''|| hora === ''|| telefono === ''|| sintomas === '') {
             alert("llena todos los campos");
           }
           
         };

         handleChange = e => {
           const name = e.target.name;
           const value = e.target.value;
           this.setState({
             cita: {
               ...this.state.cita, //tomamos una copia del state
               [name]: value
             }
           });
         };

         render() {
           const {
             nombreMascota,
             nombreDueno,
             fecha,
             hora,
             telefono,
             sintomas
           } = this.state.cita;
           return (
             <section className="border__form box__shadow">
               <div className="form__header__title">
                 <h2 className="text-center title__form">
                   Captura de formulario
                 </h2>
               </div>
               <form onSubmit={this.handleSubmit}>
                 <div className="form-row">
                   <div className="form-group col-md-6">
                     <label htmlFor="inputNamePet">Nombre Mascota</label>
                     <input
                       type="text"
                       className="form-control"
                       id="inputNamePet"
                       placeholder="Nombre Mascota"
                       name="nombreMascota"
                       value={nombreMascota}
                       onChange={this.handleChange}
                     />
                   </div>

                   <div className="form-group col-md-6">
                     <label htmlFor="inputName">Nombre Dueño</label>
                     <input
                       type="text"
                       className="form-control"
                       id="inputName"
                       placeholder="Nombre Dueño"
                       name="nombreDueno"
                       value={nombreDueno}
                       onChange={this.handleChange}
                     />
                   </div>
                 </div>
                 <div className="form-row">
                   <div className="form-group col-md-4">
                     <label htmlFor="inputDate">Fecha</label>
                     <input
                       type="date"
                       className="form-control"
                       id="inputDate"
                       name="fecha"
                       value={fecha}
                       onChange={this.handleChange}
                     />
                   </div>
                   <div className="form-group col-md-4">
                     <label htmlFor="inputTime">Hora</label>
                     <input
                       type="time"
                       className="form-control"
                       id="inputTime"
                       name="hora"
                       value={hora}
                       onChange={this.handleChange}
                     />
                   </div>
                   <div className="form-group col-md-4">
                     <label htmlFor="inputTime">Teléfono</label>
                     <input
                       type="tel"
                       className="form-control"
                       id="inputTime"
                       placeholder="(00) 00 00 00 00"
                       name="telefono"
                       value={telefono}
                       onChange={this.handleChange}
                     />
                   </div>
                 </div>

                 <div className="form-row">
                   <div className="form-group col-md-12">
                     <label htmlFor="inputSymptom">Síntomas</label>
                     <textarea
                       className="form-control"
                       id="inputSymptom"
                       placeholder="Describir síntomas"
                       name="sintomas"
                       value={sintomas}
                       onChange={this.handleChange}
                     />
                   </div>
                 </div>
                 <div className="row justify-content-center">
                   <div className="col-md-5">
                     <button
                       type="submit"
                       className="btn btn-primary btn-block"
                     >
                       Agregar Cita
                     </button>
                   </div>
                 </div>
               </form>
             </section>
           );
         }
       }
