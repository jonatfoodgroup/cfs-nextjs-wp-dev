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
    <table>
      {data.posts.nodes.map((post, index) => (
        <tr key={index}>
          <td>{post.title}</td>
          <td>{post.excerpt}</td>
        </tr>
      ))}
    </table>
  );
};

export default Posts;
