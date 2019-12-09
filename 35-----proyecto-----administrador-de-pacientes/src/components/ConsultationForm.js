import React, { Component, Fragment } from "react";
import { Alert } from "./Alert";
import uuid from 'uuid'
// Declaramos un estado inicial para posteriormente resetear el formulario
const initialState = {
  consultation: {
    nombreMascota: "",
    nombreDueno: "",
    fecha: "",
    hora: "",
    telefono: "",
    sintomas: ""
  },
  showAlert: false
};
export class ConsultationForm extends Component {
  state = {
    ...initialState
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
    } = this.state.consultation;

    // Validando que los campos esten llenos
    if (
      nombreMascota === "" ||
      nombreDueno === "" ||
      fecha === "" ||
      hora === "" ||
      telefono === "" ||
      sintomas === ""
    ) {
      this.setState({
        showAlert: true
      })
      // mostrar alerta y detener ejecusion
      return
    }

    // obtenemos la consultation y le agreamos un id con uuid (libreria externa)
    const newConsultation = { ...this.state.consultation } // copiamos el state actual
    newConsultation.id = uuid(); // agregamos nuevo parametor id
    // Enviamos la consultation creada al padre con el arreglo de consultations
    this.props.createConsultation(newConsultation);

    // Reiniciamos el formulario despues de enviar la consulta
    this.setState({
      ...initialState
    });
  };

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      consultation: {
        ...this.state.consultation, //tomamos una copia del state
        [name]: value
      }
    });
  };

  render() {
    const {
      consultation: { nombreMascota, nombreDueno, fecha, hora, telefono, sintomas },
      showAlert
    } = this.state;
    return (
      <Fragment>
        {showAlert ? (<section className="row">
          <div className="col-md-12">
            <Alert />
          </div>
        </section>) : null }
        <section className="border__form box__shadow">
          <div className="form__header__title">
            <h2 className="text-center title__form">Captura de formulario</h2>
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
                <button type="submit" className="btn btn-primary btn-block">
                  Agregar Cita
                </button>
              </div>
            </div>
          </form>
        </section>
      </Fragment>
    );
  }
}
