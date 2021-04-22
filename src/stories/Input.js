import React from "react";
import PropTypes from "prop-types";

import { Button } from "./Button";
import "./Input.css";

export const Input = () => (
  <div className="container sb-show-main">
    <div class="input-group mb-3">
      <span class="input-group-text" id="inputGroup-sizing-default">
        Search Movies or TV
      </span>
      <input
        type="text"
        class="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default"
      />
      <div />
    </div>
  </div>
);

export default Input;
