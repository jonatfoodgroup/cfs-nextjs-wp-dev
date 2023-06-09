import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Search from '../Search';

const Header = () => {
  return (
    <header>
      <Container>
        <Row>
          <Col>
            <h2>Company</h2>
          </Col>
          <Col>
            <Search />
          </Col>
        </Row>
      </Container>
    </header>
  )
}

export default Header;