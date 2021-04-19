import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import request from "../request";

import axios from "../axios";

import ImageCard from "./ImageCard";

function Movie({ movieOption }) {
  const [image, setImage] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const requests = await axios.get(movieOption);
      setImage(requests.data.results);
      return requests;
    }

    fetchData();
  }, []);

  return (
    <div className="movie">
      {image &&
        image.map((image) => (
          <Link to={`/movie/${image.id}`}>
            <ImageCard key={image.id} image={image} />
          </Link>
        ))}
    </div>
  );
}

export default Movie;
