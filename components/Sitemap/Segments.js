import React from "react";
import { useQuery } from "@apollo/client";
import GET_SEGMENTS from "@/app/graphql/queries/GET_SEGMENTS";
import client from "@/app/apollo-client";
import Row from "@/components/Sitemap/Row";

const Segments = () => {
  const { loading, error, data } = useQuery(GET_SEGMENTS, {
    client: client,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <table>
      {data.segments.nodes.map((segment, index) => (
        <Row key={index} item={segment} />
      ))}
    </table>
  );
};

export default Segments;
