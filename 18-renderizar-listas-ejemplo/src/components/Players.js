import React, { Component } from "react";

class Players extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      clasificacion: this.props.clasificacion,
      jugador: this.props.jugador,
      clase: this.props.clase,
      nivel: this.props.nivel,
      imagen: this.props.imagen,
      puntuacion: this.props.puntuacion
    };

    setInterval(() => {
      // Forma 1 NO OPTIMA
      // this.setState({
      //   puntuacion: this.state.puntuacion + 1
      // });
      // Forma 2 SI OPTIMA
      this.setState(state => {
        return {
          puntuacion: state.puntuacion + 1
        };
      });
    }, 1000);
  }

  render() {
    // console.log('state: ', this.state); //No imprime el id
    // console.log('state: ', this.props); // si imprime el id
    const {
      clasificacion,
      jugador,
      clase,
      nivel,
      imagen,
      puntuacion
    } = this.props;

    // TODO: Falta corroborar todo el funcionamiento
    return (
      // Pasado por props
      // <tr className="App-container-player">
      //   <td>{clasificacion}</td>
      //   <td>
      //     <img src={imagen} alt="imagen" />
      //   </td>
      //   <td>{jugador}</td>
      //   <td>{clase}</td>
      //   <td>{nivel}</td>
      //   <td>{puntuacion}</td>
      // </tr>

      //Pasado con estado
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
    );
  }
}

export default Players;
