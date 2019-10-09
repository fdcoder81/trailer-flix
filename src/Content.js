import React from "react";

import "./Content.scss";

const image_url = "https://image.tmdb.org/t/p/w500";

const Content = ({ movie }) => {
  return (
    <div className="modal">
      <div className="content">
        <div className="background">
          <div className="left"></div>
          <div
            style={{
              backgroundImage: `url(
                        ${image_url + movie.backdrop_path}
                      )`
            }}
            className="right"
          >
            <iframe
              className="video-background"
              src="https://www.youtube.com/embed/BrCKvKXvN2c?list=RDgfwMBzGA_Jo&autoplay=1&mute=1"
              allow="autoplay; encrypted-media"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="content-container">
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default Content;
