import { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const ItemCarousel = ({ items, count }) => {
  return (
    <Container>
      <Row>
        {items.map((item, index) => (
          <Col key={index} md={count}>
            <Card>
              <Card.Img variant="top" src={item.src} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ItemCarousel;
