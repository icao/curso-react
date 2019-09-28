import React, { Component } from 'react';

class TextareaComponent extends Component {

  state = { // Inicializando el state
    textarea: 'Escribe algo acerca de ti'
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Enviando texto... 📤', this.state.textarea);
  }

  handleChange = (e) => {
    this.setState({
      textarea: e.target.value
    });
  }

  render() {
    return (
      <section className="App-container-component">
        <h3>Textarea</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="id-textarea">
            <textarea
              id="id-textarea"
              cols="60"
              rows="10"
              value={this.state.textarea}
              onChange={this.handleChange}
            ></textarea>
          </label>
          <button className="button button-primary">Enviar</button>
        </form>
      </section>
    );
  }
}

export default TextareaComponent;

/** 
 * Recordemos que el estado puese estar inicializado con un calor,
 * así que el text area puede empezar con algun texto.
*/