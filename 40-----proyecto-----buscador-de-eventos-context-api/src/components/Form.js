import React, { Component } from "react";
import { AppContext, SearchContext } from "../App";

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
      <AppContext.Consumer>
        {value => (
          <SearchContext.Consumer>
            {event => (
              <form
                className="container__form"
                onSubmit={e => {
                  e.preventDefault();
                  event(this.state);
                }}
              >
                <input
                  className="form__input"
                  placeholder="evento"
                  type="text"
                  name="inputValue"
                  value={this.state.inputValue}
                  onChange={this.handleChange}
                />
                {
                  <select
                    className="form__select"
                    name="selectValue"
                    value={this.setState.selectValue}
                    onChange={this.handleChange}
                  >
                    <option>Selecciona una categoria</option>
                    {value.map(valor => {
                      return (
                        <option value={valor.id} key={valor.id}>
                          {valor.name_localized}
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
      </AppContext.Consumer>
    );
  }
}

export default Form;
