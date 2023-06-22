// take a layout array of components and display it in a reordable list
import Typeahead from "@/components/Typeahead";
import { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Offcanvas,
  ButtonGroup,
  Tab,
  Nav,
  Toast,
} from "react-bootstrap";

import { Icon } from "@iconify/react";
import styles from "./LayoutEditor.module.css";
import modules from "@/components";
import ButtonBar from "@/components/DesignSystem/ButtonBar";
import NightSwitch from "@/components/Nightswitch";

// Drag and Drop
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import NavBar from "@/components/DesignSystem/NavBar.js";
import navTabs from "./navTabs";

const TabPane = ({ children, eventKey, defaultActiveKey, bgColor }) => {
  return (
    <Tab.Container
      defaultActiveKey={defaultActiveKey}
      id="left-tabs-example"
      style={{ backgroundColor: bgColor }}
    >
      <Row>
        <Col xs={12} md={12} lg={12}>
          <Nav variant="tabs" defaultActiveKey={defaultActiveKey}>
            <Nav.Item>
              <Nav.Link eventKey={eventKey}>{eventKey}</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12} lg={12}>
          <Tab.Content>
            <Tab.Pane eventKey={eventKey}>{children}</Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

const LayoutEditor = ({ layout, setLayout }) => {
  const [show, setShow] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleClose = () => setShow(false);

  const handleSave = () => {
    const newLayout = layout.map((item) => {
      return {
        ...item,
        key: item.key.toString(),
        component: item.component.toString(),
      };
    });
    localStorage.setItem("cfs-layout", JSON.stringify(newLayout));
  };

  navTabs.sort((a, b) => (a.label > b.label ? 1 : -1));

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)} style={{position: 'fixed', top: '0', left: '0', zIndex: '1000'}}>
        Edit Page Layout
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        style={{
          width: "100vw",
        }}
        className={styles.offcanvas}
      >
        <NavBar
          handleClose={handleClose}
          handleSave={handleSave}
          setShow={setShow}
        />
        {showToast && (
          <Toast onClose={() => setShowToast(false)} show={showToast}>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Bootstrap</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>{toastMessage}</Toast.Body>
          </Toast>
        )}

        <DrawerHeader
          handleClose={handleClose}
          handleSave={handleSave}
          setShow={setShow}
        />
        <Offcanvas.Body>
          <Container fluid>
            <Row
              className={styles.bgGray}
              style={{
                marginBottom: 0,
                paddingBottom: 0,
                height: "100vh",
                top: 60,
                overflowY: "auto",
                left: 0,
                right: 0,
              }}
            >
              <Col xs={12} md={2}>
                <ModuleLibrary
                  modules={modules.sort((a, b) => (a.name > b.name ? 1 : -1))}
                  layout={layout}
                  setLayout={setLayout}
                />
              </Col>
              <Col xs={12} md={8}>
                <LayoutSection layout={layout} setLayout={setLayout} />
              </Col>
            </Row>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

const DrawerHeader = ({ setShow, handleSave, setLayout, layout }) => {
  return (
    <Offcanvas.Header
      className={styles.bgGray}
      style={{
        position: "fixed",
        width: "100%",
      }}
    >
      <Offcanvas.Title>
        <Row>
          <Col xs={12} md={12} lg={12}>
            <h3 style={{ color: "#fff" }}>Layout Editor</h3>
            <Button variant="primary" onClick={() => setShow(false)}>
              Close
            </Button>
          </Col>
        </Row>
      </Offcanvas.Title>
      <div className={styles.displayNoneMobile}>
        <ButtonBar setShow={setShow} handleSave={handleSave} />
        <NightSwitch />
      </div>
    </Offcanvas.Header>
  );
};

const ModuleLibrary = ({ modules = [], layout = [], setLayout = () => {} }) => {
  useEffect(() => {
    console.log(layout);
  }, [layout]);
  return (
    <section className={styles.moduleLibrary}>
      <h2 style={{ fontSize: "1rem" }}>Module Library</h2>
      <Typeahead
        placeholder="Search for a module"
        items={modules}
        onClick={() => {}}
      />
      {modules.map((module, index) => {
        return (
          <Row key={index} className={styles.card} onMouseEnter={() => {}}>
            <Col>
              <Button
                key={index}
                variant="outline-secondary"
                style={{ margin: 5 }}
                onClick={() => {
                  setLayout([...layout, module]);
                }}
              >
                <Icon icon="mdi:plus" color="#fff" /><h3 className={styles.cardTitle}>{module.name}</h3>
              </Button>
              
            </Col>
          </Row>
        );
      })}
    </section>
  );
};

const LayoutSection = ({ layout = [], setLayout = () => {} }) => {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <>
      <div className={styles.stickyFooterMobile}>
        <h3 style={{ color: "#fff" }}>Layout</h3>
        <p style={{ fontSize: "1rem", color: "#fff" }}>
          <strong>{layout.length}</strong> modules on the page
        </p>
        <Button
          variant="outline-secondary"
          onClick={() => setIsEditing(!isEditing)}
        >
          <Icon icon="mdi:pencil" color="#fff" />
          {isEditing ? "Done Editing" : "Edit Layout"}
        </Button>
        {isEditing && (
          <>
          
          <Button variant="outline-secondary" onClick={() => setLayout([])}>
          <Icon icon="mdi:delete" color="#fff" />Clear Layout
          </Button>
          </>
        )}
      </div>

      <Row>
        <Col xs={12} md={12} lg={12}>
          <ButtonGroup>
            <Button variant="outline-secondary">Desktop</Button>
            <Button variant="outline-secondary">Tablet</Button>
            <Button variant="outline-secondary">Mobile</Button>
          </ButtonGroup>
        </Col>
      </Row>

      <DragDropContext
        onDragEnd={(result) => {
          console.log(result);
          const { source, destination } = result;
          if (!destination) {
            return;
          }
          if (
            source.index === destination.index &&
            source.droppableId === destination.droppableId
          ) {
            return;
          }
          const newLayout = Array.from(layout);
          const [removed] = newLayout.splice(source.index, 1);
          newLayout.splice(destination.index, 0, removed);
          setLayout(newLayout);
        }}
      >
        <Droppable droppableId="layout" type="layout">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {layout.map((item, index) => (
                <Draggable
                  key={index}
                  draggableId={index.toString()}
                  index={index}
                  // Only draggable if isEditing is true
                  isDragDisabled={!isEditing}
                >
                  {(provided, snapshot) => (
                    <div
                      style={{
                        ...provided.draggableProps.style,
                      }}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Row
                        style={{
                          padding: 10,
                          borderRadius: 5,
                          border: "1px solid #111",
                          backgroundImage: "#fff",
                          boxShadow: "0 0 10px rgba(0,0,0,0.2)",
                        }}
                      >
                        <Col xs={12}></Col>
                        <Col xs={12} md={12} lg={isEditing ? 3 : 1}>
                          {isEditing && (
                            <>
                              <p style={{ fontSize: "1rem", color: "#fff" }}>
                                <strong>Module:</strong> {item.name}
                              </p>
                              <p style={{ fontSize: "1rem", color: "#aaa" }}>
                                <strong>{index + 1}</strong> of {layout.length}
                              </p>

                              <Button
                                variant="outline-primary"
                                style={{ margin: 5 }}
                                onClick={() => {}}
                              >
                                Edit Module
                              </Button>
                              <Button
                                variant="outline-danger"
                                style={{ margin: 5 }}
                                onClick={() => {
                                  const newLayout = Array.from(layout);
                                  newLayout.splice(index, 1);
                                  setLayout(newLayout);
                                }}
                              >
                                Remove Module
                              </Button>
                            </>
                          )}
                        </Col>
                        <Col xs={12} md={12} lg={9}>
                          <Icon
                            className={styles.reorderIcon}
                            icon="fa:reorder"
                            style={{ marginRight: 12 }}
                          />
                          {item.component}
                        </Col>
                      </Row>
                    </div>
                  )}
                </Draggable>
              ))}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default LayoutEditor;
