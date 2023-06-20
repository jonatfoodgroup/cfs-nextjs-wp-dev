import { useEffect, useState } from "react";
import { Button, Modal, Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import client from "@/app/apollo-client";
import GET_BRANDS  from "@/app/graphql/queries/GET_BRANDS";
import styles from "./BrandSelector.module.css";
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
    <>
    <Container>
      <Row>
        <Col>
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
     </Container>
      
        <Container>
          <Row>


      
            {
              (data.brands.nodes.length > 0) &&
            data.brands.nodes.map((brand) => (
            
            <Col key={brand.id} className={styles.w20}>
               {/* <a href={`/brands/${brand.slug}`}>{brand.title}</a> */}
              <a href="#" data-toggle="modal" data-target="#exampleModalCenter">{brand.title}
                <img src={brand.featuredImage.node.guid} className="img-fluid" /></a> </Col>
            ))}


          </Row>
          </Container>
    </>
  );
}

export default BrandSelector;