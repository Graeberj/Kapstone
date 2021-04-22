import React from "react";

import ImageCard from "./ImageCard";
import BreadcrumbHeader from "../stories/BreadcrumbsHeader";
import { useState, useEffect } from "react";
import { Favoriteheader } from "../stories/Favoriteheader";

function Favorite() {
  const [fave, setFave] = useState([]);
  const [faveDetail, setFaveDetail] = useState([]);

  const favoriteList = () => {
    fetch("http://localhost:3000/favorites")
      .then((res) => res.json())
      .then((data) => setFave(data));
  };

  const movieData = (movieId) => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=922f447f35d6ccb6a47a1fced73b5c71&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setFaveDetail((faveDetail) => [...faveDetail, data]));
  };

  useEffect(() => {
    favoriteList();
  }, []);

  useEffect(() => {
    fave.map((favorite) => movieData(favorite));
  }, [fave]);

  return (
    <div className="movie">
      <BreadcrumbHeader />
      <Favoriteheader />
      <div className="fluid-container sb-show-main d-flex flex-column align-items-center imagecard">
        <div className="row row-cols-1 row-cols-md-3 g-4 mx-5">
          {faveDetail &&
            faveDetail.map((favorite) => (
              <div className="col" key={favorite.id}>
                <ImageCard key={favorite.id} image={favorite} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Favorite;
