import { useState, useEffect } from "react";
import { Button, OverlayTrigger, Popover } from "react-bootstrap";

const TalkToAnExpert = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <OverlayTrigger
        trigger="click"
        placement="bottom"
        show={show}
        overlay={
          <Popover id="popover-positioned-bottom">
            <Popover.Header as="h3">How can we help?</Popover.Header>
            <Popover.Body>
              <input type="text" placeholder="Start typing..." />
            </Popover.Body>
          </Popover>
        }
      >
        <Button variant="primary" onClick={() => setShow(!show)}>
          Talk to an expert
        </Button>
      </OverlayTrigger>
    </>
  );
};

export default TalkToAnExpert;
