import React, { Component, Fragment } from "react";

class Player extends Component {
  constructor(props) {
    super(props);
    // Estado inicializado con las props
    this.state = {
      clasificacion: this.props.clasificacion,
      jugador: this.props.jugador,
      clase: this.props.clase,
      nivel: this.props.nivel,
      imagen: this.props.imagen,
      puntuacion: this.props.puntuacion
    };

    setInterval(() => {
      this.setState({puntuacion: this.state.puntuacion + 1});
    }, 1000)
  }

  render() {
    // Las props se declaran dentro de render en un class component
    //  const { clasificacion, jugador, clase, nivel, imagen } = this.props;
    return (
      <Fragment>
        <tr className="App-container-player">
          <td>{this.state.clasificacion}</td>
          <td>
            <img src={this.state.imagen} alt="imagen" />
          </td>
          <td>{this.state.jugador}</td>
          <td>{this.state.clase}</td>
          <td>{this.state.nivel}</td>
          <td>{this.state.puntuacion}</td>
        </tr>
      </Fragment>
    );
  }
}

// Recordemos que para establecer propiedades por defaul
//[Nombre_Componente].defaultProps = {objeto_con_props}
Player.defaultProps = {
  clasificacion: 0,
  jugador: "Jhon Doe",
  clase: "thinker",
  nivel: 0,
  imagen:
    "https://img.pngio.com/gamer-profile-icon-png-search-png-gamer-icon-png-2048_2048.png",
  puntuacion: 0
};

export default Player;

/**
 * Para inicializar el estado con props, tenemos que hacer uso del metodo constructor
 * y pasar las props como parametro a constructor(props) y super(props)
 */
