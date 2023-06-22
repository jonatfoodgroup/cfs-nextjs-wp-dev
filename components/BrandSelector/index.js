import { useEffect, useState } from "react";
import { Button, Modal, Container, Row, Col, Tabs, Tab } from "react-bootstrap";

import { useQuery } from "@apollo/client";
import client from "@/app/apollo-client";
import GET_BRANDS from "@/app/graphql/queries/GET_BRANDS";
import styles from "./BrandSelector.module.css";


const BrandSelector = () => {
  const { loading, error, data } = useQuery(GET_BRANDS, {
    client: client,
  });

  const [brand, setBrand] = useState(null);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  if (!data) return null;
  return (
    <>
      <BrandModal brand={brand} setBrand={setBrand} />
      <Container>
        <Row>
          <Col>
            <h4 class="centered">
              Check out our complete portfolio of iconic brands
            </h4>

            <Tabs defaultActiveKey="all" id="brands">
              <Tab eventKey="all" title="All"></Tab>
              <Tab eventKey="soups" title="Soups, Meals & Sauces"></Tab>
              <Tab eventKey="snacks" title="Snacks & Beverages"></Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          {data.brands.nodes.length > 0 &&
            data.brands.nodes.map((brand) => <Brand brand={brand} key={brand.id} setBrand={setBrand} />)}
        </Row>
      </Container>
    </>
  );
};

const Brand = ({ brand, setBrand }) => {
  const [logoUrl, setLogoUrl] = useState(brand.brandFields.brandLogo);
  
  useEffect(() => {
    if (brand.brandFields.brandLogo) {
      setLogoUrl(brand.brandFields.brandLogo.sourceUrl);
    }
  }, [brand]);
  return (
    <Col className={styles.w20}>
      <a onClick={(e) => {
        e.preventDefault();
        setBrand(brand);
      }}>
        <img src={logoUrl} className="img-fluid" alt="{brand.title}" />

      </a>
    </Col>
  );
};

export default BrandSelector;


const BrandModal = ({
  brand,
  setBrand
}) => {
  if (!brand) return null;
  return (
    <>
      <Modal show={brand} onHide={() => setBrand(null)}>
        <Modal.Header closeButton>
          <Modal.Title>{brand.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={brand.featuredImage.node.guid} className="img-fluid" />
          <p>{brand.excerpt}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setBrand(null)}>
            Close
          </Button>
          <Button variant="primary" href={`/brands/${brand.slug}`}>
            Learn More
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}