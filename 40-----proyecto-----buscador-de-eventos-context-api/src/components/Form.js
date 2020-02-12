import React, { Component } from "react";
import { CategoryContext, SearchContext } from "../App";

class Form extends Component {
  state = {
    inputQuery: "",
    inputCategory: ""
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
      <CategoryContext.Consumer>
        {value => (
          <SearchContext.Consumer>
            {event => (
              <form
                className="container__form"
                onSubmit={e => {
                  e.preventDefault();
                  let { inputQuery, inputCategory } = this.state;
                  event(inputQuery, inputCategory);
                }}
              >
                <input
                  className="form__input"
                  placeholder="busca una imágen"
                  type="text"
                  required
                  name="inputQuery"
                  value={this.state.inputQuery}
                  onChange={this.handleChange}
                />
                {
                  <select
                    className="form__select"
                    required
                    name="inputCategory"
                    value={this.setState.inputCategory}
                    onChange={this.handleChange}
                  >
                    <option value="">Selecciona una categoria</option>
                    {value.map((valor,index) => {
                      return (
                        <option value={valor.image_type} key={index}>
                          {valor.name_value}
                        </option>
                      );
                    })}
                  </select>
                }
                <button className="button button__primary">Buscar</button>
              </form>
            )}
          </SearchContext.Consumer>
        )}
      </CategoryContext.Consumer>
    );
  }
}

export default Form;
