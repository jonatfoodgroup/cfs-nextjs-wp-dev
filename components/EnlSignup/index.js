import { Container, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import styles from "./EnlSignup.module.css";

//Build an email signup form with an image on the left in a react Component
const EnlSignup = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Container fluid className={styles.enlSignup}>
      <Row className="align-items-center">
        <Col md={1}></Col>
        <Col md={5}>
          <div data-aos="fade-up" data-aos-duration="750">
            <h2>Sign up for our newsletter</h2>
            <p>
              Get the latest news and updates from Campbell&apos;s Foodservice.
            </p>
            <div className="enl-signup-form">
              <form>
                <input
                  type="text"
                  placeholder="Email Address"
                  className={styles.enlSignupInput}
                />
                <Button
                  type="submit"
                  value="Submit"
                  className={styles.enlSignupSubmit}
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <div className="enl-signup-image" data-aos="fade-up" data-aos-duration="750" data-aos-delay="500">
            <img
              src="https://campbellsf1dev.wpengine.com/wp-content/uploads/2023/06/enl-signup-module-products.png"
              className="img-fluid"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default EnlSignup;
