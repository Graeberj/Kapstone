import React, { useEffect, useState } from "react";
import Favoriteheader from "../stories/Favoriteheader";
import BreadcrumbsHeader from "../stories/BreadcrumbsHeader";

import { fetchMovieDetails } from "../request";
import Review from "./Review";

const MovieDetail = (props) => {
  const [movieDetails, setMovieDetails] = useState({});

  const movieData = () => {
    const movieId = props.match.params.movieId;
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=922f447f35d6ccb6a47a1fced73b5c71&language=en-US`
    )
      // axios.get(baseURL + 'aslfkdjsljdf', data)
      .then((res) => res.json())
      .then((data) => setMovieDetails(data));
  };
  useEffect(() => {
    movieData();
  }, []);

  return (
    <>
      <Favoriteheader />
      <div className="movieDetail">
        <h1>{movieDetails.original_title}</h1>
        <img
          src={`https://image.tmdb.org/t/p/original/${
            movieDetails.backdrop_path || movieDetails.poster_path
          }`}
          alt={MovieDetail.original_title}
        />
      </div>
      <div>{movieDetails.overview}</div>
      <Review />
    </>
  );
};

export default MovieDetail;
