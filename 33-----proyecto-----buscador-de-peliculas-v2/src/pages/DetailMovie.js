import React, { Component, Fragment } from "react";
import * as serviceApi from "../services/serviceOmdbAPI";
import * as Vibrant from "node-vibrant";

export class DetailMovie extends Component {
         state = {
           detail: {}
         };

         getDetailApi() {
           const { match } = this.props;
           serviceApi.getDetailMovie(match.params.id).then(res => {
             console.log(res);
             this.setState({
               detail: res
             });
           });
         }

         oStuffWithPalette = imgSrc => {
           Vibrant.from(imgSrc)
             .getPalette()
             .then(palette => {
               // console.log("PALLETA:", palette, JSON.stringify(palette));
               const cVibrant = palette.Vibrant;
               const cLightVibrant = palette.LightVibrant;
               const cDarkVibrant = palette.DarkVibrant;
               const cMuted = palette.Muted;
               const cLightMuted = palette.LightMuted;
               const cDarkMuted = palette.DarkMuted;

               console.log("vibrant", cVibrant.getTitleTextColor());
               console.log("TITLE COLOR", palette.getTitleTextColor());
               //  this.getHexColor(vibrantColor);
             })
             .then(() => {})
             .catch(error => {
               console.log("ERROR:", error);
             });
         };

         /**
          * Life cycles
          */
         componentDidMount() {
           this.getDetailApi();
         }

         render() {
           return this.state.detail ? (
             <section className="container">
               <div className="column is-full-fullhd is-full-widescreen  is-full-desktop is-full-tablet is-full-mobile">
                 <h2 className="detail__title">
                   {this.state.detail.Title}{" "}
                   <small className="detail__year">
                     {this.state.detail.Year}
                   </small>{" "}
                 </h2>
                 <img
                   src={this.state.detail.Poster}
                   alt={this.state.detail.Title}
                 />

                 <p>
                   <span className="tag is-warning">
                     <strong>{this.state.detail.Type}</strong>
                   </span>
                 </p>

                 <p className="detail__text">
                   Duration <span>{this.state.detail.Runtime}</span>
                 </p>
                 <p className="detail__text">
                   Language <span>{this.state.detail.Language}</span>
                 </p>
                 <p className="detail__text">
                   Genres <span>{this.state.detail.Genre}</span>
                 </p>
                 <p className="detail__text">
                   Released <span>{this.state.detail.Released}</span>
                 </p>
                 <p className="detail__text">
                   Director <span>{this.state.detail.Director}</span>
                 </p>
                 <p className="detail__text">
                   Writer <span>{this.state.detail.Writer}</span>
                 </p>
                 <p className="detail__text">
                   Actors <span>{this.state.detail.Actors}</span>
                 </p>
                 <p className="detail__text">
                   <span>{this.state.detail.Plot}</span>
                 </p>
               </div>
               {console.log(this.state.detail.Poster)}
               {this.oStuffWithPalette(this.state.detail.Poster)}
             </section>
           ) : (
             <div className="loader">Loading...</div>
           );
         }
       }
