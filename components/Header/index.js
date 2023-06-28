import { useState, useEffect } from "react";
import { Container, Row, Col, ButtonGroup } from "react-bootstrap";
import Search from "../Search";
import CompanyLogo from "../CompanyLogo";
import NavMenu from "./Nav";
import TalkToAnExpert from "../CTAs/TalkToAnExpert";
import LanguageSelector from "../LanguageSelector";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Header.module.css";

const Header = () => {
  // Fixed header after scroll down past 300px
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 800) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);
  return (
    <header data-aos="fade-down" data-aos-duration="750" data-aos-once="true" className={`${styles.header} ${isSticky ? styles.isSticky : ""}`}>
      <Container> 
        <Row className="align-items-center">
          <Col xs={12} md={1}>
            <CompanyLogo src="https://via.placeholder.com/200x60" alt="Company Logo" />
          </Col>
          <Col xs={12} md={6} style={{ 
            display: "flex", 
            justifyContent: "space-between",
            alignItems: "center"
          }} className="text-center">
            <NavMenu />
          </Col>
          <Col xs={12} md={3}>
            <Search />
          </Col>
          <Col className="text-end">
            <ButtonGroup>
              <TalkToAnExpert />
              {/* <LanguageSelector /> */}
            </ButtonGroup>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
