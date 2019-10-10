import React from "react";

import "./Content.scss";


const Content = ({ movie, id }) => {
  
  return (
    <div className="modal">
      <div className="content">
        <div className="details">
          <h1>{movie.title}</h1>
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
