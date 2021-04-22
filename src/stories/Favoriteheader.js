import React from "react";
import PropTypes from "prop-types";

import { Button } from "./Button";
import "./Favoriteheader.css";
import film from "./assets/review_film1.png";

export const Favoriteheader = () => (
  <div className="sb-show-main">
    <div className="container sb-show-main">
      <div className="sb-show-main  justify-content-center">
        <div className="text-primary display-3">
          <div>I want to WATCH...</div>
          <img
            className="FilmImage"
            src={film}
            class="sb-show-main"
            alt="Film"
          />
        </div>
      </div>
    </div>
  </div>
);
export default Favoriteheader;
