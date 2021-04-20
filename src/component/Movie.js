import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import request from "../request";

import axios from "../axios";

import ImageCard from "./ImageCard";
import BreadcrumbHeader from "../stories/BreadcrumbsHeader";

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
      <BreadcrumbHeader />
      <div className="fluid-container sb-show-main d-flex flex-column align-items-center imagecard">
        <div className="row row-cols-1 row-cols-md-3 g-4 mx-5">
          {image.map((image) => (
            <div className="col">
              <ImageCard key={image.id} image={image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Movie;
