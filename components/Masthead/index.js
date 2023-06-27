import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// Import local masthead styles
import styles from "./masthead.module.css";

const Masthead = () => {
  return (
    <section className={styles.masthead} data-aos="fade-in">
      <Row className={styles.homeMasthead}>
        <Col className={styles.homeMasthead__title}>
          <img src="https://campbellsf1dev.wpengine.com/wp-content/uploads/2023/06/home-headline-fullwidth.svg" alt="Get more with Campbell's" className={styles.masthead__title}  data-aos="fade-up" data-aos-delay="400" class="aos-init aos-animate"/>
        </Col>
      </Row>
    </section>
  );
};

export default Masthead;
