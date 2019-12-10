import React, { Component } from 'react';

import { Consultation } from './Consultation'

export class ConsultationList extends Component {
  // state = { consultations: [] }
  render() { 
    const { consultations, deleteConsultation } = this.props;
    console.log('PROPS', this.props);
    return (
      <section className="container__consultation__list my-5">
        <div className="form__header__title">
          <h2 className="text-center title__form capitalize">Consultas</h2>
        </div>
        {consultations.map(consultation => {
          return (
            <span key={consultation.id}>
              <Consultation
                consultation={consultation}
                deleteConsultation={deleteConsultation}
              />
            </span>
          );
        })}
      </section>
    );
  }
}
