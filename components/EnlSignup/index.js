import { Container, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import styles from "./EnlSignup.module.css";
import Image from 'next/image';
//Build an email signup form with an image on the left in a react Component
const EnlSignup = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Container fluid className={styles.enlSignup}>
      <Row className="align-items-center">
        <Col md={1}></Col>
        <Col sm={{order: 1, span: 5}} xs={{ order: 2 }} >
          <div data-aos="fade-up" data-aos-duration="750">
            <h2>Sign up for our newsletter</h2>
            <p>
              Get the latest news and updates from Campbell’s Foodservice.
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
        <Col sm={{ order: 2, span: 6}} xs={{ order: 1}}>
          <div className="enl-signup-image" data-aos="fade-up" data-aos-duration="750" data-aos-delay="500">
           
           
          <Image
        src="/enl-signup-module-products.png"
          height={394}
          width={1200}
          alt="Sign up for our newsletter"
          quality={100}
          style={{ width: "auto", height: "100%" }} // optional
          className="img-fluid" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default EnlSignup;
