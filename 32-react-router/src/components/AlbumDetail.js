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
