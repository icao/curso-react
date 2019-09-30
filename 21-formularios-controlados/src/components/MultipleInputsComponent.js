import React, { Component } from 'react';

class MultipleInputsComponent extends Component {
  render() {
    return (
      <section className="App-container-component">
        <h3>Multiples Inputs</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="id-check">
            Activar: 
            <input id="id-check" type="checkbox"/>
          </label>
          <br/>
          <label htmlFor="id-product">
            Producto:
            <input id="id-product" type="text"/>
          </label>
          <br/>
          <button className="button button-primary">Enviar</button>
        </form>
      </section>
    );
  }
}

export default MultipleInputsComponent;