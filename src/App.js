import React from "react";
import "./App.scss";
import nextArrow from "./images/next.png";
import prevArrow from "./images/prev.png";

import MovieItem from "./MovieItem";
import Content from "./Content";
import { getMoviesNow, getTvSeries, getMoviesByGenre, getMovieID } from "./api/getData";

class App extends React.Component {
  state = {
    moviesNow: [],
    tvSeries: [],
    horrorMovies: [],
    animation: [],
    contentMovie: [],
    movieTrailerID: '',
    translate: 0,
    showModal : false
  };

  moviesNowSection = React.createRef();
  tvSeriesSection = React.createRef();
  horrorMovieSection = React.createRef();
  animationSection = React.createRef();

  componentDidMount = async () => {
    const moviesNow = await getMoviesNow();
    const tvSeries = await getTvSeries();
    const horrorMovies = await getMoviesByGenre(27);
    const animation = await getMoviesByGenre(16);

    this.setState({ horrorMovies });
    this.setState({ moviesNow });
    this.setState({ tvSeries });
    this.setState({ animation });
  };

  toggleModal = () => {
    this.setState(prevState => ({showModal : !prevState.showModal}))
  }

  openContent = async contentMovie => {
    const movieTrailerID = await getMovieID(contentMovie.id);
    this.setState({ contentMovie , movieTrailerID });
    this.toggleModal();
  };

  handleNext = ref => e => {
    if (ref.current.style.transform === "") {
      this.setState({ translate: 0 }, () => {
        ref.current.style.transform = `translateX(${this.state.translate}%)`;
      });
    }

    if (!ref.current.style.transform.includes("300")) {
      this.setState(
        prevState => ({ translate: prevState.translate - 100 }),
        () => { 
          ref.current.style.transform = `translateX(${this.state.translate}%)`;
        }
      );
    }
  };

  handlePrev = ref => e => {
    if (this.state.translate !== 0) {
      this.setState(
        prevState => ({ translate: prevState.translate + 100 }),
        () => {
          ref.current.style.transform = `translateX(${this.state.translate}%)`;
        }
      );
    }
  };

  render() {
    return (
      <div className="container">
        <h1>Trailer Flix</h1>
        {
          this.state.showModal ? <Content movie={this.state.contentMovie} id={this.state.movieTrailerID} toggleModal={this.toggleModal} /> : null

        }

        <h1 className="section-title">Now playing</h1>
        <div className="wrapper">
          <div
            className="prevArrow"
            onClick={this.handlePrev(this.moviesNowSection)}
          >
            <img src={prevArrow} alt="" />
          </div>
          <div
            className="nextArrow"
            onClick={this.handleNext(this.moviesNowSection)}
          >
            <img src={nextArrow} alt="" />
          </div>
          <div ref={this.moviesNowSection} className="container-section">
            <MovieItem
              movies={this.state.moviesNow}
              openContent={this.openContent}
            />
          </div>
        </div>

        <h1 className="section-title">TV Series</h1>
        <div className="wrapper">
          <div
            className="prevArrow"
            onClick={this.handlePrev(this.tvSeriesSection)}
          >
            <img src={prevArrow} alt="" />
          </div>
          <div
            className="nextArrow"
            onClick={this.handleNext(this.tvSeriesSection)}
          >
            <img src={nextArrow} alt="" />
          </div>
          <div ref={this.tvSeriesSection} className="container-section">
            <MovieItem movies={this.state.tvSeries} openContent={this.openContent}/>
          </div>
        </div>

        <div className="wrapper">
          <div
            className="prevArrow"
            onClick={this.handlePrev(this.animationSection)}
          >
            <img src={prevArrow} alt="" />
          </div>
          <div
            className="nextArrow"
            onClick={this.handleNext(this.animationSection)}
          >
            <img src={nextArrow} alt="" />
          </div>
          <h1 className="section-title">Children & Family</h1>
          <div ref={this.animationSection} className="container-section">
            <MovieItem movies={this.state.animation} openContent={this.openContent} />
          </div>
        </div>

        <div className="wrapper">
          <div
            className="prevArrow"
            onClick={this.handlePrev(this.horrorMovieSection)}
          >
            <img src={prevArrow} alt="" />
          </div>
          <div
            className="nextArrow"
            onClick={this.handleNext(this.horrorMovieSection)}
          >
            <img src={nextArrow} alt="" />
          </div>
          <h1 className="section-title">Horror / Thriller Movies</h1>
          <div ref={this.horrorMovieSection} className="container-section">
            <MovieItem movies={this.state.horrorMovies} openContent={this.openContent} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
