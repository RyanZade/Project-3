/** @jsxImportSource @emotion/react */
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';

const colour = `#33FFFF`

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer css={css`
    padding: 20px;
    background-color: ${colour};
    font-size: 20px;
    text-align: center;
    min-width:1100px;
    `}>
      <div className="container text-center mb-5">
        {location.pathname !== '/' && (
          <button
            className="btn btn-dark mb-3"
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
        )}
        <h4>
          Made with{' '}
          <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >
            ❤️
          </span>{' '}
          by Ryan Zadeh.
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
