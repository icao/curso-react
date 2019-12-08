import React, { Component } from 'react';

import { Consultation } from './Consultation'

export class ConsultationList extends Component {
  state = { consultations: [] }
  render() { 
    return (
      <section className="container__consultation__list">
        <div className="form__header__title">
          <h2 className="text-center title__form">Consultas</h2>
        </div>
        <Consultation />
      </section>
    );
  }
}
