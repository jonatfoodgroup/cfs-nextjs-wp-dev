// take a layout array of components and display it in a reordable list
import Typeahead from "@/components/Typeahead";
import { useEffect, useState } from "react";
import { Container, Row, Col, Button, Offcanvas, Accordion, ButtonGroup }  from "react-bootstrap";
// iconify icons
import { Icon, InlineIcon } from '@iconify/react';
import styles from "./LayoutEditor.module.css";

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
        Edit Page Layout
      </Button>
      <Offcanvas show={show} onHide={handleClose} style={{width: "75vw"}}>
        <Offcanvas.Header>
          <Offcanvas.Title>Edit Page Layout</Offcanvas.Title>
          <ButtonGroup>
            <Button variant="primary" onClick={() => setShow(false)}>Save</Button>
            <Button variant="secondary" onClick={() => setShow(false)}>Cancel</Button>
          </ButtonGroup>
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
                  <Panel title={item.name}>
                    {item.component}
                  </Panel>
                </Col>
              ))}
            </Row>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

const Panel = ({ title, children }) => {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header><Icon className={styles.reorderIcon} icon="fa:reorder" style={{marginRight: 12}} />{title}</Accordion.Header>
        <Accordion.Body>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <ModuleSettings />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <ComponentsLists />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <h3>Example</h3>
            </Col>
          </Row>
          {children}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

const ModuleSettings = ({
  settings = {},
  setSettings = () => {},
}) => {
  return (
    <>
      <h2>Module Settings</h2>
      <p>Change the settings for this module.</p>
      <Typeahead placeholder="Search for a setting" />
    </>
  );
}

const ComponentsLists = ({
  components = [],
}) => {
  return (
    <>
      <h3>Components used in this module</h3>
      <ul>
        <li>{'<Nav />'}</li>
        <li>{'<CompanyLogo />'}</li>
        <li>{'<Search  />'}</li>
        <li>{'<TalkToAnExpert />'}</li>
        <li>{'<LanguageSelector />'}</li>
      </ul>
    </>
  );
}
const ComponentLibrary = () => {
  return (
    <>
      <h2>Module Library</h2>
      <p>Drag and drop modules to add them to the layout. You can then customize your modules with the properties.</p>
      <Typeahead placeholder="Search for a module" />
    </>
  );  
}

export default LayoutEditor;