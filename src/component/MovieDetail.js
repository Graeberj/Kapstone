import React, { useEffect, useState } from "react";

function MovieDetail(props) {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    setMovie(
      (props.movie &&
        props.movie.find(
          (movie) => movie.id === Number(props.match.params.movieId)
        )) ||
        {}
    );
  });
  console.log(movie.id);
  return (
    <div>
      <h3>{movie.name}</h3>
      <div>{movie.review}</div>
    </div>
  );
}

export default MovieDetail;
