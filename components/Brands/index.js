// Use gql to query the wp graphql api and display the categories

import React from "react";
import { useQuery } from "@apollo/client";
import GET_BRANDS from "@/app/graphql/queries/GET_BRANDS";
import client from "@/app/apollo-client";
import { Badge } from "react-bootstrap";

const Brands = () => {
  const { loading, error, data } = useQuery(GET_BRANDS, {
    client: client,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.brands.nodes.map((brand, index) => (
        <li key={index}>
          <Badge pill variant="primary">
            {brand.title}
          </Badge>
        </li>
      ))}
    </ul>
  );
};

export default Brands;
