import React from 'react';
// import PropTypes from 'prop-types';

//import { Button } from './Button';
import './Favoriteheader.css';
import film from './assets/filmstrip.png'





export const Favoriteheader = () => (

          <div className="wrapper justify-content-center">
            <div className="display-3">I want to WATCH...</div>
            <img className ="FilmImage" src={film} class="rounded float-start" alt="Film"/>
          </div>
  
       );
       
       