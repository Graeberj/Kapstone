import React from 'react';
// import PropTypes from 'prop-types';

//import { Button } from './Button';
import './Favoriteheader.css';
import film from './assets/filmstrip.png'





export const Favoriteheader = () => (
  <div className = "container">
  <div className="input-group input-group-sm mb-3">
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
  <span className="input-group-text" id="inputGroup-sizing-sm">Small</span>
</div>

    <div className="wrapper justify-content-center">
            <div className="display-3">I want to WATCH...</div>
            <img className ="FilmImage" src={film} class="rounded float-start" alt="Film"/>
          </div>
          </div>
  
       );
       
       