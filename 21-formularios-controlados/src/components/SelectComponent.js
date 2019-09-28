import React, { Component } from "react";

class SelectComponent extends Component {
  state = {
    // Selección por default: Svelte
    selection: "Svelte"
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log("Seleccionando a: ", this.state.selection);
  };

  handleChange = e => {
    this.setState({
      selection: e.target.value
    });
  };
  render() {
    return (
      <section className="App-container-component">
        <h3>Select</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="id-select">
            Selecciona un framework:
            <select
              id="id-select"
              value={this.state.selection}
              onChange={this.handleChange}
            >
              <option value="React">React</option>
              <option value="Angular">Angular</option>
              <option value="Vue">Vue</option>
              <option value="Svelte">Svelte</option>
            </select>
          </label>
          <button className="button button-primary">Enviar</button>
        </form>
      </section>
    );
  }
}

export default SelectComponent;

/**
 * En resumen, esto hace que <input type="text">, <textarea>, y <select> trabajen de manera similar,
 * todos aceptan un atributo 'value' el cual puedes usar para implementar un componente controlado.
 *
 * NOTA: Se puede pasar un arreglo al atributo 'value', permitiendo que selecciones múltiples
 * opciones en una etiqueta <select>:
 * <select multiple={true} value={['B', 'C']}>
 */

/**
 * ------------------------
 * La etiqueta file input
 * ------------------------
 * En HTML, un <input type="file"> permite que el usuario escoja uno o varios archivos de su dispositivo de almacenamiento
 * para ser cargados a un servidor o ser manipulados por Javascript mediante el API de Archivos.
 * <input type="file" />
 *
 */
