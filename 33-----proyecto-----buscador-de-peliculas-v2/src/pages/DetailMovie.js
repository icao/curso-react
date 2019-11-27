import React, { Component, Fragment } from "react";
import * as serviceApi from "../services/serviceOmdbAPI";
import * as Vibrant from "node-vibrant";

export class DetailMovie extends Component {
  state = {
    detail: null,
    colors: null
  };

  getDetailApi = () => {
    const { match } = this.props;
    serviceApi
      .getDetailMovie(match.params.id)
      .then(res => {
        console.log("responseeeeeeeeeee", res);
        this.setState({
          detail: res
        });
      })
      .then(() => {
        this.extractColors();
      });
  };

  extractPalette = imgSrc => {
    Vibrant.from(imgSrc)
      .getPalette()
      .then(palette => {
        console.log("PALETTE EXTRACTED", palette);
        this.setState({
          colors: palette
        });
      })
      .catch(error => {
        console.log("Error extracting colors from image ->", error);
      });
  };

  extractColors = () => {
    const { Poster } = this.state.detail;
    this.extractPalette(Poster);
  };

  /**
   * Life cycles
   */
  componentDidMount() {
    this.getDetailApi();
  }

  render() {
    const { history } = this.props;
    return this.state.detail && this.state.colors ? (
      <Fragment>
        <div className="container__banner__detail__movie">
          <div
            className="background__detail__movie filtered__banner"
            style={{ backgroundImage: `url(${this.state.detail.Poster})` }}
          ></div>
          <div className="container__detail__movie">
            <div className="section">
              <div className="container">
                <div className="columns">
                  <div className="column is-one-quarter">
                    <div className="container__image__movie">
                      <img
                        className="img__detail__movie"
                        src={this.state.detail.Poster}
                        alt={this.state.detail.Title}
                      />
                    </div>
                  </div>
                  <div className="column flex__column__end">
                    <div className="container__detail__rating">
                      <h2 className="detail__title">
                        {this.state.detail.Title}{" "}
                      </h2>
                      <span className="container__rating">
                        <span className="container__rating__star">
                          <svg
                            width="40px"
                            height="39px"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 40 39"
                            style={{
                              fill: this.state.colors.Vibrant.hex
                            }}
                          >
                            {/* fill: #24baef; */}
                            <title>play</title>
                            <path d="M19.633,-0.000 C21.509,0.035 21.530,1.174 22.167,2.414 C23.329,4.679 24.406,7.067 25.572,9.338 C25.853,9.886 26.431,11.640 26.918,11.834 C27.486,12.203 29.345,12.109 30.165,12.316 C32.170,12.825 34.489,12.860 36.500,13.364 C37.516,13.618 38.689,13.413 39.430,13.927 C39.689,14.107 39.770,14.504 39.984,14.732 C40.047,16.499 39.096,16.843 38.163,17.792 C36.473,19.509 34.784,21.227 33.095,22.944 C32.585,23.462 31.092,24.543 31.036,25.359 C31.423,25.951 31.307,27.455 31.511,28.258 C32.138,30.727 32.213,33.522 32.857,35.987 C33.142,37.078 33.016,38.241 32.303,38.724 C31.108,39.533 29.632,38.193 28.819,37.758 C26.695,36.623 24.601,35.624 22.483,34.457 C21.979,34.179 20.607,33.178 20.108,33.088 C19.748,33.023 18.163,34.107 17.812,34.296 C15.557,35.505 13.340,36.640 11.080,37.839 C10.548,38.120 9.180,39.226 8.309,38.966 C6.955,38.558 6.874,36.993 7.280,35.423 C7.716,33.733 7.697,31.880 8.151,30.109 C8.527,28.642 8.907,26.529 9.022,24.957 C8.092,24.344 7.202,23.107 6.408,22.300 C4.760,20.625 3.059,18.990 1.340,17.389 C0.646,16.742 -0.578,15.515 0.311,14.249 C0.915,13.388 2.364,13.656 3.557,13.364 C6.678,12.599 10.114,12.468 13.298,11.834 C14.186,9.747 15.306,7.711 16.307,5.716 C16.954,4.426 17.496,3.163 18.128,1.931 C18.334,1.531 18.358,1.093 18.603,0.724 C18.845,0.362 19.299,0.273 19.633,-0.000 Z"></path>
                          </svg>
                        </span>
                        <span className="container__rating__avg">
                          <span>
                            <span
                              className="detail__rating__text"
                              style={{
                                color: this.state.colors.Vibrant.hex
                              }}
                            >
                              {this.state.detail.imdbRating}
                            </span>
                            <span className="detail__rating__text-especific">
                              {" "}
                              / 10
                            </span>
                          </span>
                          <span className="detail__rating__text__mini">
                            {this.state.detail.imdbVotes} Votes
                          </span>
                        </span>
                      </span>

                      <div className="movie__meta">
                        <span className="detail__kind__rating">
                          {this.state.detail.Year}
                        </span>
                        <span className="detail__kind__rating">
                          {this.state.detail.Runtime}
                        </span>
                        <span className="detail__kind__rating">
                          {this.state.detail.Rated}
                        </span>
                        <span
                          className="detail__kind__rating"
                          style={{
                            color: this.state.colors.Vibrant.hex
                          }}
                        >
                          {this.state.detail.Genre}
                        </span>
                      </div>
                      <span>
                        <span
                          className="tag tag__movie is-warning"
                          style={{
                            backgroundColor: this.state.colors.LightVibrant.hex
                          }}
                        >
                          {this.state.detail.Type}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-full-fullhd is-full-widescreen  is-full-desktop is-full-tablet is-full-mobile">
                <p
                  className="detail__text"
                  style={{
                    color: this.state.colors.Vibrant.hex
                  }}
                >
                  <span>{this.state.detail.Plot}</span>
                </p>
                <br/>
                <p
                  className="detail__text"
                  style={{
                    color: this.state.colors.Vibrant.hex
                  }}
                >
                  Language: <span>{this.state.detail.Language}</span>
                </p>
                <p
                  className="detail__text"
                  style={{
                    color: this.state.colors.Vibrant.hex
                  }}
                >
                  Released: <span>{this.state.detail.Released}</span>
                </p>
                <p
                  className="detail__text"
                  style={{
                    color: this.state.colors.Vibrant.hex
                  }}
                >
                  Director: <span>{this.state.detail.Director}</span>
                </p>
                <p
                  className="detail__text"
                  style={{
                    color: this.state.colors.Vibrant.hex
                  }}
                >
                  Writer: <span>{this.state.detail.Writer}</span>
                </p>
                <p
                  className="detail__text"
                  style={{
                    color: this.state.colors.Vibrant.hex
                  }}
                >
                  Actors: <span>{this.state.detail.Actors}</span>
                </p>
              </div>
            </div>
            <div className="columns">
              <div className="column column is-full-fullhd is-full-widescreen  is-full-desktop is-full-tablet is-full-mobile">
                <button
                  className="button is-outlined is-white"
                  onClick={() => history.push("/")}
                >
                  Return
                </button>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    ) : (
      <div className="loader">Loading...</div>
    );
  }
}
