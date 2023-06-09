import { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";

const LanguageSelector = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="language-selector">
        Language
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">English</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Spanish</Dropdown.Item>
        <Dropdown.Item href="#/action-3">French</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default LanguageSelector;