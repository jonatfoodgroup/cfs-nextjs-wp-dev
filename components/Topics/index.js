// Use gql to query the wp graphql api and display the categories

import React from "react";
import { useQuery } from "@apollo/client";
import GET_TAGS from "@/app/graphql/queries/GET_TAGS";
import client from "@/app/apollo-client";
import { Badge } from "react-bootstrap";

const Tags = () => {
  const { loading, error, data } = useQuery(GET_TAGS, {
    client: client,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <table>
      {data.tags.nodes.map((tag, index) => (
        <tr key={index}>
          <td>
            {tag.name}
          </td>
        </tr>
      ))}
    </table>
  );
};

export default Tags;
