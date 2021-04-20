import React from "react";
import PropTypes from "prop-types";

import { Favoriteheader } from "./Favoriteheader";
import "./Favoritepage.css";

export const Favoritepage = () => (
  <div className="container">
    <div className="row align-items-start">
      <div className="col">
        <div className="display-1 text-primary">Movies 🎞️</div>
        <table className="table text-primary">
          <thead>
            <tr>
              <th scope="col">Movie title</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">movie title</th>
            </tr>
            <tr>
              <th scope="row">movie title</th>
            </tr>
            <tr>
              <th scope="row">movie title</th>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="col">
        <div className="display-1 text-primary">TV 📺</div>
        <table className="table text-primary">
          <thead>
            <tr>
              <th scope="col text-primary">TV title</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">TV title</th>
            </tr>
            <tr>
              <th scope="row">TV title</th>
            </tr>
            <tr>
              <th scope="row">TV title</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default Favoritepage;
