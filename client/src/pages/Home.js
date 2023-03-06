/** @jsxImportSource @emotion/react */
import React from 'react';
import { useQuery } from '@apollo/client';
import { css } from '@emotion/react';
// import { Box, Center, Image, Flex, Badge, Text } from "@chakra-ui/react";

import PostList from '../components/PostList';
import PostForm from '../components/PostForm';

import { QUERY_POSTS } from '../utils/queries';

const colour = '#33FFFF';

const Home = () => {
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];

  return (
    <main css={css`
    padding: 50px;
    background-color: ${colour};
    font-size: 24px;
    border-radius: 4px;
    text-align: center;
    flex-row: justify-center;`}>
      
      <div className="flex-row justify-center">
        <div css={css`border: 3px dotted`}
          className="col-12 col-md-10 mb-3 p-3"
        >
          <PostForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <PostList
              posts={posts}
              title="Some Feed for Post(s)..."
            />
          )}
        </div>
      </div>
      
    </main>
  );
};

export default Home;
