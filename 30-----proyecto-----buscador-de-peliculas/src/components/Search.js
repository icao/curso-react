import React, { Component } from "react";

export class Search extends Component {
  state = { inputMovie: "" };

  handleSubmit = event => {
    event.preventDefault();
    console.log(
      `%c Buscar ${this.state.inputMovie} 🔍`,
      "color: orange; font-weight: bold;"
    );
    const { inputMovie } = this.state;
    // Aqui llamada al servicio
    this.props.search(inputMovie);
  };

  handleChange = event => {
    this.setState({
      inputMovie: event.target.value
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="search__wrapper">
        <div className="field has-addons">
          <div className="control">
            <input
              onChange={this.handleChange}
              className="input"
              type="text"
              placeholder="Buscar una película"
            />
          </div>
          <div className="control">
            <button className="button is-primary">
              <span>
                Buscar{" "}
                <span role="img" aria-label="emoji">
                  🔍
                </span>
              </span>
            </button>
          </div>
        </div>
      </form>
    );
  }
}
