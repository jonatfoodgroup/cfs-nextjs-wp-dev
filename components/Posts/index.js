// Use gql to query the wp graphql api and display the categories

import React from "react";
import { useQuery } from "@apollo/client";
import GET_POSTS from "@/app/graphql/queries/GET_POSTS";
import client from "@/app/apollo-client";

const Posts = () => {
  const { loading, error, data } = useQuery(GET_POSTS, {
    client: client,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.posts.nodes.map((post, index) => (
        <li key={index}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </li>
      ))}
    </ul>
  );
}

export default Posts;
