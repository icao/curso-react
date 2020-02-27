import React, { Component } from "react";
import { CategoryContextConsumer } from '../context/CategoryContext'
import { SearchContextConsumer } from "../context/SearchContext";

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
      <CategoryContextConsumer>
        {value => (
          <SearchContextConsumer>
            {({getEvents}) => (
              <form
                className="container__form"
                onSubmit={e => {
                  e.preventDefault();
                  let { inputQuery, inputCategory } = this.state;
                  getEvents(inputQuery, inputCategory);
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
          </SearchContextConsumer>
        )}
      </CategoryContextConsumer>
    );
  }
}

export default Form;
