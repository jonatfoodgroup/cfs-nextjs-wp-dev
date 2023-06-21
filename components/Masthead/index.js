import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// Import local masthead styles
import styles from "./masthead.module.css";

const Masthead = () => {
  return (

    
    <section className={styles.masthead}>
      <Row className={styles.homeMasthead}>
        <Col>
          <h1 className={styles.masthead__title}> headline to come</h1>
        </Col>
      </Row>
    </section>
  );
};

export default Masthead;
