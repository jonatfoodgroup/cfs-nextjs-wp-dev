import React, { use, useState, useEffect } from "react";

import { useQuery } from "@apollo/client";
import GET_HOME from "@/app/graphql/queries/GET_HOME";
import client from "@/app/apollo-client";
import { Container, Row, Col } from "react-bootstrap";


// use copy from Home page in wordpress:

const HomeContent = () => {
  const { loading, error, data } = useQuery(GET_HOME, {
    client: client,
  });

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    //use get_home to display the Content - thanks copilot:
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }} className="centered">
          <div dangerouslySetInnerHTML={{ __html: (data.page.content) }}></div>
        </Col>
      </Row>
    </Container>
  );
}
export default HomeContent;
