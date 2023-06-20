import { Container, Row, Col } from "react-bootstrap";
import styles from "./EnlSignup.module.css";

//Build an email signup form with an image on the left in a react Component
    const EnlSignup = () => {
        return (
            <Container fluid className={styles.enlSignup}>
                <Row className="align-items-center">
           <Col md={4}>
            <div className="enl-signup-image">
                <img src="https://campbellsf1dev.wpengine.com/wp-content/uploads/2023/06/enl-signup-module-products.png" className="img-fluid" />
            </div>
            </Col>

            <Col md={2}>
            <h2>Sign up for our newsletter</h2>
                <p>Get the latest news and updates from Campbell's Foodserice.</p>
            </Col>
            <Col md={6}>
            <div className="enl-signup-form">
                <form>
                <input type="text" placeholder="Email Address" className={styles.enlSignupInput} />
                <input type="submit" value="Submit" className={styles.enlSignupSubmit} />
                </form>
            </div>
        </Col>
            </Row>
            </Container>
        );
        }
        export default EnlSignup;

