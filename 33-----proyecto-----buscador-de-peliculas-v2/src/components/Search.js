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
    localStorage.setItem('query', inputMovie)
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
              placeholder="Search a movie"
            />
          </div>
          <div className="control">
            <button className="button is-link">
              <span>
                Search{" "}
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
