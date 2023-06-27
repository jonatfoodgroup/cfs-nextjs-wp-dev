// Use gql to query the wp graphql api and display the categories

import React from "react";
import { useQuery } from "@apollo/client";
import GET_BRANDS from "@/app/graphql/queries/GET_BRANDS";
import client from "@/app/apollo-client";
import Row from "./Row";
const Brands = () => {
  const { loading, error, data } = useQuery(GET_BRANDS, {
    client: client,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <table>
      {data.brands.nodes.map((brand, index) => (
        <Row key={index} item={brand} />
      ))}
    </table>
  );
};

export default Brands;
