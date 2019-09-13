import React, { Component } from "react";
import Player from "./Player";

class ListPlayers extends Component {
  render() {
    const players = [
      {
        clasificacion: 1,
        jugador: "anaxamides",
        clase: "paladin",
        nivel: 120,
        imagen:
          "https://render-us.worldofwarcraft.com/character/quelthalas/104/105392744-avatar.jpg",
        puntuacion: 8235
      },
      {
        clasificacion: 3,
        jugador: "leewongg",
        clase: "monje",
        nivel: 120,
        imagen:
          "https://render-us.worldofwarcraft.com/character/quelthalas/201/111609033-avatar.jpg",
        puntuacion: 3895
      },
      {
        clasificacion: 2,
        jugador: "gödwin",
        clase: "sacerdote",
        nivel: 120,
        imagen:
          "https://render-us.worldofwarcraft.com/character/quelthalas/235/167578603-avatar.jpg",
        puntuacion: 5600
      }
    ];
    return (
      <section className="App-container-list-players">
        <table>
          <caption>
            <h1>Jugadores del reino</h1>
          </caption>
          <thead>
            <tr>
              <td>CLASIF</td>
              <td> </td>
              <td>JUGADOR </td>
              <td>CLASE</td>
              <td>LVL</td>
              <td>PUNTUACION</td>
            </tr>
          </thead>
          <tbody>
            {/* aqui van los componentes player */}
            <Player
              clasificacion={players[0].clasificacion}
              jugador={players[0].jugador}
              clase={players[0].clase}
              nivel={players[0].nivel}
              imagen={players[0].imagen}
              puntuacion={players[0].puntuacion}
            />
            <Player
              clasificacion={players[2].clasificacion}
              jugador={players[2].jugador}
              clase={players[2].clase}
              nivel={players[2].nivel}
              imagen={players[2].imagen}
              puntuacion={players[2].puntuacion}
            />
            <Player
              clasificacion={players[1].clasificacion}
              jugador={players[1].jugador}
              clase={players[1].clase}
              nivel={players[1].nivel}
              imagen={players[1].imagen}
              puntuacion={players[1].puntuacion}
            />
            <Player />
          </tbody>
        </table>
      </section>
    );
  }
}

export default ListPlayers;
