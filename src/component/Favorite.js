import React from "react";

import { useState, useEffect } from "react";
import { Favoriteheader } from "../stories/Favoriteheader";
import { Favoritepage } from "../stories/Favoritepage";

function Favorite() {
  const [fave, setFave] = useState([]);

  //   const movieData = () => {
  //     const movieId = props.match.params.movieId;
  //     fetch(
  //       `https://api.themoviedb.org/3/movie/${movieId}?api_key=922f447f35d6ccb6a47a1fced73b5c71&language=en-US`
  //     )
  //       .then((res) => res.json())
  //       .then((data) => setMovieDetails(data));
  //   };
  //   useEffect(() => {
  //     movieData();
  //   }, []);

  const favoriteList = () => {
    fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((data) => setFave(data.favorites));
  };

  useEffect(() => {
    favoriteList();
  }, []);

  return (
    <div className="Favelist">
      <Favoriteheader />
      <div>{fave.forEach((favorite) => console.log(favorite))}</div>
    </div>
  );
}

export default Favorite;
