import { useState, useEffect } from "react";
import { Container, Row, Col, Placeholder } from "react-bootstrap";
import styles from "./homerecipes.module.css";

export function HomeRecipeBlock({
  link,
  icon,
  alttext,
  sectionCopy,
  linkCopy,
}) {
  return (
    <>
      <a href={link} className={styles.whatsNextBlockLink}>
        <div className={styles.whatsNextBlock}>
          <img className={styles.whatsNextIcon} src={icon} alt={alttext} />
          <p>
            {sectionCopy} <br />
            {linkCopy}
          </p>
        </div>
      </a>
    </>
  );
}

const HomeRecipes = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col>
            <div className="RecipeCatLinks centered">
            </div>
          </Col>
        </Row>
      </Container>

      <Container data-aos="fade-up" data-aos-duration="750">
        <Row className="justify-content-md-center">
          <Col md={5}>
            <img
              src="https://via.placeholder.com/650x650"
              className="img-fluid"
            />
            <h5>Title</h5>
            <p> description</p>
          </Col>
          <Col md={5}>
            <Row>
              <Col md={6}>
                <img
                  src="https://via.placeholder.com/300x300"
                  className="img-fluid"
                />
                <h5>Title</h5>
              </Col>

              <Col md={6}>
                <img
                  src="https://via.placeholder.com/300x300"
                  className="img-fluid"
                />
                <h5>Title</h5>
              </Col>
              <Col md={6}>
                <img
                  src="https://via.placeholder.com/300x300"
                  className="img-fluid"
                />
                <h5>Title</h5>
              </Col>

              <Col md={6}>
                <img
                  src="https://via.placeholder.com/300x300"
                  className="img-fluid"
                />
                <h5>Title</h5>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default HomeRecipes;
