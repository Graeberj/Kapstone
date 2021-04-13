import React from 'react';
import PropTypes from 'prop-types';

import { Header } from './Header';
import './page.css';


export const Page = ({ user, onLogin, onLogout, onCreateAccount }) => (
<article>
  <Header user={user} onLogin={onLogin} onLogout={onLogout} onCreateAccount={onCreateAccount} />
    <section>
      <h2>Media Reviews...For YOU!!</h2>
      <p>Here you can research Movies with Reviews!!</p>
      <strong>Check out our See it or Skip It Label to know best movies to see!!</strong>
      <p>
        <strong>Are you looking for that movies you heard was sooooooo good?</strong>
        <li>Here at Media Reviews...For YOU!! We bring media reviews to you in one place!</li>
      </p>
      <div>
      
      <ul>
        <li>Look up media before wasting time watching a bad movie!</li>
        <li>PLACEHOLDER</li>
      </ul>
  
      <p>
         PLACEHOLDER
        
        .  PLACEHOLDER
       
        .  PLACEHOLDER
      </p>
      <div className="tip-wrapper">
        <span className="tip">Tip</span> PLACEHOLDER
        <svg width="10" height="10" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path
              d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"
              id="a"
              fill="#999"
              />
          </g>
        </svg>
        PLACEHOLDER
      </div>
      </div>
    </section>
  </article>
);


Page.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Page.defaultProps = {
  user: null,
};
