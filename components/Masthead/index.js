import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// Import local masthead styles
import styles from "./masthead.module.css";

const Masthead = () => {
  return (
    <>
      <Container fluid className={styles.masthead}>
        <Row>
          <Col>
            <h1 className={styles.title}>Masthead</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Masthead;
