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
        <h1>heading one</h1>
        <h2>heading two</h2>
        <h2 class="centered head-underline">heading two centered class</h2>
        <h3 class="centered">H3 Check out our complete portfolio of iconic brands</h3>

        <h4 class="centered">Check out our complete portfolio of iconic brands</h4>


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
                <img src />
                help to get feat image for each?
                excepert?

              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default BrandSelector;