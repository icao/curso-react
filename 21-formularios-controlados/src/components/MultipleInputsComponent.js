import React, { Component } from "react";

class MultipleInputsComponent extends Component {
  state = {
    active: true,
    product: "",
    select: 'Azul'
  };
  handleSubmit = e => {
    e.preventDefault();
    
    console.log("Enviando... 📤");
    console.log("ACTIVE: ", this.state.active);
    console.log("PRODUCTO: ", this.state.product);
    console.log("COLOR: ", this.state.select);

  };
  handleChange = e => {
    // capturamos el objetivo del evento en una constante
    const target = e.target;
    // Capturamos el valor del objetivo pasado en el evento, usando una ternaria
    // podemos definir que tipo de input es
    const value = target.type === 'checkbox' ?
      target.checked :
      target.value;
    // Capturamos el name
    const name = target.name;

    // Ahora si actualizamos el estado
    this.setState({
      [name]: value
    });
    
  };
  render() {
    return (
      <section className="App-container-component">
        <h3>Multiples Inputs</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="id-check">
            Activar:
            <input
              id="id-check"
              name="active" //El name es igual al nombre en el estado
              type="checkbox"
              checked={this.state.active}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label htmlFor="id-product">
            Producto:
            <input
              id="id-product"
              name="product" // Usamos el name como se llama en el estado
              type="text"
              value={this.state.product}
              onChange={this.handleChange}
            />
          </label>
          <br />
          {/* Si agregamos un elemento diferente como 'select' o 'textarea',
          se comportaria como un input mas */}
          <label htmlFor="id-select">
            Color:
            <select
              id="id-select"
              name="select" // Usamos el name como se llama en el estado
              value={this.state.select}
              onChange={this.handleChange}
            >
              <option value="Rojo">Rojo</option>
              <option value="Azul">Azul</option>
              <option value="Verde">Verde</option>
            </select>
          </label>
          <br />
          <button className="button button-primary">Enviar</button>
        </form>
      </section>
    );
  }
}

export default MultipleInputsComponent;

/** 
 * Manejando multiples Inputs
 * 
 * Cuanso se necesita usar múltiples elementos input controlados, puedes agregar un atributo 'name' a cada uno de los elementos y dejar que la función controladora(handleChange) decida que hacer basada en el valor de 'event.target.name'
 * 
 * Anteriormente esto funcionaria para un solo input, pero al ser mas de dos
 * se comparte el handle, podria existir un handle por cada uno, pero no seria 
 * la mejor forma por temas de optimización.
 * 
 * this.setState({
 *    active: e.target.checked,
 *    product: e.target.value
 * });
 * 
 * Por lo que tenemos que realizar un método generico usando el atributo name de los inputs,
 * tanto como establecer el nombre del parametro en el estado que se quiere modificar y 
 * el valor que adquiere por cada vez que se ejecute el 'handle'
 * 
 * const target = e.target;
 * const value = target.type === 'checkbox' ?
 *    target.checked :
 *    target.value;
 * const name = target.name;
 * 
 * Hay que tener en cuenta como usamos la sintaxis de la propiedad 'name' computada de ES6
 * para actualizar la clave del estado correspondiente al nombre del 'input'
 * //Actualizamos el estado:
 * this.setState({
 *  [name]: value
 * });
 * 
*/