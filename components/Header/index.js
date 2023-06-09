import { useState, useEffect } from "react";
import { Container, Row, Col, } from "react-bootstrap";
import Search from "../Search";
import CompanyLogo from "../CompanyLogo";
import NavMenu from "./Nav";
import TalkToAnExpert from "../CTAs/TalkToAnExpert";
import LanguageSelector from "../LanguageSelector";

const Header = () => {
  return (
    <header>
      <Container>
        <Row>
          <Col>
            <CompanyLogo src="https://via.placeholder.com/200x60" alt="Company Logo" />
          </Col>
          <Col>
            <NavMenu />
          </Col>
          <Col>
            <Search />
          </Col>
          <Col>
            <TalkToAnExpert />
          </Col>
          <Col>
            <LanguageSelector />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
