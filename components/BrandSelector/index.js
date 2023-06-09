import { useState } from "react";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";


const BrandSelector = ({ brands }) => {
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
            
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default BrandSelector;