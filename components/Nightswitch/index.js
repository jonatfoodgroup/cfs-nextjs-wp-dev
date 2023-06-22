import React, { useState } from "react";
import { Button, ButtonGroup, Form } from "react-bootstrap";

const NightSwitch = () => {
  const [isNight, setIsNight] = useState(false);
  const [isDay, setIsDay] = useState(true);

  const handleNight = () => {
    setIsNight(true);
    setIsDay(false);
  };

  const handleDay = () => {
    setIsNight(false);
    setIsDay(true);
  };

  return (
    <>
      <ButtonGroup>
      <Form.Check type="switch" id="custom-switch" label="Light/Dark Mode" style={{ marginLeft: "10px", background: "#222" }} />
      </ButtonGroup>
    </>
  );
};

export default NightSwitch;