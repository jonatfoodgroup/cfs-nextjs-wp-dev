// take a layout array of components and display it in a reordable list
import Typeahead from "@/components/Typeahead";
import { useEffect, useState } from "react";
import { Container, Row, Col, Button, Offcanvas }  from "react-bootstrap";

const LayoutEditor = ({ layout, setLayout }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (layout) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [layout]);

  const handleClose = () => setShow(false);

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Edit Layout
      </Button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Edit Layout</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Container>
            <Row>
              <Col xs={12} md={12} lg={12}>
                <ComponentLibrary />
              </Col>
            </Row>
            <Row>
              {layout.map((item, index) => (
                <Col key={index} xs={12} md={12} lg={12}>
                  <Button variant="primary" onClick={() => setLayout(layout.filter((item, i) => i !== index))}>
                    Remove
                  </Button>
                  <p>{item.name}</p>
                </Col>
              ))}
            </Row>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

const ComponentLibrary = () => {
  return (
    <>
      <h2>Component Library</h2>
      <p>Drag and drop components to add them to the layout.</p>
      <Typeahead placeholder="Search for a component" />
    </>
  );  
}

export default LayoutEditor;