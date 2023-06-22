import GET_SEGMENTS from "@/app/graphql/queries/GET_SEGMENTS";
import { useQuery } from "@apollo/client";
import client from "@/app/apollo-client";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";
import Link from "next/link";

const SegmentsMenu = () => {
  const { loading, error, data } = useQuery(GET_SEGMENTS, {
    client: client,
  });
 

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <>
      <Row>
        <Col>
          <ul>
            {data.segments.nodes.map((segment) => (
              <li key={segment.id}>
                <Link href={`/segments/${segment.slug}`}>{segment.title}</Link>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </>
  );
};

export default SegmentsMenu;
