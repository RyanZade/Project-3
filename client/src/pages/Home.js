import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';
import { css } from '@emotion/react';

const Home = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  const loginButtonStyle = css`
    background-color: #38a169;
    color: #fff;
    margin-right: 1rem;
  `;

  const logoutButtonStyle = css`
    background-color: #e53e3e;
    color: #fff;
  `;

  return (
    <div>
      {loggedIn ? (
        <Button css={logoutButtonStyle} onClick={handleLogout}>
          Logout
        </Button>
      ) : (
        <Button css={loginButtonStyle} onClick={handleLogin}>
          Login
        </Button>
      )}
    </div>
  );
};

export default Home;
