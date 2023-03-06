/** @jsxImportSource @emotion/react */
import React from 'react';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';
// import { Box, Center, Image, Flex, Badge, Text } from "@chakra-ui/react";
import { Button, ButtonGroup } from '@chakra-ui/react'

import Auth from '../../utils/auth';

const colour = '#33FFFF';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header css={css`
    padding: 50px;
    background-color: ${colour};
    font-size: 24px;
    border-radius: 4px;
    text-align: center;
    flex-row: justify-center;`}>
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="text-light" to="/">
            <h1 className="m-0">Job Posts</h1>
          </Link>
          <p className="m-0">Get into the mind of a programmer.</p>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
