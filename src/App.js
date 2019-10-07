import React from "react";
import "./App.scss";
import nextArrow from "./images/next.png";
import prevArrow from "./images/prev.png";

import MovieItem from "./MovieItem";
import { getMoviesNow, getTvSeries, getMoviesByGenre } from "./api/getData";

class App extends React.Component {
  state = { moviesNow: [], tvSeries: [], actionMovies: [], animation: [] };

  containerSection = React.createRef();

  componentDidMount = async () => {
    const moviesNow = await getMoviesNow();
    const tvSeries = await getTvSeries();
    const actionMovies = await getMoviesByGenre(28);
    const animation = await getMoviesByGenre(16);

    this.setState({ actionMovies });
    this.setState({ moviesNow });
    this.setState({ tvSeries });
    this.setState({ animation });
  };

  handleClick = e => {
    console.log(this.containerSection.current.style);
    this.containerSection.current.style.transform = `translateX(-100%)`;
  };

  render() {
    return (
      <div className="container">
        <h1>Trailer Flix</h1>
        <button onClick={this.handleClick}>CLICK</button>

        <h1 className="section-title">Now playing</h1>
        <div ref={this.containerSection} className="container-section">
          <div className="prevArrow">
            <img src={prevArrow} alt="" />
          </div>
          <div className="nextArrow">
            <img src={nextArrow} alt="" />
          </div>
          <MovieItem movies={this.state.moviesNow} />
        </div>

        <h1 className="section-title">TV Series</h1>
        <div className="container-section">
          <MovieItem movies={this.state.tvSeries} />
        </div>

        <h1 className="section-title">Children & Family</h1>
        <div className="container-section">
          <MovieItem movies={this.state.animation} />
        </div>

        <h1 className="section-title">Action Movies</h1>
        <div className="container-section">
          <MovieItem movies={this.state.actionMovies} />
        </div>
      </div>
    );
  }
}

export default App;
