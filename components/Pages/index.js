// Use gql to query the wp graphql api and display the categories

import React from "react";
import { useQuery } from "@apollo/client";
import GET_PAGES from "@/app/graphql/queries/GET_PAGES";
import client from "@/app/apollo-client";

const Pages = () => {
  const { loading, error, data } = useQuery(GET_PAGES, {
    client: client,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <table>
    {data.pages.nodes.map((page, index) => (
        <tr key={index}>
          <td>Page</td>
          <td>{page.title}</td>
          <td>{page.excerpt}</td>
        </tr>
      ))}
    </table>
  );
}

export default Pages;