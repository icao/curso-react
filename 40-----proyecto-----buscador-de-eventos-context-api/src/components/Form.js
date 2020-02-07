import React, { Component } from "react";

class Form extends Component {
  state = {
    inputValue: "",
    selectValue: ""
  };

  handleChange = e => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <form className="container__form">
        <input
          className="form__input"
          placeholder="evento"
          type="text"
          name="inputValue"
          value={this.state.inputValue}
          onChange={this.handleChange}
        />
        <select
          className="form__select"
          name="selectValue"
          value={this.setState.selectValue}
          onChange={this.handleChange}
        >
          <option>Selecciona una categoria</option>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
        <button className="button button__primary">Buscar</button>
      </form>
    );
  }
}

export default Form;
