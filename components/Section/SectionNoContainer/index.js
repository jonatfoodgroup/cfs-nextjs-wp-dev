import { useState, useEffect } from "react";
import { Container, Row, Col}  from "react-bootstrap";

const SectionNoContainer = ({ children, title, backgroundColor  }) => {
  return (
    <section className="section" style={{ backgroundColor: backgroundColor }}  id={title.toLowerCase().replace(" ", "-")}>
      <Container>
        <Row>
          <Col>
            <h2 class="centered head-underline ">{title}</h2>
          </Col>
        </Row>
        </Container>
       
            {children}
       
    </section>
  );
}

export default SectionNoContainer;

