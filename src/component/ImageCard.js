import React from "react";
import Favorite from "./Favorite";
import BreadcrumbHeader from "../stories/BreadcrumbsHeader";
import { Link } from "react-router-dom";

const base_url = "https://image.tmdb.org/t/p/original/";

function ImageCard({ image }) {
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
          <p className="card-text">
            Some quick example text to build on the card title
          </p>
        </Link>
        <span href="./Favorite" className="btn btn-primary">
          Add to Favorites
        </span>
      </div>
    </div>
  );
}

export default ImageCard;
