import { Container, Row, Col } from "react-bootstrap";
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
          <h2>Sign up for our newsletter</h2>
          <p>Get the latest news and updates from Campbell's Foodserice.</p>
          <div className="enl-signup-form">
            <form>
              <input
                type="text"
                placeholder="Email Address"
                className={styles.enlSignupInput}
              />
              <input
                type="submit"
                value="Submit"
                disabled={!checked}
                className={styles.enlSignupSubmit}
              />
              {/* Checkbox for marketing activities */}
              <div className={styles.enlSignupCheckbox}>
              <label for="marketing">
                <input
                  type="checkbox"
                  id="marketing"
                  name="marketing"
                  value="marketing"
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                />
                
                  I would like to receive marketing communications from
                  Campbell's Foodservice.
                </label>
              </div>
            </form>
          </div>
        </Col>
        <Col md={6}>
          <div className="enl-signup-image">
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
