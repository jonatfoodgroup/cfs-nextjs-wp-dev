import { Container, Row, Col, ButtonGroup } from "react-bootstrap";
import Search from "../Search";
import CompanyLogo from "../CompanyLogo";
import NavMenu from "./Nav";
import TalkToAnExpert from "../CTAs/TalkToAnExpert";
import LanguageSelector from "../LanguageSelector";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <header data-aos="fade-down" data-aos-duration="750" data-aos-once="true" className={styles.header}>
      <Container>
        <Row>
          <Col xs={12} md={2}>
            <CompanyLogo src="https://via.placeholder.com/200x60" alt="Company Logo" />
          </Col>
          <Col xs={12} md={4}>
            <NavMenu />
          </Col>
          <Col xs={12} md={3}>
            <Search />
          </Col>
          <Col>
            <ButtonGroup>
              <TalkToAnExpert />
              <LanguageSelector />
            </ButtonGroup>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
