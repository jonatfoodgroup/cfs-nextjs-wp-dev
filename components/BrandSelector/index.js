import { useEffect, useState } from "react";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import client from "@/app/apollo-client";
import GET_BRANDS  from "@/app/graphql/queries/GET_BRANDS";

const BrandSelector = () => {
  const { loading, error, data } = useQuery(GET_BRANDS, {
    client: client,
  });


  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  if (!data) return null;
  return (
    <Container>
      <Row>
        <Col>
          <Tabs defaultActiveKey="all" id="brands">
            <Tab eventKey="all" title="All">
            </Tab>
            <Tab eventKey="soups" title="Soups, Meals & Sauces">
            </Tab>
            <Tab eventKey="snacks" title="Snacks & Beverages">
            </Tab>
          </Tabs> 
        </Col>
      </Row>
      <Row>
        <Col>
          <ul>
            {
              (data.brands.nodes.length > 0) &&
            data.brands.nodes.map((brand) => (
              <li key={brand.id}>
                <a href={`/brands/${brand.slug}`}>{brand.title}</a>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default BrandSelector;