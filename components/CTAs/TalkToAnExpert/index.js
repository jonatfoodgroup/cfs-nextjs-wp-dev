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
        <Button variant="link" onClick={() => setShow(!show)} style={{fontSize: '.8rem', color: '#B80720', marginTop: 0}}>
          Talk to an expert
        </Button>
      </OverlayTrigger>
    </>
  );
};

export default TalkToAnExpert;
