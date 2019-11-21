import React, {Fragment} from "react";
import Albums from "./joshGrobanAlbums.json";
import { Link } from "react-router-dom";

const About = () => {
  console.log("Albums", Albums);
  return (
    <Fragment>
      <h1>
        <span role="img" aria-label="emoji">
          🏡
        </span>{" "}
        About Page
      </h1>
      <div className="container">
        {/* Queremos hacer uso de react router para abrir una nueva sección
      donde se consulte la información de el album */}
        <h2 className="subtitle">Josh Groban Albums</h2>
        <ul>
          {Albums.map(album => {
            return (
              <li key={album.id}>
                <Link to={`/about/${album.id}`}>{album.alb}</Link>
              </li>
            );
          })}
        </ul>
        {/* Para esto creamos con el componente Link enlaces, donde pasaremos via url con la propiedad 'to' el is de nuestro album,
      el cual servirá para pasar de manera dinamica un parametro a la url. Este parametro se tiene que especificar en la creación del Route, especificando en el path el parametro dinamico, que será rescatado en el componente AlbumDetails para hacer uso de el.
      Revisar en el componente App.js como se declara.*/}
      </div>
    </Fragment>
  );
};

export default About;
