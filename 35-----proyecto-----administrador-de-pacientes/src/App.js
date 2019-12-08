import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Header } from "./components/Header";
import { ConsultationForm } from "./components/ConsultationForm";
import { ConsultationList } from "./components/ConsultationList";
import { Alert } from "./components/Alert";
function App() {
  return (
    <div className="App">
      <Header />
      <main className="container p-md-3">
        <section className="row">
          <div className="col-md-12">
            <Alert />
          </div>
        </section>
        <section className="row">
          <div className="col-md-12">
            <ConsultationForm />
          </div>
        </section>
        <section className="row">
          <div className="col-md-12">
            <ConsultationList />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
