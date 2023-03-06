/** @jsxImportSource @emotion/react */
import React from 'react';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';
// import { Box, Center, Image, Flex, Badge, Text } from "@chakra-ui/react";
import { Button } from '@chakra-ui/react'

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
              <Link css={css`text-decoration: none;`} to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <Button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </Button>
            </>
          ) : (
            <>
            <Button css={css`
            background-color: lightblue;
            font-size: 20px;
            `}><Link css={css`text-decoration: none;`} to="/login">
                Login
              </Link></Button>
            <Button css={css`
            background-color: lightblue;
            font-size: 20px;
            `}>  <Link css={css`text-decoration: none;`} to="/signup">
                Signup
              </Link></Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
