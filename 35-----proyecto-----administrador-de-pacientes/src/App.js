import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Header } from "./components/Header";
import { ConsultationForm } from "./components/ConsultationForm";
import { ConsultationList } from "./components/ConsultationList";

class App extends Component {
  state = {
    consultations: []
  }

  createConsultation = consultation => {
    const consultations = [...this.state.consultations, consultation]
    this.setState({ consultations }, () => console.log("Lista de consultas: ", this.state.consultations));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main className="container p-md-3">
          <section className="row">
            <div className="col-md-12">
              <ConsultationForm createConsultation={this.createConsultation} />
            </div>
          </section>
          <section className="row">
            <div className="col-md-12">
              <ConsultationList consultations={this.state.consultations} />
            </div>
          </section>
        </main>
      </div>
    );
 }
}

export default App;
