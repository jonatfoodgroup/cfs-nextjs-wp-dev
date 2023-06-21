import { useState, useEffect } from "react";
import { 
  Button, Popover, OverlayTrigger, FormControl, Form } from "react-bootstrap";
  var window;

const Share = () => {
  return (
    <>
      <OverlayTrigger
        trigger="click"
        key="bottom"
        placement="bottom"
        overlay={
          <Popover id={`popover-positioned-bottom`}>
            <Popover.Header as="h3">Share</Popover.Header>
            <Popover.Body>
              <FormControl type="text" placeholder="Enter URL" value={"http://google.com"} />
              <Button variant="primary" onClick={() => {navigator.clipboard.writeText("http://google.com")}}>Copy</Button>
            </Popover.Body>
          </Popover>
        }
      >
        <Button variant="secondary" id="share">
          Share
        </Button>
      </OverlayTrigger>
    </>
  );
};

export default Share;