import React, { Component, Fragment } from "react";
import DataPlayers from "../Data/Players.json";
import Players from "../components/Players";
class ListPlayers extends Component {
  render() {
    return (
      <Fragment>
        <style>
          {`
            table{
              border:1px solid black;
              display: table;
              border-collapse: separate;
              border-spacing: 2px;
              border-color: #3835ec;
            }
            tr {
              display: table-row;
              vertical-align: inherit;
              border-color: inherit;
            }
          `}
        </style>
        <section className="App-container-list-players">
          <h2>Lista de jugadores</h2>
          <table>
            <caption>
              <h1>Jugadores del reino</h1>
            </caption>
            <thead>
              <tr>
                <td>CLASIF</td>
                <td> FOTO </td>
                <td>JUGADOR </td>
                <td>CLASE</td>
                <td>LVL</td>
                <td>PUNTUACION</td>
              </tr>
            </thead>
            <tbody>
              {/* Pasamos el objeto con los datos de los jugadores al componente que renderizara a cada jugador */}
              {DataPlayers.map(player => {
                return (
                  <Players
                    key={player.id} // id mandado como key
                    clasificacion={player.clasificacion}
                    jugador={player.jugador}
                    clase={player.clase}
                    nivel={player.nivel}
                    imagen={player.imagen}
                    puntuacion={player.puntuacion}
                  />
                );
              })}
            </tbody>
          </table>
        </section>
      </Fragment>
    );
  }
}

export default ListPlayers;
