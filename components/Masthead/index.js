import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// Import local masthead styles
import styles from "./masthead.module.css";

const Masthead = () => {
  return (
    <section className={styles.masthead}>
      <Container>
        <Row>
          <Col>
            <h1>Masthead</h1>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Masthead;
