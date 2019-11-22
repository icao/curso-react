import React, { Component, Fragment } from "react";

class AlbumDetail extends Component {
  state = {
    title: "",
    link: "",
    name: "",
    cover_big: "",
    tracks: ""
  };

  componentDidMount() {
    const { match } = this.props;
    console.log(match);
    fetch(`https://deezerdevs-deezer.p.rapidapi.com/album/${match.params.id}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "01a5d8c4admshb2e87d37031a9b0p10247bjsn22b2dee1b481"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(res => {
        const {
          title,
          link,
          artist: { name },
          cover_big,
          tracks: { data }
        } = res;

        this.setState({
          title,
          link,
          name,
          cover_big,
          tracks: data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  showResults = () => {
    const { location, history } = this.props;
    const { title, link, name, cover_big, tracks } = this.state;
    return (
      <Fragment>
        <h1>{title}</h1>
        <h3>{name}</h3>
        <img src={cover_big} className="album" alt="album" />
        <p>Songs:</p>
        <ul>
          {tracks.map(track => {
            return (
              <li key={track.id}>
                <span>{track.title}</span>
              </li>
            );
          })}
        </ul>

        <a href={link} className="link" target="_blank">
          Play on Deezer
        </a>
        <br />
        {/* Forma programatica de usar React Routher */}
        <section>
          <button className="btn" onClick={() => history.push("/")}>
            Go to Home
          </button>
          <button className="btn" onClick={() => history.push("/about/")}>
            Go to About
          </button>
        </section>
      </Fragment>
    );
  };

  render() {
    return (
      <div className="container">
        {this.state.tracks ? this.showResults() : <strong>Loading... </strong>}
      </div>
    );
  }
}

export default AlbumDetail;

/**
 * 1.- match
 * Para acceder a las propiedades que son pasadas atra vez del link, por medio de la url,
 * hacemos uso de un objeto que actua como las props, llamado match.
 * Este objeto se compone de varios parametros:
 *  - isExact: true -> Indica que el componente será accesado solo como aparece en la url.
 *  - params: {id: "81804"} -> Objeto que contiene los parametros de la url
 *  - path: "/about/:id" -> Path con el que será llamado en el navegador
 *  - url: "/about/81804" -> URL actual en el navegador
 *
 * Podemos usar a match oara acceder a cualquiera de sus valores y aprovecharlos como en el ejemplo, donde recatamos el id que viene como parametro y lo usamos para hacer una petición que nos devolvera un elemento que renderizaremos en la vista.
 * 
 * 
 * 2.- history
 * History es un objeto que nos brinda hacer routing via progamatica atravez de métodos que nos brindan funcionalidades para garantizar redireccionamientos personalizados sin usar los componentes Route, Link, NavLink. 
 * 2.1 push()
 * 2.2 goBack()
 * 2.3 goForward()
 * 
 * Mas información sobre el funcionamiento detallado en:
 * https://reacttraining.com/react-router/web/api/history
 *
 */
