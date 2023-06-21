import { Button, ButtonGroup, Form } from "react-bootstrap";

const ButtonBar = ({ handleUpdate, handleSave, setAdd, setShow }) => (
  <ButtonGroup>
    <Button>Update Layout</Button>
    <Button>Save As</Button>
    <Button variant="primary" onClick={() => setAdd(true)}>
      Add Module
    </Button>
    <Button variant="primary" onClick={() => handleUpdate()}>
      Update Page
    </Button>
    <Button variant="primary" onClick={() => handleSave()}>
      Save Layout
    </Button>
    <Button variant="secondary" onClick={() => setShow(false)}>
      Cancel
    </Button>
    <Button variant="success" onClick={() => setShow(false)}>
      Share
    </Button>
  </ButtonGroup>
);

export default ButtonBar;
