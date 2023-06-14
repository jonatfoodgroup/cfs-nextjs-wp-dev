import { Popover } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Button, Popover, OverlayTrigger, FormControl } from "react-bootstrap";

const Share = ({
  networks = []
}) => {
  // A button with popover to share
  return (
    <>
      <Button variant="secondary" id="share">
        Share
      </Button>
      <OverlayTrigger
        trigger="click"
        key="bottom"
        placement="bottom"
        overlay={
          <Popover id="popover-positioned-bottom">
            <Popover.Title as="h3">Share</Popover.Title>
            <Popover.Content>
              {/* If networks, map through and display appropriate icons with tooltip */}
              { networks &&
                networks.map((network, index) => {
                  return (
                    <a
                      key={index}
                      href={network.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-secondary"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title={network.name}
                    >
                      <i className={`fa fa-${network.icon}`}></i>
                    </a>
                  );
                }
              )}
            </Popover.Content>
          </Popover>
        }
      >
        <Button variant="secondary">Share</Button>
      </OverlayTrigger>
    </>
  );
};

export default Share;