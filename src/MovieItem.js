import React from "react";

import "./MovieItem.scss";

const image_url = "https://image.tmdb.org/t/p/w500";

const MovieItem = ({ movies, openContent }) => {
  let title = "";
  if (movies.length) {
    movies[0].original_title === undefined
      ? (title = "original_name")
      : (title = "original_title");
  }

  return movies
    ? movies.map(movie => {
        return (
          <div
            onClick={() => openContent(movie)}
            key={movie.id}
            className="item"
            style={{
              backgroundImage: `url(
                        ${image_url + movie.backdrop_path}
                      )`
            }}
          >
            <div className="footer">
              <p className="title">{movie[title]}</p>
            </div>
          </div>
        );
      })
    : null;
};

export default MovieItem;
