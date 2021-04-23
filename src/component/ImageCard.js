import React from "react";
import Favorite from "./Favorite";
import BreadcrumbHeader from "../stories/BreadcrumbsHeader";
import { Link } from "react-router-dom";

const base_url = "https://image.tmdb.org/t/p/original/";

function ImageCard({ image }) {
  const handleAddFavClick = () => {
    addFave(image.id);
  };
  const addFave = (faveId) => {
    return fetch("http://localhost:3000/" + faveId + "/favorite", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="card my-2">
      <div className="card">
        <Link to={"movie/" + image.id}>
          <div className="card-body">
            <img
              className="card-img-top"
              alt="movie poster"
              src={`${base_url}${image.backdrop_path || image.poster_path}`}
            />
          </div>
          <span className="card-title">
            {image.title || image.original_name}
          </span>
          <p className="card-text">{image.tagline}</p>
        </Link>
        <span
          onClick={(e) => handleAddFavClick(image.id)}
          className="btn btn-primary"
        >
          Add to Favorites
        </span>
      </div>
    </div>
  );
}

export default ImageCard;
