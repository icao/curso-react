import React, { Component } from "react";

class ComponentesControlados extends Component {
  state = {
    name: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("Enviando... 📤");
    console.log("Name: ", this.state.name);
  };

  handleOnchange = e => {
    this.setState({
      name: e.target.value
      // name: e.target.value.toUpperCase()
    });
  };

  render() {
    return (
      <section className="App-container-component">
        <h3>Componente Controlado 2</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="id-name">
            Nombre:
            <input
              id="id-name"
              type="text"
              value={this.state.name}
              onChange={this.handleOnchange}
            />
          </label>
          <br/>
          <button className="button button-primary">Enviar</button>
        </form>
      </section>
    );
  }
}

export default ComponentesControlados;

/**
 * En un componente controlado nosotros vamos a gestionar el estado,
 * para eso en el atributo 'value' del input asignaremos al parámetro dónde se guardará el valor en el estado, en este caso: value={this.state.name}
 * Haciendo así que React sea la unica fuente de verdad.
 * Con el evento OnChange, estaremos monitoreando la entrada del input. Este evento se ejecuta cada vez que una tecla es oprimida para actualizar el estado del componente. El valor del input será actualizado mientras que el usuario escriba. 
 * 
 * Con un componente controlado, toda la mutación del estado tendrá asociada una función controlador. Esto hace más directo modificar o validar la entrada del usuario. 
 * Por ejemplo, si quisieéramos asegurar que los nombres sean escritos con todas las letras en mayúscula, 
 * podríamos escribir en la función handleOnchange:
 * 
 * handleOnchange(e){
 *  this.setState({
 *    name: e.target.value.toUpperCase()
 *  })
 * }
 * 
 * 
 */