import { useEffect, useState } from "react";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import client from "@/app/apollo-client";
import GET_BRAND from "@/app/graphql/queries/GET_BRAND";

const BrandFeatures = ({attributeFootnote }) => {
  console.log(attributeFootnote);
  return (
    <>
      <Container className="footnote">
        <Row>
          <Col
            md={{ span: 4 }}
            className={"m-2"}
          >
          <p dangerouslySetInnerHTML={{ __html: attributeFootnote }}></p>
          </Col>
       
        </Row>
      </Container>
    </>
  );
};

export default BrandFeatures;
