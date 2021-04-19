import React from "react";
import { Link } from "react-router-dom";

const base_url = "https://image.tmdb.org/t/p/original/";

function ImageCard({ image, setMovieOption }) {
  console.log(image.id);
  return (
    <div className="imageCard">
      <img
        src={`${base_url}${image.backdrop_path || image.poster_path}`}
        alt={`${image.title}`}
      />

      <h2>{image.title || image.original_name}</h2>
      <p>Favorite?</p>
      {/* req to backend to see if movie is currently in favorites array */}
    </div>
  );
}

export default ImageCard;
