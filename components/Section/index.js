import { useState, useEffect } from "react";
import { Container, Row, Col}  from "react-bootstrap";
const Section = ({ children, title }) => {
  return (
    <section id={title.toLowerCase().replace(" ", "-")}>
      <Container>
        <Row>
          <Col>
            <h2>{title}</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            {children}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section;