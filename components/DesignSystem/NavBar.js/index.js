import { Navbar, Row, Col, Container } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Row>
          <Col>
            <Navbar.Brand href="#home">
              <img
                src="https://pbs.twimg.com/profile_images/2943667532/19dc14815b973d5bea0e80c7491876d3_400x400.png"
                style={{ width: "50px" }}
              />
            </Navbar.Brand>
          </Col>
          <Col>
            <h3 style={{ color: "#000" }}>Websites</h3>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default NavBar;
