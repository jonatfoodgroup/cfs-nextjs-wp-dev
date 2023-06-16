import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// Import local masthead styles
import styles from "./masthead.module.css";

const Masthead = () => {
  return (
    <section className={styles.masthead}>
        <Row>
          <Col>
          <h1 className={styles.masthead__title}>masthead__title</h1>
         <img src="https://campbellsf1dev.wpengine.com/wp-content/uploads/2023/06/fpo-masted.jpg" class="img-fluid" />
         add a mobile image alternative and css to swap
         *redo headline as live text
        
          </Col>
        </Row>
    </section>
  );
};

export default Masthead;
