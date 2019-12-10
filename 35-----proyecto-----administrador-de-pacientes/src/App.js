import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Header } from "./components/Header";
import { ConsultationForm } from "./components/ConsultationForm";
import { ConsultationList } from "./components/ConsultationList";

class App extends Component {
  state = {
    consultations: []
  };

  componentDidMount() {
    //Accedemos al loscal storage, destructurando el parametro consultations
    const { consultations } = localStorage;
    // evaluamos condicional mente, si exiten citas en el local sorage, entonces lo seteamos en el state
    if (consultations) {
      console.log("LEER", JSON.parse(localStorage.consultations)); // imprime en consola el valor de consultations del localstorage
      this.setState({ consultations: JSON.parse(consultations) }); // actualizamos el state con el valor guardado en el localstorage
    }
  }

  componentDidUpdate() {
    //Siempre que se actualice, guardamos el state en el localstorage
    localStorage.setItem(
      "consultations",
      JSON.stringify(this.state.consultations)
    );
  }

  createConsultation = consultation => {
    // hacemos una copia del state y adicionamos la nueva consulta
    const consultations = [...this.state.consultations, consultation];
    // actualizamos el state con la nueva lista de consultas
    this.setState({ consultations });
  };

  showConsultationList = () => {
    return this.state.consultations.length === 0 ? (
      <section className="container__consultation__list my-5">
        <div className="form__header__title">
          <h2 className="text-center title__form text-capitalize">
            no hay consultas
          </h2>
          <p className="bd-title text-center">
            <span role="img" aria-label="jsx-a11y/aria-proptypes">
              {" "}
              🐾
            </span>
          </p>
        </div>
      </section>
    ) : (
      <ConsultationList
        consultations={this.state.consultations}
        deleteConsultation={this.deleteConsultation}
      />
    );
  };

  deleteConsultation = id => {
    console.log("ELIMNANDO CITA", id);
    const { consultations } = this.state;
    const consultationsUpdated = consultations.filter(
      consultation => consultation.id !== id
    );
    this.setState({ consultations: consultationsUpdated });
  };

  render() {
    return (
      <div className="App">
        <Header title={"Administrador de pacientes veterinaria"} />
        <main className="container p-md-3">
          <section className="row">
            <div className="col-md-12">
              <ConsultationForm createConsultation={this.createConsultation} />
            </div>
          </section>
          <section className="row">
            <div className="col-md-12">{this.showConsultationList()}</div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
