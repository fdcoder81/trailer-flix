import React from "react";

import "./Content.scss";


const Content = ({ movie, id, toggleModal }) => {
  
  let title = "";
  if (movie) {
    movie.original_title === undefined
      ? (title = "original_name")
      : (title = "original_title");
  }

  return (
    <div className="modal">
      <div className="content">
        <div className="details">
        <div onClick={toggleModal} className="close-modal">X</div>
          <h1>{movie[title]}</h1>
          <p>{movie.overview}</p>
        </div>
        <div className="trailer">
            <iframe
              title={movie.title}
                className="video-background"
                src={`https://www.youtube.com/embed/${id}?&autoplay=1&mute=1`}
                allow="autoplay; encrypted-media"
                frameBorder="0"
                allowFullScreen
              ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Content;
